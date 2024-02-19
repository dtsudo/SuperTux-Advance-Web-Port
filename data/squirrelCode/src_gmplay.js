if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/gmplay.nut'] = function () { 


gvInfoBox = "" ; 
gvInfoLast = "" ; 
gvInfoStep = 0 ; 
gvLangObj = "" ; 
gvFadeInTime = 255 ; 
gvVoidFog = true ; 
gvCanWrap = false ; 
gvFoundItems =  {  }  ; 
gvYetFoundItems =  {  }  ; 
gvBarStats =  { health1 : 0.0 , mana1 : 0.0 , stamina1 : 0.0 , health2 : 0.0 , mana2 : 0.0 , stamina2 : 0.0 }  ; 
mapActor =  {  }  ; 
startPlay =  function ( level , newLevel = true , skipIntro = false ) {  if (  ! fileExists ( level )  )  return ; 
  
 setFPS ( 60 )  ; 
gvPlayer = false ; 
gvPlayer2 = false ; 
gvBoss = false ; 
gvExitTimer = 0.0 ; 
deleteAllActors (  )  ; 
 if ( newLevel )  { 
  if ( game . ps . health <= 0 || game . difficulty < 2 ) game . ps . health = game . maxHealth ; 
 
 game . ps . energy = game . ps . maxEnergy ; 
game . ps . stamina = game . ps . maxStamina ; 
 if ( game . ps2 . health <= 0 || game . difficulty < 2 ) game . ps2 . health = game . maxHealth ; 
 
 game . ps2 . energy = game . ps2 . maxEnergy ; 
game . ps2 . stamina = game . ps2 . maxStamina ; 
game . levelCoins = 0 ; 
game . maxCoins = 0 ; 
game . redCoins = 0 ; 
game . maxRedCoins = 0 ; 
game . secrets = 0 ; 
game . maxSecrets = 0 ; 
game . enemies = 0 ; 
game . maxEnemies = 0 ; 
gvInfoBox = "" ; 
gvLastSong = "" ; 
gfxReset (  )  ; 
gvFadeInTime = 255 ; 
gvNextLevel = "" ; 
gvVoidFog = true ; 
gvCanWrap = false ; 
 } 
  
 gvWarning = 200 ; 
autocon =  window.clone(  ( defAutocon ) )  ; 
gvAutoCon = false ; 
 if ( gvMap != 0 ) gvMap . del (  )  ; 
 
 gvMap = Tilemap ( level )  ; 
gvHorizon = gvMap . h ; 
 if (  ! game . check )  { 
 gvKeyCopper = false ; 
gvKeySilver = false ; 
gvKeyGold = false ; 
gvKeyMythril = false ; 
gvYetFoundItems . clear (  )  ; 
gvFoundItems . clear (  )  ; 
ghostRecordName = gvMap . name + "." + game . playerChar + ".gst" ; 
 if ( game . path == "res/map/" ) ghostRecordOld = loadGhostFile ( "ghosts/" + ghostRecordName )  ; 
 
  else ghostRecordOld = loadGhostFile ( "ghosts/" + game . path + ghostRecordName )  ; 
 
 ghostRecordNew =  [  ]  ; 
 } 
  
  var actset =  - 1 ;
  var tilef = 0 ;
  var actnum =  - 1 ;
  for (  var i = 0 ;
 i < gvMap . tileset . len (  )  ; i ++  )  { 
  if ( spriteName ( gvMap . tileset [ i ]  )  == "actors.png" )  { 
 actset = gvMap . tileset [ i ]  ; 
tilef = gvMap . tilef [ i ]  ; 
actnum = i ; 
 break ;  } 
  
  } 
  if ( actset ==  - 1 )  { 
 print ( "Map does not use actors.png. No actors to load." )  ; 
 return ; 
  } 
  
  var actlayer =  - 1 ;
  {     var foreachOutput1 = squirrelForEach( gvMap . data . layers );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  { 
  if ( i [ "type" ]  == "objectgroup" && i [ "name" ]  == "actor" )  { 
 actlayer = i ; 
 break ;  } 
  
  } 
     }  }  if ( actlayer ==  - 1 )  { 
 print ( "Map does not have an actor layer. No actors to load." )  ; 
 return ; 
  } 
  
  {     var foreachOutput2 = squirrelForEach( actlayer . objects );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; i = foreachOutput2.getValue();  { 
  if ( i . rawin ( "gid" )  )  { 
  var n = i . gid - tilef ;
  var c = 0 ;
  switch ( spriteName ( gvMap . tileset [ actnum ]  )  )  {  case "actors.png" : c = createPlatformActors ( n , i , c )  ; 
 break ;  case "raceactors.png" : c = createRacerActors ( n , i , c )  ; 
 break ;  }  if (  squirrelTypeOf ( c )  == "integer" ) mapActor [ i . id ] = c ; 
 
  else mapActor [ i . id ] = c . id ; 
 
  if (  ( (actor[ ( mapActor [ i . id ]  ) ] !== undefined) )  )  switch (  squirrelTypeOf ( actor [ mapActor [ i . id ]  ] )  )  {  case "WoodBlock" :  case "BrickBlock" :  case "Coin" :  case "Coin5" :  case "Coin10" :  case "Herring" : gvYetFoundItems [ i . id ] = actor [ mapActor [ i . id ]  ]  . id ; 
 break ;  case "ItemBlock" :  if ( actor [ mapActor [ i . id ]  ]  . item == 0 ) gvYetFoundItems [ i . id ] = actor [ mapActor [ i . id ]  ]  . id ; 
 
  break ;  }  
  } 
  
  if (  ! i . rawin ( "polygon" )  &&  ! i . rawin ( "polyline" )  &&  ! i . rawin ( "ellipse" )  &&  ! i . rawin ( "point" )  &&  ! i . rawin ( "gid" )  )  if ( i . name != "" )  { 
  var c = 0 ;
  var arg = split ( i . name , "," )  ;
  var n = arg [ 0 ]  ;
 arg . remove ( 0 )  ; 
 if ( arg . len (  )  == 1 ) arg = arg [ 0 ]  ; 
 
  else  if ( arg . len (  )  == 0 ) arg = null ; 
 
  
  if ( getroottable (  )  . rawin ( n )  )  if (  squirrelTypeOf ( getroottable ( ) [ n ] )  == "class" )  { 
 print ( i . x + " - " + i . y )  ; 
c = newActor ( getroottable (  )  [ n ]  , i . x +  ( i . width / 2.0 )  , i . y +  ( i . height / 2.0 )  , arg )  ; 
actor [ c ]  . w = i . width / 2.0 ; 
actor [ c ]  . h = i . height / 2.0 ; 
mapActor [ i . id ] = c ; 
 } 
  
  
  } 
  
  
  if ( i . rawin ( "polygon" )  )  if ( i . name != "" )  { 
  var arg = split ( i . name , "," )  ;
  var n = arg [ 0 ]  ;
  if ( getroottable (  )  . rawin ( n )  )  { 
  var poly =  [  ]  ;
  for (  var j = 0 ;
 j <= i . polygon . len (  )  ; j ++  )  { 
  if ( j == i . polygon . len (  )  ) poly . push (  [ i . x + i . polygon [ 0 ]  . x , i . y + i . polygon [ 0 ]  . y ]  )  ; 
 
  else poly . push (  [ i . x + i . polygon [ j ]  . x , i . y + i . polygon [ j ]  . y ]  )  ; 
 
  } 
 arg [ 0 ] = poly ; 
 var c ;
  if ( getroottable (  )  . rawin ( n )  )  if (  squirrelTypeOf ( getroottable ( ) [ n ] )  == "class" )  { 
 c = newActor ( getroottable (  )  [ n ]  , i . x , i . y , arg )  ; 
mapActor [ i . id ] = c ; 
 } 
  
  
  } 
  
  } 
  
  
  if ( i . rawin ( "polyline" )  )  if ( i . name != "" )  { 
  var arg = split ( i . name , "," )  ;
  var n = arg [ 0 ]  ;
  if ( getroottable (  )  . rawin ( n )  )  { 
  var poly =  [  ]  ;
  for (  var j = 0 ;
 j < i . polyline . len (  )  ; j ++  ) poly . push (  [ i . x + i . polyline [ j ]  . x , i . y + i . polyline [ j ]  . y ]  )  ; 
arg [ 0 ] = poly ; 
 var c ;
  if ( getroottable (  )  . rawin ( n )  )  if (  squirrelTypeOf ( getroottable ( ) [ n ] )  == "class" )  { 
 c = newActor ( getroottable (  )  [ n ]  , i . x , i . y , arg )  ; 
mapActor [ i . id ] = c ; 
 } 
  
  
  } 
  
  } 
  
  
  } 
     }  }  if ( game . hasSulphur )  { 
  if (  ( (actor[ ( "SulphurNimbus" ) ] !== undefined) )  )  { 
  var sulphurList =  [  ]  ;
  {     var foreachOutput3 = squirrelForEach( actor [ "SulphurNimbus" ]  );     while(true)     {        foreachOutput3.next();        if (foreachOutput3.isDone()) break; i = foreachOutput3.getValue(); sulphurList . push ( i . id )  ; 
    }  }  for (  var j = 0 ;
 j < sulphurList . len (  )  ; j ++  ) deleteActor ( sulphurList [ j ]  )  ; 
 } 
  
  if ( gvPlayer )  { 
  var c = actor [ newActor ( SulphurNimbus , gvPlayer . x , gvPlayer . y - 32 )  ]  ;
 c . freed = game . hasSulphur ; 
 } 
  
  } 
  
  if ( game . check )  {     var foreachOutput4 = squirrelForEach( gvFoundItems );     while(true)     {        foreachOutput4.next();        if (foreachOutput4.isDone()) break; k = foreachOutput4.getKey(); i = foreachOutput4.getValue();  { 
 print (  squirrelTypeOf ( actor [ mapActor [ k ]  ] )  )  ; 
 if (  ( (mapActor[ ( k ) ] !== undefined) )  &&  ( (actor[ ( mapActor [ k ]  ) ] !== undefined) )  )  switch ( i )  {  case "ItemBlock" :  if ( actor [ mapActor [ k ]  ]  . item != 0 )  break ;  
 actor [ mapActor [ k ]  ]  . full = false ; 
game . levelCoins ++  ; 
 break ;  case "Coin" : deleteActor ( mapActor [ k ]  )  ; 
game . levelCoins ++  ; 
 break ;  case "Coin5" : deleteActor ( mapActor [ k ]  )  ; 
game . levelCoins += 5 ; 
 break ;  case "Coin10" : deleteActor ( mapActor [ k ]  )  ; 
game . levelCoins += 10 ; 
 break ;  case "WoodBlock" :  case "BrickBlock" : game . levelCoins += actor [ mapActor [ k ]  ]  . coins ; 
actor [ mapActor [ k ]  ]  . coins = 0 ; 
 break ;  case "Herring" : game . redCoins ++  ; 
deleteActor ( mapActor [ k ]  )  ; 
 break ;  }  
  } 
     }  }  
  for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "objectgroup" )  { 
  var lana = gvMap . data . layers [ i ]  . name ;
  for (  var j = 0 ;
 j < gvMap . data . layers [ i ]  . objects . len (  )  ; j ++  )  { 
  var obj = gvMap . data . layers [ i ]  . objects [ j ]  ;
  switch ( lana )  {  case "trigger" :  if (  ( (obj[ ( "polyline" ) ] !== undefined) )  ||  ( (obj[ ( "polygon" ) ] !== undefined) )  ||  ( (obj[ ( "ellipse" ) ] !== undefined) )  )  break ;  
  var c = newActor ( Trigger , obj . x +  ( obj . width / 2 )  , obj . y +  ( obj . height / 2 )  )  ;
 actor [ c ]  . shape = Rec ( obj . x +  ( obj . width / 2 )  , obj . y +  ( obj . height / 2 )  , obj . width / 2 , obj . height / 2 , 0 )  ; 
actor [ c ]  . code = obj . name ; 
actor [ c ]  . w = obj . width / 2 ; 
actor [ c ]  . h = obj . height / 2 ; 
 break ;  case "water" :  if (  ( (obj[ ( "polyline" ) ] !== undefined) )  ||  ( (obj[ ( "polygon" ) ] !== undefined) )  ||  ( (obj[ ( "ellipse" ) ] !== undefined) )  )  break ;  
  var c = newActor ( Water , obj . x +  ( obj . width / 2 )  , obj . y +  ( obj . height / 2 )  , obj . name )  ;
 actor [ c ]  . shape = Rec ( obj . x +  ( obj . width / 2 )  , obj . y +  ( obj . height / 2 )  , obj . width / 2 ,  ( obj . height / 2 )  - 4 , 5 )  ; 
 break ;  case "secret" :  if (  ( (obj[ ( "polyline" ) ] !== undefined) )  ||  ( (obj[ ( "polygon" ) ] !== undefined) )  ||  ( (obj[ ( "ellipse" ) ] !== undefined) )  )  break ;  
  var c = actor [ newActor ( SecretWall , obj . x , obj . y , obj . name )  ]  ;
 c . dw = obj . width / 16 ; 
c . dh = obj . height / 16 ; 
c . shape = Rec ( c . x +  ( c . dw * 8 )  , c . y +  ( c . dh * 8 )  ,  - 4 +  ( c . dw * 8 )  ,  - 4 +  ( c . dh * 8 )  , 5 )  ; 
 break ;  }  } 
  } 
  
  } 
  for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "objectgroup" )  { 
  var lana = gvMap . data . layers [ i ]  . name ;
  for (  var j = 0 ;
 j < gvMap . data . layers [ i ]  . objects . len (  )  ; j ++  )  { 
  var obj = gvMap . data . layers [ i ]  . objects [ j ]  ;
  switch ( lana )  {  case "secret" :  if (  !  (  ( (obj[ ( "polyline" ) ] !== undefined) )  ||  ( (obj[ ( "polygon" ) ] !== undefined) )  )  )  break ;  
  var poly =  [  ]  ;
  if (  ( (obj[ ( "polyline" ) ] !== undefined) )  )  for (  var jj = 0 ;
 jj < obj . polyline . len (  )  ; jj ++  ) poly . push (  [ obj . x + obj . polyline [ jj ]  . x , obj . y + obj . polyline [ jj ]  . y ]  )  ; 
 
  else  for (  var jj = 0 ;
 jj < obj . polygon . len (  )  ; jj ++  ) poly . push (  [ obj . x + obj . polygon [ jj ]  . x , obj . y + obj . polygon [ jj ]  . y ]  )  ; 
 
  var c = newActor ( SecretJoiner , obj . x , obj . y , poly )  ;
 mapActor [ obj . id ] = c ; 
 break ;  }  } 
  } 
  
  } 
  if ( gvPlayer )  { 
 camx0 = gvPlayer . x -  ( gvScreenW / 2 )  ; 
camy0 = gvPlayer . y -  ( gvScreenH / 2 )  ; 
 } 
  
  else  { 
 camx0 = 0 ; 
camy0 = 0 ; 
 } 
  
 print ( "Running level code..." )  ; 
 if ( gvMap . data . rawin ( "properties" )  )  {     var foreachOutput5 = squirrelForEach( gvMap . data . properties );     while(true)     {        foreachOutput5.next();        if (foreachOutput5.isDone()) break; i = foreachOutput5.getValue();  { 
  if ( i . name == "code" ) dostr ( i . value )  ; 
 
  if ( i . name == "author" ) gvMap . author = i . value ; 
 
  } 
     }  }  
 print ( "End level code" )  ; 
drawBG2 = drawBG ; 
drawWeather2 = drawWeather ; 
gvLightTarget2 = gvLightTarget ; 
gvLight = gvLightTarget ; 
gvLight2 = gvLightTarget2 ; 
setDrawTarget ( bgPause )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
 if ( newLevel )  { 
 setDrawColor ( 0x000000ff )  ; 
 for (  var i = 0.0 ;
 i <= 100 ; i += 4.0 )  { 
 setDrawTarget ( gvScreen )  ; 
drawImage ( bgPause , 0 , 0 )  ; 
 var di = i / 100.0 ;
  var dx =  ( 1.0 / 240.0 )  * gvScreenW . tofloat (  )  ;
  var dy =  ( 1.0 / 240.0 )  * gvScreenH . tofloat (  )  ;
  if ( config . light && gvGameMode == gmOverworld ) drawAmbientLight (  )  ; 
 
 drawSprite ( sprIris , 0 , gvScreenW / 2 , gvScreenH / 2 , 0 , 0 , dx *  ( 1.0 - di )  , dy *  ( 1.0 - di )  )  ; 
drawRec ( 0 , 0 , gvScreenW *  ( di / 2.0 )  , gvScreenH , true )  ; 
drawRec ( gvScreenW , 0 ,  -  ( gvScreenW *  ( di / 2.0 )  )  - 2 , gvScreenH , true )  ; 
drawRec ( 0 , 0 , gvScreenW , gvScreenH *  ( di / 2.0 )  , true )  ; 
drawRec ( 0 , gvScreenH , gvScreenW ,  -  ( gvScreenH *  ( di / 2.0 )  )  - 2 , true )  ; 
resetDrawTarget (  )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
update (  )  ; 
 if ( getcon ( "pause" , "press" )  )  break ;  
  } 
 gvFadeInTime = 255 ; 
 } 
  
  if ( skipIntro ) gvGameMode = gmPlay ; 
 
  else gvGameMode = gmLevelStart ; 
 
  }  ; 
gmLevelStart =  function (  ) { setDrawTarget ( gvScreen )  ; 
setDrawColor ( 0x000000ff )  ; 
drawRec ( 0 , 0 , gvScreenW , gvScreenH , true )  ; 
 if ( gvLangObj [ "level" ]  . rawin ( gvMap . name )  ) drawText ( font2 ,  ( gvScreenW / 2 )  -  ( gvLangObj [ "level" ]  [ gvMap . name ]  . len (  )  * 4 )  , 8 , gvLangObj [ "level" ]  [ gvMap . name ]  )  ; 
 
  var charx = 0 ;
  if ( game . playerChar2 != 0 && game . playerChar2 != "" )  { 
 charx = 32 ; 
 var runAnim = getroottable (  )  [ game . playerChar2 ]  . an [ "run" ]  ;
  switch ( game . ps2 . weapon )  {  case "normal" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar2 ]  [ "normal" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  ,  ( gvScreenW / 2 )  - charx , gvScreenH / 2 )  ; 
 break ;  case "fire" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar2 ]  [ "fire" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  ,  ( gvScreenW / 2 )  - charx , gvScreenH / 2 )  ; 
 break ;  case "ice" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar2 ]  [ "ice" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  ,  ( gvScreenW / 2 )  - charx , gvScreenH / 2 )  ; 
 break ;  case "air" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar2 ]  [ "air" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  ,  ( gvScreenW / 2 )  - charx , gvScreenH / 2 )  ; 
 break ;  case "earth" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar2 ]  [ "earth" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  ,  ( gvScreenW / 2 )  - charx , gvScreenH / 2 )  ; 
 break ;  case "shock" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar2 ]  [ "shock" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  ,  ( gvScreenW / 2 )  - charx , gvScreenH / 2 )  ; 
 break ;  case "water" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar2 ]  [ "water" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  ,  ( gvScreenW / 2 )  - charx , gvScreenH / 2 )  ; 
 break ;  default : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar2 ]  [ "normal" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  ,  ( gvScreenW / 2 )  - charx , gvScreenH / 2 )  ; 
 }  } 
  
  var runAnim = getroottable (  )  [ game . playerChar ]  . an [ "run" ]  ;
  switch ( game . ps . weapon )  {  case "normal" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar ]  [ "normal" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , charx + gvScreenW / 2 , gvScreenH / 2 )  ; 
 break ;  case "fire" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar ]  [ "fire" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , charx + gvScreenW / 2 , gvScreenH / 2 )  ; 
 break ;  case "ice" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar ]  [ "ice" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , charx + gvScreenW / 2 , gvScreenH / 2 )  ; 
 break ;  case "air" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar ]  [ "air" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , charx + gvScreenW / 2 , gvScreenH / 2 )  ; 
 break ;  case "earth" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar ]  [ "earth" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , charx + gvScreenW / 2 , gvScreenH / 2 )  ; 
 break ;  case "shock" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar ]  [ "shock" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , charx + gvScreenW / 2 , gvScreenH / 2 )  ; 
 break ;  case "water" : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar ]  [ "water" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , charx + gvScreenW / 2 , gvScreenH / 2 )  ; 
 break ;  default : drawSprite ( getroottable (  )  [ gvCharacters [ game . playerChar ]  [ "normal" ]  ]  , runAnim [ floor ( getFrames (  )  / 4 )  % runAnim . len (  )  ]  , charx + gvScreenW / 2 , gvScreenH / 2 )  ; 
 }  if ( game . hasSulphur )  { 
  if ( game . playerChar2 != 0 && game . playerChar2 != "" ) drawSprite ( sprSulphurNimbus , SulphurNimbus . an [ "fly" ]  [ wrap ( floor ( getFrames (  )  / 4 )  , 0 , 7 )  ]  ,  ( game . hasSulphur == 1 ? charx :  - charx )  + gvScreenW / 2 , gvScreenH / 2 - 32 )  ; 
 
  else drawSprite ( sprSulphurNimbus , SulphurNimbus . an [ "fly" ]  [ wrap ( floor ( getFrames (  )  / 4 )  , 0 , 7 )  ]  , gvScreenW / 2 , gvScreenH / 2 - 32 )  ; 
 
  } 
  
  var author = gvLangObj [ "stats" ]  [ "author" ]  + ": " + gvMap . author ;
 drawText ( font ,  ( gvScreenW / 2 )  - author . len (  )  * 3 , gvScreenH - 64 , author )  ; 
 var bt = gvLangObj [ "stats" ]  [ "time" ]  + ": " ;
  if ( game . bestTime . rawin ( gvMap . name + "-" + game . playerChar )  ) bt += formatTime ( game . bestTime [ gvMap . name + "-" + game . playerChar ]  )  ; 
 
  else bt += "0:00.00" ; 
 
 bt += " (" + gvCharacters [ game . playerChar ]  . shortname + ")" ; 
drawText ( font ,  ( gvScreenW / 2 )  - bt . len (  )  * 3 , gvScreenH - 56 , bt )  ; 
 var bc = gvLangObj [ "stats" ]  [ "coins" ]  + ": " ;
  if ( game . bestCoins . rawin ( gvMap . name )  ) bc += game . bestCoins [ gvMap . name ]  + " / " + game . maxCoins ; 
 
  else bc += "0 / " + game . maxCoins ; 
 
 drawText ( font ,  ( gvScreenW / 2 )  - bc . len (  )  * 3 , gvScreenH - 48 , bc )  ; 
 var be = gvLangObj [ "stats" ]  [ "enemies" ]  + ": " ;
  if ( game . bestEnemies . rawin ( gvMap . name )  ) be += game . bestEnemies [ gvMap . name ]  + " / " + game . maxEnemies ; 
 
  else be += "0 / " + game . maxEnemies ; 
 
 drawText ( font ,  ( gvScreenW / 2 )  - be . len (  )  * 3 , gvScreenH - 40 , be )  ; 
 var bs = gvLangObj [ "stats" ]  [ "secrets" ]  + ": " ;
  if ( game . bestSecrets . rawin ( gvMap . name )  ) bs += game . bestSecrets [ gvMap . name ]  + " / " + game . maxSecrets ; 
 
  else bs += "0 / " + game . maxSecrets ; 
 
 drawText ( font ,  ( gvScreenW / 2 )  - bs . len (  )  * 3 , gvScreenH - 32 , bs )  ; 
resetDrawTarget (  )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
 if ( getcon ( "jump" , "press" )  || getcon ( "shoot" , "press" )  || getcon ( "pause" , "press" )  || getcon ( "accept" , "press" )  ) gvGameMode = gmPlay ; 
 
  }  ; 
gmPlay =  function (  ) {  if ( gvExitTimer > 0 ) gvExitTimer -= 0.5 ; 
 
  if ( gvExitTimer < 0 ) gvExitTimer = 0 ; 
 
  if ( gvExitTimer > 30 &&  ! gvTimeAttack ) startOverworld ( game . world )  ; 
 
 updateCamera (  )  ; 
runActors (  )  ; 
 if (  ( (gvMap . data[ ( "properties" ) ] !== undefined) )  )  {     var foreachOutput6 = squirrelForEach( gvMap . data . properties );     while(true)     {        foreachOutput6.next();        if (foreachOutput6.isDone()) break; i = foreachOutput6.getValue();  { 
  if ( i . name == "run" ) dostr ( i . value )  ; 
 
  } 
     }  }  
  if ( gvPlayer && levelEndRunner == 0 ) ghostRecordNew . push (  [ int ( gvPlayer . x )  , int ( gvPlayer . y )  ]  )  ; 
 
  if ( gvSplitScreen )  { 
 camx = camx1 ; 
camy = camy1 ; 
 } 
  
  else  { 
 camx = camx0 ; 
camy = camy0 ; 
 } 
  
 gvLightScreen = gvLightScreen1 ; 
setDrawTarget ( gvPlayScreen )  ; 
runAmbientLight (  )  ; 
gvLightBG = false ; 
 if ( drawBG != 0 ) drawBG (  )  ; 
 
 camxprev = camx ; 
camyprev = camy ; 
setDrawTarget ( gvTempScreen )  ; 
setDrawColor ( 0 )  ; 
clearScreen (  )  ; 
 if ( gvLightBG ) drawImage ( gvPlayScreen , 0 , 0 )  ; 
 
  if ( drawWeather != 0 && config . weather ) drawWeather (  )  ; 
 
 gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  - 3 , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "bg" )  ; 
gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  - 3 , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "mg" )  ; 
 if ( gvMap . name != "shop" && gvVoidFog )  for (  var i = 0 ;
 i <  ( gvScreenW / 16 )  + 1 ; i ++  )  { 
 drawSprite ( sprVoid , 0 , 0 +  ( i * 16 )  , gvMap . h - 32 - camy )  ; 
 } 
  
  {     var foreachOutput7 = squirrelForEach( actor );     while(true)     {        foreachOutput7.next();        if (foreachOutput7.isDone()) break; i = foreachOutput7.getValue();  if (  ( (i[ ( "draw" ) ] !== undefined) )  &&  squirrelTypeOf ( i . draw )  == "function" &&  squirrelTypeOf ( i )  != "Water" ) i . draw (  )  ; 
 
     }  } drawZList ( 8 )  ; 
 if ( actor . rawin ( "Water" )  )  {     var foreachOutput8 = squirrelForEach( actor [ "Water" ]  );     while(true)     {        foreachOutput8.next();        if (foreachOutput8.isDone()) break; i = foreachOutput8.getValue();  { 
 i . draw (  )  ; 
 } 
     }  }  
 drawAmbientLight (  )  ; 
 if ( config . light ) gvMap . drawTilesMod ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  - 3 , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "fg" , 1 , 1 , 1 , gvLight )  ; 
 
  else gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  - 3 , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "fg" )  ; 
 
  if ( actor . rawin ( "SecretWall" )  )  {     var foreachOutput9 = squirrelForEach( actor [ "SecretWall" ]  );     while(true)     {        foreachOutput9.next();        if (foreachOutput9.isDone()) break; i = foreachOutput9.getValue();  { 
 i . draw (  )  ; 
 } 
     }  }  
  if ( actor . rawin ( "SecretJoiner" )  )  {     var foreachOutput10 = squirrelForEach( actor [ "SecretJoiner" ]  );     while(true)     {        foreachOutput10.next();        if (foreachOutput10.isDone()) break; i = foreachOutput10.getValue();  { 
 i . draw (  )  ; 
 } 
     }  }  
  if ( debug ) gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "solid" )  ; 
 
 drawHudList (  )  ; 
setDrawTarget ( gvPlayScreen )  ; 
drawImage ( gvTempScreen , 0 , 0 )  ; 
 if ( gvSplitScreen )  { 
 camx = camx2 ; 
camy = camy2 ; 
gvLightScreen = gvLightScreen2 ; 
setDrawTarget ( gvPlayScreen2 )  ; 
runAmbientLight ( true )  ; 
gvLightBG = false ; 
 if ( drawBG2 != 0 ) drawBG2 (  )  ; 
 
 camxprev = camx ; 
camyprev = camy ; 
setDrawTarget ( gvTempScreen )  ; 
setDrawColor ( 0 )  ; 
clearScreen (  )  ; 
 if ( gvLightBG ) drawImage ( gvPlayScreen2 , 0 , 0 )  ; 
 
  if ( drawWeather2 != 0 && config . weather ) drawWeather2 (  )  ; 
 
 gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  - 3 , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "bg" )  ; 
gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  - 3 , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "mg" )  ; 
 if ( gvMap . name != "shop" && gvVoidFog )  for (  var i = 0 ;
 i <  ( gvScreenW / 16 )  + 1 ; i ++  )  { 
 drawSprite ( sprVoid , 0 , 0 +  ( i * 16 )  , gvMap . h - 32 - camy )  ; 
 } 
  
  {     var foreachOutput11 = squirrelForEach( actor );     while(true)     {        foreachOutput11.next();        if (foreachOutput11.isDone()) break; i = foreachOutput11.getValue();  if (  ( (i[ ( "draw" ) ] !== undefined) )  &&  squirrelTypeOf ( i . draw )  == "function" &&  squirrelTypeOf ( i )  != "Water" ) i . draw (  )  ; 
 
     }  } drawZList ( 8 )  ; 
 if ( actor . rawin ( "Water" )  )  {     var foreachOutput12 = squirrelForEach( actor [ "Water" ]  );     while(true)     {        foreachOutput12.next();        if (foreachOutput12.isDone()) break; i = foreachOutput12.getValue();  { 
 i . draw (  )  ; 
 } 
     }  }  
 drawAmbientLight ( true )  ; 
 if ( config . light ) gvMap . drawTilesMod ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  - 3 , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "fg" , 1 , 1 , 1 , gvLight2 )  ; 
 
  else gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  - 3 , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "fg" )  ; 
 
  if ( actor . rawin ( "SecretWall" )  )  {     var foreachOutput13 = squirrelForEach( actor [ "SecretWall" ]  );     while(true)     {        foreachOutput13.next();        if (foreachOutput13.isDone()) break; i = foreachOutput13.getValue();  { 
 i . draw (  )  ; 
 } 
     }  }  
  if ( actor . rawin ( "SecretJoiner" )  )  {     var foreachOutput14 = squirrelForEach( actor [ "SecretJoiner" ]  );     while(true)     {        foreachOutput14.next();        if (foreachOutput14.isDone()) break; i = foreachOutput14.getValue();  { 
 i . draw (  )  ; 
 } 
     }  }  
  if ( debug ) gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , floor ( camx / 16 )  , floor ( camy / 16 )  ,  ( gvScreenW / 16 )  + 5 ,  ( gvScreenH / 16 )  + 2 , "solid" )  ; 
 
 drawHudList (  )  ; 
setDrawTarget ( gvPlayScreen2 )  ; 
drawImage ( gvTempScreen , 0 , 0 )  ; 
 } 
  
  else runAmbientLight ( true )  ; 
 
  if ( gvPlayer && gvPlayer2 &&  ( (gvPlayer[ ( "invincible" ) ] !== undefined) )  &&  ( (gvPlayer2[ ( "invincible" ) ] !== undefined) )  && gvPlayer . invincible == 0 && gvPlayer2 . invincible == 0 || gvPlayer &&  ! gvPlayer2 &&  ( (gvPlayer["invincible"] !== undefined) )  && gvPlayer . invincible == 0 || gvPlayer2 &&  ! gvPlayer &&  ( (gvPlayer2["invincible"] !== undefined) )  && gvPlayer2 . invincible == 0 ) songPlay ( gvMusicName )  ; 
 
 setDrawTarget ( gvScreen )  ; 
 if ( gvSwapScreen && gvSplitScreen )  { 
 drawImage ( gvPlayScreen2 , 0 , 0 )  ; 
drawImage ( gvPlayScreen , gvScreenW / 2 , 0 )  ; 
drawSprite ( sprDivBar , 0 , gvScreenW / 2 , 0 )  ; 
 } 
  
  else  { 
 drawImage ( gvPlayScreen , 0 , 0 )  ; 
 if ( gvSplitScreen )  { 
 drawImage ( gvPlayScreen2 , gvScreenW / 2 , 0 )  ; 
drawSprite ( sprDivBar , 0 , gvScreenW / 2 , 0 )  ; 
 } 
  
  } 
  
  if ( gvInfoBox != gvInfoLast )  { 
 gvInfoLast = gvInfoBox ; 
gvInfoStep = 0 ; 
 } 
  
  if ( gvInfoBox == "" )  { 
  if ( config . nearbars )  { 
  if (  ! gvSplitScreen )  { 
  if ( gvPlayer ) drawFloatingStats ( gvPlayer . x - camx0 , gvPlayer . y - camy0 ,  ( 1.0 / game . maxHealth )  * gvBarStats . health1 ,  ( 1.0 / game . ps . maxStamina )  * gvBarStats . stamina1 ,  ( 1.0 / game . ps . maxEnergy )  * gvBarStats . mana1 )  ; 
 
  if ( gvPlayer2 ) drawFloatingStats ( gvPlayer2 . x - camx0 , gvPlayer2 . y - camy0 ,  ( 1.0 / game . maxHealth )  * gvBarStats . health2 ,  ( 1.0 / game . ps2 . maxStamina )  * gvBarStats . stamina2 ,  ( 1.0 / game . ps2 . maxEnergy )  * gvBarStats . mana2 )  ; 
 
  } 
  
  else  { 
  if ( gvSwapScreen )  { 
  if ( gvPlayer ) drawFloatingStats ( gvPlayer . x - camx1 +  ( gvScreenW / 2 )  , gvPlayer . y - camy1 ,  ( 1.0 / game . maxHealth )  * game . ps . health ,  ( 1.0 / game . ps . maxStamina )  * game . ps . stamina ,  ( 1.0 / game . ps . maxEnergy )  * game . ps . energy )  ; 
 
  if ( gvPlayer2 ) drawFloatingStats ( gvPlayer2 . x - camx2 , gvPlayer2 . y - camy2 ,  ( 1.0 / game . maxHealth )  * game . ps2 . health ,  ( 1.0 / game . ps2 . maxStamina )  * game . ps2 . stamina ,  ( 1.0 / game . ps2 . maxEnergy )  * game . ps2 . energy )  ; 
 
  } 
  
  else  { 
  if ( gvPlayer ) drawFloatingStats ( gvPlayer . x - camx1 , gvPlayer . y - camy1 ,  ( 1.0 / game . maxHealth )  * game . ps . health ,  ( 1.0 / game . ps . maxStamina )  * game . ps . stamina ,  ( 1.0 / game . ps . maxEnergy )  * game . ps . energy )  ; 
 
  if ( gvPlayer2 ) drawFloatingStats ( gvPlayer2 . x - camx2 +  ( gvScreenW / 2 )  , gvPlayer2 . y - camy2 ,  ( 1.0 / game . maxHealth )  * game . ps2 . health ,  ( 1.0 / game . ps2 . maxStamina )  * game . ps2 . stamina ,  ( 1.0 / game . ps2 . maxEnergy )  * game . ps2 . energy )  ; 
 
  } 
  
  } 
  
  } 
  
  if ( checkActor ( "Herring" )  )  { 
  if (  ! gvSplitScreen )  { 
  if ( gvPlayer )  { 
  var nearestFish = null ;
  {     var foreachOutput15 = squirrelForEach( actor [ "Herring" ]  );     while(true)     {        foreachOutput15.next();        if (foreachOutput15.isDone()) break; i = foreachOutput15.getValue();  { 
  if ( nearestFish == null || distance2 ( i . x , i . y , gvPlayer . x , gvPlayer . y )  < distance2 ( nearestFish . x , nearestFish . y , gvPlayer . x , gvPlayer . y )  ) nearestFish = i ; 
 
  } 
     }  } drawSprite ( sprHerrow , getFrames (  )  / 16 , gvPlayer . x - camx0 , gvPlayer . y - camy0 , pointAngle ( gvPlayer . x , gvPlayer . y , nearestFish . x , nearestFish . y )  )  ; 
 } 
  
  if ( gvPlayer2 )  { 
  var nearestFish = null ;
  {     var foreachOutput16 = squirrelForEach( actor [ "Herring" ]  );     while(true)     {        foreachOutput16.next();        if (foreachOutput16.isDone()) break; i = foreachOutput16.getValue();  { 
  if ( nearestFish == null || distance2 ( i . x , i . y , gvPlayer2 . x , gvPlayer2 . y )  < distance2 ( nearestFish . x , nearestFish . y , gvPlayer2 . x , gvPlayer2 . y )  ) nearestFish = i ; 
 
  } 
     }  } drawSprite ( sprHerrow , getFrames (  )  / 16 , gvPlayer2 . x - camx0 , gvPlayer2 . y - camy0 , pointAngle ( gvPlayer2 . x , gvPlayer2 . y , nearestFish . x , nearestFish . y )  )  ; 
 } 
  
  } 
  
  else  { 
  if ( gvSwapScreen )  { 
  if ( gvPlayer )  { 
  var nearestFish = null ;
  {     var foreachOutput17 = squirrelForEach( actor [ "Herring" ]  );     while(true)     {        foreachOutput17.next();        if (foreachOutput17.isDone()) break; i = foreachOutput17.getValue();  { 
  if ( nearestFish == null || distance2 ( i . x , i . y , gvPlayer . x , gvPlayer . y )  < distance2 ( nearestFish . x , nearestFish . y , gvPlayer . x , gvPlayer . y )  ) nearestFish = i ; 
 
  } 
     }  } drawSprite ( sprHerrow , getFrames (  )  / 16 , gvPlayer . x - camx1 +  ( gvScreenW / 2 )  , gvPlayer . y - camy1 , pointAngle ( gvPlayer . x , gvPlayer . y , nearestFish . x , nearestFish . y )  )  ; 
 } 
  
  if ( gvPlayer2 )  { 
  var nearestFish = null ;
  {     var foreachOutput18 = squirrelForEach( actor [ "Herring" ]  );     while(true)     {        foreachOutput18.next();        if (foreachOutput18.isDone()) break; i = foreachOutput18.getValue();  { 
  if ( nearestFish == null || distance2 ( i . x , i . y , gvPlayer2 . x , gvPlayer2 . y )  < distance2 ( nearestFish . x , nearestFish . y , gvPlayer2 . x , gvPlayer2 . y )  ) nearestFish = i ; 
 
  } 
     }  } drawSprite ( sprHerrow , getFrames (  )  / 16 , gvPlayer2 . x - camx2 , gvPlayer2 . y - camy2 , pointAngle ( gvPlayer2 . x , gvPlayer2 . y , nearestFish . x , nearestFish . y )  )  ; 
 } 
  
  } 
  
  else  { 
  if ( gvPlayer )  { 
  var nearestFish = null ;
  {     var foreachOutput19 = squirrelForEach( actor [ "Herring" ]  );     while(true)     {        foreachOutput19.next();        if (foreachOutput19.isDone()) break; i = foreachOutput19.getValue();  { 
  if ( nearestFish == null || distance2 ( i . x , i . y , gvPlayer . x , gvPlayer . y )  < distance2 ( nearestFish . x , nearestFish . y , gvPlayer . x , gvPlayer . y )  ) nearestFish = i ; 
 
  } 
     }  } drawSprite ( sprHerrow , getFrames (  )  / 16 , gvPlayer . x - camx1 , gvPlayer . y - camy1 , pointAngle ( gvPlayer . x , gvPlayer . y , nearestFish . x , nearestFish . y )  )  ; 
 } 
  
  if ( gvPlayer2 )  { 
  var nearestFish = null ;
  {     var foreachOutput20 = squirrelForEach( actor [ "Herring" ]  );     while(true)     {        foreachOutput20.next();        if (foreachOutput20.isDone()) break; i = foreachOutput20.getValue();  { 
  if ( nearestFish == null || distance2 ( i . x , i . y , gvPlayer2 . x , gvPlayer2 . y )  < distance2 ( nearestFish . x , nearestFish . y , gvPlayer2 . x , gvPlayer2 . y )  ) nearestFish = i ; 
 
  } 
     }  } drawSprite ( sprHerrow , getFrames (  )  / 16 , gvPlayer2 . x - camx2 +  ( gvScreenW / 2 )  , gvPlayer2 . y - camy2 , pointAngle ( gvPlayer2 . x , gvPlayer2 . y , nearestFish . x , nearestFish . y )  )  ; 
 } 
  
  } 
  
  } 
  
  } 
  
 gvBarStats . health1 =  ( game . ps . health + gvBarStats . health1 * 9.0 )  / 10.0 ; 
 if ( fabs ( game . ps . health - gvBarStats . health1 )  < 0.5 ) gvBarStats . health1 = game . ps . health ; 
 
 gvBarStats . mana1 =  ( game . ps . energy + gvBarStats . mana1 * 9.0 )  / 10.0 ; 
 if ( fabs ( game . ps . energy - gvBarStats . mana1 )  < 0.5 ) gvBarStats . mana1 = game . ps . energy ; 
 
 gvBarStats . stamina1 =  ( game . ps . stamina + gvBarStats . stamina1 * 9.0 )  / 10.0 ; 
 if ( fabs ( game . ps . stamina - gvBarStats . stamina1 )  < 0.5 ) gvBarStats . stamina1 = game . ps . stamina ; 
 
 gvBarStats . health2 =  ( game . ps2 . health + gvBarStats . health2 * 9.0 )  / 10.0 ; 
 if ( fabs ( game . ps2 . health - gvBarStats . health2 )  < 0.5 ) gvBarStats . health2 = game . ps2 . health ; 
 
 gvBarStats . mana2 =  ( game . ps . energy + gvBarStats . mana2 * 9.0 )  / 10.0 ; 
 if ( fabs ( game . ps2 . energy - gvBarStats . mana2 )  < 0.5 ) gvBarStats . mana2 = game . ps2 . energy ; 
 
 gvBarStats . stamina2 =  ( game . ps2 . stamina + gvBarStats . stamina2 * 9.0 )  / 10.0 ; 
 if ( fabs ( game . ps2 . stamina - gvBarStats . stamina2 )  < 0.5 ) gvBarStats . stamina2 = game . ps2 . stamina ; 
 
  if ( game . ps . health > game . maxHealth ) game . ps . health = game . maxHealth ; 
 
 drawSprite ( sprMeterBack , 0 , 24 , 8 )  ; 
 for (  var i = 0 ;
 i < floor ( game . maxHealth )  ; i ++  ) drawSprite ( sprMeterBack , 1 , 26 +  ( i * 2 )  , 8 )  ; 
drawSprite ( sprMeterBack , 2 , 26 +  ( 2 * game . maxHealth )  , 8 )  ; 
setDrawColor ( 0xf83810ff )  ; 
 if ( gvBarStats . health1 > 0 ) drawRec ( 26 , 10 ,  ( gvBarStats . health1 * 2.0 )  - 1.0 , 3 , true )  ; 
 
 drawSprite ( sprMeterBack , 0 , 8 , 8 )  ; 
 for (  var i = 0 ;
 i < 6 ; i ++  ) drawSprite ( sprMeterBack , 1 , 10 +  ( i * 2 )  , 8 )  ; 
drawSprite ( sprMeterBack , 2 , 22 , 8 )  ; 
setDrawColor ( 0xf81038ff )  ; 
 if ( game . ps . berries > 0 ) drawRec ( 10 , 10 ,  ( game . ps . berries )  - 1.0 , 3 , true )  ; 
 
  if ( game . ps . energy > game . ps . maxEnergy ) game . ps . energy = game . ps . maxEnergy ; 
 
 drawSprite ( sprMeterBack , 0 , 24 , 16 )  ; 
drawSprite ( sprMeterBack , 1 , 26 , 16 , 0 , 0 , game . ps . maxEnergy * 2.0 )  ; 
drawSprite ( sprMeterBack , 2 , 26 +  ( 4 * game . ps . maxEnergy )  , 16 )  ; 
setDrawColor ( 0x1080b0ff )  ; 
 if ( gvBarStats . mana1 > 0 ) drawRec ( 26 , 18 ,  ( gvBarStats . mana1 * 4.0 )  - 1.0 , 3 , true )  ; 
 
  var elementFrame = 0 ;
  switch ( game . ps . weapon )  {  case "normal" : elementFrame = 0 ; 
 break ;  case "fire" : elementFrame = 1 ; 
 break ;  case "ice" : elementFrame = 2 ; 
 break ;  case "air" : elementFrame = 3 ; 
 break ;  case "earth" : elementFrame = 4 ; 
 break ;  case "water" : elementFrame = 5 ; 
 break ;  case "shock" : elementFrame = 6 ; 
 break ;  case "dark" : elementFrame = 7 ; 
 break ;  case "light" : elementFrame = 8 ; 
 break ;  } drawSprite ( sprElement , elementFrame , 8 , 16 )  ; 
 if ( game . ps . stamina > game . ps . maxStamina ) game . ps . stamina = game . ps . maxStamina ; 
 
 drawSprite ( sprMeterBack , 0 , 24 , 24 )  ; 
 for (  var i = 0 ;
 i < floor ( game . ps . maxStamina )  ; i ++  ) drawSprite ( sprMeterBack , 1 , 26 , 24 , 0 , 0 , game . ps . maxStamina * 2.0 )  ; 
drawSprite ( sprMeterBack , 2 , 26 +  ( 4 * game . ps . maxStamina )  , 24 )  ; 
setDrawColor ( 0x70a048ff )  ; 
 if ( gvBarStats . stamina1 > 0 ) drawRec ( 26 , 26 ,  ( gvBarStats . stamina1 * 4.0 )  - 1.0 , 3 , true )  ; 
 
  if ( gvNumPlayers > 1 )  { 
  if ( game . ps2 . health > game . maxHealth ) game . ps2 . health = game . maxHealth ; 
 
 drawSprite ( sprMeterBack , 0 , 24 , 36 )  ; 
 for (  var i = 0 ;
 i < floor ( game . maxHealth )  ; i ++  ) drawSprite ( sprMeterBack , 1 , 26 +  ( i * 2 )  , 36 )  ; 
drawSprite ( sprMeterBack , 2 , 26 +  ( 2 * game . maxHealth )  , 36 )  ; 
setDrawColor ( 0xf83810ff )  ; 
 if ( gvBarStats . health2 > 0 ) drawRec ( 26 , 38 ,  ( gvBarStats . health2 * 2.0 )  - 1.0 , 3 , true )  ; 
 
 drawSprite ( sprMeterBack , 0 , 8 , 36 )  ; 
 for (  var i = 0 ;
 i < 6 ; i ++  ) drawSprite ( sprMeterBack , 1 , 10 +  ( i * 2 )  , 36 )  ; 
drawSprite ( sprMeterBack , 2 , 22 , 36 )  ; 
setDrawColor ( 0xf81038ff )  ; 
 if ( game . ps2 . berries > 0 ) drawRec ( 10 , 38 ,  ( game . ps2 . berries )  - 1.0 , 3 , true )  ; 
 
  if ( game . ps2 . energy > game . ps2 . maxEnergy ) game . ps2 . energy = game . ps2 . maxEnergy ; 
 
 drawSprite ( sprMeterBack , 0 , 24 , 44 )  ; 
drawSprite ( sprMeterBack , 1 , 26 , 44 , 0 , 0 , game . ps2 . maxEnergy * 2.0 )  ; 
drawSprite ( sprMeterBack , 2 , 26 +  ( 4 * game . ps2 . maxEnergy )  , 44 )  ; 
setDrawColor ( 0x1080b0ff )  ; 
 if ( gvBarStats . mana2 > 0 ) drawRec ( 26 , 46 ,  ( gvBarStats . mana2 * 4.0 )  - 1.0 , 3 , true )  ; 
 
  var elementFrame = 0 ;
  switch ( game . ps2 . weapon )  {  case "normal" : elementFrame = 0 ; 
 break ;  case "fire" : elementFrame = 1 ; 
 break ;  case "ice" : elementFrame = 2 ; 
 break ;  case "air" : elementFrame = 3 ; 
 break ;  case "earth" : elementFrame = 4 ; 
 break ;  case "water" : elementFrame = 5 ; 
 break ;  case "shock" : elementFrame = 6 ; 
 break ;  case "dark" : elementFrame = 7 ; 
 break ;  case "light" : elementFrame = 8 ; 
 break ;  } drawSprite ( sprElement , elementFrame , 8 , 44 )  ; 
 if ( game . ps2 . stamina > game . ps2 . maxStamina ) game . ps2 . stamina = game . ps2 . maxStamina ; 
 
 drawSprite ( sprMeterBack , 0 , 24 , 52 )  ; 
drawSprite ( sprMeterBack , 1 , 26 , 52 , 0 , 0 , game . ps2 . maxStamina * 2.0 )  ; 
drawSprite ( sprMeterBack , 2 , 26 +  ( 4 * game . ps2 . maxStamina )  , 52 )  ; 
setDrawColor ( 0x70a048ff )  ; 
 if ( gvBarStats . stamina2 > 0 ) drawRec ( 26 , 54 ,  ( gvBarStats . stamina2 * 4.0 )  - 1.0 , 3 , true )  ; 
 
  } 
  
  if ( gvBoss )  { 
  var fullhearts = floor ( game . bossHealth / 4 )  ;
  if ( game . bossHealth == 0 ) fullhearts = 0 ; 
 
 drawSprite ( sprBossHealth , 6 , gvScreenW - 23 , gvScreenH - 88 )  ; 
drawSprite ( sprSkull , 0 , gvScreenW - 26 , gvScreenH - 86 )  ; 
 for (  var i = 0 ;
 i < 10 ; i ++  )  { 
  if ( i < fullhearts ) drawSprite ( sprBossHealth , 4 , gvScreenW - 23 , gvScreenH - 96 -  ( 8 * i )  )  ; 
 
  else  if ( i == fullhearts && game . bossHealth > 0 ) drawSprite ( sprBossHealth , game . bossHealth % 4 , gvScreenW - 23 , gvScreenH - 96 -  ( 8 * i )  )  ; 
 
  else drawSprite ( sprBossHealth , 0 , gvScreenW - 23 , gvScreenH - 96 -  ( 8 * i )  )  ; 
 
  
  } 
 drawSprite ( sprBossHealth , 5 , gvScreenW - 23 , gvScreenH - 96 -  ( 8 * 10 )  )  ; 
 } 
  
 drawSprite ( sprCoin , 0 , 16 , gvScreenH - 16 )  ; 
 if ( game . maxCoins > 0 )  { 
  if ( gvTimeAttack &&  ! config . completion )  { 
  if ( levelEndRunner ) drawText ( font2 , 24 , gvScreenH - 23 , game . coins . tostring (  )  )  ; 
 
  else drawText ( font2 , 24 , gvScreenH - 23 ,  ( game . coins + game . levelCoins )  . tostring (  )  )  ; 
 
  } 
  
  else drawText ( font2 , 24 , gvScreenH - 23 , game . levelCoins . tostring (  )  + "/" + game . maxCoins . tostring (  )  )  ; 
 
  if ( config . completion )  { 
 drawSprite ( sprDeathcap , 0 , 16 , gvScreenH - 48 )  ; 
drawText ( font2 , 24 , gvScreenH - 56 , game . enemies . tostring (  )  + "/" + game . maxEnemies . tostring (  )  )  ; 
drawSprite ( sprIcoSecret , 0 , 16 , gvScreenH - 32 )  ; 
drawText ( font2 , 24 , gvScreenH - 40 , game . secrets . tostring (  )  + "/" + game . maxSecrets . tostring (  )  )  ; 
 } 
  
  } 
  
  else drawText ( font2 , 24 , gvScreenH - 23 , game . coins . tostring (  )  )  ; 
 
  if ( game . maxRedCoins > 0 ) drawSprite ( sprHerring , 0 , 16 , gvScreenH -  ( config . completion ? 64 : 32 )  )  ; 
 
  if ( game . maxRedCoins > 0 ) drawText ( font2 , 24 , gvScreenH -  ( config . completion ? 72 : 38 )  , game . redCoins . tostring (  )  + "/" + game . maxRedCoins . tostring (  )  )  ; 
 
 drawSprite ( sprSubItem , 0 , gvScreenW - 18 , 18 )  ; 
 switch ( game . ps . subitem )  {  case "fire" : drawSprite ( sprFlowerFire , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case "ice" : drawSprite ( sprFlowerIce , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case "air" : drawSprite ( sprAirFeather , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case "earth" : drawSprite ( sprEarthShell , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case "shock" : drawSprite ( sprShockBulb , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case "water" : drawSprite ( sprWaterLily , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case "muffinBlue" : drawSprite ( sprMuffin , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case "muffinRed" : drawSprite ( sprMuffin , 1 , gvScreenW - 18 , 18 )  ; 
 break ;  case "star" : drawSprite ( sprStar , 0 , gvScreenW - 18 , 18 )  ; 
 break ;  case "coffee" : drawSprite ( sprCoffee , 0 , gvScreenW - 18 , 17 )  ; 
 break ;  }  if ( gvNumPlayers > 1 )  { 
 drawSprite ( sprSubItem , 1 , gvScreenW - 18 , 42 )  ; 
 switch ( game . ps2 . subitem )  {  case "fire" : drawSprite ( sprFlowerFire , 0 , gvScreenW - 18 , 42 )  ; 
 break ;  case "ice" : drawSprite ( sprFlowerIce , 0 , gvScreenW - 18 , 42 )  ; 
 break ;  case "air" : drawSprite ( sprAirFeather , 0 , gvScreenW - 18 , 42 )  ; 
 break ;  case "earth" : drawSprite ( sprEarthShell , 0 , gvScreenW - 18 , 42 )  ; 
 break ;  case "shock" : drawSprite ( sprShockBulb , 0 , gvScreenW - 18 , 42 )  ; 
 break ;  case "water" : drawSprite ( sprWaterLily , 0 , gvScreenW - 18 , 42 )  ; 
 break ;  case "muffinBlue" : drawSprite ( sprMuffin , 0 , gvScreenW - 18 , 42 )  ; 
 break ;  case "muffinRed" : drawSprite ( sprMuffin , 1 , gvScreenW - 18 , 42 )  ; 
 break ;  case "star" : drawSprite ( sprStar , 0 , gvScreenW - 18 , 42 )  ; 
 break ;  case "coffee" : drawSprite ( sprCoffee , 0 , gvScreenW - 18 , 41 )  ; 
 break ;  }  } 
  
  var timey = 0 ;
  if ( gvNumPlayers >= 2 &&  ! gvNetPlay ) timey = 32 ; 
 
  if ( gvDoIGT &&  ( config . showleveligt || gvTimeAttack )  && levelEndRunner != 1 ) drawText ( font2 , 8 , 32 + timey , formatTime ( gvIGT )  )  ; 
 
  if ( gvPlayer && gvPlayer . y <  - 8 )  { 
  if (  ( (gvCharacters[ (  squirrelTypeOf ( gvPlayer )  ) ] !== undefined) )  ) drawSprite ( getroottable (  )  [ gvCharacters [  squirrelTypeOf ( gvPlayer )  ]  [ "doll" ]  ]  , enWeapons [ game . ps . weapon ]  , gvPlayer . x - camx , 8 -  ( gvPlayer . y / 4 )  )  ; 
 
  } 
  
  if ( gvWarning < 180 )  { 
  if ( gvWarning == 0 || gvWarning == 90 )  { 
 stopSound ( sndWarning )  ; 
playSound ( sndWarning , 0 )  ; 
 } 
  
 drawSpriteEx ( sprWarning , 0 , gvScreenW / 2 , gvScreenH / 2 , 0 , 0 , 1 , 1 , abs ( sin ( gvWarning / 30.0 )  )  )  ; 
gvWarning += 1.5 ; 
 } 
  
  var kx = 10 ;
  if ( gvPlayer &&  ( (gvPlayer[ ( "stats" ) ] !== undefined) )  && gvPlayer . stats . canres )  { 
  if (  ( (gvCharacters[ (  squirrelTypeOf ( gvPlayer )  ) ] !== undefined) )  ) drawSprite ( getroottable (  )  [ gvCharacters [  squirrelTypeOf ( gvPlayer )  ]  [ "doll" ]  ]  , enWeapons [ gvPlayer . stats . weapon ]  , gvScreenW - kx , gvScreenH - 16 )  ; 
 
 kx += 16 ; 
 } 
  
  if ( gvPlayer2 &&  ( (gvPlayer2[ ( "stats" ) ] !== undefined) )  && gvPlayer2 . stats . canres )  { 
  if (  ( (gvCharacters[ (  squirrelTypeOf ( gvPlayer2 )  ) ] !== undefined) )  ) drawSprite ( getroottable (  )  [ gvCharacters [  squirrelTypeOf ( gvPlayer2 )  ]  [ "doll" ]  ]  , enWeapons [ gvPlayer2 . stats . weapon ]  , gvScreenW - kx , gvScreenH - 16 )  ; 
 
 kx += 16 ; 
 } 
  
  if ( gvKeyCopper )  { 
 drawSprite ( sprKeyCopper , 0 , gvScreenW - kx , gvScreenH - 16 )  ; 
kx += 16 ; 
 } 
  
  if ( gvKeySilver )  { 
 drawSprite ( sprKeySilver , 0 , gvScreenW - kx , gvScreenH - 16 )  ; 
kx += 16 ; 
 } 
  
  if ( gvKeyGold )  { 
 drawSprite ( sprKeyGold , 0 , gvScreenW - kx , gvScreenH - 16 )  ; 
kx += 16 ; 
 } 
  
  if ( gvKeyMythril )  { 
 drawSprite ( sprKeyMythril , 0 , gvScreenW - kx , gvScreenH - 16 )  ; 
kx += 16 ; 
 } 
  
  if ( debug || config . showkeys || gvTimeAttack ) displayKeys (  )  ; 
 
  } 
  
  else  { 
  if ( gvInfoStep < gvInfoBox . len (  )  ) gvInfoStep ++  ; 
 
  var ln = 3 ;
  for (  var i = 0 ;
 i < gvInfoBox . len (  )  ; i ++  )  { 
  if ( chint ( gvInfoBox [ i ]  )  == "\n" ) ln ++  ; 
 
  } 
 setDrawColor ( 0x000000d0 )  ; 
drawRec ( 0 , 0 , gvScreenW , 8 * max ( ln , 7 )  , true )  ; 
drawText ( font , 8 , 8 , gvInfoBox . slice ( 0 , gvInfoStep )  )  ; 
 } 
  
 setDrawColor ( gvFadeInTime )  ; 
drawRec ( 0 , 0 , gvScreenW , gvScreenH , true )  ; 
 if ( gvFadeInTime > 0 ) gvFadeInTime -= 10 ; 
 
  if ( gvFadeInTime < 0 ) gvFadeInTime = 0 ; 
 
 drawDebug (  )  ; 
 if ( levelEndRunner == 0 &&  ( gvPlayer || gvPlayer2 )  )  { 
 gvIGT ++  ; 
game . igt ++  ; 
 } 
  
  if (  ( config . showglobaligt || gvTimeAttack )  && levelEndRunner != 1 )  { 
  var gtd = formatTime ( game . igt )  ;
 drawText ( font2 ,  ( gvScreenW / 2 )  -  ( gtd . len (  )  * 4 )  , gvScreenH - 24 , gtd )  ; 
 } 
  
 checkAchievements (  )  ; 
drawAchievements (  )  ; 
 var exside =  ( gvExitSide ? gvScreenW * 0.9 : gvScreenW * 0.1 )  ;
  if ( gvExitTimer > 0 )  { 
 drawSprite ( sprExit , getFrames (  )  / 16 , exside , gvScreenH / 2 , 0 , gvExitSide )  ; 
setDrawColor ( 0x101010ff )  ; 
drawRec (  ( exside )  - 16 ,  ( gvScreenH / 2 )  + 12 , 32 , 4 , true )  ; 
setDrawColor ( 0xf8f8f8ff )  ; 
drawRec (  ( exside )  -  (  ( 15.0 / 30.0 )  * gvExitTimer )  ,  ( gvScreenH / 2 )  + 13 ,  (  ( 31.0 / 30.0 )  * gvExitTimer )  , 2 , true )  ; 
 } 
  
 setDrawTarget ( gvScreen )  ; 
 if ( gvFadeTime > 0 )  { 
 setDrawColor ( min ( 255 , gvFadeTime * 8 )  )  ; 
drawRec ( 0 , 0 , gvScreenW , gvScreenH , true )  ; 
 } 
  
  if ( gvPlayer &&  ( (gvPlayer[ ( "hidden" ) ] !== undefined) )  ) gvPlayer . hidden = false ; 
 
  if ( gvPlayer2 &&  ( (gvPlayer2[ ( "hidden" ) ] !== undefined) )  ) gvPlayer2 . hidden = false ; 
 
  if ( game . ps . berries > 0 && game . ps . berries >= 12 && game . ps . health > 0 )  { 
  if ( game . ps . health < game . maxHealth )  { 
 game . ps . health ++  ; 
game . ps . berries = 0 ; 
 } 
  
  else  if ( game . ps . berries > 12 ) game . ps . berries --  ; 
 
  
  } 
  
  if ( game . ps2 . berries > 0 && game . ps2 . berries >= 12 && game . ps2 . health > 0 )  { 
  if ( game . ps2 . health < game . maxHealth )  { 
 game . ps2 . health ++  ; 
game . ps2 . berries = 0 ; 
 } 
  
  else  if ( game . ps2 . berries > 12 ) game . ps2 . berries --  ; 
 
  
  } 
  
  if ( game . ps . health < 0 ) game . ps . health = 0 ; 
 
  if ( game . ps2 . health < 0 ) game . ps2 . health = 0 ; 
 
  }  ; 
playerTeleport =  function ( target = false , _x = 0 , _y = 0 ) {  if (  ! target )  return ; 
  
  if ( gvMap == 0 )  return ; 
  
  var ux = gvMap . w - gvScreenW ;
  var uy = gvMap . h - gvScreenH ;
 target . x = _x . tofloat (  )  ; 
target . y = _y . tofloat (  )  ; 
target . xprev = target . x ; 
target . yprev = target . y ; 
 if ( gvNumPlayers == 1 )  { 
 camx0 = _x . tofloat (  )  -  ( gvScreenW / 2 )  ; 
camy0 = _y . tofloat (  )  -  ( gvScreenH / 2 )  ; 
 if ( camx0 > ux ) camx = ux ; 
 
  if ( camx0 < 0 ) camx = 0 ; 
 
  if ( camy0 > uy ) camy = uy ; 
 
  if ( camy0 < 0 ) camy = 0 ; 
 
  } 
  
  if ( gvNumPlayers == 2 )  { 
  if (  ! gvSplitScreen )  { 
 camx0 = _x . tofloat (  )  -  ( gvScreenW / 2 )  ; 
camy0 = _y . tofloat (  )  -  ( gvScreenH / 2 )  ; 
 if ( camx0 > ux ) camx = ux ; 
 
  if ( camx0 < 0 ) camx = 0 ; 
 
  if ( camy0 > uy ) camy = uy ; 
 
  if ( camy0 < 0 ) camy = 0 ; 
 
  } 
  
  if ( gvPlayer && target == gvPlayer )  { 
 camx1 = _x . tofloat (  )  -  ( gvScreenW / 4 )  ; 
camy1 = _y . tofloat (  )  -  ( gvScreenH / 2 )  ; 
 if ( camx1 > ux ) camx1 = ux ; 
 
  if ( camx1 < 0 ) camx1 = 0 ; 
 
  if ( camy1 > uy ) camy1 = uy ; 
 
  if ( camy1 < 0 ) camy1 = 0 ; 
 
  } 
  
  if ( gvPlayer2 && target == gvPlayer2 )  { 
 camx2 = _x . tofloat (  )  -  ( gvScreenW / 4 )  ; 
camy2 = _y . tofloat (  )  -  ( gvScreenH / 2 )  ; 
 if ( camx2 > ux ) camx2 = ux ; 
 
  if ( camx2 < 0 ) camx2 = 0 ; 
 
  if ( camy2 > uy ) camy2 = uy ; 
 
  if ( camy2 < 0 ) camy2 = 0 ; 
 
  } 
  
  } 
  
  }  ; 
TimeAttackSign =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . draw = function (  ) {  var str = gvLangObj [ "stats" ]  [ "final-time" ]  ;
  var time = formatTime ( game . igt )  ;
 drawText ( font2 ,  ( gvScreenW / 2 )  -  ( str . len (  )  * 4 )  , 64 , str )  ; 
drawText ( font2 ,  ( gvScreenW / 2 )  -  ( time . len (  )  * 4 )  , 80 , time )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
createPlatformActors =  function ( n , i , c ) {  switch ( n )  {  case 0 : gvNumPlayers = 0 ; 
 if (  ! gvPlayer && getroottable (  )  . rawin ( game . playerChar )  )  { 
  if ( game . check == false )  { 
 c = actor [ newActor ( getroottable (  )  [ game . playerChar ]  , i . x + 8 , i . y - 16 )  ]  ; 
 } 
  
  else  { 
 c = actor [ newActor ( getroottable (  )  [ game . playerChar ]  , game . chx , game . chy )  ]  ; 
 } 
  
 gvNumPlayers ++  ; 
 } 
  
  if ( game . playerChar2 != "" &&  ! gvPlayer2 && getroottable (  )  . rawin ( game . playerChar2 )  )  { 
  if ( game . check == false )  { 
 c = actor [ newActor ( getroottable (  )  [ game . playerChar2 ]  , i . x + 8 , i . y - 16 )  ]  ; 
 } 
  
  else  { 
 c = actor [ newActor ( getroottable (  )  [ game . playerChar2 ]  , game . chx , game . chy )  ]  ; 
 } 
  
 gvNumPlayers ++  ; 
 } 
  
 camx = c . x -  ( gvScreenW / 2 )  ; 
camy = c . y -  ( gvScreenH / 2 )  ; 
 if ( gvPlayer ) gvCamTarget = gvPlayer ; 
 
  if ( config . useBeam && gvNumPlayers == 1 ) newActor ( BeamBug , i . x + 8 , i . y - 16 )  ; 
 
  break ;  case 1 : c = newActor ( Coin , i . x + 8 , i . y - 8 )  ; 
 break ;  case 2 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 0 )  ; 
game . maxCoins ++  ; 
 break ;  case 3 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 1 )  ; 
 break ;  case 4 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 2 )  ; 
 break ;  case 5 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 3 )  ; 
 break ;  case 6 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 5 )  ; 
 break ;  case 7 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 4 )  ; 
 break ;  case 8 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 6 )  ; 
 break ;  case 9 : c = newActor ( BadCannon , i . x + 8 , i . y - 8 )  ; 
 break ;  case 10 : c = newActor ( PipeSnake , i . x , i . y , 1 )  ; 
game . maxEnemies ++  ; 
 break ;  case 11 : c = newActor ( PipeSnake , i . x , i . y - 16 ,  - 1 )  ; 
game . maxEnemies ++  ; 
 break ;  case 12 : c = newActor ( Deathcap , i . x + 8 , i . y - 8 , false )  ; 
game . maxEnemies ++  ; 
 break ;  case 13 : c = newActor ( Deathcap , i . x + 8 , i . y - 8 , true )  ; 
game . maxEnemies ++  ; 
 break ;  case 14 : c = newActor ( IceBlock , i . x + 8 , i . y - 8 )  ; 
 break ;  case 15 : c = newActor ( WoodBlock , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 16 : c = actor [ newActor ( Spring , i . x + 8 , i . y - 8 , 0 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 17 : c = actor [ newActor ( Spring , i . x + 8 , i . y - 8 , 1 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 18 : c = actor [ newActor ( Spring , i . x + 8 , i . y - 8 , 2 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 19 : c = actor [ newActor ( Spring , i . x + 8 , i . y - 8 , 3 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 20 : c = newActor ( Ouchin , i . x + 8 , i . y - 8 )  ; 
 break ;  case 21 : c = newActor ( TriggerBlock , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 22 :  if ( gvLangObj [ "info" ]  . rawin ( i . name )  ) c = newActor ( InfoBlock , i . x + 8 , i . y - 8 , gvLangObj [ "info" ]  [ i . name ]  )  ; 
 
  else c = newActor ( InfoBlock , i . x + 8 , i . y - 8 , "" )  ; 
 
  break ;  case 23 :  if ( gvLangObj [ "devcom" ]  . rawin ( i . name )  ) c = newActor ( KelvinScarf , i . x + 8 , i . y - 8 , gvLangObj [ "devcom" ]  [ i . name ]  )  ; 
 
  else c = newActor ( KelvinScarf , i . x + 8 , i . y - 8 , "" )  ; 
 
  break ;  case 24 : c = actor [ newActor ( ItemBlock , i . x + 8 , i . y - 8 )  ]  ; 
c . item = 7 ; 
 break ;  case 25 : c = newActor ( FlyRefresh , i . x + 8 , i . y - 8 )  ; 
 break ;  case 26 : c = newActor ( CarlBoom , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 27 : c = newActor ( OrangeBounce , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 28 : c = newActor ( BlueFish , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 29 : c = newActor ( RedFish , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 30 : c = newActor ( BounceBlock , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 31 : c = actor [ newActor ( NPC , i . x + 8 , i . y , i . name )  ]  ; 
 break ;  case 32 : c = newActor ( Checkpoint , i . x + 8 , i . y - 16 )  ; 
 break ;  case 33 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 8 )  ; 
 break ;  case 34 : c = newActor ( TNT , i . x + 8 , i . y - 8 )  ; 
 break ;  case 35 : c = newActor ( C4 , i . x + 8 , i . y - 8 )  ; 
 break ;  case 36 : c = newActor ( JellyFish , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 37 : c = newActor ( Clamor , i . x + 8 , i . y - 8 , i . name )  ; 
game . maxEnemies ++  ; 
 break ;  case 38 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 9 )  ; 
 break ;  case 39 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 10 )  ; 
 break ;  case 40 : c = actor [ newActor ( SpringD , i . x + 8 , i . y - 8 , 0 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 41 : c = actor [ newActor ( SpringD , i . x + 8 , i . y - 8 , 1 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 42 : c = actor [ newActor ( SpringD , i . x + 8 , i . y - 8 , 2 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 43 : c = actor [ newActor ( SpringD , i . x + 8 , i . y - 8 , 3 )  ]  ; 
 if ( i . name != "" ) c . power = i . name . tofloat (  )  ; 
 
  break ;  case 44 : c = newActor ( GreenFish , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 45 : c = newActor ( Icicle , i . x + 8 , i . y - 8 )  ; 
 break ;  case 46 : c = newActor ( FlyAmanita , i . x + 8 , i . y - 8 , i . name )  ; 
game . maxEnemies ++  ; 
 break ;  case 48 : c = newActor ( MagicKey , i . x + 8 , i . y - 8 , 0 )  ; 
 break ;  case 49 : c = newActor ( MagicKey , i . x + 8 , i . y - 8 , 1 )  ; 
 break ;  case 50 : c = newActor ( MagicKey , i . x + 8 , i . y - 8 , 2 )  ; 
 break ;  case 51 : c = newActor ( MagicKey , i . x + 8 , i . y - 8 , 3 )  ; 
 break ;  case 52 : c = newActor ( LockBlock , i . x + 8 , i . y - 8 , 0 )  ; 
 break ;  case 53 : c = newActor ( LockBlock , i . x + 8 , i . y - 8 , 1 )  ; 
 break ;  case 54 : c = newActor ( LockBlock , i . x + 8 , i . y - 8 , 2 )  ; 
 break ;  case 55 : c = newActor ( LockBlock , i . x + 8 , i . y - 8 , 3 )  ; 
 break ;  case 56 : c = newActor ( ColorBlock , i . x , i . y - 16 , 0 )  ; 
 break ;  case 57 : c = newActor ( ColorBlock , i . x , i . y - 16 , 1 )  ; 
 break ;  case 58 : c = newActor ( ColorBlock , i . x , i . y - 16 , 2 )  ; 
 break ;  case 59 : c = newActor ( ColorBlock , i . x , i . y - 16 , 3 )  ; 
 break ;  case 60 : c = newActor ( ColorBlock , i . x , i . y - 16 , 4 )  ; 
 break ;  case 61 : c = newActor ( ColorBlock , i . x , i . y - 16 , 5 )  ; 
 break ;  case 62 : c = newActor ( ColorBlock , i . x , i . y - 16 , 6 )  ; 
 break ;  case 63 : c = newActor ( ColorBlock , i . x , i . y - 16 , 7 )  ; 
 break ;  case 64 :  if ( i . name == "" )  break ;  
  var arg = split ( i . name , "," )  ;
  var n = arg [ 0 ]  ;
 arg . remove ( 0 )  ; 
 if ( arg . len (  )  == 1 ) arg = arg [ 0 ]  ; 
 
  else  if ( arg . len (  )  == 0 ) arg = null ; 
 
  
  if ( getroottable (  )  . rawin ( n )  )  if (  squirrelTypeOf ( getroottable ( ) [ n ] )  == "class" ) c = newActor ( getroottable (  )  [ n ]  , i . x + 8 , i . y - 8 , arg )  ; 
 
  
  break ;  case 65 : c = newActor ( Haywire , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 66 : c = newActor ( Livewire , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 67 : c = newActor ( Blazeborn , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 68 : c = newActor ( Coin5 , i . x + 8 , i . y - 8 )  ; 
 break ;  case 69 : c = newActor ( Coin10 , i . x + 8 , i . y - 8 )  ; 
 break ;  case 70 : c = newActor ( Herring , i . x + 8 , i . y - 8 )  ; 
 break ;  case 71 : c = newActor ( FishBlock , i . x + 8 , i . y - 8 )  ; 
 break ;  case 73 : c = newActor ( Jumpy , i . x + 8 , i . y - 8 , i . name )  ; 
game . maxEnemies ++  ; 
 break ;  case 75 : c = newActor ( EvilBlock , i . x + 8 , i . y - 8 )  ; 
 break ;  case 76 : c = newActor ( Crumbler , i . x + 8 , i . y - 8 )  ; 
 break ;  case 77 : c = newActor ( SpecialBall , i . x + 8 , i . y - 8 , i . name . tointeger (  )  )  ; 
 break ;  case 78 : c = newActor ( Berry , i . x + 8 , i . y - 8 )  ; 
 break ;  case 79 : c = newActor ( BossDoor , i . x , i . y - 16 , i . name )  ; 
 break ;  case 80 : c = newActor ( MrIceguy , i . x + 8 , i . y - 8 , i . name )  ; 
game . maxEnemies ++  ; 
 break ;  case 81 : c = newActor ( Owl , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 82 : c = newActor ( Snippin , i . x + 8 , i . y - 8 , 0 )  ; 
game . maxEnemies ++  ; 
 break ;  case 83 : c = newActor ( Snippin , i . x + 8 , i . y - 8 , 1 )  ; 
game . maxEnemies ++  ; 
 break ;  case 84 : c = newActor ( Snippin , i . x + 8 , i . y - 8 , 2 )  ; 
game . maxEnemies ++  ; 
 break ;  case 85 : c = newActor ( Spawner , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 86 : c = newActor ( CharSwapper , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 87 : c = newActor ( SpikeCap , i . x + 8 , i . y - 8 , i . name )  ; 
game . maxEnemies ++  ; 
 break ;  case 88 : c = newActor ( SpikeCap , i . x + 8 , i . y - 8 , i . name )  ; 
actor [ c ]  . moving = true ; 
game . maxEnemies ++  ; 
 break ;  case 89 : c = newActor ( Tallcap , i . x + 8 , i . y - 24 , false )  ; 
game . maxEnemies ++  ; 
 break ;  case 90 : c = newActor ( Tallcap , i . x + 8 , i . y - 24 , true )  ; 
game . maxEnemies ++  ; 
 break ;  case 91 : c = newActor ( CaptainMorel , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 92 : c = newActor ( CoffeeCup , i . x + 8 , i . y - 8 )  ; 
 break ;  case 93 : c = newActor ( BoostRing , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 94 : c = newActor ( Crusher , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 95 : c = newActor ( Wheeler , i . x + 8 , i . y - 8 , i . name )  ; 
game . maxEnemies ++  ; 
 break ;  case 96 : c = newActor ( FireBlock , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 97 : c = newActor ( Crystallo , i . x + 8 , i . y - 8 , 0 )  ; 
game . maxEnemies ++  ; 
 break ;  case 98 : c = newActor ( Crystallo , i . x + 8 , i . y - 8 , 1 )  ; 
game . maxEnemies ++  ; 
 break ;  case 99 : c = newActor ( Crystallo , i . x + 8 , i . y - 8 , 2 )  ; 
game . maxEnemies ++  ; 
 break ;  case 100 : c = newActor ( Struffle , i . x + 8 , i . y - 16 , i . name )  ; 
game . maxEnemies ++  ; 
 break ;  case 102 : c = newActor ( Ivy , i . x + 8 , i . y - 8 , false )  ; 
game . maxEnemies ++  ; 
 break ;  case 103 : c = newActor ( Ivy , i . x + 8 , i . y - 8 , true )  ; 
game . maxEnemies ++  ; 
 break ;  case 104 : c = newActor ( Puffranah , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 105 : c = newActor ( BrickBlock , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 106 : c = newActor ( WaspyBoi , i . x + 8 , i . y - 8 )  ; 
game . maxEnemies ++  ; 
 break ;  case 107 : c = newActor ( Devine , i . x + 8 , i . y - 8 , i . name )  ; 
game . maxEnemies ++  ; 
 break ;  case 108 : c = newActor ( SulphurNimbus , i . x + 8 , i . y - 16 , i . name )  ; 
 break ;  case 109 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 12 )  ; 
 break ;  case 110 : c = newActor ( ItemBlock , i . x + 8 , i . y - 8 , 11 )  ; 
 break ;  case 111 : c = newActor ( Gooey , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 112 : c = newActor ( Shortfuse , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 113 : c = newActor ( Goldbomb , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  case 114 : c = newActor ( PeterFlower , i . x + 8 , i . y - 8 )  ; 
 break ;  case 115 : c = newActor ( PeterFlower , i . x + 8 , i . y - 8 ,  - 1 )  ; 
 break ;  case 116 : c = newActor ( Granito , i . x + 8 , i . y - 8 , false )  ; 
game . maxEnemies ++  ; 
 break ;  case 117 : c = newActor ( Granito , i . x + 8 , i . y - 8 , true )  ; 
game . maxEnemies ++  ; 
 break ;  case 118 : c = newActor ( FlipBlock , i . x + 8 , i . y - 8 , i . name )  ; 
 break ;  }  return c ;
  }  ; 
createRacerActors =  function ( n , i , c ) {  switch ( n )  {  case 0 : c = newActor ( TuxRacer , i . x + 8 , i . y - 8 )  ; 
 break ;  case 2 : c = newActor ( Herring , i . x + 8 , i . y - 8 )  ; 
 break ;  case 3 :  if ( i . name == "" )  break ;  
  var arg = split ( i . name , "," )  ;
  var n = arg [ 0 ]  ;
 arg . remove ( 0 )  ; 
 if ( arg . len (  )  == 1 ) arg = arg [ 0 ]  ; 
 
  else  if ( arg . len (  )  == 0 ) arg = null ; 
 
  
  if ( getroottable (  )  . rawin ( n )  )  if (  squirrelTypeOf ( getroottable ( ) [ n ] )  == "class" ) c = newActor ( getroottable (  )  [ n ]  , i . x + 8 , i . y - 8 , arg )  ; 
 
  
  break ;  }  return c ;
  }  ; 



}; 
