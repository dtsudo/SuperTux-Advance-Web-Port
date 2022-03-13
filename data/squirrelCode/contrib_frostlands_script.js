if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['contrib/frostlands/script.nut'] = function () { 


print ( "Loading Frostlands" )  ; 
bgAuroraALT = newSprite ( "contrib/frostlands/gfx/aurora-alt.png" , 720 , 240 , 0 , 0 , 0 , 0 )  ; 
bgSnowPlainALT = newSprite ( "contrib/frostlands/gfx/bgSnowPlain-alt.png" , 720 , 240 , 0 , 0 , 0 , 0 )  ; 
sprFireBlock = newSprite ( "res/gfx/Fireblock.png" , 16 , 16 , 0 , 0 , 0 , 0 )  ; 
sprTinyFireGuinb = newSprite ( "contrib/frostlands/gfx/tinyfireguinb.png" , 13 , 23 , 0 , 0 , 6 , 23 )  ; 
sprmark = newSprite ( "contrib/frostlands/gfx/mark.png" , 67 , 48 , 0 , 0 , 32 , 47 )  ; 
sprmarq = newSprite ( "contrib/frostlands/gfx/marqies.png" , 34 , 40 , 0 , 0 , 32 , 40 )  ; 
dbgAuroraF =  function (  ) {  for (  var i = 0 ;
 i < 2 ; i ++  )  { 
 drawSprite ( bgAuroraALT , 0 ,  (  (  - camx / 8 )  % 720 )  +  ( i * 720 )  , screenH (  )  - 240 )  ; 
 } 
  }  ; 
dbgSnowPlainF =  function (  ) {  for (  var i = 0 ;
 i < 2 ; i ++  )  { 
 drawSprite ( bgSnowPlainALT , 0 ,  (  (  - camx / 8 )  % 720 )  +  ( i * 720 )  ,  ( screenH (  )  / 2 )  - 120 )  ; 
 } 
  }  ; 
FireBlock =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . slideshape = 0 ; 
 returnVal . fireshape = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
slideshape = Rec ( x , y - 1 , 12 , 8 , 0 )  ; 
fireshape = Rec ( x , y , 16 , 16 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( actor . rawin ( "Fireball" )  )  {     var foreachOutput = squirrelForEach ( actor [ "Fireball" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  if ( hitTest ( fireshape , i . shape )  )  { 
 tileSetSolid ( x , y , 0 )  ; 
deleteActor ( id )  ; 
deleteActor ( i . id )  ; 
newActor ( Poof , x , y )  ; 
playSound ( sndFlame , 0 )  ; 
 } 
  
     }  }  
  if ( actor . rawin ( "ExplodeF" )  )  {     var foreachOutput = squirrelForEach ( actor [ "ExplodeF" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  if ( hitTest ( fireshape , i . shape )  )  { 
 tileSetSolid ( x , y , 0 )  ; 
deleteActor ( id )  ; 
deleteActor ( i . id )  ; 
newActor ( Poof , x , y )  ; 
playSound ( sndFlame , 0 )  ; 
 } 
  
     }  }  
 drawSprite ( sprFireBlock , 0 , x - 8 - camx , y - 8 - camy )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
TNTALT =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = null ; 
 returnVal . gothit = false ; 
 returnVal . hittime = 0.0 ; 
 returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 10 , 10 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) { drawSprite ( sprC4 , frame , x - 8 - camx , y - 8 - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "TNTALT" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
print ( "Loaded Frostlands" )  ; 



}; 
