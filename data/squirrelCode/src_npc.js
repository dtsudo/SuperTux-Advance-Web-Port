if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/npc.nut'] = function () { 


NPC =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = 0 ; 
 returnVal . text = "" ; 
 returnVal . useflip = 0 ; 
 returnVal . flip = 0 ; 
 returnVal . sprite = 0 ; 
 returnVal . sayfunc = null ; 
 returnVal . arr = null ; 
 returnVal . talki = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y - 16 , 24 , 24 , 0 )  ; 
flip = randInt ( 2 )  ; 
 if ( _arr != null )  { 
  var argv = split ( _arr , ", " )  ;
  if ( getroottable (  )  . rawin ( argv [ 0 ]  )  ) sprite = getroottable (  )  [ argv [ 0 ]  ]  ; 
 
 useflip = argv [ 1 ]  . tofloat (  )  ; 
sayfunc = argv [ 2 ]  ; 
arr =  [  ]  ; 
 for (  var i = 3 ;
 i < argv . len (  )  ; i ++  )  { 
  if ( i >= argv . len (  )  ) arr . push ( "" )  ; 
 
  else  if ( argv [ i ]  == 0 ) arr . push ( "" )  ; 
 
  else  if ( gvLangObj [ "npc" ]  . rawin ( argv [ i ]  )  ) arr . push ( textLineLen ( gvLangObj [ "npc" ]  [ argv [ i ]  ]  , gvTextW )  )  ; 
 
  else arr . push ( "" )  ; 
 
  
  
  } 
  } 
  
  } ;  returnVal . run = function (  ) {  if ( gvPlayer && sayfunc != null )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  { 
  if ( getcon ( "up" , "press" )  && this . rawin ( sayfunc )  ) this [ sayfunc ]  (  )  ; 
 
  if ( sprite == 0 )  { 
  if ( sayfunc == "sayChar" )  switch (  squirrelTypeOf ( gvPlayer )  )  {  case "Tux" :  if ( arr [ 0 ]  != "" ) drawSprite ( sprTalk , 1 , gvPlayer . x - camx , gvPlayer . y - camy - 24 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  break ;  case "Konqi" :  if ( arr [ 1 ]  != "" ) drawSprite ( sprTalk , 1 , gvPlayer . x - camx , gvPlayer . y - camy - 24 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  break ;  case "Midi" :  if ( arr [ 2 ]  != "" ) drawSprite ( sprTalk , 1 , gvPlayer . x - camx , gvPlayer . y - camy - 24 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  break ;  }  
  } 
  
  else  if ( sayfunc == "say" && talki > 0 || sayfunc == "sayRand" ) drawSprite ( sprTalk , 0 , x - camx , y - spriteH ( sprite )  - camy - 4 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  else drawSprite ( sprTalk , 2 , x - camx , y - spriteH ( sprite )  - camy - 4 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  
  } 
  
  if ( gvInfoBox == text )  if (  ! inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 32 )  ) gvInfoBox = "" ; 
 
  
  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 32 )  )  { 
  if ( x > gvPlayer . x + 2 ) flip = 1 ; 
 
  if ( x < gvPlayer . x - 2 ) flip = 0 ; 
 
  } 
  
  } 
  
  if ( sprite != 0 )  { 
  if ( useflip ) drawSpriteEx ( sprite , getFrames (  )  * useflip , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprite , flip , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 
  } 
  
  } ;  returnVal . say = function (  ) { text = arr [ talki ]  ; 
gvInfoBox = text ; 
talki ++  ; 
 if ( talki >= arr . len (  )  ) talki = 0 ; 
 
  } ;  returnVal . sayRand = function (  ) { text = arr [ randInt ( arr . len (  )  )  ]  ; 
gvInfoBox = text ; 
 } ;  returnVal . sayChar = function (  ) {  switch (  squirrelTypeOf ( gvPlayer )  )  {  case "Tux" : text = arr [ 0 ]  ; 
 break ;  case "Konqi" : text = arr [ 1 ]  ; 
 break ;  case "Midi" : text = arr [ 2 ]  ; 
 break ;  default : text = arr [ 3 ]  ; 
 break ;  } gvInfoBox = text ; 
 } ;  returnVal . rescueKonqi = function (  ) { text = textLineLen ( gvLangObj [ "npc" ]  [ "konqi-c" ]  , gvTextW )  ; 
gvInfoBox = text ; 
freeKonqi (  )  ; 
 if ( actor . rawin ( "BossDoor" )  )  {     var foreachOutput = squirrelForEach ( actor [ "BossDoor" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ; i . opening = true ; 
    }  }  
  } ;  returnVal . rescueMidi = function (  ) { text = textLineLen ( gvLangObj [ "npc" ]  [ "midi-c" ]  , gvTextW )  ; 
gvInfoBox = text ; 
freeMidi (  )  ; 
 if ( actor . rawin ( "BossDoor" )  )  {     var foreachOutput = squirrelForEach ( actor [ "BossDoor" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ; i . opening = true ; 
    }  }  
  } ;  returnVal . rescueFriend = function (  ) {  if ( sprite == sprXue )  { 
  if (  ! game . friends . rawin ( "Xue" )  ) game . friends . Xue = true ; 
 
 text = textLineLen ( gvLangObj [ "npc" ]  [ "xue-c" ]  , gvTextW )  ; 
 } 
  
  if ( sprite == sprGnu )  if (  ! game . friends . rawin ( "Gnu" )  )  { 
 game . friends . Gnu = true ; 
text = textLineLen ( gvLangObj [ "npc" ]  [ "gnu-c" ]  , gvTextW )  ; 
 } 
  
  
  if ( sprite == sprPlasmaBreeze )  if (  ! game . friends . rawin ( "PlasmaBreeze" )  )  { 
 game . friends . PlasmaBreeze = true ; 
text = textLineLen ( gvLangObj [ "npc" ]  [ "breeze-c" ]  , gvTextW )  ; 
 } 
  
  
  if ( sprite == sprRockyRaccoon )  if (  ! game . friends . rawin ( "RockyRaccoon" )  )  { 
 game . friends . RockyRaccoon = true ; 
text = textLineLen ( gvLangObj [ "npc" ]  [ "rocky-c" ]  , gvTextW )  ; 
 } 
  
  
  if ( sprite == sprPygame )  if (  ! game . friends . rawin ( "Pygame" )  )  { 
 game . friends . Pygame = true ; 
text = textLineLen ( gvLangObj [ "npc" ]  [ "python-c" ]  , gvTextW )  ; 
 } 
  
  
  if ( sprite == sprGaruda )  if (  ! game . friends . rawin ( "Garuda" )  )  { 
 game . friends . Garuda = true ; 
text = textLineLen ( gvLangObj [ "npc" ]  [ "garuda-c" ]  , gvTextW )  ; 
 } 
  
  
 gvInfoBox = text ; 
 if ( actor . rawin ( "BossDoor" )  )  {     var foreachOutput = squirrelForEach ( actor [ "BossDoor" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ; i . opening = true ; 
    }  }  
  } ;  returnVal . _typeof = function (  ) {  return "NPC" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
freeKonqi =  function (  ) {  if (  ! game . characters . rawin ( "Konqi" )  ) game . characters [ "Konqi" ] =  [ "sprKonqiOverworld" , "sprKonqiDoll" , "sprKonqi" ,  [ 8 , 9 ]  ]  ; 
 
  if (  ! game . friends . rawin ( "Konqi" )  ) game . friends [ "Konqi" ] = true ; 
 
  }  ; 
freeMidi =  function (  ) {  if (  ! game . characters . rawin ( "Midi" )  ) game . characters [ "Midi" ] =  [ "sprMidiOverworld" , "sprMidiDoll" , "sprMidi" ,  [ 177 , 236 ]  ]  ; 
 
  if (  ! game . friends . rawin ( "Midi" )  ) game . friends [ "Midi" ] = true ; 
 
  }  ; 



}; 
