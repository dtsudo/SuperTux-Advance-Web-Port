
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

((function () {
	
	let normalizeFileName = function (fileName) {
		while (true) {
			let newName = fileName.replace("//", "/");
			if (newName === fileName)
				return fileName;
			fileName = newName;
		}
	};
	
	window.mount = function (string1, string2, bool) {
		console.log("Warning: mount is not implemented");
	};
	
	window.unmount = function (str) {
		console.log("Warning: unmount is not implemented");
	};
	
	window.fileExists = function (name) {
		
		name = normalizeFileName(name);
		
		if (window.superTuxAdvanceWebVersion.simulatedFileSystem.fileExists(name))
			return true;
		
		if (window.superTuxAdvanceWebVersion.localStorageFileSystem.fileExists(name))
			return true;
		
		return false;
	};
	
	window.fileWrite = function (name, str) {
		
		name = normalizeFileName(name);
		
		window.superTuxAdvanceWebVersion.localStorageFileSystem.fileWrite(name, str);
	};
	
	window.fileRead = function (str) {
		
		str = normalizeFileName(str);
		
		let simulatedFile = window.superTuxAdvanceWebVersion.simulatedFileSystem.fileRead(str);
		let localStorageFile = window.superTuxAdvanceWebVersion.localStorageFileSystem.fileRead(str);
		
		if (simulatedFile === undefined || simulatedFile === null)
			return localStorageFile;
		
		if (localStorageFile === undefined || localStorageFile === null)
			return simulatedFile;
		
		if (simulatedFile === "")
			return localStorageFile;
		
		return simulatedFile;
	};
	
	window.fileAppend = function (name, string) {
		console.log("Warning: fileAppend is not implemented");
	};
	
	window.fileDelete = function (string) {
		console.log("Warning: fileDelete is not implemented");
	};
		
	window.jsonRead = function (string) {
		try {
			let returnVal = JSON.parse(string);
			return returnVal;
		} catch (err) {
			// Some of the json files include comments (which is not valid json syntax)
		}
		
		return eval("(\n" + string + "\n)");
	};

	window.jsonWrite = function (table) {
		return JSON.stringify(table);
	};
	
	window.getdir = function () {
		console.log("Warning: getdir is not implemented");
	};
	
	window.getPrefDir = function (str1, str2) {
		console.log("Warning: getPrefDir is not implemented");
	};
	
	window.getWriteDir = function () {
		console.log("Warning: getWriteDir is not implemented");
	};
	
	window.setWriteDir = function (str) {
		console.log("Warning: setWriteDir is not implemented");
	};
	
	window.chdir = function (str) {
		console.log("Warning: chdir is not implemented");
	};
	
	window.lsdir = function (str) {
		
		str = normalizeFileName(str);
		
		let localStorageFiles = window.superTuxAdvanceWebVersion.localStorageFileSystem.lsdir(str);
		let simulatedFileSystemFiles = window.superTuxAdvanceWebVersion.simulatedFileSystem.lsdir(str);
		
		let returnVal = [".", ".."];
		
		for (let file of localStorageFiles) {
			returnVal.push(file);
		}
		
		for (let file of simulatedFileSystemFiles) {
			returnVal.push(file);
		}
		
		return returnVal;
	};
		
	window.isdir = function (str) {
		str = normalizeFileName(str);
		
		return window.lsdir(str).filter(x => x !== "." && x !== "..").length > 0;
	};
	
	window.createDir = function (str) {
		console.log("Warning: createDir is not implemented");
	};
	
	window.dostr = function (str) {
		// The squirrel transpiler prepends /*js*/ to code that gets invoked using dostr()
		if (!str.startsWith("/*js*/"))
			console.log("Warning: dostr was invoked with input: " + str);
		
		eval(str);
	};

})());
