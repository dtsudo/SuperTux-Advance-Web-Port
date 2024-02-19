if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/konqi.nut'] = function () { 


Konqi =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Player ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . canJump = 16 ; 
 returnVal . didJump = false ; 
 returnVal . friction = 0.1 ; 
 returnVal . gravity = 0.0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . flip = 0 ; 
 returnVal . canMove = true ; 
 returnVal . mspeed = 4 ; 
 returnVal . climbdir = 1.0 ; 
 returnVal . blinking = 0 ; 
 returnVal . xstart = 0.0 ; 
 returnVal . ystart = 0.0 ; 
 returnVal . firetime = 0 ; 
 returnVal . guardtime = 0 ; 
 returnVal . hurt = 0 ; 
 returnVal . swimming = false ; 
 returnVal . canStomp = true ; 
 returnVal . sprite = sprKonqi ; 
 returnVal . invincible = 0 ; 
 returnVal . shapeStand = 0 ; 
 returnVal . shapeSlide = 0 ; 
 returnVal . tftime =  - 1 ; 
 returnVal . hidden = false ; 
 returnVal . jumpBuffer = 0 ; 
 returnVal . rspeed = 0.0 ; 
 returnVal . slideframe = 0.0 ; 
 returnVal . wasInWater = false ; 
 returnVal . cooldown = 0 ; 
 returnVal . antigrav = 0 ; 
 returnVal . groundx = 0.0 ; 
 returnVal . groundy = 0.0 ; 
 returnVal . held = null ; 
 returnVal . accel = 0.2 ; 
 returnVal . anim = "" ; 
 returnVal . an =  { stand :  [ 0 , 1 , 2 , 3 ]  , walk :  [ 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 ]  , run :  [ 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 ]  , dive :  [ 14 , 15 ]  , crouch :  [ 14 , 15 ]  , getUp :  [ 15 , 14 ]  , crawl :  [ 40 , 41 , 42 , 43 , 42 , 41 ]  , slide :  [  ]  , hurt :  [ 6 , 7 ]  , jumpU :  [ 32 , 33 ]  , jumpT :  [ 34 , 35 ]  , fall : null , fallN :  [ 36 , 37 ]  , climb :  [ 44 , 45 , 46 , 47 , 46 , 45 ]  , wall :  [ 4 , 5 ]  , fallW :  [ 4 ]  , swimF :  [ 48 , 49 , 50 , 51 ]  , swimUF :  [ 48 , 49 , 50 , 51 ]  , swimDF :  [ 48 , 49 , 50 , 51 ]  , swimU :  [ 48 , 49 , 50 , 51 ]  , swimD :  [ 48 , 49 , 50 , 51 ]  , skid :  [ 4 , 5 ]  , push :  [ 6 , 7 ]  , stomp :  [ 38 , 39 ]  , statue :  [ 52 , 53 , 54 , 55 ]  , die :  [ 12 , 13 ]  , win :  [ 52 ]  , ram :  [ 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 ]  }  ; 
 returnVal . mySprNormal = null ; 
 returnVal . mySprFire = null ; 
 returnVal . mySprIce = null ; 
 returnVal . mySprAir = null ; 
 returnVal . mySprEarth = null ; 
 returnVal . damageMultN =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 0.5 , dark : 0.5 , cut : 0.5 , blast : 1.0 }  ; 
 returnVal . damageMultF =  { normal : 0.5 , fire : 0.0 , ice : 1.0 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 0.5 , dark : 0.5 , cut : 0.5 , blast : 1.0 }  ; 
 returnVal . damageMultI =  { normal : 0.5 , fire : 1.0 , ice : 0.0 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 0.5 , dark : 0.5 , cut : 0.5 , blast : 1.0 }  ; 
 returnVal . damageMultA =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 1.0 , air : 0.0 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 0.5 , dark : 0.5 , cut : 0.5 , blast : 0.5 }  ; 
 returnVal . damageMultE =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 0.0 , air : 1.0 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 0.5 , dark : 0.5 , cut : 0.25 , blast : 0.5 }  ; 
 returnVal . damageMultS =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 0.0 , water : 1.0 , light : 0.5 , dark : 0.5 , cut : 0.5 , blast : 1.0 }  ; 
 returnVal . damageMultW =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 1.0 , water : 0.0 , light : 0.5 , dark : 0.5 , cut : 0.5 , blast : 1.0 }  ; 
 returnVal . damageMultL =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 0.0 , dark : 1.0 , cut : 0.5 , blast : 1.0 }  ; 
 returnVal . damageMultD =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 1.0 , dark : 0.0 , cut : 0.5 , blast : 1.0 }  ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
anim = "stand" ; 
shapeStand = Rec ( x , y , 5 , 12 , 0 , 0 , 0 )  ; 
shapeSlide = Rec ( x , y , 5 , 6 , 0 , 0 , 6 )  ; 
shape = shapeStand ; 
 if (  ! gvPlayer ) gvPlayer = this ; 
 
 xstart = _x . tofloat (  )  ; 
ystart = _y . tofloat (  )  ; 
an [ "fall" ] = an [ "fallN" ]  ; 
xprev = x ; 
yprev = y ; 
mySprNormal = sprKonqi ; 
mySprFire = sprKonqiFire ; 
mySprIce = sprKonqiIce ; 
mySprAir = sprKonqiAir ; 
mySprEarth = sprKonqiEarth ; 
 } ;  returnVal . physics = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
shapeSlide . setPos ( x , y )  ; 
shapeStand . setPos ( x , y )  ; 
 if ( shape == shapeStand &&  ! placeFree ( x , y )  )  { 
 shape = shapeSlide ; 
 if ( anim == "stand" || anim == "walk" || anim == "run" ) anim = "crawl" ; 
 
  } 
  
 magnetic = stats . weapon == "shock" ; 
mustSink = stats . weapon == "earth" ; 
 var freeDown = placeFree ( x , y + 1 )  ;
  var freeDown2 = placeFree ( x , y + 2 )  ;
  var freeLeft = placeFree ( x - 1 , y )  ;
  var freeRight = placeFree ( x + 1 , y )  ;
  var freeUp = placeFree ( x , y - 1 )  ;
 wasInWater = nowInWater ; 
nowInWater = inWater ( x , y )  ; 
 if ( firetime > 0 )  { 
 firetime --  ; 
 } 
  
  if ( guardtime > 0 && anim != "statue" ) guardtime --  ; 
 
  if ( firetime <= 0 && stats . energy < stats . maxEnergy ) stats . energy += 1.0 / 60.0 ; 
 
  if (  (  ! inWater ( x , y )  || stats . weapon == "earth" )  && resTime <= 0 )  { 
 swimming = false ; 
shapeStand . h = 12.0 ; 
 switch ( anim )  {  case "stand" :  if ( stats . weapon == "ice" && floor ( frame )  == 0 ) frame += 0.01 ; 
 
  else  if ( stats . weapon == "ice" || stats . weapon == "fire" ) frame += 0.1 ; 
 
  else  if ( stats . weapon == "air" ) frame += 0.05 ; 
 
  else frame += 0.05 ; 
 
  
  
  if ( abs ( rspeed )  > 0.1 )  { 
 anim = "walk" ; 
frame = 0.0 ; 
 } 
  
  if ( placeFree ( x , y + 8 )  &&  ! onPlatform (  )  && fabs ( vspeed )  >= 1 )  { 
  if ( vspeed >= 0 ) anim = "fall" ; 
 
  else anim = "jumpU" ; 
 
 frame = 0.0 ; 
 } 
  
  break ;  case "walk" : frame += abs ( rspeed )  / 8 ; 
 if ( abs ( rspeed )  <= 0.1 || fabs ( hspeed )  <= 0.1 ) anim = "stand" ; 
 
  if ( abs ( rspeed )  > 2.4 ) anim = "run" ; 
 
  if ( placeFree ( x , y + 8 )  &&  ! onPlatform (  )  && fabs ( vspeed )  >= 1 )  { 
  if ( vspeed >= 0 ) anim = "fall" ; 
 
  else anim = "jumpU" ; 
 
 frame = 0.0 ; 
 } 
  
  if ( canMove && stats . stamina > 0 && getcon ( "spec2" , "hold" , true , playerNum )  ) anim = "ram" ; 
 
  break ;  case "run" :  case "skid" :  if ( flip == 0 && hspeed < 0 )  { 
 hspeed += 0.05 ; 
anim = "skid" ; 
 } 
  
  else  if ( flip == 1 && hspeed > 0 )  { 
 hspeed -= 0.05 ; 
anim = "skid" ; 
 } 
  
  else anim = "run" ; 
 
  
  if ( anim == "skid" ) frame += 0.2 ; 
 
  else  if ( stats . weapon == "ice" ) frame += abs ( rspeed )  / 16 ; 
 
  else frame += abs ( rspeed )  / 8 ; 
 
  
  if ( abs ( rspeed )  < 2 && anim != "skid" ) anim = "walk" ; 
 
  if ( placeFree ( x , y + 8 )  &&  ! onPlatform (  )  && fabs ( vspeed )  >= 1 )  { 
  if ( vspeed >= 0 ) anim = "fall" ; 
 
  else anim = "jumpU" ; 
 
 frame = 0.0 ; 
 } 
  
  if ( canMove && stats . stamina > 0 && getcon ( "spec2" , "hold" , true , playerNum )  ) anim = "ram" ; 
 
  break ;  case "ram" : frame += abs ( rspeed )  / 8 ; 
 if ( abs ( rspeed )  <= 0.1 || fabs ( hspeed )  <= 0.1 ) anim = "stand" ; 
 
  if ( stats . stamina <= 0 ||  ! getcon ( "spec2" , "hold" , true , playerNum )  ) anim = "run" ; 
 
  if ( fabs ( hspeed )  <  (  ! placeFree ( x , y + 8 )  && placeFree ( x + hspeed , y + 1 )  ? 7 : 5 )  && stats . stamina > 0 ) hspeed *= 1.05 ; 
 
 stats . stamina -= 0.1 ; 
guardtime = 30 ; 
 if (  ! placeFree ( x +  (  squirrelThreeWaysCompare ( hspeed , 0 )  )  , y )  &&  ! placeFree ( x +  (  squirrelThreeWaysCompare ( hspeed , 0 )  )  , y - 8 )  )  { 
 fireWeapon ( StompPoof , x +  (  squirrelThreeWaysCompare ( hspeed , 0 )  )  * 8 , y , 1 , id )  ; 
hspeed =  -  (  squirrelThreeWaysCompare ( hspeed , 0 )  )  * 3.0 ; 
vspeed =  - 2.0 ; 
anim = "jumpU" ; 
popSound ( sndBump )  ; 
 } 
  
  break ;  case "stomp" :  if ( frame <= an [ anim ]  . len (  )  - 1 ) frame += 0.2 ; 
 
  case "push" :  break ;  case "jumpU" :  if ( frame < 0.0 + 1 ) frame += 0.1 ; 
 
  if (  (  ! placeFree ( x , y + 4 )  || onPlatform (  )  )  && vspeed >= 0 )  { 
 anim = "stand" ; 
frame = 0.0 ; 
 } 
  
  if ( vspeed > 0 )  { 
 anim = "jumpT" ; 
frame = 0.0 ; 
 } 
  
  break ;  case "jumpT" : frame += 0.2 ; 
 if (  (  ! placeFree ( x , y + 4 )  || onPlatform (  )  )  && vspeed >= 0 )  { 
 anim = "stand" ; 
frame = 0.0 ; 
 } 
  
  if ( frame > an [ anim ]  . len (  )  - 1 )  { 
 anim = "fall" ; 
frame = 0.0 ; 
 } 
  
  break ;  case "fall" : frame += 0.1 ; 
 if (  (  ! placeFree ( x , y + 4 )  || onPlatform (  )  )  && vspeed >= 0 )  { 
 anim = "stand" ; 
frame = 0.0 ; 
 } 
  
  break ;  case "wall" : frame += 0.3 ; 
vspeed = 0 ; 
 if ( floor ( frame )  > 1 )  { 
 vspeed =  - 5.0 ; 
 if ( getcon ( "down" , "hold" , true , playerNum )  ) vspeed =  - 3.0 ; 
 
  var w = 3.0 ;
  if ( getcon ( "up" , "hold" , true , playerNum )  ) w = 1.5 ; 
 
  if ( flip == 0 ) hspeed = w ; 
 
  else hspeed =  - w ; 
 
 anim = "jumpU" ; 
frame = 0.0 ; 
canJump = 0 ; 
 } 
  
  break ;  case "crouch" : frame += 0.25 ; 
 if ( floor ( frame )  > an [ anim ]  . len (  )  - 1 )  { 
 anim = "crawl" ; 
shape = shapeSlide ; 
 } 
  
  break ;  case "getUp" : frame -= 0.25 ; 
 if ( floor ( frame )  < 0 )  { 
 anim = "stand" ; 
shape = shapeStand ; 
 } 
  
  break ;  case "slide" :  if ( stats . weapon == "earth" ) slideframe += abs ( hspeed / 8.0 )  ; 
 
  else slideframe += abs ( hspeed / 16.0 )  ; 
 
 frame = slideframe ; 
 if (  ! freeDown && hspeed != 0 )  if ( floor ( getFrames (  )  % 8 - fabs ( hspeed )  )  == 0 || fabs ( hspeed )  > 8 )  { 
  if ( stats . weapon == "fire" ) newActor ( FlameTiny , x -  ( 8 *  ( hspeed / fabs ( hspeed )  )  )  , y + 10 )  ; 
 
  if ( stats . weapon == "ice" ) newActor ( Glimmer , x -  ( 12 *  ( hspeed / fabs ( hspeed )  )  )  , y + 10 )  ; 
 
  } 
  
  
  break ;  case "hurt" : frame += 0.1 ; 
 if ( floor ( frame )  > an [ "hurt" ]  . len (  )  - 1 )  { 
 anim = "stand" ; 
frame = 0.0 ; 
 } 
  
  break ;  case "swimF" : anim = "jumpT" ; 
frame = 0.0 ; 
 break ;  case "swimUF" :  case "swimU" : anim = "jumpU" ; 
frame = 0.0 ; 
vspeed -= 1 ; 
 if ( getcon ( "jump" , "hold" , true , playerNum )  && vspeed >  - 4 ) vspeed =  - 6 ; 
 
  break ;  case "swimDF" :  case "swimD" : anim = "fall" ; 
frame = 0.0 ; 
 break ;  case "statue" :  if ( frame < 3 ) frame += 0.25 ; 
 
  if ( frame > 3 ) frame = 3.0 ; 
 
  break ;  }  if ( anim == "stand" && zoomies ) frame += 0.1 ; 
 
  if ( anim != "climb" ) frame = wrap ( abs ( frame )  , 0.0 , an [ anim ]  . len (  )  - 1 )  ; 
 
  if ( endMode && hspeed == 0 ) anim = "win" ; 
 
  else  if ( anim == "win" ) anim = "stand" ; 
 
  
 onWall =  ( anim == "wall" || an [ anim ]  == an [ "fallW" ]  )  ; 
 if ( onIce (  )  )  { 
  if (  ! placeFree ( x , y + 8 )  &&  ( fabs ( hspeed )  < 8 ||  ( fabs ( hspeed )  < 12 && stats . weapon == "ice" )  )  )  { 
  if ( placeFree ( x + 4 , y + 1 )  ) hspeed += 0.25 ; 
 
  if ( placeFree ( x - 4 , y + 1 )  ) hspeed -= 0.25 ; 
 
  if ( freeDown2 ) vspeed += 1.0 ; 
 
  } 
  
  else  if (  ! placeFree ( x , y + 8 )  &&  ( fabs ( hspeed )  < 8 ||  ( fabs ( hspeed )  < 12 && vspeed > 0 )  )  ) vspeed += 0.2 ; 
 
  
  if (  (  (  ! getcon ( "down" , "hold" , true , playerNum )  || fabs ( hspeed )  < 0.05 )  &&  ! freeDown && stats . weapon != "earth" )  ||  ( fabs ( hspeed )  < 0.05 &&  ( stats . weapon == "earth" &&  ! getcon ( "shoot" , "hold" , true , playerNum )  )  )  ||  ( stats . weapon == "earth" &&  ! getcon ( "shoot" , "hold" , true , playerNum )  &&  ! getcon ( "down" , "hold" , true , playerNum )  )  )  if ( anim == "slide" || anim == "dive" ) anim = "walk" ; 
 
  
  } 
  
  if ( anim != "climb" && anim != "wall" && anim != "statue" )  { 
  if (  ( getcon ( "right" , "hold" , true , playerNum )  &&  ! getcon ( "left" , "hold" , true , playerNum )  && anim != "slide" && canMove )  ||  ( hspeed > 0.1 && anim == "slide" )  ) flip = 0 ; 
 
  if (  ( getcon ( "left" , "hold" , true , playerNum )  &&  ! getcon ( "right" , "hold" , true , playerNum )  && anim != "slide" && canMove )  ||  ( hspeed <  - 0.1 && anim == "slide" )  ) flip = 1 ; 
 
  } 
  
  if ( stats . weapon != "air" && stats . stamina < stats . maxStamina && blinking == 0.0 && guardtime <= 0 &&  ! getcon ( "spec2" , "hold" , true , playerNum )  ) stats . stamina += 0.05 ; 
 
  if (  (  (  ! placeFree ( x - hspeed , y + 2 )  && vspeed >= 0 )  ||  ! placeFree ( x , y + 2 )  || anim == "climb" || onPlatform (  )  )  &&  ! onWall )  { 
 canJump = 16 ; 
 if ( stats . weapon == "air" && stats . stamina < stats . maxStamina && guardtime <= 0 ) stats . stamina += 0.2 ; 
 
  } 
  
  else  { 
  if ( canJump > 0 ) canJump --  ; 
 
  if ( stats . weapon == "air" && stats . stamina < 1 && guardtime <= 0 ) stats . stamina += 0.02 ; 
 
  } 
  
  if ( canMove )  { 
 mspeed = 3.0 ; 
 if ( config . stickspeed )  { 
  var j = null ;
  if ( playerNum == 1 ) j = config . joy ; 
 
  if ( playerNum == 2 ) j = config . joy2 ; 
 
  if ( abs ( joyX ( j . index )  )  > js_max * 0.1 ) mspeed =  ( 3.0 * abs ( joyX ( j . index )  )  )  / float ( js_max )  ; 
 
  } 
  
  if ( stats . weapon == "ice" ) mspeed += 0.5 ; 
 
  if ( invincible ) mspeed += 0.4 ; 
 
  if ( nowInWater ) mspeed *= 0.8 ; 
 
  if ( anim == "crawl" ) mspeed = 1.0 ; 
 
  if ( zoomies > 0 ) mspeed *= 2.0 ; 
 
  if ( zoomies > 0 ) accel = 0.4 ; 
 
  else accel = 0.2 ; 
 
  if ( getcon ( "right" , "hold" , true , playerNum )  && hspeed < mspeed && anim != "wall" && anim != "slide" && anim != "hurt" && anim != "climb" && anim != "skid" && anim != "statue" )  { 
  if ( hspeed >= 2 )  { 
  if ( onIce (  )  ) hspeed += accel * 0.2 ; 
 
  else hspeed += accel * 0.4 ; 
 
  } 
  
  else  if ( onIce (  )  ) hspeed += accel / 2.0 ; 
 
  else hspeed += accel ; 
 
  
  } 
  
  if ( getcon ( "left" , "hold" , true , playerNum )  && hspeed >  - mspeed && anim != "wall" && anim != "slide" && anim != "hurt" && anim != "climb" && anim != "skid" && anim != "statue" )  { 
  if ( hspeed <=  - 2 )  { 
  if ( onIce (  )  ) hspeed -= accel * 0.2 ; 
 
  else hspeed -= accel * 0.4 ; 
 
  } 
  
  else  if ( onIce (  )  ) hspeed -= accel / 2.0 ; 
 
  else hspeed -= accel ; 
 
  
  } 
  
  if ( getcon ( "right" , "hold" , true , playerNum )  && rspeed < mspeed && anim != "wall" && anim != "slide" && anim != "hurt" && anim != "climb" && anim != "skid" )  if ( freeRight || placeFree ( x + 1 , y - 2 )  )  { 
  if ( hspeed >= 2 ) rspeed += accel / 2.0 ; 
 
  else rspeed += accel ; 
 
  if ( rspeed < hspeed ) rspeed = hspeed ; 
 
  } 
  
  
  if ( getcon ( "left" , "hold" , true , playerNum )  && rspeed >  - mspeed && anim != "wall" && anim != "slide" && anim != "hurt" && anim != "climb" && anim != "skid" )  if ( freeLeft || placeFree ( x - 1 , y - 2 )  )  { 
  if ( hspeed <=  - 2 ) rspeed += accel / 2.0 ; 
 
  else rspeed -= accel ; 
 
  if ( rspeed > hspeed ) rspeed = hspeed ; 
 
  } 
  
  
  if ( rspeed > 0 ) rspeed -= 0.1 ; 
 
  if ( rspeed < 0 ) rspeed += 0.1 ; 
 
  if (  ( abs ( rspeed )  <= 0.5 || hspeed == 0 )  &&  ! getcon ( "right" , "hold" , true , playerNum )  &&  ! getcon ( "left" , "hold" , true , playerNum )  ) rspeed = 0.0 ; 
 
  if ( anim == "slide" ) rspeed = hspeed ; 
 
  if ( anim == "climb" )  { 
 vspeed = 0 ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  if ( placeFree ( x , y - 2 )  )  { 
 frame -= climbdir / 8 ; 
y -= 2 ; 
 } 
  
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  if ( placeFree ( x , y + 2 )  )  { 
 frame += climbdir / 8 ; 
y += 2 ; 
 } 
  
  
  if ( getcon ( "left" , "hold" , true , playerNum )  && atCrossLadder (  )  )  if ( placeFree ( x - 2 , y )  )  { 
  if (  ! getcon ( "up" , "hold" , true , playerNum )  &&  ! getcon ( "down" , "hold" , true , playerNum )  ) frame -= climbdir / 8 ; 
 
 x -= 1 ; 
 } 
  
  
  if ( getcon ( "right" , "hold" , true , playerNum )  && atCrossLadder (  )  )  if ( placeFree ( x + 2 , y )  )  { 
  if (  ! getcon ( "up" , "hold" , true , playerNum )  &&  ! getcon ( "down" , "hold" , true , playerNum )  ) frame += climbdir / 8 ; 
 
 x += 1 ; 
 } 
  
  
  var felloff = true ;
  if ( atLadder (  )  || atCrossLadder (  )  ) felloff = false ; 
 
  if ( felloff )  { 
 anim = "fall" ; 
frame = 0.0 ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  ) vspeed =  - 2.5 ; 
 
  } 
  
  else  if (  ! atCrossLadder (  )  )  { 
 x -=  (  squirrelThreeWaysCompare (  ( x % 16 )  , 8 )  )  ; 
 } 
  
  
  if ( getcon ( "right" , "press" , true , playerNum )  && canMove ) flip = 0 ; 
 
  if ( getcon ( "left" , "press" , true , playerNum )  && canMove ) flip = 1 ; 
 
  } 
  
  if (  (  ( getcon ( "down" , "hold" , true , playerNum )  && placeFree ( x , y + 2 )  )  || getcon ( "up" , "hold" , true , playerNum )  )  && anim != "hurt" && anim != "climb" &&  ( vspeed >= 0 || getcon ( "down" , "press" , true , playerNum )  || getcon ( "up" , "press" , true , playerNum )  )  )  { 
  if ( atLadder (  )  || atCrossLadder (  )  )  { 
 anim = "climb" ; 
frame = 0.0 ; 
hspeed = 0 ; 
vspeed = 0 ; 
x = round ( x )  ; 
 } 
  
  } 
  
  if ( getcon ( "jump" , "press" , true , playerNum )  || jumpBuffer > 0 )  { 
  if ( onPlatform (  )  &&  ! placeFree ( x , y + 1 )  && getcon ( "down" , "hold" , true , playerNum )  && anim != "statue" )  { 
 y ++  ; 
canJump = 32 ; 
 if (  ! placeFree ( x , y )  &&  ! placeFree ( x , y - 1 )  ) y --  ; 
 
  } 
  
  else  if ( canJump > 0 )  { 
 jumpBuffer = 0 ; 
 if ( anim == "climb" ) vspeed =  - 3 ; 
 
  else  if ( stats . weapon == "air" || nowInWater ) vspeed =  - 5.0 ; 
 
  else vspeed =  - 5.8 ; 
 
  
 didJump = true ; 
 if ( stats . weapon != "air" ) canJump = 0 ; 
 
  if ( anim != "hurt" && anim != "dive" && anim != "crouch" &&  ( stats . weapon != "earth" || anim != "slide" )  )  { 
 anim = "jumpU" ; 
frame = 0.0 ; 
 } 
  
  if (  ! freeDown2 || freeRight && freeLeft )  { 
  if ( stats . weapon != "air" ) popSound ( sndJump )  ; 
 
  else popSound ( sndFlap )  ; 
 
  } 
  
  } 
  
  else  if ( freeDown && anim != "climb" &&  ! placeFree ( x - 2 , y )  && anim != "wall" && hspeed <= 0 && tileGetSolid ( x - 12 , y - 12 )  != 40 && tileGetSolid ( x - 12 , y + 12 )  != 40 && tileGetSolid ( x - 12 , y )  != 40 )  { 
 flip = 0 ; 
anim = "wall" ; 
frame = 0.0 ; 
playSound ( sndWallkick , 0 )  ; 
 } 
  
  else  if ( freeDown && anim != "climb" &&  ! placeFree ( x + 2 , y )  && anim != "wall" && hspeed >= 0 && tileGetSolid ( x + 12 , y - 12 )  != 40 && tileGetSolid ( x + 12 , y + 12 )  != 40 && tileGetSolid ( x + 12 , y )  != 40 )  { 
 flip = 1 ; 
anim = "wall" ; 
frame = 0.0 ; 
playSound ( sndWallkick , 0 )  ; 
 } 
  
  else  if ( floor ( stats . stamina )  > 0 && stats . weapon == "air" && getcon ( "jump" , "press" , true , playerNum )  )  { 
  if ( vspeed > 0 ) vspeed = 0.0 ; 
 
  if ( vspeed >  - 4 ) vspeed -= 3.0 ; 
 
 didJump = true ; 
 if ( stats . weapon != "air" ) canJump = 0 ; 
 
  if ( anim != "hurt" && anim != "dive" && anim != "crouch" )  { 
 anim = "jumpU" ; 
frame = 0.0 ; 
 } 
  
  if ( stats . weapon != "air" )  { 
 stopSound ( sndJump )  ; 
playSound ( sndJump , 0 )  ; 
 } 
  
  else  { 
 stopSound ( sndFlap )  ; 
playSound ( sndFlap , 0 )  ; 
 } 
  
 stats . stamina --  ; 
 } 
  
  
  
  
  
  } 
  
  if ( anim == "fall" &&  (  ( getcon ( "left" , "hold" , true , playerNum )  &&  ! freeLeft )  ||  ( getcon ( "right" , "hold" , true , playerNum )  &&  ! freeRight )  )  )  { 
  if (  ! freeLeft &&  !  ( onIce ( x - 8 , y )  || onIce ( x - 8 , y - 16 )  )  )  { 
  if ( vspeed > 0.5 ) vspeed = 0.5 ; 
 
  if ( getFrames (  )  / 4 % 4 == 0 ) newActor ( PoofTiny , x - 4 , y + 12 )  ; 
 
 an [ "fall" ] = an [ "fallW" ]  ; 
flip = 0 ; 
 } 
  
  if (  ! freeRight &&  !  ( onIce ( x + 8 , y )  || onIce ( x + 8 , y - 16 )  )  )  { 
  if ( vspeed > 0.5 ) vspeed = 0.5 ; 
 
  if ( getFrames (  )  / 4 % 4 == 0 ) newActor ( PoofTiny , x + 4 , y + 12 )  ; 
 
 an [ "fall" ] = an [ "fallW" ]  ; 
flip = 1 ; 
 } 
  
  } 
  
  else  { 
 an [ "fall" ] = an [ "fallN" ]  ; 
 } 
  
  if ( getcon ( "jump" , "press" , true , playerNum )  && jumpBuffer <= 0 && freeDown ) jumpBuffer = 8 ; 
 
  if ( jumpBuffer > 0 ) jumpBuffer --  ; 
 
  if ( getcon ( "jump" , "release" , true , playerNum )  && vspeed < 0 && didJump )  { 
 didJump = false ; 
vspeed /= 2.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  && anim != "dive" && anim != "slide" && anim != "jumpU" && anim != "jumpT" && anim != "fall" && anim != "hurt" && anim != "wall" && anim != "statue" &&  (  ! freeDown2 || onPlatform (  )  )  && anim != "crouch" && anim != "crawl" && anim != "stomp" )  { 
 anim = "crouch" ; 
frame = 0.0 ; 
shape = shapeSlide ; 
 } 
  
  if ( anim == "crawl" )  { 
  if (  ! getcon ( "down" , "hold" , true , playerNum )  && placeFree ( x , y - 6 )  ) anim = "stand" ; 
 
  else  { 
 frame += fabs ( hspeed / 8.0 )  ; 
shape = shapeSlide ; 
 } 
  
  } 
  
  } 
  
  else rspeed = min ( rspeed , abs ( hspeed )  )  ; 
 
  if (  ! freeDown2 || onPlatform (  )  )  { 
  if ( anim == "slide" )  { 
  if ( hspeed > 0 ) hspeed -= friction / 3.0 ; 
 
  if ( hspeed < 0 ) hspeed += friction / 3.0 ; 
 
  } 
  
  else  { 
  if ( hspeed > 0 )  { 
  if (  !  ( mspeed > 2 && getcon ( "right" , "hold" , true , playerNum )  )  || anim == "crawl" ||  ! canMove ) hspeed -= friction ; 
 
  } 
  
  if ( hspeed < 0 )  { 
  if (  !  ( mspeed > 2 && getcon ( "left" , "hold" , true , playerNum )  )  || anim == "crawl" ||  ! canMove ) hspeed += friction ; 
 
  } 
  
  } 
  
  } 
  
  else  if ( anim != "slide" )  { 
  if ( hspeed > 0 &&  ! getcon ( "right" , "hold" , true , playerNum )  ) hspeed -= friction / 3.0 ; 
 
  if ( hspeed < 0 &&  ! getcon ( "left" , "hold" , true , playerNum )  ) hspeed += friction / 3.0 ; 
 
  } 
  
  
  if ( fabs ( hspeed )  < friction ) hspeed = 0.0 ; 
 
  if (  ( placeFree ( x , y + 2 )  || vspeed < 0 )  &&  ( vspeed < 2 ||  ( vspeed < 16 &&  ( stats . weapon != "air" || getcon ( "down" , "hold" , true , playerNum )  )  &&  ! nowInWater )  )  && antigrav <= 0 ) vspeed +=  ( vspeed > 5 ? gravity / vspeed : gravity )  ; 
 
  else  if ( antigrav > 0 ) antigrav --  ; 
 
  
  if (  ! freeUp && vspeed < 0 ) vspeed = 0.0 ; 
 
  if ( anim == "slide" &&  ! freeDown && vspeed >= 0 && placeFree ( x + hspeed , y )  )  { 
  if ( flip ) hspeed -= vspeed / 2.5 ; 
 
  else hspeed += vspeed / 2.5 ; 
 
 vspeed = 0 ; 
 } 
  
  if (  ! freeDown )  { 
  if ( stats . weapon == "ice" )  { 
  if ( hspeed > 8 ) hspeed = 8 ; 
 
  if ( hspeed <  - 8 ) hspeed =  - 8 ; 
 
  } 
  
  else  { 
  if ( hspeed > 6 ) hspeed = 6 ; 
 
  if ( hspeed <  - 6 ) hspeed =  - 6 ; 
 
  } 
  
  } 
  
  if ( stats . weapon == "air" || nowInWater ) gravity = 0.12 ; 
 
  else gravity = 0.25 ; 
 
  if ( anim == "climb" || anim == "wall" ) gravity = 0 ; 
 
  if ( canMove &&  ( anim == "jumpT" || anim == "jumpU" || anim == "fall" )  && getcon ( "down" , "press" , true , playerNum )  && placeFree ( x , y + 8 )  )  { 
 hspeed = 0.0 ; 
 if ( vspeed < 4 ) vspeed = 4.0 ; 
 
  if ( stats . weapon == "earth" ) anim = "statue" ; 
 
  else anim = "stomp" ; 
 
 frame = 0.0 ; 
popSound ( sndSlide , 0 )  ; 
 } 
  
  if (  (  ! freeDown || vspeed < 0 || onPlatform (  )  )  && anim == "stomp" )  { 
 anim = "jumpU" ; 
vspeed =  - 2.0 ; 
popSound ( sndBump )  ; 
fireWeapon ( StompPoof , x + 8 , y + 12 , 1 , id )  ; 
fireWeapon ( StompPoof , x - 8 , y + 12 , 1 , id )  ; 
 } 
  
  if (  (  ! freeDown || onPlatform (  )  )  && anim == "statue" && vspeed > 0.5 )  { 
 vspeed = 0.0 ; 
popSound ( sndBump )  ; 
fireWeapon ( StompPoof , x + 8 , y + 12 , 1 , id )  ; 
fireWeapon ( StompPoof , x - 8 , y + 12 , 1 , id )  ; 
 } 
  
  if ( canMove )  switch ( stats . weapon )  {  case "fire" :  if ( getcon ( "shoot" , "press" , true , playerNum )  && anim != "stomp" && anim != "hurt" && stats . energy > 0 && cooldown == 0 )  { 
 cooldown = 8 ; 
 var fx = 6 ;
  var fy = 0 ;
  if ( anim == "crouch" ) fy = 6 ; 
 
  if ( anim == "crawl" ) fy = 10 ; 
 
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( FireballK , x + fx , y - 4 + fy , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . vspeed =  - 0.5 ; 
playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
c . hspeed += hspeed / 1.5 ; 
 } 
  
  break ;  case "ice" :  if ( cooldown > 0 )  break ;  
  if ( getcon ( "shoot" , "press" , true , playerNum )  )  { 
 cooldown = 60 ; 
breatheFire (  )  ; 
playSoundChannel ( sndFlame , 0 , 0 )  ; 
 } 
  
  if ( getcon ( "shoot" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Iceball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  break ;  case "earth" :  if ( getcon ( "shoot" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 && cooldown == 0 && anim != "statue" )  { 
 cooldown = 8 ; 
 var fx = 6 ;
  var fy = 0 ;
  if ( anim == "crouch" ) fy = 6 ; 
 
  if ( anim == "crawl" ) fy = 10 ; 
 
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( EarthballK , x + fx , y - 4 + fy , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . vspeed =  - 0.5 ; 
playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
c . hspeed += hspeed / 1.5 ; 
 } 
  
  if (  (  ! getcon ( "shoot" , "hold" , true , playerNum )  &&  ! getcon ( "down" , "hold" , true , playerNum )  || stats . energy == 0 )  && anim == "statue" )  { 
 anim = "stand" ; 
newActor ( Poof , x , y - 8 )  ; 
newActor ( Poof , x , y + 8 )  ; 
 } 
  
  break ;  case "water" :  if ( getcon ( "shoot" , "hold" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy >= 0.5 && getFrames (  )  % 8 == 0 &&  ! holding )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( WaterBomb , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . hspeed += hspeed / 1.5 ; 
c . hspeed += 1.0 - randFloat ( 2.0 )  ; 
c . vspeed -= randFloat ( 2.0 )  ; 
playSound ( sndWaterball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy -= 0.5 ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  break ;  default :  if ( cooldown > 0 )  break ;  
  if ( getcon ( "shoot" , "press" , true , playerNum )  )  { 
 cooldown = 45 ; 
breatheFire (  )  ; 
playSoundChannel ( sndFlame , 0 , 0 )  ; 
 if ( stats . energy >= 1 )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Fireball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  } 
  
  break ;  }  
  if ( canMove )  switch ( stats . subitem )  {  case "fire" :  if ( getcon ( "spec1" , "press" , true , playerNum )  && anim != "stomp" && anim != "hurt" && stats . energy > 0 && cooldown == 0 )  { 
 cooldown = 8 ; 
 var fx = 6 ;
  var fy = 0 ;
  if ( anim == "crouch" ) fy = 6 ; 
 
  if ( anim == "crawl" ) fy = 10 ; 
 
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( FireballK , x + fx , y - 4 + fy , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . vspeed =  - 0.5 ; 
playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
c . hspeed += hspeed / 1.5 ; 
 } 
  
  break ;  case "ice" :  if ( cooldown > 0 )  break ;  
  if ( getcon ( "spec1" , "press" , true , playerNum )  )  { 
 cooldown = 60 ; 
breatheFire ( 1 )  ; 
playSoundChannel ( sndFlame , 0 , 0 )  ; 
 } 
  
  if ( getcon ( "spec1" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Iceball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  break ;  case "earth" :  if ( getcon ( "spec1" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 && cooldown == 0 && anim != "statue" )  { 
 cooldown = 8 ; 
 var fx = 6 ;
  var fy = 0 ;
  if ( anim == "crouch" ) fy = 6 ; 
 
  if ( anim == "crawl" ) fy = 10 ; 
 
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( EarthballK , x + fx , y - 4 + fy , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . vspeed =  - 0.5 ; 
playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
c . hspeed += hspeed / 1.5 ; 
 } 
  
  if (  (  ! getcon ( "shoot" , "hold" , true , playerNum )  &&  ! getcon ( "down" , "hold" , true , playerNum )  || stats . energy == 0 )  && anim == "statue" )  { 
 anim = "stand" ; 
newActor ( Poof , x , y - 8 )  ; 
newActor ( Poof , x , y + 8 )  ; 
 } 
  
  break ;  case "water" :  if ( getcon ( "spec1" , "hold" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy >= 0.5 && getFrames (  )  % 8 == 0 &&  ! holding )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( WaterBomb , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . hspeed += 1.0 - randFloat ( 2.0 )  ; 
c . vspeed -= randFloat ( 2.0 )  ; 
playSound ( sndWaterball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy -= 0.5 ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  break ;  default :  if ( cooldown > 0 )  break ;  
  if ( getcon ( "spec1" , "press" , true , playerNum )  )  { 
 cooldown = 45 ; 
breatheFire ( 1 )  ; 
playSoundChannel ( sndFlame , 0 , 0 )  ; 
 if ( stats . energy >= 1 )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Fireball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . hspeed += hspeed / 1.5 ; 
playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
 if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  
  } 
  
  break ;  }  
  if ( cooldown > 0 ) cooldown --  ; 
 
  if (  ! placeFree ( x , y + 1 )  &&  ! onPlatform (  )  )  { 
 groundx = x ; 
groundy = y ; 
 } 
  
  } 
  
  else  { 
 swimming = true ; 
 if ( stats . stamina < stats . maxStamina && guardtime <= 0 ) stats . stamina += 0.05 ; 
 
 an [ "fall" ] = an [ "fallN" ]  ; 
 switch ( anim )  {  case "swimF" :  case "swimU" :  case "swimD" :  case "swimUF" :  case "swimDF" : frame += sqrt ( abs ( hspeed * hspeed )  + abs ( vspeed * vspeed )  )  / 12 ; 
 break ;  case "hurt" : frame += 0.2 ; 
 if ( floor ( frame )  > an [ anim ]  . len (  )  - 1 )  { 
 anim = "fall" ; 
frame = 0.0 ; 
 } 
  
  break ;  case "fall" : frame += 0.01 ; 
 break ;  }  if ( anim != "climb" ) frame = wrap ( abs ( frame )  , 0.0 , an [ anim ]  . len (  )  - 1 )  ; 
 
  if ( stats . weapon != "air" && stats . stamina < stats . maxStamina && blinking == 0.0 && guardtime <= 0 ) stats . stamina += 0.05 ; 
 
  if ( anim != "hurt" )  { 
  if ( fabs ( hspeed )  < 0.3 && fabs ( vspeed )  < 0.2 ) anim = "fall" ; 
 
  if ( fabs ( hspeed )  > 0.3 ) anim = "swimF" ; 
 
  if ( vspeed > 0.2 ) anim = "swimD" ; 
 
  if ( vspeed <  - 0.2 ) anim = "swimU" ; 
 
  if ( fabs ( hspeed )  > 0.3 && vspeed > 0.2 ) anim = "swimDF" ; 
 
  if ( fabs ( hspeed )  > 0.3 && vspeed <  - 0.2 ) anim = "swimUF" ; 
 
  } 
  
  if ( canMove )  { 
 mspeed = 2.0 ; 
 if ( config . stickspeed )  { 
  var j = null ;
  if ( playerNum == 1 ) j = config . joy ; 
 
  if ( playerNum == 2 ) j = config . joy2 ; 
 
  if ( abs ( joyX ( j . index )  )  > js_max * 0.1 ) mspeed =  ( 3.0 * abs ( joyX ( j . index )  )  )  / float ( js_max )  ; 
 
  if ( abs ( joyY ( j . index )  )  > abs ( joyX ( j . index )  )  && abs ( joyY ( j . index )  )  > js_max * 0.1 ) mspeed = 2.0 / float ( js_max )  * abs ( joyY ( j . index )  )  ; 
 
  } 
  
  if ( invincible ) mspeed += 0.4 ; 
 
  if ( nowInWater ) mspeed *= 0.8 ; 
 
  if ( anim == "crawl" ) mspeed = 1.0 ; 
 
  if ( zoomies > 0 ) mspeed *= 2.0 ; 
 
  if ( zoomies > 0 ) accel = 0.2 ; 
 
  else accel = 0.1 ; 
 
  if ( getcon ( "right" , "hold" , true , playerNum )  && hspeed < mspeed && anim != "wall" && anim != "slide" && anim != "hurt" ) hspeed += accel ; 
 
  if ( getcon ( "left" , "hold" , true , playerNum )  && hspeed >  - mspeed && anim != "wall" && anim != "slide" && anim != "hurt" ) hspeed -= accel ; 
 
  if ( getcon ( "down" , "hold" , true , playerNum )  && vspeed < mspeed && anim != "wall" && anim != "slide" && anim != "hurt" ) vspeed += accel ; 
 
  if ( getcon ( "up" , "hold" , true , playerNum )  && vspeed >  - mspeed && anim != "wall" && anim != "slide" && anim != "hurt" ) vspeed -= accel ; 
 
  } 
  
  if ( hspeed > 0 ) hspeed -= friction / 2 ; 
 
  if ( hspeed < 0 ) hspeed += friction / 2 ; 
 
  if ( fabs ( hspeed )  < friction / 2 ) hspeed = 0.0 ; 
 
  if ( vspeed > 0 ) vspeed -= friction / 2 ; 
 
  if ( vspeed < 0 ) vspeed += friction / 2 ; 
 
  if ( fabs ( vspeed )  < friction / 2 ) vspeed = 0.0 ; 
 
  if ( vspeed > 4 ) vspeed -= 0.2 ; 
 
  if ( anim != "climb" && anim != "wall" )  { 
  if ( hspeed > 0.1 ) flip = 0 ; 
 
  if ( hspeed <  - 0.1 ) flip = 1 ; 
 
  } 
  
  if ( canMove )  switch ( stats . weapon )  {  case "fire" :  if ( getcon ( "shoot" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( FireballK , x + fx , y - 4 , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 2 ; 
c . vspeed += vspeed / 2 ; 
stats . energy --  ; 
firetime = 60 ; 
 } 
  
  break ;  case "ice" :  if ( getcon ( "shoot" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 &&  !  (  ! placeFree ( x , y + 1 )  && getcon ( "down" , "hold" , true , playerNum )  )  )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Iceball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 2 ; 
c . vspeed += vspeed / 2 ; 
stats . energy --  ; 
firetime = 60 ; 
 } 
  
  break ;  case "earth" :  if ( getcon ( "shoot" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 && cooldown == 0 && anim != "statue" )  { 
 cooldown = 8 ; 
 var fx = 6 ;
  var fy = 0 ;
  if ( anim == "crouch" ) fy = 6 ; 
 
  if ( anim == "crawl" ) fy = 10 ; 
 
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( EarthballK , x + fx , y - 4 + fy , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . vspeed =  - 0.5 ; 
playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
c . hspeed += hspeed / 1.5 ; 
 } 
  
  if (  (  ! getcon ( "shoot" , "hold" , true , playerNum )  &&  ! getcon ( "down" , "hold" , true , playerNum )  || stats . energy == 0 )  && anim == "statue" )  { 
 anim = "stand" ; 
newActor ( Poof , x , y - 8 )  ; 
newActor ( Poof , x , y + 8 )  ; 
 } 
  
  break ;  case "water" :  if ( getcon ( "shoot" , "hold" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0.5 && getFrames (  )  % 4 == 0 &&  ! holding )  { 
  var c = fireWeapon ( WaterBomb , x , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndWaterball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  && freeDown2 )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 3 ; 
c . vspeed += vspeed / 3 ; 
c . hspeed += 1.0 - randFloat ( 2.0 )  ; 
c . vspeed += 1.0 - randFloat ( 2.0 )  ; 
stats . energy -= 0.5 ; 
firetime = 60 ; 
 } 
  
  break ;  }  
  if ( canMove )  switch ( stats . subitem )  {  case "fire" :  if ( getcon ( "spec1" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( FireballK , x + fx , y - 4 , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 2 ; 
c . vspeed += vspeed / 2 ; 
stats . energy --  ; 
firetime = 60 ; 
 } 
  
  break ;  case "ice" :  if ( getcon ( "spec1" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 &&  !  (  ! placeFree ( x , y + 1 )  && getcon ( "down" , "hold" , true , playerNum )  )  )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Iceball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 2 ; 
c . vspeed += vspeed / 2 ; 
stats . energy --  ; 
firetime = 60 ; 
 } 
  
  break ;  case "earth" :  if ( getcon ( "spec1" , "press" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0 && cooldown == 0 && anim != "statue" )  { 
 cooldown = 8 ; 
 var fx = 6 ;
  var fy = 0 ;
  if ( anim == "crouch" ) fy = 6 ; 
 
  if ( anim == "crawl" ) fy = 10 ; 
 
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( EarthballK , x + fx , y - 4 + fy , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 c . vspeed =  - 0.5 ; 
playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
 stats . energy --  ; 
firetime = 60 ; 
c . hspeed += hspeed / 1.5 ; 
 } 
  
  if (  (  ! getcon ( "shoot" , "hold" , true , playerNum )  &&  ! getcon ( "down" , "hold" , true , playerNum )  || stats . energy == 0 )  && anim == "statue" )  { 
 anim = "stand" ; 
newActor ( Poof , x , y - 8 )  ; 
newActor ( Poof , x , y + 8 )  ; 
 } 
  
  break ;  case "water" :  if ( getcon ( "spec1" , "hold" , true , playerNum )  && anim != "slide" && anim != "hurt" && stats . energy > 0.5 && getFrames (  )  % 4 == 0 &&  ! holding )  { 
  var c = fireWeapon ( WaterBomb , x , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndWaterball , 0 )  ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  && freeDown2 )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 3 ; 
c . vspeed += vspeed / 3 ; 
c . hspeed += 1.0 - randFloat ( 2.0 )  ; 
c . vspeed += 1.0 - randFloat ( 2.0 )  ; 
stats . energy -= 0.5 ; 
firetime = 60 ; 
 } 
  
  break ;  }  
  } 
  
  if ( canMove && getcon ( "swap" , "press" , true , playerNum )  ) swapitem (  )  ; 
 
 shape . setPos ( x , y )  ; 
xprev = x ; 
yprev = y ; 
 if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else  { 
 vspeed /= 2 ; 
 if ( fabs ( vspeed )  < 0.01 ) vspeed = 0 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  } 
  
  if ( hspeed != 0 )  { 
  if ( placeFree ( x + hspeed , y )  )  { 
  for (  var i = 0 ;
 i < max ( 8 , abs ( hspeed * 3 )  )  ; i ++  )  if (  ! placeFree ( x , y + max ( 6 , abs ( hspeed )  )  )  && placeFree ( x , y + 1 )  &&  ! swimming && vspeed >= 0 &&  ! onPlatform ( hspeed )  &&  ! onPlatform ( hspeed ,  - 1 )  )  { 
 y += 1 ; 
 } 
  
 x += hspeed ; 
 } 
  
  else  { 
  var didstep = false ;
  for (  var i = 1 ;
 i <= 8 ; i ++  )  { 
  if ( placeFree ( x + hspeed , y - i )  )  { 
 x += hspeed ; 
y -= i ; 
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
  
  if ( anim == "slide" || anim == "crawl" ) shape = shapeSlide ; 
 
  else shape = shapeStand ; 
 
 shapeStand . setPos ( x , y )  ; 
shapeSlide . setPos ( x , y )  ; 
 if ( y <  - 100 ) y =  - 100.0 ; 
 
  switch ( escapeMoPlat ( 1 , 1 )  )  {  case 1 :  if ( vspeed < 0 ) vspeed = 0 ; 
 
  break ;  case 2 :  if ( hspeed < 0 ) hspeed = 0 ; 
 
  break ;  case  - 1 :  if ( vspeed > 0 ) vspeed = 0 ; 
 
  break ;  case  - 2 :  if ( hspeed > 0 ) hspeed = 0 ; 
 
  break ;  }  if ( onIce (  )  ) friction = 0.01 ; 
 
  else friction = 0.1 ; 
 
  if ( hurt > 0 && invincible == 0 )  { 
  if ( blinking == 0 )  { 
 blinking = 60 ; 
playSound ( sndHurt , 0 )  ; 
 if ( stats . weapon == "earth" && anim == "statue" && stats . stamina > 0 && frame >= 2 )  { 
 stats . stamina -= hurt ; 
guardtime = 180 ; 
blinking = 120 ; 
newActor ( Spark , x , y )  ; 
 } 
  
  else  { 
  if ( stats . health > 0 ) stats . health -= hurt ; 
 
  if ( flip == 0 ) hspeed =  - 2.0 ; 
 
  else hspeed = 2.0 ; 
 
 anim = "hurt" ; 
frame = 0.0 ; 
 } 
  
  } 
  
 hurt = 0 ; 
 } 
  
  else hurt = 0 ; 
 
  if ( blinking > 0 ) blinking --  ; 
 
  if ( invincible > 0 ) invincible --  ; 
 
  if (  (  ( invincible % 2 == 0 && invincible > 240 )  ||  ( invincible % 4 == 0 && invincible > 120 )  || invincible % 8 == 0 )  && invincible > 0 ) newActor ( Glimmer , x + 10 - randInt ( 20 )  , y + 10 - randInt ( 20 )  )  ; 
 
 stompDamage = 2 ; 
 if ( anim == "statue" ) stompDamage = 8 ; 
 
  if ( anim == "stomp" ) stompDamage = 4 ; 
 
 inMelee =  ( anim == "stomp" || anim == "ram" )  ; 
 } ;  returnVal . draw = function (  ) {  if (  ! hidden )  { 
  switch ( stats . weapon )  {  case "normal" : sprite = mySprNormal ; 
damageMult = damageMultN ; 
 break ;  case "fire" : sprite = mySprFire ; 
damageMult = damageMultF ; 
 break ;  case "ice" : sprite = mySprIce ; 
damageMult = damageMultI ; 
 break ;  case "air" : sprite = mySprAir ; 
damageMult = damageMultA ; 
 break ;  case "earth" : sprite = mySprEarth ; 
damageMult = damageMultE ; 
 break ;  }  if ( anim != null && an [ anim ]  != null )  { 
  if ( blinking == 0 || anim == "hurt" ) drawSpriteZ ( 2 , sprite , an [ anim ]  [ wrap ( floor ( frame )  , 0 , an [ anim ]  . len (  )  - 1 )  ]  , x - camx , y - camy , 0 , int ( flip )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteZ ( 2 , sprite , an [ anim ]  [ wrap ( floor ( frame )  , 0 , an [ anim ]  . len (  )  - 1 )  ]  , x - camx , y - camy , 0 , int ( flip )  , 1 , 1 , wrap ( blinking , 0 , 10 )  . tofloat (  )  / 10.0 )  ; 
 
  } 
  
  if ( debug )  { 
 setDrawColor ( 0x008000ff )  ; 
shape . draw (  )  ; 
 } 
  
  if (  ( zoomies > 0 || anim == "stomp" ||  ( anim == "statue" && vspeed > 4 )  || anim == "ram" )  && getFrames (  )  % 2 == 0 ) newActor ( AfterImage , x , y ,  [ sprite , an [ anim ]  [ wrap ( floor ( frame )  , 0 , an [ anim ]  . len (  )  - 1 )  ]  , 0 , flip , 0 , 1 , 1 ]  )  ; 
 
  } 
  
  if ( tftime !=  - 1 )  { 
  if ( tftime < 4 )  { 
  if (  ! hidden ) drawSpriteZ ( 3 , sprTFflash , tftime , x - camx , y - camy )  ; 
 
 tftime += 0.25 ; 
 } 
  
  else tftime =  - 1 ; 
 
  } 
  
 drawLight ( sprLightBasic , 0 , x - camx , y - camy )  ; 
 } ;  returnVal . breatheFire = function ( usealt = false ) {  for (  var i = 0 ;
 i < 10 ; i ++  )  { 
  var c = 0 ;
  var t = "fire" ;
  if ( usealt ) t = stats . subitem ; 
 
  else t = stats . weapon ; 
 
  if ( t != "ice" ) c = fireWeapon ( FlameBreath , x , y - 6 , 1 , id )  ; 
 
  else c = fireWeapon ( IceBreath , x , y - 6 , 1 , id )  ; 
 
  if ( flip == 0 )  { 
 c . hspeed = 1.0 + randFloat ( 0.5 )  ; 
c . x += 8 ; 
 if ( t == "ice" ) c . hspeed += 1.8 ; 
 
  } 
  
  else  { 
 c . hspeed =  - 1.5 - randFloat ( 0.5 )  ; 
c . x -= 8 ; 
 if ( t == "ice" ) c . hspeed -= 1.8 ; 
 
  } 
  
  if ( vspeed > 0 ) c . vspeed =  (  - i . tofloat (  )  + 5.0 )  / 8.0 ; 
 
  else c . vspeed =  ( i . tofloat (  )  - 5.0 )  / 8.0 ; 
 
  if ( anim == "crawl" ) c . y += 8 ; 
 
  } 
  } ;  returnVal . atLadder = function (  ) {  var ns = Rec ( x + shape . ox , y + shape . oy , shape . w , shape . h , shape . kind )  ;
  var cx = floor ( x / 16 )  ;
  var cy = floor ( y / 16 )  ;
  var wl = null ;
  for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "tilelayer" && gvMap . data . layers [ i ]  . name == "solid" )  { 
 wl = gvMap . data . layers [ i ]  ; 
 break ;  } 
  
  } 
  if ( wl != null )  { 
  var tile = cx +  ( cy * wl . width )  ;
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 29 || wl . data [ tile ]  - gvMap . solidfid == 50 )  { 
 gvMap . shape . setPos (  ( cx * 16 )  + 8 ,  ( cy * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 1.0 ; 
gvMap . shape . h = 12.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  } 
  
  
  } 
  
  return false ;
  } ;  returnVal . die = function ( skipres = false ) {  if ( resTime > 0 )  return ; 
  
  if ( stats . canres &&  ! skipres )  { 
 stats . health = game . maxHealth ; 
blinking = 120 ; 
hspeed = 0.0 ; 
vspeed = 0.0 ; 
 if ( y > gvMap . h )  { 
 invincible = 300 ; 
resTime = 300 ; 
vspeed =  - 4.0 ; 
 } 
  
 stats . canres = false ; 
 } 
  
  else  { 
 deleteActor ( id )  ; 
 if ( playerNum == 1 ) gvPlayer = false ; 
 
  if ( playerNum == 2 ) gvPlayer2 = false ; 
 
 newActor ( DeadPlayer , x , y ,  [ sprite , an [ "die" ]  , playerNum ]  )  ; 
stats . health = 0 ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "Konqi" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . canJump = 16 ; 
 squirrelClassFunction . didJump = false ; 
 squirrelClassFunction . friction = 0.1 ; 
 squirrelClassFunction . gravity = 0.0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . canMove = true ; 
 squirrelClassFunction . mspeed = 4 ; 
 squirrelClassFunction . climbdir = 1.0 ; 
 squirrelClassFunction . blinking = 0 ; 
 squirrelClassFunction . xstart = 0.0 ; 
 squirrelClassFunction . ystart = 0.0 ; 
 squirrelClassFunction . firetime = 0 ; 
 squirrelClassFunction . guardtime = 0 ; 
 squirrelClassFunction . hurt = 0 ; 
 squirrelClassFunction . swimming = false ; 
 squirrelClassFunction . canStomp = true ; 
 squirrelClassFunction . sprite = sprKonqi ; 
 squirrelClassFunction . invincible = 0 ; 
 squirrelClassFunction . shapeStand = 0 ; 
 squirrelClassFunction . shapeSlide = 0 ; 
 squirrelClassFunction . tftime =  - 1 ; 
 squirrelClassFunction . hidden = false ; 
 squirrelClassFunction . jumpBuffer = 0 ; 
 squirrelClassFunction . rspeed = 0.0 ; 
 squirrelClassFunction . slideframe = 0.0 ; 
 squirrelClassFunction . wasInWater = false ; 
 squirrelClassFunction . cooldown = 0 ; 
 squirrelClassFunction . antigrav = 0 ; 
 squirrelClassFunction . groundx = 0.0 ; 
 squirrelClassFunction . groundy = 0.0 ; 
 squirrelClassFunction . held = null ; 
 squirrelClassFunction . accel = 0.2 ; 
 squirrelClassFunction . anim = "" ; 
 squirrelClassFunction . an =  { stand :  [ 0 , 1 , 2 , 3 ]  , walk :  [ 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 ]  , run :  [ 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 ]  , dive :  [ 14 , 15 ]  , crouch :  [ 14 , 15 ]  , getUp :  [ 15 , 14 ]  , crawl :  [ 40 , 41 , 42 , 43 , 42 , 41 ]  , slide :  [  ]  , hurt :  [ 6 , 7 ]  , jumpU :  [ 32 , 33 ]  , jumpT :  [ 34 , 35 ]  , fall : null , fallN :  [ 36 , 37 ]  , climb :  [ 44 , 45 , 46 , 47 , 46 , 45 ]  , wall :  [ 4 , 5 ]  , fallW :  [ 4 ]  , swimF :  [ 48 , 49 , 50 , 51 ]  , swimUF :  [ 48 , 49 , 50 , 51 ]  , swimDF :  [ 48 , 49 , 50 , 51 ]  , swimU :  [ 48 , 49 , 50 , 51 ]  , swimD :  [ 48 , 49 , 50 , 51 ]  , skid :  [ 4 , 5 ]  , push :  [ 6 , 7 ]  , stomp :  [ 38 , 39 ]  , statue :  [ 52 , 53 , 54 , 55 ]  , die :  [ 12 , 13 ]  , win :  [ 52 ]  , ram :  [ 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 ]  }  ; 
 squirrelClassFunction . mySprNormal = null ; 
 squirrelClassFunction . mySprFire = null ; 
 squirrelClassFunction . mySprIce = null ; 
 squirrelClassFunction . mySprAir = null ; 
 squirrelClassFunction . mySprEarth = null ; 
 squirrelClassFunction . damageMultN =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 0.5 , dark : 0.5 , cut : 0.5 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultF =  { normal : 0.5 , fire : 0.0 , ice : 1.0 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 0.5 , dark : 0.5 , cut : 0.5 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultI =  { normal : 0.5 , fire : 1.0 , ice : 0.0 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 0.5 , dark : 0.5 , cut : 0.5 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultA =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 1.0 , air : 0.0 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 0.5 , dark : 0.5 , cut : 0.5 , blast : 0.5 }  ; 
 squirrelClassFunction . damageMultE =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 0.0 , air : 1.0 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 0.5 , dark : 0.5 , cut : 0.25 , blast : 0.5 }  ; 
 squirrelClassFunction . damageMultS =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 0.0 , water : 1.0 , light : 0.5 , dark : 0.5 , cut : 0.5 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultW =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 1.0 , water : 0.0 , light : 0.5 , dark : 0.5 , cut : 0.5 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultL =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 0.0 , dark : 1.0 , cut : 0.5 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultD =  { normal : 0.5 , fire : 0.5 , ice : 0.5 , earth : 0.5 , air : 0.5 , toxic : 0.5 , shock : 0.5 , water : 0.5 , light : 1.0 , dark : 0.0 , cut : 0.5 , blast : 1.0 }  ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Player;  return squirrelClassFunction; })()) ; 
Katie =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Konqi ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
sprite = sprKatie ; 
mySprNormal = sprKatie ; 
mySprFire = sprKatieFire ; 
mySprIce = sprKatieIce ; 
mySprAir = sprKatieAir ; 
mySprEarth = sprKatieEarth ; 
 } ;  returnVal . _typeof = function (  ) {  return "Katie" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Konqi;  return squirrelClassFunction; })()) ; 



}; 
