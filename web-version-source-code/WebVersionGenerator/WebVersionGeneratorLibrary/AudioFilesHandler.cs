
namespace WebVersionGeneratorLibrary
{
	using System;
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;

	public class AudioFilesHandler
	{
		public static void CopyAudioFiles(bool keepPreviouslyGeneratedFiles, bool verbose)
		{
			string webVersionSourceCodeFolder = Util.GetWebVersionSourceCodeFolder();

			List<FileNameInfo> files = Util.GetAllFilesInSuperTuxAdvanceSourceCodeFolderInSortedOrder()
				.Where(x => x.FileExtension.ToLowerInvariant() == "ogg")
				.ToList();

			if (!Directory.Exists(webVersionSourceCodeFolder + "output/data/audioFiles/"))
				Directory.CreateDirectory(webVersionSourceCodeFolder + "output/data/audioFiles/");

			string audioJsFileContents = "if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; \n\n";
			audioJsFileContents += "window.superTuxAdvanceWebVersion.audioFileList = []; \n\n";

			for (int i = 0; i < files.Count; i++)
			{
				FileNameInfo file = files[i];

				int numberOfInstances = (new FileInfo(file.FullyQualifiedFileName)).Length < 30 * 1000 ? 8 : 1;

				audioJsFileContents += "window.superTuxAdvanceWebVersion.audioFileList.push({ \n";
				audioJsFileContents += $"    originalName: '{file.PartiallyQualifiedFileName}', \n";
				audioJsFileContents += $"    fileLocation: 'data/audioFiles/file{i.ToStringCultureInvariant()}.ogg', \n";
				audioJsFileContents += $"    numberOfInstances: {numberOfInstances.ToStringCultureInvariant()} \n";
				audioJsFileContents += "}); \n\n";

				audioJsFileContents += $"window.superTuxAdvanceWebVersion.simulatedFileSystem.addFile('{file.PartiallyQualifiedFileName}', ''); \n\n";

				string partiallyQualifiedOggOutputFileName = "output/data/audioFiles/file" + i.ToStringCultureInvariant() + ".ogg";
				string fullyQualifiedOggOutputFileName = webVersionSourceCodeFolder + partiallyQualifiedOggOutputFileName;

				if (keepPreviouslyGeneratedFiles && File.Exists(fullyQualifiedOggOutputFileName))
				{
					if (verbose)
						Console.WriteLine(partiallyQualifiedOggOutputFileName + " already exists");
					continue;
				}

				if (verbose)
					Console.WriteLine("Copying " + file.PartiallyQualifiedFileName);

				List<byte> fileContents = Util.GetFileContentsAsBytes(file.FullyQualifiedFileName);
				Util.WriteFileContents(fullyQualifiedOggOutputFileName, fileContents);
			}

			Util.WriteFileContents(
				fileName: webVersionSourceCodeFolder + "output/data/audio.js",
				text: audioJsFileContents);
		}
	}
}
