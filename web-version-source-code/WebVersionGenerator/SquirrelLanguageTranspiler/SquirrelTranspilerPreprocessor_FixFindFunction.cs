
namespace SquirrelLanguageTranspiler
{
	using System;

	public class SquirrelTranspilerPreprocessor_FixFindFunction
	{
		public static string HandleFindFunction(string line)
		{
			if (!line.Contains(".find("))
				return line;

			while (true)
			{
				string modifiedLine = ReplaceStringsWithQuestionMarks(line);

				int index = modifiedLine.IndexOf(".find(", StringComparison.Ordinal);

				if (index < 0)
					return line;

				line = line.Substring(0, index) + ".squirrelFind(" + line.Substring(index + 6);
			}
		}

		private static string ReplaceStringsWithQuestionMarks(string line)
		{
			char[] array = line.ToCharArray();

			bool isInQuotes = false;

			for (int i = 0; i < array.Length; i++)
			{
				if (array[i] == '"')
					isInQuotes = !isInQuotes;
				else
				{
					if (isInQuotes)
						array[i] = '?';
				}
			}

			return new string(array);
		}
	}
}
