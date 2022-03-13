
namespace WebVersionGeneratorLibrary
{
	using System;
	using System.Collections.Generic;
	using System.Linq;

	public class ImageFilesHandler
	{
		public static void CopyImageFiles()
		{
			List<FileNameInfo> files = Util.GetAllFilesInSuperTuxAdvanceSourceCodeFolder()
				.Where(x => x.FileExtension.ToLowerInvariant() == "png")
				.ToList();

			string imageJsFileContents = "if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; \n\n";
			imageJsFileContents += "window.superTuxAdvanceWebVersion.imageList = []; \n\n";

			for (int i = 0; i < files.Count; i++)
			{
				FileNameInfo file = files[i];

				List<byte> fileContents = Util.GetFileContentsAsBytes(file.FullyQualifiedFileName);
				string fileContentsBase64 = Convert.ToBase64String(fileContents.ToArray());

				imageJsFileContents += $"window.superTuxAdvanceWebVersion.imageList.push('{file.PartiallyQualifiedFileName}'); \n\n";

				imageJsFileContents += $"window.superTuxAdvanceWebVersion.simulatedFileSystem.addFile('{file.PartiallyQualifiedFileName}', '{fileContentsBase64}'); \n\n";
			}

			string webVersionSourceCodeFolder = Util.GetWebVersionSourceCodeFolder();

			Util.WriteFileContents(
				fileName: webVersionSourceCodeFolder + "output/data/images.js",
				text: imageJsFileContents);
		}
	}
}
