if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/trigger.nut'] = function () { 


pipeFunnel =  function (  ) {  if ( gvPlayer . x < x && gvPlayer . hspeed < 1 && getcon ( "down" , "hold" )  ) gvPlayer . hspeed += 0.25 ; 
 
  if ( gvPlayer . x > x && gvPlayer . hspeed >  - 1 && getcon ( "down" , "hold" )  ) gvPlayer . hspeed -= 0.25 ; 
 
  }  ; 
Trigger =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  if ( isWebBrowserVersion ) dostr ( "/*js*/ x = " + x + "; y = " + y + "; id = " + id + "; myTarget = gvPlayer; " + code )  ; 
 
  else dostr ( "x <- " + x + "; y <- " + y + "; id <- " + id + "; myTarget <- gvPlayer; " + code )  ; 
 
  
  
  if ( gvPlayer2 )  if ( hitTest ( shape , gvPlayer2 . shape )  )  if ( isWebBrowserVersion ) dostr ( "/*js*/ x = " + x + "; y = " + y + "; id = " + id + "; myTarget = gvPlayer2; " + code )  ; 
 
  else dostr ( "x <- " + x + "; y <- " + y + "; id <- " + id + "; myTarget <- gvPlayer2; " + code )  ; 
 
  
  
  } ;  returnVal . _typeof = function (  ) {  return "Trigger" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . code = "" ; 
 squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . w = 0.0 ; 
 squirrelClassFunction . h = 0.0 ; 
 return squirrelClassFunction; })()) ; 



}; 
