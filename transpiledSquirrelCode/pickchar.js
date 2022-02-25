if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


pickChar =  function (  ) { update (  )  ; 
resetDrawTarget (  )  ; 
 var charlist =  [  ]  ;
  {     var foreachOutput = squirrelForEach ( game . characters ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; key = foreachOutput . getKey ( ) ; i = foreachOutput . getValue ( ) ;  { 
  var newitem =  [ key , i [ 2 ]  , i [ 3 ]  ]  ;
 charlist . push ( newitem )  ; 
 } 
     }  } charlist . sort (  function ( a , b ) {  if ( a [ 0 ]  > b [ 0 ]  )  return 1 ;
  
  if ( a [ 0 ]  < b [ 0 ]  )  return  - 1 ;
  
  return 0 ;
  }  )  ; 
 var didpick = false ;
  var picktimer = 30 ;
  var charslot = 0 ;
  for (  var i = 0 ;
 i < charlist . len (  )  ; i ++  )  { 
  if ( charlist [ i ]  [ 0 ]  == game . playerChar )  { 
 charslot = i ; 
 break ;  } 
  
  } 
  while (  ! getcon ( "pause" , "press" )  && picktimer > 0 )  { 
  if (  ! didpick )  { 
  if ( getcon ( "right" , "press" )  ) charslot ++  ; 
 
  if ( getcon ( "left" , "press" )  ) charslot --  ; 
 
  if ( charslot < 0 ) charslot = charlist . len (  )  - 1 ; 
 
  if ( charslot >= charlist . len (  )  ) charslot = 0 ; 
 
  if ( getcon ( "accept" , "press" )  || getcon ( "jump" , "press" )  )  { 
 game . playerChar = charlist [ charslot ]  [ 0 ]  ; 
didpick = true ; 
 } 
  
  } 
  
  else  { 
 picktimer --  ; 
 } 
  
 drawText ( font2 , 8 , 8 , charlist [ charslot ]  [ 0 ]  )  ; 
 if ( didpick ) drawSprite ( getroottable (  )  [ charlist [ charslot ]  [ 1 ]  ]  , charlist [ charslot ]  [ 2 ]  [ 1 ]  , screenW (  )  / 2 , screenH (  )  / 2 )  ; 
 
  else drawSprite ( getroottable (  )  [ charlist [ charslot ]  [ 1 ]  ]  , charlist [ charslot ]  [ 2 ]  [ 0 ]  , screenW (  )  / 2 , screenH (  )  / 2 )  ; 
 
 update (  )  ; 
 } 
  
  }  ; 
addChar =  function ( char , overworld , doll , playable , frames ) {  if (  ! getroottable (  )  . rawin ( char )  )  { 
 print ( "No class for " + char + " has been defined!" )  ; 
 return ; 
  } 
  
  var newchar =  [ overworld , doll , playable , frames ]  ;
  if (  ! game . characters . rawin ( char )  ) game . characters [ char ] = newchar ; 
 
  }  ; 



});