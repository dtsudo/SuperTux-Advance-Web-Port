if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/timeattack.nut'] = function () { 


gvNextLevel = "" ; 
gvTimeAttack = false ; 
gvTAStart = "aurora-learn" ; 
gvTAStep = 0 ; 
gvTACourse = 0 ; 
addTimeAttackWorld =  function ( displayName , list , folder ) {  if (  ( (gvLangObj [ "level" ] [ ( displayName ) ] !== undefined) )  ) displayName = gvLangObj [ "level" ]  [ displayName ]  ; 
 
  var tempBack = meTimeAttackWorld . pop (  )  ;
  var newSlot =  { name :  function (  ) {  return displayName ;
  }  , func :  function (  ) { game . path = "contrib/" + folder + "/" ; 
gvTACourse = list ; 
menu = meDifficulty ; 
 var searchDirExists = false ;
  for (  var i = 0 ;
 i < tileSearchDir . len (  )  ; i ++  )  { 
  if ( tileSearchDir [ i ]  == "contrib/" + folder + "/gfx" ) searchDirExists = true ; 
 
  } 
  if (  ! searchDirExists ) tileSearchDir . push ( "contrib/" + folder + "/gfx" )  ; 
 
  if ( fileExists ( "contrib/" + folder + "/script.nut" )  &&  ! contribDidRun . rawin ( folder )  )  { 
 donut ( "contrib/" + folder + "/script.nut" )  ; 
contribDidRun [ folder ] = true ; 
 } 
  
  }  }  ;
 meTimeAttackWorld . push ( newSlot )  ; 
meTimeAttackWorld . push ( tempBack )  ; 
 }  ; 



}; 
