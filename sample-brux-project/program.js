
((function () {
	
	var startGame = function () {
		var computeAndRenderNextFrame;
		var fps = 60;
							
		var nextTimeToAct = Date.now() + (1000.0 / fps);


		computeAndRenderNextFrame = function () {
			var now = Date.now();
			
			if (nextTimeToAct > now) {
				setTimeout(computeAndRenderNextFrame, 5);
				return;
			}
			
			if (nextTimeToAct < now - 5.0*(1000.0 / fps))
				nextTimeToAct = now - 5.0*(1000.0 / fps);
			
			nextTimeToAct = nextTimeToAct + (1000.0 / fps);
			
			if (window.keyPress(window.k_escape) && levelEndRunner == 0 && gvGameMode != gmMain)
				togglePause();
			
			window.superTuxAdvanceCanvasContext.fillStyle = 'rgba(0, 0, 0, 1)'
			window.superTuxAdvanceCanvasContext.fillRect(0, 0, 960, 720);
			gvGameMode();
			window.update();
			game.completed["0-1"]=true;
			game.completed["0-2"]=true;
			game.completed["0-3"]=true;
			game.completed["0-4"]=true;
			game.completed["0-5"]=true;
				
			setTimeout(computeAndRenderNextFrame, 0);
		};

		setTimeout(computeAndRenderNextFrame, 0);
	};
	
	var waitForLoadToCompleteThenStartGame;
	
	waitForLoadToCompleteThenStartGame = function () {
		if (!window.superTuxAdvanceCanvas) {
			window.superTuxAdvanceCanvas = document.getElementById('canvas');
			if (!window.superTuxAdvanceCanvas) {
				setTimeout(waitForLoadToCompleteThenStartGame, 100);
				return;
			}
			window.superTuxAdvanceCanvasContext = window.superTuxAdvanceCanvas.getContext('2d');
		}
		
		if (window.imageFiles.loadingComplete) {
			for (var i = 0 ; i < window.jsFiles.length; i++)
				window.jsFiles[i]();
			
			startMain();
			menu = meMain
			config.playerchar = "Tux";
			
			startGame();
		} else
			setTimeout(waitForLoadToCompleteThenStartGame, 100);
	};
	
	setTimeout(waitForLoadToCompleteThenStartGame, 0);
	
})());

