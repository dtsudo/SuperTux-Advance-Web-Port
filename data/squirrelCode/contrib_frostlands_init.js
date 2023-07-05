if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['contrib/frostlands/init.nut'] = function () { 


print ( "Found Frostlands" )  ; 
addTimeAttackWorld ( "Frostlands" , "frostlands" , "fw-1" )  ; 
gvAchievements . welcomeFrostlands =  function (  ) {  return  ( game . path == "contrib/frostlands/" )  ;
  }  ; 



}; 
