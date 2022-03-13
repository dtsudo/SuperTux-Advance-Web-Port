if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/util.nut'] = function () { 


mergeTable =  function ( a , b ) {  if (  squirrelTypeOf ( a )  == null &&  squirrelTypeOf ( b )  == null )  return null ;
  
  if (  squirrelTypeOf ( a )  == null )  return b ;
  
  if (  squirrelTypeOf ( b )  == null )  return a ;
  
  var nt = clone ( a )  ;
  {     var foreachOutput = squirrelForEach ( b ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; slot = foreachOutput . getKey ( ) ; i = foreachOutput . getValue ( ) ;  { 
  if (  ! nt . rawin ( slot )  ) nt [ slot ] = i ; 
 
  else  if (  squirrelTypeOf ( nt [ slot ] )  == "table" &&  squirrelTypeOf ( b [ slot ] )  == "table" ) nt [ slot ] = mergeTable ( nt [ slot ]  , b [ slot ]  )  ; 
 
  else nt [ slot ] = i ; 
 
  
  } 
     }  }  return nt ;
  }  ; 
gotoTest =  function (  ) { game . check = false ; 
startPlay ( "res/map/test.json" )  ; 
 }  ; 
gotoMario =  function (  ) { game . check = false ; 
startPlay ( "res/map/mario0.json" )  ; 
 }  ; 
canint =  function ( str ) {  switch (  squirrelTypeOf ( str )  )  {  case "float" :  case "integer" :  return true ;
  break ;  case "string" :  if ( str . len (  )  == 0 )  return false ;
  
  else  { 
  for (  var i = 0 ;
 i < 10 ; i ++  )  { 
  if ( str [ 0 ]  . tochar (  )  == i . tostring (  )  )  return true ;
  
  } 
  } 
  
  return false ;
  break ;  default :  return false ;
  break ;  }  }  ; 



}; 
