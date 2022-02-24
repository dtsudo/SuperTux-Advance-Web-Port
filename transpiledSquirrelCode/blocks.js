if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


WoodBlock =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . coins = 0 ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0 ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
shape = Rec ( x , y , 7 , 9 , 0 )  ; 
slideshape = Rec ( x , y - 1 , 16 , 8 , 0 )  ; 
 if ( _arr != null && _arr != "" ) coins = _arr . tointeger (  )  ; 
 
 game . maxcoins += coins ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( v == 0 )  { 
 vspeed = 0 ; 
 if ( coins <= 1 )  { 
  if ( gvPlayer . vspeed < 0 )  if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . y > y + 4 )  { 
 gvPlayer . vspeed = 0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
playSoundChannel ( sndBump , 0 , 2 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
  } 
  
  
  if ( gvPlayer . rawin ( "anSlide" )  )  if ( abs ( gvPlayer . hspeed )  >= 4.5 && gvPlayer . anim == gvPlayer . anSlide )  if ( hitTest ( slideshape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
playSoundChannel ( sndBump , 0 , 2 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
  } 
  
  
  
  if ( gvPlayer . rawin ( "anStomp" )  )  if ( hitTest ( gvPlayer . shape , shape )  && gvPlayer . anim == gvPlayer . anStomp )  { 
 gvPlayer . vspeed =  - 2.0 ; 
deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
playSoundChannel ( sndBump , 0 , 2 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
  } 
  
  
  } 
  
  else  { 
  if ( gvPlayer . vspeed < 0 )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
playSoundChannel ( sndBump , 0 , 2 )  ; 
 } 
  
  
  if ( gvPlayer . rawin ( "anSlide" )  )  if (  ( abs ( gvPlayer . hspeed )  >= 4.5 ||  ( game . weapon == 4 && gvPlayer . vspeed >= 2 )  )  && gvPlayer . anim == gvPlayer . anSlide )  if ( hitTest ( slideshape , gvPlayer . shape )  )  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
playSoundChannel ( sndBump , 0 , 2 )  ; 
 } 
  
  
  
  if ( gvPlayer . rawin ( "anStomp" )  )  if ( hitTest ( gvPlayer . shape , shape )  && gvPlayer . anim == gvPlayer . anStomp )  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
playSoundChannel ( sndBump , 0 , 2 )  ; 
 } 
  
  
  } 
  
  } 
  
  } 
  
  if ( actor . rawin ( "BadExplode" )  )  {     var foreachOutput = squirrelForEach ( actor [ "BadExplode" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  && i . frame < 1 && vspeed == 0 )  { 
  if ( coins <= 1 )  { 
 deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
playSoundChannel ( sndBump , 0 , 2 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
  } 
  
  else  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
playSoundChannel ( sndBump , 0 , 2 )  ; 
 } 
  
  } 
  
  } 
     }  }  
  if ( actor . rawin ( "ExplodeF" )  )  {     var foreachOutput = squirrelForEach ( actor [ "ExplodeF" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  && i . frame < 1 && vspeed == 0 )  { 
  if ( coins <= 1 )  { 
 deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
playSoundChannel ( sndBump , 0 , 2 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
  } 
  
  else  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
playSoundChannel ( sndBump , 0 , 2 )  ; 
 } 
  
  } 
  
  } 
     }  }  
  if ( actor . rawin ( "ExplodeN" )  )  {     var foreachOutput = squirrelForEach ( actor [ "ExplodeN" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  && i . frame < 1 && vspeed == 0 )  { 
  if ( coins <= 1 )  { 
 deleteActor ( id )  ; 
newActor ( WoodChunks , x , y )  ; 
playSoundChannel ( sndBump , 0 , 2 )  ; 
tileSetSolid ( x , y , oldsolid )  ; 
 if ( coins > 0 ) newActor ( CoinEffect , x , y - 16 )  ; 
 
  } 
  
  else  { 
 vspeed =  - 2 ; 
coins --  ; 
newActor ( CoinEffect , x , y - 16 )  ; 
playSoundChannel ( sndBump , 0 , 2 )  ; 
 } 
  
  } 
  
  } 
     }  }  
  if ( v ==  - 8 ) vspeed = 1 ; 
 
 v += vspeed ; 
drawSpriteZ ( 2 , sprWoodBox , 0 , x - 8 - camx , y - 8 - camy + v )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "WoodBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
IceBlock =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . fireshape = 0 ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
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
playSound ( sndBump , 0 )  ; 
 } 
  
  
  if (  ( abs ( gvPlayer . hspeed )  >= 3.5 ||  ( game . weapon == 4 && gvPlayer . vspeed >= 2 )  )  && gvPlayer . anim == gvPlayer . anSlide )  if ( hitTest ( slideshape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
playSound ( sndBump , 0 )  ; 
 } 
  
  
  if ( gvPlayer . rawin ( "anStomp" )  )  if ( hitTest ( gvPlayer . shape , shape )  && gvPlayer . anim == gvPlayer . anStomp )  { 
 gvPlayer . vspeed =  - 2.0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
playSound ( sndBump , 0 )  ; 
 } 
  
  
  } 
  
  if ( actor . rawin ( "Fireball" )  )  {     var foreachOutput = squirrelForEach ( actor [ "Fireball" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  if ( hitTest ( fireshape , i . shape )  )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
deleteActor ( i . id )  ; 
newActor ( Poof , x , y )  ; 
playSound ( sndFlame , 0 )  ; 
 } 
  
     }  }  
  if ( actor . rawin ( "FlameBreath" )  )  {     var foreachOutput = squirrelForEach ( actor [ "FlameBreath" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  if ( hitTest ( fireshape , i . shape )  )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
deleteActor ( i . id )  ; 
newActor ( Poof , x , y )  ; 
playSound ( sndFlame , 0 )  ; 
 } 
  
     }  }  
  if ( actor . rawin ( "ExplodeN" )  )  {     var foreachOutput = squirrelForEach ( actor [ "ExplodeN" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  if ( hitTest ( fireshape , i . shape )  )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
newActor ( Poof , x , y )  ; 
playSound ( sndFlame , 0 )  ; 
 } 
  
     }  }  
  if ( actor . rawin ( "ExplodeF" )  )  {     var foreachOutput = squirrelForEach ( actor [ "ExplodeF" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  if ( hitTest ( fireshape , i . shape )  )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
newActor ( Poof , x , y )  ; 
playSound ( sndFlame , 0 )  ; 
 } 
  
     }  }  
 drawSpriteZ ( 2 , sprIceBlock , 0 , x - 8 - camx , y - 8 - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
WoodChunks =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . h = 0.0 ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed =  - 3.0 ; 
 returnVal . timer = 30 ; 
 returnVal . a = 0 ; 
 
 with ( returnVal ) { 
  returnVal . run = function (  ) { vspeed += 0.2 ; 
v += vspeed ; 
h += 1 ; 
a += 4 ; 
drawSpriteExZ ( 2 , sprWoodChunks , 0 , x - camx - h - 2 , y - camy + v - 2 ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteExZ ( 2 , sprWoodChunks , 1 , x - camx + h + 2 , y - camy + v - 2 , a , 0 , 1 , 1 , 1 )  ; 
drawSpriteExZ ( 2 , sprWoodChunks , 2 , x - camx - h - 2 , y - camy + v + 2 + h ,  - a , 0 , 1 , 1 , 1 )  ; 
drawSpriteExZ ( 2 , sprWoodChunks , 3 , x - camx + h + 2 , y - camy + v + 2 + h , a , 0 , 1 , 1 , 1 )  ; 
timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
ItemBlock =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . item = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
item = _arr ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( game . difficulty == 2 &&  ( item == 1 || item == 2 )  ) full = false ; 
 
  if ( v <=  - 8 )  { 
 vspeed = 1 ; 
 switch ( item )  {  case 0 : newActor ( CoinEffect , x , y - 16 )  ; 
 break ;  case 1 :  if ( game . difficulty == 3 )  { 
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
 break ;  }  } 
  
  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if ( full )  { 
 gvPlayer . vspeed = 0 ; 
full = false ; 
vspeed =  - 2 ; 
playSound ( sndBump , 0 )  ; 
 } 
  
  
  
  
 v += vspeed ; 
 if ( full || vspeed < 0 ) drawSpriteZ ( 2 , sprBoxItem , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else drawSpriteZ ( 2 , sprBoxEmpty , 0 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
TriggerBlock =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . item = 0 ; 
 returnVal . code = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) {  baseConstructor  ( _x , _y )  ; 
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
  
  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if ( full )  { 
 gvPlayer . vspeed = 0 ; 
full = false ; 
vspeed =  - 1 ; 
playSound ( sndBump , 0 )  ; 
 } 
  
  
  
  
 v += vspeed ; 
 if ( full || vspeed < 0 ) drawSpriteZ ( 2 , sprBoxRed , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else drawSpriteZ ( 2 , sprBoxEmpty , 0 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
InfoBlock =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . item = 0 ; 
 returnVal . text = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) {  baseConstructor  ( _x , _y )  ; 
text = _arr ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( v <=  - 8 )  { 
 vspeed = 0.5 ; 
 } 
  
  if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if ( full )  { 
 gvPlayer . vspeed = 0 ; 
vspeed =  - 1 ; 
playSound ( sndBump , 0 )  ; 
gvInfoBox = text ; 
 } 
  
  
  
  if ( gvInfoBox == text )  if ( distance2 ( x , y , gvPlayer . x , gvPlayer . y )  > 64 ) gvInfoBox = "" ; 
 
  
  } 
  
 v += vspeed ; 
drawSpriteZ ( 2 , sprBoxInfo , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
KelvinScarf =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . text = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) {  baseConstructor  ( _x , _y )  ; 
text = _arr ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( devcom )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 gvInfoBox = text ; 
 } 
  
  
  if ( gvInfoBox == text )  { 
  if ( distance2 ( x , y , gvPlayer . x , gvPlayer . y )  > 64 ) gvInfoBox = "" ; 
 
  else  if ( gvPlayer . invincible <= 1 ) gvPlayer . invincible = 10 ; 
 
  
  } 
  
  } 
  
  if ( devcom ) drawSpriteZ ( 2 , sprKelvinScarf , getFrames (  )  / 16 , x - 8 - camx , y - 8 - camy )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
BounceBlock =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . item = 0 ; 
 returnVal . text = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 9 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
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
playSound ( sndBump , 0 )  ; 
 } 
  
  
  
 shape . setPos ( x , y - 1 )  ; 
 if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed >= 0 && v == 0 )  if ( full )  { 
 gvPlayer . vspeed =  - 4 ; 
 if ( getcon ( "jump" , "hold" )  ) gvPlayer . vspeed =  - 7.5 ; 
 
 vspeed = 1 ; 
playSound ( sndBump , 0 )  ; 
 } 
  
  
  
  if ( gvInfoBox == text )  if ( distance2 ( x , y , gvPlayer . x , gvPlayer . y )  > 64 ) gvInfoBox = "" ; 
 
  
  } 
  
 v += vspeed ; 
drawSpriteZ ( 2 , sprBoxBounce , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Checkpoint =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = null ; 
 returnVal . found = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y + 16 , 10 , 16 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && found == false )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
  {     var foreachOutput = squirrelForEach ( actor [ "Checkpoint" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
 i . found = false ; 
 } 
     }  } found = true ; 
game . check = true ; 
game . chx = x ; 
game . chy = y ; 
playSoundChannel ( sndBell , 0 , 4 )  ; 
 if ( game . difficulty < 3 )  { 
  if ( game . health < game . maxHealth ) game . health ++  ; 
 
  else  if ( game . subitem == 0 ) game . subitem = 5 ; 
 
  
  } 
  
  } 
  
  
  if ( found ) drawSprite ( sprCheckBell , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 
  else drawSprite ( sprCheckBell , 0 , x - camx , y - camy )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Checkpoint" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
TNT =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = null ; 
 returnVal . gothit = false ; 
 returnVal . hittime = 0.0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . fireshape = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 10 , 10 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
fireshape = Rec ( x , y , 14 , 12 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gothit )  { 
 hittime += 2 ; 
frame += 0.002 * hittime ; 
 if ( hittime >= 150 )  { 
 tileSetSolid ( x , y , 0 )  ; 
deleteActor ( id )  ; 
newActor ( BadExplode , x , y )  ; 
 } 
  
  } 
  
  else  { 
  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 gothit = true ; 
stopSound ( sndFizz )  ; 
playSound ( sndFizz , 0 )  ; 
 } 
  
  
  } 
  
  if ( actor . rawin ( "Fireball" )  )  {     var foreachOutput = squirrelForEach ( actor [ "Fireball" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  if ( hitTest ( fireshape , i . shape )  )  { 
 tileSetSolid ( x , y , 0 )  ; 
deleteActor ( id )  ; 
newActor ( BadExplode , x , y )  ; 
deleteActor ( i . id )  ; 
 } 
  
     }  }  
  if ( actor . rawin ( "FlameBreath" )  )  {     var foreachOutput = squirrelForEach ( actor [ "FlameBreath" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  if ( hitTest ( fireshape , i . shape )  )  { 
 tileSetSolid ( x , y , 0 )  ; 
deleteActor ( id )  ; 
newActor ( BadExplode , x , y )  ; 
deleteActor ( i . id )  ; 
 } 
  
     }  }  
  if ( gothit )  { 
  if ( hittime > 120 ) drawSpriteExZ ( 2 , sprTNT , frame , x - 8 - camx +  (  ( randInt ( 8 )  - 4 )  / 4 )  -  (  ( 2.0 / 150.0 )  * hittime )  , y - 8 - camy +  (  ( randInt ( 8 )  - 4 )  / 4 )  -  (  ( 2.0 / 150.0 )  * hittime )  , 0 , 0 , 1.0 +  (  ( 0.25 / 150.0 )  * hittime )  , 1.0 +  (  ( 0.25 / 150.0 )  * hittime )  , 1 )  ; 
 
  else drawSpriteZ ( 2 , sprTNT , frame , x - 8 - camx +  (  ( randInt ( 8 )  - 4 )  / 4 )  , y - 8 - camy +  (  ( randInt ( 8 )  - 4 )  / 4 )  )  ; 
 
  } 
  
  else drawSpriteZ ( 2 , sprTNT , frame , x - 8 - camx , y - 8 - camy )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "TNT" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
C4 =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = null ; 
 returnVal . gothit = false ; 
 returnVal . hittime = 0.0 ; 
 returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 10 , 10 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) { drawSpriteZ ( 2 , sprC4 , frame , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "TNT" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
ColorBlock =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . color = null ; 
 returnVal . filled = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
 if ( _arr == null ) color = 0 ; 
 
  else color = _arr ; 
 
  if ( color != null )  if ( game . colorswitch [ color ]  ) filltile (  )  ; 
 
  
  } ;  returnVal . filltile = function (  ) {  var wl = null ;
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
 } ;  returnVal . run = function (  ) { drawSpriteZ ( 2 , sprColorBlock ,  ( color * 2 )  + filled , x - camx , y - camy )  ; 
 if ( color != null )  if ( game . colorswitch [ color ]  ) filltile (  )  ; 
 
  
  } ;  returnVal . _typeof = function (  ) {  return "ColorBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
ColorSwitch =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . color = 0 ; 
 returnVal . shape = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
 if ( _arr == null ) color = 0 ; 
 
  else color = _arr . tointeger (  )  ; 
 
 shape = Rec ( x , y , 16 , 16 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( game . colorswitch [ color ]  ) drawSprite ( sprColorSwitch ,  ( color * 2 )  + 1 , x - camx , y - camy )  ; 
 
  else  { 
 drawSprite ( sprColorSwitch , color * 2 , x - camx , y - camy )  ; 
 if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . y < y - 16 && gvPlayer . vspeed > 0 )  { 
 gvPlayer . vspeed =  - 1.5 ; 
game . colorswitch [ this . color ] = true ; 
dostr ( "saveGame()" )  ; 
 if ( actor . rawin ( "ColorBlock" )  )  {     var foreachOutput = squirrelForEach ( actor [ "ColorBlock" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
 i . filltile (  )  ; 
 } 
     }  }  
  } 
  
  
  } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
EvilBlock =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
slideshape = Rec ( x , y - 1 , 12 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( gvPlayer . vspeed < 0 )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
playSound ( sndBump , 0 )  ; 
newActor ( Darknyan , x , y - 16 )  ; 
 } 
  
  
  } 
  
 drawSpriteZ ( 2 , sprBoxItem , getFrames (  )  / 16 , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "WoodBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
EvilBlockB =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
slideshape = Rec ( x , y - 1 , 12 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( gvPlayer . vspeed < 0 )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 gvPlayer . vspeed = 0 ; 
tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
playSound ( sndBump , 0 )  ; 
newActor ( MuffinBomb , x , y - 16 )  ; 
 } 
  
  
  } 
  
 drawSpriteZ ( 2 , sprBoxItem , getFrames (  )  / 16 , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "WoodBlock" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
BreakBlock =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . tile = 0 ; 
 returnVal . solidtile = 0 ; 
 returnVal . layer = 0 ; 
 returnVal . solidlayer = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
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
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
LockBlock =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . color = 0 ; 
 returnVal . oldsolid = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
 if ( _arr == null ) color = 0 ; 
 
  else color = _arr . tointeger (  )  ; 
 
 oldsolid = tileGetSolid ( x , y )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) { drawSpriteZ ( 2 , sprLockBlock , color , x - camx , y - camy )  ; 
 if ( gvPlayer )  if ( distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 32 )  { 
  switch ( color )  {  case 0 :  if ( gvKeyCopper )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
stopSound ( sndBump )  ; 
playSound ( sndBump , 0 )  ; 
 } 
  
  break ;  case 1 :  if ( gvKeySilver )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
stopSound ( sndBump )  ; 
playSound ( sndBump , 0 )  ; 
 } 
  
  break ;  case 2 :  if ( gvKeyGold )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
stopSound ( sndBump )  ; 
playSound ( sndBump , 0 )  ; 
 } 
  
  break ;  case 3 :  if ( gvKeyMythril )  { 
 tileSetSolid ( x , y , oldsolid )  ; 
deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
stopSound ( sndBump )  ; 
playSound ( sndBump , 0 )  ; 
 } 
  
  break ;  }  } 
  
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
BossDoor =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . dy = 0 ; 
 returnVal . moving = false ; 
 
 with ( returnVal ) { 
  returnVal . run = function (  ) {  if ( gvWarning == 0 && dy == 0 )  { 
 moving = true ; 
tileSetSolid ( x , y , 1 )  ; 
tileSetSolid ( x , y - 16 , 1 )  ; 
tileSetSolid ( x , y - 32 , 1 )  ; 
tileSetSolid ( x , y - 48 , 1 )  ; 
 } 
  
  if ( moving && dy < 32 ) dy ++  ; 
 
 drawSpriteZ ( 4 , sprBossDoor , 0 , x - camx , y - camy - dy + 16 )  ; 
drawSpriteZ ( 4 , sprBossDoor , 0 , x - camx , y - camy - 80 + dy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "BossDoor" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



});