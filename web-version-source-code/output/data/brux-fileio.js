
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

((function () {
	
	window.fileExists = function (name) {
		if (window.superTuxAdvanceWebVersion.simulatedFileSystem.fileExists(name))
			return true;
		
		if (window.superTuxAdvanceWebVersion.localStorageFileSystem.fileExists(name))
			return true;
		
		return false;
	};
	
	window.fileWrite = function (name, str) {
		window.superTuxAdvanceWebVersion.localStorageFileSystem.fileWrite(name, str);
	};
	
	window.fileRead = function (str) {
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
	
	window.chdir = function (str) {
		console.log("Warning: chdir is not implemented");
	};
	
	window.lsdir = function (str) {
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
		return window.lsdir(str).filter(x => x !== "." && x !== "..").length > 0;
	};
	
	window.dostr = function (str) {
		// The squirrel transpiler prepends /*js*/ to code that gets invoked using dostr()
		if (!str.startsWith("/*js*/"))
			console.log("Warning: dostr was invoked with input: " + str);
		
		eval(str);
	};

})());
