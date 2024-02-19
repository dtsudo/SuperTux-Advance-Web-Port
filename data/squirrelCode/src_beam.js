if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/beam.nut'] = function () { 


ghostRecordOld = null ; 
ghostRecordNew = null ; 
ghostRecordName = "" ; 
loadGhostFile =  function ( filename ) {  if (  ! fileExists ( filename )  )  return  [  [ 0 , 0 ]  ]  ;
  
  var file = fileRead ( filename )  ;
  var output = split ( file , "\n" )  ;
  if ( output . len (  )  == 0 )  return  [  [ 0 , 0 ]  ]  ;
  
  for (  var i = 0 ;
 i < output . len (  )  ; i ++  )  { 
 output [ i ] = split ( output [ i ]  , "," )  ; 
output [ i ]  [ 0 ] = output [ i ]  [ 0 ]  . tointeger (  )  ; 
output [ i ]  [ 1 ] = output [ i ]  [ 1 ]  . tointeger (  )  ; 
 } 
  return output ;
  }  ; 
BeamBug =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . step = 0 ; 
 returnVal . xprev = 0 ; 
 returnVal . lightTrail = null ; 
 returnVal . flip = 0 ; 
 returnVal . turn = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
lightTrail = array ( 32 ,  window.clone(  (  [ _x , _y ]  ) )  )  ; 
 } ;  returnVal . run = function (  ) {  for (  var i = 31 ;
 i > 0 ; i --  ) lightTrail [ i ] = lightTrail [ i - 1 ]  ; 
lightTrail [ 0 ] =  [ x , y ]  ; 
xprev = x ; 
x = ghostRecordOld [ step ]  [ 0 ]  ; 
y = ghostRecordOld [ step ]  [ 1 ]  ; 
 if ( step < ghostRecordOld . len (  )  - 1 ) step ++  ; 
 
  if ( x > xprev ) flip = 0 ; 
 
  if ( x < xprev ) flip = 1 ; 
 
 turn = floor ( min ( fabs ( x - xprev )  / 1.5 , 3 )  )  * 2 ; 
 } ;  returnVal . draw = function (  ) {  if ( ghostRecordOld . len (  )  <= 1 )  return ; 
  
  for (  var i = 31 ;
 i > 0 ; i --  )  { 
  var r = 255 ;
  var g = max ( 0 , min ( 255 , 128 +  ( 255 - i * 15 )  )  )  ;
  var b = max ( 0 , 255 - i * 15 )  ;
 setDrawColor (  ( r << 24 )  |  ( g << 16 )  |  ( b << 8 )  | max ( 0 , min ( 255 , 255 +  ( 255 - i * 15 )  )  )  )  ; 
 if ( inRange ( distance2 ( lightTrail [ i ]  [ 0 ]  - camx , lightTrail [ i ]  [ 1 ]  - camy , lightTrail [ i - 1 ]  [ 0 ]  - camx , lightTrail [ i - 1 ]  [ 1 ]  - camy )  , 2 , 128 )  ) drawLineWide ( lightTrail [ i ]  [ 0 ]  - camx , lightTrail [ i ]  [ 1 ]  - camy , lightTrail [ i - 1 ]  [ 0 ]  - camx , lightTrail [ i - 1 ]  [ 1 ]  - camy , 4 -  ( i / 8 )  )  ; 
 
  } 
 drawSprite ( sprBeam , turn +  (  ( getFrames (  )  / 2 )  % 2 )  , x - camx , y - camy +  (  ( getFrames (  )  / 4 )  % 2 )  , 0 , flip )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "BeamBug" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . step = 0 ; 
 squirrelClassFunction . xprev = 0 ; 
 squirrelClassFunction . lightTrail = null ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . turn = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 



}; 
