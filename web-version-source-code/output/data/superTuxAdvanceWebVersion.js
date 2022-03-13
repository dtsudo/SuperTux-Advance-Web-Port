
((function () {
		
	if (!window.superTuxAdvanceWebVersion)
		window.superTuxAdvanceWebVersion = {};
	
	let urlParams = (new URL(document.location)).searchParams;
				
	let unlockAllLevels = urlParams.get("unlocklevels") !== null
		? (urlParams.get("unlocklevels") === "true")
		: false;
		
	let invulnerable = urlParams.get("invulnerable") !== null
		? (urlParams.get("invulnerable") === "true")
		: false;
		
	window.superTuxAdvanceWebVersion.fps = urlParams.get("fps") !== null
		? parseInt(urlParams.get("fps"), 10)
		: 60;
		
	window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasWidth = urlParams.get("width") !== null
		? parseInt(urlParams.get("width"), 10)
		: 320;
		
	window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasHeight = urlParams.get("height") !== null
		? parseInt(urlParams.get("height"), 10)
		: 240;
		
	let superTuxAdvanceCanvasScalingFactor = urlParams.get("scalingfactor") !== null
		? parseInt(urlParams.get("scalingfactor"), 10)
		: 3;
	
	let createCanvas;
	createCanvas = function () {
		if (document.getElementById("superTuxAdvanceCanvasWrapper")) {
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas = document.createElement("canvas");
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas.width = window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasWidth;
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas.height = window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasHeight;
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas.style.width = (window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasWidth * superTuxAdvanceCanvasScalingFactor) + "px";
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas.style.height = (window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasHeight * superTuxAdvanceCanvasScalingFactor) + "px";
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas.style["image-rendering"] = "pixelated";
			document.getElementById("superTuxAdvanceCanvasWrapper").appendChild(window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas);
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasContext = window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas.getContext("2d");
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasContext.imageSmoothingEnabled = false;
			
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvases = [];
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvases.push({
				canvas: window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas,
				context: window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasContext
			});
			
			window.superTuxAdvanceWebVersion.currentCanvas = 0;
		} else {
			setTimeout(createCanvas, 50);
		}
	};
	createCanvas();
	
	let shouldStopGame = false;
	
	window.stopGame = function () { shouldStopGame = true; };
	
	let debugCommands = function () {
		
		if (invulnerable) {
			if (game.health > 0)
				game.health = game.maxHealth;
		}
		
		if (unlockAllLevels) {
			game.completed["0-0"] = true;
			game.completed["0-1"] = true;
			game.completed["0-2"] = true;
			game.completed["0-3"] = true;
			game.completed["0-4"] = true;
			game.completed["0-5"] = true;
			game.completed["0-6a"] = true;
			game.completed["0-6b"] = true;
			game.completed["0-7"] = true;
			game.completed["0-8"] = true;
			game.completed["0-9"] = true;
			game.completed["Fw-1"] = true;
			game.completed["Fw-2"] = true;
			game.completed["Fw-3"] = true;
			game.completed["Fw-3b"] = true;
			game.completed["Fw-4"] = true;
			game.completed["Fw-5"] = true;
			game.completed["Fw-6"] = true;
			game.completed["Fw-7"] = true;
			game.completed["Fw-8"] = true;
			game.completed["Fw-9"] = true;
		}
	};
	
	let startGame = function () {
		let computeAndRenderNextFrame;
		let fps = window.superTuxAdvanceWebVersion.fps;
							
		let nextTimeToAct = Date.now() + (1000.0 / fps);
		
		computeAndRenderNextFrame = function () {
			let now = Date.now();
			
			if (nextTimeToAct > now) {
				setTimeout(computeAndRenderNextFrame, 5);
				return;
			}
			
			if (nextTimeToAct < now - 5.0*(1000.0 / fps))
				nextTimeToAct = now - 5.0*(1000.0 / fps);
			
			nextTimeToAct = nextTimeToAct + (1000.0 / fps);
			
			if (window.keyPress(window.k_escape) && levelEndRunner == 0 && gvGameMode != gmMain)
				togglePause();
			
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasContext.fillStyle = "rgba(0, 0, 0, 1)";
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasContext.fillRect(0, 0, window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasWidth, window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasHeight);
			gvGameMode();
			window.update();
			
			debugCommands();
				
			if (!shouldStopGame)
				setTimeout(computeAndRenderNextFrame, 0);
		};

		setTimeout(computeAndRenderNextFrame, 0);
	};
	
	let numberOfSquirrelFilesLoaded = 0;
	let squirrelFilesLoadingComplete = (window.superTuxAdvanceWebVersion.squirrelFileList.length === 0) ? true : false;
		
	for (let squirrelFile of window.superTuxAdvanceWebVersion.squirrelFileList) {
		let newScript = document.createElement("script");
		newScript.onload = function () {
			numberOfSquirrelFilesLoaded++;
			if (numberOfSquirrelFilesLoaded === window.superTuxAdvanceWebVersion.squirrelFileList.length) {
				squirrelFilesLoadingComplete = true;
			}
		};
		newScript.src = squirrelFile;
		
		document.head.appendChild(newScript);
	}
	
	let waitForLoadToCompleteThenStartGame;
	
	waitForLoadToCompleteThenStartGame = function () {
		if (!window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasContext) {
			setTimeout(waitForLoadToCompleteThenStartGame, 100);
			return;
		}
		
		if (window.superTuxAdvanceWebVersion.imageLoadingComplete && window.superTuxAdvanceWebVersion.audioLoadingComplete && squirrelFilesLoadingComplete) {
			window.superTuxAdvanceWebVersion.squirrelFiles["tux.brx"]();
			startGame();
		} else
			setTimeout(waitForLoadToCompleteThenStartGame, 100);
	};
	
	setTimeout(waitForLoadToCompleteThenStartGame, 0);
	
})());
