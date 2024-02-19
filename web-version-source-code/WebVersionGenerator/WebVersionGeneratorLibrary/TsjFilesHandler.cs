
namespace WebVersionGeneratorLibrary
{
	using System;
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;

	public class TsjFilesHandler
	{
		public static void CopyTsjFiles(bool keepPreviouslyGeneratedFiles, bool verbose)
		{
			string webVersionSourceCodeFolder = Util.GetWebVersionSourceCodeFolder();

			string partiallyQualifiedOutputFileName = "output/data/tsjFiles.js";
			string fullyQualifiedOutputFileName = webVersionSourceCodeFolder + partiallyQualifiedOutputFileName;

			if (keepPreviouslyGeneratedFiles && File.Exists(fullyQualifiedOutputFileName))
			{
				if (verbose)
					Console.WriteLine(partiallyQualifiedOutputFileName + " already exists");
				return;
			}

			List<FileNameInfo> files = Util.GetAllFilesInSuperTuxAdvanceSourceCodeFolderInSortedOrder()
				.Where(x => x.FileExtension.ToLowerInvariant() == "tsj")
				.ToList();
			
			string tsjDataJsFileContents = "";

			foreach (FileNameInfo file in files)
			{
				if (verbose)
					Console.WriteLine("Copying " + file.PartiallyQualifiedFileName);

				string fileContents = Util.GetFileContentsAsString(file.FullyQualifiedFileName);
				
				tsjDataJsFileContents += "window.superTuxAdvanceWebVersion.simulatedFileSystem.addFile( \n";
				tsjDataJsFileContents += $"    '{file.PartiallyQualifiedFileName}', \n";
				tsjDataJsFileContents += $"    `{fileContents.Replace("\\", "\\\\").Replace("`", "\\`")}` \n";
				tsjDataJsFileContents += "); \n\n";
			}

			Util.WriteFileContents(
				fileName: fullyQualifiedOutputFileName,
				text: tsjDataJsFileContents);
		}
	}
}
