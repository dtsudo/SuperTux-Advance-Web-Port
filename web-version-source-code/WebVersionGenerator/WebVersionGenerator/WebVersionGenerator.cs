
namespace WebVersionGenerator
{
	using SquirrelLanguageTranspiler;
	using System;
	using WebVersionGeneratorLibrary;

	public class WebVersionGenerator
	{
		public static void Main(string[] args)
		{
			SquirrelTranspilerTest.TestSquirrelTranspiler();

			ISquirrelTranspiler squirrelTranspiler = new SquirrelTranspiler();

			WebVersionGeneration.GenerateWebVersion(squirrelTranspiler: squirrelTranspiler);
		}
	}
}
