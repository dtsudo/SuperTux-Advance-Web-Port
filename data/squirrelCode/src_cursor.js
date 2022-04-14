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
 {     var foreachOutput = squirrelForEach ( menuItemsPos ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; pos = foreachOutput . getValue ( ) ;  { 
  if ( mouseX (  )  >= pos . x - 3 && mouseX (  )  <= pos . x + pos . len - 3 && mouseY (  )  >= pos . y && mouseY (  )  <= pos . y + fontH )  { 
 cursor = pos . index ; 
 return ; 
  } 
  
  } 
     }  }  }  ; 
processCursorInput =  function (  ) {  if (  ! config . showcursor )  return ; 
  
  var pos = menuItemsPos [ cursor - cursorOffset ]  ;
  if ( mouseX (  )  >= pos . x - 3 && mouseX (  )  <= pos . x + pos . len - 3 && mouseY (  )  >= pos . y && mouseY (  )  <= pos . y + fontH )  { 
  if ( menu [ pos . index ]  . rawin ( "disabled" )  )  return ; 
  
 menu [ pos . index ]  . func (  )  ; 
playSound ( sndMenuSelect , 0 )  ; 
 return ; 
  } 
  
  }  ; 



}; 
