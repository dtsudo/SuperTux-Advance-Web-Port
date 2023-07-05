if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/tux.nut'] = function () { 


Tux =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Player ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . canJump = 16 ; 
 returnVal . didJump = false ; 
 returnVal . frame = 0.0 ; 
 returnVal . flip = 0 ; 
 returnVal . canMove = true ; 
 returnVal . mspeed = 4 ; 
 returnVal . climbdir = 1.0 ; 
 returnVal . blinking = 0 ; 
 returnVal . startx = 0.0 ; 
 returnVal . starty = 0.0 ; 
 returnVal . firetime = 0 ; 
 returnVal . hurt = 0 ; 
 returnVal . swimming = false ; 
 returnVal . sliding = false ; 
 returnVal . canStomp = true ; 
 returnVal . sprite = sprTux ; 
 returnVal . invincible = 0 ; 
 returnVal . shapeStand = 0 ; 
 returnVal . shapeSlide = 0 ; 
 returnVal . tftime =  - 1 ; 
 returnVal . energy = 0.0 ; 
 returnVal . hidden = false ; 
 returnVal . jumpBuffer = 0 ; 
 returnVal . rspeed = 0.0 ; 
 returnVal . slideframe = 0.0 ; 
 returnVal . wasInWater = false ; 
 returnVal . antigrav = 0 ; 
 returnVal . groundx = 0.0 ; 
 returnVal . groundy = 0.0 ; 
 returnVal . slippery = false ; 
 returnVal . accel = 0.2 ; 
 returnVal . anStandN =  [ 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 76 , 77 , 78 , 79 , 78 , 79 , 78 , 79 , 78 , 79 , 78 , 77 , 76 ]  ; 
 returnVal . anStandF =  [ 0 , 1 , 2 , 3 ]  ; 
 returnVal . anStandI =  [ 0 , 1 , 2 , 3 ]  ; 
 returnVal . anStandA =  [ 0 , 1 , 2 , 3 ]  ; 
 returnVal . anStandE =  [ 0 , 1 , 2 , 3 ]  ; 
 returnVal . anWalk =  [ 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 ]  ; 
 returnVal . anRun =  [ 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 ]  ; 
 returnVal . anDive =  [ 24 , 25 ]  ; 
 returnVal . anSlide =  [ 26 , 27 , 28 , 29 ]  ; 
 returnVal . anHurt =  [ 30 , 31 ]  ; 
 returnVal . anJumpU =  [ 32 , 33 ]  ; 
 returnVal . anJumpT =  [ 34 , 35 ]  ; 
 returnVal . anFall = null ; 
 returnVal . anFallN =  [ 36 , 37 ]  ; 
 returnVal . anFallW =  [ 48 ]  ; 
 returnVal . anSwimF =  [ 52 , 53 , 54 , 55 ]  ; 
 returnVal . anSwimUF =  [ 56 , 57 , 58 , 59 ]  ; 
 returnVal . anSwimDF =  [ 60 , 61 , 62 , 63 ]  ; 
 returnVal . anSwimU =  [ 64 , 65 , 66 , 67 ]  ; 
 returnVal . anSwimD =  [ 68 , 69 , 70 , 71 ]  ; 
 returnVal . anSkid =  [ 4 , 5 ]  ; 
 returnVal . anPush =  [ 6 , 7 ]  ; 
 returnVal . anClimb =  [ 44 , 45 , 46 , 47 , 46 , 45 ]  ; 
 returnVal . anWall =  [ 48 , 49 ]  ; 
 returnVal . anCrawl =  [ 72 , 73 , 74 , 75 , 74 , 73 ]  ; 
 returnVal . mySprNormal = null ; 
 returnVal . mySprFire = null ; 
 returnVal . mySprIce = null ; 
 returnVal . mySprAir = null ; 
 returnVal . mySprEarth = null ; 
 returnVal . nowInWater = false ; 
 returnVal . damageMultN =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 returnVal . damageMultF =  { normal : 1.0 , fire : 0.5 , ice : 2.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 returnVal . damageMultI =  { normal : 1.0 , fire : 2.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 returnVal . damageMultA =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 2.0 , air : 0.5 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 0.5 }  ; 
 returnVal . damageMultE =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 0.50 , air : 2.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 0.5 , blast : 1.0 }  ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
anStand = anStandN ; 
anim = anStand ; 
shapeStand = Rec ( x , y , 5 , 12 , 0 , 0 , 0 )  ; 
shapeSlide = Rec ( x , y , 5 , 6 , 0 , 0 , 6 )  ; 
shape = shapeStand ; 
 if (  ! gvPlayer ) gvPlayer = this ; 
 
 startx = _x . tofloat (  )  ; 
starty = _y . tofloat (  )  ; 
energy = game . maxEnergy ; 
anFall = anFallN ; 
xprev = x ; 
yprev = y ; 
mySprNormal = sprTux ; 
mySprFire = sprTuxFire ; 
mySprIce = sprTuxIce ; 
mySprAir = sprTuxAir ; 
mySprEarth = sprTuxEarth ; 
 } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
shapeSlide . setPos ( x , y )  ; 
shapeStand . setPos ( x , y )  ; 
 if ( shape == shapeStand &&  ! placeFree ( x , y )  )  { 
 shape = shapeSlide ; 
 if ( anim == anStand || anim == anWalk || anim == anRun ) anim = anCrawl ; 
 
  } 
  
  var freeDown = placeFree ( x , y + 1 )  ;
  var freeDown2 = placeFree ( x , y + 2 )  ;
  var freeLeft = placeFree ( x - 1 , y )  ;
  var freeRight = placeFree ( x + 1 , y )  ;
  var freeUp = placeFree ( x , y - 1 )  ;
  var nowInWater = inWater ( x , y )  ;
  if ( firetime > 0 && game . weapon != 3 &&  ( game . weapon != 4 || anim != anSlide )  )  { 
 firetime --  ; 
 } 
  
  if ( firetime == 0 && energy < game . maxEnergy )  { 
 energy ++  ; 
firetime = 60 ; 
 } 
  
  if ( game . weapon == 0 ) game . maxEnergy = 0 ; 
 
  if ( game . weapon == 3 ) game . maxEnergy = 4 + game . airBonus ; 
 
  if ( energy > game . maxEnergy ) energy = game . maxEnergy ; 
 
  if (  (  ! inWater ( x , y )  || game . weapon == 4 )  && resTime <= 0 )  { 
 swimming = false ; 
shapeStand . h = 12.0 ; 
slippery =  ( anim == anDive || anim == anSlide || onIce (  )  )  ; 
 switch ( anim )  {  case anStand :  if ( game . weapon == 2 && floor ( frame )  == 0 ) frame += 0.01 ; 
 
  else  if ( game . weapon == 2 || game . weapon == 1 ) frame += 0.1 ; 
 
  else  if ( game . weapon == 3 ) frame += 0.05 ; 
 
  else frame += 0.05 ; 
 
  
  
  if ( abs ( rspeed )  > 0.1 )  { 
 anim = anWalk ; 
frame = 0.0 ; 
 } 
  
  if ( placeFree ( x , y + 2 )  &&  ! onPlatform (  )  )  { 
  if ( vspeed >= 0 ) anim = anFall ; 
 
  else anim = anJumpU ; 
 
 frame = 0.0 ; 
 } 
  
  break ;  case anWalk : frame += abs ( rspeed )  / 8 ; 
 if ( abs ( rspeed )  <= 0.1 || fabs ( hspeed )  <= 0.1 ) anim = anStand ; 
 
  if ( abs ( rspeed )  > 2.4 ) anim = anRun ; 
 
  if ( placeFree ( x , y + 2 )  &&  ! onPlatform (  )  )  { 
  if ( vspeed >= 0 ) anim = anFall ; 
 
  else anim = anJumpU ; 
 
 frame = 0.0 ; 
 } 
  
  break ;  case anRun :  case anSkid :  if ( flip == 0 && hspeed < 0 )  { 
 hspeed += 0.05 ; 
anim = anSkid ; 
 } 
  
  else  if ( flip == 1 && hspeed > 0 )  { 
 hspeed -= 0.05 ; 
anim = anSkid ; 
 } 
  
  else anim = anRun ; 
 
  
  if ( anim == anSkid ) frame += 0.2 ; 
 
  else  if ( game . weapon == 2 ) frame += abs ( rspeed )  / 16 ; 
 
  else frame += abs ( rspeed )  / 8 ; 
 
  
  if ( abs ( rspeed )  < 2 && anim != anSkid ) anim = anWalk ; 
 
  if ( placeFree ( x , y + 2 )  &&  ! onPlatform (  )  )  { 
  if ( vspeed >= 0 ) anim = anFall ; 
 
  else anim = anJumpU ; 
 
 frame = 0.0 ; 
 } 
  
  break ;  case anPush :  break ;  case anJumpU :  if ( frame < 1 ) frame += 0.1 ; 
 
  if (  ! placeFree ( x , y + 1 )  ||  ( onPlatform (  )  && vspeed >= 0 )  )  { 
 anim = anStand ; 
frame = 0.0 ; 
 } 
  
  if ( vspeed > 0 )  { 
 anim = anJumpT ; 
frame = 0.0 ; 
 } 
  
  break ;  case anJumpT : frame += 0.2 ; 
 if (  ! freeDown ||  ( onPlatform (  )  && vspeed >= 0 )  )  { 
 anim = anStand ; 
frame = 0.0 ; 
 } 
  
  if ( frame > anim . len (  )  - 1 )  { 
 anim = anFall ; 
frame = 0.0 ; 
 } 
  
  break ;  case anFall : frame += 0.1 ; 
 if (  ! freeDown ||  ( onPlatform (  )  && vspeed >= 0 )  )  { 
 anim = anStand ; 
frame = 0.0 ; 
 } 
  
  break ;  case anWall : frame += 0.3 ; 
vspeed = 0 ; 
 if ( floor ( frame )  > 1 )  { 
 vspeed =  - 5.0 ; 
 if ( flip == 0 ) hspeed = 3.0 ; 
 
  else hspeed =  - 3.0 ; 
 
 anim = anJumpU ; 
frame = 0.0 ; 
 } 
  
  if (  ! freeLeft ) flip = 0 ; 
 
  if (  ! freeRight ) flip = 1 ; 
 
  break ;  case anDive : frame += 0.25 ; 
 if ( floor ( frame )  > 1 )  { 
  if ( fabs ( hspeed )  <= 0.5 && game . weapon != 4 ) anim = anCrawl ; 
 
  else anim = anSlide ; 
 
 shape = shapeSlide ; 
 } 
  
  break ;  case anSlide :  if ( game . weapon == 4 ) slideframe += abs ( hspeed / 8.0 )  ; 
 
  else slideframe += abs ( hspeed / 24.0 )  ; 
 
 frame = slideframe ; 
 if (  ! freeDown && hspeed != 0 )  if ( floor ( getFrames (  )  % 8 - fabs ( hspeed )  )  == 0 || fabs ( hspeed )  > 8 )  { 
  if ( game . weapon == 1 ) newActor ( FlameTiny , x -  ( 8 *  ( hspeed / fabs ( hspeed )  )  )  , y + 10 )  ; 
 
  if ( game . weapon == 2 ) newActor ( Glimmer , x -  ( 12 *  ( hspeed / fabs ( hspeed )  )  )  , y + 10 )  ; 
 
  } 
  
  
  break ;  case anHurt : frame += 0.1 ; 
 if ( floor ( frame )  > 1 )  { 
 anim = anStand ; 
frame = 0.0 ; 
 } 
  
  break ;  case anSwimF : anim = anJumpT ; 
frame = 0.0 ; 
 break ;  case anSwimUF :  case anSwimU :  if ( fabs ( hspeed )  > 1.5 ) anim = anSlide ; 
 
  else anim = anJumpU ; 
 
 frame = 0.0 ; 
vspeed -= 1 ; 
 if ( getcon ( "jump" , "hold" )  && vspeed >  - 4 ) vspeed =  - 6 ; 
 
  break ;  case anSwimDF :  case anSwimD : anim = anFall ; 
frame = 0.0 ; 
 break ;  }  if ( anim == anStand && zoomies ) frame += 0.1 ; 
 
  if ( anim != null ) frame = wrap ( frame , 0 , anim . len (  )  - 1 )  ; 
 
  if ( slippery )  { 
  if (  ! placeFree ( x , y + 4 )  &&  ( fabs ( hspeed )  < 8 ||  ( fabs ( hspeed )  < 12 &&  ( game . weapon == 2 ||  ( game . weapon == 4 && anim == anSlide )  )  )  )  )  { 
  if ( placeFree ( x + 4 , y + 2 )  ) hspeed += 0.25 ; 
 
  if ( placeFree ( x - 4 , y + 2 )  ) hspeed -= 0.25 ; 
 
  if ( freeDown2 ) vspeed += 1.0 ; 
 
  } 
  
  else  if (  ! placeFree ( x , y + 8 )  &&  ( fabs ( hspeed )  < 8 ||  ( fabs ( hspeed )  < 12 && vspeed > 0 )  )  ) vspeed += 0.2 ; 
 
  
  if (  (  ! getcon ( "down" , "hold" )  &&  ! autocon . down && game . weapon != 3 && game . weapon != 4 &&  ! getcon ( "shoot" , "hold" )  )  ||  ( fabs ( hspeed )  < 0.05 &&  ! placeFree ( x , y + 2 )  && game . weapon != 4 )  ||  ( fabs ( hspeed )  < 0.05 &&  ( game . weapon != 3 || game . weapon == 4 )  &&  ! getcon ( "shoot" , "hold" )  )  ||  (  ( game . weapon == 4 || game . weapon == 3 )  &&  ! getcon ( "shoot" , "hold" )  &&  ! getcon ( "down" , "hold" )  &&  ! autocon . down )  )  { 
  if ( anim == anSlide || anim == anCrawl )  { 
  if ( getcon ( "down" , "hold" )  || autocon . down ||  ! placeFree ( x , y - 8 )  ) anim = anCrawl ; 
 
  else anim = anWalk ; 
 
  } 
  
  } 
  
  if ( getcon ( "jump" , "press" )  || getcon ( "up" , "press" )  )  if (  ! getcon ( "shoot" , "hold" )  )  if ( placeFree ( x , y + 2 )  && placeFree ( x , y - 2 )  ) anim = anFall ; 
 
  
  
  } 
  
  if ( anim != anClimb && anim != anWall )  { 
  if (  ( getcon ( "right" , "hold" )  &&  ! getcon ( "left" , "hold" )  && anim != anSlide && canMove )  ||  ( hspeed > 0.1 && anim == anSlide )  ) flip = 0 ; 
 
  if (  ( getcon ( "left" , "hold" )  &&  ! getcon ( "right" , "hold" )  && anim != anSlide && canMove )  ||  ( hspeed <  - 0.1 && anim == anSlide )  ) flip = 1 ; 
 
  } 
  
  if (  ! freeDown2 || anim == anClimb || onPlatform (  )  )  { 
 canJump = 16 ; 
 if ( game . weapon == 3 && energy < game . maxEnergy ) energy += 0.2 ; 
 
  } 
  
  else  { 
  if ( canJump > 0 ) canJump --  ; 
 
  if ( game . weapon == 3 && energy < 1 ) energy += 0.02 ; 
 
  } 
  
  if ( canMove )  { 
  if ( getcon ( "sneak" , "hold" )  ||  ( abs ( joyX ( 0 )  )  <= js_max * 0.4 && abs ( joyX ( 0 )  )  > js_max * 0.1 )  ||  ( abs ( joyY ( 0 )  )  <= js_max * 0.4 && abs ( joyY ( 0 )  )  > js_max * 0.1 )  && config . stickspeed ) mspeed = 1.0 ; 
 
  else  if ( getcon ( "run" , "hold" )  ||  ( abs ( joyX ( 0 )  )  >= js_max * 0.9 || abs ( joyY ( 0 )  )  >= js_max * 0.9 )  && config . stickspeed )  { 
  if ( game . weapon == 2 ) mspeed = 3.5 ; 
 
  else mspeed = 3.0 ; 
 
  if ( invincible ) mspeed += 0.4 ; 
 
  } 
  
  else mspeed = 2.0 ; 
 
  
  if ( nowInWater ) mspeed *= 0.8 ; 
 
  if ( anim == anCrawl ) mspeed = 1.0 ; 
 
  if ( zoomies > 0 ) mspeed *= 2.0 ; 
 
  if ( zoomies > 0 ) accel = 0.4 ; 
 
  else accel = 0.2 ; 
 
  if ( getcon ( "right" , "hold" )  && hspeed < mspeed && anim != anWall && anim != anSlide && anim != anHurt && anim != anClimb && anim != anSkid )  { 
  if ( onIce (  )  ) hspeed += accel / 2.0 ; 
 
  else hspeed += accel ; 
 
  } 
  
  if ( getcon ( "left" , "hold" )  && hspeed >  - mspeed && anim != anWall && anim != anSlide && anim != anHurt && anim != anClimb && anim != anSkid )  { 
  if ( onIce (  )  ) hspeed -= accel / 2.0 ; 
 
  else hspeed -= accel ; 
 
  } 
  
  if ( getcon ( "right" , "hold" )  && rspeed < mspeed && anim != anWall && anim != anSlide && anim != anHurt && anim != anClimb && anim != anSkid )  if ( freeRight || placeFree ( x + 1 , y - 2 )  )  { 
 rspeed += accel ; 
 if ( rspeed < hspeed ) rspeed = hspeed ; 
 
  } 
  
  
  if ( getcon ( "left" , "hold" )  && rspeed >  - mspeed && anim != anWall && anim != anSlide && anim != anHurt && anim != anClimb && anim != anSkid )  if ( freeLeft || placeFree ( x - 1 , y - 2 )  )  { 
 rspeed -= accel ; 
 if ( rspeed > hspeed ) rspeed = hspeed ; 
 
  } 
  
  
  if ( rspeed > 0 ) rspeed -= 0.1 ; 
 
  if ( rspeed < 0 ) rspeed += 0.1 ; 
 
  if (  ( abs ( rspeed )  <= 0.5 || hspeed == 0 )  &&  ! getcon ( "right" , "hold" )  &&  ! getcon ( "left" , "hold" )  ) rspeed = 0.0 ; 
 
  if ( anim == anSlide ) rspeed = hspeed ; 
 
  if ( anim == anClimb )  { 
 vspeed = 0 ; 
 if ( getcon ( "up" , "hold" )  )  if ( placeFree ( x , y - 2 )  )  { 
 frame -= climbdir / 8 ; 
y -= 2 ; 
 } 
  
  
  if ( getcon ( "down" , "hold" )  )  if ( placeFree ( x , y + 2 )  )  { 
 frame += climbdir / 8 ; 
y += 2 ; 
 } 
  
  
  var felloff = true ;
  if ( atLadder (  )  ) felloff = false ; 
 
  if ( felloff )  { 
 anim = anFall ; 
frame = 0.0 ; 
 if ( getcon ( "up" , "hold" )  ) vspeed =  - 2.5 ; 
 
  } 
  
  if ( getcon ( "right" , "press" )  && canMove ) flip = 0 ; 
 
  if ( getcon ( "left" , "press" )  && canMove ) flip = 1 ; 
 
  } 
  
  if (  (  ( getcon ( "down" , "hold" )  && placeFree ( x , y + 2 )  )  || getcon ( "up" , "hold" )  )  && anim != anHurt && anim != anClimb &&  ( vspeed >= 0 || getcon ( "down" , "press" )  || getcon ( "up" , "press" )  )  )  { 
  if ( atLadder (  )  )  { 
 anim = anClimb ; 
frame = 0.0 ; 
hspeed = 0 ; 
vspeed = 0 ; 
x =  ( x -  ( x % 16 )  )  + 8 ; 
 } 
  
  } 
  
  if ( getcon ( "jump" , "press" )  || jumpBuffer > 0 )  { 
  if ( onPlatform (  )  &&  ! placeFree ( x , y + 1 )  && getcon ( "down" , "hold" )  )  { 
 y ++  ; 
canJump = 32 ; 
 if (  ! placeFree ( x , y )  &&  ! placeFree ( x , y - 1 )  ) y --  ; 
 
  } 
  
  else  if ( canJump > 0 && placeFree ( x , y - 2 )  )  { 
 jumpBuffer = 0 ; 
 if ( anim == anClimb ) vspeed =  - 3 ; 
 
  else  if ( game . weapon == 3 || nowInWater ) vspeed =  - 5.0 ; 
 
  else vspeed =  - 5.8 ; 
 
  
 didJump = true ; 
 if ( game . weapon != 3 ) canJump = 0 ; 
 
  if ( anim != anHurt && anim != anDive &&  ( game . weapon != 4 || anim != anSlide )  )  { 
 anim = anJumpU ; 
frame = 0.0 ; 
 } 
  
  if ( game . weapon != 3 )  { 
 stopSound ( sndJump )  ; 
playSound ( sndJump , 0 )  ; 
 } 
  
  else  { 
 stopSound ( sndFlap )  ; 
playSound ( sndFlap , 0 )  ; 
 } 
  
  } 
  
  else  if ( freeDown && anim != anClimb &&  ! placeFree ( x - 2 , y )  && anim != anWall && hspeed <= 0 && tileGetSolid ( x - 12 , y - 12 )  != 40 && tileGetSolid ( x - 12 , y + 12 )  != 40 && tileGetSolid ( x - 12 , y )  != 40 )  { 
 flip = 0 ; 
anim = anWall ; 
frame = 0.0 ; 
playSound ( sndWallkick , 0 )  ; 
 } 
  
  else  if ( freeDown && anim != anClimb &&  ! placeFree ( x + 2 , y )  && anim != anWall && hspeed >= 0 && tileGetSolid ( x + 12 , y - 12 )  != 40 && tileGetSolid ( x + 12 , y + 12 )  != 40 && tileGetSolid ( x + 12 , y )  != 40 )  { 
 flip = 1 ; 
anim = anWall ; 
frame = 0.0 ; 
playSound ( sndWallkick , 0 )  ; 
 } 
  
  else  if ( floor ( energy )  > 0 && game . weapon == 3 && getcon ( "jump" , "press" )  )  { 
  if ( vspeed > 0 ) vspeed = 0.0 ; 
 
  if ( vspeed >  - 4 ) vspeed -= 3.0 ; 
 
 didJump = true ; 
 if ( game . weapon != 3 ) canJump = 0 ; 
 
  if ( anim != anHurt && anim != anDive )  { 
 anim = anJumpU ; 
frame = 0.0 ; 
 } 
  
  if ( game . weapon != 3 )  { 
 stopSound ( sndJump )  ; 
playSound ( sndJump , 0 )  ; 
 } 
  
  else  { 
 stopSound ( sndFlap )  ; 
playSound ( sndFlap , 0 )  ; 
 } 
  
 energy --  ; 
 } 
  
  
  
  
  
  } 
  
  if (  ( anim == anFallN || anim == anFallW )  &&  (  ( getcon ( "left" , "hold" )  &&  ! freeLeft )  ||  ( getcon ( "right" , "hold" )  &&  ! freeRight )  )  )  { 
  if (  ! freeLeft &&  !  ( onIce ( x - 8 , y )  || onIce ( x - 8 , y - 16 )  )  )  { 
  if ( vspeed > 0.5 ) vspeed = 0.5 ; 
 
  if ( getFrames (  )  / 4 % 4 == 0 ) newActor ( PoofTiny , x - 4 , y + 12 )  ; 
 
 anFall = anFallW ; 
anim = anFallW ; 
flip = 0 ; 
 } 
  
  if (  ! freeRight &&  !  ( onIce ( x + 8 , y )  || onIce ( x + 8 , y - 16 )  )  )  { 
  if ( vspeed > 0.5 ) vspeed = 0.5 ; 
 
  if ( getFrames (  )  / 4 % 4 == 0 ) newActor ( PoofTiny , x + 4 , y + 12 )  ; 
 
 anFall = anFallW ; 
anim = anFallW ; 
flip = 1 ; 
 } 
  
  } 
  
  else  { 
 anFall = anFallN ; 
 if ( anim == anFallW ) anim = anFallN ; 
 
  } 
  
  if ( getcon ( "jump" , "press" )  && jumpBuffer <= 0 && freeDown ) jumpBuffer = 8 ; 
 
  if ( jumpBuffer > 0 ) jumpBuffer --  ; 
 
  if ( getcon ( "jump" , "release" )  && vspeed < 0 && didJump )  { 
 didJump = false ; 
vspeed /= 2.5 ; 
 } 
  
  if (  (  (  (  ! freeDown2 || onPlatform (  )  )  &&  ( getcon ( "down" , "hold" )  || autocon . down )  )  ||  ( getcon ( "shoot" , "hold" )  && game . weapon == 4 )  || autocon . down )  && anim != anDive && anim != anSlide && anim != anJumpU && anim != anJumpT && anim != anFall && anim != anHurt && anim != anWall && anim != anCrawl )  { 
  if ( placeFree ( x + 2 , y + 1 )  &&  ! onPlatform (  )  || hspeed >= 1.5 )  { 
 anim = anDive ; 
frame = 0.0 ; 
flip = 0 ; 
popSound ( sndSlide , 0 )  ; 
 } 
  
  else  if ( placeFree ( x - 2 , y + 1 )  &&  ! onPlatform (  )  || hspeed <=  - 1.5 )  { 
 anim = anDive ; 
frame = 0.0 ; 
flip = 1 ; 
popSound ( sndSlide , 0 )  ; 
 } 
  
  else  { 
 anim = anDive ; 
frame = 0.0 ; 
 } 
  
  
  } 
  
  if ( anim == anCrawl )  { 
  if (  (  ! getcon ( "down" , "hold" )  &&  ! autocon . down )  && placeFree ( x , y - 6 )  ) anim = anStand ; 
 
  else  { 
 frame +=  ( hspeed / 8.0 )  ; 
shape = shapeSlide ; 
 } 
  
  if (  ( placeFree ( x + 2 , y + 1 )  || placeFree ( x - 2 , y + 1 )  )  &&  ! onPlatform (  )  ) anim = anSlide ; 
 
  } 
  
  } 
  
  else  { 
  if ( hspeed < 1 && endMode ) hspeed += 0.2 ; 
 
  if ( endMode && placeFree ( x + 2 , y )  ) rspeed = hspeed ; 
 
  else rspeed = 0 ; 
 
  } 
  
  if (  ! freeDown2 || onPlatform (  )  )  { 
  if ( anim == anSlide )  { 
  if ( hspeed > 0 ) hspeed -= friction / 3.0 ; 
 
  if ( hspeed < 0 ) hspeed += friction / 3.0 ; 
 
  } 
  
  else  { 
  if ( hspeed > 0 )  { 
  if (  !  ( mspeed > 2 && getcon ( "right" , "hold" )  )  || anim == anCrawl ||  ! canMove ) hspeed -= friction ; 
 
  } 
  
  if ( hspeed < 0 )  { 
  if (  !  ( mspeed > 2 && getcon ( "left" , "hold" )  )  || anim == anCrawl ||  ! canMove ) hspeed += friction ; 
 
  } 
  
  } 
  
  } 
  
  else  if ( anim != anSlide && anim != anDive )  { 
  if ( hspeed > 0 &&  ! getcon ( "right" , "hold" )  ) hspeed -= friction / 3.0 ; 
 
  if ( hspeed < 0 &&  ! getcon ( "left" , "hold" )  ) hspeed += friction / 3.0 ; 
 
  } 
  
  
  if ( fabs ( hspeed )  < friction ) hspeed = 0.0 ; 
 
  if ( placeFree ( x , y + 2 )  &&  ( vspeed < 2 ||  ( vspeed < 5 &&  ( game . weapon != 3 || getcon ( "down" , "hold" )  )  &&  ! nowInWater )  )  && antigrav <= 0 ) vspeed += gravity ; 
 
  else  if ( antigrav > 0 ) antigrav --  ; 
 
  
  if (  ! freeUp && vspeed < 0 ) vspeed = 0.0 ; 
 
  if ( nowInWater &&  ! wasInWater )  { 
 wasInWater = true ; 
vspeed /= 2.0 ; 
newActor ( Splash , x , y )  ; 
 } 
  
  if (  ! nowInWater && wasInWater )  { 
 wasInWater = false ; 
newActor ( Splash , x , y )  ; 
 } 
  
  if ( anim == anSlide &&  ! placeFree ( x , y + 1 )  && vspeed >= 1 && placeFree ( x + hspeed , y )  &&  ! onPlatform (  )  )  { 
  if ( flip ) hspeed -= vspeed / 2.5 ; 
 
  else hspeed += vspeed / 2.5 ; 
 
 vspeed = 0 ; 
 } 
  
  if ( anim == anDive && vspeed >= 1 &&  ! placeFree ( x , y + 1 )  && game . weapon == 4 )  { 
 hspeed *= 1.5 ; 
vspeed = 0.0 ; 
 } 
  
  var speedLimit = 6.0 ;
  if (  ! placeFree ( x , y + 1 )  )  { 
  if ( game . weapon == 2 )  { 
  if ( anim == anSlide ) speedLimit = 8.0 ; 
 
  else speedLimit = 8.0 ; 
 
  } 
  
  else  if ( game . weapon == 4 && anim == anSlide ) speedLimit = 8.0 ; 
 
  else  { 
  if ( slippery ) speedLimit = 7.0 ; 
 
  } 
  
  
  if ( hspeed > speedLimit ) hspeed = max ( speedLimit , hspeed * 0.9 )  ; 
 
  if ( hspeed <  - speedLimit ) hspeed =  - max ( speedLimit , hspeed * 0.9 )  ; 
 
  } 
  
  if ( game . weapon == 3 || nowInWater ) gravity = 0.12 ; 
 
  else gravity = 0.25 ; 
 
  if ( anim == anClimb || anim == anWall ) gravity = 0 ; 
 
  if ( canMove )  switch ( game . weapon )  {  case 1 :  if ( getcon ( "shoot" , "press" )  && anim != anSlide && anim != anHurt && energy > 0 )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Fireball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 energy --  ; 
firetime = 60 ; 
 if ( anim == anCrawl ) c . y += 8 ; 
 
  } 
  
  break ;  case 2 :  if ( getcon ( "shoot" , "press" )  && anim != anSlide && anim != anHurt && energy > 0 )  { 
  var fx = 6 ;
  if ( flip == 1 ) fx =  - 5 ; 
 
  var c = fireWeapon ( Iceball , x + fx , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 5 ; 
 
  else c . hspeed =  - 5 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" )  )  { 
 c . vspeed =  - 2.5 ; 
c . hspeed /= 1.5 ; 
 } 
  
  if ( getcon ( "down" , "hold" )  )  { 
 c . vspeed = 2 ; 
c . hspeed /= 1.5 ; 
 } 
  
 energy --  ; 
firetime = 60 ; 
 if ( anim == anCrawl ) c . y += 8 ; 
 
  } 
  
  break ;  case 3 :  if ( getcon ( "shoot" , "press" )  &&  ( anim == anJumpT || anim == anJumpU || anim == anFall )  && anim != anHurt )  { 
 anim = anDive ; 
frame = 0.0 ; 
playSound ( sndSlide , 0 )  ; 
 if ( flip == 0 && hspeed < 2 ) hspeed = 2 ; 
 
  if ( flip == 1 && hspeed >  - 2 ) hspeed =  - 2 ; 
 
  } 
  
  break ;  case 4 :  if ( getcon ( "shoot" , "press" )  &&  ( anim != anHurt )  )  { 
 anim = anDive ; 
frame = 0.0 ; 
playSound ( sndSlide , 0 )  ; 
 if ( flip == 0 && hspeed < 2 ) hspeed = 2 ; 
 
  if ( flip == 1 && hspeed >  - 2 ) hspeed =  - 2 ; 
 
  } 
  
  break ;  }  
  if (  ! placeFree ( x , y + 1 )  &&  ! onPlatform (  )  )  { 
 groundx = x ; 
groundy = y ; 
 } 
  
  } 
  
  else  { 
 swimming = true ; 
 if ( game . weapon == 3 && energy < 4 ) energy += 0.1 ; 
 
 shapeStand . h = 6.0 ; 
 if (  ! wasInWater )  { 
 wasInWater = true ; 
vspeed /= 2.0 ; 
newActor ( Splash , x , y )  ; 
 } 
  
 anFall = anFallN ; 
 if ( anim == anFallW ) anim = anFallN ; 
 
  switch ( anim )  {  case anSwimF :  case anSwimU :  case anSwimD :  case anSwimUF :  case anSwimDF : frame += sqrt ( abs ( hspeed * hspeed )  + abs ( vspeed * vspeed )  )  / 12 ; 
 break ;  case anHurt : frame += 0.2 ; 
 if ( floor ( frame )  > anim . len (  )  - 1 )  { 
 anim = anFall ; 
frame = 0.0 ; 
 } 
  
  break ;  case anFall : frame += 0.01 ; 
 break ;  } frame = wrap ( abs ( frame )  , 0 , anim . len (  )  - 1 )  ; 
 if ( anim != anHurt )  { 
  if ( fabs ( hspeed )  < 0.3 && fabs ( vspeed )  < 0.2 ) anim = anFall ; 
 
  if ( fabs ( hspeed )  > 0.3 ) anim = anSwimF ; 
 
  if ( vspeed > 0.2 ) anim = anSwimD ; 
 
  if ( vspeed <  - 0.2 ) anim = anSwimU ; 
 
  if ( fabs ( hspeed )  > 0.3 && vspeed > 0.2 ) anim = anSwimDF ; 
 
  if ( fabs ( hspeed )  > 0.3 && vspeed <  - 0.2 ) anim = anSwimUF ; 
 
  } 
  
  if ( canMove )  { 
  if ( getcon ( "sneak" , "hold" )  ||  ( abs ( joyX ( 0 )  )  <= js_max * 0.4 && abs ( joyX ( 0 )  )  > js_max * 0.1 )  ||  ( abs ( joyY ( 0 )  )  <= js_max * 0.4 && abs ( joyY ( 0 )  )  > js_max * 0.1 )  && config . stickspeed ) mspeed = 0.5 ; 
 
  else  if ( getcon ( "run" , "hold" )  ||  ( abs ( joyX ( 0 )  )  >= js_max * 0.9 || abs ( joyY ( 0 )  )  >= js_max * 0.9 )  && config . stickspeed )  { 
  if ( game . weapon == 2 ) mspeed = 3.0 ; 
 
  else mspeed = 2.8 ; 
 
  if ( invincible ) mspeed += 0.4 ; 
 
  } 
  
  else mspeed = 1.0 ; 
 
  
  if ( zoomies > 0 ) mspeed *= 2.0 ; 
 
  if ( zoomies > 0 ) accel = 0.2 ; 
 
  else accel = 0.1 ; 
 
  if ( getcon ( "right" , "hold" )  && hspeed < mspeed && anim != anWall && anim != anSlide && anim != anHurt ) hspeed += accel ; 
 
  if ( getcon ( "left" , "hold" )  && hspeed >  - mspeed && anim != anWall && anim != anSlide && anim != anHurt ) hspeed -= accel ; 
 
  if ( getcon ( "down" , "hold" )  && vspeed < mspeed && anim != anWall && anim != anSlide && anim != anHurt ) vspeed += accel ; 
 
  if ( getcon ( "up" , "hold" )  && vspeed >  - mspeed && anim != anWall && anim != anSlide && anim != anHurt ) vspeed -= accel ; 
 
  } 
  
  if ( hspeed > 0 ) hspeed -= friction / 2 ; 
 
  if ( hspeed < 0 ) hspeed += friction / 2 ; 
 
  if ( fabs ( hspeed )  < friction / 2 ) hspeed = 0.0 ; 
 
  if ( vspeed > 0 ) vspeed -= friction / 2 ; 
 
  if ( vspeed < 0 ) vspeed += friction / 2 ; 
 
  if ( fabs ( vspeed )  < friction / 2 ) vspeed = 0.0 ; 
 
  if ( vspeed > 4 ) vspeed -= 0.2 ; 
 
  if ( anim != anClimb && anim != anWall )  { 
  if ( hspeed > 0.1 ) flip = 0 ; 
 
  if ( hspeed <  - 0.1 ) flip = 1 ; 
 
  } 
  
  if ( canMove )  switch ( game . weapon )  {  case 1 :  if ( getcon ( "shoot" , "press" )  && anim != anSlide && anim != anHurt && energy > 0 )  { 
  var c = fireWeapon ( Fireball , x , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 3 ; 
c . vspeed += vspeed / 3 ; 
energy --  ; 
firetime = 60 ; 
 } 
  
  break ;  case 2 :  if ( getcon ( "shoot" , "press" )  && anim != anSlide && anim != anHurt && energy > 0 )  { 
  var c = fireWeapon ( Iceball , x , y , 1 , id )  ;
  if (  ! flip ) c . hspeed = 3 ; 
 
  else c . hspeed =  - 3 ; 
 
 playSound ( sndFireball , 0 )  ; 
 if ( getcon ( "up" , "hold" )  )  { 
 c . vspeed =  - 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed =  - 3 ; 
 } 
  
  } 
  
  if ( getcon ( "down" , "hold" )  )  { 
 c . vspeed = 3 ; 
 if ( hspeed != 0 ) c . hspeed *= 0.75 ; 
 
  else  { 
 c . hspeed = 0 ; 
c . vspeed = 3 ; 
 } 
  
  } 
  
 c . hspeed += hspeed / 2 ; 
c . vspeed += vspeed / 2 ; 
energy --  ; 
firetime = 60 ; 
 } 
  
  break ;  }  
  } 
  
  if ( canMove && getcon ( "swap" , "press" )  ) swapitem (  )  ; 
 
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
 i < 8 ; i ++  )  if (  ! placeFree ( x , y + max ( 4 , abs ( hspeed )  )  )  && placeFree ( x + hspeed , y + 1 )  &&  ! swimming && vspeed >= 0 &&  ! placeFree ( x + hspeed , y + max ( 4 , abs ( hspeed )  )  )  )  { 
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
 if ( slippery &&  ! swimming &&  ! placeFree ( xprev , yprev + 2 )  ) vspeed -= 2.0 ; 
 
  break ;  } 
  
  } 
  if ( didstep == false && fabs ( hspeed )  >= 1 ) hspeed -=  ( hspeed / fabs ( hspeed )  )  ; 
 
  else  if ( didstep == false && fabs ( hspeed )  < 1 ) hspeed = 0 ; 
 
  
  } 
  
  } 
  
  if (  ! gvCanWrap )  { 
  if ( x < 4 ) x = 4 ; 
 
  if ( x > gvMap . w - 4 ) x = gvMap . w - 4 ; 
 
  } 
  
  else x = wrap ( x , 0 , gvMap . w )  ; 
 
  if ( anim == anSlide || anim == anCrawl ) shape = shapeSlide ; 
 
  else shape = shapeStand ; 
 
 shapeStand . setPos ( x , y )  ; 
shapeSlide . setPos ( x , y )  ; 
 if ( y > gvMap . h + 16 )  { 
 die (  )  ; 
 return ; 
  } 
  
  if ( y <  - 100 ) y =  - 100.0 ; 
 
  switch ( escapeMoPlat ( 1 , 1 )  )  {  case 1 :  if ( vspeed < 0 ) vspeed = 0 ; 
 
  break ;  case 2 :  if ( hspeed < 0 ) hspeed = 0 ; 
 
  break ;  case  - 1 :  if ( vspeed > 0 ) vspeed = 0 ; 
 
  break ;  case  - 2 :  if ( hspeed > 0 ) hspeed = 0 ; 
 
  break ;  }  if ( onIce (  )  ) friction = 0.01 ; 
 
  else friction = 0.1 ; 
 
  if ( onHazard ( x , y )  ) hurt = 1 + game . difficulty ; 
 
  if ( onDeath ( x , y )  ) game . health = 0 ; 
 
  if ( hurt > 0 && invincible == 0 )  { 
  if ( blinking == 0 )  { 
 blinking = 60 ; 
playSound ( sndHurt , 0 )  ; 
 if ( game . weapon == 4 && anim == anSlide && energy > 0 )  { 
 energy --  ; 
firetime = 120 ; 
newActor ( Spark , x , y )  ; 
 } 
  
  else  { 
  if ( game . health > 0 ) game . health -= hurt ; 
 
  if ( flip == 0 ) hspeed =  - 2.0 ; 
 
  else hspeed = 2.0 ; 
 
 anim = anHurt ; 
frame = 0.0 ; 
 } 
  
  } 
  
 hurt = 0 ; 
 } 
  
  else hurt = 0 ; 
 
  if ( blinking > 0 ) blinking --  ; 
 
  if ( game . health == 0 )  { 
 die (  )  ; 
 return ; 
  } 
  
  if (  ! hidden )  { 
  switch ( game . weapon )  {  case 0 : sprite = mySprNormal ; 
 if ( anim == anStand && anStand != anStandN ) anim = anStandN ; 
 
 anStand = anStandN ; 
damageMult = damageMultN ; 
 break ;  case 1 : sprite = mySprFire ; 
 if ( anim == anStand && anStand != anStandF ) anim = anStandF ; 
 
 anStand = anStandF ; 
damageMult = damageMultF ; 
 break ;  case 2 : sprite = mySprIce ; 
 if ( anim == anStand && anStand != anStandI ) anim = anStandI ; 
 
 anStand = anStandI ; 
damageMult = damageMultI ; 
 break ;  case 3 : sprite = mySprAir ; 
 if ( anim == anStand && anStand != anStandA ) anim = anStandA ; 
 
 anStand = anStandA ; 
damageMult = damageMultA ; 
 break ;  case 4 : sprite = mySprEarth ; 
 if ( anim == anStand && anStand != anStandE ) anim = anStandE ; 
 
 anStand = anStandE ; 
damageMult = damageMultE ; 
 break ;  }  if ( invincible > 0 ) invincible --  ; 
 
  if (  (  ( invincible % 2 == 0 && invincible > 240 )  ||  ( invincible % 4 == 0 && invincible > 120 )  || invincible % 8 == 0 )  && invincible > 0 ) newActor ( Glimmer , x + 10 - randInt ( 20 )  , y + 10 - randInt ( 20 )  )  ; 
 
  if ( anim != null )  { 
 frame = wrap ( frame , 0 , anim . len (  )  - 1 )  ; 
 if ( blinking == 0 || anim == anHurt ) drawSpriteExZ ( 0 , sprite , anim [ floor ( frame )  ]  , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 
  else drawSpriteExZ ( 0 , sprite , anim [ floor ( frame )  ]  , x - camx , y - camy , 0 , flip , 1 , 1 , wrap ( blinking , 0 , 10 )  . tofloat (  )  / 10.0 )  ; 
 
  } 
  
  if ( debug )  { 
 setDrawColor ( 0x008000ff )  ; 
shape . draw (  )  ; 
 } 
  
  if ( zoomies > 0 && getFrames (  )  % 2 == 0 ) newActor ( AfterImage , x , y ,  [ sprite , anim [ floor ( frame )  ]  , 0 , flip , 0 , 1 , 1 ]  )  ; 
 
  } 
  
  if ( tftime !=  - 1 )  { 
  if ( tftime < 4 )  { 
  if (  ! hidden ) drawSpriteZ ( 1 , sprTFflash , tftime , x - camx , y - camy )  ; 
 
 tftime += 0.25 ; 
 } 
  
  else tftime =  - 1 ; 
 
  } 
  
 drawLight ( sprLightBasic , 0 , x - camx , y - camy )  ; 
hidden = false ; 
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
  } ;  returnVal . die = function (  ) {  if ( resTime > 0 )  return ; 
  
  if ( game . canres )  { 
 game . health = game . maxHealth ; 
blinking = 120 ; 
hspeed = 0.0 ; 
vspeed = 0.0 ; 
 if ( y > gvMap . h )  { 
 invincible = 300 ; 
resTime = 300 ; 
vspeed =  - 4.0 ; 
 } 
  
 game . canres = false ; 
 } 
  
  else  { 
 deleteActor ( id )  ; 
gvPlayer = false ; 
newActor ( TuxDie , x , y , sprite )  ; 
game . health = 0 ; 
 } 
  
  } ;  returnVal . swapitem = function (  ) {  if ( game . subitem == 0 )  return ; 
  
  var swap = game . subitem ;
  if ( game . weapon == game . subitem )  { 
  if ( game . maxEnergy < 4 - game . difficulty )  { 
 game . maxEnergy ++  ; 
game . subitem = 0 ; 
tftime = 0 ; 
playSound ( sndHeal , 0 )  ; 
 } 
  
  return ; 
  } 
  
  if ( swap < 5 )  { 
 game . subitem = game . weapon ; 
game . weapon = 0 ; 
 } 
  
  switch ( swap )  {  case 1 : newActor ( FlowerFire , x + hspeed , y + vspeed )  ; 
 break ;  case 2 : newActor ( FlowerIce , x + hspeed , y + vspeed )  ; 
 break ;  case 3 : newActor ( AirFeather , x + hspeed , y + vspeed )  ; 
 break ;  case 4 : newActor ( EarthShell , x + hspeed , y + vspeed )  ; 
 break ;  case 5 :  if ( game . health < game . maxHealth )  { 
 newActor ( MuffinBlue , x + hspeed , y + vspeed )  ; 
game . subitem = 0 ; 
 } 
  
  break ;  case 6 :  if ( game . health < game . maxHealth )  { 
 newActor ( MuffinRed , x + hspeed , y + vspeed )  ; 
game . subitem = 0 ; 
 } 
  
  break ;  case 7 : newActor ( Starnyan , x + hspeed , y + vspeed )  ; 
 break ;  case 8 : popSound ( sndGulp , 0 )  ; 
zoomies = 60 * 30 ; 
game . subitem = 0 ; 
 break ;  }  } ;  returnVal . _typeof = function (  ) {  return "Tux" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . canJump = 16 ; 
 squirrelClassFunction . didJump = false ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . canMove = true ; 
 squirrelClassFunction . mspeed = 4 ; 
 squirrelClassFunction . climbdir = 1.0 ; 
 squirrelClassFunction . blinking = 0 ; 
 squirrelClassFunction . startx = 0.0 ; 
 squirrelClassFunction . starty = 0.0 ; 
 squirrelClassFunction . firetime = 0 ; 
 squirrelClassFunction . hurt = 0 ; 
 squirrelClassFunction . swimming = false ; 
 squirrelClassFunction . sliding = false ; 
 squirrelClassFunction . canStomp = true ; 
 squirrelClassFunction . sprite = sprTux ; 
 squirrelClassFunction . invincible = 0 ; 
 squirrelClassFunction . shapeStand = 0 ; 
 squirrelClassFunction . shapeSlide = 0 ; 
 squirrelClassFunction . tftime =  - 1 ; 
 squirrelClassFunction . energy = 0.0 ; 
 squirrelClassFunction . hidden = false ; 
 squirrelClassFunction . jumpBuffer = 0 ; 
 squirrelClassFunction . rspeed = 0.0 ; 
 squirrelClassFunction . slideframe = 0.0 ; 
 squirrelClassFunction . wasInWater = false ; 
 squirrelClassFunction . antigrav = 0 ; 
 squirrelClassFunction . groundx = 0.0 ; 
 squirrelClassFunction . groundy = 0.0 ; 
 squirrelClassFunction . slippery = false ; 
 squirrelClassFunction . accel = 0.2 ; 
 squirrelClassFunction . anStandN =  [ 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 0 , 1 , 2 , 3 , 76 , 77 , 78 , 79 , 78 , 79 , 78 , 79 , 78 , 79 , 78 , 77 , 76 ]  ; 
 squirrelClassFunction . anStandF =  [ 0 , 1 , 2 , 3 ]  ; 
 squirrelClassFunction . anStandI =  [ 0 , 1 , 2 , 3 ]  ; 
 squirrelClassFunction . anStandA =  [ 0 , 1 , 2 , 3 ]  ; 
 squirrelClassFunction . anStandE =  [ 0 , 1 , 2 , 3 ]  ; 
 squirrelClassFunction . anWalk =  [ 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 ]  ; 
 squirrelClassFunction . anRun =  [ 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 ]  ; 
 squirrelClassFunction . anDive =  [ 24 , 25 ]  ; 
 squirrelClassFunction . anSlide =  [ 26 , 27 , 28 , 29 ]  ; 
 squirrelClassFunction . anHurt =  [ 30 , 31 ]  ; 
 squirrelClassFunction . anJumpU =  [ 32 , 33 ]  ; 
 squirrelClassFunction . anJumpT =  [ 34 , 35 ]  ; 
 squirrelClassFunction . anFall = null ; 
 squirrelClassFunction . anFallN =  [ 36 , 37 ]  ; 
 squirrelClassFunction . anFallW =  [ 48 ]  ; 
 squirrelClassFunction . anSwimF =  [ 52 , 53 , 54 , 55 ]  ; 
 squirrelClassFunction . anSwimUF =  [ 56 , 57 , 58 , 59 ]  ; 
 squirrelClassFunction . anSwimDF =  [ 60 , 61 , 62 , 63 ]  ; 
 squirrelClassFunction . anSwimU =  [ 64 , 65 , 66 , 67 ]  ; 
 squirrelClassFunction . anSwimD =  [ 68 , 69 , 70 , 71 ]  ; 
 squirrelClassFunction . anSkid =  [ 4 , 5 ]  ; 
 squirrelClassFunction . anPush =  [ 6 , 7 ]  ; 
 squirrelClassFunction . anClimb =  [ 44 , 45 , 46 , 47 , 46 , 45 ]  ; 
 squirrelClassFunction . anWall =  [ 48 , 49 ]  ; 
 squirrelClassFunction . anCrawl =  [ 72 , 73 , 74 , 75 , 74 , 73 ]  ; 
 squirrelClassFunction . mySprNormal = null ; 
 squirrelClassFunction . mySprFire = null ; 
 squirrelClassFunction . mySprIce = null ; 
 squirrelClassFunction . mySprAir = null ; 
 squirrelClassFunction . mySprEarth = null ; 
 squirrelClassFunction . nowInWater = false ; 
 squirrelClassFunction . damageMultN =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultF =  { normal : 1.0 , fire : 0.5 , ice : 2.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultI =  { normal : 1.0 , fire : 2.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 squirrelClassFunction . damageMultA =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 2.0 , air : 0.5 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 0.5 }  ; 
 squirrelClassFunction . damageMultE =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 0.50 , air : 2.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 0.5 , blast : 1.0 }  ; 
 return squirrelClassFunction; })()) ; 
TuxDie =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . vspeed =  - 4.0 ; 
 returnVal . timer = 150 ; 
 returnVal . sprite = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
stopMusic (  )  ; 
playSound ( sndDie , 0 )  ; 
sprite = _arr ; 
 } ;  returnVal . run = function (  ) { vspeed += 0.1 ; 
y += vspeed ; 
timer --  ; 
 if ( timer == 0 )  { 
 startPlay ( gvMap . file , true , true )  ; 
 if ( game . check == false )  { 
 gvIGT = 0 ; 
game . weapon = 0 ; 
 } 
  
  } 
  
 drawSprite ( sprite , wrap ( getFrames (  )  / 15 , 50 , 51 )  , floor ( x - camx )  , floor ( y - camy )  )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "DeadPlayer" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . vspeed =  - 4.0 ; 
 squirrelClassFunction . timer = 150 ; 
 squirrelClassFunction . sprite = null ; 
 return squirrelClassFunction; })()) ; 
Penny =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Tux ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
mySprNormal = sprPenny ; 
mySprFire = sprPennyFire ; 
mySprIce = sprPennyIce ; 
mySprAir = sprPennyAir ; 
mySprEarth = sprPennyEarth ; 
 } ;  returnVal . _typeof = function (  ) {  return "Penny" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  return squirrelClassFunction; })()) ; 



}; 
