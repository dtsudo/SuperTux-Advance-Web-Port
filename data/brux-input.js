
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
		
		if (window.superTuxAdvanceWebVersion.disableArrowKeyScrolling) {
			if (key === "ArrowRight" || key === "ArrowLeft" || key === "ArrowUp" || key === "ArrowDown" || key === " ")
				e.preventDefault();
		}
		
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
		
	let mouseXPosition = 0;
	let mouseYPosition = 0;
		
	let mouseMoveHandler = function (e) {
		let canvas = window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas;
	
		if (!canvas || !window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasScalingFactor)
			return;
		
		let xPosition = (e.pageX !== null && e.pageX !== undefined ? e.pageX : e.clientX) - canvas.offsetLeft;
								
		if (xPosition < -5)
			xPosition = -5;
		
		if (xPosition > canvas.width * window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasScalingFactor + 5)
			xPosition = canvas.width * window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasScalingFactor + 5;
		
		let yPosition = (e.pageY !== null && e.pageY !== undefined ? e.pageY : e.clientY) - canvas.offsetTop;
		
		if (yPosition < -5)
			yPosition = -5;
		
		if (yPosition > canvas.height * window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasScalingFactor + 5)
			yPosition = canvas.height * window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasScalingFactor + 5;
		
		mouseXPosition = xPosition;
		mouseYPosition = yPosition;
	};
	
	let isLeftMouseButtonPressed = false;
	let isRightMouseButtonPressed = false;
	let isLeftMouseButtonPressedLastFrame = false;
	let isRightMouseButtonPressedLastFrame = false;
	
	let checkMouseButtonHandler = function (e) {
		if ((e.buttons & 1) === 1)
			isLeftMouseButtonPressed = true;
		else
			isLeftMouseButtonPressed = false;
		
		if ((e.buttons & 2) === 2)
			isRightMouseButtonPressed = true;
		else
			isRightMouseButtonPressed = false;
	};
						
	let disableContextMenu;
	disableContextMenu = function () {
		let canvas = window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas;
		if (!canvas) {
			setTimeout(disableContextMenu, 50);
			return;
		}
		
		canvas.addEventListener("contextmenu", function (e) { e.preventDefault(); });
	};
	disableContextMenu();
	
	document.addEventListener("mousemove", function (e) { mouseMoveHandler(e); checkMouseButtonHandler(e); }, false);
	document.addEventListener("mousedown", function (e) { checkMouseButtonHandler(e); }, false);
	document.addEventListener("mouseup", function (e) { checkMouseButtonHandler(e); }, false);

	if (!window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate)
		window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate = [];
			
	window.superTuxAdvanceWebVersion.functionsToInvokeOnUpdate.push(function () {
		keysBeingPressedLastFrame = [];
		for (let i = 0; i < keysBeingPressed.length; i++) {
			keysBeingPressedLastFrame.push(keysBeingPressed[i]);
		}
		
		isLeftMouseButtonPressedLastFrame = isLeftMouseButtonPressed;
		isRightMouseButtonPressedLastFrame = isRightMouseButtonPressed;
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
		if (!window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasScalingFactor)
			return 0;
		return Math.floor(mouseXPosition / window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasScalingFactor);
	};

	window.mouseY = function () {
		if (!window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasScalingFactor)
			return 0;
		return Math.floor(mouseYPosition / window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasScalingFactor);
	};

	window.mouseDown = function (b) {
		if (b === 0)
			return isLeftMouseButtonPressed;
		else {
			console.log("Warning: unrecognized mouseDown button - " + b);
			return false;
		}
	};

	window.mousePress = function (b) {
		if (b === 0)
			return isLeftMouseButtonPressed && !isLeftMouseButtonPressedLastFrame;
		else {
			console.log("Warning: unrecognized mousePress button - " + b);
			return false;
		}
	};

	window.mouseRelease = function (b) {
		if (b === 0)
			return !isLeftMouseButtonPressed && isLeftMouseButtonPressedLastFrame;
		else {
			console.log("Warning: unrecognized mouseRelease button - " + b);
			return false;
		}
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
		return 0;
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
	
	window.mouseWheelX = function () {
		console.log("Warning: mouseWheelX is not implemented");
		return 0;
	};
	
	window.mouseWheelY = function () {
		// Commented out this log statement to avoid spamming the console
		//console.log("Warning: mouseWheelY is not implemented");
		return 0;
	};
})());
