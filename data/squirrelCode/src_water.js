if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/water.nut'] = function () { 


Water =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 } ;  returnVal . draw = function (  ) { setDrawColor ( 0x2020a040 )  ; 
drawRect ( x - shape . w - floor ( camx )  , y - shape . h - camy ,  ( shape . w * 2 )  - 1 ,  ( shape . h * 2 )  + 2 , true )  ; 
 for (  var i = 0 ;
 i < shape . w / 8 ; i ++  )  { 
 drawSpriteEx ( sprWaterSurface ,  ( getFrames (  )  / 16 )  + i , x - shape . w - floor ( camx )  +  ( i * 16 )  , y - shape . h - camy - 4 , 0 , 0 , 1 , 1 , 0.5 )  ; 
 } 
  } ;  returnVal . _typeof = function (  ) {  return "Water" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



}; 
