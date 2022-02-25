if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


gvLevel = "" ; 
OverPlayer =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 if ( game . owx == 0 && game . owy == 0 )  { 
 x = _x ; 
y = _y ; 
 } 
  
  else  { 
 x = game . owx ; 
y = game . owy ; 
 } 
  
 shape = Rec ( x , y , 1 , 1 , 0 )  ; 
 if (  ! gvPlayer ) gvPlayer = this ; 
 
  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
shape . setPos ( x , y )  ; 
game . owx = x ; 
game . owy = y ; 
 var level = "" ;
  var onstage = false ;
  if ( actor . rawin ( "StageIcon" )  )  { 
  {     var foreachOutput = squirrelForEach ( actor [ "StageIcon" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 level = i . level ; 
onstage = true ; 
 break ;  } 
  
  } 
     }  }  } 
  
  if ( actor . rawin ( "TownIcon" )  )  { 
  {     var foreachOutput = squirrelForEach ( actor [ "TownIcon" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 level = i . level ; 
onstage = true ; 
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
  
  if ( getcon ( "right" , "hold" )  &&  (  ! placeFree ( x + 16 , y )  || debug )  && hspeed == 0 && vspeed == 0 )  { 
  if ( level == "" || game . owd == 0 )  { 
 hspeed = 2 ; 
game . owd = 2 ; 
 } 
  
  else  if ( game . completed . rawin ( level )  ) hspeed = 2 ; 
 
  
  } 
  
  if ( getcon ( "up" , "hold" )  &&  (  ! placeFree ( x , y - 16 )  || debug )  && hspeed == 0 && vspeed == 0 )  { 
  if ( level == "" || game . owd == 1 )  { 
 vspeed =  - 2 ; 
game . owd = 3 ; 
 } 
  
  else  if ( game . completed . rawin ( level )  ) vspeed =  - 2 ; 
 
  
  } 
  
  if ( getcon ( "left" , "hold" )  &&  (  ! placeFree ( x - 16 , y )  || debug )  && hspeed == 0 && vspeed == 0 )  { 
  if ( level == "" || game . owd == 2 )  { 
 hspeed =  - 2 ; 
game . owd = 0 ; 
 } 
  
  else  if ( game . completed . rawin ( level )  ) hspeed =  - 2 ; 
 
  
  } 
  
  if ( getcon ( "down" , "hold" )  &&  (  ! placeFree ( x , y + 16 )  || debug )  && hspeed == 0 && vspeed == 0 )  { 
  if ( level == "" || game . owd == 3 )  { 
 vspeed = 2 ; 
game . owd = 1 ; 
 } 
  
  else  if ( game . completed . rawin ( level )  ) vspeed = 2 ; 
 
  
  } 
  
  } 
  
 x += hspeed ; 
y += vspeed ; 
 if ( hspeed == 0 && vspeed == 0 ) drawSprite ( getroottable (  )  [ game . characters [ game . playerChar ]  [ 0 ]  ]  , 0 , x - camx , y - camy )  ; 
 
  else drawSprite ( getroottable (  )  [ game . characters [ game . playerChar ]  [ 0 ]  ]  , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 
 gvLevel = level ; 
 } ;  returnVal . _typeof = function (  ) {  return "OverPlayer" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
StageIcon =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . level = "" ; 
 returnVal . visible = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( visible )  { 
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
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
TownIcon =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . level = "" ; 
 returnVal . visible = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if ( getcon ( "jump" , "press" )  || getcon ( "accept" , "press" )  || getcon ( "shoot" , "press" )  )  { 
  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . hspeed == 0 && gvPlayer . vspeed == 0 )  if ( level != "" )  { 
 game . check = false ; 
gvDoIGT = false ; 
drawWeather = 0 ; 
startPlay ( game . path + level + ".json" )  ; 
 } 
  
  
  
  } 
  
  if ( level != "" &&  ! game . completed . rawin ( level )  ) game . completed [ level ] = true ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "TownIcon" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
WorldIcon =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . level = "" ; 
 returnVal . world = "" ; 
 returnVal . visible = true ; 
 returnVal . px = 0 ; 
 returnVal . py = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
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
startOverworld ( "res/map/" + world + ".json" )  ; 
 } 
  
  
  
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "WorldIcon" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
startOverworld =  function ( world ) { gvPlayer = false ; 
actor . clear (  )  ; 
gvIGT = 0 ; 
autocon =  { up : false , down : false , left : false , right : false }  ; 
 if ( gvMap != 0 ) gvMap . del (  )  ; 
 
 gvMap = Tilemap ( world )  ; 
game . world = world ; 
 var actset =  - 1 ;
  var tilef = 0 ;
  for (  var i = 0 ;
 i < gvMap . tileset . len (  )  ; i ++  )  { 
  if ( spriteName ( gvMap . tileset [ i ]  )  == "actors.png" )  { 
 actset = gvMap . tileset [ i ]  ; 
tilef = gvMap . tilef [ i ]  ; 
 break ;  } 
  
  } 
  if ( actset ==  - 1 )  { 
 print ( "Map does not use actors.png. No actors to load." )  ; 
 return ; 
  } 
  
  var actlayer =  - 1 ;
  {     var foreachOutput = squirrelForEach ( gvMap . data . layers ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( i [ "type" ]  == "objectgroup" && i [ "name" ]  == "actor" )  { 
 actlayer = i ; 
 break ;  } 
  
  } 
     }  }  if ( actlayer ==  - 1 )  { 
 print ( "Map does not have an actor layer. No actors to load." )  ; 
 return ; 
  } 
  
  {     var foreachOutput = squirrelForEach ( actlayer . objects ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  var n = i . gid - tilef ;
  switch ( n )  {  case 0 :  if (  ! gvPlayer ) newActor ( OverPlayer , i . x + 8 , i . y - 8 )  ; 
 
  break ;  case 1 :  var c = actor [ newActor ( StageIcon , i . x + 8 , i . y - 8 )  ]  ;
 c . level = i . name ; 
c . visible = i . visible ; 
 break ;  case 2 :  var c = actor [ newActor ( WorldIcon , i . x + 8 , i . y - 8 )  ]  ;
 c . level = i . name ; 
 break ;  case 3 :  var c = actor [ newActor ( TownIcon , i . x + 8 , i . y - 8 )  ]  ;
 c . level = i . name ; 
 break ;  }  } 
     }  } gvGameMode = gmOverworld ; 
 if ( gvPlayer )  { 
 camx = gvPlayer . x -  ( screenW (  )  / 2 )  ; 
camy = gvPlayer . y -  ( screenH (  )  / 2 )  ; 
 } 
  
  else  { 
 camx = 0 ; 
camy = 0 ; 
 } 
  
 print ( "Running level code..." )  ; 
 if ( gvMap . data . rawin ( "properties" )  )  {     var foreachOutput = squirrelForEach ( gvMap . data . properties ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( i . name == "code" ) dostr ( i . value )  ; 
 
  } 
     }  }  
 print ( "End level code" )  ; 
autocon . up = false ; 
autocon . down = false ; 
autocon . left = false ; 
autocon . right = false ; 
update (  )  ; 
 }  ; 
gmOverworld =  function (  ) { setDrawTarget ( gvScreen )  ; 
gvMap . drawTiles (  - camx ,  - camy , floor ( camx / 16 )  , floor ( camy / 16 )  , 21 , 17 , "bg" )  ; 
gvMap . drawTiles (  - camx ,  - camy , floor ( camx / 16 )  , floor ( camy / 16 )  , 21 , 17 , "fg" )  ; 
 if ( debug ) gvMap . drawTiles (  - camx ,  - camy , floor ( camx / 16 )  , floor ( camy / 16 )  , 21 , 17 , "solid" )  ; 
 
  if ( actor . rawin ( "StageIcon" )  )  {     var foreachOutput = squirrelForEach ( actor [ "StageIcon" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ; i . run (  )  ; 
    }  }  
  if ( actor . rawin ( "WorldIcon" )  )  {     var foreachOutput = squirrelForEach ( actor [ "WorldIcon" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ; i . run (  )  ; 
    }  }  
  if ( actor . rawin ( "TownIcon" )  )  {     var foreachOutput = squirrelForEach ( actor [ "TownIcon" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ; i . run (  )  ; 
    }  }  
  if ( actor . rawin ( "Trigger" )  )  {     var foreachOutput = squirrelForEach ( actor [ "Trigger" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ; i . run (  )  ; 
    }  }  
  if ( gvPlayer ) gvPlayer . run (  )  ; 
 
 runAmbientLight (  )  ; 
drawAmbientLight (  )  ; 
 if ( gvLevel != "" )  { 
 drawText ( font2 ,  ( screenW (  )  / 2 )  -  ( gvLangObj [ "level" ]  [ gvLevel ]  . len (  )  * 4 )  , 8 , gvLangObj [ "level" ]  [ gvLevel ]  )  ; 
 if ( game . bestTime . rawin ( gvLevel )  )  { 
  var pb = formatTime ( game . bestTime [ gvLevel ]  )  ;
  var pbx =  ( pb . len (  )  / 2 )  * 8 ;
 drawText ( font2 ,  ( screenW (  )  / 2 )  - pbx , 24 , pb )  ; 
 } 
  
  } 
  
 drawSprite ( sprCoin , 0 , 16 , screenH (  )  - 16 )  ; 
drawText ( font2 , 24 , screenH (  )  - 23 , game . coins . tostring (  )  )  ; 
drawSprite ( getroottable (  )  [ game . characters [ game . playerChar ]  [ 1 ]  ]  , game . weapon , screenW (  )  - 16 , screenH (  )  - 12 )  ; 
drawDebug (  )  ; 
game . igt ++  ; 
 if ( config . showglobaligt )  { 
  var gtd = formatTime ( game . igt )  ;
 drawText ( font2 ,  ( screenW (  )  / 2 )  -  ( gtd . len (  )  * 4 )  , screenH (  )  - 24 , gtd )  ; 
 } 
  
 resetDrawTarget (  )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
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



});