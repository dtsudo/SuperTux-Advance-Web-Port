if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


levelEndRunner = 0 ; 
LevelEnder =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . timer = 180 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( 0 , 0 )  ; 
 } ;  returnVal . run = function (  ) { timer --  ; 
 if ( timer == 0 || getcon ( "pause" , "press" )  )  { 
 stopChannel (  - 1 )  ; 
startOverworld ( game . world )  ; 
levelEndRunner = 0 ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "LevelEnder" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
endGoal =  function (  ) {  if ( levelEndRunner == 0 )  { 
 gvPlayer . canMove = false ; 
gvPlayer . endMode = true ; 
 if ( gvPlayer . hspeed > 2 ) gvPlayer . hspeed = 2.0 ; 
 
 gvPlayer . invincible = 999 ; 
 if ( game . levelCoins >= game . maxCoins &&  ! game . allCoins . rawin ( gvMap . name )  ) game . allCoins [ gvMap . name ] = true ; 
 
  if ( game . secrets <= 0 &&  ! game . allSecrets . rawin ( gvMap . name )  ) game . allSecrets [ gvMap . name ] = true ; 
 
  if ( game . enemies <= 0 &&  ! game . allEnemies . rawin ( gvMap . name )  ) game . allEnemies [ gvMap . name ] = true ; 
 
 game . coins += game . levelCoins ; 
playSound ( sndWin , 0 )  ; 
stopMusic (  )  ; 
 if (  ! game . completed . rawin ( gvMap . name )  ) game . completed [ gvMap . name ] = true ; 
 
 levelEndRunner = newActor ( LevelEnder , 0 , 0 )  ; 
 if (  ! game . bestTime . rawin ( gvMap . name )  ) game . bestTime [ gvMap . name ] = gvIGT ; 
 
  else  if ( game . bestTime [ gvMap . name ]  > gvIGT ) game . bestTime [ gvMap . name ] = gvIGT ; 
 
  
 saveGame (  )  ; 
 } 
  
  }  ; 



});