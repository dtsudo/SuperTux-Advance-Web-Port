if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


levelEndRunner = 0 ; 
LevelEnder =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . timer = 180 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( 0 , 0 )  ; 
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
gvPlayer . endmode = true ; 
 if ( gvPlayer . hspeed > 2 ) gvPlayer . hspeed = 2.0 ; 
 
 gvPlayer . invincible = 999 ; 
 if ( game . levelcoins >= game . maxcoins &&  ! game . allcoins . rawin ( gvMap . name )  ) game . allcoins [ gvMap . name ] = true ; 
 
  if ( game . secrets <= 0 &&  ! game . allsecrets . rawin ( gvMap . name )  ) game . allsecrets [ gvMap . name ] = true ; 
 
  if ( game . enemies <= 0 &&  ! game . allenemies . rawin ( gvMap . name )  ) game . allenemies [ gvMap . name ] = true ; 
 
 playSound ( sndWin , 0 )  ; 
stopMusic (  )  ; 
 if (  ! game . completed . rawin ( gvMap . name )  ) game . completed [ gvMap . name ] = true ; 
 
 levelEndRunner = newActor ( LevelEnder , 0 , 0 )  ; 
 if (  ! game . besttime . rawin ( gvMap . name )  ) game . besttime [ gvMap . name ] = gvIGT ; 
 
  else  if ( game . besttime [ gvMap . name ]  > gvIGT ) game . besttime [ gvMap . name ] = gvIGT ; 
 
  
 saveGame (  )  ; 
 } 
  
  }  ; 



});