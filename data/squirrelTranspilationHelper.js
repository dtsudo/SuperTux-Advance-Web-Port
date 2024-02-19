
Object.prototype.squirrelFind = function (a, b, c, d, e, f, g) {
	if (this.substring && this.charAt && this.startsWith)
		return this.find(a, b);
	
	if (this.length || this.length === 0) {
		for (let i = 0; i < this.length; i++) {
			if (this[i] === a)
				return i;
		}
		
		return null;
	}
	
	return this.find(a, b, c, d, e, f, g);
};

window.squirrelForEach = function (expression) {
	if (Array.isArray(expression)) {
		let arrayIndex = -1;
		return {
			next: function () { arrayIndex++; },
			isDone: function () { return arrayIndex === expression.length; },
			getKey: function () { return arrayIndex; },
			getValue: function () { return expression[arrayIndex]; }
		};
	}
	
	let keyValuePairs = [];
	for (let prop in expression) {
		if (expression.hasOwnProperty(prop)) {
			if (prop !== "isActorSubTable")
				keyValuePairs.push({ k: prop, v: expression[prop] });
		}
	}
	
	let index = -1;
	
	return {
		next: function () { index++; },
		isDone: function () { return index === keyValuePairs.length; },
		getKey: function () { return keyValuePairs[index].k; },
		getValue: function () { return keyValuePairs[index].v; }
	};
};

window.squirrelInstanceOf = function (obj, className) {
	if (obj === null || obj === undefined)
		return false;
	
	if (!obj.SQUIRREL_CLASS)
		return false;
	
	if (obj.SQUIRREL_CLASS === className)
		return true;
	
	let classFunc = obj.SQUIRREL_CLASS;
	
	while (true) {
		if (!classFunc.SQUIRREL_SUPER_CLASS)
			return false;
		if (classFunc.SQUIRREL_SUPER_CLASS === className)
			return true;
		
		classFunc = classFunc.SQUIRREL_SUPER_CLASS;
	}
};

window.squirrelThreeWaysCompare = function (x, y) {
	if (x < y)
		return -1;
	if (x > y)
		return 1;
	return 0;
};

window.squirrelTypeOf = function (obj) {
	if (obj === null)
		return "null";
	if ((typeof obj === "object") && obj._typeof)
		return obj._typeof();
	if (Array.isArray(obj))
		return "array";
	if (typeof obj === "object")
		return "table";
	if (typeof obj === "string")
		return "string";
	if (typeof obj === "function") {
		if (obj.IS_CLASS_DECLARATION)
			return "class";
		return "function";
	}
	if ((typeof obj === "number") && Math.round(obj) === obj)
		return "integer";
	if (typeof obj === "boolean")
		return "bool";
	
	throw "squirrelTypeOf: unrecognized obj";
};
