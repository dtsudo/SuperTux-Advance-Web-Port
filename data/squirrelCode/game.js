if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['game.brx'] = function () { 


isWebBrowserVersion = true ; 
setWriteDir ( getPrefDir ( "sta" , "supertux-advance" )  )  ; 
donut ( "src/util.nut" )  ; 
donut ( "src/text.nut" )  ; 
donut ( "src/shapes.nut" )  ; 
donut ( "src/tilemap.nut" )  ; 
donut ( "src/mods.nut" )  ; 
donut ( "src/assets.nut" )  ; 
donut ( "src/global.nut" )  ; 
donut ( "src/physactor.nut" )  ; 
donut ( "src/camera.nut" )  ; 
donut ( "src/controls.nut" )  ; 
donut ( "src/menus.nut" )  ; 
donut ( "src/gmmain.nut" )  ; 
donut ( "src/beam.nut" )  ; 
donut ( "src/gmplay.nut" )  ; 
donut ( "src/gmpause.nut" )  ; 
donut ( "src/weapons.nut" )  ; 
donut ( "src/player.nut" )  ; 
donut ( "src/tux.nut" )  ; 
donut ( "src/konqi.nut" )  ; 
donut ( "src/midi.nut" )  ; 
donut ( "src/surge.nut" )  ; 
donut ( "src/cyra.nut" )  ; 
donut ( "src/neverball.nut" )  ; 
donut ( "src/items.nut" )  ; 
donut ( "src/effects.nut" )  ; 
donut ( "src/enemies.nut" )  ; 
donut ( "src/bosses.nut" )  ; 
donut ( "src/debug.nut" )  ; 
donut ( "src/bg.nut" )  ; 
donut ( "src/trigger.nut" )  ; 
donut ( "src/water.nut" )  ; 
donut ( "src/levelend.nut" )  ; 
donut ( "src/platforms.nut" )  ; 
donut ( "src/blocks.nut" )  ; 
donut ( "src/overworld.nut" )  ; 
donut ( "src/secret.nut" )  ; 
donut ( "src/npc.nut" )  ; 
donut ( "src/languagemenu.nut" )  ; 
donut ( "src/contriblevels.nut" )  ; 
donut ( "src/save.nut" )  ; 
donut ( "src/zlist.nut" )  ; 
donut ( "src/pickchar.nut" )  ; 
donut ( "src/weather.nut" )  ; 
donut ( "src/light.nut" )  ; 
donut ( "src/credits.nut" )  ; 
donut ( "src/cursor.nut" )  ; 
donut ( "src/shop.nut" )  ; 
donut ( "src/timeline.nut" )  ; 
donut ( "src/spawner.nut" )  ; 
donut ( "src/achievements.nut" )  ; 
donut ( "src/racer.nut" )  ; 
donut ( "src/network.nut" )  ; 
donut ( "src/accessibility.nut" )  ; 
donut ( "src/timeattack.nut" )  ; 
 if ( fileExists ( "config.json" )  ) config = mergeTable ( config , jsonRead ( fileRead ( "config.json" )  )  )  ; 
 
  if ( joyCount (  )  > 1 )  { 
 config . joy . index = 1 ; 
config . joy2 . index = 0 ; 
 } 
  
  else  { 
 config . joy . index = 1 ; 
config . joy2 . index = 0 ; 
 } 
  
 setSoundVolume ( config . soundVolume )  ; 
setMusicVolume ( config . musicVolume )  ; 
 var disres = displayW (  )  . tofloat (  )  / displayH (  )  . tofloat (  )  ;
  var reschoice = 0 ;
  var aspects =  [  ( 1.0 / 2.0 )  ,  ( 16.0 / 9.0 )  ,  ( 5.0 / 3.0 )  ,  ( 4.0 / 3.0 )  , 1.0 ]  ;
  var resdiff = 100 ;
  for (  var i = 0 ;
 i < aspects . len (  )  ; i ++  )  { 
  if ( abs ( disres - aspects [ i ]  )  < resdiff )  { 
 resdiff = abs ( disres - aspects [ i ]  )  ; 
reschoice = i ; 
 } 
  
  } 
  switch ( reschoice )  {  case 0 : setResolution ( 480 , 240 )  ; 
 break ;  case 1 : setResolution ( 426 , 240 )  ; 
 break ;  case 2 : setResolution ( 400 , 240 )  ; 
 break ;  case 3 : setResolution ( 320 , 240 )  ; 
 break ;  case 4 : setResolution ( 240 , 240 )  ; 
 break ;  default : setResolution ( 320 , 240 )  ; 
 break ;  } gvScreenW = screenW (  )  ; 
gvScreenH = screenH (  )  ; 
gvTextW = floor ( screenW (  )  / 6 )  - 1 ; 
 if ( config . fullscreen ) toggleFullscreen (  )  ; 
 
  if ( config . usefilter ) setScalingFilter ( 1 )  ; 
 
 gvScreen = newTexture ( screenW (  )  , screenH (  )  )  ; 
setScalingFilter ( 0 )  ; 
bgPause = newTexture ( screenW (  )  , screenH (  )  )  ; 
gvTempScreen = newTexture ( screenW (  )  , screenH (  )  )  ; 
textureSetBlendMode ( gvTempScreen , bm_blend )  ; 
gvPlayScreen = newTexture ( screenW (  )  , screenH (  )  )  ; 
textureSetBlendMode ( gvPlayScreen , bm_blend )  ; 
gvPlayScreen2 = newTexture ( screenW (  )  / 2 , screenH (  )  )  ; 
textureSetBlendMode ( gvPlayScreen2 , bm_blend )  ; 
gvLightScreen1 = newTexture ( screenW (  )  , screenH (  )  )  ; 
textureSetBlendMode ( gvLightScreen1 , bm_mod )  ; 
gvLightScreen2 = newTexture ( screenW (  )  , screenH (  )  )  ; 
textureSetBlendMode ( gvLightScreen2 , bm_mod )  ; 
gvScreenGhost = newTexture ( screenW (  )  , screenH (  )  )  ; 
textureSetBlendMode ( gvScreenGhost , bm_blend )  ; 
setWindowTitle ( "SuperTux Advance" )  ; 
setWindowIcon ( "icon.png" )  ; 
tileSearchDir . push ( "res" )  ; 
tileSearchDir . push ( "res/gfx" )  ; 
tileSearchDir . push ( "res/map" )  ; 
tileSearchDir . push ( "res/snd" )  ; 
setFPS ( 60 )  ; 
gvLangObj = jsonRead ( fileRead ( "lang/en.json" )  )  ; 
gvLangObj = mergeTable ( gvLangObj , jsonRead ( fileRead ( "lang/" + config . lang + ".json" )  )  )  ; 
 if ( fileExists ( "save/_achievements.json" )  ) gvUnlockedAchievements = jsonRead ( fileRead ( "save/_achievements.json" )  )  ; 
 
 strDifficulty =  [ gvLangObj [ "difficulty-levels" ]  [ "easy" ]  , gvLangObj [ "difficulty-levels" ]  [ "normal" ]  , gvLangObj [ "difficulty-levels" ]  [ "hard" ]  , gvLangObj [ "difficulty-levels" ]  [ "super" ]  ]  ; 
 var modlist = lsdir ( "mods" )  ;
  for (  var i = 0 ;
 i < modlist . len (  )  ; i ++  )  if ( modlist [ i ]  != "." && modlist [ i ]  != ".." ) donut ( "mods/" + modlist [ i ]  )  ; 
 
 print ( "Launching SuperTux Advance v." + gvVersion + "..." )  ; 
startMain (  )  ; 
menu = meMain ; 
game . playerChar = "Tux" ; 
 if ( fileExists ( "contrib" )  )  { 
  {     var foreachOutput1 = squirrelForEach( lsdir ( "contrib" )  );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  if ( fileExists ( "contrib/" + i + "/init.nut" )  ) donut ( "contrib/" + i + "/init.nut" )  ; 
 
     }  }  } 
  
 gameCycle =  function (  ) { updateAutocon (  )  ; 
 if ( getcon ( "pause" , "press" )  &&  ( levelEndRunner == 0 || levelEndRunner == 1 )  && gvGameMode != gmMain ) togglePause (  )  ; 
 
 gvGameMode (  )  ; 
 }  ; 
gameRender =  function (  ) { resetDrawTarget (  )  ; 
drawImage ( gvScreen , 0 , 0 )  ; 
 }  ; 
gameExit =  function (  ) {  }  ; 
 if (  ! isWebBrowserVersion )  { 
  while (  ! getQuit (  )  &&  ! gvQuit )  { 
 gameCycle (  )  ; 
gameRender (  )  ; 
update (  )  ; 
 } 
  
  } 
  
 


}; 
