
namespace WebVersionGenerator
{
	using SquirrelLanguageTranspiler;
	using System;
	using System.Linq;
	using WebVersionGeneratorLibrary;

	public class WebVersionGenerator
	{
		public static void Main(string[] args)
		{
			bool keepPreviouslyGeneratedFiles = args.Any(x => x == "--keep-previously-generated-files");
			bool verbose = args.Any(x => x == "--verbose");

			SquirrelTranspilerTest.TestSquirrelTranspiler();
			
			ISquirrelTranspiler squirrelTranspiler = new SquirrelTranspiler();

			WebVersionGeneration.GenerateWebVersion(squirrelTranspiler: squirrelTranspiler, keepPreviouslyGeneratedFiles: keepPreviouslyGeneratedFiles, verbose: verbose);
		}
	}
}
