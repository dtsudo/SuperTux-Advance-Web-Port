
namespace SquirrelLanguageTranspiler
{
	using System;

	public class SquirrelTranspilerPreprocessor_FixRemainderOperator
	{
		public static string AddParenthesesForRemainderOperator(string line)
		{
			line = line.Replace(
				"x -= (x % 16 <=> 8)",
				"x -= ((x % 16) <=> 8)");

			return line;
		}
	}
}
