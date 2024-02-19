if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/water.nut'] = function () { 


Water =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . substance = "water" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr != null && _arr != "" ) substance = _arr ; 
 
  } ;  returnVal . run = function (  ) {  if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  ) handleHits ( gvPlayer )  ; 
 
  if ( gvPlayer2 && hitTest ( shape , gvPlayer2 . shape )  ) handleHits ( gvPlayer2 )  ; 
 
  } ;  returnVal . handleHits = function ( target ) {  switch ( substance )  {  case "lava" : target . x =  ( target . x + target . xprev )  / 2.0 ; 
target . y =  ( target . y + target . yprev )  / 2.0 ; 
 if (  ( (target[ ( "stats" ) ] !== undefined) )  &&  ! target . invincible &&  ! target . blinking ) target . stats . health -= 0.2 * target . damageMult . fire ; 
 
  if ( getFrames (  )  % 8 == 0 )  { 
 newActor ( FlameTiny , target . x + target . shape . w - randInt ( target . shape . w * 2 )  , target . y + target . shape . h - randInt ( target . shape . h * 2 )  )  ; 
popSound ( sndFlame )  ; 
 } 
  
  break ;  case "acid" :  if (  ( (target[ ( "stats" ) ] !== undefined) )  &&  ! target . invincible &&  ! target . blinking ) target . stats . health -= 0.1 * target . damageMult . toxic ; 
 
  if ( getFrames (  )  % 8 == 0 )  { 
  var c = actor [ newActor ( AcidBubble , target . x + target . shape . w - randInt ( target . shape . w * 2 )  , target . y + target . shape . h - randInt ( target . shape . h * 2 )  )  ]  ;
 c . vspeed =  - 0.2 ; 
popSound ( sndBlurp )  ; 
 } 
  
  break ;  case "swamp" :  case "honey" :  if (  ( (target[ ( "stats" ) ] !== undefined) )  && target . stats . weapon == "water" )  break ;  
 target . x =  ( target . x + target . xprev )  / 2.0 ; 
target . y =  ( target . y + target . yprev )  / 2.0 ; 
 break ;  }  } ;  returnVal . draw = function (  ) {  switch ( substance )  {  case "acid" :  for (  var i = 0 ;
 i < shape . w / 8 ; i ++  )  { 
  for (  var j = 0 ;
 j < shape . h / 8 ; j ++  )  { 
 drawSprite (  ( j == 0 ? sprAcidSurface : sprAcid )  , getFrames (  )  / 16 , x - shape . w - floor ( camx )  +  ( i * 16 )  , y - shape . h - camy +  ( j * 16 )  , 0 , 0 , 1 , 1 , 0.5 )  ; 
 } 
  } 
  break ;  case "lava" :  for (  var i = 0 ;
 i < shape . w / 8 ; i ++  )  { 
  for (  var j = 0 ;
 j < shape . h / 8 ; j ++  )  { 
 drawSprite (  ( j == 0 ? sprLavaSurface : sprLava )  ,  ( j == 0 ?  ( getFrames (  )  / 16 )  +  ( i * i )  : getFrames (  )  / 16 )  , x - shape . w - floor ( camx )  +  ( i * 16 )  , y - shape . h - camy +  ( j * 16 )  , 0 , 0 , 1 , 1 , 0.5 )  ; 
 } 
  } 
  for (  var i = 0 ;
 i < shape . w / 8 ; i ++  )  { 
 drawLight ( sprLightFire , i + getFrames (  )  / 8 , x - shape . w - floor ( camx )  +  ( i * 16 )  + 8 , y - shape . h - camy - 4 ,  ( getFrames (  )  / 4 )  +  ( i * 15 )  , 0 , 0.75 +  ( sin (  ( getFrames (  )  / 30.0 )  +  ( i * 15 )  )  * 0.25 )  , 0.75 +  ( sin (  ( getFrames (  )  / 30.0 )  +  ( i * 15 )  )  * 0.25 )  )  ; 
 } 
  break ;  case "honey" : setDrawColor ( 0xf8f80060 )  ; 
drawRect ( x - shape . w - floor ( camx )  , y - shape . h - camy ,  ( shape . w * 2 )  - 1 ,  ( shape . h * 2 )  + 2 , true )  ; 
 for (  var i = 0 ;
 i < shape . w / 8 ; i ++  )  { 
 drawSpriteEx ( sprHoneySurface ,  ( getFrames (  )  / 32 )  + i , x - shape . w - floor ( camx )  +  ( i * 16 )  , y - shape . h - camy - 4 , 0 , 0 , 1 , 1 , 0.5 )  ; 
 } 
  break ;  case "swamp" : setDrawColor ( 0x68301860 )  ; 
drawRect ( x - shape . w - floor ( camx )  , y - shape . h - camy ,  ( shape . w * 2 )  - 1 ,  ( shape . h * 2 )  + 2 , true )  ; 
 for (  var i = 0 ;
 i < shape . w / 8 ; i ++  )  { 
 drawSpriteEx ( sprSwampSurface ,  ( getFrames (  )  / 32 )  + i , x - shape . w - floor ( camx )  +  ( i * 16 )  , y - shape . h - camy - 4 , 0 , 0 , 1 , 1 , 0.5 )  ; 
 } 
  break ;  default : setDrawColor ( 0x2020a060 )  ; 
drawRect ( x - shape . w - floor ( camx )  , y - shape . h - camy ,  ( shape . w * 2 )  - 1 ,  ( shape . h * 2 )  + 2 , true )  ; 
 for (  var i = 0 ;
 i < shape . w / 8 ; i ++  )  { 
 drawSpriteEx ( sprWaterSurface ,  ( getFrames (  )  / 16 )  + i , x - shape . w - floor ( camx )  +  ( i * 16 )  , y - shape . h - camy - 4 , 0 , 0 , 1 , 1 , 0.5 )  ; 
 } 
  break ;  }  } ;  returnVal . _typeof = function (  ) {  return "Water" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . substance = "water" ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 



}; 
