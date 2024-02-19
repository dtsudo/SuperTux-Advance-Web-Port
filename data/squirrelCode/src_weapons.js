if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/weapons.nut'] = function () { 


fireWeapon =  function ( weapon , x , y , alignment , owner ) {  var c = actor [ newActor ( weapon , x , y ,  [ alignment , owner ]  )  ]  ;
 c . alignment = alignment ; 
c . owner = owner ; 
 return c ;
  }  ; 
WeaponEffect =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 returnVal . didHit = false ; 
 
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
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . element = "normal" ; 
 squirrelClassFunction . cut = false ; 
 squirrelClassFunction . blast = false ; 
 squirrelClassFunction . piercing = 0 ; 
 squirrelClassFunction . owner = 0 ; 
 squirrelClassFunction . alignment = 0 ; 
 squirrelClassFunction . box = false ; 
 squirrelClassFunction . didHit = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
MeleeHit =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "normal" ; 
 squirrelClassFunction . timer = 4 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
BoxHit =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 
  } ;  returnVal . draw = function (  ) {  if ( debug ) drawSprite ( sprPoof , 0 , x - camx , y - camy - 8 )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "normal" ; 
 squirrelClassFunction . timer = 4 ; 
 squirrelClassFunction . box = true ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
StompPoof =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 1 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . blast = true ; 
 returnVal . altShape = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
altShape = Rec ( x , y , 4 , 4 , 0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 2 ) power = 0 ; 
 
  if ( frame >= 4 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprPoof , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . altShape = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeN =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 1 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . blast = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndExplodeN , 0 )  ; 
shape = Cir ( x , y , 8.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeN , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightGradient , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeN2 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 1 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . blast = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndExplodeN , 0 )  ; 
shape = Cir ( x , y , 24.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 96 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 96 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeN2 , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightGradient , 0 , x - camx , y - camy , 0 , 0 , 1.0 -  ( frame / 10.0 )  , 1.0 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeN3 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 1 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . blast = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndExplodeN , 0 )  ; 
shape = Cir ( x , y , 36.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 96 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 96 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeN3 , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightGradient , 0 , x - camx , y - camy , 0 , 0 , 1.0 -  ( frame / 10.0 )  , 1.0 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
RollingSlash =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 2 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . cut = true ; 
 returnVal . piercing =  - 1 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndCyraSwordSwing , 0 )  ; 
shape = Cir ( x , y , 32.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( checkActor ( owner )  )  { 
 x = actor [ owner ]  . x + actor [ owner ]  . hspeed ; 
y = actor [ owner ]  . y + actor [ owner ]  . vspeed ; 
shape . setPos ( x , y )  ; 
 } 
  
  } ;  returnVal . draw = function (  ) {  if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . cut = true ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
InstaShield =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 1 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . sprite = 0 ; 
 returnVal . angle = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndThrow , 0 )  ; 
shape = Cir ( x , y , 16.0 )  ; 
sprite = sprShieldInsta ; 
 } ;  returnVal . run = function (  ) { frame += 0.5 ; 
 if ( frame >= 4 ) deleteActor ( id )  ; 
 
  if ( checkActor ( owner )  )  { 
 x = actor [ owner ]  . x ; 
y = actor [ owner ]  . y ; 
shape . setPos ( x , y )  ; 
 } 
  
  if ( didHit && checkActor ( owner )  &&  ( (actor [ owner ] [ ( "didAirSpecial" ) ] !== undefined) )  )  { 
 actor [ owner ]  . didAirSpecial = false ; 
actor [ owner ]  . vspeed = min (  - fabs ( actor [ owner ]  . vspeed )  ,  - 4.0 )  ; 
actor [ owner ]  . antigrav = 0 ; 
actor [ owner ]  . homingTarget = 0 ; 
 } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 4 , sprite , frame , x - camx , y - camy , angle )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . sprite = 0 ; 
 squirrelClassFunction . angle = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
Fireball =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "fire" ; 
 returnVal . timer = 90 ; 
 returnVal . piercing = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 3 , 3 , 0 )  ; 
 } ;  returnVal . physics = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  if (  ! placeFree ( x , y )  ) deleteActor ( id )  ; 
 
  if (  ! placeFree ( x , y + 1 )  ) vspeed =  - 1.2 ; 
 
  if (  ! placeFree ( x , y - 1 )  ) vspeed = 1 ; 
 
  if (  ! placeFree ( x + 1 , y )  ||  ! placeFree ( x - 1 , y )  )  { 
  if ( placeFree ( x + 1 , y )  || placeFree ( x - 1 , y )  ) vspeed =  - 1 ; 
 
  } 
  
  if (  ! inWater ( x , y )  ) vspeed += 0.1 ; 
 
  else  { 
 hspeed *= 0.99 ; 
vspeed *= 0.99 ; 
 } 
  
  if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  else  if ( placeFree ( x , y - 2 )  )  { 
 x += hspeed ; 
y +=  - 2 ; 
vspeed =  - 1 ; 
 } 
  
  
  if (  ! placeFree ( x , y )  ) deleteActor ( id )  ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h || piercing < 0 ) deleteActor ( id )  ; 
 
 shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprFireball , getFrames (  )  / 2 , x - camx , y - camy , 0 , int ( hspeed > 0 )  , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ;  returnVal . animation = function (  ) {  if ( getFrames (  )  % 3 == 0 )  { 
  var c = actor [ newActor ( FlameTiny , x , y )  ]  ;
 c . frame = 4 ; 
 } 
  
  } ;  returnVal . destructor = function (  ) { fireWeapon ( AfterFlame , x + hspeed , y + vspeed , alignment , owner )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . timer = 90 ; 
 squirrelClassFunction . piercing = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
AfterFlame =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . timer = 2 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
FlameBreath =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 if ( checkActor ( owner )  )  { 
 x += actor [ owner ]  . hspeed ; 
y += actor [ owner ]  . vspeed / 2 ; 
 } 
  
 shape . setPos ( x , y )  ; 
 if (  ! placeFree ( x , y )  ) deleteActor ( id )  ; 
 
  if ( frame >= 6 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprFlameTiny , floor ( frame )  , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . power = 1.0 ; 
 squirrelClassFunction . piercing = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
FireballK =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 90 ; 
 returnVal . angle = 0 ; 
 returnVal . element = "fire" ; 
 returnVal . power = 1 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Cir ( x , y , 2 )  ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  if ( inWater ( x , y )  )  { 
 vspeed *= 0.99 ; 
hspeed *= 0.99 ; 
 } 
  
  else vspeed += 0.1 ; 
 
 x += hspeed ; 
y += vspeed ; 
 if (  ! placeFree ( x , y )  ) deleteActor ( id )  ; 
 
  if ( y > gvMap . h )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
 } 
  
 angle = pointAngle ( 0 , 0 , hspeed , vspeed )  - 90 ; 
shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprFlame ,  ( getFrames (  )  / 4 )  % 4 , x - camx , y - camy , angle , 1 , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 4.0 , 1.0 / 4.0 )  ; 
 } ;  returnVal . destructor = function (  ) {  var c = fireWeapon ( ExplodeF , x , y , alignment , owner )  ;
 c . power = power ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . timer = 90 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . power = 1 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeF =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
shape = Cir ( x , y , 8.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeF , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , getFrames (  )  / 4 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeF2 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "fire" ; 
 returnVal . power = 2 ; 
 returnVal . blast = true ; 
 returnVal . altShape = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndExplodeF2 )  ; 
shape = Cir ( x , y , 8.0 )  ; 
altShape = Cir ( x , y , 2.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( altShape . r < 16 ) altShape . r ++  ; 
 
  if ( shape . r < 24 ) shape . r ++  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeF2 , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , getFrames (  )  / 4 , x - camx , y - camy , 0 , 0 , 1.5 -  ( frame / 10.0 )  , 1.5 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . altShape = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeF3 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "fire" ; 
 returnVal . power = 2 ; 
 returnVal . blast = true ; 
 returnVal . altShape = null ; 
 returnVal . didbloom = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndExplodeF2 )  ; 
shape = Cir ( x , y , 8.0 )  ; 
altShape = Cir ( x , y , 2.0 )  ; 
 for (  var i = 0 ;
 i < 16 ; i ++  )  { 
  var d = actor [ newActor ( FlameTiny , x + lendirX ( randInt ( 8 )  + 16 , i * 22.5 )  , y + lendirY ( randInt ( 8 )  + 16 , i * 22.5 )  )  ]  ;
 d . hspeed = 1.0 - randFloat ( 2.0 )  ; 
d . vspeed = 1.0 - randFloat ( 2.0 )  ; 
d . frame =  - 2.0 - randFloat ( 4.0 )  ; 
 } 
  } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 1 &&  ! didbloom )  { 
 didbloom = true ; 
 var c = null ;
 c = fireWeapon ( FireballK , x - 6 , y - 6 , alignment , owner )  ; 
c . power = 4 ; 
c . hspeed =  - 2.0 ; 
c . vspeed =  - 2.0 ; 
c = fireWeapon ( FireballK , x + 6 , y - 6 , alignment , owner )  ; 
c . power = 4 ; 
c . hspeed = 2.0 ; 
c . vspeed =  - 2.0 ; 
c = fireWeapon ( FireballK , x - 6 , y + 6 , alignment , owner )  ; 
c . power = 4 ; 
c . hspeed =  - 2.0 ; 
c . vspeed = 2.0 ; 
c = fireWeapon ( FireballK , x + 6 , y + 6 , alignment , owner )  ; 
c . power = 4 ; 
c . hspeed = 2.0 ; 
c . vspeed = 2.0 ; 
 } 
  
  if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( altShape . r < 16 ) altShape . r ++  ; 
 
  if ( shape . r < 24 ) shape . r ++  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeF2 , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , getFrames (  )  / 4 , x - camx , y - camy , 0 , 0 , 1.5 -  ( frame / 10.0 )  , 1.5 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . altShape = null ; 
 squirrelClassFunction . didbloom = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeHiddenF =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
popSound ( sndExplodeN , 0 )  ; 
shape = Cir ( x , y , 8.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) {  if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
FuseSpark =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 } ;  returnVal . run = function (  ) { shape . setPos ( x , y )  ; 
 if ( getFrames (  )  % 4 == 0 ) newActor ( FlameTiny , x - 1 + randInt ( 3 )  , y - 1 + randInt ( 3 )  )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSprite ( sprFireball , getFrames (  )  , x - camx , y - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . power = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
FuseLine =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PathCrawler ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 if ( speed == 0 &&  ( (actor[ ( "WeaponEffect" ) ] !== undefined) )  && actor [ "WeaponEffect" ]  . len (  )  > 0 )  {     var foreachOutput1 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  { 
  if ( hitTest ( shape , i . shape )  && i . element == "fire" )  { 
 speed = 2 ; 
obj = fireWeapon ( FuseSpark , x , y , 0 , id )  ; 
i . piercing --  ; 
 } 
  
  } 
     }  }  
  if ( obj != 0 )  { 
 obj . x = x ; 
obj . y = y ; 
 } 
  
  } ;  returnVal . draw = function (  ) {  if ( speed == 0 ) drawSprite ( sprSteelBall , 0 , x - camx , y - camy )  ; 
 
  } ;  returnVal . pathEnd = function (  ) { deleteActor ( obj . id )  ; 
deleteActor ( id )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . speed = 0 ; 
 squirrelClassFunction . obj = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PathCrawler;  return squirrelClassFunction; })()) ; 
DashFlame =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . flip = 0 ; 
 returnVal . element = "fire" ; 
 returnVal . power = 1 ; 
 returnVal . piercing = 0 ; 
 returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 14 , 4 , 0 )  ; 
flip =  - 1 ; 
 } ;  returnVal . run = function (  ) {  if ( checkActor ( owner )  )  { 
 x = actor [ owner ]  . x +  ( actor [ owner ]  . hspeed * 2.0 )  ; 
y +=  ( actor [ owner ]  . vspeed )  / 2.0 ; 
 if ( flip ==  - 1 ) flip = int ( actor [ owner ]  . hspeed < 0 )  ; 
 
  } 
  
  else flip = 0 ; 
 
 shape . setPos ( x , y )  ; 
frame += 0.25 ; 
 if ( frame > 1 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 3 , sprShieldFire ,  - floor ( frame + 1.0 )  , x - camx , y - camy , 90 , flip * 2 , 0.8 , 0.8 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . piercing = 0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeTiny =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "fire" ; 
 returnVal . power = 0 ; 
 returnVal . blast = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndExplodeTiny )  ; 
shape = Cir ( x , y , 8.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.8 ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.8 ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 1.5 ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeTiny , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . power = 0 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
Iceball =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 } ;  returnVal . animation = function (  ) {  if ( getFrames (  )  % 5 == 0 ) newActor ( Glimmer , x - 4 + randInt ( 8 )  , y - 4 + randInt ( 8 )  )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprIceball , getFrames (  )  / 2 , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ;  returnVal . destructor = function (  ) { fireWeapon ( AfterIce , x , y , alignment , owner )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "ice" ; 
 squirrelClassFunction . timer = 90 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
AfterIce =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "ice" ; 
 squirrelClassFunction . timer = 2 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeI =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 2 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "ice" ; 
 returnVal . blast = true ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndExplodeI , 0 )  ; 
shape = Cir ( x , y , 8.0 )  ; 
angle = randInt ( 360 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeI , frame , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "ice" ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeI2 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 2 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "ice" ; 
 returnVal . blast = true ; 
 returnVal . angle = 0 ; 
 returnVal . r = 8 ; 
 returnVal . timeLimit = 16 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndExplodeI )  ; 
popSound ( sndBlizzardBomb )  ; 
shape = Cir ( x , y , 8.0 )  ; 
angle = randInt ( 360 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= timeLimit ) deleteActor ( id )  ; 
 
 angle += frame ; 
r ++  ; 
shape . r = r ; 
newActor ( Glimmer , x + lendirX ( r , randInt ( 360 )  )  , y + lendirY ( r , randInt ( 360 )  )  )  ; 
 if ( alignment == 1 )  { 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } 
  
  } ;  returnVal . draw = function (  ) {  for (  var i = 0 ;
 i < 8 ; i ++  )  { 
 drawSprite ( sprExplodeI , wrap (  ( getFrames (  )  / 4 )  + i , 1 , 4 )  , x + lendirX ( r , angle +  ( i * 45 )  + 22.5 )  - camx , y + lendirY ( r , angle +  ( i * 45 )  + 22.5 )  - camy , angle +  ( i * 45 )  + 22.5 , 0 , min ( 1 , float ( timeLimit - frame )  / 10.0 )  , min ( 1 , float ( timeLimit - frame )  / 10.0 )  )  ; 
drawLight ( sprLightIce , 0 , x + lendirX ( r , angle +  ( i * 45 )  + 22.5 )  - camx , y + lendirY ( r , angle +  ( i * 45 )  + 22.5 )  - camy , 0 , 0 , min ( 1 , float ( timeLimit - frame )  / 10.0 )  , min ( 1 , float ( timeLimit - frame )  / 10.0 )  )  ; 
 } 
  if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "ice" ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . r = 8 ; 
 squirrelClassFunction . timeLimit = 16 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
IceBreath =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprGlimmer , floor ( frame )  , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "ice" ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . power = 1.0 ; 
 squirrelClassFunction . piercing = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeT =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
popSound ( sndExplodeT , 0 )  ; 
shape = Cir ( x , y , 8.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeT , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "shock" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeT2 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
popSound ( sndCyraElectricSwing , 0 )  ; 
shape = Cir ( x , y , 24.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 ; 
 
  } 
  
  
  } 
  
 shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeT2 , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 1.5 -  ( frame / 10.0 )  , 1.5 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "shock" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeT3 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "shock" ; 
 returnVal . power = 2 ; 
 returnVal . blast = true ; 
 returnVal . didbloom = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndCyraElectricSwing , 0 )  ; 
shape = Cir ( x , y , 24.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 1 &&  ! didbloom )  { 
 didbloom = true ; 
 var c = fireWeapon ( Shockball , x + 6 , y + 6 , alignment , owner )  ;
 c . power = 2 ; 
c . hspeed = 1.5 ; 
c . vspeed = 1.5 ; 
c . piercing = 4 ; 
c = fireWeapon ( Shockball , x - 6 , y + 6 , alignment , owner )  ; 
c . power = 2 ; 
c . hspeed =  - 1.5 ; 
c . vspeed = 1.5 ; 
c . piercing = 4 ; 
c = fireWeapon ( Shockball , x + 6 , y - 6 , alignment , owner )  ; 
c . power = 2 ; 
c . hspeed = 1.5 ; 
c . vspeed =  - 1.5 ; 
c . piercing = 4 ; 
c = fireWeapon ( Shockball , x - 6 , y - 6 , alignment , owner )  ; 
c . power = 2 ; 
c . hspeed =  - 1.5 ; 
c . vspeed =  - 1.5 ; 
c . piercing = 4 ; 
c = fireWeapon ( Shockball , x , y + 8 , alignment , owner )  ; 
c . power = 2 ; 
c . vspeed = 2 ; 
c . piercing = 4 ; 
c = fireWeapon ( Shockball , x , y - 8 , alignment , owner )  ; 
c . power = 2 ; 
c . vspeed =  - 2 ; 
c . piercing = 4 ; 
c = fireWeapon ( Shockball , x + 8 , y , alignment , owner )  ; 
c . power = 2 ; 
c . hspeed = 2 ; 
c . piercing = 4 ; 
c = fireWeapon ( Shockball , x - 8 , y , alignment , owner )  ; 
c . power = 2 ; 
c . hspeed =  - 2 ; 
c . piercing = 4 ; 
 } 
  
  if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 ; 
 
  } 
  
  
  } 
  
 shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeT2 , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 1.5 -  ( frame / 10.0 )  , 1.5 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "shock" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . didbloom = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
Shockball =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "shock" ; 
 returnVal . timer = 120 ; 
 returnVal . piercing = 0 ; 
 returnVal . power = 1 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 3 , 3 , 0 )  ; 
 } ;  returnVal . physics = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  if (  ! placeFree ( x , y )  ) deleteActor ( id )  ; 
 
 hspeed *= 0.98 ; 
vspeed *= 0.98 ; 
x += hspeed ; 
y += vspeed ; 
shape . setPos ( x , y )  ; 
 var target = null ;
  var tdist = 128.0 ;
  {     var foreachOutput2 = squirrelForEach( actor );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; i = foreachOutput2.getValue();  { 
  if (  squirrelInstanceOf( i , Enemy)  && distance2 ( x , y , i . x , i . y )  <= tdist && i . health > 0 &&  !  (  ( (i[ ( "squish" ) ] !== undefined) )  && i . squish )  &&  ! hitTest ( shape , i . shape )  &&  ! i . notarget )  { 
 tdist = distance2 ( x , y , i . x , i . y )  ; 
target = i ; 
 } 
  
  } 
     }  }  if ( target != null )  { 
 hspeed *= 0.98 ; 
vspeed *= 0.98 ; 
hspeed += lendirX ( 0.2 , pointAngle ( x , y , target . x , target . y )  )  ; 
vspeed += lendirY ( 0.2 , pointAngle ( x , y , target . x , target . y )  )  ; 
 } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprShockball , getFrames (  )  / 2 , x - camx , y - camy , 0 , int ( hspeed > 0 )  , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ;  returnVal . animation = function (  ) {  } ;  returnVal . destructor = function (  ) { newActor ( Spark , x , y )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "shock" ; 
 squirrelClassFunction . timer = 120 ; 
 squirrelClassFunction . piercing = 0 ; 
 squirrelClassFunction . power = 1 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
EarthballK =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 90 ; 
 returnVal . angle = 0 ; 
 returnVal . element = "earth" ; 
 returnVal . power = 1 ; 
 returnVal . blast = true ; 
 returnVal . piercing = 0 ; 
 
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
shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprRock , 0 , x - camx , y - camy , angle , 1 , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ;  returnVal . destructor = function (  ) { fireWeapon ( AfterEarth , x + hspeed / 2 , y + vspeed / 2 , alignment , owner )  ; 
newActor ( RockChunks , x , y )  ; 
popSound ( sndCrumble )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . timer = 90 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . element = "earth" ; 
 squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . piercing = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
AfterEarth =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "earth" ; 
 squirrelClassFunction . timer = 2 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeE =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 1 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . blast = true ; 
 returnVal . element = "earth" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndCrumble )  ; 
newActor ( RockChunks , x , y )  ; 
shape = Cir ( x , y , 8.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.1 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeE , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . element = "earth" ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeE2 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 1 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . blast = true ; 
 returnVal . element = "earth" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndCrumble )  ; 
newActor ( RockChunks , x , y )  ; 
shape = Cir ( x , y , 16.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.1 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeE , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 2 , 2 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . element = "earth" ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeE3 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . power = 1 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . blast = true ; 
 returnVal . element = "earth" ; 
 returnVal . didbloom = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndCrumble )  ; 
newActor ( RockChunks , x , y )  ; 
shape = Cir ( x , y , 16.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.1 ; 
 if ( frame >= 0.5 &&  ! didbloom )  { 
 didbloom = true ; 
 var c = fireWeapon ( CrystalBullet , x - 6 , y - 6 , alignment , owner )  ;
 c . power = 4 ; 
c . hspeed =  - 2.0 ; 
c . vspeed =  - 2.0 ; 
c = fireWeapon ( CrystalBullet , x + 6 , y - 6 , alignment , owner )  ; 
c . power = 4 ; 
c . hspeed = 2.0 ; 
c . vspeed =  - 2.0 ; 
c = fireWeapon ( CrystalBullet , x - 6 , y + 6 , alignment , owner )  ; 
c . power = 4 ; 
c . hspeed =  - 2.0 ; 
c . vspeed = 2.0 ; 
c = fireWeapon ( CrystalBullet , x + 6 , y + 6 , alignment , owner )  ; 
c . power = 4 ; 
c . hspeed = 2.0 ; 
c . vspeed = 2.0 ; 
 } 
  
  if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprExplodeE , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 2 , 2 , 1 )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . element = "earth" ; 
 squirrelClassFunction . didbloom = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
CrystalBullet =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "earth" ; 
 returnVal . timer = 240 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . angle = 0 ; 
 returnVal . power = 2 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 3 , 3 , 0 )  ; 
timer += randInt ( 60 )  ; 
 } ;  returnVal . physics = function (  ) { timer --  ; 
 if ( timer == 0 )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
 } 
  
  if (  ! placeFree ( x , y + 1 )  ) vspeed =  - 1.2 ; 
 
  if (  ! placeFree ( x , y - 1 )  ) vspeed = 1 ; 
 
  if (  ! placeFree ( x + 1 , y )  ||  ! placeFree ( x - 1 , y )  )  { 
  if ( placeFree ( x + 1 , y )  || placeFree ( x - 1 , y )  ) vspeed =  - 1 ; 
 
  } 
  
  if (  ! inWater ( x , y )  ) vspeed += 0.1 ; 
 
  else  { 
 hspeed *= 0.99 ; 
vspeed *= 0.99 ; 
 } 
  
 xprev = x ; 
yprev = y ; 
 if ( placeFree ( x , y )  )  { 
 x += hspeed ; 
y += vspeed ; 
 } 
  
  else deleteActor ( id )  ; 
 
  if ( x != xprev && y != yprev ) angle = pointAngle ( x , y , xprev , yprev )  ; 
 
  if ( y > gvMap . h || piercing == 0 ) deleteActor ( id )  ; 
 
 shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprCrystalBullet , 0 , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ;  returnVal . destructor = function (  ) { fireWeapon ( AfterFlame , x + hspeed , y + vspeed , alignment , owner )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "earth" ; 
 squirrelClassFunction . timer = 240 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
NutBomb =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 90 ; 
 returnVal . element = "normal" ; 
 returnVal . power = 0 ; 
 returnVal . blast = false ; 
 returnVal . piercing = 0 ; 
 returnVal . exPower = 1 ; 
 returnVal . sprite = null ; 
 returnVal . sprite2 = null ; 
 returnVal . sprite3 = null ; 
 returnVal . exElement = "normal" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Cir ( x , y , 3 )  ; 
sprite = sprNutBomb ; 
sprite2 = sprNutBomb2 ; 
sprite3 = sprNutBomb3 ; 
 } ;  returnVal . run = function (  ) {  if ( exPower == 2 ) sprite = sprite2 ; 
 
  if ( exPower == 3 ) sprite = sprite3 ; 
 
 timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  if (  ! inWater ( x , y )  ) vspeed += 0.1 ; 
 
  else  { 
 hspeed *= 0.95 ; 
vspeed *= 0.95 ; 
 } 
  
 x += hspeed ; 
y += vspeed ; 
 if (  ! placeFree ( x , y )  )  { 
 deleteActor ( id )  ; 
 } 
  
  if ( y > gvMap . h )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
 } 
  
 shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) { drawSprite ( sprite ,  ( getFrames (  )  / 4 )  % 4 , x - camx , y - camy )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy - 4 , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ;  returnVal . destructor = function (  ) {  var c ;
  var t = ExplodeN ;
  switch ( exElement )  {  case "normal" : t = ExplodeN ; 
 break ;  case "fire" : t = ExplodeF ; 
 break ;  case "ice" : t = ExplodeI ; 
 break ;  case "shock" : t = ExplodeT ; 
 break ;  case "air" : t = ExplodeA ; 
 break ;  case "earth" : t = ExplodeE ; 
 break ;  case "water" : t = ExplodeW ; 
 break ;  }  if ( exPower == 2 )  { 
  switch ( exElement )  {  case "normal" : c = fireWeapon ( ExplodeN2 , x , y , alignment , owner )  ; 
c . power = 2 ; 
 break ;  case "fire" : c = fireWeapon ( ExplodeF2 , x , y , alignment , owner )  ; 
c . power = 2 ; 
 break ;  case "water" : c = fireWeapon ( ExplodeW2 , x , y , alignment , owner )  ; 
c . power = 2 ; 
 break ;  case "shock" : c = fireWeapon ( ExplodeT2 , x , y , alignment , owner )  ; 
c . power = 2 ; 
 break ;  case "air" : c = fireWeapon ( ExplodeA2 , x , y , alignment , owner )  ; 
c . power = 2 ; 
 break ;  default : c = fireWeapon ( t , x -  ( 6 * exPower )  , y , alignment , owner )  ; 
c . power = 2 ; 
c = fireWeapon ( t , x +  ( 6 * exPower )  , y , alignment , owner )  ; 
c . power = 2 ; 
c = fireWeapon ( t , x , y -  ( 6 * exPower )  , alignment , owner )  ; 
c . power = 2 ; 
c = fireWeapon ( t , x , y +  ( 6 * exPower )  , alignment , owner )  ; 
c . power = 2 ; 
 break ;  }  } 
  
  else  if ( exPower >= 3 )  { 
  switch ( exElement )  {  case "normal" : c = fireWeapon ( ExplodeN3 , x , y , alignment , owner )  ; 
c . power = 4 ; 
 break ;  case "shock" : c = fireWeapon ( ExplodeT3 , x , y , alignment , owner )  ; 
c . power = 4 ; 
 break ;  case "earth" : c = fireWeapon ( ExplodeE3 , x , y , alignment , owner )  ; 
c . power = 4 ; 
 break ;  case "air" : c = fireWeapon ( ExplodeA3 , x , y , alignment , owner )  ; 
c . power = 4 ; 
stopSound ( sndExplodeA2 )  ; 
 break ;  case "fire" : c = fireWeapon ( ExplodeF3 , x , y , alignment , owner )  ; 
c . power = 4 ; 
 break ;  case "ice" : c = fireWeapon ( ExplodeI2 , x , y , alignment , owner )  ; 
c . power = 4 ; 
 break ;  case "water" : c = fireWeapon ( ExplodeW2 , x , y , alignment , owner )  ; 
c . power = 4 ; 
 break ;  default : c = fireWeapon ( t , x -  ( 6 * exPower )  , y , alignment , owner )  ; 
c . power = 4 ; 
c = fireWeapon ( t , x +  ( 6 * exPower )  , y , alignment , owner )  ; 
c . power = 4 ; 
c = fireWeapon ( t , x , y -  ( 6 * exPower )  , alignment , owner )  ; 
c . power = 4 ; 
c = fireWeapon ( t , x , y +  ( 6 * exPower )  , alignment , owner )  ; 
c . power = 4 ; 
 break ;  }  } 
  
  else  { 
 c = fireWeapon ( t , x , y , alignment , owner )  ; 
c . power = exPower ; 
 } 
  
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . timer = 90 ; 
 squirrelClassFunction . element = "normal" ; 
 squirrelClassFunction . power = 0 ; 
 squirrelClassFunction . blast = false ; 
 squirrelClassFunction . piercing = 0 ; 
 squirrelClassFunction . exPower = 1 ; 
 squirrelClassFunction . sprite = null ; 
 squirrelClassFunction . sprite2 = null ; 
 squirrelClassFunction . sprite3 = null ; 
 squirrelClassFunction . exElement = "normal" ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
TopNut =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = NutBomb ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 90 ; 
 returnVal . element = "normal" ; 
 returnVal . power = 0 ; 
 returnVal . blast = false ; 
 returnVal . piercing = 0 ; 
 returnVal . exPower = 1 ; 
 returnVal . exElement = "normal" ; 
 returnVal . sprite = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 3 , 3 , 0 )  ; 
sprite = sprTopNut ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  if (  ! inWater ( x , y )  ) vspeed += 0.1 ; 
 
  else vspeed *= 0.99 ; 
 
 hspeed *= 0.99 ; 
x += hspeed ; 
 if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 4.0 ; 
 
  if (  ! placeFree ( x , y )  )  { 
  var mustboom = true ;
  for (  var i = 0 ;
 i < 8 ; i ++  )  { 
  if ( placeFree ( x , y - i )  )  { 
 y -= i ; 
mustboom = false ; 
 break ;  } 
  
  } 
  if ( mustboom ) deleteActor ( id )  ; 
 
  } 
  
  if ( y > gvMap . h )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
 } 
  
 shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) { drawSprite ( sprite ,  ( getFrames (  )  / 4 )  % 4 , x - camx , y - camy )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy - 4 , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . timer = 90 ; 
 squirrelClassFunction . element = "normal" ; 
 squirrelClassFunction . power = 0 ; 
 squirrelClassFunction . blast = false ; 
 squirrelClassFunction . piercing = 0 ; 
 squirrelClassFunction . exPower = 1 ; 
 squirrelClassFunction . exElement = "normal" ; 
 squirrelClassFunction . sprite = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = NutBomb;  return squirrelClassFunction; })()) ; 
WingNut =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = NutBomb ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 16 ; 
 returnVal . element = "normal" ; 
 returnVal . power = 0 ; 
 returnVal . blast = false ; 
 returnVal . piercing = 0 ; 
 returnVal . bounceShape = null ; 
 returnVal . exPower = 1 ; 
 returnVal . exElement = "normal" ; 
 returnVal . sprite = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Cir ( x , y , 3 )  ; 
bounceShape = Rec ( x , y , 10 , 16 , 0 )  ; 
sprite = sprWingNut ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  if (  ! placeFree ( x , y )  )  { 
 deleteActor ( id )  ; 
 } 
  
  if ( y > gvMap . h )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
 } 
  
 shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) { drawSpriteZ ( 3 , sprite ,  ( getFrames (  )  / 4 )  % 4 , x - camx , y - camy )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy - 4 , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ;  returnVal . destructor = function (  ) {  baseMethods . destructor  (  )  ; 
 if ( checkActor ( owner )  && hitTest ( bounceShape , actor [ owner ]  . shape )  && actor [ owner ]  . anim == "ball" ) actor [ owner ]  . vspeed =  - 5 ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . timer = 16 ; 
 squirrelClassFunction . element = "normal" ; 
 squirrelClassFunction . power = 0 ; 
 squirrelClassFunction . blast = false ; 
 squirrelClassFunction . piercing = 0 ; 
 squirrelClassFunction . bounceShape = null ; 
 squirrelClassFunction . exPower = 1 ; 
 squirrelClassFunction . exElement = "normal" ; 
 squirrelClassFunction . sprite = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = NutBomb;  return squirrelClassFunction; })()) ; 
NutMine =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = NutBomb ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "normal" ; 
 returnVal . power = 0 ; 
 returnVal . blast = false ; 
 returnVal . piercing = 0 ; 
 returnVal . bounceShape = null ; 
 returnVal . exPower = 1 ; 
 returnVal . exElement = "normal" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Cir ( x , y + 4 , 3 )  ; 
bounceShape = Cir ( x , y , 8 )  ; 
 } ;  returnVal . run = function (  ) {  if ( y > gvMap . h )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
 } 
  
  if ( placeFree ( x , y + 2 )  &&  ! onPlatform (  )  ) deleteActor ( id )  ; 
 
 shape . setPos ( x , y )  ; 
 if ( checkActor ( owner )  && getcon ( "jump" , "press" , false , actor [ owner ]  . playerNum )  && hitTest ( bounceShape , actor [ owner ]  . shape )  ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprite ,  ( getFrames (  )  / 4 )  % 4 , x - camx , y - camy )  ; 
drawLight ( sprLightFire , 0 , x - camx , y - camy - 4 , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ;  returnVal . destructor = function (  ) {  baseMethods . destructor  (  )  ; 
 if ( checkActor ( owner )  && hitTest ( bounceShape , actor [ owner ]  . shape )  ) actor [ owner ]  . vspeed =  - 10 ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "normal" ; 
 squirrelClassFunction . power = 0 ; 
 squirrelClassFunction . blast = false ; 
 squirrelClassFunction . piercing = 0 ; 
 squirrelClassFunction . bounceShape = null ; 
 squirrelClassFunction . exPower = 1 ; 
 squirrelClassFunction . exElement = "normal" ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = NutBomb;  return squirrelClassFunction; })()) ; 
ExplodeA =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "air" ; 
 returnVal . power = 2 ; 
 returnVal . blast = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndExplodeA , 0 )  ; 
shape = Cir ( x , y , 8.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 6 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 +  ( 32 *  ( power / 2.0 )  )  )  { 
  if ( x > gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.2 *  ( power / 2.0 )  ; 
 
  if ( x < gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.2 *  ( power / 2.0 )  ; 
 
  if ( gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 +  ( 32 *  ( power / 2.0 )  )  )  { 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.2 *  ( power / 2.0 )  ; 
 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.2 *  ( power / 2.0 )  ; 
 
  if ( gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 6 , sprTinyWind , getFrames (  )  / 2 , x - camx , y - camy - 8 , 0 , 0 , sin ( max ( 4 , frame )  / 2 )  , sin ( max ( 4 , frame )  / 2 )  , 1 )  ; 
drawSpriteZ ( 6 , sprTinyWind , getFrames (  )  / 2 , x - camx + 8 , y - camy , 90 , 0 , sin ( max ( 4 , frame )  / 2 )  , sin ( max ( 4 , frame )  / 2 )  , 1 )  ; 
drawSpriteZ ( 6 , sprTinyWind , getFrames (  )  / 2 , x - camx , y - camy + 8 , 180 , 0 , sin ( max ( 4 , frame )  / 2 )  , sin ( max ( 4 , frame )  / 2 )  , 1 )  ; 
drawSpriteZ ( 6 , sprTinyWind , getFrames (  )  / 2 , x - camx - 8 , y - camy , 270 , 0 , sin ( max ( 4 , frame )  / 2 )  , sin ( max ( 4 , frame )  / 2 )  , 1 )  ; 
drawLight ( sprLightBasic , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "air" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeA2 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "air" ; 
 returnVal . power = 2 ; 
 returnVal . blast = true ; 
 returnVal . altShape = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndExplodeA2 , 0 )  ; 
shape = Cir ( x , y , 32.0 )  ; 
altShape = Cir ( x , y , 8.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 6 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 +  ( 32 *  ( power / 2.0 )  )  )  { 
  if ( x > gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.2 *  ( power / 2.0 )  ; 
 
  if ( x < gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.2 *  ( power / 2.0 )  ; 
 
  if ( gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 +  ( 32 *  ( power / 2.0 )  )  )  { 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.2 *  ( power / 2.0 )  ; 
 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.2 *  ( power / 2.0 )  ; 
 
  if ( gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 6 , sprExplodeA , getFrames (  )  / 2 , x - camx , y - camy - 8 , 0 , 0 , sin ( max ( 4 , frame )  / 2 )  , sin ( max ( 4 , frame )  / 2 )  , 1 )  ; 
drawSpriteZ ( 6 , sprExplodeA , getFrames (  )  / 2 , x - camx + 8 , y - camy , 90 , 0 , sin ( max ( 4 , frame )  / 2 )  , sin ( max ( 4 , frame )  / 2 )  , 1 )  ; 
drawSpriteZ ( 6 , sprExplodeA , getFrames (  )  / 2 , x - camx , y - camy + 8 , 180 , 0 , sin ( max ( 4 , frame )  / 2 )  , sin ( max ( 4 , frame )  / 2 )  , 1 )  ; 
drawSpriteZ ( 6 , sprExplodeA , getFrames (  )  / 2 , x - camx - 8 , y - camy , 270 , 0 , sin ( max ( 4 , frame )  / 2 )  , sin ( max ( 4 , frame )  / 2 )  , 1 )  ; 
drawLight ( sprLightBasic , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "air" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . altShape = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeA3 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "air" ; 
 returnVal . power = 2 ; 
 returnVal . blast = true ; 
 returnVal . altShape = null ; 
 returnVal . didbloom = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
popSound ( sndExplodeA2 , 0 )  ; 
shape = Cir ( x , y , 32.0 )  ; 
altShape = Cir ( x , y , 8.0 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 1.0 &&  ! didbloom )  { 
 didbloom = true ; 
 var c = fireWeapon ( StormTornado , x + 8 , y - 4 , alignment , owner )  ;
 c . direction = 22.5 ; 
c . power = 2 ; 
c . speed = 0.25 ; 
c . maxTime = 60 ; 
c = fireWeapon ( StormTornado , x + 4 , y - 8 , alignment , owner )  ; 
c . direction = 22.5 - 45 ; 
c . power = 2 ; 
c . speed = 0.25 ; 
c . maxTime = 60 ; 
c = fireWeapon ( StormTornado , x - 4 , y - 8 , alignment , owner )  ; 
c . direction = 22.5 -  ( 45 * 2 )  ; 
c . power = 2 ; 
c . speed = 0.25 ; 
c . maxTime = 60 ; 
c = fireWeapon ( StormTornado , x - 8 , y - 4 , alignment , owner )  ; 
c . direction = 22.5 -  ( 45 * 3 )  ; 
c . power = 2 ; 
c . speed = 0.25 ; 
c . maxTime = 60 ; 
c = fireWeapon ( StormTornado , x - 8 , y + 4 , alignment , owner )  ; 
c . direction = 22.5 -  ( 45 * 4 )  ; 
c . power = 2 ; 
c . speed = 0.25 ; 
c . maxTime = 60 ; 
c = fireWeapon ( StormTornado , x - 4 , y + 8 , alignment , owner )  ; 
c . direction = 22.5 -  ( 45 * 5 )  ; 
c . power = 2 ; 
c . speed = 0.25 ; 
c . maxTime = 60 ; 
c = fireWeapon ( StormTornado , x + 4 , y + 8 , alignment , owner )  ; 
c . direction = 22.5 -  ( 45 * 6 )  ; 
c . power = 2 ; 
c . speed = 0.25 ; 
c . maxTime = 60 ; 
c = fireWeapon ( StormTornado , x + 8 , y + 4 , alignment , owner )  ; 
c . direction = 22.5 -  ( 45 * 7 )  ; 
c . power = 2 ; 
c . speed = 0.25 ; 
c . maxTime = 60 ; 
 } 
  
  if ( frame >= 6 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 +  ( 32 *  ( power / 2.0 )  )  )  { 
  if ( x > gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.2 *  ( power / 2.0 )  ; 
 
  if ( x < gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.2 *  ( power / 2.0 )  ; 
 
  if ( gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 +  ( 32 *  ( power / 2.0 )  )  )  { 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.2 *  ( power / 2.0 )  ; 
 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.2 *  ( power / 2.0 )  ; 
 
  if ( gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 6 , sprExplodeA , getFrames (  )  / 2 , x - camx , y - camy - 8 , 0 , 0 , sin ( max ( 4 , frame )  / 2 )  , sin ( max ( 4 , frame )  / 2 )  , 1 )  ; 
drawSpriteZ ( 6 , sprExplodeA , getFrames (  )  / 2 , x - camx + 8 , y - camy , 90 , 0 , sin ( max ( 4 , frame )  / 2 )  , sin ( max ( 4 , frame )  / 2 )  , 1 )  ; 
drawSpriteZ ( 6 , sprExplodeA , getFrames (  )  / 2 , x - camx , y - camy + 8 , 180 , 0 , sin ( max ( 4 , frame )  / 2 )  , sin ( max ( 4 , frame )  / 2 )  , 1 )  ; 
drawSpriteZ ( 6 , sprExplodeA , getFrames (  )  / 2 , x - camx - 8 , y - camy , 270 , 0 , sin ( max ( 4 , frame )  / 2 )  , sin ( max ( 4 , frame )  / 2 )  , 1 )  ; 
drawLight ( sprLightBasic , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "air" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . altShape = null ; 
 squirrelClassFunction . didbloom = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
DragBubble =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0 ; 
 returnVal . power = 0 ; 
 returnVal . piercing =  - 1 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Cir ( x , y , 4 )  ; 
frame = randInt ( 4 )  ; 
popSound ( sndBlurp )  ; 
 } ;  returnVal . run = function (  ) {  if ( checkActor ( owner )  )  { 
 hspeed += lendirX ( 0.1 , pointAngle ( x , y , actor [ owner ]  . x , actor [ owner ]  . y )  )  ; 
vspeed += lendirY ( 0.1 , pointAngle ( x , y , actor [ owner ]  . x , actor [ owner ]  . y )  )  ; 
 if ( inDistance2 ( x , y , actor [ owner ]  . x , actor [ owner ]  . y , 16 )  ) deleteActor ( id )  ; 
 
  if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  )  { 
 gvPlayer . hspeed += lendirX ( 0.1 , pointAngle ( x , y , actor [ owner ]  . x , actor [ owner ]  . y )  )  ; 
gvPlayer . vspeed += lendirY ( 0.1 , pointAngle ( x , y , actor [ owner ]  . x , actor [ owner ]  . y )  )  ; 
 } 
  
  } 
  
  else deleteActor ( id )  ; 
 
 x += hspeed ; 
y += vspeed ; 
shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) { drawSprite ( sprBubble , frame , x - camx , y - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0 ; 
 squirrelClassFunction . power = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
StormTornado =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . piercing =  - 1 ; 
 returnVal . power = 1 ; 
 returnVal . timer = 0 ; 
 returnVal . speed = 0.0 ; 
 returnVal . direction = 0 ; 
 returnVal . element = "air" ; 
 returnVal . solidshape = null ; 
 returnVal . hitshape = null ; 
 returnVal . maxTime = 300 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
hitshape = Cir ( x , y , 8 )  ; 
solidshape = Rec ( x , y , 1 , 1 , 0 )  ; 
shape = hitshape ; 
popSound ( sndExplodeA3 )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
shape = solidshape ; 
 if (  ! placeFree ( x , y )  || timer >= maxTime ) deleteActor ( id )  ; 
 
 shape = hitshape ; 
 if ( timer >= 30 ) speed = 4.0 ; 
 
 timer ++  ; 
x += lendirX ( speed , direction )  ; 
y += lendirY ( speed , direction )  ; 
shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) { drawSprite ( sprTinyWind , getFrames (  )  / 2 , x - camx , y - camy , direction + 90 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . power = 1 ; 
 squirrelClassFunction . timer = 0 ; 
 squirrelClassFunction . speed = 0.0 ; 
 squirrelClassFunction . direction = 0 ; 
 squirrelClassFunction . element = "air" ; 
 squirrelClassFunction . solidshape = null ; 
 squirrelClassFunction . hitshape = null ; 
 squirrelClassFunction . maxTime = 300 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
Waterball =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "water" ; 
 returnVal . timer = 90 ; 
 returnVal . piercing = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 3 , 3 , 0 )  ; 
 } ;  returnVal . physics = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  if (  ! placeFree ( x , y )  ) deleteActor ( id )  ; 
 
  if (  ! inWater ( x , y )  ) vspeed += 0.1 ; 
 
  else  { 
 hspeed *= 0.99 ; 
vspeed *= 0.99 ; 
 } 
  
 x += hspeed ; 
y += vspeed ; 
 if (  ! placeFree ( x , y )  ) deleteActor ( id )  ; 
 
  if ( y > gvMap . h || piercing < 0 ) deleteActor ( id )  ; 
 
 shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprWaterball , getFrames (  )  / 2 , x - camx , y - camy , 0 , int ( hspeed > 0 )  , 1 , 1 , 1 )  ; 
drawLight ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } ;  returnVal . animation = function (  ) {  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . element = "water" ; 
 squirrelClassFunction . timer = 90 ; 
 squirrelClassFunction . piercing = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeW =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "water" ; 
 returnVal . power = 2 ; 
 returnVal . blast = true ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
stopSound ( sndSplash )  ; 
playSound ( sndSplash , 0 )  ; 
shape = Cir ( x , y , 8.0 )  ; 
angle = randInt ( 360 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 6 , sprExplodeW , frame , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "water" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeW2 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "water" ; 
 returnVal . power = 2 ; 
 returnVal . blast = true ; 
 returnVal . altShape = null ; 
 returnVal . angle = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
stopSound ( sndSplashBig )  ; 
playSound ( sndSplashBig , 0 )  ; 
shape = Cir ( x , y , 8.0 )  ; 
altShape = Cir ( x , y , 2.0 )  ; 
angle = randInt ( 360 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( altShape . r < 16 ) altShape . r ++  ; 
 
  if ( shape . r < 24 ) shape . r ++  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 6 , sprExplodeW2 , frame , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 1.5 -  ( frame / 10.0 )  , 1.5 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "water" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . altShape = null ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
ExplodeW3 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 returnVal . piercing =  - 1 ; 
 returnVal . element = "water" ; 
 returnVal . power = 2 ; 
 returnVal . blast = true ; 
 returnVal . altShape = null ; 
 returnVal . angle = 0 ; 
 returnVal . didbloom = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
stopSound ( sndSplashBig )  ; 
playSound ( sndSplashBig , 0 )  ; 
shape = Cir ( x , y , 8.0 )  ; 
altShape = Cir ( x , y , 2.0 )  ; 
angle = randInt ( 360 )  ; 
 } ;  returnVal . run = function (  ) { frame += 0.2 ; 
 if (  ! didbloom && frame >= 1.0 )  { 
 didbloom = true ; 
 var c = fireWeapon ( WaterBomb , x - 6 , y - 6 , alignment , owner )  ;
 c . power = 4 ; 
c . hspeed =  - 2.0 ; 
c . vspeed =  - 2.0 ; 
c = fireWeapon ( WaterBomb , x + 6 , y - 6 , alignment , owner )  ; 
c . power = 4 ; 
c . hspeed = 2.0 ; 
c . vspeed =  - 2.0 ; 
c = fireWeapon ( WaterBomb , x - 6 , y + 6 , alignment , owner )  ; 
c . power = 4 ; 
c . hspeed =  - 2.0 ; 
c . vspeed = 2.0 ; 
c = fireWeapon ( WaterBomb , x + 6 , y + 6 , alignment , owner )  ; 
c . power = 4 ; 
c . hspeed = 2.0 ; 
c . vspeed = 2.0 ; 
 } 
  
  if ( frame >= 5 ) deleteActor ( id )  ; 
 
  if ( altShape . r < 16 ) altShape . r ++  ; 
 
  if ( shape . r < 24 ) shape . r ++  ; 
 
  if ( gvPlayer )  { 
  if ( owner != gvPlayer . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x && gvPlayer . hspeed < 8 ) gvPlayer . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer . x && gvPlayer . hspeed >  - 8 ) gvPlayer . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer . y && gvPlayer . vspeed >  - 8 ) gvPlayer . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( owner != gvPlayer2 . id )  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  < 64 )  { 
  if ( x < gvPlayer2 . x && gvPlayer2 . hspeed < 8 ) gvPlayer2 . hspeed += 0.5 *  ( power / 2.0 )  ; 
 
  if ( x > gvPlayer2 . x && gvPlayer2 . hspeed >  - 8 ) gvPlayer2 . hspeed -= 0.5 *  ( power / 2.0 )  ; 
 
  if ( y >= gvPlayer2 . y && gvPlayer2 . vspeed >  - 8 ) gvPlayer2 . vspeed -= 0.8 *  ( power / 2.0 )  ; 
 
  } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 6 , sprExplodeW2 , frame , x - camx , y - camy , angle , 0 , 1 , 1 , 1 )  ; 
drawLight ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 1.5 -  ( frame / 10.0 )  , 1.5 -  ( frame / 10.0 )  )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , shape . r , false )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . piercing =  - 1 ; 
 squirrelClassFunction . element = "water" ; 
 squirrelClassFunction . power = 2 ; 
 squirrelClassFunction . blast = true ; 
 squirrelClassFunction . altShape = null ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . didbloom = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 
WaterBomb =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = WeaponEffect ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 90 ; 
 returnVal . angle = 0 ; 
 returnVal . element = "water" ; 
 returnVal . power = 1 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Cir ( x , y , 2 )  ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  if ( inWater ( x , y )  )  { 
 vspeed *= 0.99 ; 
hspeed *= 0.99 ; 
 } 
  
  else vspeed += 0.1 ; 
 
 x += hspeed ; 
y += vspeed ; 
 if (  ! placeFree ( x , y )  ) deleteActor ( id )  ; 
 
  if ( y > gvMap . h )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
 } 
  
 angle = pointAngle ( 0 , 0 , hspeed , vspeed )  - 90 ; 
shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprWaterBomb ,  ( getFrames (  )  / 4 )  % 4 , x - camx , y - camy , 0 , 1 , 1 , 1 , 1 )  ; 
drawLight ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 1.0 / 4.0 , 1.0 / 4.0 )  ; 
 } ;  returnVal . destructor = function (  ) {  var c = fireWeapon ( ExplodeW , x , y , alignment , owner )  ;
 c . power = power ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . timer = 90 ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . element = "water" ; 
 squirrelClassFunction . power = 1 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = WeaponEffect;  return squirrelClassFunction; })()) ; 



}; 
