if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


setResolution ( 320 , 240 )  ; 
gvScreen = newTexture ( screenW (  )  , screenH (  )  )  ; 
gvPlayScreen = newTexture ( screenW (  )  , screenH (  )  )  ; 
bgPause = newTexture ( screenW (  )  , screenH (  )  )  ; 
gvLightScreen = newTexture ( screenW (  )  , screenH (  )  )  ; 
textureSetBlendMode ( gvLightScreen , bm_sub )  ; 
setWindowTitle ( "SuperTux Advance" )  ; 
setWindowIcon ( "icon.png" )  ; 
tileSearchDir . push ( "res" )  ; 
tileSearchDir . push ( "res/gfx" )  ; 
tileSearchDir . push ( "res/map" )  ; 
tileSearchDir . push ( "res/snd" )  ; 
setFPS ( 60 )  ; 
 if ( fileExists ( "config.json" )  ) config = jsonRead ( fileRead ( "config.json" )  )  ; 
 
 gvLangObj = jsonRead ( fileRead ( "lang/en.json" )  )  ; 
gvLangObj = mergeTable ( gvLangObj , jsonRead ( fileRead ( "lang/" + config . lang + ".json" )  )  )  ; 
strDifficulty =  [ gvLangObj [ "difficulty-levels" ]  [ "easy" ]  , gvLangObj [ "difficulty-levels" ]  [ "normal" ]  , gvLangObj [ "difficulty-levels" ]  [ "hard" ]  , gvLangObj [ "difficulty-levels" ]  [ "super" ]  ]  ; 
print ( "Launching SuperTux Advance v." + gvVersion + "..." )  ; 
startMain (  )  ; 
menu = meMain ; 
config . playerchar = "Tux" ; 
update (  )  ; 



});