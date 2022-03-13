
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

window.squirrelTypeOf = function (obj) {
	if ((typeof obj === "object") && obj._typeof)
		return obj._typeof();
	if (Array.isArray(obj))
		return "array";
	if (typeof obj === "object")
		return "table";
	if (typeof obj === "string")
		return "string";
	if (typeof obj === "function")
		return "class";
	if ((typeof obj === "number") && Math.round(obj) === obj)
		return "integer";
	
	throw "squirrelTypeOf: unrecognized obj";
};
