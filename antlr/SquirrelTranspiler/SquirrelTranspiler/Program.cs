
namespace SquirrelTranspiler
{
	using Antlr4.Runtime;
	using Antlr4.Runtime.Misc;
	using System;
	using System.Collections.Generic;
	using System.Diagnostics;
	using System.IO;
	using System.Linq;
	using System.Text;

	public class Program
	{
		public static void Main(string[] args)
		{
			
			string text = @"

";
			Console.WriteLine(TranspileSquirrelCode(text));

			DoEverything();
		}

		private static void DoEverything()
		{
			CopyImageFiles();
			CopyDataFiles();
			TranspileAllSquirrelCode();
			TranspileTopLevelCode();
		}

		private static void TranspileTopLevelCode()
		{
			string code = @"
				setResolution(320, 240)

				gvScreen = newTexture(screenW(), screenH())
				gvPlayScreen = newTexture(screenW(), screenH())
				bgPause = newTexture(screenW(), screenH())
				gvLightScreen = newTexture(screenW(), screenH())
				textureSetBlendMode(gvLightScreen, bm_sub)

				//Set up window
				setWindowTitle(""SuperTux Advance"")
				setWindowIcon(""icon.png"")
				tileSearchDir.push(""res"")
				tileSearchDir.push(""res/gfx"")
				tileSearchDir.push(""res/map"")
				tileSearchDir.push(""res/snd"")
				setFPS(60)

				//Load game text
				if(fileExists(""config.json"")) config = jsonRead(fileRead(""config.json""))
				gvLangObj = jsonRead(fileRead(""lang/en.json""))
				gvLangObj = mergeTable(gvLangObj, jsonRead(fileRead(""lang/"" + config.lang + "".json"")))

				//Set difficulty strings
				strDifficulty = [
					gvLangObj[""difficulty-levels""][""easy""],
					gvLangObj[""difficulty-levels""][""normal""],
					gvLangObj[""difficulty-levels""][""hard""],
					gvLangObj[""difficulty-levels""][""super""]
				]

				print(""Launching SuperTux Advance v."" + gvVersion + ""..."")
				startMain()
				menu = meMain
				config.playerchar = ""Tux""
				//startPlay(""res/map/mario0.json"")

				update()
			";

			string transpiledCode = TranspileSquirrelCode(str: code);

			transpiledCode = "if (!window.jsFiles) \n \t window.jsFiles = []; \n\n"
				+ "window.jsFiles.push(function () {" + "\n\n\n"
				+ transpiledCode + "\n\n\n"
				+ "});";

			WriteFileContents(
				fileName: GetMainDirectory() + "../sample-brux-project/helperFileTranspiled.js",
				text: transpiledCode);
		}

		private static void CopyImageFiles()
		{
			string mainDirectory = GetMainDirectory();

			List<string> files = new List<string>();
			
			files.AddRange(Directory.GetFiles(mainDirectory + "contrib/frostlands/gfx/", "*.png"));
			files.AddRange(Directory.GetFiles(mainDirectory + "res/gfx/", "*.png"));

			if (!Directory.Exists(mainDirectory + "../sample-brux-project/imageFiles/"))
				Directory.CreateDirectory(mainDirectory + "../sample-brux-project/imageFiles/");

			string imageJsFileContents = "if (!window.imageFiles) window.imageFiles = {}; \n";
			imageJsFileContents += "window.imageFiles.imageList = []; \n";

			for (int i = 0; i < files.Count; i++)
			{
				string file = files[i];
				string partialFileName = file.Substring(mainDirectory.Length);

				string fileContents = GetFileContents(file);
				WriteFileContents(mainDirectory + "../sample-brux-project/imageFiles/file" + i + ".png", fileContents);

				imageJsFileContents += $"window.imageFiles.imageList.push({{ originalName: '{partialFileName}', fileLocation: 'imageFiles/file{i}.png' }}); \n";

				imageJsFileContents += RegisterFileInFolderStructure(partialFileName);
			}

			WriteFileContents(
				fileName: mainDirectory + "../sample-brux-project/images.js",
				text: imageJsFileContents);
		}

		private static void CopyDataFiles()
		{
			string mainDirectory = GetMainDirectory();

			List<string> files = new List<string>();

			files.AddRange(Directory.GetFiles(mainDirectory + "contrib/extras/", "*.json"));
			files.AddRange(Directory.GetFiles(mainDirectory + "contrib/frostlands/TBA/"));
			files.AddRange(Directory.GetFiles(mainDirectory + "contrib/frostlands/", "*.json"));
			files.AddRange(Directory.GetFiles(mainDirectory + "lang/"));
			files.AddRange(Directory.GetFiles(mainDirectory + "res/map/", "*.json"));
			files.AddRange(Directory.GetFiles(mainDirectory + "res/", "*.json"));

			if (!Directory.Exists(mainDirectory + "../sample-brux-project/dataFiles/"))
				Directory.CreateDirectory(mainDirectory + "../sample-brux-project/dataFiles/");
			
			string htmlFileContents = GetFileContents(mainDirectory + "../sample-brux-project/program.html");
			int index1 = htmlFileContents.IndexOf("<!-- DATA FILES -->");
			int index2 = htmlFileContents.IndexOf("<!-- END OF DATA FILES -->");

			string newHtmlFileContents = htmlFileContents.Substring(0, index1)
				+ "<!-- DATA FILES --> \n";

			for (int i = 0; i < files.Count; i++)
			{
				string file = files[i];
				string partialFileName = file.Substring(mainDirectory.Length);
				CopyDataFile(file, partialFileName, mainDirectory, i);

				newHtmlFileContents += "\t<script src='dataFiles/file" + i + ".js'></script> \n";
			}

			newHtmlFileContents += "\t" + htmlFileContents.Substring(index2);

			WriteFileContents(
				fileName: mainDirectory + "../sample-brux-project/program.html",
				text: newHtmlFileContents);
		}

		private static string TranspileEmbeddedSquirrelCodeInDataFile(string fileContents, int searchStart)
		{
			string searchTerm = "\"name\":\"code\",\"type\":\"string\",\"value\":\"";

			int index = fileContents.IndexOf(searchTerm, startIndex: searchStart);

			if (index == -1)
				return fileContents;

			int startIndex = index + searchTerm.Length;
			int endIndex = startIndex;
			while (true)
			{
				if (fileContents[endIndex] == '"' && fileContents[endIndex - 1] != '\\')
					break;
				endIndex++;
			}

			string code = fileContents.Substring(startIndex, endIndex - startIndex)
				.Replace(@"\n", "\n")
				.Replace("\\\"", "\"");

			string transpiledCode = "/*js*/" + TranspileSquirrelCode(code).Replace("\n", "\\n").Replace("\"", "\\\"");

			string modifiedDataFile = fileContents.Substring(0, startIndex) + transpiledCode + fileContents.Substring(endIndex);
			return TranspileEmbeddedSquirrelCodeInDataFile(modifiedDataFile, endIndex);
		}

		private static string RegisterFileInFolderStructure(string filePath)
		{
			string str = " if (!window.folderStructure) window.folderStructure = {}; \n";

			string[] fileParts = filePath.Split('\\', '/');

			for (int i = 1; i <= fileParts.Length; i++)
			{
				List<string> path = fileParts.Take(i).ToList();
				
				string pathString = path.Aggregate("", (x, y) => x + "['" + y + "']");
				str += $"if (!window.folderStructure{pathString}) window.folderStructure{pathString} = {{}}; \n";
			}

			return str;
		}

		private static void CopyDataFile(string fileName, string partialFileName, string mainDirectory, int index)
		{
			string fileContents = GetFileContents(fileName);

			fileContents = TranspileEmbeddedSquirrelCodeInDataFile(fileContents, 0);
			
			fileContents = "if (!window.files) window.files = {}; \n"
				+ "window.files['" + partialFileName + "'] = ` \n"
				+ fileContents.Replace(@"\", @"\\").Replace("`", @"\`")
				+ "`; \n\n";

			fileContents += RegisterFileInFolderStructure(partialFileName);

			WriteFileContents(mainDirectory + "../sample-brux-project/dataFiles/file" + index + ".js", fileContents);
		}

		private static void TranspileAllSquirrelCode()
		{
			List<string> fileNames = new List<string>()
			{
				"src/util.nut",
				"src/text.nut",
				"src/shapes.nut",
				"src/tilemap.nut",
				"src/assets.nut",
				"src/global.nut",
				"src/controls.nut",
				"src/menus.nut",
				"src/gmmain.nut",
				"src/gmplay.nut",
				"src/gmpause.nut",
				"src/physactor.nut",
				"src/tux.nut",
				"src/konqi.nut",
				"src/items.nut",
				"src/effects.nut",
				"src/enemies.nut",
				"src/bosses.nut",
				"src/debug.nut",
				"src/bg.nut",
				"src/trigger.nut",
				"src/water.nut",
				"src/levelend.nut",
				"src/platforms.nut",
				"src/blocks.nut",
				"src/weapons.nut",
				"src/overworld.nut",
				"src/secret.nut",
				"src/npc.nut",
				"src/languagemenu.nut",
				"src/contriblevels.nut",
				"src/save.nut",
				"src/zlist.nut",
				"src/pickchar.nut",
				"src/weather.nut",
				"src/light.nut",
				"src/credits.nut",
				"src/charselect.nut"
			};

			string mainDirectory = GetMainDirectory();

			List<string> outputFileNames = new List<string>();
			
			if (!Directory.Exists(mainDirectory + "../sample-brux-project/transpiledSquirrelCode/"))
				Directory.CreateDirectory(mainDirectory + "../sample-brux-project/transpiledSquirrelCode/");

			foreach (string fileName in fileNames)
			{
				string fullyQualifiedName = mainDirectory + fileName;

				string fileContents = GetFileContents(fileName: fullyQualifiedName);

				string transpiledCode = TranspileSquirrelCode(str: fileContents);

				transpiledCode = "if (!window.jsFiles) \n \t window.jsFiles = []; \n\n"
					+ "window.jsFiles.push(function () {" + "\n\n\n"
					+ transpiledCode + "\n\n\n"
					+ "});";

				string outputFileName = "transpiledSquirrelCode/" + GetNonQualifiedName(fullyQualifiedName).Replace(".nut", ".js");
				outputFileNames.Add(outputFileName);

				WriteFileContents(
					fileName: mainDirectory + "../sample-brux-project/" + outputFileName,
					text: transpiledCode);
			}

			string htmlFileContents = GetFileContents(mainDirectory + "../sample-brux-project/program.html");
			int index1 = htmlFileContents.IndexOf("<!-- TRANSPILED SQUIRREL CODE -->");
			int index2 = htmlFileContents.IndexOf("<!-- END OF TRANSPILED SQUIRREL CODE -->");

			htmlFileContents = htmlFileContents.Substring(0, index1)
				+ "<!-- TRANSPILED SQUIRREL CODE --> \n"
				+ outputFileNames.Select(x => "\t<script src='" + x + "'></script> \n").Aggregate("", (x, y) => x + y)
				+ "\t"
				+ htmlFileContents.Substring(index2);

			WriteFileContents(
				fileName: mainDirectory + "../sample-brux-project/program.html",
				text: htmlFileContents);
		}

		private static string GetNonQualifiedName(string fullyQualifiedName)
		{
			int index = Math.Max(fullyQualifiedName.LastIndexOf("/", StringComparison.Ordinal), fullyQualifiedName.LastIndexOf("\\", StringComparison.Ordinal));

			if (index == -1)
				return fullyQualifiedName;

			return fullyQualifiedName.Substring(index + 1);
		}

		private static string GetMainDirectory()
		{
			string path = GetExecutablePath();
			
			if (Directory.Exists(path + "/supertux-advance"))
				return path + "/supertux-advance" + "/";
			
			while (true)
			{
				int i = Math.Max(path.LastIndexOf("/", StringComparison.Ordinal), path.LastIndexOf("\\", StringComparison.Ordinal));

				if (i == -1)
					throw new Exception("Cannot find directory");

				path = path.Substring(0, i);

				if (Directory.Exists(path + "/supertux-advance"))
					return path + "/supertux-advance" + "/";
			}
		}

		private static string GetExecutablePath()
		{
			string executablePath = Process.GetCurrentProcess().MainModule.FileName;
			DirectoryInfo executableDirectory = Directory.GetParent(executablePath);

			return executableDirectory.FullName;
		}

		private static void WriteFileContents(string fileName, string text)
		{
			using (FileStream fileStream = new FileStream(path: fileName, mode: FileMode.Create))
			{
				using (BinaryWriter binaryWriter = new BinaryWriter(fileStream))
				{
					foreach (char c in text)
					{
						byte b = (byte)c;
						binaryWriter.Write(b);
					}
				}
			}
		}

		private static string GetFileContents(string fileName)
		{
			StringBuilder str = new StringBuilder();

			using (FileStream fileStream = new FileStream(path: fileName, mode: FileMode.Open, access: FileAccess.Read))
			{
				using (BinaryReader binaryReader = new BinaryReader(fileStream))
				{
					try
					{
						while (true)
						{
							byte b = binaryReader.ReadByte();
							char c = (char)b;
							str.Append(c);
						}
					}
					catch (EndOfStreamException)
					{
					}
				}
			}

			return str.ToString();
		}

		private static string TranspileSquirrelCode(string str)
		{
			AntlrInputStream inputStream = new AntlrInputStream(str);
			SquirrelLexer squirrelLexer = new SquirrelLexer(inputStream);
			CommonTokenStream commonTokenStream = new CommonTokenStream(squirrelLexer);

			/*
				commonTokenStream.Fill();
				List<IToken> tokens = commonTokenStream.GetTokens().ToList();
			
				for (int i = 0; i < tokens.Count; i++)
				{
					string token = tokens[i].Text;
					Console.WriteLine(i + ": " + ( token == "\n" || token == "\r\n" ? "NEWLINE" : token ));
				}

				Console.WriteLine("End of tokens");
			*/

			SquirrelParser squirrelParser = new SquirrelParser(commonTokenStream);
			SquirrelParser.StatsContext context = squirrelParser.stats();
			TranspilerVisitor visitor = new TranspilerVisitor();

			string transpiledOutput = visitor.Visit(context);

			return transpiledOutput;
		}
	}
}
