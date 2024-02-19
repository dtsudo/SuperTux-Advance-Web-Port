
((function () {
		
	if (!window.superTuxAdvanceWebVersion)
		window.superTuxAdvanceWebVersion = {};
	
	let bodyMargin = 8;
	let disableArrowKeyScrolling = false;
	
	let urlParams = (new URL(document.location)).searchParams;
				
	let unlockAllLevels = urlParams.get("unlocklevels") !== null
		? (urlParams.get("unlocklevels") === "true")
		: false;
		
	let invulnerable = urlParams.get("invulnerable") !== null
		? (urlParams.get("invulnerable") === "true")
		: false;
		
	let ignoreErrors = urlParams.get("ignoreerrors") !== null
		? (urlParams.get("ignoreerrors") === "true")
		: true;
		
	window.superTuxAdvanceWebVersion.fps = urlParams.get("fps") !== null
		? parseInt(urlParams.get("fps"), 10)
		: 60;
		
	window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasWidth = urlParams.get("width") !== null
		? parseInt(urlParams.get("width"), 10)
		: 424;
		
	window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasHeight = urlParams.get("height") !== null
		? parseInt(urlParams.get("height"), 10)
		: 240;
		
	window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasScalingFactor = urlParams.get("scalingfactor") !== null
		? parseInt(urlParams.get("scalingfactor"), 10)
		: 3;
	
	let setBodyMargin;
	setBodyMargin = function () {
		if (document.body)
			document.body.style.margin = bodyMargin + "px";
		else
			setTimeout(setBodyMargin, 50);
	};
	setBodyMargin();
	
	window.superTuxAdvanceWebVersion.disableArrowKeyScrolling = disableArrowKeyScrolling;
	
	let createCanvas;
	createCanvas = function () {
		if (document.getElementById("superTuxAdvanceCanvasWrapper")) {
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas = document.createElement("canvas");
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas.width = window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasWidth;
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas.height = window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasHeight;
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas.style.width = (window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasWidth * window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasScalingFactor) + "px";
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas.style.height = (window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasHeight * window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasScalingFactor) + "px";
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas.style["image-rendering"] = "pixelated";
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvas.style.cursor = "none";
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
	
	let listOfLevels = null;
	
	let debugCommands = function () {
		
		if (invulnerable) {
			if (game.health > 0)
				game.health = game.maxHealth;
		}
		
		if (unlockAllLevels) {
			
			if (listOfLevels === null) {
				listOfLevels = [];
				
				let folder = window.lsdir("res/map");
				for (let i = 0; i < folder.length; i++) {
					if (folder[i].toLowerCase().endsWith(".json"))
						listOfLevels.push(folder[i].substring(0, folder[i].length - 5));
				}
				folder = window.lsdir("contrib/bonus");
				for (let i = 0; i < folder.length; i++) {
					if (folder[i].toLowerCase().endsWith(".json"))
						listOfLevels.push(folder[i].substring(0, folder[i].length - 5));
				}
				folder = window.lsdir("contrib/frostlands");
				for (let i = 0; i < folder.length; i++) {
					if (folder[i].toLowerCase().endsWith(".json"))
						listOfLevels.push(folder[i].substring(0, folder[i].length - 5));
				}
			}
			
			for (let i = 0; i < listOfLevels.length; i++)
				game.completed[listOfLevels[i]] = true;
			
			game.unblocked["aurora-branches-a"] = true;
			game.unblocked["aurora-branches-b"] = true;
			game.unblocked["aurora-fort"] = true;
		}
	};
	
	let startGame = function () {
		let computeAndRenderNextFrame;
		let computeAndRenderNextFrameWrapped;
		let fps = window.superTuxAdvanceWebVersion.fps;
							
		let nextTimeToAct = Date.now() + (1000.0 / fps);
		
		computeAndRenderNextFrame = function () {
			let now = Date.now();
			
			if (nextTimeToAct > now) {
				requestAnimationFrame(computeAndRenderNextFrameWrapped);
				return;
			}
			
			if (nextTimeToAct < now - 5.0*(1000.0 / fps))
				nextTimeToAct = now - 5.0*(1000.0 / fps);
			
			nextTimeToAct = nextTimeToAct + (1000.0 / fps);
						
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasContext.fillStyle = "rgba(0, 0, 0, 1)";
			window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasContext.fillRect(0, 0, window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasWidth, window.superTuxAdvanceWebVersion.superTuxAdvanceCanvasHeight);
			gameCycle();
			gameRender();
			window.update();
			
			debugCommands();
				
			if (!shouldStopGame)
				requestAnimationFrame(computeAndRenderNextFrameWrapped);
		};
		
		if (ignoreErrors) {
			computeAndRenderNextFrameWrapped = function () {
				try {
					computeAndRenderNextFrame();
				} catch (err) {
					console.log("AN ERROR OCCURRED: " + err);
					requestAnimationFrame(computeAndRenderNextFrameWrapped);
				}
			};
		} else {
			computeAndRenderNextFrameWrapped = function () { computeAndRenderNextFrame(); };
		}

		requestAnimationFrame(computeAndRenderNextFrameWrapped);
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
		
		if (window.superTuxAdvanceWebVersion.imageLoadingComplete
				&& window.superTuxAdvanceWebVersion.audioLoadingComplete
				&& squirrelFilesLoadingComplete
				&& window.superTuxAdvanceWebVersion.transpilationTesting
				&& window.superTuxAdvanceWebVersion.transpilationTesting.allTestsPassed) {
			window.superTuxAdvanceWebVersion.squirrelFiles["game.brx"]();
			startGame();
		} else
			setTimeout(waitForLoadToCompleteThenStartGame, 100);
	};
	
	setTimeout(waitForLoadToCompleteThenStartGame, 0);
	
})());
