
namespace WebVersionGenerator
{
	using SquirrelLanguageTranspiler;
	using System;
	using WebVersionGeneratorLibrary;

	public class SquirrelTranspilerTest
	{
		public static void TestSquirrelTranspiler()
		{
			RunTest();
		}

		private static void RunTest()
		{
			TestTranspilation(
				@"
					if (x)
						y = 5
					else
						z = 10
				",
				"if (x) y = 5; else z = 10;");

			TestTranspilation(
				@"
					x = { ""a"": 3, ""b"": 5 }
				",
				@"x = { ""a"": 3, ""b"": 5 };");

			TestTranspilation(
				@"
					a.push(
						{
							a = 3,
							b = 5
						}
					)
				",
				"a.push({ a: 3, b: 5 });");

			TestTranspilation(
				@"
					::x <- [

					]
				",
				"x = [];");

			TestTranspilation(
				@"
					for (local x = 3; x <= 5; x++)
					{
						if (x == 4)
						{
							a = 3
						}
					}
				",
				@"
					for (var x = 3; x <= 5; x++)
					{
						if (x == 4)
						{
							a = 3;
						}
					}
				");

			TestTranspilation(
				"x = a.b() ? 3 : 5",
				"x = a.b() ? 3 : 5;");

			TestTranspilation(
				"x[i] += 5",
				"x[i] += 5;");

			TestTranspilation(
				"x = typeof g()[n]",
				"x = squirrelTypeOf(g()[n]);");

			TestTranspilation(
				"x = typeof g()",
				"x = squirrelTypeOf(g());");

			TestTranspilation(
				"x = y % z",
				"x = y % z;");

			TestTranspilation(
				"x += y",
				"x += y;");

			TestTranspilation(
				"x -= y",
				"x -= y;");

			TestTranspilation(
				"x *= y",
				"x *= y;");

			TestTranspilation(
				"x /= y",
				"x /= y;");

			TestTranspilation(
				@"
					switch(reschoice) {
						case 0:
							setResolution(320, 180)
							break
						case 1:
							setResolution(320, 200)
							break
						case 2:
							setResolution(320, 240)
							break
						//Other resolutions may be supported so default is left separate
						default:
							setResolution(320, 240)
							break
					}
				",
				@"
					switch (reschoice) {
						case 0:
							setResolution(320, 180);
							break;
						case 1:
							setResolution(320, 200);
							break;
						case 2:
							setResolution(320, 240);
							break;
						default:
							setResolution(320, 240);
							break;
					}
				");

			TestTranspilation(
				"a = b != c",
				"a = b != c;");

			TestTranspilation(
				"a = b <= c",
				"a = b <= c;");

			TestTranspilation(
				"d-- ; e--",
				"d--; e--;");

			TestTranspilation(
				@"
					::game <- {
						x = 0
						c = {
							T = [1, [2, 3]]
							//
						}
						g = {}
					}
				",
				@"
					game = {
						x: 0,
						c: {
							T: [1, [2, 3]]
						},
						g: {}
					};
				");

			TestTranspilation(
				"return 0x246abcdEf",
				"return 0x246abcdEf;");

			TestTranspilation(
				@"
					[
						{
							x = 3
							y = 4
						}
						{
							x = 5
							y = 6
						}
					]
				",
				@"
			[
				{ x: 3, y: 4 },
				{ x: 5, y: 6 }
			];
			");

			TestTranspilation(
				"typeof a == \"table\"",
				"squirrelTypeOf(a) == \"table\";");

			TestTranspilation(
				"c <- a >> b",
				"c = a >> b;");

			TestTranspilation(
				"c <- a << b",
				"c = a << b;");

			TestTranspilation(
				"c <- a | b",
				"c = a | b;");

			TestTranspilation(
				"local x = (y >> 4) & 0xFF",
				"var x = (y >> 4) & 0xFF;");

			TestTranspilation(
				"typeof a[b] == \"table\"",
				"squirrelTypeOf(a[b]) == \"table\";");

			TestTranspilation(
				"a[b * c] <- d",
				"a[b * c] = d;");

			TestTranspilation(
				"a[b] = c",
				"a[b] = c;");

			TestTranspilation(
				"a = b && c || d",
				"a = b && c || d;");

			TestTranspilation(
				"a = b && c && d",
				"a = b && c && d;");

			TestTranspilation(
				"a.b += c",
				"a.b += c;");

			TestTranspilation(
				"a = function(x, y = 4, z = null) { return }",
				"a = function (x, y = 4, z = null) { return; };");

			TestTranspilation(
				"a = function() { return }",
				"a = function () { return; };");

			TestTranspilation(
				@"
				::config <- {
					key = {
						up = 3
						down = 5
						c = 7
					}
				}",
				@"
				config = {
					key: {
						up: 3,
						down: 5,
						c: 7
					}
				};
				");

			TestTranspilation(
				"return 3 + d[15]",
				"return 3 + d[15];");

			TestTranspilation(
				"d <- { a = 3, b = 5}",
				"d = { a: 3, b: 5 };");

			TestTranspilation(
				"d <- {}",
				"d = {};");

			TestTranspilation(
				"d <- 3 + (4 * 5) - 6",
				"d = 3 + (4 * 5) - 6;");

			TestTranspilation(
				"d <- e[15](f)[3 + 5]",
				"d = e[15](f)[3 + 5];");

			TestTranspilation(
				"d <- e[15]",
				"d = e[15];");

			TestTranspilation(
				"d <- e * f",
				"d = e * f;");

			TestTranspilation(
				"d <- e - f",
				"d = e - f;");

			TestTranspilation(
				"d <- e == f",
				"d = e == f;");

			TestTranspilation(
				"d++",
				"d++;");

			TestTranspilation(
				"local d = 3 > f",
				"var d = 3 > f;");

			TestTranspilation(
				"local d = 3 < f",
				"var d = 3 < f;");

			TestTranspilation(
				"for (local a = 3 ; true ; a = a + 1) { b = 3 \n c = 5 }",
				"for (var a = 3; true; a = a + 1) { b = 3; c = 5; }");

			TestTranspilation(
				"for (local a = 3 ; true ; a = a + 1) b = 3",
				"for (var a = 3; true; a = a + 1) b = 3;");

			TestTranspilation(
				"local a = /* bla */ 4 // comments",
				"var a = 4;");

			TestTranspilation(
				"d.e <- -5  / -7",
				"d.e = -5 / -7;");

			TestTranspilation(
				"d.e <- -5",
				"d.e = -5;");

			TestTranspilation(
				"d.e <- 5",
				"d.e = 5;");

			TestTranspilation(
				"d.e = 5",
				"d.e = 5;");

			TestTranspilation(
				"local d = 3 / 5 / 6 + 7",
				"var d = 3 / 5 / 6 + 7;");

			TestTranspilation(
				"::x <- function (){ a = b }",
				"x = function () { a = b; };");

			TestTranspilation(
				"::x <- function (x, y, z){ a = b }",
				"x = function (x, y, z) { a = b; };");

			TestTranspilation(
				"const pi = 3.14",
				"pi = 3.14;");

			TestTranspilation(
				"const angle = 90",
				"angle = 90;");

			TestTranspilation(
				"a = b.c",
				"a = b.c;");

			TestTranspilation(
				"a = b.c.d.e",
				"a = b.c.d.e;");

			TestTranspilation(
				"a = b.c().d.e",
				"a = b.c().d.e;");

			TestTranspilation(
				"a = []",
				"a = [];");

			TestTranspilation(
				"local a = [1,2,3,4,5]",
				"var a = [1, 2, 3, 4, 5];");

			TestTranspilation(
				"::myVariable = 5",
				"myVariable = 5;");

			TestTranspilation(
				"local x = 3",
				"var x = 3;");

			TestTranspilation(
				"while (true) x = 5",
				"while (true) x = 5;");

			TestTranspilation(
				"while (false) x = \"abcd\"",
				"while (false) x = \"abcd\";");

			TestTranspilation(
				"local a = \"1 2 3\"",
				"var a = \"1 2 3\";");

			TestTranspilation(
				"a = b",
				"a = b;");

			TestTranspilation(
				"a = myFunc(1, 2, \"abc\", true, false)",
				"a = myFunc(1, 2, \"abc\", true, false);");

			TestTranspilation(
				"a = myFunc()",
				"a = myFunc();");

			TestTranspilation(
				"if (true) local a = 3 \n",
				"if (true) var a = 3;");

			TestTranspilation(
				"if (true) local a = 3 \n else local b = 5",
				"if (true) var a = 3; else var b = 5; ");

			TestTranspilation(
				"if (true) local a = 3 ; else local b = 5",
				"if (true) var a = 3; else var b = 5;");

			TestTranspilation(
				"if (true) local a = 3 ; \n else local b = 5",
				"if (true) var a = 3; else var b = 5;");

			TestTranspilation(
				"local c = ! d ",
				"var c = !d;");

			TestTranspilation(
				"while (true) { local a = 3 ; local b = 5; }",
				"while (true) { var a = 3; var b = 5; }");

			TestTranspilation(
				@"
					local image = loadImage(""res/aurora.png"");
					local quit = false;

					while(!quit){
						drawImage(image, 0, 0);

						if(keyPress(k_escape)) quit = true;

						update();
						wait(10);
					};",
				@"
					var image = loadImage(""res/aurora.png"");
					var quit = false;
					while (!quit) {
						drawImage(image, 0, 0);
						if (keyPress(k_escape)) quit = true;
						update();
						wait(10);
					}
				");
		}

		private static void TestTranspilation(string squirrelCode, string expectedJavascriptCode)
		{
			ISquirrelTranspiler squirrelTranspiler = new SquirrelTranspiler();

			string actualTranspiledCode = squirrelTranspiler.TranspileSquirrelCode(squirrelCode: squirrelCode);

			AssertAreEqual(RemoveWhitespace(expectedJavascriptCode), RemoveWhitespace(actualTranspiledCode));
		}

		private static void AssertAreEqual(string str1, string str2)
		{
			if (str1 != str2)
				throw new Exception("str1 and str2 do not match: \n\tstr1=[" + str1 + "] \n\tstr2=[" + str2 + "]");
		}

		private static string RemoveWhitespace(string code)
		{
			return code.Replace("\r", "").Replace("\n", "").Replace("\t", "").Replace(" ", "");
		}
	}
}
