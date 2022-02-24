
((function () {
	window.imageFiles.imageDictionary = {};
	
	window.imageFiles.numFilesLoaded = 0;
	window.imageFiles.loadingComplete = false;
	
	for (var i = 0; i < window.imageFiles.imageList.length; i++) {
		var fileName = window.imageFiles.imageList[i].fileLocation;
		
		var img = new Image();
		img.addEventListener('load', function () {
			window.imageFiles.numFilesLoaded++;
			if (window.imageFiles.numFilesLoaded === window.imageFiles.imageList.length)
				window.imageFiles.loadingComplete = true;
		});
		
		img.src = fileName;
		
		window.imageFiles.imageDictionary[window.imageFiles.imageList[i].originalName] = img;
	}
})());

((function(){
	var keysBeingPressed = [];
	var keysBeingPressedLastFrame = [];
	
	var keyDownHandler = function (e) {
		var key = e.key;
		
		if (key === "Z")
			key = "z";
		if (key === "X")
			key = "x";
		
		for (var i = 0; i < keysBeingPressed.length; i++) {
			if (keysBeingPressed[i] === key)
				return;
		}
		
		keysBeingPressed.push(key);
	};
	
	var keyUpHandler = function (e) {
		var key = e.key;
		
		if (key === "Z")
			key = "z";
		if (key === "X")
			key = "x";
		
		var newArray = [];
		
		for (var i = 0; i < keysBeingPressed.length; i++) {
			if (keysBeingPressed[i] !== key)
				newArray.push(keysBeingPressed[i]);
		}
		
		keysBeingPressed = newArray;
	};
	
	document.addEventListener('keydown', function (e) { keyDownHandler(e); }, false);
	document.addEventListener('keyup', function (e) { keyUpHandler(e); }, false);
	
	var isKeyPressed = function (k) {
		for (var i = 0; i < keysBeingPressed.length; i++) {
			if (keysBeingPressed[i] === k)
				return true;
		}
		
		return false;
	};
	
	var isKeyPressedLastFrame = function (k) {
		for (var i = 0; i < keysBeingPressedLastFrame.length; i++) {
			if (keysBeingPressedLastFrame[i] === k)
				return true;
		}
		
		return false;
	};
	
	var isKeyJustPressed = function (k) {
		return isKeyPressed(k) && !isKeyPressedLastFrame(k);
	};
	
	var isKeyJustReleased = function (k) {
		return !isKeyPressed(k) && isKeyPressedLastFrame(k);
	};
	
	var update = function () {
		keysBeingPressedLastFrame = [];
		for (var i = 0; i < keysBeingPressed.length; i++) {
			keysBeingPressedLastFrame.push(keysBeingPressed[i]);
		}
	};
	
	if (!window.keyboardHelper)
		window.keyboardHelper = {};
	window.keyboardHelper.isKeyPressed = isKeyPressed;
	window.keyboardHelper.isKeyJustPressed = isKeyJustPressed;
	window.keyboardHelper.isKeyJustReleased = isKeyJustReleased;
	window.keyboardHelper.update = update;
})());

window.setDrawColor = function (color) {
	
};

window.pointAngle = function( x1, y1, x2, y2 ) {
	return Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
};

window.lendirX = function( length, direction ) {
	
	return length * Math.cos(direction * Math.PI / 180);
};

window.lendirY = function( length, direction ) {
	return length * Math.sin(direction * Math.PI / 180);
};

window.sin = function (x) {
	return Math.sin(x);
};

window.cos = function (x) {
	return Math.cos(x);
};

window.tan = function (x) {
	return Math.tan(x);
};

window.drawRec = function (x, y, width, height, solid) {
	
};

window.drawRect = window.drawRec;

window.sqrt = function (x) {
	return Math.sqrt(x);
};

window.stopChannel = function (channel) {
	
};



window.drawSprite = function (sprite, frameNum, x, y) {
	window.drawSpriteExMod(sprite, frameNum, x, y, 0, 0, 1, 1, 1, 0xffffffff);
};

window.drawSpriteEx = function (sprite, frameNum, x, y, angle, flip, xscale, yscale, alpha) {
	
	window.drawSpriteExMod(sprite, frameNum, x, y, angle, flip, xscale, yscale, alpha, 0xffffffff);
};

window.drawSpriteExMod = function( sprite, frameNum, x, y, angle, flip, xscale, yscale, alpha, color) {

	var context = window.superTuxAdvanceCanvasContext;
	
	if (window.canvasTarget !== 0)
		context = window.canvasTextures[window.canvasTarget].getContext('2d');
	
	if (sprite.type === "sprite") {
		
		var radianConversion = 2.0 * Math.PI / 360.0;
		
		if (window.canvasTarget === 0)
			context.translate(x * 3, y * 3);
		else
			context.translate(x, y);
		
		context.translate(-sprite.pivotX, -sprite.pivotY);
		
		context.scale(xscale, yscale);
		
		context.translate(sprite.pivotX, sprite.pivotY);
		context.rotate(angle * radianConversion);
		context.translate(-sprite.pivotX, -sprite.pivotY);
				
		if (flip) {
			context.translate(sprite.width, 0);
			context.scale(-1, 1);
		}
		
		var sx = 0;
		var sy = 0;
		
		var numTotalFrames = (sprite.img.naturalWidth / sprite.width) * (sprite.img.naturalHeight / sprite.height);
		
		frameNum = Math.floor(frameNum);
		
		frameNum = frameNum % numTotalFrames;
		
		var numFramesPerRow = sprite.img.naturalWidth / sprite.width;
		
		while (frameNum >= numFramesPerRow) {
			frameNum -= numFramesPerRow;
			sy += sprite.height;
		}
		while (frameNum > 0) {
			frameNum -= 1;
			sx += sprite.width;
		}
		
		var sWidth = sprite.width;
		var sHeight = sprite.height;
		if (window.canvasTarget === 0)
			context.drawImage(sprite.img, sx, sy, sWidth, sHeight, 0, 0, sWidth * 3, sHeight * 3);
		else
			context.drawImage(sprite.img, sx, sy, sWidth, sHeight, 0 , 0, sWidth, sHeight);
		
		context.setTransform(1, 0, 0, 1, 0, 0);
	}
	else if (sprite.type === "font") {
		window.drawSprite(sprite.sprite, frameNum, x, y);
	}

};

window.floor = function (num) {
	return Math.floor(num);
};

window.ceil = function (num) {
	return Math.ceil(num);
};

window.round = function (num) {
	return Math.round(num);
};

window.dostr = function (str) {
	if (str.startsWith("/*js*/"))
		eval(str);
	else
		console.log("dostr: " + str);
};

window.squirrelForEach = function (expression) {
	
	if (Array.isArray(expression)) {
		var arrayIndex = -1;
		return {
			next: function () { arrayIndex++; },
			isDone: function () { return arrayIndex === expression.length; },
			getKey: function () { return arrayIndex; },
			getValue: function () { return expression[arrayIndex]; }
		};
	}
	
	var keyValuePairs = [];
	for (var prop in expression) {
		if (prop !== "isSubTable" && prop !== "rawin" && prop !== "clear")
			keyValuePairs.push({ k: prop, v: expression[prop] });
	}
	
	var index = -1;
	
	return {
		next: function () { index++; },
		isDone: function () { return index === keyValuePairs.length; },
		getKey: function () { return keyValuePairs[index].k; },
		getValue: function () { return keyValuePairs[index].v; }
	};
};

window.loadSound = function (file) {
	// TODO
};

window.stopSound = function (id) {
};

window.lsdir = function (str) {

	var split = str.split('/');
	var index = 0;
	var currentLocation = window.folderStructure;
	while (true) {
		if (index === split.length) {
			break;
		}
		currentLocation = currentLocation[split[index]];
		index++;
		if (!currentLocation)
			return [];
	}
	
	var returnVal = [".", ".."];
	
	for (var x in currentLocation) {
		if (currentLocation.hasOwnProperty(x))
			returnVal.push(x);
	}
	
	return returnVal;
};

window.isdir = function (str) {
	return window.lsdir(str).filter(x => x !== "." && x !== "..").length > 0;
};

window.joyButtonDown = function (id, buttonNum) {
	return false;
};

window.joyButtonRelease = function (id, buttonNum) {
	return false;
};

window.spriteSetBlendMode = function (sprite, mode) {
	
};

window.displayW = function () {
	return 1920;
};

window.displayH = function () {
	return 1080;
};

window.setResolution = function (width, height) {
	// do nothing
};

window.canvasTextures = ["placeholder"];
window.canvasTarget = 0;
window.newTexture = function (width, height) {
	var offscreenCanvas = document.createElement('canvas');
	offscreenCanvas.width = width;
	offscreenCanvas.height = height;
	
	var length = window.canvasTextures.length;
	window.canvasTextures.push(offscreenCanvas);
	return length;
};

window.setDrawTarget = function (img) {
	window.canvasTarget = img;
};


window.resetDrawTarget = function () {
	window.canvasTarget = 0;
};

window.setWindowTitle = function (title) {
	// do nothing
};

window.setWindowIcon = function (filename) {
	// do nothing
};

window.setFPS = function (num) {
	// do nothing
};

window.clone = function (x) {
	if (x === null)
		return null;
	
	if (x === undefined)
		return undefined;
	
	if (Array.isArray(x)) {
		var newArray = [];
		for (var i = 0; i < x.length; i++)
			newArray.push(x[i]);
		return newArray;
	}
	
	if (typeof x === "object") {
		return { ... x };
	}
	
	return x;
};

window.fileWrite = function (name, string) {
	
};

window.chint = function (s) {
	return s;
};

window.playSound = function (sound, loops) {
	
};



window.jsonWrite = function (table) {
	return JSON.stringify(table);
};

window.squirrelTypeOf = function (obj) {
	if (typeof obj === "object" && obj._typeof)
		return obj._typeof();
	if (Array.isArray(obj))
		return "array";
	if (typeof obj === "object")
		return "table";
	if (typeof obj === "string")
		return "string";
};

window.fileExists = function (name) {
	if (window.files[name] !== undefined)
		return true;
	if (window.imageFiles.imageDictionary[name])
		return true;
	
	var split = name.split('/');
	var index = 0;
	var currentLocation = window.folderStructure;
	while (true) {
		if (index === split.length - 1) {
			if (currentLocation[split[index]])
				return true;
			break;
		}
		currentLocation = currentLocation[split[index]];
		index++;
		if (!currentLocation)
			break;
	}
	
	return false;
};

window.jsonRead = function (string) {
	return JSON.parse(string);
};

window.fileRead = function (string) {
	if (!window.files)
		window.files = {};
	
	if (window.files[string])
		return window.files[string];
	
	throw 'fileRead: did not find file "' + string + '"';
};

window.loadedSprites = [];

window.normalizeSpriteFileName = function (name) {
	if (name.lastIndexOf("/") >= 0)
		name = name.substring(name.lastIndexOf("/")+1);
	if (name.lastIndexOf("\\") >= 0)
		name = name.substring(name.lastIndexOf("\\")+1);
	return name;
};

window.newSprite = function (file, width, height, margin, padding, pivotX, pivotY) {
	var returnVal = {
		fileName: normalizeSpriteFileName(file),
		img: window.imageFiles.imageDictionary[file],
		width: width,
		height: height,
		margin: margin,
		padding: padding,
		pivotX: pivotX,
		pivotY: pivotY,
		type: "sprite"
	};
	
	window.loadedSprites.push(returnVal);
	
	return returnVal;
};

window.spriteName = function (id) {
	if (id.fileName)
		return id.fileName;
	
	if (window.loadedSprites[id])
		return window.loadedSprites[id].fileName;
	return "N/A";
};

window.newFont = function (sprite, firstchar, threshold, monospace, kerning) {
	return {
		type: "font",
		sprite: sprite,
		firstchar: firstchar,
		threshold: threshold,
		monospace: monospace,
		kerning: kerning
	};
};

window.findSprite = function (fileName) {
	
	for (var i = 0; i < window.loadedSprites.length; i++) {
		if (!window.loadedSprites[i].isDeleted && window.loadedSprites[i].fileName === normalizeSpriteFileName(fileName))
			return window.loadedSprites[i];
	}
	
	//return -1;
	return 0; // ????
};




window.drawImage = function (img, x, y) {
	if (typeof img === "number") {
		var context = window.superTuxAdvanceCanvasContext;
		
		if (window.canvasTarget !== 0)
			context = window.canvasTextures[window.canvasTarget].getContext('2d');
		
		var canvasImage = window.canvasTextures[img];
		if (window.canvasTarget === 0)
			context.drawImage(canvasImage, 0, 0, canvasImage.width, canvasImage.height, x * 3, y * 3, canvasImage.width * 3, canvasImage.height * 3);
		else
			context.drawImage(canvasImage, 0, 0, canvasImage.width, canvasImage.height, x, y, canvasImage.width, canvasImage.height);
	}
	else {
		// TODO
	}
};

window.print = function (str) {
	console.log(str);
};

window.frameCounter = 0;
window.update = function () {
	window.keyboardHelper.update();
	window.frameCounter++;
};

window.screenW = function () {
	return 320;
};

window.screenH = function () {
	return 240;
};

window.array = function (size, value) {
	var returnVal = [];
	for (var i = 0; i < size; i++)
		returnVal.push(value);
	return returnVal;
};

window.getFPS = function () {
	return 60;
};

window.bruxVersion = function () {
	return "0.1";
};

window.k_up = "ArrowUp";
window.k_down = "ArrowDown";
window.k_left = "ArrowLeft";
window.k_right = "ArrowRight";
window.k_z = "z";
window.k_x = "x";
window.k_lshift = "Shift";
window.k_lctrl = "Control";
window.k_escape = "Escape";
window.k_a = "a";
window.k_enter = "Enter";
window.k_home = "Home";
window.k_end = "End";
window.k_pagedown = "PageDown";
window.k_pageup = "PageUp";
window.k_f1 = "F1_TODO"; // TODO
window.k_f12 = "F12_TODO"; // TODO

window.keyDown = function (key) {
	return window.keyboardHelper.isKeyPressed(key);
};

window.keyPress = function (key) {
	return window.keyboardHelper.isKeyJustPressed(key);
};

window.keyRelease = function (key) {
	return window.keyboardHelper.isKeyJustReleased(key);
};

window.js_up = "js_up";
window.js_down = "js_down";
window.js_right = "js_right";
window.js_left = "js_left";
window.js_max = 1000;

window.joyAxisPress = function (id, axis, deadzone) {
	return 0;
};

window.joyX = function (id) {
	return 0;
};

window.joyY = function (id) {
	return 0;
};

window.joyZ = function (id) {
	return 0;
};

window.joyH = function (id) {
	return 0;
};

window.joyV = function (id) {
	return 0;
};

window.deleteSprite = function (sprite) {
	sprite.isDeleted = true;
};

window.joyHatRelease = function (id, direction) {
	return false;
}; 

window.joyHatDown = function (id, direction) {
	return false;
};

window.anyJoyPress = function () {
	return -1;
};

window.joyButtonPress = function (id, buttonNum) {
	return false;
};

window.joyHatPress = function (id, direction) {
	return false;
};

window.abs = function (num) {
	if (num < 0)
		return -num;
	return num;
};

window.distance2 = function ( x1, y1, x2, y2 ) {
	var deltaX = x2 - x1;
	var deltaY = y2 - y1;
	return Math.sqrt( deltaX*deltaX + deltaY*deltaY );
};

window.wrap = function (num, low, high) {
	var mx = low > high ? low : high;
	var mn = low < high ? low : high;

	var diff = mx - mn + 1;

	if(num >= 0) return mn + (num % diff) ;
	if(num < 0) return mx + (num%diff);
	return 0;
};

window.stopMusic = function () {
	// TODO
};

window.deleteMusic = function (music) {
	
};

window.playMusic = function (music, loops) {
	// TODO
};

window.loadMusic = function (file) {
	// TODO
};

window.randInt = function (max) {
	return Math.floor(Math.random() * max);
};

window.randFloat = function (max) {
	return Math.random() * max;
};

window.textureSetBlendMode = function (texture, mode) {
	
};

window.bm_norm = "bm_norm";
window.bm_add = "bm_add";
window.bm_sub = "bm_sub";
window.bm_mult = "bm_mult";

window.drawText = function (font, x, y, text) {
	
	var origX = x;
		
	for (var i = 0; i < text.length; i++) {
		var charCode = text.charCodeAt(i);
		
		var frameNum = charCode - font.firstchar;
		
		if (charCode === 10) {
			y += font.sprite.height;
			x = origX;
		} else {
			if (charCode !== 32)
				window.drawSprite(font.sprite, frameNum, x, y);
			
			x += font.sprite.width + font.kerning;
		}
	}
};

window.getFrames = function () {
	return window.frameCounter;
};

window.playSoundChannel = function () {
	
};




window.actorIdGenerator = 0;
window.actor = {};

window.deleteActor = function (id) {
	if (!window.actor[id])
		return;
	
	var actorType = window.squirrelTypeOf(window.actor[id]);
	delete window.actor[actorType][id];
	delete window.actor[id];
};

window.runActors = function () {
	for (var a in actor) {
		if (actor.hasOwnProperty(a) && !actor[a].isSubTable)
			actor[a].run();
	}
};

window.checkActor = function (id) {
	return !!window.actor[id];
};

window.countActors = function () {
	var count = 0;
	for (var a in actor) {
		if (actor.hasOwnProperty(a) && !actor[a].isSubTable)
			count++;
	}
	return count;
};


window.newActor = function (type, x, y, arr) {
	if (arr === undefined)
		arr = null;
	
	var actorArgs = [x, y];
	
	if (Array.isArray(arr)) {
		for (var i = 0; i < arr.length; i++)
			actorArgs.push(arr[i]);
	}
	else
		actorArgs.push(arr);
		
	var newActor = type(...actorArgs);
	
	var id = window.actorIdGenerator;
	window.actorIdGenerator++;
	newActor.id = id;
	
	var actorType = window.squirrelTypeOf(newActor);
	if (!window.actor[actorType])
		window.actor[actorType] = { isSubTable: true };
	window.actor[actorType][id] = newActor;
	
	
	window.actor[id] = newActor;
	
	return id;
};




window.Actor = function () {
	var returnVal = {
		run: function () {},
		x: 0,
		y: 0,
		id: 0,
		sprite: 0
	}
	returnVal["frame"] = 0;
	
	returnVal.constructor = function (x, y) { returnVal.x = x; returnVal.y = y; };
	
	return returnVal;
};

window.startingTickCount = Date.now();
window.getTicks = function () {
	return Date.now() - window.startingTickCount;
};

Array.prototype.top = function () {
		return this[this.length - 1];
};

Array.prototype.remove = function (idx) {
	var returnVal = this[idx];
	
	this.splice(idx, 1);
	
	return returnVal;
}

Array.prototype.len = function () {
	return this.length;
};

String.prototype.len = function () {
	return this.length;
};

String.prototype.tofloat = function () {
	return parseFloat(this);
};

String.prototype.tostring = function () {
	return this;
};

String.prototype.tointeger = function () {
	return parseInt(this);
};

Number.prototype.tointeger = function () {
	return this;
};

Number.prototype.tostring = function () {
	return this.toString();
};

Number.prototype.tofloat = function () {
	return this;
};

Object.prototype.rawin = function (x) {
	return this[x] !== undefined;
};

Object.prototype.clear = function () {
	var properties = [];
	for (var prop in this)
		properties.push(prop);
	for (var i = 0; i < properties.length; i++) {
		delete this[properties[i]];
	}
};

Boolean.prototype.tointeger = function () {
	if (this.valueOf())
		return 1;
	return 0;
};

window.strip = function (str) {
	return str.trim();
};


window.split = function (stringToDivide, separatorChar) {
	var arr = [];
	
	while (true) {
		var index = -1;

		for (var i = 0; i < separatorChar.length; i++) {
			var x = stringToDivide.indexOf(separatorChar.substring(i, i+1));
			if (index === -1 || x < index && x !== -1)
				index = x;
		}
		
		if (index < 0) {
			arr.push(stringToDivide);
			break;
		}
		if (index !== 0)
			arr.push(stringToDivide.substring(0, index));
		
		stringToDivide = stringToDivide.substring(index+1);
	}
	
	return arr;
};

window.getroottable = function () {
	return window;
};

