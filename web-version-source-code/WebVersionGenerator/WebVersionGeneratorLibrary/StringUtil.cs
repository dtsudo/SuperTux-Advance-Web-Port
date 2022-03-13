
namespace WebVersionGeneratorLibrary
{
	using System.Globalization;

	public static class StringUtil
	{
		public static string ToStringCultureInvariant(this int i)
		{
			return i.ToString(CultureInfo.InvariantCulture);
		}
	}
}
