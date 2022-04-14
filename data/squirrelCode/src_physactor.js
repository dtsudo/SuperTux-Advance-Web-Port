if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/physactor.nut'] = function () { 


PhysAct =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . hspeed = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . box =  [ 0 , 0 , 0 , 0 ]  ; 
 returnVal . xstart = 0.0 ; 
 returnVal . ystart = 0.0 ; 
 returnVal . xprev = 0.0 ; 
 returnVal . yprev = 0.0 ; 
 returnVal . shape = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
xstart = _x ; 
ystart = _y ; 
 } ;  returnVal . run = function (  ) { xprev = x ; 
yprev = y ; 
 } ;  returnVal . placeFree = function ( _x , _y ) {  var ns ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) ns = Rec ( _x + shape . ox , _y + shape . oy , shape . w , shape . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) ns = Cir ( _x + shape . ox , _y + shape . oy , shape . r )  ; 
 
  var cx = floor ( _x / 16 )  ;
  var cy = floor ( _y / 16 )  ;
  var cw = ceil ( shape . w / 16 )  ;
  var ch = ceil ( shape . h / 16 )  ;
  var wl = null ;
  for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "tilelayer" && gvMap . data . layers [ i ]  . name == "solid" )  { 
 wl = gvMap . data . layers [ i ]  ; 
 break ;  } 
  
  } 
  if ( wl != null )  { 
  for (  var i =  - cw ;
 i <= cw ; i ++  )  { 
  for (  var j =  - ch ;
 j <= ch ; j ++  )  { 
  var tile =  ( cx + i )  +  (  ( cy + j )  * wl . width )  ;
  if ( tile >= 0 && tile < wl . data . len (  )  )  switch ( wl . data [ tile ]  - gvMap . solidfid )  {  case 0 :  case 39 :  case 40 :  case 42 :  case 43 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 1 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 2 :  case 52 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 3 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 4 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 4 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 12 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 5 :  case 58 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 6 :  case 59 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 7 :  case 55 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 8 :  case 56 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 9 :  case 54 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 10 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 4 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 11 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 12 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 4 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 12 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 3 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 13 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 3 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 14 :  case 53 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 15 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 12 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 16 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 4 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 17 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 4 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 4 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 18 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 12 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 3 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 19 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 4 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 20 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 4 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 21 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 12 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 22 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 12 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 4 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 23 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 4 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 3 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 24 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 3 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 25 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 15 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 1.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 26 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 1 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 1.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 27 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 1 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 1.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 28 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 15 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 1.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 38 :  case 50 :  case 51 :  var nps ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) nps = Rec ( shape . x + shape . ox , ns . y , ns . w , ns . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) nps = Cir ( shape . x + shape . ox , ns . y , ns . r )  ; 
 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( nps . y >= shape . y + shape . oy || vspeed > 0 )  if ( hitTest ( nps , gvMap . shape )  &&  ! hitTest ( shape , gvMap . shape )  && hitTest ( ns , gvMap . shape )  )  return false ;
  
  
  break ;  case 44 :  var nps ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) nps = Rec ( shape . x + shape . ox , ns . y , ns . w , ns . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) nps = Cir ( shape . x + shape . ox , ns . y , ns . r )  ; 
 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( nps . y > shape . y + shape . oy || vspeed >= 0 )  if ( hitTest ( nps , gvMap . shape )  &&  ! hitTest ( shape , gvMap . shape )  && hitTest ( ns , gvMap . shape )  )  return false ;
  
  
  }  
  if ( debug )  { 
 gvMap . shape . draw (  )  ; 
 } 
  
  } 
  } 
  } 
  
 gvMap . shape . setPos (  - 256 ,  - 256 )  ; 
 for (  var i = 0 ;
 i < gvMap . geo . len (  )  ; i ++  )  { 
  if ( gvMap . geo [ i ]  != null )  if ( hitTest ( ns , gvMap . geo [ i ]  )  )  return false ;
  
  
  } 
  return true ;
  } ;  returnVal . inWater = function ( _x , _y ) {  var ns ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) ns = Rec ( _x + shape . ox , _y + shape . oy , shape . w , shape . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) ns = Cir ( _x + shape . ox , _y + shape . oy , shape . r )  ; 
 
  if ( actor . rawin ( "Water" )  )  { 
  {     var foreachOutput = squirrelForEach ( actor [ "Water" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( ns , i . shape )  )  return true ;
  
  } 
     }  }  } 
  
  return false ;
  } ;  returnVal . onHazard = function ( _x , _y ) {  var ns ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) ns = Rec ( _x + shape . ox , _y + shape . oy , shape . w , shape . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) ns = Cir ( _x + shape . ox , _y + shape . oy , shape . r )  ; 
 
  var cx = floor ( _x / 16 )  ;
  var cy = floor ( _y / 16 )  ;
  var cw = ceil ( shape . w / 16 )  ;
  var ch = ceil ( shape . h / 16 )  ;
  var wl = null ;
  for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "tilelayer" && gvMap . data . layers [ i ]  . name == "solid" )  { 
 wl = gvMap . data . layers [ i ]  ; 
 break ;  } 
  
  } 
  if ( wl != null )  { 
  for (  var i =  - cw ;
 i <= cw ; i ++  )  { 
  for (  var j =  - ch ;
 j <= ch ; j ++  )  { 
  var tile =  ( cx + i )  +  (  ( cy + j )  * wl . width )  ;
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 37 )  { 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 6.0 ; 
gvMap . shape . h = 6.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  } 
  
  
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 40 )  { 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 9.0 ; 
gvMap . shape . h = 6.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
 gvMap . shape . w = 6.0 ; 
gvMap . shape . h = 9.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  } 
  
  
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 42 )  { 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 9.0 ; 
gvMap . shape . h = 6.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  } 
  
  
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 43 )  { 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 6.0 ; 
gvMap . shape . h = 9.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  } 
  
  
  if ( debug ) gvMap . shape . draw (  )  ; 
 
  } 
  } 
  } 
  
  return false ;
  } ;  returnVal . onDeath = function ( _x , _y ) {  var ns ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) ns = Rec ( _x + shape . ox , _y + shape . oy , shape . w , shape . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) ns = Cir ( _x + shape . ox , _y + shape . oy , shape . r )  ; 
 
  var cx = floor ( _x / 16 )  ;
  var cy = floor ( _y / 16 )  ;
  var cw = ceil ( shape . w / 16 )  ;
  var ch = ceil ( shape . h / 16 )  ;
  var wl = null ;
  for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "tilelayer" && gvMap . data . layers [ i ]  . name == "solid" )  { 
 wl = gvMap . data . layers [ i ]  ; 
 break ;  } 
  
  } 
  if ( wl != null )  { 
  for (  var i =  - cw ;
 i <= cw ; i ++  )  { 
  for (  var j =  - ch ;
 j <= ch ; j ++  )  { 
  var tile =  ( cx + i )  +  (  ( cy + j )  * wl . width )  ;
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 41 )  { 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 6.0 ; 
gvMap . shape . h = 6.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  } 
  
  
  if ( debug ) gvMap . shape . draw (  )  ; 
 
  } 
  } 
  } 
  
  return false ;
  } ;  returnVal . onPlatform = function (  ) {  var ns ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) ns = Rec ( x + shape . ox , y + shape . oy + 2 , shape . w , shape . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) ns = Cir ( x + shape . ox , y + shape . oy + 2 , shape . r )  ; 
 
  var cx = floor ( x / 16 )  ;
  var cy = floor ( y / 16 )  + 1 ;
  var wl = gvMap . solidLayer ;
  if ( wl != null )  { 
  var tile = cx +  ( cy * wl . width )  ;
  if ( tile >= 0 && tile < wl . data . len (  )  )  switch ( wl . data [ tile ]  - gvMap . solidfid )  {  case 38 :  case 50 :  case 51 : gvMap . shape . setPos ( x , y + 4 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  break ;  case 44 : gvMap . shape . setPos ( x , y + 4 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  break ;  case 45 :  break ;  case 46 :  break ;  case 47 :  break ;  case 48 :  break ;  case 49 :  break ;  }  
  } 
  
  return false ;
  } ;  returnVal . onIce = function ( _x =  - 1 , _y =  - 1 ) {  var ns ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) ns = Rec ( x + shape . ox , y + shape . oy + 2 , shape . w , shape . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) ns = Cir ( x + shape . ox , y + shape . oy + 2 , shape . r )  ; 
 
  var cx = floor ( x / 16 )  ;
  var cy = floor ( y / 16 )  + 1 ;
  if ( _x !=  - 1 ) cx = floor ( _x / 16 )  ; 
 
  if ( _y !=  - 1 ) cy = floor ( _y / 16 )  ; 
 
  if ( _x !=  - 1 && _y !=  - 1 ) ns . setPos ( _x , _y + 2 )  ; 
 
  var wl = gvMap . solidLayer ;
  if ( wl != null )  { 
  var tile = cx +  ( cy * wl . width )  ;
  if ( tile >= 0 && tile < wl . data . len (  )  )  switch ( wl . data [ tile ]  - gvMap . solidfid )  {  case 39 :  case 51 :  case 52 :  case 53 :  case 54 :  case 55 :  case 56 :  case 57 :  case 58 :  case 59 :  if (  squirrelTypeOf ( shape )  == "Rec" ) ns = Rec ( x , y , shape . w , shape . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) ns = Cir ( x , y , shape . r )  ; 
 
 gvMap . shape . setPos (  ( cx * 16 )  + 8 ,  ( cy * 16 )  )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 10.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  if ( debug ) gvMap . shape . draw (  )  ; 
 
  break ;  }  
  } 
  
  return false ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
PathCrawler =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . path = null ; 
 returnVal . speed = 0.0 ; 
 returnVal . tx = 0 ; 
 returnVal . ty = 0 ; 
 returnVal . loop = false ; 
 returnVal . step = 0 ; 
 returnVal . reverse = false ; 
 returnVal . dir = 0.0 ; 
 returnVal . moving = true ; 
 returnVal . started = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y , _arr )  ; 
path = _arr [ 0 ]  ; 
speed = _arr [ 1 ]  . tofloat (  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 if ( path [ 0 ]  [ 0 ]  == path [ path . len (  )  - 1 ]  [ 0 ]  && path [ 0 ]  [ 1 ]  == path [ path . len (  )  - 1 ]  [ 1 ]  ) loop = true ; 
 
 tx = path [ 0 ]  [ 0 ]  ; 
ty = path [ 0 ]  [ 1 ]  ; 
 } ;  returnVal . run = function (  ) {  if ( moving )  { 
  if (  ! started )  { 
 started = true ; 
pathStart (  )  ; 
 } 
  
  if (  ! inDistance2 ( x , y , tx , ty , speed )  )  { 
 dir = pointAngle ( x , y , tx , ty )  ; 
x += lendirX ( speed , dir )  ; 
y += lendirY ( speed , dir )  ; 
 } 
  
  else  { 
 x = tx ; 
y = ty ; 
 if ( reverse )  { 
  if ( step - 1 < 0 )  { 
 reverse = false ; 
step ++  ; 
pathZero (  )  ; 
 } 
  
  else step --  ; 
 
  if ( step < 0 ) step = 0 ; 
 
 tx = path [ step ]  [ 0 ]  ; 
ty = path [ step ]  [ 1 ]  ; 
 } 
  
  else  { 
  if ( step + 1 < path . len (  )  ) step ++  ; 
 
  else  if ( loop ) step = 0 ; 
 
  else  { 
 step --  ; 
reverse = true ; 
pathEnd (  )  ; 
 } 
  
  
  if ( step < 0 ) step = 0 ; 
 
 tx = path [ step ]  [ 0 ]  ; 
ty = path [ step ]  [ 1 ]  ; 
 } 
  
  } 
  
  } 
  
  } ;  returnVal . pathStart = function (  ) {  } ;  returnVal . pathEnd = function (  ) {  } ;  returnVal . pathZero = function (  ) {  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



}; 
