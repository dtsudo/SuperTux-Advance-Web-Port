
namespace WebVersionGeneratorLibrary
{
	using System;

	public class WebVersionGeneration
	{
		public static void GenerateWebVersion(ISquirrelTranspiler squirrelTranspiler, bool keepPreviouslyGeneratedFiles, bool verbose)
		{
			if (verbose)
				Console.WriteLine("Copying image files");
			ImageFilesHandler.CopyImageFiles(keepPreviouslyGeneratedFiles: keepPreviouslyGeneratedFiles, verbose: verbose);

			if (verbose)
			{
				Console.WriteLine();
				Console.WriteLine("Copying audio files");
			}
			AudioFilesHandler.CopyAudioFiles(keepPreviouslyGeneratedFiles: keepPreviouslyGeneratedFiles, verbose: verbose);

			if (verbose)
			{
				Console.WriteLine();
				Console.WriteLine("Copying json files");
			}
			JsonFilesHandler.CopyJsonFiles(squirrelTranspiler: squirrelTranspiler, keepPreviouslyGeneratedFiles: keepPreviouslyGeneratedFiles, verbose: verbose);

			if (verbose)
			{
				Console.WriteLine();
				Console.WriteLine("Copying tsj files");
			}
			TsjFilesHandler.CopyTsjFiles(keepPreviouslyGeneratedFiles: keepPreviouslyGeneratedFiles, verbose: verbose);

			if (verbose)
			{
				Console.WriteLine();
				Console.WriteLine("Copying squirrel files");
			}
			SquirrelFilesHandler.CopySquirrelFiles(squirrelTranspiler: squirrelTranspiler, keepPreviouslyGeneratedFiles: keepPreviouslyGeneratedFiles, verbose: verbose);

			if (verbose)
			{
				Console.WriteLine();
				Console.WriteLine("Adding transpilation testing file");
			}
			TranspilationTesting.AddTestFile(squirrelTranspiler: squirrelTranspiler);

			if (verbose)
				Console.WriteLine();
		}
	}
}
