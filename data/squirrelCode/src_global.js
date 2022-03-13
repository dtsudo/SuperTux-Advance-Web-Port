if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/global.nut'] = function () { 


gvVersion = "0.0.10" ; 
gvMap = 0 ; 
gvGameMode = 0 ; 
gvQuit = false ; 
game =  { difficulty : 0 , file : 0 , coins : 0 , levelCoins : 0 , maxCoins : 0 , secrets : 0 , enemies : 0 , health : 4 , maxHealth : 4 , weapon : 0 , maxEnergy : 0 , fireBonus : 0 , iceBonus : 0 , subitem : 0 , completed :  {  }  , allCoins :  {  }  , allEnemies :  {  }  , allSecrets :  {  }  , bestTime :  {  }  , igt : 0 , colorswitch :  [ false , false , false , false , false , false , false , false ]  , characters :  { Tux :  [ "sprTuxOverworld" , "sprTuxDoll" , "sprTux" ,  [ 40 , 41 ]  ]  }  , secretOrbs :  [ false , false , false , false , false , false , false , false ]  , friends :  {  }  , playerChar : "Tux" , world : "res/map/overworld-0.json" , owx : 0 , owy : 0 , owd : 0 , check : false , chx : 0 , chy : 0 , berries : 0 , path : "res/map/" }  ; 
gameDefault = clone ( game )  ; 
gvPlayer = false ; 
strDifficulty =  [  ]  ; 
config =  { key :  { up : k_up , down : k_down , left : k_left , right : k_right , jump : k_z , shoot : k_x , run : k_lshift , sneak : k_lctrl , pause : k_escape , swap : k_a , accept : k_enter , leftPeek : k_home , rightPeek : k_end , downPeek : k_pagedown , upPeek : k_pageup }  , joy :  { jump : 0 , shoot : 2 , run : 4 , sneak : 5 , pause : 7 , swap : 3 , accept : 0 , leftPeek :  - 1 , rightPeek :  - 1 , downPeek :  - 1 , upPeek :  - 1 }  , autorun : false , stickspeed : true , playerChar : 0 , lang : "en" , showleveligt : false , showglobaligt : false , light : false }  ; 
contribDidRun =  {  }  ; 
gvScreen = 0 ; 
gvPlayScreen = 0 ; 
camx = 0 ; 
camy = 0 ; 
camxprev = 0 ; 
camyprev = 0 ; 
gvFPS = 0 ; 
gvWeather = 0 ; 
gvIGT = 0 ; 
gvDoIGT = true ; 
gvWarning = 360.0 ; 
gvCamTarget = false ; 
gvKeyCopper = false ; 
gvKeySilver = false ; 
gvKeyGold = false ; 
gvKeyMythril = false ; 



}; 
