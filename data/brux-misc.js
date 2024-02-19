
/*
	The Brux Game Engine defines a few miscellaneous functions.
	
	In this file, we re-implement these functions in javascript.
*/

window.choose = function (...array) {
	return array[Math.floor(Math.random() * array.length)];
};
