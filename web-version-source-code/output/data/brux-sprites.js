
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

((function () {
	
	if (!window.superTuxAdvanceWebVersion)
		window.superTuxAdvanceWebVersion = {};
	
	let imageDictionary = {};
	
	let imageList = window.superTuxAdvanceWebVersion.imageList;
	
	let numFilesLoaded = 0;
	window.superTuxAdvanceWebVersion.imageLoadingComplete = (imageList.length === 0) ? true : false;
	
	for (let i = 0; i < imageList.length; i++) {
		let img = new Image();
		img.addEventListener("load", function () {
			numFilesLoaded++;
			if (numFilesLoaded === imageList.length)
				window.superTuxAdvanceWebVersion.imageLoadingComplete = true;
		});
		
		img.src = "data:image/png;base64," + window.superTuxAdvanceWebVersion.simulatedFileSystem.fileRead(imageList[i]);
		
		imageDictionary[imageList[i]] = img;
	}
	
	let loadedSprites = [];
	loadedSprites.push({
		fileName: "placeholder",
		img: null,
		width: 10, // arbitrarily chosen
		height: 10, // arbitrarily chosen
		margin: 0,
		padding: 0,
		pivotX: 0,
		pivotY: 0,
		type: "sprite",
		isDeleted: true
	});

	let normalizeSpriteFileName = function (name) {
		if (name.lastIndexOf("/") >= 0)
			name = name.substring(name.lastIndexOf("/") + 1);
		if (name.lastIndexOf("\\") >= 0)
			name = name.substring(name.lastIndexOf("\\") + 1);
		return name;
	};

	window.newSprite = function (file, width, height, margin, padding, pivotX, pivotY) {
		let returnVal = {
			fileName: normalizeSpriteFileName(file),
			img: imageDictionary[file],
			width: width,
			height: height,
			margin: margin,
			padding: padding,
			pivotX: pivotX,
			pivotY: pivotY,
			type: "sprite",
			isDeleted: false
		};
		
		loadedSprites.push(returnVal);
		
		return returnVal;
	};

	window.drawSprite = function (sprite, frameNum, x, y) {
		window.drawSpriteExMod(sprite, frameNum, x, y, 0, 0, 1, 1, 1, 0xffffffff);
	};

	window.drawSpriteEx = function (sprite, frameNum, x, y, angle, flip, xscale, yscale, alpha) {
		window.drawSpriteExMod(sprite, frameNum, x, y, angle, flip, xscale, yscale, alpha, 0xffffffff);
	};

	window.drawSpriteMod = function (sprite, frameNum, x, y, color) {
		console.log("Warning: drawSpriteMod is not implemented");
	};

	window.drawSpriteExMod = function (sprite, frameNum, x, y, angle, flip, xscale, yscale, alpha, color) {
		if (xscale <= 0 || yscale <= 0)
			return;
		
		if (alpha <= 0)
			return;
		
		while (true) {
			let modifiedSprite = false;
			
			if ((typeof sprite) === "number") {
				sprite = loadedSprites[sprite];
				modifiedSprite = true;
			}
		
			if (sprite.type === "font") {
				sprite = sprite.sprite;
				modifiedSprite = true;
			}
			
			if (!modifiedSprite)
				break;
		}
		
		if (sprite.type !== "sprite")
			throw "drawSpriteExMod was invoked with an unrecognized sprite";		
		
		x = Math.floor(x);
		y = Math.floor(y);
		
		let context = window.superTuxAdvanceWebVersion.superTuxAdvanceCanvases[window.superTuxAdvanceWebVersion.currentCanvas].context;
			
		let radianConversion = 2.0 * Math.PI / 360.0;
			
		let pivotX = sprite.pivotX;
		let pivotY = sprite.pivotY;
			
		if (flip & 1) {
			pivotX = sprite.width - pivotX;
		}
			
		if (flip & 2) {
			pivotY = sprite.height - pivotY;
		}
			
		context.translate(x, y);
			
		context.scale(xscale, yscale);
		//context.translate(-pivotX, -pivotY);
			
		//context.translate(pivotX, pivotY);
		context.rotate(angle * radianConversion);
		context.translate(-pivotX, -pivotY);
					
		if (flip & 1) {
			context.translate(sprite.width, 0);
			context.scale(-1, 1);
		}
		if (flip & 2) {
			context.translate(0, sprite.height);
			context.scale(1, -1);
		}
			
		let sx = 0;
		let sy = 0;
			
		let numTotalFrames = (sprite.img.naturalWidth / sprite.width) * (sprite.img.naturalHeight / sprite.height);
			
		frameNum = Math.floor(frameNum);
			
		frameNum = frameNum % numTotalFrames;
			
		let numFramesPerRow = sprite.img.naturalWidth / sprite.width;
			
		while (frameNum >= numFramesPerRow) {
			frameNum -= numFramesPerRow;
			sy += sprite.height;
		}
			
		while (frameNum > 0) {
			frameNum -= 1;
			sx += sprite.width;
		}
			
		context.save();
		context.globalAlpha = alpha;
			
		let sWidth = sprite.width;
		let sHeight = sprite.height;
		context.drawImage(sprite.img, sx, sy, sWidth, sHeight, 0, 0, sWidth, sHeight);
			
		context.restore();
		context.setTransform(1, 0, 0, 1, 0, 0);
	};

	window.deleteSprite = function (sprite) {
		if ((typeof sprite) === "number")
			loadedSprites[sprite].isDeleted = true;
		else
			sprite.isDeleted = true;
	};

	window.findSprite = function (fileName) {		
		for (let i = 0; i < loadedSprites.length; i++) {
			if (!loadedSprites[i].isDeleted && loadedSprites[i].fileName === normalizeSpriteFileName(fileName))
				return i;
		}
		
		return 0;
	};

	window.spriteName = function (id) {
		if (id.fileName)
			return id.fileName;
		
		if (loadedSprites[id])
			return loadedSprites[id].fileName;
		
		throw ("Unrecognized spriteName: " + id);
	};

	window.spriteW = function (id) {
		console.log("Warning: spriteW is not implemented");
	};

	window.spriteH = function (id) {
		console.log("Warning: spriteH is not implemented");
	};

	window.replaceSprite = function (sprite, file, width, height, margin, padding, pivotX, pivotY) {
		console.log("Warning: replaceSprite is not implemented");
	};

	window.spriteSetBlendMode = function (sprite, mode) {
		console.log("Warning: spriteSetBlendMode is not implemented");
	};

})());
