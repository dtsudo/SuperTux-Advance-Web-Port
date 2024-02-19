if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/physactor.nut'] = function () { 


PhysAct =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . hspeed = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . box =  [ 0 , 0 , 0 , 0 ]  ; 
 returnVal . xstart = 0.0 ; 
 returnVal . ystart = 0.0 ; 
 returnVal . xprev = 0.0 ; 
 returnVal . yprev = 0.0 ; 
 returnVal . shape = Rec ( 0 , 0 , 0 , 0 , 0 )  ; 
 returnVal . anim = null ; 
 returnVal . frame = 0.0 ; 
 returnVal . sprite = 0 ; 
 returnVal . z = 0 ; 
 returnVal . phantom = false ; 
 returnVal . routine = null ; 
 returnVal . gravity = 0.0 ; 
 returnVal . friction = 0.1 ; 
 returnVal . anim =  [ 0 ]  ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
xstart = _x ; 
ystart = _y ; 
 } ;  returnVal . run = function (  ) { physics (  )  ; 
animation (  )  ; 
 if ( routine != null ) routine (  )  ; 
 
  } ;  returnVal . physics = function (  ) {  if ( placeFree ( x , y + gravity )  &&  ! phantom &&  !  ( onPlatform (  )  && vspeed >= 0 )  ) vspeed += gravity ; 
 
  if ( placeFree ( x , y + vspeed )  || phantom ) y += vspeed ; 
 
  else  if (  !  ( onPlatform (  )  && vspeed >= 0 )  )  { 
  for (  var i = 2 ;
 i < 8 ; i ++  )  { 
  if ( placeFree ( x , y +  ( vspeed / i )  )  )  { 
 y +=  ( vspeed / i )  ; 
 break ;  } 
  
  } 
 vspeed /= 2 ; 
 if ( fabs ( vspeed )  < 0.1 ) vspeed = 0.0 ; 
 
  } 
  
  
  if ( hspeed != 0 )  { 
  if ( phantom ) x += hspeed ; 
 
  else  if ( placeFree ( x + hspeed , y )  )  { 
  for (  var i = 0 ;
 i < 4 ; i ++  )  if (  ! placeFree ( x , y + 4 )  && placeFree ( x + hspeed , y + 1 )  &&  ! inWater (  )  && vspeed >= 0 &&  ! placeFree ( x + hspeed , y + 4 )  )  { 
 y += 1 ; 
 } 
  
 x += hspeed ; 
 } 
  
  else  { 
  var didstep = false ;
  for (  var i = 1 ;
 i <= max ( 8 , abs ( hspeed )  )  ; i ++  )  { 
  if ( placeFree ( x + hspeed , y -  ( i )  )  )  { 
 x += hspeed ; 
y -=  ( i )  ; 
 if ( i > 2 )  { 
  if ( hspeed > 0 ) hspeed -= 0.2 ; 
 
  if ( hspeed < 0 ) hspeed += 0.2 ; 
 
  } 
  
 didstep = true ; 
 break ;  } 
  
  } 
  if ( didstep == false && fabs ( hspeed )  >= 1 ) hspeed -=  ( hspeed / fabs ( hspeed )  )  ; 
 
  else  if ( didstep == false && fabs ( hspeed )  < 1 ) hspeed = 0 ; 
 
  
  } 
  
  
  } 
  
  if ( fabs ( hspeed )  > friction )  { 
  if ( hspeed > 0 ) hspeed -= friction ; 
 
  if ( hspeed < 0 ) hspeed += friction ; 
 
  } 
  
  else hspeed = 0 ; 
 
 shape . setPos ( x , y )  ; 
xprev = x ; 
yprev = y ; 
 } ;  returnVal . setAnim = function ( _anim ) { anim = _anim ; 
frame = 0.0 ; 
 } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . draw = function (  ) {  } ;  returnVal . isOnScreen = function (  ) {  var ns = null ;
  var ns2 = null ;
  if ( gvNetPlay )  { 
 ns = Rec ( camx1 + gvScreenW / 2 , camy1 + gvScreenH / 2 , gvScreenW / 2 , gvScreenH / 2 , 0 )  ; 
ns2 = Rec ( camx2 + net . scw / 2 , camy2 + net . sch / 2 , net . scw / 2 , net . sch / 2 , 0 )  ; 
 return hitTest ( shape , ns )  || hitTest ( shape , ns2 )  ;
  } 
  
  if ( gvSplitScreen )  { 
 ns = Rec ( camx1 + gvScreenW / 4 , camy1 + gvScreenH / 2 , gvScreenW / 4 , gvScreenH / 2 , 0 )  ; 
ns2 = Rec ( camx2 + gvScreenW / 4 , camy2 + gvScreenH / 2 , gvScreenW / 4 , gvScreenH / 2 , 0 )  ; 
 return hitTest ( shape , ns )  || hitTest ( shape , ns2 )  ;
  } 
  
  if ( gvGameMode == gmOverworld ) ns = Rec ( camx + gvScreenW / 2 , camy + gvScreenH / 2 , gvScreenW / 2 , gvScreenH / 2 , 0 )  ; 
 
  else ns = Rec ( camx0 + gvScreenW / 2 , camy0 + gvScreenH / 2 , gvScreenW / 2 , gvScreenH / 2 , 0 )  ; 
 
  return hitTest ( shape , ns )  ;
  } ;  returnVal . findPlayer = function (  ) {  if ( gvPlayer && gvPlayer2 )  { 
  if ( distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < distance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y )  )  return gvPlayer ;
  
  else  return gvPlayer2 ;
  
  } 
  
  else  if ( gvPlayer )  return gvPlayer ;
  
  else  if ( gvPlayer2 )  return gvPlayer2 ;
  
  
  
  } ;  returnVal . escapeMoPlat = function ( useDown = false , useUp = false , useLeft = false , useRight = false ) {  if (  ! actor . rawin ( "MoPlat" )  )  return 0 ;
  
  var result = 0 ;
  {     var foreachOutput1 = squirrelForEach( actor [ "MoPlat" ]  );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  { 
  if ( hitTest ( shape , i . shape )  )  { 
  var angle = pointAngle ( x - hspeed , y - vspeed , i . x , i . y )  ;
  var slopeA = fabs ( lendirY ( 1.0 , angle )  )  ;
  var slopeB = 8.0 /  ( i . w * 8.0 )  ;
  if ( placeFree ( x + i . hspeed , y + i . vspeed )  )  { 
 x += i . hspeed ; 
y += i . vspeed ; 
 } 
  
  if ( x - hspeed + shape . w > i . x -  ( i . w * 8.0 )  && x - hspeed + shape . w < i . x +  ( i . w * 8.0 )  || x - hspeed - shape . w > i . x -  ( i . w * 8.0 )  && x - hspeed - shape . w < i . x +  ( i . w * 8.0 )  || x - hspeed > i . x -  ( i . w * 8.0 )  && x - hspeed < i . x +  ( i . w * 8.0 )  || slopeA >= slopeB )  { 
  if ( y < i . y )  { 
  if ( placeFree ( x , i . y - shape . h - shape . oy - 4 )  ) y = i . y - shape . h - shape . oy - 4 ; 
 
 result =  - 1 ; 
 if ( useDown && placeFree ( x + i . hspeed , y + i . vspeed )  ) y += i . vspeed ; 
 
  } 
  
  else  { 
  if ( placeFree ( x , i . y + shape . h - shape . oy + 4 )  ) y = i . y + shape . h - shape . oy + 4 ; 
 
 result = 1 ; 
 if ( useUp && placeFree ( x + i . hspeed , y + i . vspeed )  ) y += i . vspeed ; 
 
  } 
  
  } 
  
  else  { 
  if ( x < i . x )  { 
  if ( placeFree ( i . x -  ( i . w * 8 )  - shape . w - shape . ox , y )  ) x = i . x -  ( i . w * 8 )  - shape . w - shape . ox ; 
 
 result =  - 2 ; 
 if ( useLeft && placeFree ( x + i . hspeed , y + i . vspeed )  ) x += i . hspeed ; 
 
  } 
  
  else  { 
  if ( placeFree ( i . x +  ( i . w * 8 )  + shape . w - shape . ox , y )  ) x = i . x +  ( i . w * 8 )  + shape . w - shape . ox ; 
 
 result = 2 ; 
 if ( useRight && placeFree ( x + i . hspeed , y + i . vspeed )  ) x += i . hspeed ; 
 
  } 
  
  } 
  
  } 
  
  } 
     }  }  return result ;
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
  if ( cx + i < 0 || cx + i >= gvMap . w / 16 ) continue ; 
 
  if ( tile >= 0 && tile < wl . data . len (  )  )  switch ( wl . data [ tile ]  - gvMap . solidfid )  {  case 0 :  case 39 :  case 40 :  case 42 :  case 43 :  case 60 :  case 61 :  case 62 :  case 63 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  if ( cy <= 0 )  { 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  - 100 )  ; 
gvMap . shape . h = 100.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  } 
  
  if ( cy >= gvMap . h / 16 )  { 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 , gvMap . h + 100 )  ; 
gvMap . shape . h = 100.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  } 
  
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
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 7 :  case 55 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 0 ; 
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
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 12 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 3 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 0 ; 
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
  
  
  break ;  case 45 :  var nps ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) nps = Rec ( shape . x + shape . ox , ns . y , ns . w , ns . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) nps = Cir ( shape . x + shape . ox , ns . y , ns . r )  ; 
 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
 if ( hspeed < 0 ) ns . y += hspeed ; 
 
 gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( nps . y > shape . y + shape . oy || vspeed >= 0 )  if ( hitTest ( nps , gvMap . shape )  &&  ! hitTest ( shape , gvMap . shape )  && hitTest ( ns , gvMap . shape )  )  return false ;
  
  
  break ;  case 46 :  var nps ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) nps = Rec ( shape . x + shape . ox , ns . y , ns . w , ns . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) nps = Cir ( shape . x + shape . ox , ns . y , ns . r )  ; 
 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
 if ( hspeed < 0 ) ns . y += hspeed ; 
 
 gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( nps . y > shape . y + shape . oy || vspeed >= 0 )  if ( hitTest ( nps , gvMap . shape )  &&  ! hitTest ( shape , gvMap . shape )  && hitTest ( ns , gvMap . shape )  )  return false ;
  
  
  break ;  case 47 :  var nps ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) nps = Rec ( shape . x + shape . ox , ns . y , ns . w , ns . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) nps = Cir ( shape . x + shape . ox , ns . y , ns . r )  ; 
 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
 if ( hspeed > 0 ) ns . y -= hspeed ; 
 
 gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( nps . y > shape . y + shape . oy || vspeed >= 0 )  if ( hitTest ( nps , gvMap . shape )  &&  ! hitTest ( shape , gvMap . shape )  && hitTest ( ns , gvMap . shape )  )  return false ;
  
  
  break ;  case 48 :  var nps ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) nps = Rec ( shape . x + shape . ox , ns . y , ns . w , ns . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) nps = Cir ( shape . x + shape . ox , ns . y , ns . r )  ; 
 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
 if ( hspeed > 0 ) ns . y -= hspeed ; 
 
 gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( nps . y > shape . y + shape . oy || vspeed >= 0 )  if ( hitTest ( nps , gvMap . shape )  &&  ! hitTest ( shape , gvMap . shape )  && hitTest ( ns , gvMap . shape )  )  return false ;
  
  
  break ;  case 49 :  var nps ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) nps = Rec ( shape . x + shape . ox , ns . y , ns . w , ns . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) nps = Cir ( shape . x + shape . ox , ns . y , ns . r )  ; 
 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( nps . y > shape . y + shape . oy || vspeed >= 0 )  if ( hitTest ( nps , gvMap . shape )  &&  ! hitTest ( shape , gvMap . shape )  && hitTest ( ns , gvMap . shape )  )  return false ;
  
  
  break ;  case 64 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 1.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 65 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 14 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 2.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 66 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 10 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 2.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 14 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 2.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 67 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 6 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 2.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 68 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 2 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 2.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 10 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 6.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 69 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 70 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 2 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 2.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 10 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 6.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 71 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 6 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 2.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 72 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 10 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 2.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 14 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 2.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 73 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 14 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 2.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 74 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 75 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 4 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 76 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 12 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 77 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 4 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 78 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 12 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  }  
  else  if ( cx + i >= 0 && cy <= 0 && wl . data [ cx + i ]  - gvMap . solidfid >= 0 )  { 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  - 100 )  ; 
gvMap . shape . h = 100.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
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
  } ;  returnVal . escapeSolid = function (  ) {  var ns ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) ns = Rec ( x + shape . ox , y + shape . oy , shape . w , shape . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) ns = Cir ( x + shape . ox , y + shape . oy , shape . r )  ; 
 
  var cx = floor ( x / 16 )  ;
  var cy = floor ( y / 16 )  ;
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
 if ( hitTest ( ns , gvMap . shape )  )  { 
  var angle = pointAngle ( x - hspeed , y - vspeed , gvMap . shape . x , gvMap . shape . y )  ;
  var slopeA = fabs ( lendirY ( 1.0 , angle )  )  ;
  var slopeB = gvMap . shape . h / gvMap . shape . w ;
  if ( x - hspeed + shape . w > gvMap . shape . x -  ( gvMap . shape . w )  && x - hspeed + shape . w < gvMap . shape . x +  ( gvMap . shape . w )  || x - hspeed - shape . w > gvMap . shape . x -  ( gvMap . shape . w )  && x - hspeed - shape . w < gvMap . shape . x +  ( gvMap . shape . w )  || x - hspeed > gvMap . shape . x -  ( gvMap . shape . w )  && x - hspeed < gvMap . shape . x +  ( gvMap . shape . w )  || slopeA >= slopeB )  { 
  if ( y < gvMap . shape . y )  { 
  if ( placeFree ( x , gvMap . shape . y - shape . h - shape . oy )  ) y = gvMap . shape . y - shape . h - shape . oy ; 
 
  } 
  
  else  { 
  if ( placeFree ( x , gvMap . shape . y + shape . h - shape . oy )  ) y = gvMap . shape . y + shape . h - shape . oy ; 
 
  } 
  
  } 
  
  else  { 
  if ( x < gvMap . shape . x )  { 
  if ( placeFree ( gvMap . shape . x -  ( gvMap . shape . w * 8 )  - shape . w - shape . ox , y )  ) x = gvMap . shape . x -  ( gvMap . shape . w )  - shape . w - shape . ox ; 
 
  } 
  
  else  { 
  if ( placeFree ( gvMap . shape . x +  ( gvMap . shape . w * 8 )  + shape . w - shape . ox , y )  ) x = gvMap . shape . x +  ( gvMap . shape . w )  + shape . w - shape . ox ; 
 
  } 
  
 ns . setPos ( x , y )  ; 
 } 
  
  } 
  
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
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 7 :  case 55 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 0 ; 
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
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
  break ;  case 12 : gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 3 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return false ;
  
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 0 ; 
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
  
  
  break ;  case 45 :  var nps ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) nps = Rec ( shape . x + shape . ox , ns . y , ns . w , ns . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) nps = Cir ( shape . x + shape . ox , ns . y , ns . r )  ; 
 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
 if ( hspeed < 0 ) ns . y += hspeed ; 
 
 gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( nps . y > shape . y + shape . oy || vspeed >= 0 )  if ( hitTest ( nps , gvMap . shape )  &&  ! hitTest ( shape , gvMap . shape )  && hitTest ( ns , gvMap . shape )  )  return false ;
  
  
  break ;  case 46 :  var nps ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) nps = Rec ( shape . x + shape . ox , ns . y , ns . w , ns . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) nps = Cir ( shape . x + shape . ox , ns . y , ns . r )  ; 
 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
 if ( hspeed < 0 ) ns . y += hspeed ; 
 
 gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( nps . y > shape . y + shape . oy || vspeed >= 0 )  if ( hitTest ( nps , gvMap . shape )  &&  ! hitTest ( shape , gvMap . shape )  && hitTest ( ns , gvMap . shape )  )  return false ;
  
  
  break ;  case 47 :  var nps ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) nps = Rec ( shape . x + shape . ox , ns . y , ns . w , ns . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) nps = Cir ( shape . x + shape . ox , ns . y , ns . r )  ; 
 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
 if ( hspeed > 0 ) ns . y -= hspeed ; 
 
 gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( nps . y > shape . y + shape . oy || vspeed >= 0 )  if ( hitTest ( nps , gvMap . shape )  &&  ! hitTest ( shape , gvMap . shape )  && hitTest ( ns , gvMap . shape )  )  return false ;
  
  
  break ;  case 48 :  var nps ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) nps = Rec ( shape . x + shape . ox , ns . y , ns . w , ns . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) nps = Cir ( shape . x + shape . ox , ns . y , ns . r )  ; 
 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
 if ( hspeed > 0 ) ns . y -= hspeed ; 
 
 gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( nps . y > shape . y + shape . oy || vspeed >= 0 )  if ( hitTest ( nps , gvMap . shape )  &&  ! hitTest ( shape , gvMap . shape )  && hitTest ( ns , gvMap . shape )  )  return false ;
  
  
  break ;  case 49 :  var nps ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) nps = Rec ( shape . x + shape . ox , ns . y , ns . w , ns . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) nps = Cir ( shape . x + shape . ox , ns . y , ns . r )  ; 
 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( nps . y > shape . y + shape . oy || vspeed >= 0 )  if ( hitTest ( nps , gvMap . shape )  &&  ! hitTest ( shape , gvMap . shape )  && hitTest ( ns , gvMap . shape )  )  return false ;
  
  
  break ;  }  
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
  } ;  returnVal . placeMeeting = function ( _class , _x , _y ) {  if (  ! _class . rawin ( "shape" )  )  return false ;
  
  } ;  returnVal . inWater = function ( _x = 0 , _y = 0 ) {  var ns ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) ns = Rec ( _x + shape . ox , _y + shape . oy , shape . w , shape . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) ns = Cir ( _x + shape . ox , _y + shape . oy , shape . r )  ; 
 
  if ( actor . rawin ( "Water" )  )  { 
  {     var foreachOutput2 = squirrelForEach( actor [ "Water" ]  );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; i = foreachOutput2.getValue();  { 
  if ( hitTest ( ns , i . shape )  )  return i . substance ;
  
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
  
  
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 60 )  { 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 4 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 6.0 ; 
gvMap . shape . h = 6.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  } 
  
  
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 61 )  { 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 8 ,  (  ( cy + j )  * 16 )  + 12 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 6.0 ; 
gvMap . shape . h = 6.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  } 
  
  
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 62 )  { 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 4 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 6.0 ; 
gvMap . shape . h = 6.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  } 
  
  
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 63 )  { 
 gvMap . shape . setPos (  (  ( cx + i )  * 16 )  + 12 ,  (  ( cy + j )  * 16 )  + 8 )  ; 
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
  } ;  returnVal . onPlatform = function ( _x = 0 , _y = 0 ) {  var ns ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) ns = Rec ( x + shape . ox + _x , y + shape . oy + 2 + _y , shape . w , shape . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) ns = Cir ( x + shape . ox + _x , y + shape . oy + 2 + _y , shape . r )  ; 
 
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
  
 ns . x -= hspeed ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  break ;  case 44 : gvMap . shape . setPos ( x , y + 4 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
 ns . x -= hspeed ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  break ;  case 45 : gvMap . shape . setPos ( x , y + 4 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
 ns . x -= hspeed ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  break ;  case 46 : gvMap . shape . setPos ( x , y + 4 )  ; 
gvMap . shape . kind = 1 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
 ns . x -= hspeed ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  break ;  case 47 : gvMap . shape . setPos ( x , y + 4 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
 ns . x -= hspeed ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  break ;  case 48 : gvMap . shape . setPos ( x , y + 4 )  ; 
gvMap . shape . kind = 2 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 4.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
 ns . x -= hspeed ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  break ;  case 49 :  break ;  }  
  } 
  
  if ( actor . rawin ( "MoPlat" )  )  {     var foreachOutput3 = squirrelForEach( actor [ "MoPlat" ]  );     while(true)     {        foreachOutput3.next();        if (foreachOutput3.isDone()) break; i = foreachOutput3.getValue();  { 
  if ( hitTest ( ns , i . shape )  )  return true ;
  
  } 
     }  }  
  return false ;
  } ;  returnVal . onIce = function ( _x =  - 1 , _y =  - 1 ) {  var ns ;
  if (  squirrelTypeOf ( shape )  == "Rec" ) ns = Rec ( x + shape . ox , y + shape . oy + 2 , shape . w , shape . h , shape . kind )  ; 
 
  if (  squirrelTypeOf ( shape )  == "Cir" ) ns = Cir ( x + shape . ox , y + shape . oy + 2 , shape . r )  ; 
 
  var cx = floor ( x / 16 )  ;
  var cy = floor ( y / 16 )  + 1 ;
  if ( _x !=  - 1 ) cx = floor ( _x / 16 )  ; 
 
  if ( _y !=  - 1 ) cy = floor ( _y / 16 )  + 1 ; 
 
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
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . hspeed = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . box =  [ 0 , 0 , 0 , 0 ]  ; 
 squirrelClassFunction . xstart = 0.0 ; 
 squirrelClassFunction . ystart = 0.0 ; 
 squirrelClassFunction . xprev = 0.0 ; 
 squirrelClassFunction . yprev = 0.0 ; 
 squirrelClassFunction . shape = Rec ( 0 , 0 , 0 , 0 , 0 )  ; 
 squirrelClassFunction . anim = null ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . sprite = 0 ; 
 squirrelClassFunction . z = 0 ; 
 squirrelClassFunction . phantom = false ; 
 squirrelClassFunction . routine = null ; 
 squirrelClassFunction . gravity = 0.0 ; 
 squirrelClassFunction . friction = 0.1 ; 
 squirrelClassFunction . anim =  [ 0 ]  ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
PathCrawler =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . path = null ; 
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

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
path = _arr [ 0 ]  ; 
 if ( _arr . len (  )  > 1 ) speed = _arr [ 1 ]  . tofloat (  )  ; 
 
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
hspeed = lendirX ( speed , dir )  ; 
vspeed = lendirY ( speed , dir )  ; 
x += hspeed ; 
y += vspeed ; 
 } 
  
  else  { 
 hspeed = tx - x ; 
vspeed = ty - y ; 
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
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . path = null ; 
 squirrelClassFunction . speed = 0.0 ; 
 squirrelClassFunction . tx = 0 ; 
 squirrelClassFunction . ty = 0 ; 
 squirrelClassFunction . loop = false ; 
 squirrelClassFunction . step = 0 ; 
 squirrelClassFunction . reverse = false ; 
 squirrelClassFunction . dir = 0.0 ; 
 squirrelClassFunction . moving = true ; 
 squirrelClassFunction . started = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 



}; 
