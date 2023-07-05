
namespace WebVersionGeneratorLibrary
{
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;

	public class AudioFilesHandler
	{
		public static void CopyAudioFiles()
		{
			string webVersionSourceCodeFolder = Util.GetWebVersionSourceCodeFolder();

			List<FileNameInfo> files = Util.GetAllFilesInSuperTuxAdvanceSourceCodeFolder()
				.Where(x => x.FileExtension.ToLowerInvariant() == "ogg")
				.ToList();

			if (!Directory.Exists(webVersionSourceCodeFolder + "output/data/audioFiles/"))
				Directory.CreateDirectory(webVersionSourceCodeFolder + "output/data/audioFiles/");

			string audioJsFileContents = "if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; \n\n";
			audioJsFileContents += "window.superTuxAdvanceWebVersion.audioFileList = []; \n\n";

			for (int i = 0; i < files.Count; i++)
			{
				FileNameInfo file = files[i];

				List<byte> fileContents = Util.GetFileContentsAsBytes(file.FullyQualifiedFileName);
				Util.WriteFileContents(webVersionSourceCodeFolder + "output/data/audioFiles/file" + i.ToStringCultureInvariant() + ".ogg", fileContents);

				int numberOfInstances = (new FileInfo(file.FullyQualifiedFileName)).Length < 30 * 1000 ? 8 : 1;

				audioJsFileContents += "window.superTuxAdvanceWebVersion.audioFileList.push({ \n";
				audioJsFileContents += $"    originalName: '{file.PartiallyQualifiedFileName}', \n";
				audioJsFileContents += $"    fileLocation: 'data/audioFiles/file{i.ToStringCultureInvariant()}.ogg', \n";
				audioJsFileContents += $"    numberOfInstances: {numberOfInstances.ToStringCultureInvariant()} \n";
				audioJsFileContents += "}); \n\n";

				audioJsFileContents += $"window.superTuxAdvanceWebVersion.simulatedFileSystem.addFile('{file.PartiallyQualifiedFileName}', ''); \n\n";
			}

			Util.WriteFileContents(
				fileName: webVersionSourceCodeFolder + "output/data/audio.js",
				text: audioJsFileContents);
		}
	}
}
