if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/cursor.nut'] = function () { 


lastMouseX = mouseX (  )  ; 
lastMouseY = mouseY (  )  ; 
updateCursor =  function (  ) {  if (  ! config . showcursor )  return ; 
  
 drawSprite ( sprCursor , 0 , mouseX (  )  , mouseY (  )  )  ; 
 if ( mouseX (  )  == lastMouseX && mouseY (  )  == lastMouseY )  return ; 
  
 lastMouseX = mouseX (  )  ; 
lastMouseY = mouseY (  )  ; 
 {     var foreachOutput1 = squirrelForEach( menuItemsPos );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; pos = foreachOutput1.getValue();  { 
  if ( mouseX (  )  >= pos . x - 3 && mouseX (  )  <= pos . x + pos . len - 3 && mouseY (  )  >= pos . y && mouseY (  )  <= pos . y + fontH )  { 
 cursor = pos . index ; 
 return ; 
  } 
  
  } 
     }  }  }  ; 
processCursorInput =  function (  ) {  if (  ! config . showcursor )  return ; 
  
  var pos = menuItemsPos [  ( menu . len (  )  > menuMax ? cursor - cursorOffset : cursor )  ]  ;
  if ( mouseX (  )  >= pos . x - 3 && mouseX (  )  <= pos . x + pos . len - 3 && mouseY (  )  >= pos . y && mouseY (  )  <= pos . y + fontH )  { 
  if ( menu [ pos . index ]  . rawin ( "disabled" )  )  return ; 
  
 menu [ pos . index ]  . func (  )  ; 
playSound ( sndMenuSelect , 0 )  ; 
 return ; 
  } 
  
  }  ; 



}; 
