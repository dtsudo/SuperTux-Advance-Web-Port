if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/levelend.nut'] = function () { 


levelEndRunner = 0 ; 
LevelEnder =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 180 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( 0 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if (  ( gvPlayer && gvPlayer . endMode ||  ! gvPlayer )  &&  ( gvPlayer2 && gvPlayer2 . endMode ||  ! gvPlayer2 )  )  { 
  { 
 timer --  ; 
 if ( timer == 0 || getcon ( "pause" , "press" )  )  { 
 stopChannel (  - 1 )  ; 
levelEndRunner = 0 ; 
 if ( gvNextLevel != "" && gvTimeAttack )  { 
 game . check = false ; 
 if ( gvNextLevel == "timeattack-win" ) startPlay ( "res/map/" + gvNextLevel + ".json" , true , true )  ; 
 
  else startPlay ( game . path + gvNextLevel + ".json" , true , true )  ; 
 
 gvIGT = 0 ; 
 } 
  
  else startOverworld ( game . world )  ; 
 
  } 
  
  } 
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "LevelEnder" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . timer = 180 ; 
 return squirrelClassFunction; })()) ; 
endGoal =  function ( next = "" , unblock = "" ) {  var clearedLevel ;
 clearedLevel = gvMap . name ; 
gvNextLevel = next ; 
 if ( levelEndRunner == 0 )  { 
 gvPlayer . canMove = false ; 
gvPlayer . endMode = true ; 
 if ( gvPlayer . hspeed > 2 ) gvPlayer . hspeed = 2.0 ; 
 
 gvPlayer . invincible = 999 ; 
 if ( unblock != "" &&  ! game . unblocked . rawin ( unblock )  ) game . unblocked [ unblock ] = true ; 
 
  if (  ! game . completed . rawin ( clearedLevel )  ) game . completed [ clearedLevel ] = true ; 
 
  if ( game . levelCoins >= game . maxCoins &&  ! game . allCoins . rawin ( clearedLevel )  ) game . allCoins [ clearedLevel ] = true ; 
 
  if ( game . secrets >= game . maxSecrets &&  ! game . allSecrets . rawin ( clearedLevel )  ) game . allSecrets [ clearedLevel ] = true ; 
 
  if ( game . enemies >= game . maxEnemies &&  ! game . allEnemies . rawin ( clearedLevel )  ) game . allEnemies [ clearedLevel ] = true ; 
 
  if (  ! game . bestTime . rawin ( clearedLevel )  ) game . bestTime [ clearedLevel ] = gvIGT ; 
 
  else  if ( game . bestTime [ clearedLevel ]  > gvIGT ) game . bestTime [ clearedLevel ] = gvIGT ; 
 
  
  if (  ! game . bestTime . rawin ( clearedLevel + "-" + game . playerChar )  ) game . bestTime [ clearedLevel + "-" + game . playerChar ] = gvIGT ; 
 
  else  if ( game . bestTime [ clearedLevel + "-" + game . playerChar ]  > gvIGT ) game . bestTime [ clearedLevel + "-" + game . playerChar ] = gvIGT ; 
 
  
  if (  ! game . bestCoins . rawin ( clearedLevel )  ) game . bestCoins [ clearedLevel ] = game . levelCoins ; 
 
  else  if ( game . bestCoins [ clearedLevel ]  < game . levelCoins ) game . bestCoins [ clearedLevel ] = game . levelCoins ; 
 
  
  if (  ! game . bestSecrets . rawin ( clearedLevel )  ) game . bestSecrets [ clearedLevel ] = game . secrets ; 
 
  else  if ( game . bestSecrets [ clearedLevel ]  < game . secrets ) game . bestSecrets [ clearedLevel ] = game . secrets ; 
 
  
  if (  ! game . bestEnemies . rawin ( clearedLevel )  ) game . bestEnemies [ clearedLevel ] = game . enemies ; 
 
  else  if ( game . bestEnemies [ clearedLevel ]  < game . enemies ) game . bestEnemies [ clearedLevel ] = game . enemies ; 
 
  
 game . coins += game . levelCoins ; 
playSound ( sndWin , 0 )  ; 
stopMusic (  )  ; 
levelEndRunner = newActor ( LevelEnder , 0 , 0 )  ; 
saveGame (  )  ; 
 } 
  
  }  ; 



}; 
