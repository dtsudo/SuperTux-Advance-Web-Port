if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/light.nut'] = function () { 


gvLightScreen = 0 ; 
gvLight = 0xffffffff ; 
gvLightTarget = 0xffffffff ; 
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
StaticLight =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . sprite = 0 ; 
 returnVal . scale = 1.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 if ( getroottable (  )  . rawin ( _arr [ 0 ]  )  ) sprite = getroottable (  )  [ _arr [ 0 ]  ]  ; 
 
  else deleteActor ( id )  ; 
 
 scale = _arr [ 1 ]  . tofloat (  )  ; 
 } ;  returnVal . run = function (  ) {  if ( sprite ) drawLightEx ( sprite , getFrames (  )  / 4 , x - camx , y - camy , 0 , 0 , scale , scale )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



}; 
