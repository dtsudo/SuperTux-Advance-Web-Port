if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/light.nut'] = function () { 


gvLightScreen = 0 ; 
gvLight = 0xffffffff ; 
gvLightTarget = 0xffffffff ; 
gvLight2 = 0xffffffff ; 
gvLightTarget2 = 0xffffffff ; 
drawLight =  function ( sprite , frame , x , y ) {  if (  ! config . light )  return ; 
  
  if ( gvLightScreen == 0 )  return ; 
  
  if ( gvLight == 0xffffffff )  return ; 
  
 setDrawTarget ( gvLightScreen )  ; 
drawSprite ( sprite , frame , x , y )  ; 
setDrawTarget ( gvPlayScreen )  ; 
 }  ; 
drawLightEx =  function ( sprite , frame , x , y , a , f , w , h ) {  if (  ! config . light )  return ; 
  
  if ( gvLightScreen == 0 )  return ; 
  
  if ( gvLight == 0xffffffff )  return ; 
  
 setDrawTarget ( gvLightScreen )  ; 
drawSpriteEx ( sprite , frame , x , y , a , f , w , h , 1 )  ; 
setDrawTarget ( gvPlayScreen )  ; 
 }  ; 
runAmbientLight =  function (  ) {  if ( config . light )  { 
  if (  ( gvLightTarget & 0xFF )  < 255 )  { 
  var newlight = gvLightTarget >> 8 ;
 gvLightTarget =  ( newlight << 8 )  + 255 ; 
 } 
  
  if (  ( gvLight & 0xFF )  < 255 )  { 
  var newlight = gvLight >> 8 ;
 gvLight =  ( newlight << 8 )  + 255 ; 
 } 
  
  if ( gvLight != gvLightTarget )  { 
 gvLight = gvLight . tointeger (  )  ; 
gvLightTarget = gvLightTarget . tointeger (  )  ; 
 var lr =  ( gvLight >> 24 )  & 0xFF ;
  var lg =  ( gvLight >> 16 )  & 0xFF ;
  var lb =  ( gvLight >> 8 )  & 0xFF ;
  var tr =  ( gvLightTarget >> 24 )  & 0xFF ;
  var tg =  ( gvLightTarget >> 16 )  & 0xFF ;
  var tb =  ( gvLightTarget >> 8 )  & 0xFF ;
  if ( lr != tr ) lr +=  (  squirrelThreeWaysCompare ( tr , lr )  )  * 2 ; 
 
  if ( abs ( lr - tr )  < 2 ) lr = tr ; 
 
  if ( lg != tg ) lg +=  (  squirrelThreeWaysCompare ( tg , lg )  )  * 2 ; 
 
  if ( abs ( lg - tg )  < 2 ) lg = tg ; 
 
  if ( lb != tb ) lb +=  (  squirrelThreeWaysCompare ( tb , lb )  )  * 2 ; 
 
  if ( abs ( lb - tb )  < 2 ) lb = tb ; 
 
 gvLight =  ( ceil ( lr )  << 24 )  |  ( ceil ( lg )  << 16 )  |  ( ceil ( lb )  << 8 )  | 0xFF ; 
 } 
  
 setDrawTarget ( gvLightScreen )  ; 
setDrawColor ( gvLight )  ; 
drawRec ( 0 , 0 , screenW (  )  , screenH (  )  , true )  ; 
 } 
  
 setDrawTarget ( gvScreen )  ; 
 }  ; 
drawAmbientLight =  function (  ) {  if ( config . light ) drawImage ( gvLightScreen , 0 , 0 )  ; 
 
  }  ; 
setLight =  function ( color ) { gvLightTarget = color ; 
gvLight = color ; 
 }  ; 
setLight2 =  function ( color ) { gvLightTarget2 = color ; 
gvLight2 = color ; 
 }  ; 
StaticLight =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . sprite = 0 ; 
 returnVal . scale = 1.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( getroottable (  )  . rawin ( _arr [ 0 ]  )  ) sprite = getroottable (  )  [ _arr [ 0 ]  ]  ; 
 
  else deleteActor ( id )  ; 
 
 scale = _arr [ 1 ]  . tofloat (  )  ; 
 } ;  returnVal . run = function (  ) {  if ( sprite ) drawLightEx ( sprite , getFrames (  )  / 4 , x - camx , y - camy , 0 , 0 , scale , scale )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . sprite = 0 ; 
 squirrelClassFunction . scale = 1.0 ; 
 return squirrelClassFunction; })()) ; 
TransZone =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . w = 0.0 ; 
 returnVal . h = 0.0 ; 
 returnVal . color = "0xffffffff" ; 
 returnVal . bg = 0 ; 
 returnVal . weather = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
bg = _arr [ 0 ]  ; 
weather = _arr [ 1 ]  ; 
color = _arr [ 2 ]  ; 
print ( "Created transition zone" )  ; 
 } ;  returnVal . run = function (  ) {  if (  ! gvSplitScreen )  { 
  if ( camx +  ( gvScreenW / 2 )  >= x - w && camy +  ( gvScreenH / 2 )  >= y - h && camx +  ( gvScreenW / 2 )  <= x + w && camy +  ( gvScreenH / 2 )  <= y + h )  { 
  if ( bg == "0" ) drawBG = 0 ; 
 
  else  if ( (getroottable (  ) [bg] !== undefined) ) drawBG = getroottable (  )  [ bg ]  ; 
 
  
  if ( weather == "0" ) drawWeather = 0 ; 
 
  else  if ( (getroottable (  ) [weather] !== undefined) ) drawWeather = getroottable (  )  [ weather ]  ; 
 
  
 dostr ( "gvLightTarget = " + color )  ; 
 } 
  
  } 
  
  else  { 
  if ( camx1 +  ( gvScreenW / 4 )  >= x - w && camy1 +  ( gvScreenH / 4 )  >= y - h && camx1 +  ( gvScreenW / 4 )  <= x + w && camy1 +  ( gvScreenH / 4 )  <= y + h )  { 
  if ( bg == "0" ) drawBG = 0 ; 
 
  else  if ( (getroottable (  ) [bg] !== undefined) ) drawBG = getroottable (  )  [ bg ]  ; 
 
  
  if ( weather == "0" ) drawWeather = 0 ; 
 
  else  if ( (getroottable (  ) [weather] !== undefined) ) drawWeather = getroottable (  )  [ weather ]  ; 
 
  
 dostr ( "gvLightTarget = " + color )  ; 
 } 
  
  if ( camx2 +  ( gvScreenW / 4 )  >= x - w && camy2 +  ( gvScreenH / 4 )  >= y - h && camx2 +  ( gvScreenW / 4 )  <= x + w && camy2 +  ( gvScreenH / 4 )  <= y + h )  { 
  if ( bg == "0" ) drawBG2 = 0 ; 
 
  else  if ( (getroottable (  ) [bg] !== undefined) ) drawBG2 = getroottable (  )  [ bg ]  ; 
 
  
  if ( weather == "0" ) drawWeather2 = 0 ; 
 
  else  if ( (getroottable (  ) [weather] !== undefined) ) drawWeather2 = getroottable (  )  [ weather ]  ; 
 
  
 dostr ( "gvLightTarget2 = " + color )  ; 
 } 
  
  } 
  
  if ( debug )  { 
 setDrawColor ( 0xffffffff )  ; 
drawRec ( x - camx - w , y - camy - h , w * 2 , h * 2 , false )  ; 
 if ( gvPlayer ) drawLine ( x - camx , y - camy , gvPlayer . x - camx , gvPlayer . y - camy )  ; 
 
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "TransZone" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . w = 0.0 ; 
 squirrelClassFunction . h = 0.0 ; 
 squirrelClassFunction . color = "0xffffffff" ; 
 squirrelClassFunction . bg = 0 ; 
 squirrelClassFunction . weather = 0 ; 
 return squirrelClassFunction; })()) ; 



}; 
