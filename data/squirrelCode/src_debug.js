if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/debug.nut'] = function () { 


debug = false ; 
debugTickIndex = 0 ; 
debugTickSum = 0 ; 
debugTickList = array ( 64 , 0 )  ; 
devcom = false ; 
debugHistory =  [  ]  ; 
debugCursor = 0 ; 
debugMouseLeft = 1 ; 
debugMouseRight = 0 ; 
debugExt =  {  }  ; 
gvDebugConsole = false ; 
gvConIn = "" ; 
gvConOut = "" ; 
drawDebug =  function (  ) {  if ( keyPress ( k_tick )  ) devcom =  ! devcom ; 
 
  if (  ! debug )  return ; 
  
  var fps = getFPS (  )  ;
 debugTickSum -= debugTickList [ debugTickIndex ]  ; 
debugTickSum += fps ; 
debugTickList [ debugTickIndex ] = fps ; 
debugTickIndex ++  ; 
 if ( debugTickIndex == 64 ) debugTickIndex = 0 ; 
 
 fps = debugTickSum / 64 ; 
 if ( keyPress ( k_1 )  )  { 
 game . ps . weapon = "fire" ; 
 } 
  
  if ( keyPress ( k_2 )  )  { 
 game . ps . weapon = "ice" ; 
 } 
  
  if ( keyPress ( k_3 )  )  { 
 game . ps . weapon = "air" ; 
 } 
  
  if ( keyPress ( k_4 )  )  { 
 game . ps . weapon = "earth" ; 
 } 
  
  if ( keyPress ( k_5 )  )  { 
 game . ps . weapon = "shock" ; 
 } 
  
  if ( keyPress ( k_6 )  )  { 
 game . ps . weapon = "water" ; 
 } 
  
  if ( keyPress ( k_7 )  )  { 
 game . ps . weapon = "dark" ; 
 } 
  
  if ( keyPress ( k_8 )  )  { 
 game . ps . weapon = "light" ; 
 } 
  
  if ( keyPress ( k_minus )  && game . maxHealth > 4 ) game . maxHealth = game . maxHealth - 4 ; 
 
  if ( keyPress ( k_equals )  ) game . maxHealth = game . maxHealth + 4 ; 
 
  if ( keyDown ( k_lctrl )  || keyDown ( k_rctrl )  )  { 
  if ( keyPress ( k_k )  )  { 
 gvKeyCopper = true ; 
gvKeySilver = true ; 
gvKeyGold = true ; 
gvKeyMythril = true ; 
 } 
  
  } 
  
  if (  ( keyDown ( k_lctrl )  || keyDown ( k_rctrl )  )  && keyPress ( k_e )  ) endGoal (  )  ; 
 
  if ( keyDown ( k_lshift )  )  { 
  if ( gvPlayer && mouseDown ( 0 )  )  { 
  if (  ! gvSplitScreen )  { 
 gvPlayer . x = mouseX (  )  + camx0 ; 
gvPlayer . y = mouseY (  )  + camy0 ; 
gvPlayer . hspeed = 0.0 ; 
gvPlayer . vspeed = 0.0 ; 
 } 
  
  else  if ( gvSwapScreen )  { 
  if ( mouseX (  )  > screenW (  )  / 2 )  { 
 gvPlayer . x =  ( mouseX (  )  - screenW (  )  / 2 )  + camx1 ; 
gvPlayer . y = mouseY (  )  + camy1 ; 
gvPlayer . hspeed = 0.0 ; 
gvPlayer . vspeed = 0.0 ; 
 } 
  
  else  { 
 gvPlayer2 . x = mouseX (  )  + camx2 ; 
gvPlayer2 . y = mouseY (  )  + camy2 ; 
gvPlayer2 . hspeed = 0.0 ; 
gvPlayer2 . vspeed = 0.0 ; 
 } 
  
  } 
  
  else  { 
  if ( mouseX (  )  < screenW (  )  / 2 )  { 
 gvPlayer . x = mouseX (  )  + camx1 ; 
gvPlayer . y = mouseY (  )  + camy1 ; 
gvPlayer . hspeed = 0.0 ; 
gvPlayer . vspeed = 0.0 ; 
 } 
  
  else  { 
 gvPlayer2 . x =  ( mouseX (  )  - screenW (  )  / 2 )  + camx2 ; 
gvPlayer2 . y = mouseY (  )  + camy2 ; 
gvPlayer2 . hspeed = 0.0 ; 
gvPlayer2 . vspeed = 0.0 ; 
 } 
  
  } 
  
  
  if ( gvGameMode == gmOverworld )  { 
 gvPlayer . x =  ( gvPlayer . x -  ( gvPlayer . x % 16 )  )  + 8 ; 
gvPlayer . y =  ( gvPlayer . y -  ( gvPlayer . y % 16 )  )  + 8 ; 
 } 
  
  } 
  
  } 
  
  else  { 
  var dox = 0 ;
  var doy = 0 ;
  if ( gvGameMode == gmOverworld )  { 
 dox = mouseX (  )  + camx ; 
doy = mouseY (  )  + camy ; 
 } 
  
  else  if (  ! gvSplitScreen )  { 
 dox = mouseX (  )  + camx0 ; 
doy = mouseY (  )  + camy0 ; 
 } 
  
  else  if ( gvSwapScreen )  { 
  if ( mouseX (  )  > screenW (  )  / 2 )  { 
 dox =  ( mouseX (  )  - screenW (  )  / 2 )  + camx1 ; 
doy = mouseY (  )  + camy1 ; 
 } 
  
  else  { 
 dox = mouseX (  )  + camx2 ; 
doy = mouseY (  )  + camy2 ; 
 } 
  
  } 
  
  else  { 
  if ( mouseX (  )  < screenW (  )  / 2 )  { 
 dox = mouseX (  )  + camx1 ; 
doy = mouseY (  )  + camy1 ; 
 } 
  
  else  { 
 dox =  ( mouseX (  )  - screenW (  )  / 2 )  + camx2 ; 
doy = mouseY (  )  + camy2 ; 
 } 
  
  } 
  
  
  
  if ( mouseDown ( 0 )  ) tileSetSolid ( dox , doy , debugMouseLeft )  ; 
 
  if ( mouseDown ( 2 )  ) tileSetSolid ( dox , doy , debugMouseRight )  ; 
 
  if ( mouseDown ( 1 )  ) debugMouseLeft = tileGetSolid ( dox , doy )  ; 
 
  if ( mouseWheelY (  )  < 0 ) debugMouseLeft --  ; 
 
  if ( mouseWheelY (  )  > 0 ) debugMouseLeft ++  ; 
 
 debugMouseLeft = wrap ( debugMouseLeft , 0 ,  ( 6 * 16 )  - 1 )  ; 
 if ( debugMouseLeft == 0 )  { 
 setDrawColor ( 0xff0000ff )  ; 
drawLineWide ( mouseX (  )  - 8 , mouseY (  )  - 8 , mouseX (  )  + 8 , mouseY (  )  + 8 , 2 )  ; 
drawLineWide ( mouseX (  )  - 8 , mouseY (  )  + 8 , mouseX (  )  + 8 , mouseY (  )  - 8 , 2 )  ; 
 } 
  
  else drawSprite ( tsSolid , debugMouseLeft - 1 , mouseX (  )  , mouseY (  )  )  ; 
 
  } 
  
  if ( gvPlayer &&  ( (gvPlayer[ ( "stats" ) ] !== undefined) )  ) gvPlayer . stats . canres = true ; 
 
  if ( gvPlayer2 &&  ( (gvPlayer2[ ( "stats" ) ] !== undefined) )  ) gvPlayer2 . stats . canres = true ; 
 
  var message = "" ;
  if ( gvPlayer )  { 
 message += "X: " + gvPlayer . x + "\n" ; 
message += "Y: " + gvPlayer . y + "\n" ; 
 } 
  
  else  { 
 message += "X: YOU'RE\nY:  DEAD\n" ; 
 } 
  
 message += "FPS: " + round ( fps )  + " (" + getFPS (  )  + ")\n\n\n\n" ; 
message += "HSPD: " ; 
 if ( gvPlayer ) message += gvPlayer . hspeed . tostring (  )  ; 
 
 message += "\nVSPD: " ; 
 if ( gvPlayer ) message += gvPlayer . vspeed . tostring (  )  ; 
 
 message += "\n\n" ; 
 if ( gvMap != 0 ) message += "Map W: " + gvMap . w + "\n" ; 
 
  if ( gvMap != 0 ) message += "Map H: " + gvMap . h + "\n" ; 
 
 message += "SRT: " + floor ( getTicks (  )  / 1000 )  + "\n" ; 
message += "Enemies: " + game . enemies + "\n" ; 
message += "Secrets: " + game . secrets + "\n" ; 
drawText ( font , 0 , 32 , message )  ; 
setDrawColor ( 0xff0000ff )  ; 
drawLine ( mouseX (  )  - 8 , mouseY (  )  , mouseX (  )  + 8 , mouseY (  )  )  ; 
drawLine ( mouseX (  )  , mouseY (  )  - 8 , mouseX (  )  , mouseY (  )  + 8 )  ; 
 {     var foreachOutput1 = squirrelForEach( debugExt );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  if (  squirrelTypeOf ( i )  == "function" ) i (  )  ; 
 
     }  }  }  ; 
gmConsole =  function (  ) {  if (  ! gvDebugConsole )  { 
  if ( gvGameMode != gmPause )  { 
 setDrawTarget ( bgPause )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
 } 
  
 resetDrawTarget (  )  ; 
gvConOut = "" ; 
gvConIn = "" ; 
gvDebugConsole = true ; 
 } 
  
  if ( keyPress ( k_backspace )  && gvConIn . len (  )  > 0 ) gvConIn = gvConIn . slice ( 0 ,  - 1 )  ; 
 
  if ( keyPress ( k_enter )  )  { 
 dostr ( gvConIn )  ; 
 if ( debugHistory . len (  )  > 0 ) debugHistory . pop (  )  ; 
 
 debugHistory . push ( gvConIn )  ; 
debugHistory . push ( "" )  ; 
debugCursor = debugHistory . len (  )  - 1 ; 
 if ( debugHistory . len (  )  > screenH (  )  / 8 ) debugHistory . remove ( 0 )  ; 
 
 gvConIn = "" ; 
 } 
  
  var newchar = keyString (  )  ;
  if ( newchar != "`" ) gvConIn += newchar ; 
 
 setDrawTarget ( gvScreen )  ; 
drawImage ( bgPause , 0 , 0 )  ; 
setDrawColor ( 0x00000080 )  ; 
drawRec ( 0 , 0 , screenW (  )  , screenH (  )  , true )  ; 
gvConOut = "" ; 
 for (  var i = 0 ;
 i < debugHistory . len (  )  - 1 ; i ++  )  { 
 gvConOut += debugHistory [ i ]  ; 
gvConOut += "\n" ; 
 } 
  if ( gvConIn . len (  )  < floor ( screenW (  )  / 6 )  ) gvConOut += gvConIn ; 
 
  else gvConOut += gvConIn . slice (  - floor ( screenW (  )  / 6 )  )  ; 
 
  if ( floor ( getFrames (  )  / 32 )  % 2 == 0 ) gvConOut += "|" ; 
 
 drawText ( font , 0 , 0 , gvConOut )  ; 
resetDrawTarget (  )  ; 
 if ( keyPress ( k_up )  && debugCursor > 0 )  { 
 debugCursor --  ; 
gvConIn = debugHistory [ debugCursor ]  ; 
 } 
  
  if ( keyPress ( k_down )  && debugCursor < debugHistory . len (  )  - 1 )  { 
 debugCursor ++  ; 
gvConIn = debugHistory [ debugCursor ]  ; 
 } 
  
  }  ; 
PolyTest =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . path = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
path = _arr [ 0 ]  ; 
 } ;  returnVal . run = function (  ) { setDrawColor ( 0xff0000ff )  ; 
 for (  var i = 0 ;
 i < path . len (  )  - 1 ; i ++  ) drawLine ( path [ i ]  [ 0 ]  - camx , path [ i ]  [ 1 ]  - camy , path [ i + 1 ]  [ 0 ]  - camx , path [ i + 1 ]  [ 1 ]  - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . path = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
displayKeys =  function (  ) {  var offset =  ( gvNumPlayers == 2 ? 32 : 0 )  ;
  if (  ! config . showleveligt &&  ! gvTimeAttack ) offset -= 16 ; 
 
 drawSprite ( sprDebug , int ( getcon ( "left" , "hold" , true , 1 )  )  , 4 , 60 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "up" , "hold" , true , 1 )  )  + 4 , 12 , 56 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "down" , "hold" , true , 1 )  )  + 6 , 12 , 64 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "right" , "hold" , true , 1 )  )  + 2 , 20 , 60 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "jump" , "hold" , true , 1 )  )  + 8 , 4 , 72 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "spec2" , "hold" , true , 1 )  )  + 10 , 12 , 72 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "swap" , "hold" , true , 1 )  )  + 12 , 20 , 72 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "shoot" , "hold" , true , 1 )  )  + 14 , 28 , 60 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "spec1" , "hold" , true , 1 )  )  + 16 , 28 , 68 + offset )  ; 
 if ( gvNumPlayers == 2 )  { 
 drawSprite ( sprDebug , int ( getcon ( "left" , "hold" , true , 2 )  )  , 4 + 36 , 60 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "up" , "hold" , true , 2 )  )  + 4 , 12 + 36 , 56 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "down" , "hold" , true , 2 )  )  + 6 , 12 + 36 , 64 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "right" , "hold" , true , 2 )  )  + 2 , 20 + 36 , 60 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "jump" , "hold" , true , 2 )  )  + 8 , 4 + 36 , 72 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "spec2" , "hold" , true , 2 )  )  + 10 , 12 + 36 , 72 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "swap" , "hold" , true , 2 )  )  + 12 , 20 + 36 , 72 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "shoot" , "hold" , true , 2 )  )  + 14 , 28 + 36 , 60 + offset )  ; 
drawSprite ( sprDebug , int ( getcon ( "spec1" , "hold" , true , 2 )  )  + 16 , 28 + 36 , 68 + offset )  ; 
 } 
  
  }  ; 



}; 
