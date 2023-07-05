
namespace WebVersionGeneratorLibrary
{
	using System;

	public class FileNameInfo
	{
		public FileNameInfo(
			string fullyQualifiedFileName,
			string partiallyQualifiedFileName)
		{
			fullyQualifiedFileName = fullyQualifiedFileName.Replace('\\', '/');
			partiallyQualifiedFileName = partiallyQualifiedFileName.Replace('\\', '/');

			this.FullyQualifiedFileName = fullyQualifiedFileName;
			this.PartiallyQualifiedFileName = partiallyQualifiedFileName;

			this.NonQualifiedFileName = GetNonQualifiedFileName(fullyQualifiedFileName);

			int index = fullyQualifiedFileName.LastIndexOf('.');
			if (index == -1)
				this.FileExtension = "";
			else
				this.FileExtension = fullyQualifiedFileName.Substring(index + 1);
		}

		public string FullyQualifiedFileName { get; private set; }
		public string PartiallyQualifiedFileName { get; private set; }
		public string NonQualifiedFileName { get; private set; }
		public string FileExtension { get; private set; }

		public static string GetNonQualifiedFileName(string fileName)
		{
			int index = Math.Max(fileName.LastIndexOf("/", StringComparison.Ordinal), fileName.LastIndexOf("\\", StringComparison.Ordinal));
			if (index == -1)
				return fileName;
			else
				return fileName.Substring(index + 1);
		}
	}
}
