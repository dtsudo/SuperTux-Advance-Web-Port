
namespace SquirrelLanguageTranspiler
{
	using Antlr4.Runtime;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using WebVersionGeneratorLibrary;

	public class SquirrelTranspiler : ISquirrelTranspiler
	{
		public SquirrelTranspiler()
		{
		}

		public string TranspileSquirrelCode(string squirrelCode)
		{
			AntlrInputStream inputStream = new AntlrInputStream(squirrelCode);
			SquirrelLexer squirrelLexer = new SquirrelLexer(inputStream);
			CommonTokenStream commonTokenStream = new CommonTokenStream(squirrelLexer);
			SquirrelParser squirrelParser = new SquirrelParser(commonTokenStream);
			SquirrelParser.StatsContext context = squirrelParser.stats();
			SquirrelTranspilerVisitor visitor = new SquirrelTranspilerVisitor();

			string transpiledOutput = visitor.Visit(context);

			return transpiledOutput;
		}

		public void PrintTokens(string squirrelCode)
		{
			AntlrInputStream inputStream = new AntlrInputStream(squirrelCode);
			SquirrelLexer squirrelLexer = new SquirrelLexer(inputStream);
			CommonTokenStream commonTokenStream = new CommonTokenStream(squirrelLexer);

			commonTokenStream.Fill();
			List<IToken> tokens = commonTokenStream.GetTokens().ToList();

			for (int i = 0; i < tokens.Count; i++)
			{
				string token = tokens[i].Text;
				Console.WriteLine(i.ToStringCultureInvariant() + ": " + (token == "\n" ? "NEWLINE" : token));
			}

			Console.WriteLine("End of tokens");
		}
	}
}
