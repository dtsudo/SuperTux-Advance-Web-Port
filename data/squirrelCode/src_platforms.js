if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/platforms.nut'] = function () { 


Spring =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . dir = 0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . fspeed = 0.0 ; 
 returnVal . power = 10.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 4 , 0 )  ; 
dir = _arr ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 fspeed = 0.2 ; 
 switch ( dir )  {  case 0 : gvPlayer . vspeed =  - power ; 
 break ;  case 1 : gvPlayer . vspeed = power ; 
 break ;  case 2 : gvPlayer . hspeed =  ( gvPlayer . hspeed > power )  ? gvPlayer . hspeed : power ; 
 break ;  case 3 : gvPlayer . hspeed =  ( gvPlayer . hspeed <  - power )  ? gvPlayer . hspeed :  - power ; 
 break ;  }  if ( frame == 0.0 ) popSound ( sndSpring , 0 )  ; 
 
  } 
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( hitTest ( shape , gvPlayer2 . shape )  )  { 
 fspeed = 0.2 ; 
 switch ( dir )  {  case 0 : gvPlayer2 . vspeed =  - power ; 
 break ;  case 1 : gvPlayer2 . vspeed = power ; 
 break ;  case 2 : gvPlayer2 . hspeed =  ( gvPlayer2 . hspeed > power )  ? gvPlayer2 . hspeed : power ; 
 break ;  case 3 : gvPlayer2 . hspeed =  ( gvPlayer2 . hspeed <  - power )  ? gvPlayer2 . hspeed :  - power ; 
 break ;  }  if ( frame == 0.0 ) popSound ( sndSpring , 0 )  ; 
 
  } 
  
  } 
  
 frame += fspeed ; 
 if ( floor ( frame )  > 3 )  { 
 frame = 0.0 ; 
fspeed = 0.0 ; 
 } 
  
  } ;  returnVal . draw = function (  ) {  switch ( dir )  {  case 0 : drawSprite ( sprSpring , round ( frame )  , x - camx , y - camy )  ; 
 break ;  case 1 : drawSpriteEx ( sprSpring , round ( frame )  , x - camx , y - camy , 180 , 0 , 1 , 1 , 1 )  ; 
 break ;  case 2 : drawSpriteEx ( sprSpring , round ( frame )  , x - camx , y - camy , 90 , 0 , 1 , 1 , 1 )  ; 
 break ;  case 3 : drawSpriteEx ( sprSpring , round ( frame )  , x - camx , y - camy , 270 , 0 , 1 , 1 , 1 )  ; 
 break ;  }  if ( debug ) shape . draw (  )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Spring" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . dir = 0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . fspeed = 0.0 ; 
 squirrelClassFunction . power = 10.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
SpringD =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . dir = 0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . fspeed = 0.0 ; 
 returnVal . power = 10.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
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
 break ;  }  if ( frame == 0.0 ) popSound ( sndSpring , 0 )  ; 
 
  } 
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( hitTest ( shape , gvPlayer2 . shape )  )  { 
 fspeed = 0.2 ; 
 switch ( dir )  {  case 0 : gvPlayer2 . vspeed =  - power * 0.8 ; 
gvPlayer2 . hspeed = power * 0.6 ; 
 break ;  case 1 : gvPlayer2 . vspeed = power * 0.7 ; 
gvPlayer2 . hspeed = power * 0.7 ; 
 break ;  case 2 : gvPlayer2 . hspeed =  - power * 0.7 ; 
gvPlayer2 . vspeed = power * 0.7 ; 
 break ;  case 3 : gvPlayer2 . hspeed =  - power * 0.6 ; 
gvPlayer2 . vspeed =  - power * 0.8 ; 
 break ;  }  if ( frame == 0.0 ) popSound ( sndSpring , 0 )  ; 
 
  } 
  
  } 
  
 frame += fspeed ; 
 if ( floor ( frame )  > 3 )  { 
 frame = 0.0 ; 
fspeed = 0.0 ; 
 } 
  
  } ;  returnVal . draw = function (  ) {  switch ( dir )  {  case 0 : drawSprite ( sprSpringD , round ( frame )  , x - camx , y - camy )  ; 
 break ;  case 1 : drawSpriteEx ( sprSpringD , round ( frame )  , x - camx , y - camy , 90 , 0 , 1 , 1 , 1 )  ; 
 break ;  case 2 : drawSpriteEx ( sprSpringD , round ( frame )  , x - camx , y - camy , 180 , 0 , 1 , 1 , 1 )  ; 
 break ;  case 3 : drawSpriteEx ( sprSpringD , round ( frame )  , x - camx , y - camy , 270 , 0 , 1 , 1 , 1 )  ; 
 break ;  }  if ( debug ) shape . draw (  )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Spring" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . dir = 0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . fspeed = 0.0 ; 
 squirrelClassFunction . power = 10.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
LevelSinker =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . rate = 0.01 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr != null ) rate = _arr ; 
 
  } ;  returnVal . run = function (  ) {  if ( gvMap . h > 240 ) gvMap . h -= rate ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . rate = 0.01 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
sinkLevel =  function ( rate ) { newActor ( LevelSinker , 0 , 0 , rate )  ; 
 }  ; 
FireChain =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . r = 0 ; 
 returnVal . a = 0.0 ; 
 returnVal . s = 0.0 ; 
 returnVal . hb = null ; 
 returnVal . chainpos = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
r = _arr [ 0 ]  . tointeger (  )  ; 
a = _arr [ 1 ]  . tofloat (  )  ; 
s = _arr [ 2 ]  . tofloat (  )  ; 
hb =  ( Cir ( x , y , 6 )  )  ; 
chainpos =  [  ]  ; 
shape = Rec ( x , y , r * 8 , r * 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) { chainpos . clear (  )  ; 
shape . setPos ( x , y )  ; 
a += s ; 
 if (  ! isOnScreen (  )  )  return ; 
  
  if ( r > 0 )  for (  var i = 0 ;
 i < r ; i ++  )  { 
 hb . setPos ( x +  ( i * 8 )  * cos (  ( 2 * pi )  +  ( a / 60.0 - i * s / 45.0 )  )  , y +  ( i * 8 )  * sin (  ( 2 * pi )  +  ( a / 60.0 - i * s / 45.0 )  )  )  ; 
chainpos . push (  [ hb . x , hb . y ]  )  ; 
 if (  ( i - 1 )  % 2 == 0 )  { 
  if ( gvPlayer )  if ( hitTest ( hb , gvPlayer . shape )  )  { 
 gvPlayer . hurt = 2 * gvPlayer . damageMult . fire ; 
 } 
  
  
  if ( gvPlayer2 )  if ( hitTest ( hb , gvPlayer2 . shape )  )  { 
 gvPlayer2 . hurt = 2 * gvPlayer2 . damageMult . fire ; 
 } 
  
  
  } 
  
  if ( randInt ( 60 )  == 0 )  { 
  var c = actor [ newActor ( FlameTiny , hb . x , hb . y )  ]  ;
 c . vspeed =  - 0.25 ; 
c . hspeed = randFloat ( 0.5 )  - 0.25 ; 
 } 
  
  } 
  
  } ;  returnVal . draw = function (  ) {  if ( chainpos . len (  )  > 0 )  for (  var i = 0 ;
 i < r ; i ++  )  { 
 drawSprite ( sprFireball , getFrames (  )  / 4 , chainpos [ i ]  [ 0 ]  - camx , chainpos [ i ]  [ 1 ]  - camy )  ; 
drawLight ( sprLightFire , 0 , chainpos [ i ]  [ 0 ]  - camx , chainpos [ i ]  [ 1 ]  - camy , 0 , 0 , 1.0 / 8.0 , 1.0 / 8.0 )  ; 
 } 
  
  if ( debug ) drawText ( font , x - camx , y - camy , wrap ( a , 0 , 360 )  . tostring (  )  )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . r = 0 ; 
 squirrelClassFunction . a = 0.0 ; 
 squirrelClassFunction . s = 0.0 ; 
 squirrelClassFunction . hb = null ; 
 squirrelClassFunction . chainpos = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
PathCarrier =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PathCrawler ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . obj = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
 var newarr =  [  ]  ;
  if ( _arr . len (  )  > 3 )  for (  var i = 3 ;
 i < _arr . len (  )  ; i ++  ) newarr . push ( _arr [ i ]  )  ; 
 
  if ( getroottable (  )  . rawin ( _arr [ 2 ]  )  ) obj = newActor ( getroottable (  )  [ _arr [ 2 ]  ]  , x , y , newarr )  ; 
 
  } ;  returnVal . run = function (  ) {  var dorun = true ;
  if ( actor [ obj ]  . rawin ( "frozen" )  )  if ( actor [ obj ]  . frozen > 0 ) dorun = false ; 
 
  
  if ( dorun )  baseMethods . run  (  )  ; 
 
  if ( checkActor ( obj )  )  { 
 actor [ obj ]  . x = x ; 
actor [ obj ]  . y = y ; 
 } 
  
  else deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . obj = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PathCrawler;  return squirrelClassFunction; })()) ; 
RingCarrier =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . r = 0.0 ; 
 returnVal . c = 0.0 ; 
 returnVal . s = 0.0 ; 
 returnVal . a = null ; 
 returnVal . l = null ; 
 returnVal . sa = 0.0 ; 
 returnVal . g = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  x = _x ; 
y = _y ; 
 (baseConstructor.bind(this))  ( _x , _y )  ; 
 if (  ( (_arr[ ( 0 ) ] !== undefined) )  ) r = _arr [ 0 ]  . tofloat (  )  ; 
 
  if (  ( (_arr[ ( 1 ) ] !== undefined) )  ) c = _arr [ 1 ]  . tointeger (  )  ; 
 
  if (  ( (_arr[ ( 2 ) ] !== undefined) )  ) s = _arr [ 2 ]  . tofloat (  )  ; 
 
  if (  ( (_arr[ ( 4 ) ] !== undefined) )  ) sa = _arr [ 4 ]  . tofloat (  )  ; 
 
  if (  ( (_arr[ ( 5 ) ] !== undefined) )  ) g = _arr [ 5 ]  . tofloat (  )  ; 
 
  var newarr =  [  ]  ;
 a =  [  ]  ; 
 if ( _arr . len (  )  > 4 )  for (  var i = 4 ;
 i < _arr . len (  )  ; i ++  ) newarr . push ( _arr [ i ]  )  ; 
 
  if ( newarr . len (  )  == 1 ) newarr = newarr [ 0 ]  ; 
 
 l =  [  ]  ; 
 if ( c == 0 ) deleteActor ( id )  ; 
 
  else  for (  var i = 0 ;
 i < c ; i ++  )  { 
 l . push ( newActor ( getroottable (  )  [ _arr [ 3 ]  ]  , x , y , newarr )  )  ; 
a . push (  ( 360.0 / c )  * i / 180.0 * pi )  ; 
a [ i ]  += sa ; 
 } 
  
  } ;  returnVal . run = function (  ) {  var cl = c ;
  for (  var i = 0 ;
 i < c ; i ++  )  { 
  if ( checkActor ( l [ i ]  )  )  { 
  var ins = actor [ l [ i ]  ]  ;
 ins . x = x + r * cos (  ( 2 * pi / c )  + a [ i ]  )  ; 
ins . y = y + r * sin (  ( 2 * pi / c )  + a [ i ]  )  ; 
 if ( ins . rawin ( "vspeed" )  ) ins . vspeed = 0 ; 
 
  if ( ins . rawin ( "hspeed" )  ) ins . hspeed = 0 ; 
 
  var canrotate = true ;
  if ( ins . rawin ( "frozen" )  )  if ( actor [ l [ i ]  ]  . frozen > 0 ) canrotate = false ; 
 
  
  if ( canrotate ) a [ i ]  += s / 60.0 ; 
 
  } 
  
  else cl --  ; 
 
  } 
  if ( cl == 0 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . r = 0.0 ; 
 squirrelClassFunction . c = 0.0 ; 
 squirrelClassFunction . s = 0.0 ; 
 squirrelClassFunction . a = null ; 
 squirrelClassFunction . l = null ; 
 squirrelClassFunction . sa = 0.0 ; 
 squirrelClassFunction . g = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
MoPlat =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PathCrawler ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . w = 1 ; 
 returnVal . sprite = sprPlatformWood ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
w = max ( 1 , _arr [ 2 ]  . tointeger (  )  )  ; 
 if ( _arr . len (  )  > 3 && getroottable (  )  . rawin ( _arr [ 3 ]  )  ) sprite = getroottable (  )  [ _arr [ 3 ]  ]  ; 
 
  if ( _arr . len (  )  > 3 &&  ( _arr [ 3 ]  == 0 || _arr [ 3 ]  == "0" )  ) sprite = 0 ; 
 
 shape = Rec ( x , y , w * 8 , 4 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
shape . setPos ( x , y )  ; 
 } ;  returnVal . draw = function (  ) {  if ( w == 1 ) drawSprite ( sprite , 0 , x - camx , y - camy )  ; 
 
  else  for (  var i = 0 ;
 i < w ; i ++  )  { 
  if ( i == 0 ) drawSpriteZ ( 6 , sprite , 1 , x -  ( w * 8 )  +  ( i * 16 )  - camx + 8 , y - camy )  ; 
 
  else  if ( i == w - 1 ) drawSpriteZ ( 6 , sprite , 3 , x -  ( w * 8 )  +  ( i * 16 )  - camx + 8 , y - camy )  ; 
 
  else drawSpriteZ ( 6 , sprite , 2 , x -  ( w * 8 )  +  ( i * 16 )  - camx + 8 , y - camy )  ; 
 
  
  } 
  
  if ( debug )  { 
 setDrawColor ( 0x008080ff )  ; 
shape . draw (  )  ; 
 } 
  
  } ;  returnVal . destructor = function (  ) {  } ;  returnVal . _typeof = function (  ) {  return "MoPlat" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . w = 1 ; 
 squirrelClassFunction . sprite = sprPlatformWood ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PathCrawler;  return squirrelClassFunction; })()) ; 
Portal =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shapeA = 0 ; 
 returnVal . shapeB = 0 ; 
 returnVal . canWarp = true ; 
 returnVal . sprite = sprPortalGray ; 
 returnVal . angleA = 0 ; 
 returnVal . angleB = 0 ; 
 returnVal . color = 0x808080ff ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shapeA = Cir ( x , y , 12 )  ; 
shapeB = Cir ( x , y , 12 )  ; 
 if ( _arr [ 0 ]  . len (  )  > 0 )  { 
 shapeA . setPos ( _arr [ 0 ]  [ 0 ]  [ 0 ]  , _arr [ 0 ]  [ 0 ]  [ 1 ]  )  ; 
shapeB . setPos ( _arr [ 0 ]  [ _arr [ 0 ]  . len (  )  - 1 ]  [ 0 ]  , _arr [ 0 ]  [ _arr [ 0 ]  . len (  )  - 1 ]  [ 1 ]  )  ; 
 } 
  
  switch ( _arr [ 1 ]  )  {  case "blue" : sprite = sprPortalBlue ; 
color = 0x0000f8ff ; 
 break ;  case "red" : sprite = sprPortalRed ; 
color = 0xf80000ff ; 
 break ;  case "green" : sprite = sprPortalGreen ; 
color = 0x008000ff ; 
 break ;  case "yellow" : sprite = sprPortalYellow ; 
color = 0xf8f800ff ; 
 break ;  case "punkle" : sprite = sprPortalPunkle ; 
color = 0xf800f8ff ; 
 break ;  } angleA = _arr [ 2 ]  . tofloat (  )  ; 
angleB = _arr [ 3 ]  . tofloat (  )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( canWarp )  { 
  if ( hitTest ( shapeA , gvPlayer . shape )  )  { 
  var theta = pointAngle ( 0 , 0 , gvPlayer . hspeed , gvPlayer . vspeed )  ;
  var mag = distance2 ( 0 , 0 , gvPlayer . hspeed , gvPlayer . vspeed )  ;
 theta +=  ( angleB - angleA )  + 180 ; 
gvPlayer . hspeed = lendirX ( mag , theta )  * 1.5 ; 
gvPlayer . vspeed = lendirY ( mag , theta )  * 1.5 ; 
playerTeleport ( myTarget , shapeB . x + lendirX ( gvPlayer . shape . w , angleB )  , shapeB . y + lendirY ( gvPlayer . shape . h , angleB )  - gvPlayer . shape . oy )  ; 
canWarp = false ; 
 } 
  
  if ( hitTest ( shapeB , gvPlayer . shape )  )  { 
  var theta = pointAngle ( 0 , 0 , gvPlayer . hspeed , gvPlayer . vspeed )  ;
  var mag = distance2 ( 0 , 0 , gvPlayer . hspeed , gvPlayer . vspeed )  ;
 theta +=  ( angleA - angleB )  + 180 ; 
gvPlayer . hspeed = lendirX ( mag , theta )  * 1.5 ; 
gvPlayer . vspeed = lendirY ( mag , theta )  * 1.5 ; 
playerTeleport ( myTarget , shapeA . x + lendirX ( gvPlayer . shape . w , angleA )  , shapeA . y + lendirY ( gvPlayer . shape . h , angleA )  - gvPlayer . shape . oy )  ; 
canWarp = false ; 
 } 
  
  } 
  
  else  if (  ! hitTest ( shapeA , gvPlayer . shape )  &&  ! hitTest ( shapeB , gvPlayer . shape )  ) canWarp = true ; 
 
  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprite , getFrames (  )  / 4 , shapeA . x - camx , shapeA . y - camy , angleA , 0 , 1 , 1 , 1 )  ; 
drawSpriteEx ( sprite , getFrames (  )  / 4 , shapeB . x - camx , shapeB . y - camy , angleB , 0 , 1 , 1 , 1 )  ; 
 if ( debug )  { 
 setDrawColor ( color )  ; 
drawLine ( shapeA . x - camx , shapeA . y - camy , shapeB . x - camx , shapeB . y - camy )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shapeA = 0 ; 
 squirrelClassFunction . shapeB = 0 ; 
 squirrelClassFunction . canWarp = true ; 
 squirrelClassFunction . sprite = sprPortalGray ; 
 squirrelClassFunction . angleA = 0 ; 
 squirrelClassFunction . angleB = 0 ; 
 squirrelClassFunction . color = 0x808080ff ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
BoostRing =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = null ; 
 returnVal . angle = 0 ; 
 returnVal . hboost = 0 ; 
 returnVal . vboost = 0 ; 
 returnVal . touchTimer1 = 0 ; 
 returnVal . touchTimer2 = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
 if (  squirrelTypeOf ( _arr )  == "string" ) _arr = split ( _arr , "," )  ; 
 
  if (  squirrelTypeOf ( _arr )  == "array" )  { 
 angle = int ( _arr [ 0 ]  )  ; 
hboost = lendirX ( float ( _arr [ 1 ]  )  , float ( _arr [ 0 ]  )  )  ; 
vboost = lendirY ( float ( _arr [ 1 ]  )  , float ( _arr [ 0 ]  )  )  ; 
 } 
  
 shape = Cir ( x , y , 4 )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  && touchTimer1 == 0 )  { 
 gvPlayer . x = x ; 
gvPlayer . y = y ; 
gvPlayer . hspeed = hboost ; 
gvPlayer . vspeed = vboost ; 
touchTimer1 = 30 ; 
popSound ( sndWoosh )  ; 
 } 
  
  if ( gvPlayer2 && hitTest ( shape , gvPlayer2 . shape )  && touchTimer2 == 0 )  { 
 gvPlayer2 . x = x ; 
gvPlayer2 . y = y ; 
gvPlayer2 . hspeed = hboost ; 
gvPlayer2 . vspeed = vboost ; 
touchTimer2 = 30 ; 
popSound ( sndWoosh )  ; 
 } 
  
  if ( touchTimer1 > 0 ) touchTimer1 --  ; 
 
  if ( touchTimer2 > 0 ) touchTimer2 --  ; 
 
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 6 , sprBoostRing , 1 , x - camx + round ( lendirX ( 6 , angle )  )  , y - camy + round ( lendirY ( 6 , angle )  )  , angle )  ; 
drawSpriteZ ( 0 , sprBoostRing , 0 , x - camx - round ( lendirX ( 6 , angle )  )  , y - camy - round ( lendirY ( 6 , angle )  )  , angle )  ; 
 if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawCircle ( x - camx , y - camy , 4 , false )  ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "BoostRing" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = null ; 
 squirrelClassFunction . angle = 0 ; 
 squirrelClassFunction . hboost = 0 ; 
 squirrelClassFunction . vboost = 0 ; 
 squirrelClassFunction . touchTimer1 = 0 ; 
 squirrelClassFunction . touchTimer2 = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 



}; 
