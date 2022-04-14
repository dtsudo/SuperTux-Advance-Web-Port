
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

((function () {
	
	let frameCounter = 0;
	
	window.update = function () {
		if (!window.superTuxAdvanceWebVersion)
			window.superTuxAdvanceWebVersion = {};
		
		if (!window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate)
			window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate = [];
		
		for (let i = 0; i < window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate.length; i++) {
			window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate[i]();
		}
		
		frameCounter++;
	};

	window.getOS = function () {
		return "web";
	};

	window.wait = function (ticks) {
		console.log("Warning: wait is not implemented");
	};

	window.donut = function (script) {
		if (!window.superTuxAdvanceWebVersion.squirrelFiles[script])
			console.log("Warning: " + script + " was not found");
		else
			window.superTuxAdvanceWebVersion.squirrelFiles[script]();
	};

	window.getFrames = function () {
		return frameCounter;
	};

	window.getTicks = function () {
		return Math.round(frameCounter * 1000 / window.superTuxAdvanceWebVersion.fps);
	};

	window.getFPS = function () {
		return window.superTuxAdvanceWebVersion.fps;
	};

	window.setFPS = function (num) {
		console.log("Warning: setFPS is not implemented");
	};

	window.setWindowTitle = function (str) {
		console.log("Warning: setWindowTitle is not implemented");
	};

	window.setWindowIcon = function (filename) {
		console.log("Warning: setWindowIcon is not implemented");
	};

	window.bruxVersion = function () {
		return "v.0.2.9";
	};
	
	window.toggleFullscreen = function () {
		console.log("Warning: toggleFullscreen is not implemented");
	};
	
})());
