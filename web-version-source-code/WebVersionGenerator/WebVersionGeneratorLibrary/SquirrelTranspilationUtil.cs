
namespace WebVersionGeneratorLibrary
{
	using System;

	public class SquirrelTranspilationUtil
	{
		public static string TranspileEmbeddedSquirrelCodeInDataFile(string fileContents, ISquirrelTranspiler squirrelTranspiler)
		{
			return TranspileEmbeddedSquirrelCodeInDataFileHelper(
				fileContents: fileContents,
				searchStart: 0,
				squirrelTranspiler: squirrelTranspiler);
		}

		private static string TranspileEmbeddedSquirrelCodeInDataFileHelper(string fileContents, int searchStart, ISquirrelTranspiler squirrelTranspiler)
		{
			string searchTerm = "\"name\":\"code\"";

			int index = fileContents.IndexOf(searchTerm, startIndex: searchStart, comparisonType: StringComparison.Ordinal);

			if (index == -1)
				return fileContents;

			string searchTerm2 = "\"value\":\"";
			int index2 = fileContents.IndexOf(searchTerm2, index, StringComparison.Ordinal);

			int startIndex = index2 + searchTerm2.Length;
			int endIndex = startIndex;
			while (true)
			{
				if (fileContents[endIndex] == '"' && fileContents[endIndex - 1] != '\\')
					break;
				endIndex++;
			}

			string code = fileContents.Substring(startIndex, endIndex - startIndex)
				.Replace(@"\n", "\n")
				.Replace("\\\"", "\"")
				.Replace("\\t", "\t")
				.Replace(@"\\", @"\")
				// Tiled Map Editor also escapes the forward slash
				.Replace("\\/", "/");

			string transpiledCode = "/*js*/" + squirrelTranspiler.TranspileSquirrelCode(code).Replace("\\", "\\\\").Replace("\n", "\\n").Replace("\"", "\\\"").Replace("\t", "\\t");

			string modifiedDataFile = fileContents.Substring(0, startIndex) + transpiledCode + fileContents.Substring(endIndex);
			return TranspileEmbeddedSquirrelCodeInDataFileHelper(modifiedDataFile, startIndex, squirrelTranspiler);
		}
	}
}
