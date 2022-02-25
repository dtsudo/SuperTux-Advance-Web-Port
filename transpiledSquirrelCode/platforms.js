if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


PlatformV =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . r = 0 ; 
 returnVal . w = 0 ; 
 returnVal . ystart = 0 ; 
 returnVal . mode = 0 ; 
 returnVal . timer = 0 ; 
 returnVal . mapshape = 0 ; 
 returnVal . mapshapeid = 0 ; 
 returnVal . init = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
ystart = _y ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( init == 1 )  { 
 init = 0 ; 
shape = Rec ( x , y , w , 8 , 0 )  ; 
mapshape = Rec ( x , y , w , 8 , 0 )  ; 
mapshapeid = mapNewSolid ( mapshape )  ; 
 } 
  
  if ( w / 8 <= 1 ) drawSprite ( tsWoodPlat , 0 , x - 8 - camx , y - 8 - camy )  ; 
 
  else  for (  var i = 1 ;
 i <= w / 8 ; i ++  )  { 
  if ( i == 1 ) drawSprite ( tsWoodPlat , 1 ,  ( x - w )  +  (  ( i - 1 )  * 16 )  - camx , y - 8 - camy )  ; 
 
  else  if ( i == w / 8 ) drawSprite ( tsWoodPlat , 3 ,  ( x - w )  +  (  ( i - 1 )  * 16 )  - camx , y - 8 - camy )  ; 
 
  else drawSprite ( tsWoodPlat , 2 ,  ( x - w )  +  (  ( i - 1 )  * 16 )  - camx , y - 8 - camy )  ; 
 
  
  } 
  
 mapshape . setPos ( x , y )  ; 
 if ( mode == 0 )  { 
 shape . setPos ( x , y - 1 )  ; 
 if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  ) gvPlayer . y --  ; 
 
  
 mapshape . setPos ( x , y )  ; 
 if ( y > ystart ) y --  ; 
 
  else mode = 1 ; 
 
  } 
  
  else  if ( mode == 1 )  { 
  if ( timer < 60 ) timer ++  ; 
 
  else  { 
 timer = 0 ; 
mode = 2 ; 
 } 
  
  } 
  
  else  if ( mode == 2 )  { 
  if ( y < ystart + r ) y ++  ; 
 
  else mode = 3 ; 
 
 mapshape . setPos ( x , y )  ; 
shape . setPos ( x , y - 1 )  ; 
 if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  ) gvPlayer . y ++  ; 
 
  
 shape . setPos ( x , y )  ; 
 if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  ) gvPlayer . y --  ; 
 
  
 shape . setPos ( x , y + 2 )  ; 
 if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  ) gvPlayer . y += 2 ; 
 
  
  } 
  
  else  { 
  if ( timer < 60 ) timer ++  ; 
 
  else  { 
 timer = 0 ; 
mode = 0 ; 
 } 
  
  } 
  
  
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Spring =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . dir = 0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . fspeed = 0.0 ; 
 returnVal . power = 10.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 4 , 0 )  ; 
dir = _arr ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 fspeed = 0.2 ; 
 switch ( dir )  {  case 0 : gvPlayer . vspeed =  - power ; 
 break ;  case 1 : gvPlayer . vspeed = power ; 
 break ;  case 2 : gvPlayer . hspeed =  ( gvPlayer . hspeed > 4 )  ? gvPlayer . hspeed : power ; 
 break ;  case 3 : gvPlayer . hspeed =  ( gvPlayer . hspeed <  - 4 )  ? gvPlayer . hspeed :  - power ; 
 break ;  }  if ( frame == 0.0 ) playSound ( sndSpring , 0 )  ; 
 
  } 
  
  } 
  
 frame += fspeed ; 
 if ( floor ( frame )  > 3 )  { 
 frame = 0.0 ; 
fspeed = 0.0 ; 
 } 
  
  switch ( dir )  {  case 0 : drawSprite ( sprSpring , round ( frame )  , x - camx , y - camy )  ; 
 break ;  case 1 : drawSpriteEx ( sprSpring , round ( frame )  , x - camx , y - camy , 180 , 0 , 1 , 1 , 1 )  ; 
 break ;  case 2 : drawSpriteEx ( sprSpring , round ( frame )  , x - camx , y - camy , 90 , 0 , 1 , 1 , 1 )  ; 
 break ;  case 3 : drawSpriteEx ( sprSpring , round ( frame )  , x - camx , y - camy , 270 , 0 , 1 , 1 , 1 )  ; 
 break ;  }  if ( debug ) shape . draw (  )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Spring" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
SpringD =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . dir = 0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . fspeed = 0.0 ; 
 returnVal . power = 10.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 4 , 0 )  ; 
dir = _arr ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 fspeed = 0.2 ; 
 switch ( dir )  {  case 0 : gvPlayer . vspeed =  - power * 0.8 ; 
gvPlayer . hspeed = power * 0.6 ; 
 break ;  case 1 : gvPlayer . vspeed = power * 0.7 ; 
gvPlayer . hspeed = power * 0.7 ; 
 break ;  case 2 : gvPlayer . hspeed =  - power * 0.7 ; 
gvPlayer . vspeed = power * 0.7 ; 
 break ;  case 3 : gvPlayer . hspeed =  - power * 0.6 ; 
gvPlayer . vspeed =  - power * 0.8 ; 
 break ;  }  if ( frame == 0.0 ) playSound ( sndSpring , 0 )  ; 
 
  } 
  
  } 
  
 frame += fspeed ; 
 if ( floor ( frame )  > 3 )  { 
 frame = 0.0 ; 
fspeed = 0.0 ; 
 } 
  
  switch ( dir )  {  case 0 : drawSprite ( sprSpringD , round ( frame )  , x - camx , y - camy )  ; 
 break ;  case 1 : drawSpriteEx ( sprSpringD , round ( frame )  , x - camx , y - camy , 90 , 0 , 1 , 1 , 1 )  ; 
 break ;  case 2 : drawSpriteEx ( sprSpringD , round ( frame )  , x - camx , y - camy , 180 , 0 , 1 , 1 , 1 )  ; 
 break ;  case 3 : drawSpriteEx ( sprSpringD , round ( frame )  , x - camx , y - camy , 270 , 0 , 1 , 1 , 1 )  ; 
 break ;  }  if ( debug ) shape . draw (  )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Spring" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
LevelSinker =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . rate = 0.01 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 if ( _arr != null ) rate = _arr ; 
 
  } ;  returnVal . run = function (  ) {  if ( gvMap . h > 240 ) gvMap . h -= rate ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
sinkLevel =  function ( rate ) { newActor ( LevelSinker , 0 , 0 , rate )  ; 
 }  ; 
FireChain =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . r = 0 ; 
 returnVal . a = 0.0 ; 
 returnVal . s = 0.0 ; 
 returnVal . hb = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
r = _arr [ 0 ]  . tointeger (  )  ; 
a = _arr [ 1 ]  . tofloat (  )  ; 
s = _arr [ 2 ]  . tofloat (  )  ; 
hb =  ( Cir ( x , y , 6 )  )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  if ( distance2 ( x , y , gvPlayer . x , gvPlayer . y )  > screenW (  )  * 0.8 )  return ; 
  
  
 a += s ; 
 if ( r > 0 )  for (  var i = 0 ;
 i < r ; i ++  )  { 
 hb . setPos ( x +  ( i * 8 )  * cos (  ( 2 * pi )  +  ( a / 60.0 - i * s / 45.0 )  )  , y +  ( i * 8 )  * sin (  ( 2 * pi )  +  ( a / 60.0 - i * s / 45.0 )  )  )  ; 
drawSprite ( sprFireball , getFrames (  )  / 4 , hb . x - camx , hb . y - camy )  ; 
drawLightEx ( sprLightFire , 0 , hb . x - camx , hb . y - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 if (  ( i - 1 )  % 2 == 0 )  { 
  if ( gvPlayer )  if ( hitTest ( hb , gvPlayer . shape )  )  { 
 gvPlayer . hurt = 1 ; 
 } 
  
  
  } 
  
  if ( randInt ( 60 )  == 0 )  { 
  var c = actor [ newActor ( FlameTiny , hb . x , hb . y )  ]  ;
 c . vspeed =  - 0.25 ; 
c . hspeed = randFloat ( 0.5 )  - 0.25 ; 
 } 
  
  } 
  
  if ( debug ) drawText ( font , x - camx , y - camy , wrap ( a , 0 , 360 )  . tostring (  )  )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
PathCarrier =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PathCrawler ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . obj = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y , _arr )  ; 
 var newarr =  [  ]  ;
  if ( _arr . len (  )  > 3 )  for (  var i = 3 ;
 i < _arr . len (  )  ; i ++  ) newarr . push ( _arr [ i ]  )  ; 
 
  if ( getroottable (  )  . rawin ( _arr [ 2 ]  )  ) obj = newActor ( getroottable (  )  [ _arr [ 2 ]  ]  , x , y , newarr )  ; 
 
  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( checkActor ( obj )  )  { 
 actor [ obj ]  . x = x ; 
actor [ obj ]  . y = y ; 
 } 
  
  else deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
RingCarrier =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . r = 0.0 ; 
 returnVal . c = 0.0 ; 
 returnVal . s = 0.0 ; 
 returnVal . a = 0.0 ; 
 returnVal . l = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  x = _x ; 
y = _y ; 
 baseConstructor  ( _x , _y )  ; 
r = _arr [ 0 ]  . tofloat (  )  ; 
c = _arr [ 1 ]  . tointeger (  )  ; 
s = _arr [ 2 ]  . tofloat (  )  ; 
 var newarr =  [  ]  ;
  if ( _arr . len (  )  > 4 )  for (  var i = 4 ;
 i < _arr . len (  )  ; i ++  ) newarr . push ( _arr [ i ]  )  ; 
 
  if ( newarr . len (  )  == 1 ) newarr = newarr [ 0 ]  ; 
 
 l =  [  ]  ; 
 for (  var i = 0 ;
 i < c ; i ++  )  { 
 l . push ( newActor ( getroottable (  )  [ _arr [ 3 ]  ]  , x , y , newarr )  )  ; 
 } 
  } ;  returnVal . run = function (  ) {  var cl = c ;
 a += s / 60.0 ; 
 for (  var i = 0 ;
 i < c ; i ++  )  { 
  if ( checkActor ( l [ i ]  )  )  { 
 actor [ l [ i ]  ]  . x = x + r * cos (  ( i * 2 * pi / c )  + a )  ; 
actor [ l [ i ]  ]  . y = y + r * sin (  ( i * 2 * pi / c )  + a )  ; 
 } 
  
  else cl --  ; 
 
  } 
  if ( cl == 0 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



});