
/*
	The Brux Game Engine defines a few math-related functions.
	
	In this file, we re-implement these functions in javascript.
*/

window.randInt = function (max) {
	return Math.floor(Math.random() * max);
};

window.randFloat = function (max) {
	return Math.random() * max;
};

window.lendirX = function (length, direction) {
	return length * Math.cos(direction * Math.PI / 180.0);
};

window.lendirY = function (length, direction) {
	return length * Math.sin(direction * Math.PI / 180.0);
};

window.distance2 = function (x1, y1, x2, y2) {
	let deltaX = x2 - x1;
	let deltaY = y2 - y1;
	return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
};

window.distance3 = function (x1, y1, z1, x2, y2, z2) {
	console.log("Warning: distance3 is not implemented");
	return 1;
};

window.inDistance2 = function (x1, y1, x2, y2, distance) {
	let deltaX = x2 - x1;
	let deltaY = y2 - y1;
	return deltaX * deltaX + deltaY * deltaY <= distance * distance;
};

window.wrap = function (num, low, high) {
	let mx = low > high ? low : high;
	let mn = low < high ? low : high;

	let diff = mx - mn + 1;

	if (num >= 0)
		return mn + (num % diff);
		
	if (num < 0)
		return mx + (num % diff);
		
	return 0;
};

window.pointAngle = function (x1, y1, x2, y2) {
	return Math.atan2(y2 - y1, x2 - x1) * (180.0 / Math.PI);
};

window.round = function (num) {
	return Math.round(num);
};

window.ceil = function (num) {
	return Math.ceil(num);
};

window.floor = function (num) {
	return Math.floor(num);
};

window.abs = function (num) {
	if (num < 0)
		return -num;
	return num;
};

window.binstr = function (num) {
	console.log("Warning: binstr is not implemented");
};
