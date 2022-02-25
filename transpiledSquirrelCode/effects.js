if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


Spark =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
angle = 45 * randInt ( 8 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.25 ; 
 if ( frame >= 6 ) deleteActor ( id )  ; 
 
  else drawSpriteExZ ( 4 , sprSpark , floor ( frame )  , x - camx , y - camy , 45 * randInt ( 8 )  , 0 , 1 , 1 , 1 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Glimmer =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
angle = 45 * randInt ( 8 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.25 ; 
 if ( frame >= 3 ) deleteActor ( id )  ; 
 
  else drawSpriteExZ ( 4 , sprGlimmer , floor ( frame )  , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Poof =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
angle =  ( 360 / 8 )  * randInt ( 8 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.125 ; 
 if ( frame >= 4 ) deleteActor ( id )  ; 
 
  else drawSpriteExZ ( 4 , sprPoof , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
PoofTiny =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
angle =  ( 360 / 8 )  * randInt ( 8 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.25 ; 
 if ( frame >= 4 ) deleteActor ( id )  ; 
 
  else drawSpriteExZ ( 4 , sprPoof , floor ( frame )  , x - camx , y - camy , 0 , 0 , 0.5 , 0.5 , 1 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Flame =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
angle =  ( 360 / 8 )  * randInt ( 8 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.25 ; 
 if ( frame >= 8 ) deleteActor ( id )  ; 
 
  else drawSpriteEx ( sprFlame , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 
 drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Splash =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
angle =  ( 360 / 8 )  * randInt ( 8 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.25 ; 
 if ( frame >= 4 ) deleteActor ( id )  ; 
 
  else drawSpriteExZ ( 7 , sprSplash , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 0.8 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
FlameTiny =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) { x += hspeed ; 
y += vspeed ; 
frame += 0.25 ; 
 if ( frame >= 6 ) deleteActor ( id )  ; 
 
  else drawSpriteEx ( sprFlameTiny , floor ( frame )  , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
 
 drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 ,  ( 1.0 / 8.0 )  - frame ,  ( 1.0 / 8.0 )  - frame )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
CoinEffect =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . vspeed =  - 5.0 ; 
 returnVal . value = 1 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   if ( _arr == 5 ) value = 5 ; 
 
  else  if ( _arr == 10 ) value = 10 ; 
 
  
 game . levelCoins += value ; 
 baseConstructor  ( _x , _y )  ; 
stopSound ( sndCoin )  ; 
playSound ( sndCoin , 0 )  ; 
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
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
IceChunks =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . h = 0.0 ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed =  - 3.0 ; 
 returnVal . timer = 30 ; 
 returnVal . a = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
playSound ( sndIceBreak , 0 )  ; 
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
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Heal =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) {  if ( frame < 1 ) frame += 0.02 ; 
 
 frame += 0.05 ; 
y -= 0.5 ; 
 if ( frame >= 3 ) deleteActor ( id )  ; 
 
  else drawSpriteExZ ( 4 , sprHeal , floor ( frame )  , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



});