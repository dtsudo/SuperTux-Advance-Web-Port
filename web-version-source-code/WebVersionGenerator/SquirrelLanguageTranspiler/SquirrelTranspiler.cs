
namespace SquirrelLanguageTranspiler
{
	using Antlr4.Runtime;
	using System;
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;
	using WebVersionGeneratorLibrary;

	public class SquirrelTranspiler : ISquirrelTranspiler
	{
		private bool hasHitError;

		public SquirrelTranspiler()
		{
			this.hasHitError = false;
		}

		private class SquirrelLexerErrorListener : IAntlrErrorListener<int>
		{
			private SquirrelTranspiler squirrelTranspiler;

			public SquirrelLexerErrorListener(SquirrelTranspiler squirrelTranspiler)
			{
				this.squirrelTranspiler = squirrelTranspiler;
			}

			public void SyntaxError(TextWriter output, IRecognizer recognizer, int offendingSymbol, int line, int charPositionInLine, string msg, RecognitionException e)
			{
				this.squirrelTranspiler.hasHitError = true;
			}
		}

		private class SquirrelParserErrorListener : IAntlrErrorListener<IToken>
		{
			private SquirrelTranspiler squirrelTranspiler;

			public SquirrelParserErrorListener(SquirrelTranspiler squirrelTranspiler)
			{
				this.squirrelTranspiler = squirrelTranspiler;
			}

			public void SyntaxError(TextWriter output, IRecognizer recognizer, IToken offendingSymbol, int line, int charPositionInLine, string msg, RecognitionException e)
			{
				this.squirrelTranspiler.hasHitError = true;
			}
		}

		public string TranspileSquirrelCode(string squirrelCode)
		{
			this.hasHitError = false;

			AntlrInputStream inputStream = new AntlrInputStream(squirrelCode);
			SquirrelLexer squirrelLexer = new SquirrelLexer(inputStream);
			squirrelLexer.AddErrorListener(new SquirrelLexerErrorListener(squirrelTranspiler: this));
			CommonTokenStream commonTokenStream = new CommonTokenStream(squirrelLexer);
			SquirrelParser squirrelParser = new SquirrelParser(commonTokenStream);
			squirrelParser.AddErrorListener(new SquirrelParserErrorListener(squirrelTranspiler: this));
			SquirrelParser.StatsContext context = squirrelParser.stats();
			SquirrelTranspilerVisitor visitor = new SquirrelTranspilerVisitor();

			if (this.hasHitError)
				throw new SquirrelTranspilationException();

			string transpiledOutput;

			try
			{
				transpiledOutput = visitor.Visit(context);
			}
			catch (Exception e)
			{
				throw new SquirrelTranspilationException(message: e.Message);
			}
			
			if (this.hasHitError)
				throw new SquirrelTranspilationException();

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
