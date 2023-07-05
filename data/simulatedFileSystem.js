
((function () {
	
	if (!window.superTuxAdvanceWebVersion)
		window.superTuxAdvanceWebVersion = {};
	
	window.superTuxAdvanceWebVersion.simulatedFileSystem = {};
	
	let rootFolder = {};
	
	let addFileHelper = function (root, filePath, fileContentString) {
		let index = filePath.indexOf("/");
		
		if (index < 0) {
			root[filePath] = fileContentString;
		} else {
			let folder = filePath.substring(0, index);
			let restOfFilePath = filePath.substring(index + 1);
			
			if (root[folder] === undefined || root[folder] === null)
				root[folder] = {};
			
			addFileHelper(root[folder], restOfFilePath, fileContentString);
		}
	};
	
	window.superTuxAdvanceWebVersion.simulatedFileSystem.addFile = function (filePath, fileContentString) {
		while (filePath.indexOf("\\") >= 0)
			filePath = filePath.replace("\\", "/");
		
		addFileHelper(rootFolder, filePath, fileContentString);
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
	
	window.superTuxAdvanceWebVersion.simulatedFileSystem.fileExists = function (filePath) {
		while (filePath.indexOf("\\") >= 0)
			filePath = filePath.replace("\\", "/");
		
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
		
		if ((typeof root) === "string")
			return [];
		
		let returnVal = [];
		
		for (let k in root) {
			if (root.hasOwnProperty(k))
				returnVal.push(k);
		}
		
		return returnVal;
	};
	
	window.superTuxAdvanceWebVersion.simulatedFileSystem.lsdir = function (filePath) {
		while (filePath.indexOf("\\") >= 0)
			filePath = filePath.replace("\\", "/");
		
		if (filePath.length > 0 && !filePath.endsWith("/"))
			filePath = filePath + "/";
		
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
	
	window.superTuxAdvanceWebVersion.simulatedFileSystem.fileRead = function (filePath) {
		while (filePath.indexOf("\\") >= 0)
			filePath = filePath.replace("\\", "/");
		
		return fileReadHelper(rootFolder, filePath);
	};
	
})());
