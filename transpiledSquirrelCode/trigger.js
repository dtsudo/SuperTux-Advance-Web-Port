if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


pipeFunnel =  function (  ) {  if ( gvPlayer . x < x && gvPlayer . hspeed < 1 && getcon ( "down" , "hold" )  ) gvPlayer . hspeed += 0.25 ; 
 
  if ( gvPlayer . x > x && gvPlayer . hspeed >  - 1 && getcon ( "down" , "hold" )  ) gvPlayer . hspeed -= 0.25 ; 
 
  }  ; 
Trigger =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . code = "" ; 
 returnVal . shape = 0 ; 
 returnVal . w = 0.0 ; 
 returnVal . h = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  { 
  if ( isWebBrowserVersion ) dostr ( "/*js*/ x = " + x + "; y = " + y + "; id = " + id + "; " + code )  ; 
 
  else dostr ( "x <- " + x + "; y <- " + y + "; id <- " + id + "; " + code )  ; 
 
  } 
  
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "Trigger" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



});