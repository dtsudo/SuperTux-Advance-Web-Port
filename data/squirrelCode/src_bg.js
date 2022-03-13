if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/bg.nut'] = function () { 


drawBG = 0 ; 
dbgNone =  function (  ) { setDrawColor ( 0xff )  ; 
drawRec ( 0 , 0 , screenW (  )  , screenH (  )  , true )  ; 
 }  ; 
dbgEcho =  function (  ) { drawImage ( gvPlayScreen , camxprev - camx , camyprev - camy )  ; 
setDrawColor ( 0x20 )  ; 
drawRec ( 0 , 0 , screenW (  )  , screenH (  )  , true )  ; 
 }  ; 
dbgCave =  function (  ) {  for (  var i = 0 ;
 i < 5 ; i ++  )  { 
  for (  var j = 0 ;
 j < 5 ; j ++  )  { 
 drawSprite ( bgIridia , 0 ,  (  (  - camx / 8 )  % 100 )  +  ( i * 100 )  ,  (  (  - camy / 8 )  % 56 )  +  ( j * 56 )  )  ; 
 } 
  } 
  for (  var i = 0 ;
 i < 2 ; i ++  )  { 
  for (  var j = 0 ;
 j < 2 ; j ++  )  { 
 drawSprite ( bgCaveHoles , 0 ,  (  (  - camx / 4 )  % 400 )  +  ( i * 400 )  ,  (  (  - camy / 4 )  % 392 )  +  ( j * 392 )  )  ; 
 } 
  } 
  }  ; 
dbgForest =  function (  ) {  if ( gvMap != 0 )  { 
  for (  var i = 0 ;
 i < 2 ; i ++  ) drawSprite ( bgWoodedMountain , 0 ,  (  (  - camx / 8 )  % 640 )  +  ( i * 640 )  ,  ( screenH (  )  / 2 )  - 120 )  ; 
 for (  var i = 0 ;
 i < 4 ; i ++  ) drawSprite ( bgForest0 , 0 ,  (  (  - camx / 2 )  % 128 )  +  ( i * 128 )  , gvMap . h - camy - 180 )  ; 
 for (  var i = 0 ;
 i < 4 ; i ++  ) drawSprite ( bgForest1 , 0 ,  (  - camx % 128 )  +  ( i * 128 )  , gvMap . h - camy - 180 )  ; 
 } 
  
  else  { 
  for (  var i = 0 ;
 i < 2 ; i ++  ) drawSprite ( bgWoodedMountain , 0 ,  (  (  - camx / 8 )  % 640 )  +  ( i * 640 )  ,  ( screenH (  )  / 2 )  - 120 )  ; 
 for (  var i = 0 ;
 i < 4 ; i ++  ) drawSprite ( bgForest0 , 0 ,  (  (  - camx / 2 )  % 128 )  +  ( i * 128 )  , screenH (  )  - camy - 180 )  ; 
 for (  var i = 0 ;
 i < 4 ; i ++  ) drawSprite ( bgForest1 , 0 ,  (  - camx % 128 )  +  ( i * 128 )  , screenH (  )  - camy - 180 )  ; 
 } 
  
  }  ; 
dbgMountain =  function (  ) {  for (  var i = 0 ;
 i < 2 ; i ++  ) drawSprite ( bgWoodedMountain , 0 ,  (  (  - camx / 8 )  % 640 )  +  ( i * 640 )  ,  ( screenH (  )  / 2 )  - 120 )  ; 
 }  ; 
dbgAurora =  function (  ) {  for (  var i = 0 ;
 i < 2 ; i ++  )  { 
 drawSprite ( bgAurora , 0 ,  (  (  - camx / 8 )  % 720 )  +  ( i * 720 )  , screenH (  )  - 240 )  ; 
 } 
  }  ; 
dbgAuroraNight =  function (  ) {  for (  var i = 0 ;
 i < 2 ; i ++  )  { 
 drawSprite ( bgAuroraNight , 0 ,  (  (  - camx / 8 )  % 720 )  +  ( i * 720 )  , screenH (  )  - 240 )  ; 
 } 
  }  ; 
dbgIceForest =  function (  ) {  if ( gvMap != 0 )  { 
  for (  var i = 0 ;
 i < 2 ; i ++  ) drawSprite ( bgIceForest , 0 ,  (  (  - camx / 16 )  % 640 )  +  ( i * 640 )  , 0 )  ; 
 for (  var i = 0 ;
 i < 2 ; i ++  ) drawSprite ( bgIceForest2 , 0 ,  (  (  - camx / 8 )  % 480 )  +  ( i * 480 )  , gvMap . h - camy - 192 )  ; 
 for (  var i = 0 ;
 i < 2 ; i ++  ) drawSprite ( bgIceForest1 , 0 ,  (  (  - camx / 4 )  % 640 )  +  ( i * 640 )  , gvMap . h - camy - 256 )  ; 
 for (  var i = 0 ;
 i < 2 ; i ++  ) drawSprite ( bgIceForest0 , 0 ,  (  (  - camx / 2 )  % 800 )  +  ( i * 800 )  , gvMap . h - camy - 320 )  ; 
 } 
  
  else  { 
  for (  var i = 0 ;
 i < 2 ; i ++  ) drawSprite ( bgIceForest , 0 ,  (  (  - camx / 8 )  % 640 )  +  ( i * 640 )  ,  ( screenH (  )  / 2 )  - 120 )  ; 
 for (  var i = 0 ;
 i < 4 ; i ++  ) drawSprite ( bgForest0 , 0 ,  (  (  - camx / 2 )  % 128 )  +  ( i * 128 )  , screenH (  )  - camy - 180 )  ; 
 for (  var i = 0 ;
 i < 4 ; i ++  ) drawSprite ( bgForest1 , 0 ,  (  - camx % 128 )  +  ( i * 128 )  , screenH (  )  - camy - 180 )  ; 
 } 
  
  }  ; 
dbgSnowNight =  function (  ) {  for (  var i = 0 ;
 i < 2 ; i ++  )  { 
 drawSprite ( bgSnowNight , 0 ,  (  (  - camx / 8 )  % 800 )  +  ( i * 800 )  ,  ( screenH (  )  / 2 )  - 120 )  ; 
 } 
  }  ; 
dbgSnowPlain =  function (  ) {  for (  var i = 0 ;
 i < 2 ; i ++  )  { 
 drawSprite ( bgSnowPlain , 0 ,  (  (  - camx / 8 )  % 720 )  +  ( i * 720 )  ,  ( screenH (  )  / 2 )  - 120 )  ; 
 } 
  }  ; 
dbgRiverCity =  function (  ) {  for (  var i = 0 ;
 i < 2 ; i ++  )  { 
 drawSprite ( bgSnowNight , 0 ,  (  (  - camx / 8 )  % 380 )  +  ( i * 380 )  ,  ( screenH (  )  / 2 )  - 120 )  ; 
 } 
  }  ; 
dbgOcean =  function (  ) {  for (  var i = 0 ;
 i < 2 ; i ++  )  { 
 drawSprite ( bgOcean , 0 ,  (  (  - camx / 8 )  % 480 )  +  ( i * 480 )  ,  ( screenH (  )  / 2 )  - 120 )  ; 
 } 
  }  ; 
dbgStarSky =  function (  ) {  for (  var i = 0 ;
 i < 3 ; i ++  )  { 
 drawSprite ( bgStarSky , 0 ,  (  (  - camx / 16 )  % 240 )  +  ( i * 240 )  ,  ( screenH (  )  / 2 )  - 120 )  ; 
 } 
  }  ; 
dbgUnderwater =  function (  ) { drawSprite ( bgUnderwater , 0 , 0 ,  ( screenH (  )  / 2 )  - 120 )  ; 
 }  ; 
dbgCastle =  function (  ) { drawSprite ( bgCastle , 0 , 0 ,  ( screenH (  )  / 2 )  - 120 )  ; 
 }  ; 



}; 
