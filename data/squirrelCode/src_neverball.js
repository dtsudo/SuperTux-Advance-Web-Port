if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/neverball.nut'] = function () { 


Neverball =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Player ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . anim = "ball" ; 
 returnVal . canJump = true ; 
 returnVal . inMelee = false ; 
 returnVal . damageMultN =  { normal : 0.0 , fire : 0.0 , ice : 0.0 , earth : 0.0 , air : 0.0 , toxic : 0.0 , shock : 0.0 , water : 0.0 , light : 0.0 , dark : 0.0 , cut : 0.0 , blast : 0.0 }  ; 
 returnVal . shotAngle = 0 ; 
 returnVal . shotPower = 1.0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . rspeed = 0.0 ; 
 returnVal . stillTime = 0.0 ; 
 returnVal . sprite = null ; 
 returnVal . antigrav = 0.0 ; 
 returnVal . sideRunning = false ; 
 returnVal . mspeed = 4 ; 
 returnVal . flip = 0 ; 
 returnVal . an =  { ball :  [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ]  , run :  [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ]  }  ; 
 returnVal . mustSink = true ; 
 returnVal . freeDown = false ; 
 returnVal . freeDown2 = false ; 
 returnVal . freeLeft = false ; 
 returnVal . freeRight = false ; 
 returnVal . freeUp = false ; 
 returnVal . nowInWater = false ; 
 returnVal . wasInWater = false ; 
 returnVal . canJump = 0 ; 
 returnVal . jumpBuffer = 0 ; 
 returnVal . didJump = false ; 
 returnVal . strokes = 0 ; 
 returnVal . resx = 0.0 ; 
 returnVal . resy = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 6 , 6 , 0 , 0 , 0 )  ; 
xprev = x ; 
yprev = y ; 
damageMult = damageMultN ; 
sprite = sprNeverball ; 
 } ;  returnVal . physics = function (  ) { freeDown = placeFree ( x , y + 1 )  ; 
freeDown2 = placeFree ( x , y + 2 )  ; 
freeLeft = placeFree ( x - 1 , y )  ; 
freeRight = placeFree ( x + 1 , y )  ; 
freeUp = placeFree ( x , y - 1 )  ; 
wasInWater = nowInWater ; 
nowInWater = inWater ( x , y )  ; 
friction = 0.025 ; 
 if ( onIce (  )  ) friction /= 2.0 ; 
 
  if ( nowInWater ) friction != 1.5 ; 
 
  if ( fabs ( hspeed )  < friction ) hspeed = 0.0 ; 
 
  if (  ( placeFree ( x , y + 2 )  || vspeed < 0 )  &&  ( vspeed < 2 ||  ( vspeed < 16 &&  ! nowInWater )  )  && antigrav <= 0 &&  ! sideRunning ) vspeed +=  ( vspeed > 5 && anim != "stomp" ? gravity / vspeed : gravity )  ; 
 
  else  if ( antigrav > 0 ) antigrav --  ; 
 
  
  if (  ! placeFree ( x , y - 1 )  && vspeed < 0 ) vspeed = 0.0 ; 
 
  if (  (  ! placeFree ( x , y + 8 )  ||  ! placeFree ( x - hspeed * 2 , y + 8 )  )  &&  ( fabs ( hspeed )  < 16 )  )  { 
  if ( placeFree ( x + max ( 4 , hspeed )  , y + 1 )  &&  ! onPlatform ( hspeed )  )  { 
 hspeed += 0.2 ; 
 } 
  
  if ( placeFree ( x + min (  - 4 , hspeed )  , y + 1 )  &&  ! onPlatform ( hspeed )  )  { 
 hspeed -= 0.2 ; 
 } 
  
  } 
  
  if ( nowInWater || anim == "fly" ) gravity = 0.12 ; 
 
  else gravity = 0.25 ; 
 
  if ( resTime > 0 )  { 
  if ( vspeed > 0 ) gravity =  - 0.05 ; 
 
  if ( vspeed < 0 ) gravity = 0.05 ; 
 
  if ( fabs ( vspeed )  < 0.1 )  { 
 vspeed = 0.0 ; 
gravity = 0.0 ; 
 } 
  
  } 
  
 shape . setPos ( x , y )  ; 
xprev = x ; 
yprev = y ; 
 if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else  if ( sideRunning )  { 
  if (  ! placeFree ( x - 4 , y )  )  for (  var i = 0 ;
 i < abs ( vspeed )  ; i ++  )  { 
  if ( placeFree ( x + i , y + vspeed )  )  { 
 y += vspeed ; 
x += i ; 
 break ;  } 
  
  } 
  
  if (  ! placeFree ( x + 4 , y )  )  for (  var i = 0 ;
 i < abs ( vspeed )  ; i ++  )  { 
  if ( placeFree ( x + i , y + vspeed )  )  { 
 y += vspeed ; 
x += i ; 
 break ;  } 
  
  } 
  
  } 
  
  else  { 
  if ( fabs ( vspeed )  >= 2 ) popSound ( sndNBBounce )  ; 
 
 vspeed /=  ( jumpBuffer > 0 ?  - 1 :  ( fabs ( vspeed )  >= 4 ?  - 2 : 2 )  )  ; 
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
 i <= 4 ; i ++  )  { 
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
  if ( fabs ( hspeed )  >= 4 &&  ( anim == "ball" ||  ! placeFree ( x + hspeed , y )  )  && y < yprev ) vspeed -= 1.0 ; 
 
  if ( didstep == false && fabs ( hspeed )  >= 1 ) hspeed -=  ( hspeed / fabs ( hspeed )  )  / 2.0 ; 
 
  else  if ( didstep == false && fabs ( hspeed )  < 1 ) hspeed = 0 ; 
 
  
  } 
  
  } 
  
 shape . setPos ( x , y )  ; 
 if ( y <  - 100 ) y =  - 100.0 ; 
 
  switch ( escapeMoPlat ( 1 , 1 )  )  {  case 1 :  if ( vspeed < 0 ) vspeed = 0 ; 
 
  break ;  case 2 :  if ( hspeed < 0 ) hspeed = 0 ; 
 
  break ;  case  - 1 :  if ( vspeed > 0 ) vspeed = 0 ; 
 
  break ;  case  - 2 :  if ( hspeed > 0 ) hspeed = 0 ; 
 
  break ;  }  if (  (  ! placeFree ( x , y + 1 )  || onPlatform (  )  )  )  { 
  if ( hspeed > 0 ) hspeed -= friction ; 
 
  if ( hspeed < 0 ) hspeed += friction ; 
 
  } 
  
  if ( fabs ( vspeed )  < 0.1 ) vspeed = 0 ; 
 
  if ( fabs ( hspeed )  < 0.1 ) hspeed = 0 ; 
 
  if ( hspeed == 0 && vspeed == 0 ) stillTime --  ; 
 
  else stillTime = 60 ; 
 
  } ;  returnVal . animation = function (  ) {  if (  ! placeFree ( x , y + 4 )  ) rspeed = hspeed / 8.0 ; 
 
 frame += rspeed ; 
 } ;  returnVal . routine = function (  ) { sideRunning = false ; 
 if ( hspeed < mspeed )  { 
  if ( vspeed <=  - 4 &&  ! placeFree ( x + 2 , y )  &&  ! placeFree ( x + 4 , y - 8 )  )  { 
  if ( vspeed >  - mspeed ) vspeed -= accel ; 
 
 vspeed += friction * 2.8 ; 
sideRunning = true ; 
 if ( x == xprev ) hspeed = 0 ; 
 
  } 
  
  } 
  
  if ( hspeed >  - mspeed )  { 
  if ( vspeed <=  - 4 &&  ! placeFree ( x - 2 , y )  &&  ! placeFree ( x - 4 , y - 8 )  )  { 
  if ( vspeed >  - mspeed ) vspeed -= accel ; 
 
 vspeed += friction * 2.8 ; 
sideRunning = true ; 
 if ( x == xprev ) hspeed = 0 ; 
 
  } 
  
  } 
  
  if ( sideRunning )  { 
 hspeed /= 2.0 ; 
vspeed += gravity ; 
 } 
  
  if ( stillTime <= 0 )  { 
 resx = x ; 
resy = y ; 
 if ( getcon ( "left" , "hold" , true , playerNum )  && shotAngle >  - 180 ) shotAngle -= 2 ; 
 
  if ( getcon ( "right" , "hold" , true , playerNum )  && shotAngle < 0 ) shotAngle += 2 ; 
 
  if ( getcon ( "up" , "hold" , true , playerNum )  && shotPower < 14 ) shotPower += 0.1 ; 
 
  if ( getcon ( "down" , "hold" , true , playerNum )  && shotPower > 1 ) shotPower -= 0.1 ; 
 
  if ( getcon ( "jump" , "press" , true , playerNum )  )  { 
 hspeed = lendirX ( shotPower , shotAngle )  ; 
vspeed = lendirY ( shotPower , shotAngle )  ; 
rspeed = hspeed / 8.0 ; 
strokes ++  ; 
stillTime = 60 ; 
popSound ( sndNBShoot )  ; 
 } 
  
  } 
  
  else  { 
 shotPower = 6.0 ; 
 if ( placeFree ( x , y + 4 )  )  { 
  if ( getcon ( "left" , "hold" , true , playerNum )  && placeFree ( x - 1 , y )  ) x -= 0.2 ; 
 
  if ( getcon ( "right" , "hold" , true , playerNum )  && placeFree ( x + 1 , y )  ) x += 0.2 ; 
 
  } 
  
  if ( jumpBuffer > 0 ) jumpBuffer --  ; 
 
  if ( getcon ( "jump" , "press" , true , playerNum )  )  { 
 jumpBuffer = 16 ; 
fireWeapon ( InstaShield , x , y , 1 , id )  ; 
 } 
  
  if ( jumpBuffer > 0 )  { 
  if (  ( onPlatform ( 0 , 2 )  || onPlatform ( 8 , 2 )  || onPlatform (  - 8 , 2 )  ||  ! placeFree ( x , y + 2 )  )  && getcon ( "down" , "hold" , true , playerNum )  )  { 
 y ++  ; 
 if (  ! placeFree ( x , y )  &&  ! placeFree ( x , y - 1 )  ) y --  ; 
 
 jumpBuffer = 0 ; 
 } 
  
  else  if ( freeDown2 &&  ! placeFree ( x - 4 , y )  && tileGetSolid ( x - 12 , y - 12 )  != 40 && tileGetSolid ( x - 12 , y + 12 )  != 40 && tileGetSolid ( x - 12 , y )  != 40 )  { 
 vspeed =  - 6 ; 
hspeed = 4 ; 
popSound ( sndWallkick , 0 )  ; 
jumpBuffer = 0 ; 
 } 
  
  else  if ( freeDown2 &&  ! placeFree ( x + 4 , y )  && tileGetSolid ( x + 12 , y - 12 )  != 40 && tileGetSolid ( x + 12 , y + 12 )  != 40 && tileGetSolid ( x + 12 , y )  != 40 )  { 
 vspeed =  - 6 ; 
hspeed =  - 4 ; 
popSound ( sndWallkick , 0 )  ; 
jumpBuffer = 0 ; 
 } 
  
  
  
  } 
  
  if ( getcon ( "spec2" , "hold" , true , playerNum )  &&  ! freeDown2 )  { 
 hspeed -=  (  squirrelThreeWaysCompare ( hspeed , 0 )  )  * 0.1 ; 
 if ( getFrames (  )  % 4 == 0 && hspeed != 0 ) newActor ( PoofTiny , x -  (  (  squirrelThreeWaysCompare ( hspeed , 0 )  )  * 4 )  , y + 4 )  ; 
 
  } 
  
  if ( hspeed == 0 && vspeed == 0 &&  ! placeFree ( x , y )  )  for (  var i =  - 90 ;
 i >  - 450 ; i --  )  { 
  for (  var j = 0 ;
 j < 64 ; j ++  )  { 
  if ( placeFree ( x + lendirX ( j , i )  , y + lendirY ( j , i )  )  )  { 
 x += lendirX ( j , i )  ; 
y += lendirY ( j , i )  ; 
 break ;  } 
  
  } 
  } 
  
  } 
  
  if ( invincible > 0 ) invincible --  ; 
 
  if (  (  ( invincible % 2 == 0 && invincible > 240 )  ||  ( invincible % 4 == 0 && invincible > 120 )  || invincible % 8 == 0 )  && invincible > 0 ) newActor ( Glimmer , x + 10 - randInt ( 20 )  , y + 10 - randInt ( 20 )  )  ; 
 
 inMelee = distance2 ( 0 , 0 , hspeed , vspeed )  >= 4 ; 
 } ;  returnVal . die = function ( skipres = false ) {  if ( resTime > 0 )  return ; 
  
 stats . health = game . maxHealth ; 
blinking = 120 ; 
hspeed = 0.0 ; 
vspeed = 0.0 ; 
 if ( y > gvMap . h )  { 
 invincible = 60 ; 
resTime = 60 ; 
 } 
  
 x = resx ; 
y = resy ; 
stats . canres = false ; 
 } ;  returnVal . draw = function (  ) { drawSpriteZ ( 2 , sprite , frame , x - camx , y - camy )  ; 
 if ( stillTime <= 0 &&  ! endMode )  { 
  var strokeWidth =  ( strokes + 1 )  . tostring (  )  . len (  )  * 6 ;
 drawTextHUD ( font2 , x - strokeWidth - camx , y - 32 - camy ,  ( strokes + 1 )  . tostring (  )  )  ; 
drawSpriteHUD ( sprNeverballArrow , 0 , x - camx + lendirX ( shotPower * 2.0 , shotAngle )  , y - camy + lendirY ( shotPower * 2.0 , shotAngle )  , shotAngle , 0 )  ; 
 } 
  
  else  if ( endMode )  { 
  var strokeWidth = strokes . tostring (  )  . len (  )  * 6 ;
 drawTextHUD ( font2 , x - camx - strokeWidth , y - 32 - camy , strokes . tostring (  )  )  ; 
 } 
  
  
 drawLight ( sprLightBasic , 0 , x - camx , y - camy )  ; 
 if ( debug )  { 
 drawText ( font2 , x - camx , y - 32 - camy , jumpBuffer . tostring (  )  )  ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "Neverball" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . anim = "ball" ; 
 squirrelClassFunction . canJump = true ; 
 squirrelClassFunction . inMelee = false ; 
 squirrelClassFunction . damageMultN =  { normal : 0.0 , fire : 0.0 , ice : 0.0 , earth : 0.0 , air : 0.0 , toxic : 0.0 , shock : 0.0 , water : 0.0 , light : 0.0 , dark : 0.0 , cut : 0.0 , blast : 0.0 }  ; 
 squirrelClassFunction . shotAngle = 0 ; 
 squirrelClassFunction . shotPower = 1.0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . rspeed = 0.0 ; 
 squirrelClassFunction . stillTime = 0.0 ; 
 squirrelClassFunction . sprite = null ; 
 squirrelClassFunction . antigrav = 0.0 ; 
 squirrelClassFunction . sideRunning = false ; 
 squirrelClassFunction . mspeed = 4 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . an =  { ball :  [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ]  , run :  [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ]  }  ; 
 squirrelClassFunction . mustSink = true ; 
 squirrelClassFunction . freeDown = false ; 
 squirrelClassFunction . freeDown2 = false ; 
 squirrelClassFunction . freeLeft = false ; 
 squirrelClassFunction . freeRight = false ; 
 squirrelClassFunction . freeUp = false ; 
 squirrelClassFunction . nowInWater = false ; 
 squirrelClassFunction . wasInWater = false ; 
 squirrelClassFunction . canJump = 0 ; 
 squirrelClassFunction . jumpBuffer = 0 ; 
 squirrelClassFunction . didJump = false ; 
 squirrelClassFunction . strokes = 0 ; 
 squirrelClassFunction . resx = 0.0 ; 
 squirrelClassFunction . resy = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Player;  return squirrelClassFunction; })()) ; 



}; 
