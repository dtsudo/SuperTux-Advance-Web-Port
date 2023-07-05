if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/save.nut'] = function () { 


newGame =  function ( f ) {  var newdif = game . difficulty ;
 game = createNewGameObject (  )  ; 
game . file = f ; 
gvDoIGT = false ; 
game . difficulty = newdif ; 
 if ( game . difficulty > 1 ) game . maxHealth =  ( 4 - game . difficulty )  * 4 ; 
 
 startPlay ( "res/map/aurora-pennyton.json" , true , true )  ; 
 }  ; 
newTimeAttack =  function (  ) {  var path = game . path ;
  var newdif = game . difficulty ;
 game = createNewGameObject (  )  ; 
game . file =  - 1 ; 
gvDoIGT = true ; 
game . difficulty = newdif ; 
game . path = path ; 
 if ( game . difficulty > 1 ) game . maxHealth =  ( 4 - game . difficulty )  * 4 ; 
 
 startPlay ( game . path + gvTAStart + ".json" , true , true )  ; 
gvLight = 0xffffffff ; 
gvLightTarget = 0xffffffff ; 
drawWeather = 0 ; 
 }  ; 
saveGame =  function (  ) {  if ( game . file !=  - 1 ) fileWrite ( "save/" + game . file . tostring (  )  + ".json" , jsonWrite ( game )  )  ; 
 
  }  ; 
loadGame =  function ( f ) {  if ( fileExists ( "save/" + f . tostring (  )  + ".json" )  )  { 
 game = mergeTable ( createNewGameObject (  )  , jsonRead ( fileRead ( "save/" + f . tostring (  )  + ".json" )  )  )  ; 
 var foundMissing = true ;
  while ( foundMissing )  { 
 foundMissing = false ; 
 {     var foreachOutput1 = squirrelForEach( game . characters );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; key = foreachOutput1.getKey(); i = foreachOutput1.getValue();  { 
  if (  !  ( (getroottable (  ) [i . normal] !== undefined) )  )  { 
 foundMissing = true ; 
 } 
  
  } 
     }  }  } 
  
 startOverworld ( game . world )  ; 
 } 
  
  }  ; 
selectLoadGame =  function (  ) {  var hasSaveFiles = false ;
 meLoadGame =  [  ]  ; 
 var dir = lsdir ( "save" )  ;
 dir . sort (  )  ; 
 for (  var i = 0 ;
 i < dir . len (  )  ; i ++  )  { 
  var f = "" ;
  if ( dir [ i ]  != "." && i != ".." && dir [ i ]  != "delete.me" && dir [ i ]  . find ( ".json" )  == dir [ i ]  . len (  )  - 5 && canint ( dir [ i ]  )  ) f = dir [ i ]  . slice ( 0 ,  - 5 )  ; 
 
  else continue ; 
 
 hasSaveFiles = true ; 
 var o =  {  }  ;
 o . name =  (  function ( f ) {  return  function (  ) {  return "File " + f ;
  }  ;
  }  )  ( f )  ; 
o . func =  (  function ( f ) {  return  function (  ) { loadGame ( f )  ; 
 }  ;
  }  )  ( f )  ; 
meLoadGame . push ( o )  ; 
 } 
  if (  ! hasSaveFiles )  { 
 meLoadGame . push (  { name :  function (  ) {  return gvLangObj [ "load-game-menu" ]  [ "empty" ]  ;
  }  , disabled : true }  )  ; 
 } 
  
 meLoadGame . push (  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "cancel" ]  ;
  }  , func :  function (  ) { cursor = 1 ; 
menu = meMain ; 
 }  , back :  function (  ) { cursor = 1 ; 
menu = meMain ; 
 }  }  )  ; 
menu = meLoadGame ; 
 }  ; 



}; 
