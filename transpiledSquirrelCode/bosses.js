if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


Boss =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . health = 100 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y , _arr )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Nolok =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Boss ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 20 )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Nolok" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



});