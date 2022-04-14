if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/levelend.nut'] = function () { 


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
endGoal =  function ( level = "" ) {  var clearedLevel ;
  if ( level == "" )  { 
 clearedLevel = gvMap . name ; 
 } 
  
  else  { 
 clearedLevel = level ; 
 } 
  
  if ( levelEndRunner == 0 )  { 
 gvPlayer . canMove = false ; 
gvPlayer . endMode = true ; 
 if ( gvPlayer . hspeed > 2 ) gvPlayer . hspeed = 2.0 ; 
 
 gvPlayer . invincible = 999 ; 
 if (  ! game . completed . rawin ( clearedLevel )  ) game . completed [ clearedLevel ] = true ; 
 
  if ( game . levelCoins >= game . maxCoins &&  ! game . allCoins . rawin ( clearedLevel )  ) game . allCoins [ clearedLevel ] = true ; 
 
  if ( game . secrets <= 0 &&  ! game . allSecrets . rawin ( clearedLevel )  ) game . allSecrets [ clearedLevel ] = true ; 
 
  if ( game . enemies <= 0 &&  ! game . allEnemies . rawin ( clearedLevel )  ) game . allEnemies [ clearedLevel ] = true ; 
 
  if (  ! game . bestTime . rawin ( clearedLevel )  ) game . bestTime [ clearedLevel ] = gvIGT ; 
 
  else  if ( game . bestTime [ clearedLevel ]  > gvIGT ) game . bestTime [ clearedLevel ] = gvIGT ; 
 
  
 game . coins += game . levelCoins ; 
playSound ( sndWin , 0 )  ; 
stopMusic (  )  ; 
levelEndRunner = newActor ( LevelEnder , 0 , 0 )  ; 
saveGame (  )  ; 
 } 
  
  }  ; 



}; 
