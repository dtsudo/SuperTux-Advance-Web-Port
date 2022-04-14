
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

((function () {
	
	if (!window.superTuxAdvanceWebVersion)
		window.superTuxAdvanceWebVersion = {};
	
	let audioDictionary = {};
	
	let audioFileList = window.superTuxAdvanceWebVersion.audioFileList;
	
	let totalAudioObjects = 0;
	for (let a of audioFileList) {
		totalAudioObjects += a.numberOfInstances;
	}
	
	let numAudioObjectsLoaded = 0;
	
	window.superTuxAdvanceWebVersion.audioLoadingComplete = (totalAudioObjects === 0) ? true : false;
	
	for (let a of audioFileList) {
		audioDictionary[a.originalName] = [];
		
		for (let i = 0; i < a.numberOfInstances; i++) {
			let audio = new Audio(a.fileLocation);
			audio.addEventListener('canplaythrough', function () {
				numAudioObjectsLoaded++;
				if (numAudioObjectsLoaded === totalAudioObjects)
					window.superTuxAdvanceWebVersion.audioLoadingComplete = true;
			});
			audioDictionary[a.originalName].push(audio);
		}
	}
	
	let hasUserInteractedWithPage = false;
	document.addEventListener("keydown", function () { hasUserInteractedWithPage = true; }, false);
	document.addEventListener('mousedown', function () { hasUserInteractedWithPage = true; }, false);
	
	let musicVolume = 128;
	let soundVolume = 128;
	
	let soundIndex = 1;
	let soundIndexMapping = {};
	window.loadSound = function (file) {
		let index = soundIndex;
		soundIndex++;
		
		soundIndexMapping[index] = file;
		
		return index;
	};
		
	let musicIndex = 1;
	let musicIndexMapping = {};
	window.loadMusic = function (file) {
		let index = musicIndex;
		musicIndex++;
		
		musicIndexMapping[index] = file;
		
		return index;
	};

	let channelNumberArray = [];
	window.playSound = function (sound, loops) {
		let file = soundIndexMapping[sound];
		let audioArray = audioDictionary[file];
		let audio = audioArray[0];
		
		for (let i = 0; i < audioArray.length; i++) {
			if (i === audioArray.length - 1)
				audioArray[i] = audio;
			else
				audioArray[i] = audioArray[i+1];
		}
		
		audio.volume = soundVolume / 128.0;
		if (file === "res/snd/explodeF.ogg")
			audio.volume = soundVolume / 128.0 * 0.5;
		else if (file === "res/snd/fizz.ogg") 
			audio.volume = soundVolume / 128.0 * 0.3;
		audio.play();
		
		if (loops > 0)
			console.log("Warning: looping functionality in playSound is not implemented");
		
		if (loops === -1)
			console.log("Warning: looping functionality in playSound is not implemented");

		let channelNumber = 0;
		while (true) {
			if (channelNumberArray.length === channelNumber) {
				channelNumberArray.push(audio);
				return channelNumber;
			}
			
			if (channelNumberArray[channelNumber].ended) {
				channelNumberArray[channelNumber] = audio;
				return channelNumber;
			}
			
			channelNumber++;
		}
	};

	window.playSoundChannel = function (soundIndex, loops, x) {
		window.playSound(soundIndex, loops);
	};

	let currentlyPlayingMusic = null;
	let currentlyPlayingMusicVolumeModifier = 1.0;
	window.playMusic = function (m, loops) {
		if (!hasUserInteractedWithPage) {
			setTimeout(function () { window.playMusic(m, loops); }, 100);
			return;
		}
		
		if (loops !== -1)
			console.log("Warning: playMusic currently ignores the loops parameter");
		
		let musicFile = musicIndexMapping[m];
		let music = audioDictionary[musicFile][0];
		
		if (currentlyPlayingMusic !== null) {
			currentlyPlayingMusic.pause();
			currentlyPlayingMusic.currentTime = 0;
		}
		
		currentlyPlayingMusic = music;
		
		music.loop = true;
		
		if (musicFile === "res/mus/retro-2.ogg")
			currentlyPlayingMusicVolumeModifier = 0.2;
		else
			currentlyPlayingMusicVolumeModifier = 1.0;
		
		music.volume = musicVolume / 128.0 * currentlyPlayingMusicVolumeModifier;
		
		let promise = music.play();
		
		promise.catch(err => { console.log("Warning: playMusic failed with error: " + err); });
	};

	window.deleteSound = function (sound) {
		console.log("Warning: deleteSound is not implemented");
	};

	window.deleteMusic = function (music) {
		console.log("Warning: deleteMusic is not implemented");
	};

	window.checkSound = function (channel) {
		console.log("Warning: checkSound is not implemented");
	};

	window.checkMusic = function () {
		console.log("Warning: checkMusic is not implemented");
	};

	window.stopSound = function (id) {
		console.log("Warning: stopSound is not implemented");
	};

	window.stopChannel = function (channel) {
		console.log("Warning: stopChannel is not implemented");
	};

	window.stopMusic = function () {
		if (currentlyPlayingMusic !== null) {
			currentlyPlayingMusic.pause();
			currentlyPlayingMusic.currentTime = 0;
		}
		
		currentlyPlayingMusic = null;
	};

	window.setMaxChannels = function (i) {
		console.log("Warning: setMaxChannels is not implemented");
	};
	
	window.pauseMusic = function () {
		console.log("Warning: pauseMusic is not implemented");
	};

	window.resumeMusic = function () {
		console.log("Warning: resumeMusic is not implemented");
	};
	
	window.musicPaused = function () {
		console.log("Warning: musicPaused is not implemented");
	};
	
	window.fadeMusic = function (time) {
		console.log("Warning: fadeMusic currently ignores the time parameter");
		
		window.stopMusic();
	};
	
	window.setMusicVolume = function (volume) {
		musicVolume = volume;
		if (currentlyPlayingMusic !== null)
			currentlyPlayingMusic.volume = musicVolume / 128.0 * currentlyPlayingMusicVolumeModifier;
	};
	
	window.setSoundVolume = function (volume) {
		soundVolume = volume;
	};
	
	window.getMusicVolume = function () {
		return musicVolume;
	};
	
	window.getSoundVolume = function () {
		return soundVolume;
	};
	
})());
