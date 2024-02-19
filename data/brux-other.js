
window.max = function (a, b) {
	return a > b ? a : b;
};

window.min = function (a, b) {
	return a < b ? a : b;
};

window.pi = Math.PI;

window.int = function (x) {
	return x.tointeger();
};

window.float = function (x) {
	return x.tofloat();
};

window.str = function (x) {
	return x.tostring();
};

window.char = function (x) {
	return x.tochar();
};

window.bool = function (x) {
	return x ? true : false;
};
