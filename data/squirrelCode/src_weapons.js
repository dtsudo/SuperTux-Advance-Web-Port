if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/weapons.nut'] = function () { 


fireWeapon =  function ( weapon , x , y , alignment , owner ) {  var c = actor [ newActor ( weapon , x , y ,  [ alignment , owner ]  )  ]  ;
 c . alignment = alignment ; 
c . owner = owner ; 
 return c ;
  }  ; 
WeaponEffect =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 1 ; 
 returnVal . element = "normal" ; 
 returnVal . cut = false ; 
 returnVal . blast = false ; 
 returnVal . piercing = 0 ; 
 returnVal . owner = 0 ; 
 returnVal . alignment = 0 ; 
 returnVal . box = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
 if (  squirrelTypeOf ( _arr )  == "array" )  { 
  if ( canint ( _arr [ 0 ]  )  ) alignment = _arr [ 0 ]  . tointeger (  )  ; 
 
  if ( canint ( _arr [ 1 ]  )  ) owner = _arr [ 1 ]  . tointeger (  )  ; 
 
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "WeaponEffect" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . element = "normal" ; 
 squirrelClassFunction . cut = false ; 
 squirrelClassFunction . blast = false ; 
 squirrelClassFunction . piercing = 0 ; 
 squirrelClassFunction . owner = 0 ; 
 squirrelClassFunction . alignment = 0 ; 
 squirrelClassFunction . box = false ; 
 return squirrelClassFunction; })()) ; 
MeleeHit =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "normal" ; 
 returnVal . timer = 4 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 4 , 4 , 0 )  ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . element = "normal" ; 
 squirrelClassFunction . timer = 4 ; 
 return squirrelClassFunction; })()) ; 
BoxHit =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "normal" ; 
 returnVal . timer = 4 ; 
 returnVal . box = true ; 
 returnVal . piercing =  - 1 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 4 , 4 , 0 )  ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  if ( debug ) drawSprite ( sprPoof , 0 , x - camx , y - camy - 8 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . element = "normal" ; 
 squirrelClassFunction . timer = 4 ; 
 squirrelClassFunction . box = true ; 
 squirrelClassFunction . piercing =  - 1 ; 
 return squirrelClassFunction; })()) ; 
StompPoof =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 1 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . blast = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) { drawSpriteEx ( sprPoof , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
frame += 0.2 ; 
 if ( frame >= 2 ) power = 0 ; 
 
  if ( frame >= 4 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . blast = true ; 
 return squirrelClassFunction; })()) ; 
ExplodeN =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 1 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
stopSound ( sndBump )  ; 
playSound ( sndBump , 0 )  ; 
shape = Rec ( x , y , 16 , 16 , 0 )  ; 
 } ;  returnVal . run = function (  ) { drawSpriteEx ( sprExplodeN , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 return squirrelClassFunction; })()) ; 
Fireball =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "fire" ; 
 returnVal . timer = 90 ; 
 returnVal . piercing = 1 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 3 , 3 , 0 )  ; 
 } ;  returnVal . physics = function (  ) { timer --  ; 
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
 
  if ( y > gvMap . h || piercing == 0 ) deleteActor ( id )  ; 
 
 shape . setPos ( x , y )  ; 
 } ;  returnVal . animation = function (  ) {  if ( hspeed > 0 ) drawSpriteEx ( sprFireball , getFrames (  )  / 2 , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprFireball , getFrames (  )  / 2 , x - camx , y - camy , 0 , 1 , 1 , 1 , 1 )  ; 
 
 drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 if ( getFrames (  )  % 3 == 0 )  { 
  var c = actor [ newActor ( FlameTiny , x , y )  ]  ;
 c . frame = 4 ; 
 } 
  
  } ;  returnVal . destructor = function (  ) { fireWeapon ( AfterFlame , x , y , alignment , owner )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . timer = 90 ; 
 squirrelClassFunction . piercing = 1 ; 
 return squirrelClassFunction; })()) ; 
AfterFlame =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "fire" ; 
 returnVal . timer = 2 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 4 , 4 , 0 )  ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . timer = 2 ; 
 return squirrelClassFunction; })()) ; 
FlameBreath =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "fire" ; 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 returnVal . power = 1.0 ; 
 returnVal . piercing = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  shape = Rec ( x , y , 4 , 4 , 0 )  ; 
 (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
vspeed = 0.5 - randFloat ( 1.0 )  ; 
fireWeapon ( AfterFlame , x , y , alignment , owner )  ; 
 } ;  returnVal . run = function (  ) { angle = pointAngle ( 0 , 0 , hspeed , vspeed )  - 90 ; 
frame += 0.2 ; 
x += hspeed ; 
y += vspeed ; 
 if ( checkActor ( owner )  ) x += actor [ owner ]  . hspeed ; 
 
 shape . setPos ( x , y )  ; 
 if (  ! placeFree ( x , y )  ) deleteActor ( id )  ; 
 
  if ( frame >= 6 ) deleteActor ( id )  ; 
 
  else drawSpriteEx ( sprFlameTiny , floor ( frame )  , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
 
 drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . power = 1.0 ; 
 squirrelClassFunction . piercing = 0 ; 
 return squirrelClassFunction; })()) ; 
FireballK =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 90 ; 
 returnVal . angle = 0 ; 
 returnVal . element = "fire" ; 
 returnVal . power = 1 ; 
 returnVal . blast = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Cir ( x , y , 4 )  ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  if (  ! inWater ( x , y )  ) vspeed += 0.1 ; 
 
 x += hspeed ; 
y += vspeed ; 
 if (  ! placeFree ( x , y )  )  { 
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
 } ;  returnVal . destructor = function (  ) { fireWeapon ( ExplodeF , x , y , alignment , owner )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . timer = 90 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . blast = true ; 
 return squirrelClassFunction; })()) ; 
ExplodeF =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "fire" ; 
 returnVal . power = 2 ; 
 returnVal . blast = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
stopSound ( sndExplodeF )  ; 
playSound ( sndExplodeF , 0 )  ; 
shape = Cir ( x , y , 12.0 )  ; 
 } ;  returnVal . run = function (  ) { drawSpriteEx ( sprExplodeF , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x ) gvPlayer . hspeed += 0.5 ; 
 
  if ( x > gvPlayer . x ) gvPlayer . hspeed -= 0.5 ; 
 
  if ( y >= gvPlayer . y ) gvPlayer . vspeed -= 0.8 ; 
 
  } 
  
  
  } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 return squirrelClassFunction; })()) ; 
ExplodeHiddenF =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "fire" ; 
 returnVal . power = 2 ; 
 returnVal . blast = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
stopSound ( sndExplodeF )  ; 
playSound ( sndExplodeF , 0 )  ; 
shape = Cir ( x , y , 12.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x ) gvPlayer . hspeed += 0.5 ; 
 
  if ( x > gvPlayer . x ) gvPlayer . hspeed -= 0.5 ; 
 
  if ( y >= gvPlayer . y ) gvPlayer . vspeed -= 0.8 ; 
 
  } 
  
  
  } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 return squirrelClassFunction; })()) ; 
FuseSpark =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "fire" ; 
 returnVal . power = 0 ; 
 returnVal . piercing =  - 1 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Cir ( x , y , 2 )  ; 
 } ;  returnVal . run = function (  ) { drawSprite ( sprFireball , getFrames (  )  , x - camx , y - camy )  ; 
shape . setPos ( x , y )  ; 
 if ( getFrames (  )  % 4 == 0 ) newActor ( FlameTiny , x - 1 + randInt ( 3 )  , y - 1 + randInt ( 3 )  )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . power = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 return squirrelClassFunction; })()) ; 
FuseLine =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PathCrawler ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . speed = 0 ; 
 returnVal . obj = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Cir ( x , y , 8 )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( speed == 0 &&  ( (actor["WeaponEffect"] !== undefined) )  && actor [ "WeaponEffect" ]  . len (  )  > 0 )  {     var foreachOutput1 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  { 
  if ( hitTest ( shape , i . shape )  && i . element == "fire" )  { 
 speed = 2 ; 
obj = fireWeapon ( FuseSpark , x , y , 0 , id )  ; 
i . piercing --  ; 
 } 
  
  } 
     }  }  
  if ( speed == 0 ) drawSprite ( sprSteelBall , 0 , x - camx , y - camy )  ; 
 
  if ( obj != 0 )  { 
 obj . x = x ; 
obj . y = y ; 
 } 
  
  } ;  returnVal . pathEnd = function (  ) { deleteActor ( obj . id )  ; 
deleteActor ( id )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . speed = 0 ; 
 squirrelClassFunction . obj = 0 ; 
 return squirrelClassFunction; })()) ; 
Iceball =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "ice" ; 
 returnVal . timer = 90 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 3 , 3 , 0 )  ; 
 } ;  returnVal . physics = function (  ) { timer --  ; 
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
  
 shape . setPos ( x , y )  ; 
 } ;  returnVal . animation = function (  ) {  if ( hspeed > 0 ) drawSpriteEx ( sprIceball , getFrames (  )  / 2 , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprIceball , getFrames (  )  / 2 , x - camx , y - camy , 0 , 1 , 1 , 1 , 1 )  ; 
 
 drawLightEx ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 if ( getFrames (  )  % 5 == 0 ) newActor ( Glimmer , x - 4 + randInt ( 8 )  , y - 4 + randInt ( 8 )  )  ; 
 
  } ;  returnVal . destructor = function (  ) { fireWeapon ( AfterIce , x , y , alignment , owner )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . element = "ice" ; 
 squirrelClassFunction . timer = 90 ; 
 return squirrelClassFunction; })()) ; 
AfterIce =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "ice" ; 
 returnVal . timer = 2 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 4 , 4 , 0 )  ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . element = "ice" ; 
 squirrelClassFunction . timer = 2 ; 
 return squirrelClassFunction; })()) ; 
IceBreath =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "ice" ; 
 returnVal . frame = 0.0 ; 
 returnVal . angle = 0 ; 
 returnVal . power = 1.0 ; 
 returnVal . piercing = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  shape = Rec ( x , y , 4 , 4 , 0 )  ; 
 (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
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
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . element = "ice" ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . power = 1.0 ; 
 squirrelClassFunction . piercing = 0 ; 
 return squirrelClassFunction; })()) ; 
ExplodeT =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "shock" ; 
 returnVal . power = 2 ; 
 returnVal . blast = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
stopSound ( sndExplodeF )  ; 
playSound ( sndExplodeF , 0 )  ; 
shape = Cir ( x , y , 12.0 )  ; 
 } ;  returnVal . run = function (  ) { drawSpriteEx ( sprExplodeT , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x ) gvPlayer . hspeed += 0.5 ; 
 
  if ( x > gvPlayer . x ) gvPlayer . hspeed -= 0.5 ; 
 
  if ( y >= gvPlayer . y ) gvPlayer . vspeed -= 0.8 ; 
 
  } 
  
  
  } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "shock" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 return squirrelClassFunction; })()) ; 
EarthballK =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 90 ; 
 returnVal . angle = 0 ; 
 returnVal . element = "earth" ; 
 returnVal . power = 1 ; 
 returnVal . blast = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Cir ( x , y , 4 )  ; 
 } ;  returnVal . physics = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
 vspeed += 0.1 ; 
x += hspeed ; 
y += vspeed ; 
 if (  ! placeFree ( x , y )  )  { 
 deleteActor ( id )  ; 
 } 
  
  if ( y > gvMap . h )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
 } 
  
 angle = pointAngle ( 0 , 0 , hspeed , vspeed )  - 90 ; 
drawSpriteEx ( sprRock , 0 , x - camx , y - camy , angle , 1 , 1 , 1 , 1 )  ; 
drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 4.0 , 1.0 / 4.0 )  ; 
shape . setPos ( x , y )  ; 
 } ;  returnVal . destructor = function (  ) { fireWeapon ( AfterEarth , x + hspeed / 2 , y + vspeed / 2 , alignment , owner )  ; 
newActor ( RockChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . timer = 90 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . element = "earth" ; 
 squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . blast = true ; 
 return squirrelClassFunction; })()) ; 
AfterEarth =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "earth" ; 
 returnVal . timer = 2 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 4 , 4 , 0 )  ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . element = "earth" ; 
 squirrelClassFunction . timer = 2 ; 
 return squirrelClassFunction; })()) ; 



}; 
