if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/blocks.nut'] = function () { 


WoodBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . coins = 0 ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0 ; 
 returnVal . oldsolid = 0 ; 
 returnVal . glimmerTimer = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
shape = Rec ( x , y + 2 , 7 , 8 , 0 )  ; 
slideshape = Rec ( x , y - 1 , 16 , 8 , 0 )  ; 
 if ( _arr != null && _arr != "" ) coins = _arr . tointeger (  )  ; 
 
 game . maxCoins += coins ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( v == 0 )  { 
 vspeed = 0 ; 
 if ( coins <= 1 )  { 
  if ( gvPlayer . vspeed < 0 )  if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . y > y + 4 )  { 
 gvPlayer . vspeed = 0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
 fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 {     var foreachOutput1 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; k = foreachOutput1.getKey(); i = foreachOutput1.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  
  if (  ( (gvPlayer[ ( "anim" ) ] !== undefined) )  && fabs ( gvPlayer . hspeed )  >= 4.5 &&  ( gvPlayer . inMelee )  && hitTest ( slideshape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
 fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 {     var foreachOutput2 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; k = foreachOutput2.getKey(); i = foreachOutput2.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  if (  ( (gvPlayer[ ( "anim" ) ] !== undefined) )  )  if ( hitTest ( gvPlayer . shape , shape )  && gvPlayer . anim == "stomp" )  { 
 gvPlayer . vspeed =  - 2.0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
  {     var foreachOutput3 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput3.next();        if (foreachOutput3.isDone()) break; k = foreachOutput3.getKey(); i = foreachOutput3.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  
  } 
  
  else  { 
  if ( gvPlayer . vspeed < 0 )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  if (  ( (gvPlayer[ ( "anim" ) ] !== undefined) )  &&  ( fabs ( gvPlayer . hspeed )  >= 4.5 ||  ( gvPlayer . stats . weapon == "earth" && gvPlayer . vspeed >= 2 )  )  &&  ( gvPlayer . inMelee )  && hitTest ( slideshape , gvPlayer . shape )  )  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  if (  ( (gvPlayer[ ( "anim" ) ] !== undefined) )  )  if ( hitTest ( gvPlayer . shape , shape )  && gvPlayer . anim == "stomp" )  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  
  } 
  
  } 
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( v == 0 )  { 
 vspeed = 0 ; 
 if ( coins <= 1 )  { 
  if ( gvPlayer2 . vspeed < 0 )  if ( hitTest ( shape , gvPlayer2 . shape )  && gvPlayer2 . y > y + 4 )  { 
 gvPlayer2 . vspeed = 0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
 fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 {     var foreachOutput4 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput4.next();        if (foreachOutput4.isDone()) break; k = foreachOutput4.getKey(); i = foreachOutput4.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  
  if (  ( (gvPlayer2[ ( "anim" ) ] !== undefined) )  && fabs ( gvPlayer2 . hspeed )  >= 4.5 &&  ( gvPlayer2 . inMelee )  && hitTest ( slideshape , gvPlayer2 . shape )  )  { 
 gvPlayer2 . vspeed = 0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
 fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 {     var foreachOutput5 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput5.next();        if (foreachOutput5.isDone()) break; k = foreachOutput5.getKey(); i = foreachOutput5.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  if (  ( (gvPlayer2[ ( "anim" ) ] !== undefined) )  )  if ( hitTest ( gvPlayer2 . shape , shape )  && gvPlayer2 . anim == "stomp" )  { 
 gvPlayer2 . vspeed =  - 2.0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
  {     var foreachOutput6 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput6.next();        if (foreachOutput6.isDone()) break; k = foreachOutput6.getKey(); i = foreachOutput6.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  
  } 
  
  else  { 
  if ( gvPlayer2 . vspeed < 0 )  if ( hitTest ( shape , gvPlayer2 . shape )  )  { 
 gvPlayer2 . vspeed = 0 ; 
vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  if (  ( (gvPlayer2[ ( "anim" ) ] !== undefined) )  )  if (  ( fabs ( gvPlayer2 . hspeed )  >= 4.5 ||  ( gvPlayer2 . stats . weapon == "earth" && gvPlayer2 . vspeed >= 2 )  )  &&  ( gvPlayer2 . inMelee )  )  if ( hitTest ( slideshape , gvPlayer2 . shape )  )  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  
  if (  ( (gvPlayer2[ ( "anim" ) ] !== undefined) )  )  if ( hitTest ( gvPlayer2 . shape , shape )  && gvPlayer2 . anim == "stomp" )  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  
  } 
  
  } 
  
  } 
  
  if ( actor . rawin ( "WeaponEffect" )  )  {     var foreachOutput7 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput7.next();        if (foreachOutput7.isDone()) break; i = foreachOutput7.getValue();  { 
  if (  (  (  (  ( (i[ ( "altShape" ) ] !== undefined) )  && hitTest ( shape , i . altShape )  )  ||  (  !  (  ( (i[ ( "altShape" ) ] !== undefined) )  )  && hitTest ( shape , i . shape )  )  )  )  && vspeed == 0 )  { 
  if ( i . blast &&  ! i . box )  { 
  if ( coins <= 1 )  { 
 deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
stopSound ( sndBump )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
 fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 {     var foreachOutput8 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput8.next();        if (foreachOutput8.isDone()) break; k = foreachOutput8.getKey(); i = foreachOutput8.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  break ;  } 
  
  else  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
stopSound ( sndBump )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  if ( i . piercing == 0 ) deleteActor ( i . id )  ; 
 
  else i . piercing --  ; 
 
  } 
  
  } 
  
  } 
     }  }  
  if ( v ==  - 8 ) vspeed = 1 ; 
 
 v += vspeed ; 
 if ( coins > 0 && game . difficulty == 0 )  { 
  if ( glimmerTimer > 0 ) glimmerTimer --  ; 
 
  else  { 
 glimmerTimer = randInt ( 30 )  ; 
newActor ( Glimmer , x - 8 + randInt ( 16 )  , y - 8 + randInt ( 16 )  )  ; 
 } 
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprWoodBox , 0 , x - 8 - camx , y - 8 - camy + v )  ; 
 } ;  returnVal . destructor = function (  ) { fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "WoodBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . coins = 0 ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 squirrelClassFunction . glimmerTimer = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
BrickBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . coins = 0 ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0 ; 
 returnVal . oldsolid = 0 ; 
 returnVal . glimmerTimer = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
shape = Rec ( x , y + 2 , 7 , 8 , 0 )  ; 
slideshape = Rec ( x , y - 1 , 16 , 8 , 0 )  ; 
 if ( _arr != null && _arr != "" ) coins = _arr . tointeger (  )  ; 
 
 game . maxCoins += coins ; 
 } ;  returnVal . run = function (  ) {  if ( actor . rawin ( "WeaponEffect" )  )  {     var foreachOutput9 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput9.next();        if (foreachOutput9.isDone()) break; i = foreachOutput9.getValue();  { 
  if (  (  (  ( (i[ ( "altShape" ) ] !== undefined) )  && hitTest ( shape , i . altShape )  )  ||  (  !  (  ( (i[ ( "altShape" ) ] !== undefined) )  )  && hitTest ( shape , i . shape )  )  )  && vspeed == 0 )  { 
  if ( i . blast &&  ! i . box )  { 
  if ( coins <= 1 )  { 
 deleteActor ( id )  ; 
newActor ( BrickChunks , x , y )  ; 
popSound ( sndCrumble )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
 fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 {     var foreachOutput10 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput10.next();        if (foreachOutput10.isDone()) break; k = foreachOutput10.getKey(); i = foreachOutput10.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  break ;  } 
  
  else  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
stopSound ( sndBump )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  if ( i . piercing > 0 ) i . piercing --  ; 
 
  if ( i . piercing == 0 ) deleteActor ( i . id )  ; 
 
  } 
  
  } 
  
  } 
     }  }  
  if ( gvPlayer )  { 
  if ( v == 0 )  { 
 vspeed = 0 ; 
 if ( coins <= 1 )  { 
  if (  ( (gvPlayer[ ( "anim" ) ] !== undefined) )  )  if ( fabs ( gvPlayer . hspeed )  >= 8 &&  ( gvPlayer . anim == "slide" || gvPlayer . anim == "ball" )  )  if ( hitTest ( slideshape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
 fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 {     var foreachOutput11 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput11.next();        if (foreachOutput11.isDone()) break; k = foreachOutput11.getKey(); i = foreachOutput11.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  
  
  if (  ( (gvPlayer[ ( "anim" ) ] !== undefined) )  )  if ( hitTest ( gvPlayer . shape , shape )  && gvPlayer . anim == "stomp" )  { 
 gvPlayer . vspeed =  - 2.0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
  {     var foreachOutput12 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput12.next();        if (foreachOutput12.isDone()) break; k = foreachOutput12.getKey(); i = foreachOutput12.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  
  } 
  
  else  { 
  if (  ( (gvPlayer[ ( "anim" ) ] !== undefined) )  )  if (  ( fabs ( gvPlayer . hspeed )  >= 8 ||  ( gvPlayer . stats . weapon == "earth" && gvPlayer . vspeed >= 2 )  )  && gvPlayer . anim == "slide" )  if ( hitTest ( slideshape , gvPlayer . shape )  )  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  
  if (  ( (gvPlayer[ ( "anim" ) ] !== undefined) )  )  if ( hitTest ( gvPlayer . shape , shape )  && gvPlayer . anim == "stomp" )  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  
  } 
  
  } 
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( v == 0 )  { 
 vspeed = 0 ; 
 if ( coins <= 1 )  { 
  if (  ( (gvPlayer2[ ( "anim" ) ] !== undefined) )  )  if ( fabs ( gvPlayer2 . hspeed )  >= 8 &&  ( gvPlayer2 . anim == "slide" || gvPlayer2 . anim == "ball" )  )  if ( hitTest ( slideshape , gvPlayer2 . shape )  )  { 
 gvPlayer2 . vspeed = 0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
 fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 {     var foreachOutput13 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput13.next();        if (foreachOutput13.isDone()) break; k = foreachOutput13.getKey(); i = foreachOutput13.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  
  
  if (  ( (gvPlayer2[ ( "anim" ) ] !== undefined) )  )  if ( hitTest ( gvPlayer2 . shape , shape )  && gvPlayer2 . anim == "stomp" )  { 
 gvPlayer2 . vspeed =  - 2.0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
  {     var foreachOutput14 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput14.next();        if (foreachOutput14.isDone()) break; k = foreachOutput14.getKey(); i = foreachOutput14.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  
  } 
  
  else  { 
  if (  ( (gvPlayer2[ ( "anim" ) ] !== undefined) )  )  if (  ( fabs ( gvPlayer2 . hspeed )  >= 8 ||  ( gvPlayer2 . stats . weapon == "earth" && gvPlayer2 . vspeed >= 2 )  )  && gvPlayer2 . anim == "slide" )  if ( hitTest ( slideshape , gvPlayer2 . shape )  )  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  
  if (  ( (gvPlayer2[ ( "anim" ) ] !== undefined) )  )  if ( hitTest ( gvPlayer2 . shape , shape )  && gvPlayer2 . anim == "stomp" )  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  
  } 
  
  } 
  
  } 
  
  if ( v ==  - 8 ) vspeed = 1 ; 
 
 v += vspeed ; 
 if ( v == 0 ) vspeed = 0 ; 
 
  if ( coins > 0 && game . difficulty == 0 )  { 
  if ( glimmerTimer > 0 ) glimmerTimer --  ; 
 
  else  { 
 glimmerTimer = randInt ( 30 )  ; 
newActor ( Glimmer , x - 8 + randInt ( 16 )  , y - 8 + randInt ( 16 )  )  ; 
 } 
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprBrickBlock , 0 , x - 8 - camx , y - 8 - camy + v )  ; 
 } ;  returnVal . destructor = function (  ) { fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "BrickBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . coins = 0 ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 squirrelClassFunction . glimmerTimer = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
IceBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . fireshape = 0 ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 7 , 9 , 0 )  ; 
slideshape = Rec ( x , y - 1 , 16 , 8 , 0 )  ; 
fireshape = Rec ( x , y , 12 , 12 , 0 )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 40 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( gvPlayer . vspeed < 0 )  if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . y > y + 4 )  { 
 gvPlayer . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  if (  ( fabs ( gvPlayer . hspeed )  >= 3.5 ||  ( gvPlayer . stats . weapon == "earth" && gvPlayer . vspeed >= 2 )  )  &&  ( gvPlayer . inMelee )  )  if ( hitTest ( slideshape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  if (  ( (gvPlayer[ ( "anim" ) ] !== undefined) )  )  if ( hitTest ( gvPlayer . shape , shape )  && gvPlayer . anim == "stomp" )  { 
 gvPlayer . vspeed =  - 2.0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( gvPlayer2 . vspeed < 0 )  if ( hitTest ( shape , gvPlayer2 . shape )  && gvPlayer2 . y > y + 4 )  { 
 gvPlayer2 . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  if (  ( fabs ( gvPlayer2 . hspeed )  >= 3.5 ||  ( gvPlayer2 . stats . weapon == "earth" && gvPlayer2 . vspeed >= 2 )  )  &&  ( gvPlayer2 . inMelee )  )  if ( hitTest ( slideshape , gvPlayer2 . shape )  )  { 
 gvPlayer2 . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  if (  ( (gvPlayer2[ ( "anim" ) ] !== undefined) )  )  if ( hitTest ( gvPlayer2 . shape , shape )  && gvPlayer2 . anim == "stomp" )  { 
 gvPlayer2 . vspeed =  - 2.0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  } 
  
  if ( actor . rawin ( "WeaponEffect" )  )  {     var foreachOutput15 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput15.next();        if (foreachOutput15.isDone()) break; i = foreachOutput15.getValue();  if (  (  (  ( (i[ ( "altShape" ) ] !== undefined) )  && hitTest ( shape , i . altShape )  )  ||  (  !  (  ( (i[ ( "altShape" ) ] !== undefined) )  )  && hitTest ( shape , i . shape )  )  )  &&  ( i . element == "fire" || i . blast )  &&  ! i . box && i . element != "ice" )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
i . piercing --  ; 
 if ( i . piercing == 0 ) deleteActor ( i . id )  ; 
 
  if ( i . element == "fire" )  { 
 newActor ( Poof , x , y )  ; 
stopSound ( sndFlame )  ; 
popSound ( sndFlame , 0 )  ; 
 } 
  
  if ( i . blast )  { 
 newActor ( IceChunks , x , y )  ; 
stopSound ( sndIceBreak )  ; 
popSound ( sndIceBreak , 0 )  ; 
 } 
  
  } 
  
     }  }  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprIceBlock , 0 , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "IceBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . fireshape = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
WoodChunks =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprWoodChunks , 0 , x - camx - h - 2 , y - camy + v - 2 ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteZ ( 2 , sprWoodChunks , 1 , x - camx + h + 2 , y - camy + v - 2 , a , 0 , 1 , 1 , 1 )  ; 
drawSpriteZ ( 2 , sprWoodChunks , 2 , x - camx - h - 2 , y - camy + v + 2 + h ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteZ ( 2 , sprWoodChunks , 3 , x - camx + h + 2 , y - camy + v + 2 + h , a , 0 , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . h = 0.0 ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed =  - 3.0 ; 
 squirrelClassFunction . timer = 30 ; 
 squirrelClassFunction . a = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
BrickChunks =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprBrickChunks , 0 , x - camx - h - 2 , y - camy + v - 2 ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteZ ( 2 , sprBrickChunks , 1 , x - camx + h + 2 , y - camy + v - 2 , a , 0 , 1 , 1 , 1 )  ; 
drawSpriteZ ( 2 , sprBrickChunks , 2 , x - camx - h - 2 , y - camy + v + 2 + h ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteZ ( 2 , sprBrickChunks , 3 , x - camx + h + 2 , y - camy + v + 2 + h , a , 0 , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . h = 0.0 ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed =  - 3.0 ; 
 squirrelClassFunction . timer = 30 ; 
 squirrelClassFunction . a = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
ItemBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . item = 0 ; 
 returnVal . refill = 3600 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
item = _arr ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( game . difficulty == 2 &&  ( item == 1 || item == 2 )  ) full = false ; 
 
  if (  ! full && item != 0 ) refill --  ; 
 
  if ( refill == 0 )  { 
 full = true ; 
refill = 3600 ; 
 } 
  
  if ( v <=  - 8 )  { 
 vspeed = 1 ; 
 switch ( item )  {  case 0 : newActor ( CoinEffect , x , y - 16 )  ; 
 {     var foreachOutput16 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput16.next();        if (foreachOutput16.isDone()) break; k = foreachOutput16.getKey(); i = foreachOutput16.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  break ;  case 1 :  if ( game . difficulty == 3 )  { 
  var c = actor [ newActor ( CannonBob , x , y - 4 )  ]  ;
 c . hspeed =  (  ( gvPlayer . x - x )  / 96 )  ; 
 } 
  
  else newActor ( MuffinBlue , x , y - 16 , true )  ; 
 
  break ;  case 2 :  if ( game . difficulty == 3 )  { 
  var c = actor [ newActor ( CannonBob , x , y - 4 )  ]  ;
 c . hspeed =  (  ( gvPlayer . x - x )  / 96 )  ; 
 } 
  
  else newActor ( MuffinRed , x , y - 16 )  ; 
 
  break ;  case 3 : newActor ( MuffinEvil , x , y - 16 )  ; 
 break ;  case 4 : newActor ( FlowerFire , x , y - 16 )  ; 
 break ;  case 5 :  if ( game . difficulty >= 2 ) newActor ( MuffinEvil , x , y - 16 )  ; 
 
  else newActor ( Starnyan , x , y - 16 )  ; 
 
  break ;  case 6 : newActor ( FlowerIce , x , y - 16 )  ; 
 break ;  case 7 : newActor ( AirFeather , x , y - 16 )  ; 
 break ;  case 8 : newActor ( OneUp , x , y - 16 )  ; 
 break ;  case 9 : newActor ( MuffinBomb , x , y - 16 )  ; 
 break ;  case 10 : newActor ( EarthShell , x , y - 16 )  ; 
 break ;  case 11 : newActor ( ShockBulb , x , y - 16 )  ; 
 break ;  case 12 : newActor ( WaterLily , x , y - 16 )  ; 
 break ;  }  } 
  
  if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  && gvPlayer . vspeed < 0 && v == 0 && full )  { 
 gvPlayer . vspeed = 0 ; 
full = false ; 
vspeed =  - 2 ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  else  if ( gvPlayer2 && hitTest ( shape , gvPlayer2 . shape )  && gvPlayer2 . vspeed < 0 && v == 0 && full )  { 
 gvPlayer2 . vspeed = 0 ; 
full = false ; 
vspeed =  - 2 ; 
popSound ( sndBump , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
 v += vspeed ; 
 } ;  returnVal . draw = function (  ) {  if ( full || vspeed < 0 ) drawSpriteZ ( 2 , sprBoxItem ,  ( getFrames (  )  / 12 )  +  ( x / 16 )  +  ( y / 4 )  , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else drawSpriteZ ( 2 , sprBoxEmpty , 0 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "ItemBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . item = 0 ; 
 squirrelClassFunction . refill = 3600 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
TriggerBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . item = 0 ; 
 returnVal . code = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
code = _arr ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( v <=  - 8 )  { 
 vspeed = 0.5 ; 
dostr ( code )  ; 
 } 
  
  if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  && gvPlayer . vspeed < 0 && v == 0 && full )  { 
 gvPlayer . vspeed = 0 ; 
full = false ; 
vspeed =  - 1 ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  else  if ( gvPlayer2 && hitTest ( shape , gvPlayer2 . shape )  && gvPlayer2 . vspeed < 0 && v == 0 && full )  { 
 gvPlayer2 . vspeed = 0 ; 
full = false ; 
vspeed =  - 1 ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  
 v += vspeed ; 
 } ;  returnVal . draw = function (  ) {  if ( full || vspeed < 0 ) drawSpriteZ ( 2 , sprBoxRed , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else drawSpriteZ ( 2 , sprBoxEmpty , 0 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "TriggerBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . item = 0 ; 
 squirrelClassFunction . code = "" ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
InfoBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . item = 0 ; 
 returnVal . text = "" ; 
 returnVal . arr = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
text = textLineLen ( formatInfo ( _arr )  , gvTextW )  ; 
arr = _arr ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( v <=  - 8 )  { 
 vspeed = 0.5 ; 
 } 
  
  if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  && gvPlayer . vspeed < 0 && v == 0 && full )  { 
 gvPlayer . vspeed = 0 ; 
vspeed =  - 1 ; 
popSound ( sndBump , 0 )  ; 
text = textLineLen ( formatInfo ( arr )  , gvTextW )  ; 
gvInfoBox = text ; 
 } 
  
  if ( gvPlayer2 && hitTest ( shape , gvPlayer2 . shape )  && gvPlayer2 . vspeed < 0 && v == 0 && full )  { 
 gvPlayer2 . vspeed = 0 ; 
vspeed =  - 1 ; 
popSound ( sndBump , 0 )  ; 
text = textLineLen ( formatInfo ( arr )  , gvTextW )  ; 
gvInfoBox = text ; 
 } 
  
  if ( gvInfoBox == text &&  ( gvPlayer &&  ! gvPlayer2 &&  ! inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 )  || gvPlayer2 &&  ! gvPlayer &&  ! inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 64 )  || gvPlayer && gvPlayer2 &&  ! inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 )  &&  ! inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 64 )  )  ) gvInfoBox = "" ; 
 
 v += vspeed ; 
 } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprBoxInfo , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "InfoBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . item = 0 ; 
 squirrelClassFunction . text = "" ; 
 squirrelClassFunction . arr = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
KelvinScarf =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . text = "" ; 
 returnVal . arr = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
text = textLineLen ( formatInfo ( _arr )  , gvTextW )  ; 
arr = _arr ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if (  ! devcom || gvTimeAttack )  return ; 
  
  if ( devcom )  { 
  if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  )  { 
 text = textLineLen ( formatInfo ( arr )  , gvTextW )  ; 
gvInfoBox = text ; 
 if ( gvPlayer . invincible <= 1 ) gvPlayer . invincible = 10 ; 
 
  } 
  
  if ( gvInfoBox == text &&  ( gvPlayer &&  ! gvPlayer2 &&  ! inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 )  || gvPlayer2 &&  ! gvPlayer &&  ! inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 64 )  || gvPlayer && gvPlayer2 &&  ! inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 )  &&  ! inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 64 )  )  ) gvInfoBox = "" ; 
 
  } 
  
  } ;  returnVal . draw = function (  ) {  if ( devcom ) drawSpriteZ ( 2 , sprKelvinScarf , getFrames (  )  / 16 , x - 8 - camx , y - 8 - camy )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "KelvinScarf" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . text = "" ; 
 squirrelClassFunction . arr = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
BounceBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . item = 0 ; 
 returnVal . text = "" ; 
 returnVal . note =  - 1 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 9 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 if ( canint ( _arr )  ) note = int ( _arr )  ; 
 
 note = max ( note ,  - 1 )  ; 
note = min ( note , 7 )  ; 
 } ;  returnVal . run = function (  ) {  if ( v == 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( v <=  - 8 )  { 
 vspeed = 0.5 ; 
 } 
  
  if ( v >= 8 )  { 
 vspeed =  - 0.5 ; 
 } 
  
  if ( gvPlayer )  { 
 shape . setPos ( x , y + 2 )  ; 
 if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if ( full )  { 
 gvPlayer . vspeed = 1 ; 
vspeed =  - 1 ; 
popSound ( sndPing [  ( note ==  - 1 ? randInt ( 8 )  : note )  ]  , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  
 shape . setPos ( x , y - 1 )  ; 
 if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed >= 0 && v == 0 )  if ( full )  { 
 gvPlayer . vspeed =  - 4 ; 
 if ( getcon ( "jump" , "hold" , true , 1 )  ) gvPlayer . vspeed =  - 8 ; 
 
 vspeed = 1 ; 
popSound ( sndPing [  ( note ==  - 1 ? randInt ( 8 )  : note )  ]  , 0 )  ; 
 } 
  
  
  
  } 
  
  if ( gvPlayer2 )  { 
 shape . setPos ( x , y + 2 )  ; 
 if ( hitTest ( shape , gvPlayer2 . shape )  )  if ( gvPlayer2 . vspeed < 0 && v == 0 )  if ( full )  { 
 gvPlayer2 . vspeed = 1 ; 
vspeed =  - 1 ; 
popSound ( sndPing [  ( note ==  - 1 ? randInt ( 8 )  : note )  ]  , 0 )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } 
  
  
  
 shape . setPos ( x , y - 1 )  ; 
 if ( hitTest ( shape , gvPlayer2 . shape )  )  if ( gvPlayer2 . vspeed >= 0 && v == 0 )  if ( full )  { 
 gvPlayer2 . vspeed =  - 4 ; 
 if ( getcon ( "jump" , "hold" , true , 2 )  ) gvPlayer2 . vspeed =  - 8 ; 
 
 vspeed = 1 ; 
popSound ( sndPing [  ( note ==  - 1 ? randInt ( 8 )  : note )  ]  , 0 )  ; 
 } 
  
  
  
  } 
  
 v += vspeed ; 
 } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprBoxBounce , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "BounceBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . item = 0 ; 
 squirrelClassFunction . text = "" ; 
 squirrelClassFunction . note =  - 1 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
Checkpoint =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = null ; 
 returnVal . found = false ; 
 returnVal . timer = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 16 , 10 , 16 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( found == false &&  ( gvPlayer && hitTest ( shape , gvPlayer . shape )  || gvPlayer2 && hitTest ( shape , gvPlayer2 . shape )  )  && timer <= 0 )  { 
  {     var foreachOutput17 = squirrelForEach( actor [ "Checkpoint" ]  );     while(true)     {        foreachOutput17.next();        if (foreachOutput17.isDone()) break; i = foreachOutput17.getValue();  { 
 i . found = false ; 
 } 
     }  } found = true ; 
game . check = true ; 
game . chx = x ; 
game . chy = y ; 
popSound ( sndBell , 0 )  ; 
 if ( game . difficulty < 3 )  { 
  if ( gvPlayer )  { 
  if ( game . ps . health < game . maxHealth ) game . ps . health += 4 ; 
 
  else  if ( game . ps . subitem == 0 ) game . ps . subitem = "muffinBlue" ; 
 
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( game . ps2 . health < game . maxHealth ) game . ps2 . health += 4 ; 
 
  else  if ( game . ps2 . subitem == 0 ) game . ps2 . subitem = "muffinBlue" ; 
 
  
  } 
  
  } 
  
 timer = 120 ; 
 if ( gvNumPlayers > 1 )  { 
  var c = null ;
  if ( gvPlayer &&  ! gvPlayer2 )  { 
 c = actor [ newActor ( getroottable (  )  [ game . playerChar2 ]  , game . chx , game . chy )  ]  ; 
c . tftime = 0 ; 
 } 
  
  if (  ! gvPlayer && gvPlayer2 )  { 
 c = actor [ newActor ( getroottable (  )  [ game . playerChar ]  , game . chx , game . chy )  ]  ; 
c . tftime = 0 ; 
 } 
  
  } 
  
  } 
  
 timer --  ; 
 } ;  returnVal . draw = function (  ) {  if ( found ) drawSprite ( sprCheckBell , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 
  else drawSprite ( sprCheckBell , 0 , x - camx , y - camy )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Checkpoint" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = null ; 
 squirrelClassFunction . found = false ; 
 squirrelClassFunction . timer = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
TNT =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = null ; 
 returnVal . gothit = false ; 
 returnVal . hittime = 0.0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . fireshape = null ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 10 , 10 , 0 )  ; 
fireshape = Rec ( x , y , 14 , 12 , 0 )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gothit )  { 
 hittime += 2 ; 
frame += 0.002 * hittime ; 
 if ( hittime >= 150 )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
fireWeapon ( ExplodeF2 , x , y , 0 , id )  ; 
 } 
  
  } 
  
  else  { 
  if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  || gvPlayer2 && hitTest ( shape , gvPlayer2 . shape )  )  { 
 gothit = true ; 
stopSound ( sndFizz )  ; 
popSound ( sndFizz , 0 )  ; 
 } 
  
  } 
  
  if ( actor . rawin ( "WeaponEffect" )  )  {     var foreachOutput18 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput18.next();        if (foreachOutput18.isDone()) break; i = foreachOutput18.getValue();  if (  (  (  ( (i[ ( "altShape" ) ] !== undefined) )  && hitTest ( fireshape , i . altShape )  )  ||  (  !  (  ( (i[ ( "altShape" ) ] !== undefined) )  )  && hitTest ( fireshape , i . shape )  )  )  &&  ( i . blast || i . element == "fire" )  && i . element != "ice" && i . element != "water" )  { 
 hittime = max ( hittime , 135 + game . difficulty )  ; 
gothit = true ; 
 break ;  } 
  
     }  }  
  } ;  returnVal . draw = function (  ) {  if ( gothit )  { 
  if ( hittime > 120 ) drawSpriteZ ( 2 , sprTNT , frame , x - 8 - camx +  (  ( randInt ( 8 )  - 4 )  / 4 )  -  (  ( 2.0 / 150.0 )  * hittime )  , y - 8 - camy +  (  ( randInt ( 8 )  - 4 )  / 4 )  -  (  ( 2.0 / 150.0 )  * hittime )  , 0 , 0 , 1.0 +  (  ( 0.25 / 150.0 )  * hittime )  , 1.0 +  (  ( 0.25 / 150.0 )  * hittime )  , 1 )  ; 
 
  else drawSpriteZ ( 2 , sprTNT , frame , x - 8 - camx +  (  ( randInt ( 8 )  - 4 )  / 4 )  , y - 8 - camy +  (  ( randInt ( 8 )  - 4 )  / 4 )  )  ; 
 
  } 
  
  else drawSpriteZ ( 2 , sprTNT , frame , x - 8 - camx , y - 8 - camy )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "TNT" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = null ; 
 squirrelClassFunction . gothit = false ; 
 squirrelClassFunction . hittime = 0.0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . fireshape = null ; 
 squirrelClassFunction . oldsolid = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
C4 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = null ; 
 returnVal . gothit = false ; 
 returnVal . hittime = 0.0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . fireshape = null ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 10 , 10 , 0 )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
fireshape = Rec ( x , y , 16 , 16 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gothit )  { 
 hittime += 2 ; 
frame += 0.002 * hittime ; 
 if ( hittime >= 150 )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
fireWeapon ( ExplodeF2 , x , y , 0 , id )  ; 
 } 
  
  } 
  
  if ( actor . rawin ( "WeaponEffect" )  )  {     var foreachOutput19 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput19.next();        if (foreachOutput19.isDone()) break; i = foreachOutput19.getValue();  if (  (  (  ( (i[ ( "altShape" ) ] !== undefined) )  && hitTest ( fireshape , i . altShape )  )  ||  (  !  (  ( (i[ ( "altShape" ) ] !== undefined) )  )  && hitTest ( fireshape , i . shape )  )  )  &&  ( i . blast && i . power > 1 &&  ( i . element == "fire" || i . element == "shock" )  )  )  { 
 hittime = max ( hittime , 135 + game . difficulty )  ; 
gothit = true ; 
 break ;  } 
  
     }  }  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprC4 , frame , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "C4" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = null ; 
 squirrelClassFunction . gothit = false ; 
 squirrelClassFunction . hittime = 0.0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . fireshape = null ; 
 squirrelClassFunction . oldsolid = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
ColorBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . color = null ; 
 returnVal . filled = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr == null ) color = 0 ; 
 
  else color = _arr ; 
 
  if ( color != null )  if ( game . colorswitch [ color ]  ) filltile (  )  ; 
 
  
  } ;  returnVal . filltile = function (  ) {  if ( game . turnOffBlocks )  return ; 
  
  var wl = null ;
  for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "tilelayer" && gvMap . data . layers [ i ]  . name == "solid" )  { 
 wl = gvMap . data . layers [ i ]  ; 
 break ;  } 
  
  } 
  var cx = floor ( x / 16 )  ;
  var cy = floor ( y / 16 )  ;
  var tile = cx +  ( cy * wl . width )  ;
  if ( tile >= 0 && tile < wl . data . len (  )  ) wl . data [ tile ] = gvMap . solidfid ; 
 
 filled = 1 ; 
 } ;  returnVal . run = function (  ) {  if ( color != null )  if ( game . colorswitch [ color ]  ) filltile (  )  ; 
 
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprColorBlock ,  ( color * 2 )  + filled , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "ColorBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . color = null ; 
 squirrelClassFunction . filled = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
ColorSwitch =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . color = 0 ; 
 returnVal . shape = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr == null ) color = 0 ; 
 
  else color = _arr . tointeger (  )  ; 
 
 shape = Rec ( x , y , 16 , 16 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( game . colorswitch [ color ]  == true )  return ; 
  
  if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  && gvPlayer . y < y - 16 && gvPlayer . vspeed > 0 )  { 
 gvPlayer . vspeed =  - 2 ; 
game . colorswitch [ color ] = true ; 
dostr ( "saveGame()" )  ; 
 if ( actor . rawin ( "ColorBlock" )  )  {     var foreachOutput20 = squirrelForEach( actor [ "ColorBlock" ]  );     while(true)     {        foreachOutput20.next();        if (foreachOutput20.isDone()) break; i = foreachOutput20.getValue();  { 
 i . filltile (  )  ; 
 } 
     }  }  
  } 
  
  if ( gvPlayer2 && hitTest ( shape , gvPlayer2 . shape )  && gvPlayer2 . y < y - 16 && gvPlayer2 . vspeed > 0 )  { 
 gvPlayer2 . vspeed =  - 2 ; 
game . colorswitch [ color ] = true ; 
dostr ( "saveGame()" )  ; 
 if ( actor . rawin ( "ColorBlock" )  )  {     var foreachOutput21 = squirrelForEach( actor [ "ColorBlock" ]  );     while(true)     {        foreachOutput21.next();        if (foreachOutput21.isDone()) break; i = foreachOutput21.getValue();  { 
 i . filltile (  )  ; 
 } 
     }  }  
  } 
  
  } ;  returnVal . draw = function (  ) {  if ( game . colorswitch [ color ]  ) drawSprite ( sprColorSwitch ,  ( color * 2 )  + 1 , x - camx , y - camy )  ; 
 
  else drawSprite ( sprColorSwitch , color * 2 , x - camx , y - camy )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "ColorSwitch" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . color = 0 ; 
 squirrelClassFunction . shape = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
EvilBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
slideshape = Rec ( x , y - 1 , 12 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && gvPlayer . vspeed < 0 && hitTest ( shape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
popSound ( sndBump , 0 )  ; 
newActor ( Darknyan , x , y - 16 )  ; 
 } 
  
  else  if ( gvPlayer2 && gvPlayer2 . vspeed < 0 && hitTest ( shape , gvPlayer2 . shape )  )  { 
 gvPlayer2 . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
popSound ( sndBump , 0 )  ; 
newActor ( Darknyan , x , y - 16 )  ; 
 } 
  
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprBoxItem , getFrames (  )  / 16 , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "EvilBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
EvilBlockB =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
slideshape = Rec ( x , y - 1 , 12 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && gvPlayer . vspeed < 0 && hitTest ( shape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
popSound ( sndBump , 0 )  ; 
newActor ( MuffinBomb , x , y - 16 )  ; 
 } 
  
  else  if ( gvPlayer2 && gvPlayer2 . vspeed < 0 && hitTest ( shape , gvPlayer2 . shape )  )  { 
 gvPlayer2 . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
popSound ( sndBump , 0 )  ; 
newActor ( MuffinBomb , x , y - 16 )  ; 
 } 
  
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprBoxItem , getFrames (  )  / 16 , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "EvilBlockB" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
BreakBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . tile = 0 ; 
 returnVal . solidtile = 0 ; 
 returnVal . layer = 0 ; 
 returnVal . solidlayer = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
slideshape = Rec ( x , y - 1 , 12 , 8 , 0 )  ; 
 for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "tilelayer" && gvMap . data . layers [ i ]  . name == "fg" )  { 
 layer = gvMap . data . layers [ i ]  ; 
 break ;  } 
  
  } 
  var cx = floor ( x / 16 )  ;
  var cy = floor ( y / 16 )  ;
 tile = cx +  ( cy * layer . width )  ; 
 for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "tilelayer" && gvMap . data . layers [ i ]  . name == "solid" )  { 
 solidlayer = gvMap . data . layers [ i ]  ; 
 break ;  } 
  
  } 
  } ;  returnVal . _typeof = function (  ) {  return "BreakBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . tile = 0 ; 
 squirrelClassFunction . solidtile = 0 ; 
 squirrelClassFunction . layer = 0 ; 
 squirrelClassFunction . solidlayer = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
LockBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . color = 0 ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr == null ) color = 0 ; 
 
  else color = _arr . tointeger (  )  ; 
 
 oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 32 )  || gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 32 )  )  { 
  switch ( color )  {  case 0 :  if ( gvKeyCopper )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
stopSound ( sndBump )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  break ;  case 1 :  if ( gvKeySilver )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
stopSound ( sndBump )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  break ;  case 2 :  if ( gvKeyGold )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
stopSound ( sndBump )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  break ;  case 3 :  if ( gvKeyMythril )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
stopSound ( sndBump )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  break ;  }  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprLockBlock , color , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "LockBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . color = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
BossDoor =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . dy = 0 ; 
 returnVal . moving = false ; 
 returnVal . delay = 0 ; 
 returnVal . opening = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr != "" ) delay = _arr . tointeger (  )  ; 
 
  } ;  returnVal . run = function (  ) {  if ( gvWarning <= 10 && dy == 0 )  { 
 moving = true ; 
tileSetSolid ( x , y , 1 )  ; 
tileSetSolid ( x , y - 16 , 1 )  ; 
tileSetSolid ( x , y - 32 , 1 )  ; 
tileSetSolid ( x , y - 48 , 1 )  ; 
 } 
  
  if ( moving && dy < 32 &&  ! opening )  { 
  if ( delay > 0 ) delay --  ; 
 
  else dy ++  ; 
 
  } 
  
  else  if ( opening && dy > 0 )  { 
 dy --  ; 
tileSetSolid ( x , y , 0 )  ; 
tileSetSolid ( x , y - 16 , 0 )  ; 
tileSetSolid ( x , y - 32 , 0 )  ; 
tileSetSolid ( x , y - 48 , 0 )  ; 
 } 
  
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 4 , sprBossDoor , 0 , x - camx , y - camy - dy + 16 )  ; 
drawSpriteZ ( 4 , sprBossDoor , 0 , x - camx , y - camy - 80 + dy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "BossDoor" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . dy = 0 ; 
 squirrelClassFunction . moving = false ; 
 squirrelClassFunction . delay = 0 ; 
 squirrelClassFunction . opening = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
FishBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
tileSetSolid ( x , y , 1 )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
slideshape = Rec ( x , y - 1 , 12 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 )  )  if ( game . maxRedCoins <= game . redCoins )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
tileSetSolid ( x , y , 0 )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 64 )  )  if ( game . maxRedCoins <= game . redCoins )  { 
 deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
tileSetSolid ( x , y , 0 )  ; 
popSound ( sndBump , 0 )  ; 
 } 
  
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprFishBlock , 0 , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "FishBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
FireBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . fireshape = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
slideshape = Rec ( x , y - 1 , 12 , 8 , 0 )  ; 
fireshape = Rec ( x , y , 16 , 16 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( actor . rawin ( "WeaponEffect" )  )  {     var foreachOutput22 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput22.next();        if (foreachOutput22.isDone()) break; i = foreachOutput22.getValue();  if (  (  (  ( (i[ ( "altShape" ) ] !== undefined) )  && hitTest ( fireshape , i . altShape )  )  ||  (  !  (  ( (i[ ( "altShape" ) ] !== undefined) )  )  && hitTest ( fireshape , i . shape )  )  )  && i . element == "fire" )  { 
 tileSetSolid ( x , y , 0 )  ; 
deleteActor ( id )  ; 
 if ( i . piercing == 0 ) deleteActor ( i . id )  ; 
 
  else i . piercing --  ; 
 
 newActor ( Flame , x , y )  ; 
popSound ( sndFlame , 0 )  ; 
 } 
  
     }  }  
  if ( actor . rawin ( "Flame" )  )  {     var foreachOutput23 = squirrelForEach( actor [ "Flame" ]  );     while(true)     {        foreachOutput23.next();        if (foreachOutput23.isDone()) break; i = foreachOutput23.getValue();  if ( inDistance2 ( x , y , i . x , i . y , 16 )  && i . frame >= 6 )  { 
 tileSetSolid ( x , y , 0 )  ; 
deleteActor ( id )  ; 
newActor ( Flame , x , y )  ; 
popSound ( sndFlame , 0 )  ; 
 } 
  
     }  }  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprFireBlock , 0 , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "FireBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . fireshape = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
CharSwapper =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . character = "Tux" ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . swapmode = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr != null && _arr != "" ) character = _arr ; 
 
  else  if ( game . playerChar2 != "" )  { 
 character = game . playerChar2 ; 
swapmode = true ; 
 } 
  
  else character = game . playerChar ; 
 
  
 shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( gvPlayer &&  ! hitTest ( shape , gvPlayer . shape )  ) tileSetSolid ( x , y , 1 )  ; 
 
  if ( v <=  - 8 )  { 
 vspeed = 1 ; 
 var nx = gvPlayer . x ;
  var ny = gvPlayer . y ;
  var nf = gvPlayer . flip ;
  var nh = gvPlayer . hspeed ;
  var nv = gvPlayer . vspeed ;
  var ns = gvPlayer . stats ;
 deleteActor ( gvPlayer . id )  ; 
gvPlayer = false ; 
newActor ( getroottable (  )  [ character ]  , nx , ny )  ; 
gvPlayer . tftime = 0 ; 
gvPlayer . flip = nf ; 
gvPlayer . hspeed = nh ; 
gvPlayer . vspeed = nv ; 
gvPlayer . stats = ns ; 
tileSetSolid ( x , y , 0 )  ; 
popSound ( sndHeal , 0 )  ; 
 if ( swapmode )  { 
  if ( character == game . playerChar ) character = game . playerChar2 ; 
 
  else character = game . playerChar ; 
 
  } 
  
  } 
  
 full =  ( game . characters . rawin ( character )  &&  !  ( gvPlayer &&  squirrelTypeOf ( gvPlayer )  == character || gvPlayer2 &&  squirrelTypeOf ( gvPlayer2 )  == character )  )  ; 
 if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  && gvPlayer . vspeed < 0 && v == 0 && full )  { 
 gvPlayer . vspeed = 0 ; 
vspeed =  - 2 ; 
v -= 2 ; 
popSound ( sndBump , 0 )  ; 
 } 
  
 v += vspeed ; 
 } ;  returnVal . draw = function (  ) {  if ( full || vspeed < 0 )  { 
 drawSpriteZ ( 2 , sprBoxShop , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 if (  ( (gvCharacters[ ( character ) ] !== undefined) )  ) drawSpriteZ ( 2 , getroottable (  )  [ gvCharacters [ character ]  [ "doll" ]  ]  , 0 , x - camx , y - camy + v )  ; 
 
  } 
  
  else drawSpriteZ ( 2 , sprBoxEmpty , 0 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "CharSwapper" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . character = "Tux" ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . swapmode = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
Crumbler =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . timer = 0 ; 
 returnVal . oldsolid = 0 ; 
 returnVal . broken = false ; 
 returnVal . alpha = 1.0 ; 
 returnVal . wasStepped = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
shape = Rec ( x , y - 1 , 8 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if (  ! broken )  { 
  if ( alpha < 1.0 ) alpha += 0.1 ; 
 
  if (  ( gvPlayer && hitTest ( shape , gvPlayer . shape )  || gvPlayer2 && hitTest ( shape , gvPlayer2 . shape )  )  &&  ! wasStepped ) wasStepped = true ; 
 
  if ( wasStepped ) timer += 2 ; 
 
  if ( timer == 30 )  { 
 broken = true ; 
tileSetSolid ( x , y , oldsolid )  ; 
timer = 0 ; 
alpha = 0.0 ; 
 if ( sprCrumbleRock == sprCrumbleIce )  { 
 newActor ( IceChunks , x , y )  ; 
popSound ( sndIceBreak )  ; 
 } 
  
  else  { 
 newActor ( RockChunks , x , y )  ; 
popSound ( sndCrumble )  ; 
 } 
  
  } 
  
  } 
  
  else  { 
  if ( timer < 300 ) timer ++  ; 
 
  if (  ( gvPlayer &&  ! gvPlayer2 &&  ! hitTest ( shape , gvPlayer . shape )  || gvPlayer2 &&  ! gvPlayer &&  ! hitTest ( shape , gvPlayer2 . shape )  || gvPlayer && gvPlayer2 &&  ! hitTest ( shape , gvPlayer . shape )  &&  ! hitTest ( shape , gvPlayer2 . shape )  )  && timer == 300 )  { 
 broken = false ; 
tileSetSolid ( x , y , 1 )  ; 
timer = 0 ; 
wasStepped = false ; 
 } 
  
  } 
  
  } ;  returnVal . draw = function (  ) {  if (  ! broken ) drawSpriteZ ( 7 , sprCrumbleRock , timer / 8 , x - camx , y - camy , 0 , 0 , 1 , 1 , alpha )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Crumbler" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . timer = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 squirrelClassFunction . broken = false ; 
 squirrelClassFunction . alpha = 1.0 ; 
 squirrelClassFunction . wasStepped = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
BuildCube =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . held = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  shape = Rec ( x , y , 8 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  } ;  returnVal . draw = function (  ) { drawSprite ( sprCube , 0 , x - camx , y - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . held = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
FlipBlock =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . spinning = 0 ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0 ; 
 returnVal . oldsolid = 0 ; 
 returnVal . glimmerTimer = 0 ; 
 returnVal . spintime = 120 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
shape = Rec ( x , y + 2 , 7 , 8 , 0 )  ; 
slideshape = Rec ( x , y - 1 , 16 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( spinning > 0 ) spinning --  ; 
 
  if ( spinning == 0 &&  ( gvPlayer &&  ! gvPlayer2 &&  ! hitTest ( shape , gvPlayer . shape )  ||  ! gvPlayer && gvPlayer2 &&  ! hitTest ( shape , gvPlayer2 . shape )  || gvPlayer && gvPlayer2 &&  ! hitTest ( shape , gvPlayer . shape )  &&  ! hitTest ( shape , gvPlayer2 . shape )  )  ) tileSetSolid ( x , y , 1 )  ; 
 
  if ( gvPlayer )  { 
  if ( spinning == 0 )  { 
  if ( gvPlayer . vspeed < 0 )  if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . y > y + 4 )  { 
 gvPlayer . vspeed = 0 ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
spinning = spintime ; 
 } 
  
  
  if ( fabs ( gvPlayer . hspeed )  >= 4.5 &&  ( gvPlayer . inMelee )  && hitTest ( slideshape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
spinning = spintime ; 
 } 
  
  if (  ( (gvPlayer[ ( "anim" ) ] !== undefined) )  )  if ( hitTest ( gvPlayer . shape , shape )  && gvPlayer . anim == "stomp" )  { 
 gvPlayer . vspeed =  - 2.0 ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
spinning = spintime ; 
 } 
  
  
  } 
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( spinning == 0 )  { 
  if ( gvPlayer2 . vspeed < 0 )  if ( hitTest ( shape , gvPlayer2 . shape )  && gvPlayer2 . y > y + 4 )  { 
 gvPlayer2 . vspeed = 0 ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
spinning = spintime ; 
 } 
  
  
  if ( fabs ( gvPlayer2 . hspeed )  >= 4.5 &&  ( gvPlayer2 . inMelee )  && hitTest ( slideshape , gvPlayer2 . shape )  )  { 
 gvPlayer2 . vspeed = 0 ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
spinning = spintime ; 
 } 
  
  if (  ( (gvPlayer2[ ( "anim" ) ] !== undefined) )  )  if ( hitTest ( gvPlayer2 . shape , shape )  && gvPlayer2 . anim == "stomp" )  { 
 gvPlayer2 . vspeed =  - 2.0 ; 
popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
spinning = spintime ; 
 } 
  
  
  } 
  
  } 
  
  if ( actor . rawin ( "WeaponEffect" )  )  {     var foreachOutput24 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput24.next();        if (foreachOutput24.isDone()) break; i = foreachOutput24.getValue();  { 
  if (  (  (  (  ( (i[ ( "altShape" ) ] !== undefined) )  && hitTest ( shape , i . altShape )  )  ||  (  !  (  ( (i[ ( "altShape" ) ] !== undefined) )  )  && hitTest ( shape , i . shape )  )  )  )  && spinning == 0 )  { 
  if ( i . blast &&  ! i . box && spinning == 0 )  { 
 popSound ( sndBump , 0 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
spinning = spintime ; 
 } 
  
  } 
  
  } 
     }  }  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprFlipBlock , spinning / 5.0 , x - 8 - camx , y - 8 - camy + v )  ; 
 } ;  returnVal . destructor = function (  ) { fireWeapon ( BoxHit , x , y - 8 , 1 , id )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "WoodBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . slideshape = 0 ; 
 squirrelClassFunction . spinning = 0 ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0 ; 
 squirrelClassFunction . oldsolid = 0 ; 
 squirrelClassFunction . glimmerTimer = 0 ; 
 squirrelClassFunction . spintime = 120 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 



}; 
