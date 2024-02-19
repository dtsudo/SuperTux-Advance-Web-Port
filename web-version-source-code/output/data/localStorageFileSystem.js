
((function () {
	
	if (!window.superTuxAdvanceWebVersion)
		window.superTuxAdvanceWebVersion = {};
	
	window.superTuxAdvanceWebVersion.localStorageFileSystem = {};
	
	let localStorageGuid = "a61c5d4a4ea23d4aca7885e722711ec1";
	
	let localStorageKeyName = "superTuxAdvance_guid" + localStorageGuid;
		
	let getRootFolder = function () {
		try {
			let item = localStorage.getItem(localStorageKeyName);
			
			if (item === null || item === undefined || item === "")
				return {};
			
			return JSON.parse(item);
		} catch (error) {
			console.log("Warning: unable to read from localStorage");
		}
		
		return {};
	};
	
	let saveRootFolder = function (rootFolder) {
		try {
			localStorage.setItem(localStorageKeyName, JSON.stringify(rootFolder));
		} catch (error) {
			console.log("Warning: unable to write to localStorage");
		}
	};
		
	let fileWriteHelper = function (root, filePath, fileContentString) {
		let index = filePath.indexOf("/");
		
		if (index < 0) {
			root[filePath] = fileContentString;
		} else {
			let folder = filePath.substring(0, index);
			let restOfFilePath = filePath.substring(index + 1);
			
			if (root[folder] === undefined || root[folder] === null)
				root[folder] = {};
			
			fileWriteHelper(root[folder], restOfFilePath, fileContentString);
		}
	};
	
	window.superTuxAdvanceWebVersion.localStorageFileSystem.fileWrite = function (filePath, fileContentString) {
		while (filePath.indexOf("\\") >= 0)
			filePath = filePath.replace("\\", "/");
		
		let rootFolder = getRootFolder();
		
		fileWriteHelper(rootFolder, filePath, fileContentString);
		
		saveRootFolder(rootFolder);
	};
	
	let fileExistsHelper = function (root, filePath) {
		let index = filePath.indexOf("/");
		
		if (index < 0)
			return root[filePath] !== undefined && root[filePath] !== null;
		else {
			let folder = filePath.substring(0, index);
			let restOfFilePath = filePath.substring(index + 1);
			
			if (root[folder] !== undefined && root[folder] !== null)
				return fileExistsHelper(root[folder], restOfFilePath);
			else
				return false;
		}
	};
	
	window.superTuxAdvanceWebVersion.localStorageFileSystem.fileExists = function (filePath) {
		while (filePath.indexOf("\\") >= 0)
			filePath = filePath.replace("\\", "/");
		
		let rootFolder = getRootFolder();
		
		return fileExistsHelper(rootFolder, filePath);
	};
	
	let lsdirHelper = function (root, filePath) {
		let index = filePath.indexOf("/");
		
		if (index >= 0) {
			let folder = filePath.substring(0, index);
			let restOfFilePath = filePath.substring(index + 1);
			
			if (root[folder] === undefined || root[folder] === null)
				return [];
			
			return lsdirHelper(root[folder], restOfFilePath);
		}
		
		let returnVal = [];
		
		for (let k in root) {
			if (root.hasOwnProperty(k))
				returnVal.push(k);
		}
		
		return returnVal;
	};
	
	window.superTuxAdvanceWebVersion.localStorageFileSystem.lsdir = function (filePath) {
		while (filePath.indexOf("\\") >= 0)
			filePath = filePath.replace("\\", "/");
		
		if (filePath.length > 0 && !filePath.endsWith("/"))
			filePath = filePath + "/";
		
		let rootFolder = getRootFolder();
		
		return lsdirHelper(rootFolder, filePath);
	};
	
	let fileReadHelper = function (root, filePath) {
		let index = filePath.indexOf("/");
		
		if (index >= 0) {
			let folder = filePath.substring(0, index);
			let restOfFilePath = filePath.substring(index + 1);
			
			if (root[folder] !== undefined && root[folder] !== null)
				return fileReadHelper(root[folder], restOfFilePath);
			else
				return "";
		}
		
		return root[filePath];
	};
	
	window.superTuxAdvanceWebVersion.localStorageFileSystem.fileRead = function (filePath) {
		while (filePath.indexOf("\\") >= 0)
			filePath = filePath.replace("\\", "/");
		
		let rootFolder = getRootFolder();
		
		return fileReadHelper(rootFolder, filePath);
	};
	
})());
