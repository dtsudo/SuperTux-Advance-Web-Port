
namespace WebVersionGeneratorLibrary
{
	using System;
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;

	public class SquirrelFilesHandler
	{
		public static void CopySquirrelFiles(ISquirrelTranspiler squirrelTranspiler)
		{
			string webVersionSourceCodeFolder = Util.GetWebVersionSourceCodeFolder();

			List<FileNameInfo> files = Util.GetAllFilesInSuperTuxAdvanceSourceCodeFolder()
				.Where(x => x.FileExtension.ToLowerInvariant() == "nut" || x.FileExtension.ToLowerInvariant() == "brx")
				.ToList();

			if (!Directory.Exists(webVersionSourceCodeFolder + "output/data/squirrelCode/"))
				Directory.CreateDirectory(webVersionSourceCodeFolder + "output/data/squirrelCode/");

			string squirrelFilesJs = "if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; \n\n";
			squirrelFilesJs += "window.superTuxAdvanceWebVersion.squirrelFileList = []; \n\n";

			foreach (FileNameInfo file in files)
			{
				string fileContents = Util.GetFileContentsAsString(file.FullyQualifiedFileName);
				fileContents = fileContents.Replace("#!/usr/bin/brux", "");
				fileContents = fileContents.Replace("::isWebBrowserVersion <- false", "::isWebBrowserVersion <- true");
				string transpiledFileContents = squirrelTranspiler.TranspileSquirrelCode(fileContents);

				transpiledFileContents = "if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; \n"
					+ "if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; \n\n"
					+ $"window.superTuxAdvanceWebVersion.squirrelFiles['{file.PartiallyQualifiedFileName}'] = function () {{ \n\n\n"
					+ transpiledFileContents + "\n\n\n"
					+ "}; \n";

				string outputFileName = file.PartiallyQualifiedFileName;
				if (outputFileName.ToLowerInvariant().EndsWith(".nut", StringComparison.Ordinal))
					outputFileName = outputFileName.Substring(0, outputFileName.Length - 4) + ".js";
				if (outputFileName.ToLowerInvariant().EndsWith(".brx", StringComparison.Ordinal))
					outputFileName = outputFileName.Substring(0, outputFileName.Length - 4) + ".js";

				outputFileName = outputFileName.Replace('\\', '_').Replace('/', '_');
				
				Util.WriteFileContents(
					fileName: webVersionSourceCodeFolder + "output/data/squirrelCode/" + outputFileName,
					text: transpiledFileContents);

				squirrelFilesJs += $"window.superTuxAdvanceWebVersion.squirrelFileList.push('data/squirrelCode/{outputFileName}'); \n\n";

				squirrelFilesJs += "window.superTuxAdvanceWebVersion.simulatedFileSystem.addFile( \n";
				squirrelFilesJs += $"    '{file.PartiallyQualifiedFileName}', \n";
				squirrelFilesJs += $"    '' \n";
				squirrelFilesJs += "); \n\n";
			}

			Util.WriteFileContents(
				fileName: webVersionSourceCodeFolder + "output/data/squirrelFiles.js",
				text: squirrelFilesJs);
		}
	}
}
