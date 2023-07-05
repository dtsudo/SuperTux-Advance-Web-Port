if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/global.nut'] = function () { 


gvVersion = "0.2.1" ; 
gvMap = 0 ; 
gvGameMode = 0 ; 
gvQuit = false ; 
createNewGameObject =  function (  ) {  return  { difficulty : 0 , file :  - 1 , coins : 0 , levelCoins : 0 , maxCoins : 0 , redCoins : 0 , maxRedCoins : 0 , secrets : 0 , maxSecrets : 0 , enemies : 0 , maxEnemies : 0 , health : 12 , maxHealth : 12 , weapon : 0 , maxEnergy : 0 , fireBonus : 0 , iceBonus : 0 , airBonus : 0 , earthBonus : 0 , subitem : 0 , completed :  {  }  , unblocked :  {  }  , allCoins :  {  }  , allEnemies :  {  }  , allSecrets :  {  }  , bestTime :  {  }  , bestCoins :  {  }  , bestEnemies :  {  }  , bestSecrets :  {  }  , igt : 0 , colorswitch :  [ false , false , false , false , false , false , false , false ]  , characters :  { Tux :  { over : "sprTuxOverworld" , doll : "sprTuxDoll" , normal : "sprTux" , fire : "sprTuxFire" , ice : "sprTuxIce" , air : "sprTuxAir" , earth : "sprTuxEarth" , wave :  [ 40 , 41 ]  }  , Penny :  { over : "sprPennyOverworld" , doll : "sprPennyDoll" , normal : "sprPenny" , fire : "sprPennyFire" , ice : "sprPennyIce" , air : "sprPennyAir" , earth : "sprPennyEarth" , wave :  [ 40 , 41 ]  }  }  , secretOrbs :  [ false , false , false , false , false , false , false , false ]  , levelEvents :  {  }  , friends :  {  }  , playerChar : "Tux" , world : "res/map/overworld-0.json" , owx : 0 , owy : 0 , owd : 0 , check : false , chx : 0 , chy : 0 , berries : 0 , path : "res/map/" , canres : false , bossHealth : 0 }  ;
  }  ; 
game = createNewGameObject (  )  ; 
gvPlayer = false ; 
gvPlayer2 = false ; 
gvBoss = false ; 
strDifficulty =  [  ]  ; 
config =  { key :  { up : k_up , down : k_down , left : k_left , right : k_right , jump : k_z , shoot : k_x , run : k_lshift , sneak : k_lctrl , pause : k_escape , swap : k_a , accept : k_enter , leftPeek : k_home , rightPeek : k_end , downPeek : k_pagedown , upPeek : k_pageup }  , joy :  { jump : 0 , shoot : 2 , run : 4 , sneak : 5 , pause : 7 , swap : 3 , accept : 0 , leftPeek :  - 1 , rightPeek :  - 1 , downPeek :  - 1 , upPeek :  - 1 , xPeek :  - 1 , yPeek :  - 1 }  , autorun : false , stickspeed : true , playerChar : 0 , lang : "en" , showleveligt : false , showglobaligt : false , light : false , showcursor : true , usefilter : false , soundVolume : 64 , musicVolume : 64 , fullscreen : false }  ; 
contribDidRun =  {  }  ; 
gvScreen = 0 ; 
gvPlayScreen = 0 ; 
gvPlayScreen2 = 0 ; 
gvSplitScreen = false ; 
camx = 0 ; 
camy = 0 ; 
camx1 = 0 ; 
camy1 = 0 ; 
camx2 = 0 ; 
camy2 = 0 ; 
camxprev = 0 ; 
camyprev = 0 ; 
gvTextW = 0 ; 
gvScreenW = 0 ; 
gvScreenH = 0 ; 
gvFPS = 0 ; 
gvWeather = 0 ; 
gvIGT = 0 ; 
gvDoIGT = true ; 
gvWarning = 360.0 ; 
gvCamTarget = false ; 
gvFadeTime = 0 ; 
gvNextLevel = "" ; 
gvTimeAttack = false ; 
gvTAStart = "aurora-learn" ; 
gvTAFullGame = false ; 
gvKeyCopper = false ; 
gvKeySilver = false ; 
gvKeyGold = false ; 
gvKeyMythril = false ; 



}; 
