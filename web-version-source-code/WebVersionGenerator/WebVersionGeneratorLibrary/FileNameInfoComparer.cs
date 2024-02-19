
namespace WebVersionGeneratorLibrary
{
	using System;
	using System.Collections.Generic;

	public class FileNameInfoComparer : IComparer<FileNameInfo>
	{
		public int Compare(FileNameInfo x, FileNameInfo y)
		{
			return string.CompareOrdinal(x.PartiallyQualifiedFileName, y.PartiallyQualifiedFileName);
		}
	}
}
