if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/trigger.nut'] = function () { 


pipeFunnel =  function ( target ) {  if ( target . x < x && target . hspeed < 1 && getcon ( "down" , "hold" , false , target . playerNum )  ) target . hspeed += 0.25 ; 
 
  if ( target . x > x && target . hspeed >  - 1 && getcon ( "down" , "hold" , false , target . playerNum )  ) target . hspeed -= 0.25 ; 
 
  }  ; 
trigCurrent =  function ( h = 0 , v = 0 , f = 0.5 ) {  if ( myTarget == null )  return ; 
  
  if ( h > 0 && myTarget . hspeed < h ) myTarget . hspeed += f ; 
 
  if ( h < 0 && myTarget . hspeed > h ) myTarget . hspeed -= f ; 
 
  if ( v > 0 && myTarget . vspeed < v ) myTarget . vspeed += f ; 
 
  if ( v < 0 && myTarget . vspeed > v ) myTarget . vspeed -= f ; 
 
  }  ; 
Trigger =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . code = "" ; 
 returnVal . shape = 0 ; 
 returnVal . w = 0.0 ; 
 returnVal . h = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  )  if ( isWebBrowserVersion ) dostr ( "/*js*/ x = " + x + "; y = " + y + "; w = " + w + "; h = " + h + "; id = " + id + "; myTarget = gvPlayer; " + code )  ; 
 
  else dostr ( "x <- " + x + "; y <- " + y + "; w <- " + w + "; h <- " + h + "; id <- " + id + "; myTarget <- gvPlayer; " + code )  ; 
 
  
  if ( gvPlayer2 && hitTest ( shape , gvPlayer2 . shape )  )  if ( isWebBrowserVersion ) dostr ( "/*js*/ x = " + x + "; y = " + y + "; w = " + w + "; h = " + h + "; id = " + id + "; myTarget = gvPlayer2; " + code )  ; 
 
  else dostr ( "x <- " + x + "; y <- " + y + "; w <- " + w + "; h <- " + h + "; id <- " + id + "; myTarget <- gvPlayer2; " + code )  ; 
 
  
  } ;  returnVal . _typeof = function (  ) {  return "Trigger" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . code = "" ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . w = 0.0 ; 
 squirrelClassFunction . h = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
joinPlayers =  function ( target ) {  if ( target == gvPlayer && gvPlayer2 )  { 
 gvPlayer2 . x = gvPlayer . x ; 
gvPlayer2 . y = gvPlayer . y ; 
 } 
  
  if ( target == gvPlayer2 && gvPlayer )  { 
 gvPlayer . x = gvPlayer2 . x ; 
gvPlayer . y = gvPlayer2 . y ; 
 } 
  
  }  ; 



}; 
