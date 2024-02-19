if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/npc.nut'] = function () { 


NPC =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 returnVal . target = null ; 
 
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
 
  else  if ( gvLangObj [ "npc" ]  . rawin ( argv [ i ]  )  ) arr . push ( textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ argv [ i ]  ]  )  , gvTextW )  )  ; 
 
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
 
  else  if ( gvLangObj [ "npc" ]  . rawin ( argv [ i ]  )  ) arr . push ( textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ argv [ i ]  ]  )  , gvTextW )  )  ; 
 
  else arr . push ( "" )  ; 
 
  
  
  
  } 
  } 
  
  } ;  returnVal . run = function (  ) {  if ( gvPlayer && gvPlayer2 )  { 
  if ( distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  ) target = gvPlayer ; 
 
  else target = gvPlayer2 ; 
 
  } 
  
  else  if ( gvPlayer ) target = gvPlayer ; 
 
  else  if ( gvPlayer2 ) target = gvPlayer2 ; 
 
  
  
  if ( target != null && sayfunc != null )  { 
  if ( gvPlayer && gvPlayer2 && hitTest ( shape , gvPlayer . shape )  && hitTest ( shape , gvPlayer2 . shape )  && getcon ( "up" , "press" , false , 0 )  ) this [ sayfunc ]  (  )  ; 
 
  else  if ( hitTest ( shape , target . shape )  && getcon ( "up" , "press" , false , target . playerNum )  && sayfunc != null ) this [ sayfunc ]  (  )  ; 
 
  
  if ( gvInfoBox == text )  if (  ! inDistance2 ( x , y , target . x , target . y , 32 )  ) gvInfoBox = "" ; 
 
  
  if ( inDistance2 ( x , y , target . x , target . y , 32 )  )  { 
  if ( x > target . x + 2 ) flip = 1 ; 
 
  if ( x < target . x - 2 ) flip = 0 ; 
 
  } 
  
  } 
  
  } ;  returnVal . draw = function (  ) {  if ( gvPlayer && gvPlayer2 && hitTest ( shape , gvPlayer . shape )  && hitTest ( shape , gvPlayer2 . shape )  )  { 
  if ( sprite == 0 && sayfunc == "sayChar" &&  (  ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  ) ] !== undefined) )  ||  ( (gvLangObj [ "npc" ] [ (  ( argv [ 3 ]  +  squirrelTypeOf ( gvPlayer )  )  ) ] !== undefined) )  ||  ( (gvLangObj [ "npc" ] [ (  ( argv [ 3 ]  + "-" +  squirrelTypeOf ( gvPlayer )  )  ) ] !== undefined) )  )  ) drawSprite ( sprTalk , 1 , gvPlayer . x - camx , gvPlayer . y - camy - 24 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  else  if ( sayfunc == "say" && talki > 0 || sayfunc == "sayRand" ) drawSprite ( sprTalk , 0 , x - camx , y - spriteH ( sprite )  - camy - 4 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  else  if ( sprite != 0 ) drawSprite ( sprTalk , 2 , x - camx , y - spriteH ( sprite )  - camy - 4 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  
  
  if ( sprite == 0 && sayfunc == "sayChar" &&  (  ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  ) ] !== undefined) )  ||  ( (gvLangObj [ "npc" ] [ (  ( argv [ 3 ]  +  squirrelTypeOf ( gvPlayer2 )  )  ) ] !== undefined) )  ||  ( (gvLangObj [ "npc" ] [ (  ( argv [ 3 ]  + "-" +  squirrelTypeOf ( gvPlayer2 )  )  ) ] !== undefined) )  )  ) drawSprite ( sprTalk , 1 , gvPlayer2 . x - camx , gvPlayer2 . y - camy - 24 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  else  if ( sayfunc == "say" && talki > 0 || sayfunc == "sayRand" ) drawSprite ( sprTalk , 0 , x - camx , y - spriteH ( sprite )  - camy - 4 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  else  if ( sprite != 0 ) drawSprite ( sprTalk , 2 , x - camx , y - spriteH ( sprite )  - camy - 4 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  
  
  } 
  
  else  if ( target != null && hitTest ( shape , target . shape )  )  { 
  if ( sprite == 0 && sayfunc == "sayChar" &&  (  ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  ) ] !== undefined) )  ||  ( (gvLangObj [ "npc" ] [ (  ( argv [ 3 ]  +  squirrelTypeOf ( target )  )  ) ] !== undefined) )  ||  ( (gvLangObj [ "npc" ] [ (  ( argv [ 3 ]  + "-" +  squirrelTypeOf ( target )  )  ) ] !== undefined) )  )  ) drawSprite ( sprTalk , 1 , target . x - camx , target . y - camy - 24 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  else  if ( sayfunc == "say" && talki > 0 || sayfunc == "sayRand" ) drawSprite ( sprTalk , 0 , x - camx , y - spriteH ( sprite )  - camy - 4 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  else  if ( sprite != 0 ) drawSprite ( sprTalk , 2 , x - camx , y - spriteH ( sprite )  - camy - 4 + round ( sin ( getFrames (  )  . tofloat (  )  / 5 )  )  )  ; 
 
  
  
  } 
  
  
  if ( useflip ) drawSpriteEx ( sprite , getFrames (  )  * useflip , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprite , flip , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 
  } ;  returnVal . say = function (  ) {  if (  ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  + "-" + talki ) ] !== undefined) )  ) text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ argv [ 3 ]  + "-" + talki ]  )  , gvTextW )  ; 
 
  else text = arr [ 0 ]  ; 
 
 gvInfoBox = text ; 
talki ++  ; 
 if (  !  (  ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  + "-" + talki ) ] !== undefined) )  )  ) talki = 0 ; 
 
  } ;  returnVal . sayRand = function (  ) {  if (  ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  + "-" + talki ) ] !== undefined) )  ) text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ argv [ 3 ]  + "-" + talki ]  )  , gvTextW )  ; 
 
  else text = "" ; 
 
 gvInfoBox = text ; 
talki = randInt ( arr [ 1 ]  )  ; 
 if (  !  (  ( (gvLangObj [ "npc" ] [ ( argv [ 3 ]  + "-" + talki ) ] !== undefined) )  )  ) talki = 0 ; 
 
  } ;  returnVal . sayChar = function (  ) { text = "" ; 
 if (  ( (gvLangObj [ "npc" ] [ (  ( argv [ 3 ]  +  squirrelTypeOf ( target )  )  ) ] !== undefined) )  ) text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ argv [ 3 ]  +  squirrelTypeOf ( target )  ]  )  , gvTextW )  ; 
 
  else  if (  ( (gvLangObj [ "npc" ] [ (  ( argv [ 3 ]  + "-" +  squirrelTypeOf ( target )  )  ) ] !== undefined) )  ) text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ argv [ 3 ]  + "-" +  squirrelTypeOf ( target )  ]  )  , gvTextW )  ; 
 
  else  if (  ( (gvLangObj [ "npc" ] [ (  ( argv [ 3 ]  )  ) ] !== undefined) )  ) text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ argv [ 3 ]  ]  )  , gvTextW )  ; 
 
  
  
 gvInfoBox = text ; 
 } ;  returnVal . rescueKonqi = function (  ) { text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ "konqi-c" ]  )  , gvTextW )  ; 
gvInfoBox = text ; 
freeKonqi (  )  ; 
 if ( actor . rawin ( "BossDoor" )  )  {     var foreachOutput1 = squirrelForEach( actor [ "BossDoor" ]  );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue(); i . opening = true ; 
    }  }  
  } ;  returnVal . rescueKatie = function (  ) { text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ "katie-c" ]  )  , gvTextW )  ; 
gvInfoBox = text ; 
freeKonqi (  )  ; 
 if ( actor . rawin ( "BossDoor" )  )  {     var foreachOutput2 = squirrelForEach( actor [ "BossDoor" ]  );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; i = foreachOutput2.getValue(); i . opening = true ; 
    }  }  
  } ;  returnVal . rescueMidi = function (  ) { text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ "midi-c" ]  )  , gvTextW )  ; 
gvInfoBox = text ; 
freeMidi (  )  ; 
 if ( actor . rawin ( "BossDoor" )  )  {     var foreachOutput3 = squirrelForEach( actor [ "BossDoor" ]  );     while(true)     {        foreachOutput3.next();        if (foreachOutput3.isDone()) break; i = foreachOutput3.getValue(); i . opening = true ; 
    }  }  
  } ;  returnVal . rescueFriend = function (  ) {  if ( sprite == sprXue )  { 
  if (  ! game . friends . rawin ( "Xue" )  ) game . friends . Xue = true ; 
 
 text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ "xue-c" ]  )  , gvTextW )  ; 
 } 
  
  if ( sprite == sprGnu )  if (  ! game . friends . rawin ( "Gnu" )  )  { 
 game . friends . Gnu = true ; 
text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ "gnu-c" ]  )  , gvTextW )  ; 
 } 
  
  
  if ( sprite == sprPlasmaBreeze )  if (  ! game . friends . rawin ( "PlasmaBreeze" )  )  { 
 game . friends . PlasmaBreeze = true ; 
text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ "breeze-c" ]  )  , gvTextW )  ; 
 } 
  
  
  if ( sprite == sprRockyRaccoon )  if (  ! game . friends . rawin ( "RockyRaccoon" )  )  { 
 game . friends . RockyRaccoon = true ; 
text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ "rocky-c" ]  )  , gvTextW )  ; 
 } 
  
  
  if ( sprite == sprPygame )  if (  ! game . friends . rawin ( "Pygame" )  )  { 
 game . friends . Pygame = true ; 
text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ "python-c" ]  )  , gvTextW )  ; 
 } 
  
  
  if ( sprite == sprGaruda )  if (  ! game . friends . rawin ( "Garuda" )  )  { 
 game . friends . Garuda = true ; 
text = textLineLen ( formatInfo ( gvLangObj [ "npc" ]  [ "garuda-c" ]  )  , gvTextW )  ; 
 } 
  
  
 gvInfoBox = text ; 
 if ( actor . rawin ( "BossDoor" )  )  {     var foreachOutput4 = squirrelForEach( actor [ "BossDoor" ]  );     while(true)     {        foreachOutput4.next();        if (foreachOutput4.isDone()) break; i = foreachOutput4.getValue(); i . opening = true ; 
    }  }  
  } ;  returnVal . wantFish = function (  ) {  if ( game . redCoins < game . maxRedCoins ) text = formatInfo ( arr [ 0 ]  )  ; 
 
  else text = formatInfo ( arr [ 1 ]  )  ; 
 
 gvInfoBox = text ; 
 } ;  returnVal . watchActor = function (  ) {  if ( checkActor ( mapActor [ arr [ 0 ]  . tointeger (  )  ]  )  ) text = formatInfo ( arr [ 1 ]  )  ; 
 
  else text = formatInfo ( arr [ 2 ]  )  ; 
 
 gvInfoBox = text ; 
 } ;  returnVal . _typeof = function (  ) {  return "NPC" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . text = "" ; 
 squirrelClassFunction . useflip = 0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . sprite = 0 ; 
 squirrelClassFunction . arr = null ; 
 squirrelClassFunction . talki = 0 ; 
 squirrelClassFunction . sayfunc = null ; 
 squirrelClassFunction . argv = null ; 
 squirrelClassFunction . target = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
freeKonqi =  function (  ) { game . characters [ "Konqi" ] = true ; 
game . characters [ "Katie" ] = true ; 
game . friends [ "Konqi" ] = true ; 
game . friends [ "Katie" ] = true ; 
 }  ; 
freeMidi =  function (  ) { game . characters [ "Midi" ] = true ; 
game . friends [ "Midi" ] = true ; 
game . characters [ "Kiki" ] = true ; 
game . friends [ "Kiki" ] = true ; 
 }  ; 
freeSurge =  function (  ) { game . characters [ "Surge" ] = true ; 
game . friends [ "Surge" ] = true ; 
game . characters [ "Dashie" ] = true ; 
game . friends [ "Dashie" ] = true ; 
 }  ; 
freeNeverball =  function (  ) { game . characters [ "Neverball" ] = true ; 
game . friends [ "Neverball" ] = true ; 
 }  ; 
npcDef =  { testcap :  { sprite : "sprDeathcap" , w : 8 , h : 8 , anStand :  [ 0 ]  , anTalk :  [ 0 ]  , anWalk :  [ 0 , 1 , 2 , 3 ]  }  }  ; 
NPCv2 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 



}; 
