
namespace WebVersionGeneratorLibrary
{
	public class WebVersionGeneration
	{
		public static void GenerateWebVersion(ISquirrelTranspiler squirrelTranspiler)
		{
			ImageFilesHandler.CopyImageFiles();
			AudioFilesHandler.CopyAudioFiles();
			JsonFilesHandler.CopyJsonFiles(squirrelTranspiler: squirrelTranspiler);
			SquirrelFilesHandler.CopySquirrelFiles(squirrelTranspiler: squirrelTranspiler);
		}
	}
}
