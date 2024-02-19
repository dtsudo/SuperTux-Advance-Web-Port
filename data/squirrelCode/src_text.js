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
  var minutes = floor ( time / 3600 )  ;
  var seconds_p1 = ceil ( seconds )  ;
  var seconds_p2 =  ( seconds - floor ( seconds )  )  * 1000 ;
  return format ( "%02d:%02d.%03d" , minutes , seconds_p1 , seconds_p2 )  ;
  }  ; 
formatInfo =  function ( info ) {  if (  squirrelTypeOf ( info )  == "string" )  return info ;
  
  var newcall =  [ 0 ]  ;
  for (  var i = 0 ;
 i < info . len (  )  ; i ++  )  { 
  if ( i == 0 ) newcall . push ( info [ i ]  )  ; 
 
  else newcall . push ( eval ( info [ i ]  )  )  ; 
 
  } 
  return format . acall ( newcall )  ;
  }  ; 



}; 
