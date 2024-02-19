if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/overworld.nut'] = function () { 


gvLevel = "" ; 
OverPlayer =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . canmove = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( game . owx == 0 && game . owy == 0 )  { 
 x = _x ; 
y = _y ; 
 } 
  
  else  { 
 x = game . owx ; 
y = game . owy ; 
 } 
  
 shape = Rec ( x , y , 1 , 1 , 0 )  ; 
gvPlayer = this ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
shape . setPos ( x , y )  ; 
game . owx = x ; 
game . owy = y ; 
 if (  ! getcon ( "left" , "hold" , false , 0 )  &&  ! getcon ( "right" , "hold" , false , 0 )  &&  ! getcon ( "up" , "hold" , false , 0 )  &&  ! getcon ( "down" , "hold" , false , 0 )  ) canmove = true ; 
 
  var level = "" ;
  var onstage = false ;
  var noclear = false ;
  if ( actor . rawin ( "StageIcon" )  )  { 
  {     var foreachOutput1 = squirrelForEach( actor [ "StageIcon" ]  );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  { 
  if ( hitTest ( shape , i . shape )  )  { 
 level = i . levelName ; 
onstage = true ; 
 break ;  } 
  
  } 
     }  }  } 
  
  if ( actor . rawin ( "TownIcon" )  )  { 
  {     var foreachOutput2 = squirrelForEach( actor [ "TownIcon" ]  );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; i = foreachOutput2.getValue();  { 
  if ( hitTest ( shape , i . shape )  )  { 
 level = i . levelName ; 
onstage = true ; 
noclear = true ; 
 break ;  } 
  
  } 
     }  }  } 
  
  if ( actor . rawin ( "WorldIcon" )  )  { 
  {     var foreachOutput3 = squirrelForEach( actor [ "WorldIcon" ]  );     while(true)     {        foreachOutput3.next();        if (foreachOutput3.isDone()) break; i = foreachOutput3.getValue();  { 
  if ( hitTest ( shape , i . shape )  )  { 
 level = i . world ; 
onstage = true ; 
noclear = true ; 
 break ;  } 
  
  } 
     }  }  } 
  
  if ( onstage )  { 
  if (  ( x - 8 )  % 16 == 0 ) hspeed = 0 ; 
 
  if (  ( y - 8 )  % 16 == 0 ) vspeed = 0 ; 
 
  } 
  
  if (  ( x - 8 )  % 16 == 0 &&  ( y - 8 )  % 16 == 0 )  { 
  var opendirs = 0 ;
  var nextdir =  - 1 ;
  if (  ( hspeed != 0 || vspeed != 0 )  &&  ! debug )  { 
  if ( game . owd == 0 && nextdir ==  - 1 )  { 
  if (  ! placeFree ( x - 16 , y )  )  { 
 opendirs ++  ; 
nextdir = 2 ; 
 } 
  
  if (  ! placeFree ( x , y - 16 )  )  { 
 opendirs ++  ; 
nextdir = 1 ; 
 } 
  
  if (  ! placeFree ( x , y + 16 )  )  { 
 opendirs ++  ; 
nextdir = 3 ; 
 } 
  
  } 
  
  if ( game . owd == 2 && nextdir ==  - 1 )  { 
  if (  ! placeFree ( x + 16 , y )  )  { 
 opendirs ++  ; 
nextdir = 0 ; 
 } 
  
  if (  ! placeFree ( x , y - 16 )  )  { 
 opendirs ++  ; 
nextdir = 1 ; 
 } 
  
  if (  ! placeFree ( x , y + 16 )  )  { 
 opendirs ++  ; 
nextdir = 3 ; 
 } 
  
  } 
  
  if ( game . owd == 3 && nextdir ==  - 1 )  { 
  if (  ! placeFree ( x + 16 , y )  )  { 
 opendirs ++  ; 
nextdir = 0 ; 
 } 
  
  if (  ! placeFree ( x , y - 16 )  )  { 
 opendirs ++  ; 
nextdir = 1 ; 
 } 
  
  if (  ! placeFree ( x - 16 , y )  )  { 
 opendirs ++  ; 
nextdir = 2 ; 
 } 
  
  } 
  
  if ( game . owd == 1 && nextdir ==  - 1 )  { 
  if (  ! placeFree ( x + 16 , y )  )  { 
 opendirs ++  ; 
nextdir = 0 ; 
 } 
  
  if (  ! placeFree ( x , y + 16 )  )  { 
 opendirs ++  ; 
nextdir = 3 ; 
 } 
  
  if (  ! placeFree ( x - 16 , y )  )  { 
 opendirs ++  ; 
nextdir = 2 ; 
 } 
  
  } 
  
  } 
  
  if ( level == "" && opendirs == 1 )  { 
  switch ( nextdir )  {  case 0 : vspeed = 0 ; 
hspeed = 2 ; 
game . owd = 2 ; 
 break ;  case 1 : vspeed =  - 2 ; 
hspeed = 0 ; 
game . owd = 3 ; 
 break ;  case 2 : vspeed = 0 ; 
hspeed =  - 2 ; 
game . owd = 0 ; 
 break ;  case 3 : vspeed = 2 ; 
hspeed = 0 ; 
game . owd = 1 ; 
 break ;  }  } 
  
  if ( opendirs != 1 )  { 
 hspeed = 0 ; 
vspeed = 0 ; 
 } 
  
  if ( canmove && getcon ( "right" , "hold" )  &&  ! getcon ( "left" , "hold" )  &&  (  ! placeFree ( x + 16 , y )  || debug )  && hspeed <= 0 && vspeed == 0 )  { 
  if ( level == "" || game . owd == 0 || game . completed . rawin ( level )  || noclear )  { 
 hspeed = 2 ; 
game . owd = 2 ; 
 } 
  
  } 
  
  if ( canmove && getcon ( "up" , "hold" )  &&  ! getcon ( "down" , "hold" )  &&  (  ! placeFree ( x , y - 16 )  || debug )  && hspeed == 0 && vspeed >= 0 )  { 
  if ( level == "" || game . owd == 1 || game . completed . rawin ( level )  || noclear )  { 
 vspeed =  - 2 ; 
game . owd = 3 ; 
 } 
  
  } 
  
  if ( canmove && getcon ( "left" , "hold" )  &&  ! getcon ( "right" , "hold" )  &&  (  ! placeFree ( x - 16 , y )  || debug )  && hspeed >= 0 && vspeed == 0 )  { 
  if ( level == "" || game . owd == 2 || game . completed . rawin ( level )  || noclear )  { 
 hspeed =  - 2 ; 
game . owd = 0 ; 
 } 
  
  } 
  
  if ( canmove && getcon ( "down" , "hold" )  &&  ! getcon ( "up" , "hold" )  &&  (  ! placeFree ( x , y + 16 )  || debug )  && hspeed == 0 && vspeed <= 0 )  { 
  if ( level == "" || game . owd == 3 || game . completed . rawin ( level )  || noclear )  { 
 vspeed = 2 ; 
game . owd = 1 ; 
 } 
  
  } 
  
  } 
  
 x += hspeed ; 
y += vspeed ; 
 if ( hspeed == 0 && vspeed == 0 )  { 
 x -= x % 16 ; 
x += 8 ; 
y -= y % 16 ; 
y += 8 ; 
 } 
  
  if ( hspeed == 0 && vspeed == 0 ) drawSpriteZ ( 2 , getroottable (  )  [ gvCharacters [ game . playerChar ]  [ "over" ]  ]  , 0 , x - camx , y - camy )  ; 
 
  else drawSpriteZ ( 2 , getroottable (  )  [ gvCharacters [ game . playerChar ]  [ "over" ]  ]  , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 
 gvLevel = level ; 
 } ;  returnVal . physics = function (  ) {  } ;  returnVal . _typeof = function (  ) {  return "OverPlayer" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . canmove = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
StageIcon =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . level = "" ; 
 returnVal . visible = true ; 
 returnVal . raceMode = false ; 
 returnVal . levelName = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
level = _arr ; 
levelName = level ; 
 } ;  returnVal . run = function (  ) {  if ( visible &&  ! raceMode )  { 
  if ( game . completed . rawin ( level )  ) drawSprite ( sprLevels , 1 , x - camx , y - camy )  ; 
 
  else drawSprite ( sprLevels , 0 , x - camx , y - camy )  ; 
 
  } 
  
  if ( game . allCoins . rawin ( level )  ) drawSprite ( sprLevels , 2 , x - camx , y - camy )  ; 
 
  if ( game . allEnemies . rawin ( level )  ) drawSprite ( sprLevels , 3 , x - camx , y - camy )  ; 
 
  if ( game . allSecrets . rawin ( level )  ) drawSprite ( sprLevels , 4 , x - camx , y - camy )  ; 
 
  if ( getcon ( "jump" , "press" )  || getcon ( "accept" , "press" )  || getcon ( "shoot" , "press" )  )  { 
  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . hspeed == 0 && gvPlayer . vspeed == 0 )  if ( level != "" )  { 
 game . check = false ; 
gvDoIGT = true ; 
drawWeather = 0 ; 
startPlay ( game . path + level + ".json" )  ; 
 } 
  
  
  
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "StageIcon" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . level = "" ; 
 squirrelClassFunction . visible = true ; 
 squirrelClassFunction . raceMode = false ; 
 squirrelClassFunction . levelName = "" ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
clearAllLevels =  function (  ) {  if (  ! actor . rawin ( "StageIcon" )  )  return ; 
  
  {     var foreachOutput4 = squirrelForEach( actor [ "StageIcon" ]  );     while(true)     {        foreachOutput4.next();        if (foreachOutput4.isDone()) break; i = foreachOutput4.getValue(); game . completed [ i . level ] = true ; 
    }  }  }  ; 
TownIcon =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . level = "" ; 
 returnVal . visible = true ; 
 returnVal . levelName = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
level = _arr ; 
levelName = level ; 
 } ;  returnVal . run = function (  ) {  if ( getcon ( "jump" , "press" )  || getcon ( "accept" , "press" )  || getcon ( "shoot" , "press" )  )  { 
  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . hspeed == 0 && gvPlayer . vspeed == 0 )  if ( level != "" )  { 
 game . check = false ; 
gvDoIGT = false ; 
drawWeather = 0 ; 
startPlay ( game . path + level + ".json" , true , true )  ; 
 } 
  
  
  
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "TownIcon" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . level = "" ; 
 squirrelClassFunction . visible = true ; 
 squirrelClassFunction . levelName = "" ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
WorldIcon =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . level = "" ; 
 returnVal . world = "" ; 
 returnVal . visible = true ; 
 returnVal . px = 0 ; 
 returnVal . py = 0 ; 
 returnVal . levelName = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
level = _arr ; 
levelName = level ; 
 } ;  returnVal . run = function (  ) {  if ( world == "" && level != "" )  { 
  var arr = split ( level , "," )  ;
 world = arr [ 0 ]  ; 
px = arr [ 1 ]  . tointeger (  )  ; 
py = arr [ 2 ]  . tointeger (  )  ; 
 } 
  
  if ( getcon ( "jump" , "press" )  || getcon ( "accept" , "press" )  || getcon ( "shoot" , "press" )  )  { 
  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . hspeed == 0 && gvPlayer . vspeed == 0 )  if ( world != "" )  { 
 game . owx = px ; 
game . owy = py ; 
startOverworld ( game . path + world + ".json" )  ; 
 } 
  
  
  
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "WorldIcon" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . level = "" ; 
 squirrelClassFunction . world = "" ; 
 squirrelClassFunction . visible = true ; 
 squirrelClassFunction . px = 0 ; 
 squirrelClassFunction . py = 0 ; 
 squirrelClassFunction . levelName = "" ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
LockIcon =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . key = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
key = _arr ; 
 } ;  returnVal . run = function (  ) {  if ( game . unblocked . rawin ( key )  )  { 
 tileSetSolid ( x , y , 1 )  ; 
deleteActor ( id )  ; 
 } 
  
  else  { 
 tileSetSolid ( x , y , 0 )  ; 
drawSprite ( sprLevels , 5 , x - camx , y - camy )  ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "LockIcon" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . key = "" ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
startOverworld =  function ( world ) { gvFadeInTime = 255 ; 
setFPS ( 60 )  ; 
gvPlayer = false ; 
gvPlayer2 = false ; 
deleteAllActors (  )  ; 
gvIGT = 0 ; 
autocon =  window.clone(  ( defAutocon ) )  ; 
gfxReset (  )  ; 
gvLightScreen = gvLightScreen1 ; 
gvSplitScreen = false ; 
gvYetFoundItems . clear (  )  ; 
gvFoundItems . clear (  )  ; 
gvAutoCon = false ; 
 if ( gvMap != 0 ) gvMap . del (  )  ; 
 
 gvMap = Tilemap ( world )  ; 
game . world = world ; 
 var actset =  - 1 ;
  var tilef = 0 ;
  for (  var i = 0 ;
 i < gvMap . tileset . len (  )  ; i ++  )  { 
  if ( spriteName ( gvMap . tileset [ i ]  )  == "overactors.png" )  { 
 actset = gvMap . tileset [ i ]  ; 
tilef = gvMap . tilef [ i ]  ; 
 break ;  } 
  
  } 
  if ( actset ==  - 1 )  { 
 print ( "Map does not use actors.png. No actors to load." )  ; 
 return ; 
  } 
  
  var actlayer =  - 1 ;
  {     var foreachOutput5 = squirrelForEach( gvMap . data . layers );     while(true)     {        foreachOutput5.next();        if (foreachOutput5.isDone()) break; i = foreachOutput5.getValue();  { 
  if ( i [ "type" ]  == "objectgroup" && i [ "name" ]  == "actor" )  { 
 actlayer = i ; 
 break ;  } 
  
  } 
     }  }  if ( actlayer ==  - 1 )  { 
 print ( "Map does not have an actor layer. No actors to load." )  ; 
 return ; 
  } 
  
  {     var foreachOutput6 = squirrelForEach( actlayer . objects );     while(true)     {        foreachOutput6.next();        if (foreachOutput6.isDone()) break; i = foreachOutput6.getValue();  { 
  var c ;
  if (  ( (i[ ( "gid" ) ] !== undefined) )  )  { 
  var n = i . gid - tilef ;
  switch ( n )  {  case 0 :  if (  ! gvPlayer ) c = newActor ( OverPlayer , i . x + 8 , i . y - 8 )  ; 
 
 camx = gvPlayer . x - gvScreenW / 2 ; 
camy = gvPlayer . y - gvScreenH / 2 ; 
 break ;  case 1 : c = actor [ newActor ( StageIcon , i . x + 8 , i . y - 8 , i . name )  ]  ; 
c . visible = i . visible ; 
 break ;  case 2 : c = actor [ newActor ( WorldIcon , i . x + 8 , i . y - 8 , i . name )  ]  ; 
 break ;  case 3 : c = actor [ newActor ( TownIcon , i . x + 8 , i . y - 8 , i . name )  ]  ; 
 break ;  case 4 : c = newActor ( LockIcon , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 5 :  if ( i . name == "" )  break ;  
  var arg = split ( i . name , "," )  ;
  var n = arg [ 0 ]  ;
 arg . remove ( 0 )  ; 
 if ( arg . len (  )  == 1 ) arg = arg [ 0 ]  ; 
 
  else  if ( arg . len (  )  == 0 ) arg = null ; 
 
  
  if ( getroottable (  )  . rawin ( n )  )  if (  squirrelTypeOf ( getroottable ( ) [ n ] )  == "class" ) c = newActor ( getroottable (  )  [ n ]  , i . x + 8 , i . y - 8 , arg )  ; 
 
  
  break ;  case 6 : c = actor [ newActor ( StageIcon , i . x + 8 , i . y - 8 , i . name )  ]  ; 
c . visible = i . visible ; 
c . raceMode = true ; 
 break ;  }  } 
  
  if (  ! i . rawin ( "polygon" )  &&  ! i . rawin ( "polyline" )  &&  ! i . rawin ( "ellipse" )  &&  ! i . rawin ( "point" )  &&  ! i . rawin ( "gid" )  )  if ( i . name != "" )  { 
  var arg = split ( i . name , "," )  ;
  var n = arg [ 0 ]  ;
 arg . remove ( 0 )  ; 
 if ( arg . len (  )  == 1 ) arg = arg [ 0 ]  ; 
 
  else  if ( arg . len (  )  == 0 ) arg = null ; 
 
  
  if ( getroottable (  )  . rawin ( n )  )  if (  squirrelTypeOf ( getroottable ( ) [ n ] )  == "class" )  { 
 print ( i . x + " - " + i . y )  ; 
c = newActor ( getroottable (  )  [ n ]  , i . x +  ( i . width / 2.0 )  , i . y +  ( i . height / 2.0 )  , arg )  ; 
actor [ c ]  . w = i . width / 2.0 ; 
actor [ c ]  . h = i . height / 2.0 ; 
 } 
  
  
  } 
  
  
  if (  squirrelTypeOf ( c )  == "integer" ) mapActor [ i . id ] = c ; 
 
  else mapActor [ i . id ] = c . id ; 
 
  } 
     }  }  for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "objectgroup" )  { 
  var lana = gvMap . data . layers [ i ]  . name ;
  for (  var j = 0 ;
 j < gvMap . data . layers [ i ]  . objects . len (  )  ; j ++  )  { 
  var obj = gvMap . data . layers [ i ]  . objects [ j ]  ;
  switch ( lana )  {  case "trigger" :  var c = newActor ( Trigger , obj . x +  ( obj . width / 2 )  , obj . y +  ( obj . height / 2 )  )  ;
 actor [ c ]  . shape = Rec ( obj . x +  ( obj . width / 2 )  , obj . y +  ( obj . height / 2 )  , obj . width / 2 , obj . height / 2 , 0 )  ; 
actor [ c ]  . code = obj . name ; 
actor [ c ]  . w = obj . width / 2 ; 
actor [ c ]  . h = obj . height / 2 ; 
 break ;  }  } 
  } 
  
  } 
 gvGameMode = gmOverworld ; 
 if ( gvPlayer )  { 
 camx = gvPlayer . x -  ( screenW (  )  / 2 )  ; 
camy = gvPlayer . y -  ( screenH (  )  / 2 )  ; 
 } 
  
  else  { 
 camx = 0 ; 
camy = 0 ; 
 } 
  
 print ( "Running level code..." )  ; 
 if ( gvMap . data . rawin ( "properties" )  )  {     var foreachOutput7 = squirrelForEach( gvMap . data . properties );     while(true)     {        foreachOutput7.next();        if (foreachOutput7.isDone()) break; i = foreachOutput7.getValue();  { 
  if ( i . name == "code" ) dostr ( i . value )  ; 
 
  } 
     }  }  
 print ( "End level code" )  ; 
autocon =  window.clone(  ( defAutocon ) )  ; 
update (  )  ; 
 }  ; 
gmOverworld =  function (  ) { setDrawTarget ( gvScreen )  ; 
gvMap . drawTiles (  - camx ,  - camy , floor ( camx / 16 )  , floor ( camy / 16 )  ,  ( screenW (  )  / 16 )  + 5 ,  ( screenH (  )  / 16 )  + 2 , "bg" )  ; 
gvMap . drawTiles (  - camx ,  - camy , floor ( camx / 16 )  , floor ( camy / 16 )  ,  ( screenW (  )  / 16 )  + 5 ,  ( screenH (  )  / 16 )  + 2 , "mg" )  ; 
gvMap . drawTiles (  - camx ,  - camy , floor ( camx / 16 )  , floor ( camy / 16 )  ,  ( screenW (  )  / 16 )  + 5 ,  ( screenH (  )  / 16 )  + 2 , "fg" )  ; 
 if ( debug ) gvMap . drawTiles (  - camx ,  - camy , floor ( camx / 16 )  , floor ( camy / 16 )  ,  ( screenW (  )  / 16 )  + 5 ,  ( screenH (  )  / 16 )  + 2 , "solid" )  ; 
 
 runActors (  )  ; 
 {     var foreachOutput8 = squirrelForEach( actor );     while(true)     {        foreachOutput8.next();        if (foreachOutput8.isDone()) break; i = foreachOutput8.getValue();  if (  ( (i[ ( "draw" ) ] !== undefined) )  &&  squirrelTypeOf ( i . draw )  == "function" ) i . draw (  )  ; 
 
     }  } drawZList ( 8 )  ; 
runAmbientLight (  )  ; 
 if ( gvPlayer ) drawLight ( sprLightBasic , 0 , gvPlayer . x - camx , gvPlayer . y - camy - 8 )  ; 
 
 drawAmbientLight (  )  ; 
 if ( gvLevel != "" )  { 
 drawText ( font2 ,  ( screenW (  )  / 2 )  -  ( gvLangObj [ "level" ]  [ gvLevel ]  . len (  )  * 4 )  , 8 , gvLangObj [ "level" ]  [ gvLevel ]  )  ; 
 if ( game . bestTime . rawin ( gvLevel + "-" + game . playerChar )  )  { 
  var pb = formatTime ( game . bestTime [ gvLevel + "-" + game . playerChar ]  )  ;
  var pbx =  ( pb . len (  )  / 2 )  * 8 ;
 drawText ( font2 ,  ( screenW (  )  / 2 )  - pbx , 24 , pb )  ; 
 } 
  
  } 
  
 drawSprite ( sprCoin , 0 , 16 , screenH (  )  - 16 )  ; 
drawText ( font2 , 24 , screenH (  )  - 23 , game . coins . tostring (  )  )  ; 
 if ( game . colorswitch . squirrelFind ( true )  != null )  { 
  if ( getcon ( "spec1" , "press" )  )  { 
 game . turnOffBlocks =  ! game . turnOffBlocks ; 
playSound ( sndMenuSelect , 0 )  ; 
 } 
  
  var blockx = gvScreenW - 21 ;
  var blocky = gvScreenH - 21 ;
  var trueCount = 0 ;
  for (  var i = 7 ;
 i >= 0 ; i --  )  { 
  if ( game . colorswitch [ i ]  )  { 
 trueCount ++  ; 
drawSprite ( sprColorBlock ,  (  ( i * 2 )  + 1 )  - int ( game . turnOffBlocks )  , blockx , blocky )  ; 
blockx -= 8 ; 
blocky -=  ( trueCount % 2 == 0 ?  - 8 : 8 )  ; 
 } 
  
  } 
  } 
  
 setDrawColor ( gvFadeInTime )  ; 
drawRec ( 0 , 0 , screenW (  )  , screenH (  )  , true )  ; 
 if ( gvFadeInTime > 0 ) gvFadeInTime -= 10 ; 
 
  if ( gvFadeInTime < 0 ) gvFadeInTime = 0 ; 
 
 drawDebug (  )  ; 
game . igt ++  ; 
 if ( config . showglobaligt )  { 
  var gtd = formatTime ( game . igt )  ;
 drawText ( font2 ,  ( screenW (  )  / 2 )  -  ( gtd . len (  )  * 4 )  , screenH (  )  - 24 , gtd )  ; 
 } 
  
 checkAchievements (  )  ; 
drawAchievements (  )  ; 
resetDrawTarget (  )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
 if ( gvFadeTime > 0 )  { 
 setDrawColor ( min ( 255 , gvFadeTime * 8 )  )  ; 
drawRec ( 0 , 0 , screenW (  )  , screenH (  )  , true )  ; 
 } 
  
  var px = 0 ;
  var py = 0 ;
  var ux = gvMap . w - screenW (  )  ;
  var uy = gvMap . h - screenH (  )  ;
  if ( gvPlayer )  { 
 px =  ( gvPlayer . x + gvPlayer . hspeed * 24 )  -  ( screenW (  )  / 2 )  ; 
py =  ( gvPlayer . y + gvPlayer . vspeed * 16 )  -  ( screenH (  )  / 2 )  ; 
 } 
  
  else  { 
 px = camx ; 
py = camy ; 
 } 
  
 camx +=  ( px - camx )  / 16 ; 
camy +=  ( py - camy )  / 16 ; 
 if ( camx > ux ) camx = ux ; 
 
  if ( camx < 0 ) camx = 0 ; 
 
  if ( camy > uy ) camy = uy ; 
 
  if ( camy < 0 ) camy = 0 ; 
 
  }  ; 
irisOut =  function (  ) {  }  ; 



}; 
