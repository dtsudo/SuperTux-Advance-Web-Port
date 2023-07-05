if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/contriblevels.nut'] = function () { 


meContribLevels =  [  ]  ; 
lastLevelsCounted =  { "contribFolder" : null , "completed" : null , "total" : null , "percentage" : null }  ; 
selectContrib =  function (  ) { meContribLevels =  [  ]  ; 
 if ( fileExists ( "contrib" )  )  { 
  var contrib = lsdir ( "contrib" )  ;
  var contribFiltered =  [  ]  ;
  {     var foreachOutput1 = squirrelForEach( contrib );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; item = foreachOutput1.getValue();  { 
  if ( item != "azzy" && item != "osop-prequel" ) contribFiltered . push ( item )  ; 
 
  } 
     }  } contrib = contribFiltered ; 
 {     var foreachOutput2 = squirrelForEach( contrib );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; item = foreachOutput2.getValue();  { 
  if ( item != "." && item != ".." && isdir ( "contrib/" + item )  && fileExists ( "contrib/" + item + "/info.json" )  )  { 
  var data = jsonRead ( fileRead ( "contrib/" + item + "/info.json" )  )  ;
 meContribLevels . push (  { contribFolder : item , contribName : data [ "name" ]  , contribWorldmap : data [ "worldmap" ]  , name :  (  function ( x ) {  return  function (  ) {  return x ;
  }  ;
  }  )  ( data [ "name" ]  )  , func :  (  function ( contribFolder , contribWorldmap ) {  return  function (  ) { lastLevelsCounted =  { "contribFolder" : null , "completed" : null , "total" : null , "percentage" : null }  ; 
game = createNewGameObject (  )  ; 
game . file = contribFolder ; 
game . path = "contrib/" + contribFolder + "/" ; 
game . world = contribWorldmap ; 
 var searchDirExists = false ;
  for (  var i = 0 ;
 i < tileSearchDir . len (  )  ; i ++  )  { 
  if ( tileSearchDir [ i ]  == "contrib/" + contribFolder + "/gfx" ) searchDirExists = true ; 
 
  } 
  if (  ! searchDirExists ) tileSearchDir . push ( "contrib/" + contribFolder + "/gfx" )  ; 
 
 gvDoIGT = false ; 
 if ( fileExists ( "contrib/" + contribFolder + "/text.json" )  )  { 
 gvLangObj = mergeTable ( gvLangObj , jsonRead ( fileRead ( "contrib/" + contribFolder + "/text.json" )  )  )  ; 
print ( "Found text.json" )  ; 
 } 
  
  if ( fileExists ( "contrib/" + contribFolder + "/" + config . lang + ".json" )  )  { 
 gvLangObj = mergeTable ( gvLangObj , jsonRead ( fileRead ( "contrib/" + contribFolder + "/" + config . lang + ".json" )  )  )  ; 
print ( "Found text.json" )  ; 
 } 
  
  if ( fileExists ( "contrib/" + contribFolder + "/script.nut" )  )  if (  ! contribDidRun . rawin ( contribFolder )  )  { 
 donut ( "contrib/" + contribFolder + "/script.nut" )  ; 
contribDidRun [ contribFolder ] = true ; 
 } 
  
  
  if ( fileExists ( "save/" + contribFolder + ".json" )  ) loadGame ( contribFolder )  ; 
 
  else startOverworld ( "contrib/" + contribFolder + "/" + contribWorldmap )  ; 
 
  }  ;
  }  )  ( item , data [ "worldmap" ]  )  , desc :  (  function ( contribFolder , contribWorldmap ) {  return  function (  ) {  if ( lastLevelsCounted [ "contribFolder" ]  == contribFolder )  { 
  return "Progress: " + lastLevelsCounted [ "completed" ]  + "/" + lastLevelsCounted [ "total" ]  + " (" + lastLevelsCounted [ "percentage" ]  + "%)" ;
  } 
  
  var levels =  [  ]  ;
  var completedLevelsCount = 0 ;
  var contribWorldmapData = jsonRead ( fileRead ( "contrib/" + contribFolder + "/" + contribWorldmap )  )  ;
  var acttiles = null ;
  {     var foreachOutput3 = squirrelForEach( contribWorldmapData [ "tilesets" ]  );     while(true)     {        foreachOutput3.next();        if (foreachOutput3.isDone()) break; tile = foreachOutput3.getValue();  { 
  if ( tile [ "name" ]  == "actor" )  { 
 acttiles = tile [ "firstgid" ]  ; 
 break ;  } 
  
  } 
     }  }  if ( acttiles == null )  { 
 print ( "ERROR: Could not find actor tileset in worldmap!" )  ; 
 return "ERROR: Could not find actor tileset in worldmap!" ;
  } 
  
  {     var foreachOutput4 = squirrelForEach( contribWorldmapData [ "layers" ]  );     while(true)     {        foreachOutput4.next();        if (foreachOutput4.isDone()) break; layer = foreachOutput4.getValue();  { 
  if (  ! layer . rawin ( "objects" )  ) continue ; 
 
  {     var foreachOutput5 = squirrelForEach( layer [ "objects" ]  );     while(true)     {        foreachOutput5.next();        if (foreachOutput5.isDone()) break; obj = foreachOutput5.getValue();  { 
  if (  ! obj . rawin ( "gid" )  ) continue ; 
 
  if ( obj [ "gid" ]  == acttiles + 1 && obj [ "visible" ]  ) levels . push ( obj [ "name" ]  )  ; 
 
  } 
     }  }  } 
     }  }  if ( fileExists ( "save/" + contribFolder + ".json" )  )  { 
  var contribWorldmapSaveData = jsonRead ( fileRead ( "save/" + contribFolder + ".json" )  )  ;
  {     var foreachOutput6 = squirrelForEach( contribWorldmapSaveData [ "completed" ]  );     while(true)     {        foreachOutput6.next();        if (foreachOutput6.isDone()) break; level = foreachOutput6.getKey(); levelCompleted = foreachOutput6.getValue();  { 
  if ( levelCompleted )  { 
  var wasFound = false ;
  for (  var searchIndex = 0 ;
 searchIndex < levels . len (  )  ; searchIndex ++  )  { 
  if ( levels [ searchIndex ]  == level ) wasFound = true ; 
 
  } 
  if ( wasFound ) completedLevelsCount ++  ; 
 
  } 
  
  } 
     }  }  } 
  
  var percentage = 0 ;
  if ( levels . len (  )  > 0 ) percentage = floor ( completedLevelsCount * 100 / levels . len (  )  )  ; 
 
 lastLevelsCounted =  { "contribFolder" : contribFolder , "completed" : completedLevelsCount , "total" : levels . len (  )  , "percentage" : percentage }  ; 
 return "Progress: " + completedLevelsCount + "/" + levels . len (  )  + " (" + percentage + "%)" ;
  }  ;
  }  )  ( item , data [ "worldmap" ]  )  }  )  ; 
 } 
  
  } 
     }  }  } 
  
  if ( meContribLevels . len (  )  == 0 )  { 
 meContribLevels . push (  { name :  function (  ) {  return gvLangObj [ "contrib-menu" ]  [ "empty" ]  ;
  }  , disabled : true }  )  ; 
 } 
  
  else meContribLevels . sort (  function ( a , b ) {  if ( a . name (  )  > b . name (  )  )  return 1 ;
  
  if ( a . name (  )  < b . name (  )  )  return  - 1 ;
  
  return 0 ;
  }  )  ; 
 
 meContribLevels . push (  { name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "back" ]  ;
  }  , func :  function (  ) { menu = meMain ; 
cursor = 2 ; 
 }  , back :  function (  ) { menu = meMain ; 
cursor = 2 ; 
 }  }  )  ; 
menu = meContribLevels ; 
 }  ; 



}; 
