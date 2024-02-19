﻿
namespace WebVersionGeneratorLibrary
{
	using System;
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;

	public class SquirrelFilesHandler
	{
		public static void CopySquirrelFiles(ISquirrelTranspiler squirrelTranspiler, bool keepPreviouslyGeneratedFiles, bool verbose)
		{
			string webVersionSourceCodeFolder = Util.GetWebVersionSourceCodeFolder();

			List<FileNameInfo> files = Util.GetAllFilesInSuperTuxAdvanceSourceCodeFolderInSortedOrder()
				.Where(x => x.FileExtension.ToLowerInvariant() == "nut" || x.FileExtension.ToLowerInvariant() == "brx")
				.ToList();

			if (!Directory.Exists(webVersionSourceCodeFolder + "output/data/squirrelCode/"))
				Directory.CreateDirectory(webVersionSourceCodeFolder + "output/data/squirrelCode/");

			string squirrelFilesJs = "if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; \n\n";
			squirrelFilesJs += "window.superTuxAdvanceWebVersion.squirrelFileList = []; \n\n";

			foreach (FileNameInfo file in files)
			{
				string outputFileName = file.PartiallyQualifiedFileName;
				if (outputFileName.ToLowerInvariant().EndsWith(".nut", StringComparison.Ordinal))
					outputFileName = outputFileName.Substring(0, outputFileName.Length - 4) + ".js";
				if (outputFileName.ToLowerInvariant().EndsWith(".brx", StringComparison.Ordinal))
					outputFileName = outputFileName.Substring(0, outputFileName.Length - 4) + ".js";

				outputFileName = outputFileName.Replace('\\', '_').Replace('/', '_');

				squirrelFilesJs += $"window.superTuxAdvanceWebVersion.squirrelFileList.push('data/squirrelCode/{outputFileName}'); \n\n";

				squirrelFilesJs += "window.superTuxAdvanceWebVersion.simulatedFileSystem.addFile( \n";
				squirrelFilesJs += $"    '{file.PartiallyQualifiedFileName}', \n";
				squirrelFilesJs += $"    '' \n";
				squirrelFilesJs += "); \n\n";

				string partiallyQualifiedOutputFileName = "output/data/squirrelCode/" + outputFileName;
				string fullyQualifiedOutputFileName = webVersionSourceCodeFolder + partiallyQualifiedOutputFileName;

				if (keepPreviouslyGeneratedFiles && File.Exists(fullyQualifiedOutputFileName))
				{
					if (verbose)
						Console.WriteLine(partiallyQualifiedOutputFileName + " already exists");
					continue;
				}

				long startTime = DateTime.Now.Ticks;

				if (verbose)
					Console.Write("Copying " + file.PartiallyQualifiedFileName + " ");

				string fileContents = Util.GetFileContentsAsString(file.FullyQualifiedFileName);
				fileContents = fileContents.Replace("#!/usr/bin/brux", "");
				fileContents = fileContents.Replace("::isWebBrowserVersion <- false", "::isWebBrowserVersion <- true");
				string transpiledFileContents;

				try
				{
					transpiledFileContents = squirrelTranspiler.TranspileSquirrelCode(fileContents);
				}
				catch (SquirrelTranspilationException e)
				{
					Console.WriteLine("Failed to transpile file: " + file.PartiallyQualifiedFileName);
					throw new Exception(message: e.Message);
				}

				transpiledFileContents = "if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; \n"
					+ "if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; \n\n"
					+ $"window.superTuxAdvanceWebVersion.squirrelFiles['{file.PartiallyQualifiedFileName}'] = function () {{ \n\n\n"
					+ transpiledFileContents + "\n\n\n"
					+ "}; \n";
				
				Util.WriteFileContents(
					fileName: fullyQualifiedOutputFileName,
					text: transpiledFileContents);

				long endTime = DateTime.Now.Ticks;

				int durationMillis = (int) ((endTime - startTime) / 10000L);

				if (verbose)
					Console.WriteLine("(" + durationMillis.ToStringCultureInvariant() + " ms)");
			}

			Util.WriteFileContents(
				fileName: webVersionSourceCodeFolder + "output/data/squirrelFiles.js",
				text: squirrelFilesJs);
		}
	}
}
