if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/achievements.nut'] = function () { 


meAchievements =  [  ]  ; 
gvAchievements =  { saveKonqi :  function (  ) {  if ( game . path != "res/map/" )  return false ;
  
  return game . characters . rawin ( "Konqi" )  ;
  }  , saveMidi :  function (  ) {  if ( game . path != "res/map/" )  return false ;
  
  return game . characters . rawin ( "Midi" )  ;
  }  , over9000 :  function (  ) {  if ( game . path != "res/map/" )  return false ;
  
  return game . coins > 9000 ;
  }  , coldGreed :  function (  ) {  if ( game . path != "res/map/" )  return false ;
  
  return  ( game . allCoins . rawin ( "aurora-learn" )  && game . allCoins . rawin ( "aurora-crystal" )  && game . allCoins . rawin ( "aurora-slip" )  && game . allCoins . rawin ( "aurora-subsea" )  && game . allCoins . rawin ( "aurora-tnt" )  && game . allCoins . rawin ( "aurora-sense" )  && game . allCoins . rawin ( "aurora-frozen" )  && game . allCoins . rawin ( "aurora-branches" )  && game . allCoins . rawin ( "aurora-bridge" )  && game . allCoins . rawin ( "aurora-wind" )  && game . allCoins . rawin ( "aurora-steps" )  && game . allCoins . rawin ( "aurora-fort" )  && game . allCoins . rawin ( "aurora-iceguy" )  && game . allCoins . rawin ( "aurora-fishy" )  && game . allCoins . rawin ( "aurora-forest" )  )  ;
  }  , arcticExplorer :  function (  ) {  if ( game . path != "res/map/" )  return false ;
  
  return  ( game . allSecrets . rawin ( "aurora-learn" )  && game . allSecrets . rawin ( "aurora-slip" )  && game . allSecrets . rawin ( "aurora-crystal" )  && game . allSecrets . rawin ( "aurora-subsea" )  && game . allSecrets . rawin ( "aurora-tnt" )  && game . allSecrets . rawin ( "aurora-sense" )  && game . allSecrets . rawin ( "aurora-frozen" )  && game . allSecrets . rawin ( "aurora-branches" )  && game . allSecrets . rawin ( "aurora-bridge" )  && game . allSecrets . rawin ( "aurora-wind" )  && game . allSecrets . rawin ( "aurora-steps" )  && game . allSecrets . rawin ( "aurora-fort" )  && game . allSecrets . rawin ( "aurora-iceguy" )  && game . allSecrets . rawin ( "aurora-fishy" )  && game . allSecrets . rawin ( "aurora-forest" )  )  ;
  }  , snowMoreBaddies :  function (  ) {  if ( game . path != "res/map/" )  return false ;
  
  return  ( game . allEnemies . rawin ( "aurora-learn" )  && game . allEnemies . rawin ( "aurora-slip" )  && game . allEnemies . rawin ( "aurora-crystal" )  && game . allEnemies . rawin ( "aurora-subsea" )  && game . allEnemies . rawin ( "aurora-tnt" )  && game . allEnemies . rawin ( "aurora-sense" )  && game . allEnemies . rawin ( "aurora-frozen" )  && game . allEnemies . rawin ( "aurora-branches" )  && game . allEnemies . rawin ( "aurora-bridge" )  && game . allEnemies . rawin ( "aurora-wind" )  && game . allEnemies . rawin ( "aurora-steps" )  && game . allEnemies . rawin ( "aurora-fort" )  && game . allEnemies . rawin ( "aurora-iceguy" )  && game . allEnemies . rawin ( "aurora-fishy" )  && game . allEnemies . rawin ( "aurora-forest" )  )  ;
  }  , blastOff :  function (  ) {  return gvPlayer && gvPlayer . y < 0 && gvPlayer . hspeed <=  - 10 ;
  }  }  ; 
gvUnlockedAchievements =  {  }  ; 
gvAchievementTimer = 0 ; 
checkAchievements =  function (  ) {  if ( gvAchievementTimer > 0 ) gvAchievementTimer --  ; 
 
  else  {     var foreachOutput1 = squirrelForEach( gvAchievements );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; key = foreachOutput1.getKey(); i = foreachOutput1.getValue();  { 
  if ( gvUnlockedAchievements . rawin ( key )  ) continue ; 
 
  if ( i (  )  )  { 
 gvUnlockedAchievements [ key ] = true ; 
newActor ( AchiNotice , 16 ,  - 16 , key )  ; 
popSound ( sndAchievement , 0 )  ; 
fileWrite ( "save/_achievements.json" , jsonWrite ( gvUnlockedAchievements )  )  ; 
gvAchievementTimer = 120 ; 
 break ;  } 
  
  } 
     }  }  
  }  ; 
selectAchievements =  function (  ) { meAchievements =  [  ]  ; 
 {     var foreachOutput2 = squirrelForEach( gvAchievements );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; key = foreachOutput2.getKey(); i = foreachOutput2.getValue();  { 
  var newKey = key ;
  if ( gvLangObj [ "achi-name" ]  . rawin ( newKey )  ) meAchievements . push (  { name :  (  function ( newKey ) {  return  function (  ) {  if ( gvUnlockedAchievements . rawin ( newKey )  )  return gvLangObj [ "achi-name" ]  [ newKey ]  ;
  
  else  return "????" ;
  
  }  ;
  }  )  ( newKey )  , func :  function (  ) {  }  , desc :  (  function ( newKey ) {  return  function (  ) {  if ( gvLangObj [ "achi-desc" ]  . rawin ( newKey )  )  return gvLangObj [ "achi-desc" ]  [ newKey ]  ;
  
  else  return "????" ;
  
  }  ;
  }  )  ( newKey )  , disabled :  ! gvUnlockedAchievements . rawin ( newKey )  }  )  ; 
 
  } 
     }  } meAchievements . sort (  function ( a , b ) {  if ( a . name (  )  > b . name (  )  || a . name (  )  [ 0 ]  == '?' )  return 1 ;
  
  if ( a . name (  )  < b . name (  )  )  return  - 1 ;
  
  return 0 ;
  }  )  ; 
meAchievements . push (  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "back" ]  ;
  }  , func :  function (  ) { menu = meExtras ; 
 }  , back :  function (  ) { menu = meExtras ; 
 }  }  )  ; 
menu = meAchievements ; 
 }  ; 
AchiNotice =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . persistent = true ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . timer = 60 ; 
 returnVal . name = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
name = _arr ; 
print ( "Got achievement: " + gvLangObj [ "achi-name" ]  [ name ]  )  ; 
 } ;  returnVal . run = function ( draw = false ) {  if ( draw )  { 
  var text = gvLangObj [ "achi-name" ]  [ name ]  ;
 drawSprite ( sprAchiFrame , 0 , x - 12 , y - 5 )  ; 
 for (  var i = 0 ;
 i < text . len (  )  ; i ++  ) drawSprite ( sprAchiFrame , 1 , x +  ( i * 8 )  , y - 5 )  ; 
drawSprite ( sprAchiFrame , 2 , x +  ( text . len (  )  * 8 )  , y - 5 )  ; 
drawText ( font2A , x , y , text )  ; 
 if ( y < 64 ) y +=  ( 80.0 - y )  / 24.0 ; 
 
  else  if ( timer > 0 ) timer --  ; 
 
  
  if ( timer == 0 ) hspeed += 0.1 ; 
 
 x += hspeed ; 
 if ( x > screenW (  )  ) deleteActor ( id )  ; 
 
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "AchiNotice" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . persistent = true ; 
 squirrelClassFunction . hspeed = 0.0 ; 
 squirrelClassFunction . timer = 60 ; 
 squirrelClassFunction . name = "" ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
drawAchievements =  function (  ) {  if ( actor . rawin ( "AchiNotice" )  )  {     var foreachOutput3 = squirrelForEach( actor [ "AchiNotice" ]  );     while(true)     {        foreachOutput3.next();        if (foreachOutput3.isDone()) break; i = foreachOutput3.getValue(); i . run ( true )  ; 
    }  }  
  }  ; 



}; 
