
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

window.drawText = function (font, x, y, text) {
	let origX = x;
	let newlineCharCode = 10;
	let spaceCharCode = 32;
		
	for (let i = 0; i < text.length; i++) {
		let charCode = text.charCodeAt(i);
		
		let frameNum = charCode - font.firstchar;
		
		if (charCode === newlineCharCode) {
			y += font.sprite.height;
			x = origX;
		} else {
			if (charCode !== spaceCharCode)
				window.drawSprite(font.sprite, frameNum, x, y);
			
			x += font.sprite.width + font.kerning;
		}
	}
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

window.chint = function (c) {
	if ((typeof c) === "string")
		return c;
	return String.fromCharCode(c);
};
