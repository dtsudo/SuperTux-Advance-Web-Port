if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/util.nut'] = function () { 


mergeTable =  function ( a , b ) {  if (  squirrelTypeOf ( a )  == null &&  squirrelTypeOf ( b )  == null )  return null ;
  
  if (  squirrelTypeOf ( a )  == null )  return b ;
  
  if (  squirrelTypeOf ( b )  == null )  return a ;
  
  if ( a == null )  return b ;
  
  if ( b == null )  return a ;
  
  var nt = clone ( a )  ;
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
addTimeAttackWorld =  function ( displayName , folder , level ) {  var tempBack = meTimeAttack . pop (  )  ;
  var newSlot =  { name :  function (  ) {  return displayName ;
  }  , func :  function (  ) { gvTAFullGame = false ; 
game . path = "contrib/" + folder + "/" ; 
gvTAStart = level ; 
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
 meTimeAttack . push ( newSlot )  ; 
meTimeAttack . push ( tempBack )  ; 
 }  ; 



}; 
