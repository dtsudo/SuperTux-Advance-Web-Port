if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/effects.nut'] = function () { 


Spark =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 
  else drawSpriteExZ ( 4 , sprSpark , floor ( frame )  , x - camx , y - camy , 45 * randInt ( 8 )  , 0 , 1 , 1 , 1 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 return squirrelClassFunction; })()) ; 
BigSpark =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 
  else drawSpriteExZ ( 4 , sprBigSpark , floor ( frame )  , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = 0 ; 
 return squirrelClassFunction; })()) ; 
Glimmer =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 
  else drawSpriteExZ ( 4 , sprGlimmer , floor ( frame )  , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 return squirrelClassFunction; })()) ; 
Poof =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 returnVal . depth = 4 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
angle =  ( 360 / 8 )  * randInt ( 8 )  ; 
 if (  squirrelTypeOf ( _arr )  == "integer" ) depth = _arr ; 
 
  } ;  returnVal . run = function (  ) { frame += 0.125 ; 
 if ( frame >= 4 ) deleteActor ( id )  ; 
 
  else drawSpriteExZ ( depth , sprPoof , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . depth = 4 ; 
 return squirrelClassFunction; })()) ; 
PoofTiny =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 if ( frame >= 4 ) deleteActor ( id )  ; 
 
  else drawSpriteExZ ( 4 , sprPoof , floor ( frame )  , x - camx , y - camy , 0 , 0 , 0.5 , 0.5 , 1 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 return squirrelClassFunction; })()) ; 
Flame =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 
  else drawSpriteExZ ( 7 , sprFlame , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 
 drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Flame" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 return squirrelClassFunction; })()) ; 
Splash =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 if ( frame >= 4 ) deleteActor ( id )  ; 
 
  else drawSpriteExZ ( 7 , sprSplash , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 0.8 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 return squirrelClassFunction; })()) ; 
FlameTiny =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 
  else drawSpriteEx ( sprFlameTiny , floor ( frame )  , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
 
 drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 ,  ( 1.0 / 8.0 )  - frame ,  ( 1.0 / 8.0 )  - frame )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . hspeed = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 return squirrelClassFunction; })()) ; 
CoinEffect =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 if ( value == 10 ) drawSpriteZ ( 4 , sprCoin10 , getFrames (  )  / 2 , x - camx , y - camy )  ; 
 
  else  if ( value == 5 ) drawSpriteZ ( 4 , sprCoin5 , getFrames (  )  / 2 , x - camx , y - camy )  ; 
 
  else drawSpriteZ ( 4 , sprCoin , getFrames (  )  / 2 , x - camx , y - camy )  ; 
 
  
  if ( vspeed >= 3 )  { 
 deleteActor ( id )  ; 
newActor ( Spark , x , y )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . vspeed =  - 6.0 ; 
 squirrelClassFunction . value = 1 ; 
 return squirrelClassFunction; })()) ; 
IceChunks =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
drawSpriteEx ( sprIceChunks , 0 , x - camx - h - 2 , y - camy + v - 2 ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteEx ( sprIceChunks , 1 , x - camx + h + 2 , y - camy + v - 2 , a , 0 , 1 , 1 , 1 )  ; 
drawSpriteEx ( sprIceChunks , 2 , x - camx - h - 2 , y - camy + v + 2 + h ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteEx ( sprIceChunks , 3 , x - camx + h + 2 , y - camy + v + 2 + h , a , 0 , 1 , 1 , 1 )  ; 
timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . h = 0.0 ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed =  - 3.0 ; 
 squirrelClassFunction . timer = 30 ; 
 squirrelClassFunction . a = 0 ; 
 return squirrelClassFunction; })()) ; 
Heal =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 
  else drawSpriteExZ ( 4 , sprHeal , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 return squirrelClassFunction; })()) ; 
AfterImage =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 } ;  returnVal . run = function (  ) { drawSpriteExZ ( depth , sprite , frame , x - camx , y - camy , angle , flip , xscale , yscale , alpha )  ; 
alpha -= 0.2 ; 
 if ( alpha <= 0 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . sprite = 0 ; 
 squirrelClassFunction . frame = 0 ; 
 squirrelClassFunction . alpha = 1.0 ; 
 squirrelClassFunction . depth = 0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . xscale = 0 ; 
 squirrelClassFunction . yscale = 0 ; 
 return squirrelClassFunction; })()) ; 
RockChunks =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . h = 0.0 ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed =  - 3.0 ; 
 returnVal . timer = 30 ; 
 returnVal . a = 0 ; 
 
 with ( returnVal ) { 
  returnVal . run = function (  ) { vspeed += 0.2 ; 
v += vspeed ; 
h += 1 ; 
a += 4 ; 
drawSpriteExZ ( 2 , sprRock , 1 , x - camx - h - 2 , y - camy + v - 2 ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteExZ ( 2 , sprRock , 2 , x - camx + h + 2 , y - camy + v - 2 , a , 0 , 1 , 1 , 1 )  ; 
drawSpriteExZ ( 2 , sprRock , 3 , x - camx - h - 2 , y - camy + v + 2 + h ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteExZ ( 2 , sprRock , 4 , x - camx + h + 2 , y - camy + v + 2 + h , a , 0 , 1 , 1 , 1 )  ; 
timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . h = 0.0 ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed =  - 3.0 ; 
 squirrelClassFunction . timer = 30 ; 
 squirrelClassFunction . a = 0 ; 
 return squirrelClassFunction; })()) ; 



}; 
