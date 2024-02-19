
namespace WebVersionGeneratorLibrary
{
	using System;
	using System.Collections.Generic;
	using System.Diagnostics;
	using System.IO;

	public class Util
	{
		public static string GetExecutablePath()
		{
			string executablePath = Process.GetCurrentProcess().MainModule.FileName;
			DirectoryInfo executableDirectory = Directory.GetParent(executablePath);

			return executableDirectory.FullName;
		}

		public static string GetSuperTuxAdvanceSourceCodeFolder()
		{
			string path = GetExecutablePath();

			if (Directory.Exists(path + "/SuperTux-Advance-source-code"))
				return path + "/SuperTux-Advance-source-code" + "/";

			while (true)
			{
				int i = Math.Max(path.LastIndexOf("/", StringComparison.Ordinal), path.LastIndexOf("\\", StringComparison.Ordinal));

				if (i == -1)
					throw new Exception("Cannot find directory");

				path = path.Substring(0, i);

				if (Directory.Exists(path + "/SuperTux-Advance-source-code"))
					return path + "/SuperTux-Advance-source-code" + "/";
			}
		}

		public static string GetWebVersionSourceCodeFolder()
		{
			string path = GetExecutablePath();

			if (Directory.Exists(path + "/web-version-source-code"))
				return path + "/web-version-source-code" + "/";

			while (true)
			{
				int i = Math.Max(path.LastIndexOf("/", StringComparison.Ordinal), path.LastIndexOf("\\", StringComparison.Ordinal));

				if (i == -1)
					throw new Exception("Cannot find directory");

				path = path.Substring(0, i);

				if (Directory.Exists(path + "/web-version-source-code"))
					return path + "/web-version-source-code" + "/";
			}
		}

		public static string GetFileContentsAsString(string fileName)
		{
			string fileContents;

			using (FileStream fileStream = new FileStream(path: fileName, mode: FileMode.Open, access: FileAccess.Read))
			{
				using (StreamReader streamReader = new StreamReader(fileStream))
				{
					fileContents = streamReader.ReadToEnd();
				}
			}

			return fileContents;
		}

		public static List<byte> GetFileContentsAsBytes(string fileName)
		{
			List<byte> list = new List<byte>();

			using (FileStream fileStream = new FileStream(path: fileName, mode: FileMode.Open, access: FileAccess.Read))
			{
				using (BinaryReader binaryReader = new BinaryReader(fileStream))
				{
					try
					{
						while (true)
						{
							byte b = binaryReader.ReadByte();
							list.Add(b);
						}
					}
					catch (EndOfStreamException)
					{
					}
				}
			}

			return list;
		}

		public static void WriteFileContents(string fileName, string text)
		{
			using (FileStream fileStream = new FileStream(path: fileName, mode: FileMode.Create))
			{
				using (StreamWriter streamWriter = new StreamWriter(fileStream))
				{
					streamWriter.Write(text);
				}
			}
		}

		public static void WriteFileContents(string fileName, List<byte> bytes)
		{
			using (FileStream fileStream = new FileStream(path: fileName, mode: FileMode.Create))
			{
				using (BinaryWriter binaryWriter = new BinaryWriter(fileStream))
				{
					foreach (byte b in bytes)
					{
						binaryWriter.Write(b);
					}
				}
			}
		}

		public static List<FileNameInfo> GetAllFilesInSuperTuxAdvanceSourceCodeFolderInSortedOrder()
		{
			string rootFolder = GetSuperTuxAdvanceSourceCodeFolder();
			if (rootFolder.EndsWith("/", StringComparison.Ordinal) || rootFolder.EndsWith("\\", StringComparison.Ordinal))
				rootFolder = rootFolder.Substring(0, rootFolder.Length - 1);

			List<FileNameInfo> list = new List<FileNameInfo>();

			GetAllFilesInSuperTuxAdvanceSourceCodeFolderHelper(rootFolder, "", list);

			list.Sort(new FileNameInfoComparer());

			return list;
		}

		private static void GetAllFilesInSuperTuxAdvanceSourceCodeFolderHelper(string fullyQualifiedCurrentFolder, string partiallyQualifiedCurrentFolder, List<FileNameInfo> list)
		{
			string[] files = Directory.GetFiles(fullyQualifiedCurrentFolder);

			foreach (string file in files)
			{				
				list.Add(new FileNameInfo(
					fullyQualifiedFileName: file,
					partiallyQualifiedFileName: partiallyQualifiedCurrentFolder + FileNameInfo.GetNonQualifiedFileName(file)));
			}

			string[] folders = Directory.GetDirectories(fullyQualifiedCurrentFolder);

			foreach (string f in folders)
			{
				string folder = f;

				if (folder.EndsWith("/", StringComparison.Ordinal) || folder.EndsWith("\\", StringComparison.Ordinal))
					folder = folder.Substring(0, folder.Length - 1);

				int index = Math.Max(folder.LastIndexOf("/", StringComparison.Ordinal), folder.LastIndexOf("\\", StringComparison.Ordinal));

				GetAllFilesInSuperTuxAdvanceSourceCodeFolderHelper(
					fullyQualifiedCurrentFolder: folder,
					partiallyQualifiedCurrentFolder: partiallyQualifiedCurrentFolder + (index >= 0 ? folder.Substring(index + 1) : folder) + "/",
					list: list);
			}
		}
	}
}
