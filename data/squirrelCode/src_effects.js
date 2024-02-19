if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/effects.nut'] = function () { 


Spark =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
angle = 45 * randInt ( 8 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.25 ; 
 if ( frame >= 6 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 4 , sprSpark , floor ( frame )  , x - camx , y - camy , 45 * randInt ( 8 )  , 0 , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
BigSpark =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . flip = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr != null && _arr != "" ) flip = _arr . tointeger (  )  ; 
 
  } ;  returnVal . run = function (  ) { frame += 0.25 ; 
 if ( frame >= 6 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 4 , sprBigSpark , floor ( frame )  , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
Glimmer =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
angle = 45 * randInt ( 8 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.25 ; 
 if ( frame >= 3 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 4 , sprGlimmer , floor ( frame )  , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
Poof =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 returnVal . depth = 7 ; 
 returnVal . hspeed = 0 ; 
 returnVal . vspeed = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
angle =  ( 360 / 8 )  * randInt ( 8 )  ; 
 if (  squirrelTypeOf ( _arr )  == "integer" ) depth = _arr ; 
 
  } ;  returnVal . run = function (  ) { frame += 0.125 ; 
 if ( frame >= 4 ) deleteActor ( id )  ; 
 
 x += hspeed ; 
y += vspeed ; 
 } ;  returnVal . draw = function (  ) { drawSpriteZ ( depth , sprPoof , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . depth = 7 ; 
 squirrelClassFunction . hspeed = 0 ; 
 squirrelClassFunction . vspeed = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
PoofTiny =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 returnVal . depth = 7 ; 
 returnVal . hspeed = 0 ; 
 returnVal . vspeed = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
angle =  ( 360 / 8 )  * randInt ( 8 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.25 ; 
 if ( frame >= 4 ) deleteActor ( id )  ; 
 
 x += hspeed ; 
y += vspeed ; 
 } ;  returnVal . draw = function (  ) { drawSpriteZ ( depth , sprPoof , floor ( frame )  , x - camx , y - camy , 0 , 0 , 0.5 , 0.5 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . depth = 7 ; 
 squirrelClassFunction . hspeed = 0 ; 
 squirrelClassFunction . vspeed = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
Flame =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
angle =  ( 360 / 8 )  * randInt ( 8 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.25 ; 
 if ( frame >= 8 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 7 , sprFlame , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Flame" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
Splash =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 returnVal . sprite = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
angle =  ( 360 / 8 )  * randInt ( 8 )  ; 
popSound ( sndSplash )  ; 
 switch ( _arr )  {  case "lava" : sprite = sprLavaSplash ; 
 break ;  case "acid" : sprite = sprAcidSplash ; 
 break ;  default : sprite = sprSplash ; 
 break ;  }  } ;  returnVal . run = function (  ) { frame += 0.25 ; 
 if ( frame >= 4 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 7 , sprite , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 0.8 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . sprite = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
FlameTiny =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) { x += hspeed ; 
y += vspeed ; 
frame += 0.25 ; 
 if ( frame >= 6 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprFlameTiny , floor ( frame )  , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy + 2 , 0 , 0 ,  ( 1.0 / 6.0 )  -  ( frame / 32.0 )  ,  ( 1.0 / 6.0 )  -  ( frame / 32.0 )  )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . hspeed = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
Bubble =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) { x += hspeed ; 
y += vspeed ; 
frame += 0.25 ; 
 if ( frame >= 6 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 6 , sprBubble , floor ( frame )  , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . hspeed = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
AcidBubble =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) { x += hspeed ; 
y += vspeed ; 
frame += 0.25 ; 
 if ( frame >= 6 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 6 , sprBubble , floor ( frame )  , x - camx , y - camy , angle , 0 , 1 , 1 , 1 , 0xa0c838ff )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . hspeed = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
CoinEffect =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . vspeed =  - 6.0 ; 
 returnVal . value = 1 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   if ( _arr == 5 ) value = 5 ; 
 
  else  if ( _arr == 10 ) value = 10 ; 
 
  
 game . levelCoins += value ; 
 (baseConstructor.bind(this))  ( _x , _y )  ; 
popSound ( sndCoin , 0 )  ; 
 } ;  returnVal . run = function (  ) { vspeed += 0.5 ; 
y += vspeed ; 
 if ( vspeed >= 3 )  { 
 deleteActor ( id )  ; 
newActor ( Spark , x , y )  ; 
 } 
  
  } ;  returnVal . draw = function (  ) {  if ( value == 10 ) drawSpriteZ ( 4 , sprCoin10 , getFrames (  )  / 2 , x - camx , y - camy )  ; 
 
  else  if ( value == 5 ) drawSpriteZ ( 4 , sprCoin5 , getFrames (  )  / 2 , x - camx , y - camy )  ; 
 
  else drawSpriteZ ( 4 , sprCoin , getFrames (  )  / 2 , x - camx , y - camy )  ; 
 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . vspeed =  - 6.0 ; 
 squirrelClassFunction . value = 1 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
IceChunks =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . h = 0.0 ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed =  - 3.0 ; 
 returnVal . timer = 30 ; 
 returnVal . a = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
popSound ( sndIceBreak , 0 )  ; 
 } ;  returnVal . run = function (  ) { vspeed += 0.2 ; 
v += vspeed ; 
h += 1 ; 
a += 4 ; 
timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprIceChunks , 0 , x - camx - h - 2 , y - camy + v - 2 ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteEx ( sprIceChunks , 1 , x - camx + h + 2 , y - camy + v - 2 , a , 0 , 1 , 1 , 1 )  ; 
drawSpriteEx ( sprIceChunks , 2 , x - camx - h - 2 , y - camy + v + 2 + h ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteEx ( sprIceChunks , 3 , x - camx + h + 2 , y - camy + v + 2 + h , a , 0 , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . h = 0.0 ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed =  - 3.0 ; 
 squirrelClassFunction . timer = 30 ; 
 squirrelClassFunction . a = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
Heal =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) {  if ( frame < 1 ) frame += 0.02 ; 
 
 frame += 0.05 ; 
y -= 0.5 ; 
 if ( frame >= 3 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 4 , sprHeal , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
HealMana =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) {  if ( frame < 1 ) frame += 0.02 ; 
 
 frame += 0.05 ; 
y -= 0.5 ; 
 if ( frame >= 3 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 4 , sprHealMana , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
HealStamina =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) {  if ( frame < 1 ) frame += 0.02 ; 
 
 frame += 0.05 ; 
y -= 0.5 ; 
 if ( frame >= 3 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 4 , sprHealStamina , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
GoldCharge =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.25 ; 
y -= 1 ; 
 if ( frame >= 4 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 4 , sprGoldCharge , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
AfterImage =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . sprite = 0 ; 
 returnVal . frame = 0 ; 
 returnVal . alpha = 1.0 ; 
 returnVal . depth = 0 ; 
 returnVal . flip = 0 ; 
 returnVal . angle = 0 ; 
 returnVal . xscale = 0 ; 
 returnVal . yscale = 0 ; 
 returnVal . mod = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
sprite = _arr [ 0 ]  ; 
frame = _arr [ 1 ]  ; 
depth = _arr [ 2 ]  ; 
flip = _arr [ 3 ]  ; 
angle = _arr [ 4 ]  ; 
xscale = _arr [ 5 ]  ; 
yscale = _arr [ 6 ]  ; 
 if ( _arr . len (  )  > 7 ) alpha = _arr [ 7 ]  ; 
 
 mod = getFrames (  )  % 2 ; 
 } ;  returnVal . run = function (  ) { alpha -= 0.2 ; 
 if ( alpha <= 0 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( depth , sprite , frame , x - camx , y - camy , angle , flip , xscale , yscale , alpha )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . sprite = 0 ; 
 squirrelClassFunction . frame = 0 ; 
 squirrelClassFunction . alpha = 1.0 ; 
 squirrelClassFunction . depth = 0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . xscale = 0 ; 
 squirrelClassFunction . yscale = 0 ; 
 squirrelClassFunction . mod = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
RockChunks =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . h = 0.0 ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed =  - 3.0 ; 
 returnVal . timer = 30 ; 
 returnVal . a = 0 ; 
 
 with ( returnVal ) { 
  returnVal . run = function (  ) { vspeed += 0.25 ; 
v += vspeed ; 
h += 0.5 ; 
a += 4 ; 
timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprRock , 1 , x - camx - h - 2 , y - camy + v - 2 ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteZ ( 2 , sprRock , 2 , x - camx + h + 2 , y - camy + v - 2 , a , 0 , 1 , 1 , 1 )  ; 
drawSpriteZ ( 2 , sprRock , 3 , x - camx - h - 2 , y - camy + v + 2 + h ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteZ ( 2 , sprRock , 4 , x - camx + h + 2 , y - camy + v + 2 + h , a , 0 , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . h = 0.0 ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed =  - 3.0 ; 
 squirrelClassFunction . timer = 30 ; 
 squirrelClassFunction . a = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 



}; 
