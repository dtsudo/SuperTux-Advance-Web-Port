
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

window.bm_none = 0;
window.bm_blend = 1;
window.bm_add = 2;
window.bm_sub = 3;
window.bm_mod = 4;

((function () {
	
	window.clearScreen = function () {
		console.log("Warning: clearScreen is not implemented");
	};
		
	window.setDrawTarget = function (img) {
		window.superTuxAdvanceWebVersion.currentCanvas = img;
	};
	
	window.drawImage = function (img, x, y) {
		if ((typeof img) === "number") {
			let context = window.superTuxAdvanceWebVersion.superTuxAdvanceCanvases[window.superTuxAdvanceWebVersion.currentCanvas].context;
						
			let canvasImage = window.superTuxAdvanceWebVersion.superTuxAdvanceCanvases[img].canvas;
			
			context.drawImage(canvasImage, 0, 0, canvasImage.width, canvasImage.height, x, y, canvasImage.width, canvasImage.height);
		} else {
			console.log("Warning: drawImage did not recognize input image");
		}
	};
	
	let graphicsDrawColor = 0x000000ff;
	window.setDrawColor = function (color) {
		graphicsDrawColor = color;
	};
	
	window.drawRec = function (x, y, width, height, solid) {
		let context = window.superTuxAdvanceWebVersion.superTuxAdvanceCanvases[window.superTuxAdvanceWebVersion.currentCanvas].context;
		
		let red = (graphicsDrawColor >> 24) & 0xff;
		let green = (graphicsDrawColor >> 16) & 0xff;
		let blue = (graphicsDrawColor >> 8) & 0xff;
		let alpha = graphicsDrawColor & 0xff;
		
		context.fillStyle = 'rgba(' + red.toString() + ', ' + green.toString() + ', ' + blue.toString() + ', ' + (alpha / 255).toString() + ')';
		context.strokeStyle = 'rgba(' + red.toString() + ', ' + green.toString() + ', ' + blue.toString() + ', ' + (alpha / 255).toString() + ')';
		
		if (solid)
			context.fillRect(x, y, width, height);
		else
			context.strokeRect(x, y, width, height);
	};
	
	window.drawRect = window.drawRec;

	window.drawCircle = function (x, y, radius, solid) {
		console.log("Warning: drawCircle is not implemented");
	};
	
	window.setBackgroundColor = function (color) {
		console.log("Warning: setBackgroundColor is not implemented");
	};
	
	window.loadImage = function (file) {
		console.log("Warning: loadImage is not implemented");
	};
	
	window.loadImageKeyed = function (file, color) {
		console.log("Warning: loadImageKeyed is not implemented");
	};
	
	window.setScalingFilter = function (b) {
		console.log("Warning: setScalingFilter is not implemented");
	};

	window.setResolution = function (width, height) {
		console.log("Warning: setResolution is not implemented");
	};

	window.screenW = function () {
		return window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasWidth;
	};
	
	window.screenH = function () {
		return window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasHeight;
	};
		
	window.displayW = function () {
		console.log("Warning: displayW() is hard-coded to return 1920");
		return 1920;
	};
	
	window.displayH = function () {
		console.log("Warning: displayH() is hard-coded to return 1080");
		return 1080;
	};
		
	window.newTexture = function (width, height) {
		let offscreenCanvas = document.createElement("canvas");
		offscreenCanvas.width = width;
		offscreenCanvas.height = height;
		
		let length = window.superTuxAdvanceWebVersion.superTuxAdvanceCanvases.length;
		window.superTuxAdvanceWebVersion.superTuxAdvanceCanvases.push({
			canvas: offscreenCanvas,
			context: offscreenCanvas.getContext("2d")
		});
		return length;
	};
	
	window.drawLine = function (x1, y1, x2, y2) {
		console.log("Warning: drawLine is not implemented");
	};
	
	window.drawPoint = function (x, y) {
		console.log("Warning: drawPoint is not implemented");
	};
	
	window.resetDrawTarget = function () {
		window.superTuxAdvanceWebVersion.currentCanvas = 0;
	};
	
	window.textureSetBlendMode = function (texture, mode) {
		console.log("Warning: textureSetBlendMode is not implemented");
	};
	
})());
