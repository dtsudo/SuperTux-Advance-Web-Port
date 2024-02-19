
namespace WebVersionGeneratorLibrary
{
	using System;
	using System.Collections.Generic;

	public class TranspilationTesting
	{
		private class TranspilationTest
		{
			public TranspilationTest(string squirrelCode, string expectedValue)
			{
				this.SquirrelCode = squirrelCode;
				this.ExpectedValue = expectedValue;
			}

			public string SquirrelCode { get; private set; }
			public string ExpectedValue { get; private set; }
		}

		public static void AddTestFile(ISquirrelTranspiler squirrelTranspiler)
		{
			string fileContents = "if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; \n\n";
			fileContents += "window.superTuxAdvanceWebVersion.transpilationTesting = {}; \n\n";

			fileContents += "window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed = 0; \n\n";
			fileContents += "window.superTuxAdvanceWebVersion.transpilationTesting.allTestsPassed = false; \n\n";

			List<TranspilationTest> tests = GetTests();

			for (int i = 0; i < tests.Count; i++)
			{
				TranspilationTest test = tests[i];
								
				string transpiledJavascriptCode = squirrelTranspiler.TranspileSquirrelCode(test.SquirrelCode);

				fileContents += "((function () { \n";
				fileContents += "let actualValue; \n";
				fileContents += transpiledJavascriptCode + " \n";
				fileContents += $"if (actualValue === {test.ExpectedValue}) \n";
				fileContents += "    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; \n";
				fileContents += "else \n";
				fileContents += "    throw new Error('Failed transpilation test: ' + actualValue); \n";
				fileContents += "})()); \n\n";
			}

			fileContents += "if (window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed === " + tests.Count.ToStringCultureInvariant() + ") \n";
			fileContents += "    window.superTuxAdvanceWebVersion.transpilationTesting.allTestsPassed = true; \n\n";

			string webVersionSourceCodeFolder = Util.GetWebVersionSourceCodeFolder();

			Util.WriteFileContents(
				fileName: webVersionSourceCodeFolder + "output/data/transpilationTesting.js",
				text: fileContents);
		}

		private static List<TranspilationTest> GetTests()
		{
			List<TranspilationTest> list = new List<TranspilationTest>();

			list.Add(new TranspilationTest(
				squirrelCode: @"
						local x = 3
						actualValue = x
					",
				expectedValue: "3"));

			list.Add(new TranspilationTest(
				squirrelCode: @"
						local a = /* bla */ 4 // comments
						actualValue = a
					",
				expectedValue: "4"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local a = 100
						a += 20

						local b = 100
						b -= 20

						local c = 100
						c *= 10
		
						local d = 100
						d /= 4

						local e = 100
						e %= 30

						local s = "" ""

						actualValue = a + s + b + s + c + s + d + s + e
					",
				expectedValue: "'120 80 1000 25 10'"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local x = 2 < 3
						local y = 0
						local z = 0
						if (x)
							y = 5
						else
							z = 10

						actualValue = y + z
					",
				expectedValue: "5"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local myArray = [{ draw = 0, v = 10 }, { v = 100 }, { draw = 1, v = 1000 }]
						actualValue = 0
						foreach(x in myArray) if(""draw"" in x && x.v > 0) actualValue += x.v
					",
				expectedValue: "1010"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						TranspilationTest_TypeOfTest_Class <- class {
							prop = null

							constructor(a)
							{
								prop = a
							}
						}

						local myObj = TranspilationTest_TypeOfTest_Class(5)
						local myFunc = function (x, y, z) { return x + y + z }

						actualValue = (typeof TranspilationTest_TypeOfTest_Class) + "" "" + (typeof myFunc)
					",
				expectedValue: "'class function'"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local x = {
							a = 3
							myFunc = function (i, j) { return i + j }
							myFunc2 = function () { return [] }
						}

						local y = function () { return x }

						local z = [x]

						local a1 = typeof x
						local a2 = typeof x == ""table""
						local a3 = typeof x.a
						local a4 = typeof x.a == ""integer""
						local a5 = typeof y()
						local a6 = typeof y() == ""table""
						local a7 = typeof y()[""myFunc""]
						local a8 = typeof y()[""myFunc""] == ""function""
						local a9 = typeof x[""a""]
						local a10 = typeof x[""a""] == ""integer""
						local a11 = typeof z[0].myFunc2()
						local a12 = typeof z[0].myFunc2() == ""array""

						actualValue = (a1
							+ "" "" + a2
							+ "" "" + a3
							+ "" "" + a4
							+ "" "" + a5
							+ "" "" + a6
							+ "" "" + a7
							+ "" "" + a8
							+ "" "" + a9
							+ "" "" + a10
							+ "" "" + a11
							+ "" "" + a12)
					",
				expectedValue: "'table true integer true table true function true integer true array true'"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local myArray1 = [10, 20, 30]
						local myArray2 = []
						local myString = ""hello world""
						local myObj = {
							find = function (x, y) { return x + y }
						}

						local a = myArray1.find(3)
						local b = myArray1.find(10)
						local c = myArray1.find(20)
						local d = myArray2.find(100)
						local e = myString.find(""nonexistent"")
						local f = myString.find(""ello"")
						local g = myObj.find(100, 1000)

						actualValue = a + "" "" + b + "" "" + c + "" "" + d + "" "" + e + "" "" + f + "" "" + g
					",
				expectedValue: "'null 0 1 null null 1 1100'"));

			list.Add(new TranspilationTest(
				squirrelCode: @"
						local a = ""30""
						local b = ""hello""
						local c = ""0""
						local d = format(""A B C %s D %s E %s F"", a, b, c)

						actualValue = d
					",
				expectedValue: "'A B C 30 D hello E 0 F'"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local b1 = true
						local b2 = true
						local b3 = false

						local actual1 = 0
						local actual2 = 0
						local actual3 = 0

						if (b1 && (
							b2 && !b3
						))
							actual1 = 1

						if (b1 && (
							b2 && b3
						))
							actual2 = 1

						if (!!b1 && (
							b2 && !b3
						))
							actual3 = 1

						actualValue = actual1 + "" "" + actual2 + "" "" + actual3
					",
				expectedValue: "'1 0 1'"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local x = {
							a = 3
							b = 4
							c = 5
						}						

						local key = ""a""
						local actual1 = key in x
						key = ""b""
						local actual2 = key in x

						delete x.b

						key = ""a""
						local actual3 = key in x
						key = ""b""
						local actual4 = key in x

						local x2 = {
							x3 = {
								a = 3
								b = 4
								c = 5
							}
						}

						key = ""a""
						local actual5 = key in x2.x3
						key = ""b""
						local actual6 = key in x2.x3

						delete x2.x3.b

						key = ""a""
						local actual7 = key in x2.x3
						key = ""b""
						local actual8 = key in x2.x3

						actualValue = actual1 + "" "" + actual2 + "" "" + actual3 + "" "" + actual4 + "" "" + actual5 + "" "" + actual6 + "" "" + actual7 + "" "" + actual8
					",
				expectedValue: "'true true true false true true true false'"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local a = 3
						local b = ""xyz""
						local c = ""i \"" j \"" k""
						local d = ""\\""

						actualValue = a + b + c + d
					",
				expectedValue: @"'3xyzi "" j "" k\\'"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local formatInfo = function (info) {
							if (typeof info == ""string"")
								return info

							local newcall = [0]

							for (local i = 0; i < info.len(); i++)
							{
								if (i == 0)
									newcall.push(info[i])
								else
									newcall.push(eval(info[i]))
							}

							return format.acall(newcall)
						}

						local str1 = formatInfo(""hello world"")
						local str2 = formatInfo([""AA %s BB %s CC"", ""(3 + 5).tostring()"", ""[0,0,0,0].len().tostring()""])

						actualValue = str1 + "" | "" + str2
					",
				expectedValue: "'hello world | AA 8 BB 4 CC'"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local minutes = 1
						local seconds_p1 = 3
						local seconds_p2 = 0
						local actual1 = format(""%02d:%02d.%03d"", minutes, seconds_p1, seconds_p2)

						minutes = 12
						seconds_p1 = 40
						seconds_p2 = 50
						local actual2 = format(""%02d:%02d.%03d"", minutes, seconds_p1, seconds_p2)

						actualValue = actual1 + "" "" + actual2
					",
				expectedValue: "'01:03.000 12:40.050'"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local classA = class {
							constructor(x)
							{
							}
						}

						local classB = class extends classA {
							constructor(x)
							{
								base.constructor(x)
							}
						}

						local classC = class extends classB {
							constructor(x)
							{
								base.constructor(x)
							}
						}

						local classD = class {
							constructor(x)
							{
							}
						}

						local a = classA(5)
						local b = classB(6)
						local c = classC(7)
						local d = classD(8)

						local x1 = a instanceof classA
						local x2 = a instanceof classB
						local x3 = a instanceof classC
						local x4 = a instanceof classD
						local x5 = b instanceof classA
						local x6 = b instanceof classB
						local x7 = b instanceof classC
						local x8 = b instanceof classD
						local x9  = c instanceof classA
						local x10 = c instanceof classB
						local x11 = c instanceof classC
						local x12 = c instanceof classD
						local x13 = d instanceof classA
						local x14 = d instanceof classB
						local x15 = d instanceof classC
						local x16 = d instanceof classD

						actualValue = """" + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10 + x11 + x12 + x13 + x14 + x15 + x16
					",
				expectedValue: "'truefalsefalsefalsetruetruefalsefalsetruetruetruefalsefalsefalsefalsetrue'"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local minutes = 1
						local seconds_p1 = 32
						local seconds_p2 = 550.33333333

						actualValue = format(""%02d:%02d.%03d"", minutes, seconds_p1, seconds_p2)
					",
				expectedValue: "'01:32.550'"));

			list.Add(new TranspilationTest(
				squirrelCode: @"
						local classA = class {
							aa = 0
							constructor(x)
							{
								aa = x
							}
						}

						local classB = class extends classA {
							constructor(x)
							{
								base.constructor(x)
							}
						}

						local classC = class {
							aa = 0
							function constructor(x)
							{
								aa = x
							}
						}

						local classD = class extends classC {
							function constructor(x)
							{
								base.constructor(x)
							}
						}

						local x1 = classA(5)
						local x2 = classB(6)
						local x3 = classC(7)
						local x4 = classD(8)

						local space = "" ""

						actualValue = x1.aa + space + x2.aa + space + x3.aa + space + x4.aa
					",
				expectedValue: "'5 6 7 8'"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local x1 = {
							a = 3
							b = {
								c = 5
							}
						}

						local x2 = clone(x1)
						local x3 = clone x1

						x1.a = 30
						x1.b.c = 50

						local space = "" ""

						actualValue = x1.a + space + x1.b.c + space + x2.a + space + x2.b.c + space + x3.a + space + x3.b.c
					",
				expectedValue: "'30 50 3 50 3 50'"));
			
			list.Add(new TranspilationTest(
				squirrelCode: @"
						local myArray = [3, 4]
						myArray.push(8)

						local a = myArray[0] + myArray[1] + myArray[2]
						local b = myArray.len()

						myArray.clear()
						
						local c = myArray.len()

						myArray.push(12)

						local d = myArray[0]
						local e = myArray.len()

						local s = "" ""

						actualValue = a + s + b + s + c + s + d + s + e
					",
				expectedValue: "'15 3 0 12 1'"));
			
			return list;
		}
	}
}
