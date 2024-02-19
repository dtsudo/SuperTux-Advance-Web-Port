
namespace SquirrelLanguageTranspiler
{
	using System;
	using System.Text;

	public class SquirrelTranspilerPreprocessor
	{
		public static string PreprocessSquirrelCode(string squirrelCode)
		{
			string[] lines = squirrelCode.Split('\n');

			for (int i = 0; i < lines.Length; i++)
				lines[i] = PreprocessSquirrelCodeLine(lines[i]);

			StringBuilder builder = new StringBuilder();
			foreach (string line in lines)
			{
				builder.Append(line);
				builder.Append("\n");
			}

			return builder.ToString();
		}

		private static string PreprocessSquirrelCodeLine(string line)
		{
			line = SquirrelTranspilerPreprocessor_FixInOperator.AddParenthesesForInOperator(line);
			line = SquirrelTranspilerPreprocessor_FixRemainderOperator.AddParenthesesForRemainderOperator(line);
			line = SquirrelTranspilerPreprocessor_FixFindFunction.HandleFindFunction(line);
			line = SquirrelTranspilerPreprocessor_FixSyntaxErrors.FixSyntaxErrors(line);
			
			return line;
		}
	}
}
