if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/util.nut'] = function () { 


mergeTable =  function ( a , b ) {  if (  squirrelTypeOf ( a )  == null &&  squirrelTypeOf ( b )  == null )  return null ;
  
  if (  squirrelTypeOf ( a )  == null )  return b ;
  
  if (  squirrelTypeOf ( b )  == null )  return a ;
  
  if ( a == null )  return b ;
  
  if ( b == null )  return a ;
  
  var nt =  window.clone(  ( a ) )  ;
  {     var foreachOutput1 = squirrelForEach( b );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; slot = foreachOutput1.getKey(); i = foreachOutput1.getValue();  { 
  if (  ! nt . rawin ( slot )  ) nt [ slot ] = i ; 
 
  else  if (  squirrelTypeOf ( nt [ slot ] )  == "table" &&  squirrelTypeOf ( b [ slot ] )  == "table" ) nt [ slot ] = mergeTable ( nt [ slot ]  , b [ slot ]  )  ; 
 
  else nt [ slot ] = i ; 
 
  
  } 
     }  }  return nt ;
  }  ; 
gotoTest =  function (  ) { game . check = false ; 
startPlay ( "res/map/test.json" , true , true )  ; 
 }  ; 
canint =  function ( str ) {  switch (  squirrelTypeOf ( str )  )  {  case "float" :  case "integer" :  return true ;
  break ;  case "string" :  if ( str . len (  )  == 0 )  return false ;
  
  else  { 
  for (  var i = 0 ;
 i < 10 ; i ++  )  { 
  if ( str [ 0 ]  . tochar (  )  == i . tostring (  )  )  return true ;
  
  } 
  if ( str [ 0 ]  == "-" )  return true ;
  
  } 
  
  return false ;
  break ;  default :  return false ;
  break ;  }  }  ; 
minNum =  function ( a , b ) {  return  ( a *  ( a < b )  )  +  ( b *  ( b <= a )  )  ;
  }  ; 
maxNum =  function ( a , b ) {  return  ( a *  ( a > b )  )  +  ( b *  ( b >= a )  )  ;
  }  ; 
popSound =  function ( sound , repeat = 0 ) { stopSound ( sound )  ; 
playSound ( sound , repeat )  ; 
 }  ; 
even =  function ( x ) {  return x -  ( x % 2 )  ;
  }  ; 
torad =  function ( x ) {  return  ( float ( x )  * pi )  / 180.0 ;
  }  ; 
inRange =  function ( a , b , c ) {  return  ( a >= b && a <= c )  ;
  }  ; 



}; 
