if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/mods.nut'] = function () { 


ebNewGame =  {  }  ; 
ebOverworldStart =  {  }  ; 
ebOverworldRun =  {  }  ; 
ebPlayStart =  {  }  ; 
ebPlayRun =  {  }  ; 
runModEventBuffer =  function ( event ) {  if ( event . len (  )  == 0 )  return ; 
  
  {     var foreachOutput1 = squirrelForEach( event );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  { 
  if (  squirrelTypeOf ( i )  == "function" ) i (  )  ; 
 
  } 
     }  }  }  ; 



}; 
