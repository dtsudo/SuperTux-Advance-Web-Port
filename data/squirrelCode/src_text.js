if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/text.nut'] = function () { 


textLineLen =  function ( _s , _l ) { _s = strip ( _s )  ; 
 if ( _s . len (  )  == 0 )  return ; 
  
  var newstr = "" ;
  var curline = "" ;
  var words = split ( _s , " " )  ;
  {     var foreachOutput1 = squirrelForEach( words );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  { 
  if ( i . len (  )  >= _l )  { 
 newstr += i ; 
newstr += "\n" ; 
curline = "" ; 
 } 
  
  else  { 
  if ( curline . len (  )  + i . len (  )  + 1 >= _l )  { 
 newstr += curline ; 
curline = "" ; 
newstr += "\n" ; 
 } 
  
  if ( curline . len (  )  + i . len (  )  + 1 <= _l )  { 
 curline += i ; 
curline += " " ; 
 } 
  
  } 
  
  } 
     }  } newstr += curline ; 
 return newstr ;
  }  ; 
drawTextLen =  function ( _f , _x , _y , _s , _l ) { _s = strip ( _s )  ; 
 if ( _s . len (  )  == 0 )  return ; 
  
  var newstr = "" ;
  var curline = "" ;
  var words = split ( _s , " " )  ;
  {     var foreachOutput2 = squirrelForEach( words );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; i = foreachOutput2.getValue();  { 
  if ( i . len (  )  >= _l )  { 
 newstr += i ; 
newstr += "\n" ; 
curline = "" ; 
 } 
  
  else  { 
  if ( curline . len (  )  + i . len (  )  + 1 < _l )  { 
 curline += i ; 
curline += " " ; 
 } 
  
  if ( curline . len (  )  + i . len (  )  + 1 >= _l )  { 
 newstr += curline ; 
curline = "" ; 
newstr += "\n" ; 
 } 
  
  } 
  
  } 
     }  } drawText ( _f , _x , _y , newstr )  ; 
 }  ; 
formatTime =  function ( time ) {  var seconds =  ( time % 3600 )  . tofloat (  )  / 60.0 ;
 seconds *= 100.0 ; 
seconds = floor ( seconds )  . tofloat (  )  ; 
seconds /= 100 ; 
 var minutes = floor ( time / 3600 )  ;
  var val = minutes . tostring (  )  + ":" ;
  if ( seconds < 10 ) val += "0" ; 
 
 val += seconds . tostring (  )  ; 
 if ( seconds == floor ( seconds )  ) val += ".00" ; 
 
  if ( seconds * 10 == floor ( seconds * 10 )  &&  ( seconds * 100 )  % 100 != 0 ) val += "0" ; 
 
  return val ;
  }  ; 



}; 
