if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


textLineLen =  function ( _s , _l ) { _s = strip ( _s )  ; 
 if ( _s . len (  )  == 0 )  return ; 
  
  var newstr = "" ;
  var curline = "" ;
  var words = split ( _s , " " )  ;
  {     var foreachOutput = squirrelForEach ( words ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
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
  {     var foreachOutput = squirrelForEach ( words ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
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
formatTime =  function ( time ) {  var seconds =  ( time % 6000 )  . tofloat (  )  / 60.0 ;
 seconds *= 100.0 ; 
seconds = floor ( seconds )  . tofloat (  )  ; 
seconds /= 100 ; 
 var minutes = floor ( time / 6000 )  ;
  var val = minutes . tostring (  )  + ":" ;
  if ( seconds < 10 ) val += "0" ; 
 
 val += seconds . tostring (  )  ; 
 if ( seconds == floor ( seconds )  ) val += ".00" ; 
 
  if ( seconds * 10 == floor ( seconds * 10 )  &&  ( seconds * 100 )  % 100 != 0 ) val += "0" ; 
 
  return val ;
  }  ; 



});