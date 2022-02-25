if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


newGame =  function ( f ) {  var newdif = game . difficulty ;
 game = clone ( gameDefault )  ; 
game . completed . clear (  )  ; 
game . allCoins . clear (  )  ; 
game . allEnemies . clear (  )  ; 
game . allSecrets . clear (  )  ; 
game . bestTime . clear (  )  ; 
game . file = f ; 
gvDoIGT = false ; 
game . difficulty = newdif ; 
 if ( game . difficulty > 1 ) game . maxHealth = 5 - game . difficulty ; 
 
 startPlay ( "res/map/0-t0.json" )  ; 
 }  ; 
saveGame =  function (  ) { fileWrite ( "save/" + game . file . tostring (  )  + ".json" , jsonWrite ( game )  )  ; 
 }  ; 
loadGame =  function ( f ) {  if ( fileExists ( "save/" + f . tostring (  )  + ".json" )  )  { 
 game = jsonRead ( fileRead ( "save/" + f . tostring (  )  + ".json" )  )  ; 
startOverworld ( game . world )  ; 
 } 
  
  }  ; 
selectLoadGame =  function (  ) { meLoadGame =  [  ]  ; 
 var dir = lsdir ( "save" )  ;
 dir . sort (  )  ; 
 for (  var i = 0 ;
 i < dir . len (  )  ; i ++  )  { 
  var f = "" ;
  if ( dir [ i ]  != "." && i != ".." && dir [ i ]  != "delete.me" && dir [ i ]  . find ( ".json" )  == dir [ i ]  . len (  )  - 5 && canint ( dir [ i ]  )  ) f = dir [ i ]  . slice ( 0 ,  - 5 )  ; 
 
  else continue ; 
 
  var o =  {  }  ;
 o . name =  (  function ( f ) {  return  function (  ) {  return "File " + f ;
  }  ;
  }  )  ( f )  ; 
o . func =  (  function ( f ) {  return  function (  ) { loadGame ( f )  ; 
 }  ;
  }  )  ( f )  ; 
meLoadGame . push ( o )  ; 
 } 
 meLoadGame . push (  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "cancel" ]  ;
  }  , func :  function (  ) { cursor = 1 ; 
menu = meMain ; 
 }  , back :  function (  ) { cursor = 1 ; 
menu = meMain ; 
 }  }  )  ; 
menu = meLoadGame ; 
 }  ; 



});