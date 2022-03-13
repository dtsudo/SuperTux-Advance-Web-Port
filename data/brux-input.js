
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

window.k_a = 4;
window.k_x = 27;
window.k_z = 29;
window.k_1 = 30;
window.k_2 = 31;
window.k_3 = 32;
window.k_4 = 33;
window.k_5 = 34;
window.k_6 = 35;
window.k_7 = 36;
window.k_8 = 37;
window.k_9 = 38;
window.k_0 = 39;
window.k_enter = 40;
window.k_escape = 41;
window.k_equals = 46;
window.k_tick = 53;
window.k_f1 = 58;
window.k_f11 = 68;
window.k_f12 = 69;
window.k_home = 74;
window.k_pageup = 75;
window.k_end = 77;
window.k_pagedown = 78;
window.k_right = 79;
window.k_left = 80;
window.k_down = 81;
window.k_up = 82;
window.k_lctrl = 224;
window.k_lshift = 225;

window.js_max = 32768;
window.js_up = 1;
window.js_right = 2;
window.js_down = 3;
window.js_left = 4;

((function () {
	
	let bruxKeyToJavascriptKeyMapping = {};
	bruxKeyToJavascriptKeyMapping[window.k_a] = ["a", "A"];
	bruxKeyToJavascriptKeyMapping[window.k_x] = ["x", "X"];
	bruxKeyToJavascriptKeyMapping[window.k_z] = ["z", "Z"];
	bruxKeyToJavascriptKeyMapping[window.k_1] = ["1", "!"];
	bruxKeyToJavascriptKeyMapping[window.k_2] = ["2", "@"];
	bruxKeyToJavascriptKeyMapping[window.k_3] = ["3", "#"];
	bruxKeyToJavascriptKeyMapping[window.k_4] = ["4", "$"];
	bruxKeyToJavascriptKeyMapping[window.k_5] = ["5", "%"];
	bruxKeyToJavascriptKeyMapping[window.k_6] = ["6", "^"];
	bruxKeyToJavascriptKeyMapping[window.k_7] = ["7", "&"];
	bruxKeyToJavascriptKeyMapping[window.k_8] = ["8", "*"];
	bruxKeyToJavascriptKeyMapping[window.k_9] = ["9", "("];
	bruxKeyToJavascriptKeyMapping[window.k_0] = ["0", ")"];
	bruxKeyToJavascriptKeyMapping[window.k_enter] = ["Enter"];
	bruxKeyToJavascriptKeyMapping[window.k_escape] = ["Escape"];
	bruxKeyToJavascriptKeyMapping[window.k_equals] = ["=", "+"];
	bruxKeyToJavascriptKeyMapping[window.k_tick] = ["`", "~"];
	bruxKeyToJavascriptKeyMapping[window.k_f1] = ["F1"];
	bruxKeyToJavascriptKeyMapping[window.k_f11] = ["F11"];
	bruxKeyToJavascriptKeyMapping[window.k_f12] = ["F12"];
	bruxKeyToJavascriptKeyMapping[window.k_home] = ["Home"];
	bruxKeyToJavascriptKeyMapping[window.k_pageup] = ["PageUp"];
	bruxKeyToJavascriptKeyMapping[window.k_end] = ["End"];
	bruxKeyToJavascriptKeyMapping[window.k_pagedown] = ["PageDown"];
	bruxKeyToJavascriptKeyMapping[window.k_right] = ["ArrowRight"];
	bruxKeyToJavascriptKeyMapping[window.k_left] = ["ArrowLeft"];
	bruxKeyToJavascriptKeyMapping[window.k_down] = ["ArrowDown"];
	bruxKeyToJavascriptKeyMapping[window.k_up] = ["ArrowUp"];
	bruxKeyToJavascriptKeyMapping[window.k_lctrl] = ["Control"];
	bruxKeyToJavascriptKeyMapping[window.k_lshift] = ["Shift"];
	
	let mapBruxKeyToJavascriptKey = function (bruxKey) {
		if (bruxKeyToJavascriptKeyMapping[bruxKey])
			return bruxKeyToJavascriptKeyMapping[bruxKey][0];
	
		console.log("Warning: bruxKey " + bruxKey + " is not mapped to a javascript key");
		return "";
	};
	
	let mapJavascriptKeyToCanonicalKey = function (javascriptKey) {
		for (let x in bruxKeyToJavascriptKeyMapping) {
			if (bruxKeyToJavascriptKeyMapping.hasOwnProperty(x)) {
				let vals = bruxKeyToJavascriptKeyMapping[x];
				for (let i = 0; i < vals.length; i++) {
					if (vals[i] === javascriptKey)
						return vals[0];
				}
			}
		}
		
		return javascriptKey;
	};
	
	if (!window.superTuxAdvanceWebVersion)
		window.superTuxAdvanceWebVersion = {};
	
	let keysBeingPressed = [];
	let keysBeingPressedLastFrame = [];
	
	let keyDownHandler = function (e) {
		let key = e.key;
		
		key = mapJavascriptKeyToCanonicalKey(key);
			
		for (let i = 0; i < keysBeingPressed.length; i++) {
			if (keysBeingPressed[i] === key)
				return;
		}
		
		keysBeingPressed.push(key);
	};
	
	let keyUpHandler = function (e) {
		let key = e.key;
		
		key = mapJavascriptKeyToCanonicalKey(key);
				
		let newArray = [];
		
		for (let i = 0; i < keysBeingPressed.length; i++) {
			if (keysBeingPressed[i] !== key)
				newArray.push(keysBeingPressed[i]);
		}
		
		keysBeingPressed = newArray;
	};
	
	document.addEventListener("keydown", function (e) { keyDownHandler(e); }, false);
	document.addEventListener("keyup", function (e) { keyUpHandler(e); }, false);
	
	let isKeyPressed = function (k) {
		for (let i = 0; i < keysBeingPressed.length; i++) {
			if (keysBeingPressed[i] === k)
				return true;
		}
		
		return false;
	};
	
	let isKeyPressedLastFrame = function (k) {
		for (let i = 0; i < keysBeingPressedLastFrame.length; i++) {
			if (keysBeingPressedLastFrame[i] === k)
				return true;
		}
		
		return false;
	};
			
	if (!window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate)
		window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate = [];
			
	window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate.push(function () {
		keysBeingPressedLastFrame = [];
		for (let i = 0; i < keysBeingPressed.length; i++) {
			keysBeingPressedLastFrame.push(keysBeingPressed[i]);
		}
	});
	
	window.keyDown = function (bruxKey) {
		let javascriptKey = mapBruxKeyToJavascriptKey(bruxKey);
		
		if (isKeyPressed(javascriptKey))
			return true;
		
		return false;
	};

	window.keyPress = function (bruxKey) {
		let javascriptKey = mapBruxKeyToJavascriptKey(bruxKey);
				
		return isKeyPressed(javascriptKey) && !isKeyPressedLastFrame(javascriptKey);
	};

	window.keyRelease = function (bruxKey) {
		let javascriptKey = mapBruxKeyToJavascriptKey(bruxKey);
				
		return !isKeyPressed(javascriptKey) && isKeyPressedLastFrame(javascriptKey);
	};

	window.anyKeyPress = function () {
		console.log("Warning: anyKeyPress is not implemented");
	};

	window.mouseX = function () {
		console.log("Warning: mouseX is not implemented");
	};

	window.mouseY = function () {
		console.log("Warning: mouseY is not implemented");
	};

	window.mouseDown = function (b) {
		console.log("Warning: mouseDown is not implemented");
	};

	window.mousePress = function (b) {
		console.log("Warning: mousePress is not implemented");
	};

	window.mouseRelease = function (b) {
		console.log("Warning: mouseRelease is not implemented");
	};

	window.getQuit = function () {
		return false;
	};

	window.joyCount = function () {
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

	window.joyR = function (id) {
		console.log("Warning: joyR is not implemented");
	};

	window.joyL = function (id) {
		console.log("Warning: joyL is not implemented");
	};

	window.joyAxis = function (id, axis) {
		console.log("Warning: joyAxis is not implemented");
	};

	window.joyHatPress = function (id, direction) {
		return false;
	};

	window.joyHatRelease = function (id, direction) {
		return false;
	}; 

	window.joyHatDown = function (id, direction) {
		return false;
	};

	window.joyButtonPress = function (id, b) {
		return false;
	};

	window.joyButtonRelease = function (id, b) {
		return false;
	};

	window.joyButtonDown = function (id, b) {
		return false;
	};

	window.anyJoyPress = function (id) {
		return -1;
	};

	window.joyName = function (id) {
		console.log("Warning: joyName is not implemented");
	};

	window.joyAxisPress = function (id, axis, deadzone) {
		return 0;
	};

	window.joyAxisRelease = function (id, axis, deadzone) {
		console.log("Warning: joyAxisRelease is not implemented");
	};

	window.keyString = function () {
		console.log("Warning: keyString is not implemented");
	};
})());
