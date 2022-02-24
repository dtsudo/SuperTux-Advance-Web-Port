if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


gvZList =  {  }  ; 
drawSpriteZ =  function ( z , sprite , frame , x , y ) {  if (  ! gvZList . rawin ( z )  ) gvZList [ z ] = array ( 0 )  ; 
 
 gvZList [ z ]  . push (  [ sprite , frame , x , y , 0 , 0 , 1 , 1 , 1 ]  )  ; 
 }  ; 
drawSpriteExZ =  function ( z , sprite , frame , x , y , angle , flip , xscale , yscale , alpha ) {  if (  ! gvZList . rawin ( z )  ) gvZList [ z ] = array ( 0 )  ; 
 
 gvZList [ z ]  . push (  [ sprite , frame , x , y , angle , flip , xscale , yscale , alpha ]  )  ; 
 }  ; 
drawZList =  function ( layers ) {  for (  var i = 0 ;
 i < layers ; i ++  )  { 
  if (  ! gvZList . rawin ( i )  ) continue ; 
 
  var n = gvZList [ i ]  . len (  )  ;
  if ( n == 0 ) continue ; 
 
  for (  var j = 0 ;
 j < n ; j ++  )  { 
  var s = gvZList [ i ]  [ j ]  ;
 drawSpriteEx ( s [ 0 ]  , s [ 1 ]  , s [ 2 ]  , s [ 3 ]  , s [ 4 ]  , s [ 5 ]  , s [ 6 ]  , s [ 7 ]  , s [ 8 ]  )  ; 
 } 
  } 
 gvZList . clear (  )  ; 
 }  ; 



});