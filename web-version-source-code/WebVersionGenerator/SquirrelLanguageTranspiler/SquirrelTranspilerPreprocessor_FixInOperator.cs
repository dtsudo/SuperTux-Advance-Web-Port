
namespace SquirrelLanguageTranspiler
{
	using System;

	public class SquirrelTranspilerPreprocessor_FixInOperator
	{
		public static string AddParenthesesForInOperator(string line)
		{
			line = line.Replace(
				@"|| gvPlayer && !gvPlayer2 && ""invincible"" in gvPlayer && gvPlayer.invincible == 0",
				@"|| gvPlayer && !gvPlayer2 && (""invincible"" in gvPlayer) && gvPlayer.invincible == 0");

			line = line.Replace(
				@"|| gvPlayer2 && !gvPlayer && ""invincible"" in gvPlayer2 && gvPlayer2.invincible == 0) songPlay(gvMusicName)",
				@"|| gvPlayer2 && !gvPlayer && (""invincible"" in gvPlayer2) && gvPlayer2.invincible == 0) songPlay(gvMusicName)");
			
			if (!line.Contains(" in "))
				return line;

			if (!line.Contains("if"))
				return line;

			int? index = null;

			while (true)
			{
				string modifiedLine = ReplaceForeach(ReplaceStringsWithQuestionMarks(line));

				if (index == null)
				{
					index = modifiedLine.LastIndexOf(" in ", StringComparison.Ordinal);
					if (index < 0)
						break;
				}
				else
				{
					index = modifiedLine.Substring(0, index.Value).LastIndexOf(" in ", StringComparison.Ordinal);
					if (index < 0)
						break;
				}

				int rightBoundary = index.Value + 4;
				int parenCount = 0;

				while (true)
				{
					if (rightBoundary == modifiedLine.Length)
						return line;

					char c = modifiedLine[rightBoundary];

					if (c == '(')
						parenCount++;
					if (c == ')')
					{
						if (parenCount == 0)
							break;
						parenCount--;
					}

					if (c == '|' && parenCount == 0)
						break;

					if (c == '&' && parenCount == 0)
						break;

					rightBoundary++;
				}

				int leftBoundary = index.Value;
				parenCount = 0;

				while (true)
				{
					if (leftBoundary == -1)
						return line;

					char c = modifiedLine[leftBoundary];

					if (c == ')')
						parenCount++;
					if (c == '(')
					{
						if (parenCount == 0)
							break;
						parenCount--;
					}

					if (c == '|' && parenCount == 0)
						break;

					if (c == '&' && parenCount == 0)
						break;

					leftBoundary--;
				}

				line = line.Substring(0, leftBoundary + 1)
					+ "(("
					+ line.Substring(leftBoundary + 1, index.Value - (leftBoundary + 1))
					+ ")"
					+ line.Substring(index.Value, rightBoundary - index.Value)
					+ ")"
					+ line.Substring(rightBoundary);
			}

			return line;
		}

		private static string ReplaceForeach(string line)
		{
			while (true)
			{
				int index = line.IndexOf("foreach", StringComparison.Ordinal);

				if (index < 0)
					return line;

				char[] array = line.ToCharArray();

				int i = index;
				int parenCount = 0;

				while (true)
				{
					if (i == array.Length)
						return line;

					char c = array[i];

					array[i] = '?';

					if (c == '(')
						parenCount++;

					if (c == ')')
					{
						parenCount--;
						if (parenCount == 0)
							break;
					}

					i++;
				}

				line = new string(array);
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
