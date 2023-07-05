if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/npc.nut'] = function () { 


NPC =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . text = "" ; 
 returnVal . useflip = 0 ; 
 returnVal . flip = 0 ; 
 returnVal . sprite = 0 ; 
 returnVal . arr = null ; 
 returnVal . talki = 0 ; 
 returnVal . sayfunc = null ; 
 returnVal . argv = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y - 16 , 24 , 24 , 0 )  ; 
flip = randInt ( 2 )  ; 
 if ( _arr != null )  { 
 argv = split ( _arr , ", " )  ; 
 if ( getroottable (  )  . rawin ( argv [ 0 ]  )  ) sprite = getroottable (  )  [ argv [ 0 ]  ]  ; 
 
 useflip = argv [ 1 ]  . tofloat (  )  ; 
sayfunc = argv [ 2 ]  ; 
arr =  [  ]  ; 
 for (  var i = 3 ;
 i < argv . len (  )  ; i ++  )  { 
  if ( i >= argv . len (  )  ) arr . push ( "" )  ; 
 
  else  if ( canint ( argv [ i ]  )  ) arr . push ( argv [ i ]  . tointeger (  )  )  ; 
 
  else  if ( argv [ i ]  == 0 ) arr . push ( "" )  ; 
 
  else  if ( gvLangObj [ "npc" ]  . rawin ( argv [ i ]  )  ) arr . push ( textLineLen ( gvLangObj [ "npc" ]  [ argv [ i ]  ]  , gvTextW )  )  ; 
 
  else arr . push ( "" )  ; 
 
  
  
  
  } 
  } 
  
  } ;  returnVal . setDia = function ( _arr = null ) {  if ( _arr != null )  { 
  var oldargv = argv ;
 argv = split ( _arr , "," )  ; 
argv . insert ( 0 , oldargv [ 0 ]  )  ; 
argv . insert ( 1 , oldargv [ 1 ]  )  ; 
argv . insert ( 2 , oldargv [ 2 ]  )  ; 
arr =  [  ]  ; 
 for (  var i = 0 ;
 i < argv . len (  )  ; i ++  )  { 
  if ( i >= argv . len (  )  ) arr . push ( "" )  ; 
 
  else  if ( canint ( argv [ i ]  )  ) arr . push ( argv [ i ]  . tointeger (  )  )  ; 
 
  else  if ( argv [ i ]  == 0 ) arr . push ( "" )  ; 
 
  else  if ( gvLangObj [ "npc" ]  . rawin ( argv [ i ]  )  ) arr . push ( textLineLen ( gvLangObj [ "npc" ]  [ argv [ i ]  ]  , gvTextW )  )  ; 
 
  else arr . push ( "" )  ; 
 
  
  
  
  } 
  } 
  
  } ;  returnVal . run = function (  ) {  if ( gvPlayer && sayfunc != null )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  { 
  if ( getcon ( "up" , "press" )  && sayfunc != null ) this [ sayfunc ]  (  )  ; 
 
  if ( sprite == 0 && sayfunc == "sayChar" &&  (  ( (gvLangObj [ "npc" ] [argv [ 3 ] ] !== undefined) )  ||  ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  +  squirrelTypeOf ( gvPlayer )  ) ] !== undefined) )  || (gvLangObj [ "npc" ] [ ( argv [ 3 ]  + "-" +  squirrelTypeOf ( gvPlayer )  ) ] !== undefined) )  ) drawSprite ( sprTalk , 1 , gvPlayer . x - camx , gvPlayer . y - camy - 24 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  else  if ( sayfunc == "say" && talki > 0 || sayfunc == "sayRand" ) drawSprite ( sprTalk , 0 , x - camx , y - spriteH ( sprite )  - camy - 4 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  else  if ( sprite != 0 ) drawSprite ( sprTalk , 2 , x - camx , y - spriteH ( sprite )  - camy - 4 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  
  
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
  
  } ;  returnVal . say = function (  ) {  if ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  + "-" + talki ) ] !== undefined) ) text = textLineLen ( gvLangObj [ "npc" ]  [ argv [ 3 ]  + "-" + talki ]  , gvTextW )  ; 
 
  else text = arr [ 0 ]  ; 
 
 gvInfoBox = text ; 
talki ++  ; 
 if (  !  ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  + "-" + talki ) ] !== undefined) )  ) talki = 0 ; 
 
  } ;  returnVal . sayRand = function (  ) {  if ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  + "-" + talki ) ] !== undefined) ) text = textLineLen ( gvLangObj [ "npc" ]  [ argv [ 3 ]  + "-" + talki ]  , gvTextW )  ; 
 
  else text = "" ; 
 
 gvInfoBox = text ; 
talki = randInt ( arr [ 1 ]  )  ; 
 if (  !  ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  + "-" + talki ) ] !== undefined) )  ) talki = 0 ; 
 
  } ;  returnVal . sayChar = function (  ) { text = "" ; 
 if ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  +  squirrelTypeOf ( gvPlayer )  ) ] !== undefined) ) text = textLineLen ( gvLangObj [ "npc" ]  [ argv [ 3 ]  +  squirrelTypeOf ( gvPlayer )  ]  , gvTextW )  ; 
 
  else  if ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  + "-" +  squirrelTypeOf ( gvPlayer )  ) ] !== undefined) ) text = textLineLen ( gvLangObj [ "npc" ]  [ argv [ 3 ]  + "-" +  squirrelTypeOf ( gvPlayer )  ]  , gvTextW )  ; 
 
  else  if ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  ) ] !== undefined) ) text = textLineLen ( gvLangObj [ "npc" ]  [ argv [ 3 ]  ]  , gvTextW )  ; 
 
  
  
 gvInfoBox = text ; 
 } ;  returnVal . rescueKonqi = function (  ) { text = textLineLen ( gvLangObj [ "npc" ]  [ "konqi-c" ]  , gvTextW )  ; 
gvInfoBox = text ; 
freeKonqi (  )  ; 
 if ( actor . rawin ( "BossDoor" )  )  {     var foreachOutput1 = squirrelForEach( actor [ "BossDoor" ]  );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue(); i . opening = true ; 
    }  }  
  } ;  returnVal . rescueKatie = function (  ) { text = textLineLen ( gvLangObj [ "npc" ]  [ "katie-c" ]  , gvTextW )  ; 
gvInfoBox = text ; 
freeKonqi (  )  ; 
 if ( actor . rawin ( "BossDoor" )  )  {     var foreachOutput2 = squirrelForEach( actor [ "BossDoor" ]  );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; i = foreachOutput2.getValue(); i . opening = true ; 
    }  }  
  } ;  returnVal . rescueMidi = function (  ) { text = textLineLen ( gvLangObj [ "npc" ]  [ "midi-c" ]  , gvTextW )  ; 
gvInfoBox = text ; 
freeMidi (  )  ; 
 if ( actor . rawin ( "BossDoor" )  )  {     var foreachOutput3 = squirrelForEach( actor [ "BossDoor" ]  );     while(true)     {        foreachOutput3.next();        if (foreachOutput3.isDone()) break; i = foreachOutput3.getValue(); i . opening = true ; 
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
 if ( actor . rawin ( "BossDoor" )  )  {     var foreachOutput4 = squirrelForEach( actor [ "BossDoor" ]  );     while(true)     {        foreachOutput4.next();        if (foreachOutput4.isDone()) break; i = foreachOutput4.getValue(); i . opening = true ; 
    }  }  
  } ;  returnVal . wantFish = function (  ) {  if ( game . redCoins < game . maxRedCoins ) text = arr [ 0 ]  ; 
 
  else text = arr [ 1 ]  ; 
 
 gvInfoBox = text ; 
 } ;  returnVal . watchActor = function (  ) {  if ( checkActor ( mapActor [ arr [ 0 ]  . tointeger (  )  ]  )  ) text = arr [ 1 ]  ; 
 
  else text = arr [ 2 ]  ; 
 
 gvInfoBox = text ; 
 } ;  returnVal . _typeof = function (  ) {  return "NPC" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . text = "" ; 
 squirrelClassFunction . useflip = 0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . sprite = 0 ; 
 squirrelClassFunction . arr = null ; 
 squirrelClassFunction . talki = 0 ; 
 squirrelClassFunction . sayfunc = null ; 
 squirrelClassFunction . argv = null ; 
 return squirrelClassFunction; })()) ; 
freeKonqi =  function (  ) { game . characters [ "Konqi" ] =  { over : "sprKonqiOverworld" , doll : "sprKonqiDoll" , normal : "sprKonqi" , fire : "sprKonqiFire" , ice : "sprKonqiIce" , air : "sprKonqiAir" , earth : "sprKonqiEarth" , wave :  [ 8 , 53 ]  }  ; 
game . characters [ "Katie" ] =  { over : "sprKatieOverworld" , doll : "sprKatieDoll" , normal : "sprKatie" , fire : "sprKatieFire" , ice : "sprKatieIce" , air : "sprKatieAir" , earth : "sprKatieEarth" , wave :  [ 8 , 53 ]  }  ; 
 if (  ! game . friends . rawin ( "Konqi" )  ) game . friends [ "Konqi" ] = true ; 
 
  }  ; 
freeMidi =  function (  ) {  if (  ! game . characters . rawin ( "Midi" )  ) game . characters [ "Midi" ] =  { over : "sprMidiOverworld" , doll : "sprMidiDoll" , normal : "sprMidi" , fire : "sprMidi" , ice : "sprMidi" , air : "sprMidi" , earth : "sprMidi" , wave :  [ 177 , 236 ]  }  ; 
 
  if (  ! game . friends . rawin ( "Midi" )  ) game . friends [ "Midi" ] = true ; 
 
  }  ; 



}; 
