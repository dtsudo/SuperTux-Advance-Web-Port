
namespace WebVersionGeneratorLibrary
{
	using System;
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;

	public class JsonFilesHandler
	{
		public static void CopyJsonFiles(ISquirrelTranspiler squirrelTranspiler, bool keepPreviouslyGeneratedFiles, bool verbose)
		{
			string webVersionSourceCodeFolder = Util.GetWebVersionSourceCodeFolder();

			string partiallyQualifiedOutputFileName = "output/data/jsonFiles.js";
			string fullyQualifiedOutputFileName = webVersionSourceCodeFolder + partiallyQualifiedOutputFileName;

			if (keepPreviouslyGeneratedFiles && File.Exists(fullyQualifiedOutputFileName))
			{
				if (verbose)
					Console.WriteLine(partiallyQualifiedOutputFileName + " already exists");
				return;
			}

			List<FileNameInfo> files = Util.GetAllFilesInSuperTuxAdvanceSourceCodeFolderInSortedOrder()
				.Where(x => x.FileExtension.ToLowerInvariant() == "json")
				.ToList();
			
			string jsonDataJsFileContents = "";

			foreach (FileNameInfo file in files)
			{
				if (verbose)
					Console.WriteLine("Copying " + file.PartiallyQualifiedFileName);

				string fileContents = Util.GetFileContentsAsString(file.FullyQualifiedFileName);
				string transpiledFileContents;

				try
				{
					transpiledFileContents = SquirrelTranspilationUtil.TranspileEmbeddedSquirrelCodeInDataFile(fileContents: fileContents, squirrelTranspiler: squirrelTranspiler);
				}
				catch (SquirrelTranspilationException e)
				{
					Console.WriteLine("Failed to transpile file: " + file.PartiallyQualifiedFileName);
					throw new Exception(message: e.Message);
				}

				jsonDataJsFileContents += "window.superTuxAdvanceWebVersion.simulatedFileSystem.addFile( \n";
				jsonDataJsFileContents += $"    '{file.PartiallyQualifiedFileName}', \n";
				jsonDataJsFileContents += $"    `{transpiledFileContents.Replace("\\", "\\\\").Replace("`", "\\`")}` \n";
				jsonDataJsFileContents += "); \n\n";
			}

			Util.WriteFileContents(
				fileName: fullyQualifiedOutputFileName,
				text: jsonDataJsFileContents);
		}
	}
}
