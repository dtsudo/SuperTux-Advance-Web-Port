if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/weapons_OLD.nut'] = function () { 


Fireball =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 90 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 3 , 3 , 0 )  ; 
newActor ( AfterFlame , x , y )  ; 
 } ;  returnVal . run = function (  ) {  if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  else  if ( placeFree ( x + hspeed , y - 4 )  )  { 
 x += hspeed ; 
y +=  - 4 ; 
vspeed =  - 1 ; 
 } 
  
  else  if ( inWater ( x , y )  ) hspeed =  - hspeed ; 
 
  else deleteActor ( id )  ; 
 
  
  
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
 } 
  
 shape . setPos ( x , y )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Fireball" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . timer = 90 ; 
 return squirrelClassFunction; })()) ; 
Iceball =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 90 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 3 , 3 , 0 )  ; 
newActor ( AfterIce , x , y )  ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  if (  ! placeFree ( x , y + 1 )  ) vspeed =  - 1.2 ; 
 
  if (  ! placeFree ( x , y - 1 )  ) vspeed = 1 ; 
 
  if (  ! placeFree ( x + 1 , y )  ||  ! placeFree ( x - 1 , y )  )  { 
  if ( placeFree ( x + 1 , y )  || placeFree ( x - 1 , y )  ) vspeed =  - 1 ; 
 
  else deleteActor ( id )  ; 
 
  } 
  
  if (  ! inWater ( x , y )  ) vspeed += 0.1 ; 
 
  else  { 
 hspeed *= 0.99 ; 
vspeed *= 0.99 ; 
 } 
  
  if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  else  if ( placeFree ( x + hspeed , y - 2 )  )  { 
 x += hspeed ; 
y +=  - 2 ; 
vspeed =  - 1 ; 
 } 
  
  else  if ( inWater ( x , y )  ) hspeed =  - hspeed ; 
 
  else deleteActor ( id )  ; 
 
  
  
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
 } 
  
 drawSprite ( sprIceball , getFrames (  )  / 2 , x - camx , y - camy )  ; 
drawLightEx ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 if ( getFrames (  )  % 5 == 0 ) newActor ( Glimmer , x - 4 + randInt ( 8 )  , y - 4 + randInt ( 8 )  )  ; 
 
 shape . setPos ( x , y )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Iceball" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . timer = 90 ; 
 return squirrelClassFunction; })()) ; 
FlameBreath =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  shape = Rec ( x , y , 4 , 4 , 0 )  ; 
 (baseConstructor.bind(this))  ( _x , _y )  ; 
vspeed = 0.5 - randFloat ( 1.0 )  ; 
newActor ( AfterFlame , x , y )  ; 
 } ;  returnVal . run = function (  ) { angle = pointAngle ( 0 , 0 , hspeed , vspeed )  - 90 ; 
frame += 0.2 ; 
x += hspeed ; 
y += vspeed ; 
 if ( gvPlayer ) x += gvPlayer . hspeed ; 
 
 shape . setPos ( x , y )  ; 
 if (  ! placeFree ( x , y )  ) deleteActor ( id )  ; 
 
  if ( frame >= 6 ) deleteActor ( id )  ; 
 
  else drawSpriteEx ( sprFlameTiny , floor ( frame )  , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
 
 drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Fireball" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 return squirrelClassFunction; })()) ; 
IceBreath =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  shape = Rec ( x , y , 4 , 4 , 0 )  ; 
 (baseConstructor.bind(this))  ( _x , _y )  ; 
vspeed = 0.5 - randFloat ( 1.0 )  ; 
 } ;  returnVal . run = function (  ) { angle = pointAngle ( 0 , 0 , hspeed , vspeed )  - 90 ; 
frame += 0.2 ; 
x += hspeed ; 
y += vspeed ; 
 if ( gvPlayer ) x += gvPlayer . hspeed ; 
 
 shape . setPos ( x , y )  ; 
 if (  ! placeFree ( x , y )  ) deleteActor ( id )  ; 
 
  if ( frame >= 6 ) deleteActor ( id )  ; 
 
  else drawSpriteEx ( sprGlimmer , floor ( frame )  , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
 
 drawLightEx ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Iceball" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 return squirrelClassFunction; })()) ; 
ExplodeF =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
stopSound ( sndExplodeF )  ; 
playSound ( sndExplodeF , 0 )  ; 
shape = Cir ( x , y , 16 )  ; 
 } ;  returnVal . run = function (  ) { drawSpriteEx ( sprExplodeF , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
frame += 0.2 ; 
 if ( frame >= 1 )  { 
  if ( actor . rawin ( "TNT" )  )  {     var foreachOutput1 = squirrelForEach( actor [ "TNT" ]  );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  { 
  if ( hitTest ( shape , i . shape )  )  { 
 newActor ( BadExplode , i . x , i . y )  ; 
tileSetSolid ( i . x , i . y , 0 )  ; 
deleteActor ( i . id )  ; 
 } 
  
  } 
     }  }  
  } 
  
  if ( frame >= 5 ) deleteActor ( id )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "ExplodeF" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 return squirrelClassFunction; })()) ; 
ExplodeN =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
stopSound ( sndBump )  ; 
playSound ( sndBump , 0 )  ; 
shape = Rec ( x , y , 16 , 16 , 0 )  ; 
 } ;  returnVal . run = function (  ) { drawSpriteEx ( sprExplodeN , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "ExplodeN" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 return squirrelClassFunction; })()) ; 
StompPoof =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
stopSound ( sndBump )  ; 
playSound ( sndBump , 0 )  ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) { drawSpriteEx ( sprPoof , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
frame += 0.2 ; 
 if ( frame >= 4 ) deleteActor ( id )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "ExplodeN" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 return squirrelClassFunction; })()) ; 
FireballK =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 90 ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Cir ( x , y , 4 )  ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  if (  ! inWater ( x , y )  ) vspeed += 0.1 ; 
 
 x += hspeed ; 
y += vspeed ; 
 if (  ! placeFree ( x , y )  )  { 
 newActor ( ExplodeF , x , y )  ; 
deleteActor ( id )  ; 
 } 
  
  if ( y > gvMap . h )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
 } 
  
 angle = pointAngle ( 0 , 0 , hspeed , vspeed )  - 90 ; 
 if ( hspeed > 0 ) drawSpriteEx ( sprFlame ,  ( getFrames (  )  / 8 )  % 4 , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprFlame ,  ( getFrames (  )  / 8 )  % 4 , x - camx , y - camy , angle , 1 , 1 , 1 , 1 )  ; 
 
 drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 4.0 , 1.0 / 4.0 )  ; 
shape . setPos ( x , y )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "FireballK" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . timer = 90 ; 
 squirrelClassFunction . angle = 0 ; 
 return squirrelClassFunction; })()) ; 
AfterFlame =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 4 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 4 , 0 )  ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Fireball" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . timer = 4 ; 
 return squirrelClassFunction; })()) ; 
AfterIce =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 4 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 4 , 0 )  ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Iceball" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . timer = 4 ; 
 return squirrelClassFunction; })()) ; 



}; 
