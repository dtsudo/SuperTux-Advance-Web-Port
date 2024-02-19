
namespace SquirrelLanguageTranspiler
{
	using System;

	public class SquirrelTranspilerPreprocessor_FixSyntaxErrors
	{
		public static string FixSyntaxErrors(string line)
		{
			line = line.Replace(
				"drawSprite(bgForesttree1 0, ((-camx / 4) % 720) + (i * 720), screenH() - 240)",
				"drawSprite(bgForesttree1, 0, ((-camx / 4) % 720) + (i * 720), screenH() - 240)");

			line = line.Replace(
				"fireWeapon(ExplodeT, x + randInt(16) - randInt(16) y + randInt(16) - randInt(16), 0, id)",
				"fireWeapon(ExplodeT, x + randInt(16) - randInt(16), y + randInt(16) - randInt(16), 0, id)");

			line = line.Replace(
				"newActor(GoldCharge, x - 12 + randInt(24) y - 12 + randInt(24))",
				"newActor(GoldCharge, x - 12 + randInt(24), y - 12 + randInt(24))");

			return line;
		}
	}
}
