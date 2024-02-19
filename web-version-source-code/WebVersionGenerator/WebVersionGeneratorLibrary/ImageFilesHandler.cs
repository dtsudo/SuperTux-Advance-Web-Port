
namespace WebVersionGeneratorLibrary
{
	using System;
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;

	public class ImageFilesHandler
	{
		public static void CopyImageFiles(bool keepPreviouslyGeneratedFiles, bool verbose)
		{
			string webVersionSourceCodeFolder = Util.GetWebVersionSourceCodeFolder();

			string partiallyQualifiedOutputFileName = "output/data/images.js";
			string fullyQualifiedOutputFileName = webVersionSourceCodeFolder + partiallyQualifiedOutputFileName;

			if (keepPreviouslyGeneratedFiles && File.Exists(fullyQualifiedOutputFileName))
			{
				if (verbose)
					Console.WriteLine(partiallyQualifiedOutputFileName + " already exists");
				return;
			}

			List<FileNameInfo> files = Util.GetAllFilesInSuperTuxAdvanceSourceCodeFolderInSortedOrder()
				.Where(x => x.FileExtension.ToLowerInvariant() == "png")
				.ToList();

			string imageJsFileContents = "if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; \n\n";
			imageJsFileContents += "window.superTuxAdvanceWebVersion.imageList = []; \n\n";

			for (int i = 0; i < files.Count; i++)
			{
				FileNameInfo file = files[i];

				if (verbose)
					Console.WriteLine("Copying " + file.PartiallyQualifiedFileName);

				List<byte> fileContents = Util.GetFileContentsAsBytes(file.FullyQualifiedFileName);
				string fileContentsBase64 = Convert.ToBase64String(fileContents.ToArray());

				imageJsFileContents += $"window.superTuxAdvanceWebVersion.imageList.push('{file.PartiallyQualifiedFileName}'); \n\n";

				imageJsFileContents += $"window.superTuxAdvanceWebVersion.simulatedFileSystem.addFile('{file.PartiallyQualifiedFileName}', '{fileContentsBase64}'); \n\n";
			}

			Util.WriteFileContents(
				fileName: fullyQualifiedOutputFileName,
				text: imageJsFileContents);
		}
	}
}
