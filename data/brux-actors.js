
/*
	The Brux Game Engine defines a few functions.
	
	In this file, we re-implement these functions in javascript.
*/

((function () {
	
	let actorIdGenerator = 1;
	let numActors = 0;
	window.actor = {};
		
	window.Actor = function () {
		let returnVal = {
			run: function () {},
			destructor: function () {},
			x: 0,
			y: 0,
			id: 0,
			sprite: 0
		};
		returnVal["frame"] = 0;
		
		returnVal.constructor = function (x, y) { returnVal.x = x; returnVal.y = y; };
		
		return returnVal;
	};

	window.newActor = function (type, x, y, arr) {
		if (arr === undefined)
			arr = null;
				
		let newActor;
		if (arr !== undefined && arr !== null)
			newActor = type(x, y, arr);
		else
			newActor = type(x, y);
		
		let id = actorIdGenerator;
		actorIdGenerator++;
		newActor.id = id;
		
		let actorType = window.squirrelTypeOf(newActor);
		if (!window.actor[actorType])
			window.actor[actorType] = { isActorSubTable: true };
			
		window.actor[actorType][id] = newActor;
		
		window.actor[id] = newActor;
		
		numActors++;
		
		return id;
	};

	window.deleteActor = function (id) {
		if (!window.actor[id])
			return;
		
		let actorType = window.squirrelTypeOf(window.actor[id]);
		let actorTypeTable = window.actor[actorType];
		delete actorTypeTable[id];
		window.actor[id].destructor();
		delete window.actor[id];
		
		numActors--;
	};
	
	window.deleteAllActors = function (ignorePersistent = false) {
		let actorIds = [];
		for (let a in window.actor) {
			if (window.actor.hasOwnProperty(a) && !window.actor[a].isActorSubTable)
				actorIds.push(a);
		}
		
		for (let id of actorIds) {
			if (ignorePersistent || !window.actor[id].persistent)
				window.deleteActor(id);
		}
	};

	window.runActors = function () {
		for (let a in window.actor) {
			if (window.actor.hasOwnProperty(a) && !window.actor[a].isActorSubTable)
				window.actor[a].run();
		}
	};

	window.countActors = function () {
		return numActors;
	};

	window.checkActor = function (id) {
		let returnVal = !!window.actor[id];
		
		if (returnVal && window.actor[id].isActorSubTable)
			return Object.keys(window.actor[id]).length > 1;
		
		return returnVal;
	};
	
})());
