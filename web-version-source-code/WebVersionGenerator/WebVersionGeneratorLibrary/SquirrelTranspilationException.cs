
namespace WebVersionGeneratorLibrary
{
	using System;

	public class SquirrelTranspilationException : Exception
	{
		public SquirrelTranspilationException()
		{
		}

		public SquirrelTranspilationException(string message)
			: base(message: message)
		{
		}
	}
}
