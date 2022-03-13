
namespace WebVersionGeneratorLibrary
{
	using System.Collections.Generic;
	using System.Linq;

	public class JsonFilesHandler
	{
		public static void CopyJsonFiles(ISquirrelTranspiler squirrelTranspiler)
		{
			string webVersionSourceCodeFolder = Util.GetWebVersionSourceCodeFolder();

			List<FileNameInfo> files = Util.GetAllFilesInSuperTuxAdvanceSourceCodeFolder()
				.Where(x => x.FileExtension.ToLowerInvariant() == "json")
				.ToList();
			
			string jsonDataJsFileContents = "";

			foreach (FileNameInfo file in files)
			{
				string fileContents = Util.GetFileContentsAsString(file.FullyQualifiedFileName);
				string transpiledFileContents = SquirrelTranspilationUtil.TranspileEmbeddedSquirrelCodeInDataFile(fileContents: fileContents, squirrelTranspiler: squirrelTranspiler);

				jsonDataJsFileContents += "window.superTuxAdvanceWebVersion.simulatedFileSystem.addFile( \n";
				jsonDataJsFileContents += $"    '{file.PartiallyQualifiedFileName}', \n";
				jsonDataJsFileContents += $"    `{transpiledFileContents.Replace("\\", "\\\\").Replace("`", "\\`")}` \n";
				jsonDataJsFileContents += "); \n\n";
			}

			Util.WriteFileContents(
				fileName: webVersionSourceCodeFolder + "output/data/jsonFiles.js",
				text: jsonDataJsFileContents);
		}
	}
}
