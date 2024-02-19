if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/midi.nut'] = function () { 


Midi =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Player ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 returnVal . xstart = 0.0 ; 
 returnVal . ystart = 0.0 ; 
 returnVal . firetime = 0 ; 
 returnVal . hurt = 0 ; 
 returnVal . swimming = false ; 
 returnVal . inMelee = false ; 
 returnVal . canStomp = true ; 
 returnVal . stompDamage = 0 ; 
 returnVal . invincible = 0 ; 
 returnVal . shapeStand = 0 ; 
 returnVal . shapeCrawl = 0 ; 
 returnVal . tftime =  - 1 ; 
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
 returnVal . shootTimer = 0.0 ; 
 returnVal . shooting = 0 ; 
 returnVal . shootDir = 0 ; 
 returnVal . boredom = 0 ; 
 returnVal . chargeTimer = 0 ; 
 returnVal . chargeTimer2 = 0 ; 
 returnVal . fallTimer = 0 ; 
 returnVal . hurtThreshold = 4 ; 
 returnVal . spinAlpha = 0.0 ; 
 returnVal . hand = 0 ; 
 returnVal . advancedClimbing = true ; 
 returnVal . partnerHang = false ; 
 returnVal . rollMeleeSpeed = 5.5 ; 
 returnVal . freeDown = false ; 
 returnVal . freeDown2 = false ; 
 returnVal . freeLeft = false ; 
 returnVal . freeRight = false ; 
 returnVal . freeUp = false ; 
 returnVal . nowInWater = false ; 
 returnVal . an =  { stand : null , standB :  [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 238 , 238 , 238 , 238 , 238 , 238 , 238 , 238 , 0 , 0 , 0 , 0 , 180 , 181 , 180 , 181 , 180 , 181 , 180 , 181 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 6 , 87 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 87 , 6 ]  , standN :  [ 1 , 2 , 3 , 4 ]  , standW :  [ 204 , 204 , 204 , 205 , 206 , 206 , 206 , 207 ]  , standHold :  [ 5 ]  , crouch :  [ 6 ]  , crouchHold :  [ 7 ]  , jump : null , jumpU :  [ 8 , 9 ]  , jumpT :  [ 10 , 11 ]  , fall : null , fallN :  [ 12 , 13 ]  , fallW :  [ 162 ]  , hurt : null , hurtLight :  [ 14 , 15 ]  , hurtHeavy :  [ 166 , 167 ]  , walk :  [ 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 ]  , run :  [ 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 ]  , shootAir :  [ 64 , 65 , 66 , 67 ]  , shootTop :  [ 68 , 69 , 70 , 71 ]  , climb :  [ 72 , 73 , 74 , 75 , 74 , 73 ]  , climb2 :  [ 76 , 77 ]  , attackAir :  [ 78 , 79 , 80 , 81 ]  , plantMine :  [ 82 , 83 , 84 , 85 , 86 , 87 ]  , attack : null , shootF1 :  [ 88 , 89 , 90 , 91 ]  , shootF2 :  [ 92 , 93 , 94 , 95 ]  , shootU1 :  [ 96 , 97 , 98 , 99 ]  , shootU2 :  [ 100 , 101 , 102 , 103 ]  , shootUF1 :  [ 104 , 105 , 106 , 107 ]  , shootUF2 :  [ 108 , 109 , 110 , 111 ]  , shootDF1 :  [ 112 , 113 , 114 , 115 ]  , shootDF2 :  [ 116 , 117 , 118 , 119 ]  , shootAU1 :  [ 120 , 121 , 122 , 123 ]  , shootAU2 :  [ 124 , 125 , 126 , 127 ]  , shootAD1 :  [ 128 , 129 , 130 , 131 ]  , shootAD2 :  [ 132 , 133 , 134 , 135 ]  , attackD :  [ 136 , 137 , 138 , 139 ]  , attackU :  [ 140 , 141 , 142 , 143 ]  , attackSpin :  [ 144 , 145 , 146 , 147 ]  , shootMad :  [ 148 , 149 , 150 , 151 ]  , jumpR :  [ 152 , 153 , 154 , 155 , 156 , 157 , 158 , 159 ]  , ride :  [ 160 , 161 ]  , wall :  [ 162 , 163 ]  , skid :  [ 164 , 165 ]  , float :  [ 168 , 169 ]  , swim :  [ 170 , 171 , 172 , 173 ]  , sit : null , sitChair :  [ 174 ]  , sitGround :  [ 175 ]  , lift :  [ 176 , 177 ]  , door :  [ 178 , 179 ]  , scratch :  [ 180 , 181 ]  , morphIn :  [ 182 , 183 ]  , morphOut :  [ 183 , 182 ]  , ball :  [ 184 , 185 , 186 , 187 ]  , ballV :  [ 188 , 189 , 190 , 191 ]  , ballD :  [ 192 , 193 , 194 , 195 ]  , ballH :  [ 196 , 197 , 198 , 199 ]  , ballT :  [ 200 , 201 , 202 , 203 ]  , climbWall :  [ 208 , 209 , 210 , 211 , 210 , 209 ]  , ledge :  [ 212 ]  , hang :  [ 213 ]  , shootHang :  [ 214 , 215 , 216 , 217 ]  , monkey :  [ 218 , 219 , 220 , 221 , 222 , 223 ]  , shootClimb :  [ 224 , 225 , 226 , 227 ]  , armShoot :  [ 228 , 229 , 230 , 231 ]  , landing :  [ 232 , 233 , 234 , 235 ]  , wave :  [ 236 , 237 ]  , pick :  [ 238 , 239 ]  , moonwalk :  [ 240 , 241 , 242 , 243 , 244 , 245 , 246 , 247 ]  , win :  [ 239 ]  , crawl :  [ 249 , 250 , 251 , 252 , 251 , 250 ]  }  ; 
 returnVal . animOffset = 0.0 ; 
 returnVal . sprite = sprMidi ; 
 returnVal . aura = sprMidiAura ; 
 returnVal . auraColor = 0xffffffff ; 
 returnVal . nutSprite = sprNutBomb ; 
 returnVal . nutSprite2 = sprNutBomb2 ; 
 returnVal . nutSprite3 = sprNutBomb3 ; 
 returnVal . wingNutSprite = sprWingNut ; 
 returnVal . mineSprite = sprNutMine ; 
 returnVal . topSprite = sprTopNut ; 
 returnVal . shapeGrip = null ; 
 returnVal . damageMultN =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 returnVal . damageMultF =  { normal : 1.0 , fire : 0.5 , ice : 2.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 returnVal . damageMultI =  { normal : 1.0 , fire : 2.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 returnVal . damageMultE =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 0.5 , air : 2.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 returnVal . damageMultA =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 2.0 , air : 0.5 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 returnVal . damageMultS =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 0.5 , water : 2.0 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 returnVal . damageMultW =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 2.0 , water : 0.5 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 returnVal . damageMultL =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 0.5 , dark : 2.0 , cut : 1.5 , blast : 0.5 }  ; 
 returnVal . damageMultD =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 2.0 , dark : 0.5 , cut : 1.5 , blast : 0.5 }  ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
an . stand = an . standN ; 
anim = "stand" ; 
shapeStand = Rec ( x , y , 5 , 12 , 0 , 0 , 0 )  ; 
shapeCrawl = Rec ( x , y , 5 , 6 , 0 , 0 , 6 )  ; 
shapeGrip = Rec ( x , y , 1 , 1 )  ; 
shape = shapeStand ; 
xstart = _x . tofloat (  )  ; 
ystart = _y . tofloat (  )  ; 
an . fall = an . fallN ; 
xprev = x ; 
yprev = y ; 
routine = ruNormal ; 
damageMult = damageMultN ; 
an =  window.clone( an)  ; 
 } ;  returnVal . physics = function (  ) {  if ( vspeed > 0 ) didJump = false ; 
 
  if ( nowInWater ) gravity = 0.12 ; 
 
  else gravity = 0.25 ; 
 
  switch ( anim )  {  case "walk" :  if ( canMove && getcon ( "left" , "hold" , true , playerNum )  && getcon ( "right" , "hold" , true , playerNum )  )  { 
  if ( fabs ( hspeed )  >= 1.5 && fabs ( hspeed )  < 2.0 &&  (  ! endMode || placeFree ( x + hspeed , y )  )  ) hspeed *= 0.9 ; 
 
  if ( fabs ( hspeed )  <= 1.4 ) hspeed *= 1.1 ; 
 
  } 
  
  break ;  case "float" :  case "swim" : gravity = 0.0 ; 
 break ;  case "wall" :  case "climb" :  case "climbWall" :  case "shootClimb" : gravity = 0.0 ; 
vspeed = 0.0 ; 
 break ;  case "ledge" : gravity = 0.0 ; 
 if (  ! getcon ( "down" , "hold" , true , playerNum )  ) vspeed = 0.0 ; 
 
 y =  ( floor ( y / 16.0 )  * 16.0 )  + 14.0 ; 
 if ( freeRight && freeLeft ) anim = "jumpT" ; 
 
  break ;  case "hurt" :  if ( nowInWater ) vspeed /= 9.0 ; 
 
  break ;  case "monkey" : gravity = 0.0 ; 
vspeed = 0.0 ; 
 if ( shooting ) hspeed = 0.0 ; 
 
  if ( hspeed > 1.5 ) hspeed = 1.5 ; 
 
  if ( hspeed <  - 1.5 ) hspeed =  - 1.5 ; 
 
  var lineType = 0 ;
  if ( atZipline (  )  ) lineType = tileGetSolid ( x , y - shape . h )  ; 
 
  else  if ( atZipline ( 0 ,  - 1 )  ) lineType = tileGetSolid ( x , y - shape . h - 1 )  ; 
 
  else  if ( atZipline ( 0 , 1 )  ) lineType = tileGetSolid ( x , y - shape . h + 1 )  ; 
 
  
  
 y =  ( y - y % 16 )  + 4 ; 
 switch ( lineType )  {  default : y =  ( y - y % 16 )  + 4 ; 
 break ;  }  break ;  }  if ( fabs ( hspeed )  < friction ) hspeed = 0.0 ; 
 
  if (  ( placeFree ( x , y + 2 )  || vspeed < 0 )  &&  ( vspeed < 2 ||  ( vspeed < 16 &&  ! nowInWater )  )  && antigrav <= 0 ) vspeed +=  ( vspeed > 5 ? gravity / vspeed : gravity )  ; 
 
  else  if ( antigrav > 0 ) antigrav --  ; 
 
  
  if (  ! placeFree ( x , y - 1 )  && vspeed < 0 ) vspeed = 0.0 ; 
 
 slippery =  ( anim == "morphIn" || anim == "ball" || onIce (  )  )  ; 
 if ( slippery )  { 
  if (  ! placeFree ( x , y + 8 )  &&  ( fabs ( hspeed )  <  ( nowInWater ? 2 : 6 )  )  )  { 
  if ( placeFree ( x + 4 , y + 1 )  &&  ! onPlatform ( hspeed )  )  { 
 hspeed += 0.2 ; 
 } 
  
  if ( placeFree ( x - 4 , y + 1 )  &&  ! onPlatform ( hspeed )  )  { 
 hspeed -= 0.2 ; 
 } 
  
  } 
  
  } 
  
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
  
 shape = shapeStand ; 
 if ( anim == "morphIn" || anim == "ball" || anim == "crawl" ||  ( anim == "stand" && an . stand == an . crouch )  ||  ! placeFree ( x , y )  ) shape = shapeCrawl ; 
 
 shapeStand . setPos ( x , y )  ; 
shapeCrawl . setPos ( x , y )  ; 
 if ( y <  - 100 ) y =  - 100.0 ; 
 
  switch ( escapeMoPlat ( 1 , 1 )  )  {  case 1 :  if ( vspeed < 0 ) vspeed = 0 ; 
 
  break ;  case 2 :  if ( hspeed < 0 ) hspeed = 0 ; 
 
  break ;  case  - 1 :  if ( vspeed > 0 ) vspeed = 0 ; 
 
  break ;  case  - 2 :  if ( hspeed > 0 ) hspeed = 0 ; 
 
  break ;  }  if ( onIce (  )  ) friction = 0.01 ; 
 
  else friction = 0.1 ; 
 
  if ( nowInWater && fabs ( hspeed )  > 2 ) hspeed *= 0.98 ; 
 
  if (  (  ! placeFree ( x , y + 1 )  || onPlatform (  )  )  )  { 
  if ( anim == "ball" )  { 
  if ( hspeed > 0 &&  ! getcon ( "right" , "hold" , true , playerNum )  ) hspeed -= friction / 3.0 ; 
 
  if ( hspeed < 0 &&  ! getcon ( "left" , "hold" , true , playerNum )  ) hspeed += friction / 3.0 ; 
 
  } 
  
  else  { 
  if ( hspeed > 0 )  { 
  if (  (  !  ( mspeed > 2 && getcon ( "right" , "hold" , true , playerNum )  )  || anim == "hurt" ||  ! canMove )  &&  ! nowInWater ) hspeed -= friction ; 
 
  else  if ( nowInWater || resTime > 0 ) hspeed -= friction / 3.0 ; 
 
  
  } 
  
  if ( hspeed < 0 )  { 
  if (  (  !  ( mspeed > 2 && getcon ( "left" , "hold" , true , playerNum )  )  || anim == "hurt" ||  ! canMove )  &&  ! nowInWater ) hspeed += friction ; 
 
  else  if ( nowInWater || resTime > 0 ) hspeed += friction / 3.0 ; 
 
  
  } 
  
  } 
  
  } 
  
  else  { 
  if ( hspeed > 0 &&  ! getcon ( "right" , "hold" , true , playerNum )  ) hspeed -= friction / 3.0 ; 
 
  if ( hspeed < 0 &&  ! getcon ( "left" , "hold" , true , playerNum )  ) hspeed += friction / 3.0 ; 
 
  } 
  
  if ( nowInWater || resTime > 0 )  { 
  if ( vspeed > 0 &&  ! getcon ( "down" , "hold" , true , playerNum )  ) vspeed -= friction / 4.0 ; 
 
  if ( vspeed < 0 &&  ! getcon ( "up" , "hold" , true , playerNum )  ) vspeed += friction / 4.0 ; 
 
  } 
  
  } ;  returnVal . animation = function (  ) { animOffset = 0.0 ; 
 switch ( anim )  {  case "stand" : frame += 0.1 ; 
 if ( zoomies ) frame += 0.1 ; 
 
  if ( getcon ( "down" , "hold" , true , playerNum )  &&  ! shooting ) an . stand = an . crouch ; 
 
  else  if ( stats . health <= min ( 8 , game . maxHealth / 4 )  )  { 
 an . stand = an . standW ; 
boredom = 0 ; 
 } 
  
  else  if ( boredom >=  ( 60 * 8 )  ) an . stand = an . standB ; 
 
  else an . stand = an . standN ; 
 
  
  
 boredom ++  ; 
 if (  ( abs ( rspeed )  > 0.1 || abs ( hspeed )  > 1 )  &&  ! slippery )  { 
  if ( flip == 0 && hspeed < 0 &&  ! endMode &&  ! getcon ( "right" , "hold" , true , playerNum )  )  { 
 anim = "skid" ; 
rspeed = fabs ( hspeed / 1.5 )  ; 
 } 
  
  else  if ( flip == 1 && hspeed > 0 &&  ! endMode &&  ! getcon ( "left" , "hold" , true , playerNum )  )  { 
 anim = "skid" ; 
rspeed = fabs ( hspeed / 1.5 )  ; 
 } 
  
  else  if ( an . stand == an . crouch ) anim = "crawl" ; 
 
  else anim = "walk" ; 
 
  
  
  } 
  
  else  if ( abs ( rspeed )  > 0.1 )  { 
 anim = "walk" ; 
frame = 0.0 ; 
 } 
  
  
  if ( freeDown2 &&  ! onPlatform (  )  && placeFree ( x - hspeed , y + 2 )  && fabs ( vspeed )  > 1 )  { 
 anim = "jumpT" ; 
frame = 0.0 ; 
 break ;  } 
  
  if ( fallTimer >  ( 30 )  )  { 
 an . stand = an . standN ; 
frame += 0.08 ; 
 if ( vspeed > 0 ) frame = 0.0 ; 
 
 animOffset = an . landing [ 0 ]  - 1 ; 
 if ( frame > 3.5 ) fallTimer = 0 ; 
 
  } 
  
  if ( shooting )  { 
 an . stand = an . standN ; 
frame = 0.0 ; 
 switch ( shootDir )  {  case 0 : animOffset = an . shootF1 [ 0 ]  +  ( 4 *  ( shooting - 1 )  )  + min ( 3 , shootTimer )  ; 
 break ;  case 1 : animOffset = an . shootU1 [ 0 ]  +  ( 4 *  ( shooting - 1 )  )  + min ( 3 , shootTimer )  ; 
 break ;  case 2 : animOffset = an . shootUF1 [ 0 ]  +  ( 4 *  ( shooting - 1 )  )  + min ( 3 , shootTimer )  ; 
 break ;  case 3 : animOffset = an . shootTop [ 0 ]  +  ( 4 *  ( shooting - 1 )  )  + min ( 3 , shootTimer )  ; 
hspeed = 0 ; 
 break ;  case 4 : animOffset = an . shootDF1 [ 0 ]  +  ( 4 *  ( shooting - 1 )  )  + min ( 3 , shootTimer )  ; 
 break ;  } animOffset -= 1 ; 
 } 
  
  break ;  case "crawl" : frame += abs ( rspeed )  /  ( 8 + abs ( rspeed )  )  ; 
 if (  ! getcon ( "down" , "hold" , true , playerNum )  ||  ( placeFree ( x , y + 4 )  && fabs ( vspeed )  > 2 )  )  { 
 shape = shapeStand ; 
 if ( placeFree ( x , y )  ) anim = "stand" ; 
 
  else shape = shapeCrawl ; 
 
  } 
  
  break ;  case "skid" :  case "walk" : frame += abs ( rspeed )  /  ( 8 + abs ( rspeed )  )  ; 
 if ( flip == 0 && hspeed < 0 &&  ! endMode &&  !  ( getcon ( "left" , "hold" , true , playerNum )  && fabs ( hspeed )  < 2.0 )  )  { 
  if (  ! slippery ) hspeed += 0.2 ; 
 
  else hspeed += 0.1 ; 
 
 anim = "skid" ; 
 } 
  
  else  if ( flip == 1 && hspeed > 0 &&  ! endMode &&  !  ( getcon ( "right" , "hold" , true , playerNum )  && fabs ( hspeed )  < 2.0 )  )  { 
  if (  ! slippery ) hspeed -= 0.2 ; 
 
  else hspeed -= 0.1 ; 
 
 anim = "skid" ; 
 } 
  
  else anim = "walk" ; 
 
  
  if ( anim == "walk" )  { 
  if (  ( getcon ( "right" , "hold" , true , playerNum )  && getcon ( "left" , "hold" , true , playerNum )  || endMode )  &&  (  ( flip == 0 && hspeed < 0 )  ||  ( flip == 1 && hspeed > 0 )  )  && fabs ( rspeed )  <= 1.8 &&  ! shooting && fabs ( hspeed )  < 2.0 )  { 
 animOffset = an [ "moonwalk" ]  [ 0 ]  - an [ "walk" ]  [ 0 ]  ; 
rspeed = fabs ( hspeed )  ; 
 } 
  
  else  { 
  if ( fabs ( rspeed )  > 1.6 ) animOffset = 16 ; 
 
  if ( fabs ( rspeed )  >= 3.2 ) animOffset = 32 ; 
 
  if ( shooting ) animOffset += 8 ; 
 
  } 
  
  if ( abs ( rspeed )  <= 0.1 &&  ( fabs ( hspeed )  <= 0.1 || slippery )  ) anim = "stand" ; 
 
  else  if ( fabs ( rspeed )  < fabs ( hspeed )  &&  ! slippery ) rspeed = fabs ( hspeed )  ; 
 
  
  } 
  
  if ( placeFree ( x , y + 8 )  &&  ! onPlatform (  )  && fabs ( vspeed )  > 1 )  { 
  if ( vspeed >= 0 ) anim = "fall" ; 
 
  else anim = "jump" ; 
 
 frame = 0.0 ; 
 } 
  
  break ;  case "jumpU" : anim = "jump" ; 
 case "jump" :  if ( fabs ( hspeed )  >= 2.8 ) an . jump = an . jumpR ; 
 
  else an . jump = an . jumpU ; 
 
 frame += 0.25 ; 
 if ( an . jump == an . jumpR ) frame += 0.25 ; 
 
  if (  (  ! placeFree ( x , y + 4 )  ||  ! placeFree ( x - hspeed , y + 4 )  || onPlatform (  )  )  && vspeed >= 0 )  { 
 anim = "stand" ; 
frame = 0.0 ; 
 } 
  
  if ( vspeed > 0 )  { 
 anim = "jumpT" ; 
frame = 0.0 ; 
 } 
  
  break ;  case "jumpT" : frame += 0.2 ; 
 if (  (  ! placeFree ( x , y + 4 )  ||  ! placeFree ( x - hspeed , y + 4 )  || onPlatform (  )  )  && vspeed >= 0 )  { 
 anim = "stand" ; 
frame = 0.0 ; 
 } 
  
  if ( floor ( frame )  > an [ anim ]  . len (  )  - 1 )  { 
 anim = "fall" ; 
frame = 0.0 ; 
 } 
  
  if ( vspeed < 0 ) anim = "jump" ; 
 
  break ;  case "fall" : fallTimer ++  ; 
frame += 0.1 +  (  ( 1.0 / 64.0 )  * vspeed )  ; 
 if (  (  ! placeFree ( x , y + 4 )  ||  ! placeFree ( x - hspeed , y + 4 )  || onPlatform (  )  )  && vspeed >= 0 )  { 
 anim = "stand" ; 
frame = 0.0 ; 
 } 
  
  if ( vspeed < 0 ) anim = "jump" ; 
 
  break ;  case "wall" : frame += 0.3 ; 
vspeed = 0 ; 
 if ( floor ( frame )  > 1 )  { 
 vspeed =  - 6.0 ; 
 if ( getcon ( "down" , "hold" , true , playerNum )  ) vspeed =  - 4.0 ; 
 
  var w = 4.0 ;
  if ( getcon ( "up" , "hold" , true , playerNum )  ) w = 2.0 ; 
 
  if ( flip == 0 ) hspeed = w ; 
 
  else hspeed =  - w ; 
 
 anim = "jump" ; 
frame = 0.0 ; 
canJump = 0 ; 
 } 
  
  if (  ! freeLeft ) flip = 0 ; 
 
  if (  ! freeRight ) flip = 1 ; 
 
  break ;  case "hurt" : frame += 0.1 ; 
 if ( floor ( frame )  > 1 )  { 
  if ( nowInWater || resTime ) anim = "float" ; 
 
  else anim = "stand" ; 
 
  } 
  
  break ;  case "float" : frame += 0.05 ; 
 if ( getcon ( "left" , "hold" , true , playerNum )  || getcon ( "right" , "hold" , true , playerNum )  || getcon ( "up" , "hold" , true , playerNum )  || getcon ( "down" , "hold" , true , playerNum )  )  { 
 anim = "swim" ; 
frame = 0.0 ; 
 } 
  
  break ;  case "swim" : frame += 0.15 ; 
 if (  ! getcon ( "left" , "hold" , true , playerNum )  &&  ! getcon ( "right" , "hold" , true , playerNum )  &&  ! getcon ( "up" , "hold" , true , playerNum )  &&  ! getcon ( "down" , "hold" , true , playerNum )  ) anim = "float" ; 
 
  if ( routine == ruNormal )  { 
  if ( vspeed < 0 ) anim = "jump" ; 
 
  else anim = "jumpT" ; 
 
 frame = 0.0 ; 
 } 
  
  if ( routine == ruBall ) anim = "morphIn" ; 
 
  break ;  case "morphIn" : frame += 0.25 ; 
 if ( floor ( frame )  > 1 )  { 
 routine = ruBall ; 
anim = "ball" ; 
 } 
  
  break ;  case "morphOut" : frame += 0.25 ; 
 if ( floor ( frame )  > 1 )  { 
  if ( nowInWater )  { 
 routine = ruSwim ; 
anim = "float" ; 
vspeed /= 4.0 ; 
hspeed /= 4.0 ; 
 } 
  
  else  { 
 routine = ruNormal ; 
anim = "stand" ; 
 } 
  
  } 
  
  break ;  case "ball" : slideframe += hspeed / 8.0 ; 
slideframe = wrap ( slideframe , 0 ,  ( hspeed < 0 ? 4 : 3 )  )  ; 
frame = slideframe ; 
 break ;  case "climb" :  case "climbWall" :  case "ledge" :  if ( shooting )  { 
 frame = 0.0 ; 
animOffset = an . shootClimb [ 0 ]  - an [ anim ]  [ 0 ]  + min ( 3 , shootTimer )  ; 
 } 
  
  if ( anim == "climbWall" )  { 
  if (  ! placeFree ( x + 4 , y )  ) flip = 0 ; 
 
  if (  ! placeFree ( x - 4 , y )  ) flip = 1 ; 
 
  } 
  
  break ;  case "shootTop" : frame += 0.25 ; 
animOffset = 0.0 ; 
 if ( hspeed != 0 || vspeed != 0 )  { 
 anim = "stand" ; 
 break ;  } 
  
  if ( frame >= an [ anim ]  . len (  )  )  { 
 anim = "stand" ; 
 if (  ! placeFree ( x , y )  ) anim = "crawl" ; 
 
  } 
  
 rspeed = 0 ; 
 break ;  case "plantMine" : frame += 0.25 ; 
 if ( fabs ( hspeed )  > 1 || fabs ( vspeed )  > 1 )  { 
 anim = "stand" ; 
 break ;  } 
  
  if ( frame >= an [ anim ]  . len (  )  )  { 
  if (  ( (actor[ ( "WeaponEffect" ) ] !== undefined) )  )  {     var foreachOutput1 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  if (  squirrelInstanceOf( i , NutMine)  ) deleteActor ( i . id )  ; 
 
     }  }  
  var nutType = "normal" ;
  if ( hand == 0 ) nutType = stats . weapon ; 
 
  if ( hand == 1 ) nutType = stats . subitem ; 
 
  var c = fireWeapon ( NutMine , x , y + 9 , 1 , id )  ;
 c . exPower = min ( floor ( chargeTimer / 90 )  + 1 , 3 )  ; 
c . sprite = mineSprite ; 
 if ( c != null )  { 
 c . exElement = nutType ; 
stats . energy --  ; 
firetime = 90 ; 
 } 
  
 anim = "stand" ; 
 } 
  
 rspeed = 0 ; 
 break ;  case "monkey" :  if ( hspeed == 0 || partnerHang )  { 
 frame = 0.0 ; 
animOffset = an [ "hang" ]  [ 0 ]  - an [ anim ]  [ 0 ]  ; 
 } 
  
  if ( shooting )  { 
 frame = 0.0 ; 
animOffset = an [ "shootHang" ]  [ 0 ]  - an [ anim ]  [ 0 ]  + min ( 3 , shootTimer )  ; 
 } 
  
  if ( hspeed != 0 &&  ! partnerHang ) frame += fabs ( hspeed )  * 0.1 ; 
 
  if ( partnerHang )  { 
  var target = null ;
  if ( playerNum == 1 && gvPlayer2 ) target = gvPlayer2 ; 
 
  if ( playerNum == 2 && gvPlayer ) target = gvPlayer ; 
 
  if ( target != null && placeFree ( target . x , target . y + 24 )  && target . anim == "fly" &&  ( freeDown || vspeed <= 0 )  )  { 
 x = target . x ; 
y = target . y + 24 ; 
hspeed = target . hspeed ; 
vspeed = target . vspeed ; 
 } 
  
  else partnerHang = false ; 
 
  } 
  
  if (  ! atZipline (  )  &&  ! atZipline ( 0 , 1 )  &&  ! atZipline ( 0 ,  - 1 )  &&  ! partnerHang ) anim = "jump" ; 
 
  break ;  }  if ( endMode && hspeed == 0 ) anim = "win" ; 
 
  else  if ( anim == "win" ) anim = "stand" ; 
 
  
  if (  ( (an[ ( anim ) ] !== undefined) )  && an [ anim ]  != null && anim != "hurt" ) frame = wrap ( abs ( frame )  , 0 , an [ anim ]  . len (  )  - 1 )  ; 
 
  if ( shooting )  { 
 shootTimer += 0.25 ; 
 if ( zoomies > 0 ) shootTimer += 0.25 ; 
 
  } 
  
  if ( shootTimer > 4 )  { 
 shootTimer = 0.0 ; 
shooting = 0 ; 
 } 
  
  if ( anim != "stand" || shooting ) boredom = 0 ; 
 
  if ( anim != "fall" && anim != "stand" ) fallTimer = 0 ; 
 
  if ( anim == "fall" || anim == "jumpT" || anim == "jump" || anim == "jumpU" || anim == "float" || anim == "swim" )  { 
  if ( shooting )  { 
 frame = 0.0 ; 
 switch ( shootDir )  {  case 0 :  case 2 :  case 3 : animOffset = an . shootAir [ 0 ]  + min ( 3 , shootTimer )  ; 
 break ;  case 1 : animOffset = an . shootAU1 [ 0 ]  +  ( 4 *  ( shooting - 1 )  )  + min ( 3 , shootTimer )  ; 
 break ;  case 4 : animOffset = an . shootAD1 [ 0 ]  +  ( 4 *  ( shooting - 1 )  )  + min ( 3 , shootTimer )  ; 
 break ;  }  if ( an [ anim ]  != null ) animOffset -= an [ anim ]  [ 0 ]  ; 
 
  } 
  
  } 
  
  } ;  returnVal . run = function (  ) { freeDown = placeFree ( x , y + 1 )  ; 
freeDown2 = placeFree ( x , y + 2 )  ; 
freeLeft = placeFree ( x - 1 , y )  ; 
freeRight = placeFree ( x + 1 , y )  ; 
freeUp = placeFree ( x , y - 1 )  ; 
wasInWater = nowInWater ; 
nowInWater = inWater ( x , y )  ; 
 if ( routine == ruSwim ) canStomp = false ; 
 
  else canStomp = true ; 
 
  baseMethods . run  (  )  ; 
 if ( canMove &&  ! holding )  { 
  if ( getcon ( "swap" , "press" , true , playerNum )  ) swapitem (  )  ; 
 
  if ( getcon ( "shoot" , "press" , true , playerNum )  ) shootNut ( 0 )  ; 
 
  if ( getcon ( "spec1" , "press" , true , playerNum )  ) shootNut ( 1 )  ; 
 
  if ( getcon ( "shoot" , "hold" , true , playerNum )  && stats . energy > 1 )  { 
 chargeTimer ++  ; 
 if ( chargeTimer > 121 && stats . energy < 3 ) chargeTimer --  ; 
 
  if ( chargeTimer == 180 ) tftime = 0 ; 
 
  } 
  
  if ( getcon ( "spec1" , "hold" , true , playerNum )  && stats . energy > 1 )  { 
 chargeTimer2 ++  ; 
 if ( chargeTimer2 > 121 && stats . energy < 3 ) chargeTimer2 --  ; 
 
  if ( chargeTimer2 == 180 ) tftime = 0 ; 
 
  } 
  
  if ( getcon ( "shoot" , "release" , true , playerNum )  && stats . energy > 0 && chargeTimer >= 90 ) shootNut ( 0 , min ( floor ( chargeTimer / 90 )  + 1 , stats . energy )  )  ; 
 
  if ( getcon ( "spec1" , "release" , true , playerNum )  && stats . energy > 0 && chargeTimer2 >= 90 ) shootNut ( 1 , min ( floor ( chargeTimer2 / 90 )  + 1 , stats . energy )  )  ; 
 
  if (  ! getcon ( "shoot" , "hold" , true , playerNum )  && anim != "plantMine" ) chargeTimer = 0 ; 
 
  if (  ! getcon ( "spec1" , "hold" , true , playerNum )  && anim != "plantMine" ) chargeTimer2 = 0 ; 
 
  if (  ( chargeTimer > 180 || chargeTimer2 > 180 )  &&  ( getFrames (  )  )  % 4 == 0 )  { 
 newActor ( GoldCharge , x - 12 + randInt ( 24 )  , y - 12 + randInt ( 24 )  )  ; 
 } 
  
  } 
  
  else  if (  ! canMove )  { 
  if ( getcon ( "shoot" , "release" , true , playerNum )  && stats . energy > 0 && chargeTimer >= 90 ) shootNut ( 0 , min ( floor ( chargeTimer / 90 )  + 1 , stats . energy )  )  ; 
 
  if ( getcon ( "spec1" , "release" , true , playerNum )  && stats . energy > 0 && chargeTimer2 >= 90 ) shootNut ( 1 , min ( floor ( chargeTimer2 / 90 )  + 1 , stats . energy )  )  ; 
 
  } 
  
  else  if ( holding ) chargeTimer = 0 ; 
 
  
  
  if ( firetime > 0 )  { 
 firetime --  ; 
 } 
  
  if ( firetime <= 0 && stats . energy < stats . maxEnergy ) stats . energy += 1.0 / 30.0 ; 
 
  if (  ! freeDown2 && stats . stamina < stats . maxStamina ) stats . stamina ++  ; 
 
  if ( zoomies > 0 && getFrames (  )  % 2 == 0 && an [ anim ]  != null ) newActor ( AfterImage , x , y ,  [ sprite , an [ anim ]  [ wrap ( floor ( frame )  , 0 , an [ anim ]  . len (  )  - 1 )  ]  + animOffset , 0 , flip , 0 , 1 , 1 ]  )  ; 
 
  if ( invincible > 0 ) invincible --  ; 
 
  if (  (  ( invincible % 2 == 0 && invincible > 240 )  ||  ( invincible % 4 == 0 && invincible > 120 )  || invincible % 8 == 0 )  && invincible > 0 ) newActor ( Glimmer , x + 10 - randInt ( 20 )  , y + 10 - randInt ( 20 )  )  ; 
 
 inMelee =  ( anim == "ball" && fabs ( hspeed )  > rollMeleeSpeed )  ; 
 } ;  returnVal . ruNormal = function (  ) {  if (  ! placeFree ( x - hspeed , y + 2 )  ||  ! placeFree ( x , y + 2 )  || anim == "climb" || anim == "climbWall" || onPlatform (  )  )  { 
 canJump = 16 ; 
 } 
  
  else  { 
  if ( canJump > 0 ) canJump --  ; 
 
  } 
  
 onWall =  ( anim == "wall" || an [ anim ]  == an [ "fallW" ]  )  ; 
 if ( canMove )  { 
 mspeed = 3.5 ; 
 if ( anim == "crawl" ) mspeed = 2.0 ; 
 
  if ( config . stickspeed )  { 
  var j = null ;
  if ( playerNum == 1 ) j = config . joy ; 
 
  if ( playerNum == 2 ) j = config . joy2 ; 
 
  if ( abs ( joyX ( j . index )  )  > js_max * 0.1 ) mspeed =  ( 3.0 * abs ( joyX ( j . index )  )  )  / float ( js_max )  ; 
 
  } 
  
  if ( invincible ) mspeed += 0.4 ; 
 
  if ( nowInWater ) mspeed *= 0.5 ; 
 
  if ( zoomies > 0 ) mspeed *= 2.0 ; 
 
  if ( zoomies > 0 ) accel = 0.4 ; 
 
  else accel = 0.2 ; 
 
  if ( anim == "ledge" )  { 
 mspeed = 0 ; 
accel = 0 ; 
hspeed = 0 ; 
 } 
  
  if ( getcon ( "right" , "hold" , true , playerNum )  && hspeed < mspeed && anim != "wall" && anim != "slide" && anim != "hurt" && anim != "climb" && anim != "climbWall" && anim != "skid" && anim != "plantMine" && anim != "shootTop" )  { 
  if ( hspeed >= 2 )  { 
  if ( slippery ) hspeed += accel * 0.2 ; 
 
  else hspeed += accel * 0.4 ; 
 
  } 
  
  else  if ( slippery ) hspeed += accel / 2.0 ; 
 
  else hspeed += accel ; 
 
  
  } 
  
  if ( getcon ( "left" , "hold" , true , playerNum )  && hspeed >  - mspeed && anim != "wall" && anim != "slide" && anim != "hurt" && anim != "climb" && anim != "climbWall" && anim != "skid" && anim != "plantMine" && anim != "shootTop" )  { 
  if ( hspeed <=  - 2 )  { 
  if ( slippery ) hspeed -= accel * 0.2 ; 
 
  else hspeed -= accel * 0.4 ; 
 
  } 
  
  else  if ( slippery ) hspeed -= accel / 2.0 ; 
 
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
 if ( getcon ( "up" , "hold" , true , playerNum )  &&  ! shooting && placeFree ( x , y - 2 )  )  { 
 frame -= climbdir / 8 ; 
y -= 2 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  &&  ! shooting && placeFree ( x , y + 2 )  )  { 
 frame += climbdir / 8 ; 
y += 2 ; 
 } 
  
  if ( getcon ( "left" , "hold" , true , playerNum )  && atCrossLadder (  )  &&  ! shooting )  if ( placeFree ( x - 2 , y )  )  { 
  if (  ! getcon ( "up" , "hold" , true , playerNum )  &&  ! getcon ( "down" , "hold" , true , playerNum )  ) frame -= climbdir / 8 ; 
 
 x -= 1 ; 
 } 
  
  
  if ( getcon ( "right" , "hold" , true , playerNum )  && atCrossLadder (  )  &&  ! shooting )  if ( placeFree ( x + 2 , y )  )  { 
  if (  ! getcon ( "up" , "hold" , true , playerNum )  &&  ! getcon ( "down" , "hold" , true , playerNum )  ) frame += climbdir / 8 ; 
 
 x += 1 ; 
 } 
  
  
  var felloff = true ;
  if ( atLadder ( x , y + 2 )  || atCrossLadder (  )  ) felloff = false ; 
 
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
  
  if ( anim == "climbWall" )  { 
 vspeed = 0 ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  &&  ! shooting && placeFree ( x , y - 2 )  )  { 
 frame -= climbdir / 8 ; 
y -= 2 ; 
 } 
  
  if ( getcon ( "down" , "hold" , true , playerNum )  &&  ! shooting && placeFree ( x , y + 2 )  )  { 
 frame += climbdir / 8 ; 
y += 2 ; 
 } 
  
  var felloff = true ;
  if ( atWallLadder (  )  ) felloff = false ; 
 
  if ( felloff )  { 
 anim = "fall" ; 
frame = 0.0 ; 
 if ( getcon ( "up" , "hold" , true , playerNum )  ) vspeed =  - 3.0 ; 
 
  } 
  
  if (  ! freeLeft ) flip = 1 ; 
 
  if (  ! freeRight ) flip = 0 ; 
 
  } 
  
  if (  (  ( getcon ( "down" , "hold" , true , playerNum )  && placeFree ( x , y + 2 )  )  || getcon ( "up" , "hold" , true , playerNum )  )  && anim != "hurt" && anim != "climbWall" && anim != "monkey" && anim != "climb" &&  ( vspeed >= 0 || getcon ( "down" , "press" , true , playerNum )  || getcon ( "up" , "press" , true , playerNum )  )  )  { 
  if (  ( atZipline (  )  || atZipline ( 0 ,  - vspeed )  || atZipline ( 0 , vspeed )  )  && y % 16 < 4 )  { 
 anim = "monkey" ; 
frame = 0.0 ; 
hspeed = 0 ; 
vspeed = 0 ; 
y =  ( y -  ( y % 16 )  )  + 12 ; 
partnerHang = false ; 
 } 
  
 shapeGrip . setPos ( x , y - 24 )  ; 
 if (  ( playerNum == 1 && gvPlayer2 && gvPlayer2 . anim == "fly" && hitTest ( shapeGrip , gvPlayer2 . shape )  )  ||  ( playerNum == 2 && gvPlayer && gvPlayer . anim == "fly" && hitTest ( shapeGrip , gvPlayer . shape )  )  )  { 
 anim = "monkey" ; 
frame = 0.0 ; 
hspeed = 0 ; 
vspeed = 0 ; 
partnerHang = true ; 
 } 
  
  } 
  
  if (  (  ( getcon ( "down" , "hold" , true , playerNum )  && placeFree ( x , y + 2 )  )  || getcon ( "up" , "hold" , true , playerNum )  )  && anim != "hurt" && anim != "climbWall" && anim != "climb" && anim != "monkey" &&  ( vspeed >= 0 || getcon ( "down" , "press" , true , playerNum )  || getcon ( "up" , "press" , true , playerNum )  )  )  { 
  if ( atLadder (  )  || atCrossLadder (  )  )  { 
 anim = "climb" ; 
frame = 0.0 ; 
hspeed = 0 ; 
vspeed = 0 ; 
x = round ( x )  ; 
 } 
  
  } 
  
  if (  (  ( getcon ( "down" , "hold" , true , playerNum )  && placeFree ( x , y + 2 )  )  || getcon ( "up" , "hold" , true , playerNum )  )  && anim != "hurt" && anim != "climbWall" && anim != "climb" && anim != "monkey" &&  ( vspeed >= 0 || getcon ( "down" , "press" , true , playerNum )  || getcon ( "up" , "press" , true , playerNum )  )  )  { 
  if ( atWallLadder (  )  )  { 
 anim = "climbWall" ; 
frame = 0.0 ; 
hspeed = 0 ; 
vspeed = 0 ; 
x =  ( x -  ( x % 16 )  )  + 8 ; 
 } 
  
  } 
  
  if ( getcon ( "jump" , "press" , true , playerNum )  || jumpBuffer > 0 )  { 
  if (  ( onPlatform ( 0 , 2 )  || onPlatform ( 8 , 2 )  || onPlatform (  - 8 , 2 )  ||  ! placeFree ( x , y + 2 )  )  && getcon ( "down" , "hold" , true , playerNum )  )  { 
 y ++  ; 
canJump = 32 ; 
 if (  ! placeFree ( x , y )  &&  ! placeFree ( x , y - 1 )  ) y --  ; 
 
  if ( anim == "plantMine" ) shooting = 0 ; 
 
  if ( anim == "stand" || anim == "walk" ) anim = "jumpT" ; 
 
 jumpBuffer = 0 ; 
 } 
  
  else  if ( canJump > 0 || anim == "ledge" || anim == "monkey" )  { 
 jumpBuffer = 0 ; 
 if (  ! getcon ( "down" , "hold" , true , playerNum )  ||  ! freeDown2 )  { 
  if ( anim == "climb" ) vspeed =  - 3 ; 
 
 vspeed =  - 6.4 ; 
 } 
  
 didJump = true ; 
canJump = 0 ; 
 if ( anim == "plantMine" ) shooting = 0 ; 
 
  if ( anim != "hurt" )  { 
 animOffset = 0.0 ; 
 if ( anim != "morphIn" ) anim = "jump" ; 
 
 frame = 0.0 ; 
 } 
  
  if (  ! freeDown2 || freeRight && freeLeft &&  ! getcon ( "down" , "hold" , true , playerNum )  ) popSound ( sndMidiJump , 0 )  ; 
 
  } 
  
  else  if ( freeDown && anim != "climb" && anim != "ledge" &&  ! placeFree ( x - 2 , y )  && anim != "wall" && hspeed <= 0 && tileGetSolid ( x - 12 , y - 12 )  != 40 && tileGetSolid ( x - 12 , y + 12 )  != 40 && tileGetSolid ( x - 12 , y )  != 40 &&  ! didJump )  { 
 flip = 0 ; 
anim = "wall" ; 
frame = 0.0 ; 
playSound ( sndWallkick , 0 )  ; 
canJump = 0 ; 
 } 
  
  else  if ( freeDown && anim != "climb" && anim != "ledge" &&  ! placeFree ( x + 2 , y )  && anim != "wall" && hspeed >= 0 && tileGetSolid ( x + 12 , y - 12 )  != 40 && tileGetSolid ( x + 12 , y + 12 )  != 40 && tileGetSolid ( x + 12 , y )  != 40 &&  ! didJump )  { 
 flip = 1 ; 
anim = "wall" ; 
frame = 0.0 ; 
playSound ( sndWallkick , 0 )  ; 
canJump = 0 ; 
 } 
  
  
  
  
  } 
  
  if (  ( anim == "fall" || anim == "ledge" )  &&  (  ( getcon ( "left" , "hold" , true , playerNum )  &&  ! freeLeft )  ||  ( getcon ( "right" , "hold" , true , playerNum )  &&  ! freeRight )  )  )  { 
  if (  ! freeLeft &&  !  ( onIce ( x - 8 , y )  || onIce ( x - 8 , y - 16 )  )  )  { 
  var oldShape = shape ;
 shape = shapeGrip ; 
 if ( placeFree ( x - 5 , y - 16 )  &&  ! placeFree ( x - 5 , y - 14 )  && placeFree ( x , y + 4 )  )  { 
  if (  ! getcon ( "down" , "hold" , true , playerNum )  ) vspeed = 0 ; 
 
 anim = "ledge" ; 
flip = 1 ; 
 } 
  
  else  { 
  if ( vspeed > 0.5 ) vspeed = 0.5 ; 
 
  if ( getFrames (  )  / 4 % 4 == 0 ) newActor ( PoofTiny , x - 4 , y + 12 )  ; 
 
 an [ "fall" ] = an [ "fallW" ]  ; 
anim = "fall" ; 
flip = 0 ; 
 } 
  
 shape = oldShape ; 
 } 
  
  if (  ! freeRight &&  !  ( onIce ( x + 8 , y )  || onIce ( x + 8 , y - 16 )  )  )  { 
  var oldShape = shape ;
 shape = shapeGrip ; 
 if ( placeFree ( x + 5 , y - 16 )  &&  ! placeFree ( x + 5 , y - 14 )  && placeFree ( x , y + 4 )  )  { 
  if (  ! getcon ( "down" , "hold" , true , playerNum )  ) vspeed = 0 ; 
 
 anim = "ledge" ; 
flip = 0 ; 
 } 
  
  else  { 
  if ( vspeed > 0.5 ) vspeed = 0.5 ; 
 
  if ( getFrames (  )  / 4 % 4 == 0 ) newActor ( PoofTiny , x + 4 , y + 12 )  ; 
 
 an [ "fall" ] = an [ "fallW" ]  ; 
anim = "fall" ; 
flip = 1 ; 
 } 
  
 shape = oldShape ; 
 } 
  
  } 
  
  else an [ "fall" ] = an [ "fallN" ]  ; 
 
  if ( getcon ( "jump" , "press" , true , playerNum )  && jumpBuffer <= 0 && freeDown && anim != "ledge" ) jumpBuffer = 8 ; 
 
  if ( jumpBuffer > 0 ) jumpBuffer --  ; 
 
  if (  ! getcon ( "jump" , "hold" , true , playerNum )  &&  ( vspeed < 0 || anim == "fall" )  && didJump )  { 
 didJump = false ; 
vspeed /= 2.5 ; 
 } 
  
  if ( getcon ( "spec2" , "press" , true , playerNum )  && anim != "hurt" )  { 
  if ( anim == "ledge" ) vspeed =  - 4.0 ; 
 
 anim = "morphIn" ; 
frame = 0.0 ; 
 } 
  
  } 
  
  else rspeed = min ( rspeed , abs ( hspeed )  )  ; 
 
  if ( anim != "ledge" && anim != "wall" && anim != "climbWall" &&  !  ( anim == "fall" && an . fall == an . fallW )  )  { 
  if (  ( getcon ( "right" , "hold" , true , playerNum )  &&  ! getcon ( "left" , "hold" , true , playerNum )  && anim != "slide" && canMove )  ||  ( hspeed > 0.1 && anim == "slide" )  ) flip = 0 ; 
 
  if (  ( getcon ( "left" , "hold" , true , playerNum )  &&  ! getcon ( "right" , "hold" , true , playerNum )  && anim != "slide" && canMove )  ||  ( hspeed <  - 0.1 && anim == "slide" )  ) flip = 1 ; 
 
  } 
  
  if ( hurt > 0 && invincible == 0 )  { 
  if ( blinking == 0 )  { 
 blinking = 60 ; 
playSound ( sndHurt , 0 )  ; 
 if ( stats . health > 0 ) stats . health -= hurt ; 
 
  if ( flip == 0 ) hspeed =  - 2.0 ; 
 
  else hspeed = 2.0 ; 
 
  if ( hurt >= hurtThreshold ) an . hurt = an . hurtHeavy ; 
 
  else an . hurt = an . hurtLight ; 
 
  if ( anim != "morphIn" ) anim = "hurt" ; 
 
 frame = 0.0 ; 
 } 
  
 hurt = 0 ; 
 } 
  
  else hurt = 0 ; 
 
  if ( blinking > 0 ) blinking --  ; 
 
  if ( nowInWater )  { 
 routine = ruSwim ; 
 if ( anim != "morphIn" && anim != "ball" ) anim = "float" ; 
 
 vspeed /= 4.0 ; 
hspeed /= 4.0 ; 
 } 
  
  if ( resTime > 0 )  { 
 routine = ruSwim ; 
anim = "float" ; 
 } 
  
  switch ( stats . weapon )  {  case "fire" : damageMult = damageMultF ; 
 break ;  case "ice" : damageMult = damageMultI ; 
 break ;  case "earth" : damageMult = damageMultE ; 
 break ;  case "air" : damageMult = damageMultA ; 
 break ;  case "shock" : damageMult = damageMultS ; 
 break ;  case "water" : damageMult = damageMultW ; 
 break ;  case "light" : damageMult = damageMultL ; 
 break ;  case "dark" : damageMult = damageMultD ; 
 break ;  default : damageMult = damageMultN ; 
 break ;  }  } ;  returnVal . ruSwim = function (  ) {  if ( zoomies > 0 ) accel = 0.4 ; 
 
  else accel = 0.2 ; 
 
  if ( canMove )  { 
 mspeed = 1.2 ; 
 if ( zoomies ) mspeed = 2.4 ; 
 
  if ( resTime > 0 ) mspeed = 2 ; 
 
  if ( getcon ( "left" , "hold" , true , playerNum )  )  { 
  if ( hspeed >  - mspeed ) hspeed -= accel / 2.0 ; 
 
 flip = 1 ; 
 } 
  
  if ( getcon ( "right" , "hold" , true , playerNum )  )  { 
  if ( hspeed < mspeed ) hspeed += accel / 2.0 ; 
 
 flip = 0 ; 
 } 
  
  if ( getcon ( "up" , "hold" , true , playerNum )  && vspeed >  - mspeed ) vspeed -= accel / 2.0 ; 
 
  if ( getcon ( "down" , "hold" , true , playerNum )  && vspeed < mspeed ) vspeed += accel / 2.0 ; 
 
  if ( getcon ( "spec2" , "press" , true , playerNum )  && anim != "hurt" && resTime <= 0 )  { 
 anim = "morphIn" ; 
frame = 0.0 ; 
 } 
  
  } 
  
  if ( onHazard ( x , y )  ) hurt = 1 + game . difficulty ; 
 
  if ( onDeath ( x , y )  ) stats . health = 0 ; 
 
  if ( hurt > 0 && invincible == 0 )  { 
  if ( blinking == 0 )  { 
 blinking = 60 ; 
playSound ( sndHurt , 0 )  ; 
 if ( stats . health > 0 ) stats . health -= hurt ; 
 
  if ( flip == 0 ) hspeed =  - 2.0 ; 
 
  else hspeed = 2.0 ; 
 
  if ( hurt >= hurtThreshold ) an . hurt = an . hurtHeavy ; 
 
  else an . hurt = an . hurtLight ; 
 
  if ( anim != "morphIn" ) anim = "hurt" ; 
 
 frame = 0.0 ; 
 } 
  
 hurt = 0 ; 
 } 
  
  else hurt = 0 ; 
 
  if ( blinking > 0 ) blinking --  ; 
 
  if (  ! nowInWater && resTime <= 0 )  { 
 routine = ruNormal ; 
 if ( anim != "morphIn" && anim != "ball" ) anim = "stand" ; 
 
  if ( getcon ( "jump" , "hold" , true , playerNum )  ) vspeed -= 4.0 ; 
 
  } 
  
  } ;  returnVal . ruBall = function (  ) {  if (  (  (  ! placeFree ( x - hspeed , y + 2 )  && vspeed >= 0 )  ||  ! placeFree ( x , y + 2 )  || onPlatform (  )  )  &&  ! onWall )  { 
 canJump = 16 ; 
 } 
  
  else  { 
  if ( canJump > 0 ) canJump --  ; 
 
  } 
  
  if ( canMove )  { 
 mspeed = 3.5 ; 
 if ( config . stickspeed )  { 
  var j = null ;
  if ( playerNum == 1 ) j = config . joy ; 
 
  if ( playerNum == 2 ) j = config . joy2 ; 
 
  if ( abs ( joyX ( j . index )  )  > js_max * 0.1 ) mspeed =  ( 3.0 * abs ( joyX ( j . index )  )  )  / float ( js_max )  ; 
 
  } 
  
  if ( invincible ) mspeed += 0.4 ; 
 
  if ( nowInWater ) mspeed *= 0.7 ; 
 
  if ( zoomies > 0 ) mspeed *= 2.0 ; 
 
  if ( zoomies > 0 ) accel = 0.4 ; 
 
  else accel = 0.2 ; 
 
  if ( getcon ( "right" , "hold" , true , playerNum )  && hspeed < mspeed && anim != "wall" && anim != "slide" && anim != "hurt" && anim != "climb" && anim != "climbWall" && anim != "skid" )  { 
  if ( hspeed >= 2 )  { 
  if ( onIce ( x , y + 1 )  ) hspeed += accel * 0.2 ; 
 
  else hspeed += accel * 0.4 ; 
 
  } 
  
  else  if ( onIce ( x , y + 1 )  ) hspeed += accel / 2.0 ; 
 
  else hspeed += accel ; 
 
  
 flip = 0 ; 
 } 
  
  if ( getcon ( "left" , "hold" , true , playerNum )  && hspeed >  - mspeed && anim != "wall" && anim != "slide" && anim != "hurt" && anim != "climb" && anim != "climbWall" && anim != "skid" )  { 
  if ( hspeed <=  - 2 )  { 
  if ( onIce ( x , y + 1 )  ) hspeed -= accel * 0.2 ; 
 
  else hspeed -= accel * 0.4 ; 
 
  } 
  
  else  if ( onIce ( x , y + 1 )  ) hspeed -= accel / 2.0 ; 
 
  else hspeed -= accel ; 
 
  
 flip = 1 ; 
 } 
  
  if ( getcon ( "jump" , "press" , true , playerNum )  || jumpBuffer > 0 )  { 
  if ( onPlatform (  )  &&  ! placeFree ( x , y + 1 )  && getcon ( "down" , "hold" , true , playerNum )  )  { 
 y ++  ; 
canJump = 32 ; 
 if (  ! placeFree ( x , y )  &&  ! placeFree ( x , y - 1 )  ) y --  ; 
 
  } 
  
  else  if ( canJump > 0 && placeFree ( x , y - 2 )  )  { 
 jumpBuffer = 0 ; 
 if ( anim == "climb" ) vspeed =  - 3 ; 
 
  if ( nowInWater ) vspeed =  - 4.0 ; 
 
  else vspeed =  - 6.4 ; 
 
 didJump = true ; 
 if ( stats . weapon != "air" ) canJump = 0 ; 
 
 popSound ( sndMidiJump , 0 )  ; 
 } 
  
  
  } 
  
  if ( getcon ( "jump" , "press" , true , playerNum )  && jumpBuffer <= 0 && freeDown ) jumpBuffer = 8 ; 
 
  if ( jumpBuffer > 0 ) jumpBuffer --  ; 
 
  if (  ! getcon ( "jump" , "hold" , true , playerNum )  &&  ( vspeed < 0 || anim == "fall" )  && didJump )  { 
 didJump = false ; 
vspeed /= 2.5 ; 
 } 
  
  } 
  
  else rspeed = min ( rspeed , abs ( hspeed )  )  ; 
 
  if ( getcon ( "spec2" , "press" , true , playerNum )  && placeFree ( x , y - 8 )  && anim == "ball" )  { 
 anim = "morphOut" ; 
frame = 0.0 ; 
 } 
  
  if ( onHazard ( x , y )  ) hurt = 1 + game . difficulty ; 
 
  if ( onDeath ( x , y )  ) stats . health = 0 ; 
 
  if ( hurt > 0 && invincible == 0 )  { 
  if ( blinking == 0 )  { 
 blinking = 60 ; 
playSound ( sndHurt , 0 )  ; 
 if ( stats . health > 0 ) stats . health -= hurt ; 
 
  if ( flip == 0 ) hspeed =  - 1.0 ; 
 
  else hspeed = 1.0 ; 
 
 frame = 0.0 ; 
 } 
  
 hurt = 0 ; 
 } 
  
  else hurt = 0 ; 
 
  if ( blinking > 0 ) blinking --  ; 
 
  if ( resTime > 0 )  { 
 routine = ruSwim ; 
anim = "float" ; 
 } 
  
  } ;  returnVal . ruMonkey = function (  ) {  } ;  returnVal . draw = function (  ) {  var choffset = 0 ;
  if ( anim == "ball" ) choffset = 6 ; 
 
  if ( anim == "morphIn" ) choffset = min ( frame * 6 , 6 )  ; 
 
  if ( anim == "morphOut" ) choffset = 6 - min ( frame * 6 , 6 )  ; 
 
  if (  ! hidden )  { 
  if (  ( (an[ ( anim ) ] !== undefined) )  && an [ anim ]  != null )  { 
 frame = wrap ( frame , 0 , an [ anim ]  . len (  )  - 1 )  ; 
 if ( stats . weapon != "normal" )  { 
  switch ( stats . weapon )  {  case "fire" : auraColor = 0xf84000ff ; 
 break ;  case "ice" : auraColor = 0x80d0f8ff ; 
 break ;  case "air" : auraColor = 0x00a060ff ; 
 break ;  case "earth" : auraColor = 0x705020ff ; 
 break ;  case "shock" : auraColor = 0xf8f800ff ; 
 break ;  case "water" : auraColor = 0x5050c0ff ; 
 break ;  case "light" : auraColor = 0xf8f8b0ff ; 
 break ;  case "dark" : auraColor = 0x201020ff ; 
 break ;  default : auraColor = 0xffffffff ; 
 break ;  }  if (  ( anim == "climb" )  && shooting )  { 
 drawSpriteZ ( 2 , aura , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx +  ( flip ?  - 2 : 2 )  + 1 , y - camy , 0 ,  ( flip ? 0 : 1 )  , 1 , 1 , sin ( float ( getFrames (  )  )  / 16.0 )  * 0.75 , auraColor )  ; 
drawSpriteZ ( 2 , aura , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx +  ( flip ?  - 2 : 2 )  , y - camy + 1 , 0 ,  ( flip ? 0 : 1 )  , 1 , 1 , sin ( torad ( 90 )  + float ( getFrames (  )  )  / 16.0 )  * 0.75 , auraColor )  ; 
drawSpriteZ ( 2 , aura , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx +  ( flip ?  - 2 : 2 )  - 1 , y - camy , 0 ,  ( flip ? 0 : 1 )  , 1 , 1 , sin ( torad ( 180 )  + float ( getFrames (  )  )  / 16.0 )  * 0.75 , auraColor )  ; 
drawSpriteZ ( 2 , aura , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx +  ( flip ?  - 2 : 2 )  , y - camy - 1 , 0 ,  ( flip ? 0 : 1 )  , 1 , 1 , sin ( torad ( 270 )  + float ( getFrames (  )  )  / 16.0 )  * 0.75 , auraColor )  ; 
 } 
  
  else  { 
 drawSpriteZ ( 2 , aura , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx + 1 , y - camy , 0 ,  ( anim == "ball" ? 0 : flip )  , 1 , 1 , sin ( float ( getFrames (  )  )  / 16.0 )  * 0.75 , auraColor )  ; 
drawSpriteZ ( 2 , aura , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx , y - camy + 1 , 0 ,  ( anim == "ball" ? 0 : flip )  , 1 , 1 , sin ( torad ( 90 )  + float ( getFrames (  )  )  / 16.0 )  * 0.75 , auraColor )  ; 
drawSpriteZ ( 2 , aura , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx - 1 , y - camy , 0 ,  ( anim == "ball" ? 0 : flip )  , 1 , 1 , sin ( torad ( 180 )  + float ( getFrames (  )  )  / 16.0 )  * 0.75 , auraColor )  ; 
drawSpriteZ ( 2 , aura , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx , y - camy - 1 , 0 ,  ( anim == "ball" ? 0 : flip )  , 1 , 1 , sin ( torad ( 270 )  + float ( getFrames (  )  )  / 16.0 )  * 0.75 , auraColor )  ; 
 } 
  
  } 
  
  if ( blinking == 0 || anim == "hurt" )  { 
  if ( anim == "climb" && shooting ) drawSpriteZ ( 2 , sprite , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx +  ( flip ?  - 2 : 2 )  , y - camy , 0 ,  ( flip ? 0 : 1 )  , 1 , 1 , 1 )  ; 
 
  else  if ( anim == "climbWall" && shooting ) drawSpriteZ ( 2 , sprite , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx +  ( flip ?  - 2 : 2 )  , y + 1 - camy , 0 , flip , 1 , 1 , 1 )  ; 
 
  else drawSpriteZ ( 2 , sprite , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx , y - camy , 0 ,  ( anim == "ball" ? 0 : flip )  , 1 , 1 , 1 )  ; 
 
  
  } 
  
 drawSpriteZ ( 2 , sprite , an [ anim ]  [ floor ( frame )  ]  + animOffset , x - camx , y - camy , 0 ,  ( anim == "ball" ? 0 : flip )  , 1 , 1 , wrap ( blinking , 0 , 10 )  . tofloat (  )  / 10.0 )  ; 
 } 
  
  if ( shooting && anim == "walk" ) drawSpriteZ ( 2 , sprite , an [ "armShoot" ]  [ min ( 3 , shootTimer )  ]  , x - camx , y - camy , 0 , flip )  ; 
 
  if ( anim == "ball" && fabs ( hspeed )  > rollMeleeSpeed && spinAlpha < 1.0 ) spinAlpha += 0.2 ; 
 
  if ( spinAlpha > 0 ) spinAlpha -= 0.1 ; 
 
  if ( spinAlpha < 0 ) spinAlpha = 0 ; 
 
 drawSpriteZ ( 2 , sprBallSpin , floor (  ( hspeed < 0 ?  - frame : frame )  )  , x - camx , y + 5 - camy , 0 , int ( hspeed < 0 )  , 1 , 1 , spinAlpha )  ; 
 if ( debug )  { 
 setDrawColor ( 0x008000ff )  ; 
shape . draw (  )  ; 
 } 
  
  var charge1 = sprCharge ;
  var charge2 = sprCharge ;
  switch ( stats . weapon )  {  case "fire" : charge1 = sprChargeFire ; 
 break ;  case "ice" : charge1 = sprChargeIce ; 
 break ;  case "shock" : charge1 = sprChargeShock ; 
 break ;  case "earth" : charge1 = sprChargeEarth ; 
 break ;  case "air" : charge1 = sprChargeAir ; 
 break ;  case "water" : charge1 = sprChargeWater ; 
 break ;  }  switch ( stats . subitem )  {  case "fire" : charge2 = sprChargeFire ; 
 break ;  case "ice" : charge2 = sprChargeIce ; 
 break ;  case "shock" : charge2 = sprChargeShock ; 
 break ;  case "earth" : charge2 = sprChargeEarth ; 
 break ;  case "air" : charge2 = sprChargeAir ; 
 break ;  case "water" : charge2 = sprChargeWater ; 
 break ;  }  if ( chargeTimer >= 30 && chargeTimer < 180 ) drawSpriteZ ( 3 , charge1 , float ( getFrames (  )  )  /  ( chargeTimer > 90 ? 2 : 4 )  , x - camx , y - camy + choffset , 0 , flip )  ; 
 
  if ( chargeTimer2 >= 30 && chargeTimer2 < 180 ) drawSpriteZ ( 3 , charge2 , float ( getFrames (  )  )  /  ( chargeTimer2 > 90 ? 2 : 4 )  , x - camx , y - camy + choffset , 0 , int (  ! flip )  )  ; 
 
  if ( tftime !=  - 1 )  { 
  if ( tftime < 4 )  { 
  if (  ! hidden ) drawSpriteZ ( 3 , sprTFflash , tftime , x - camx , y - camy )  ; 
 
 tftime += 0.25 ; 
 } 
  
  else tftime =  - 1 ; 
 
  } 
  
  } 
  
 drawLight ( sprLightBasic , 0 , x - camx , y - camy + choffset )  ; 
 } ;  returnVal . die = function ( skipres = false ) {  if ( resTime > 0 )  return ; 
  
  if ( stats . canres &&  ! skipres )  { 
 stats . health = game . maxHealth ; 
blinking = 120 ; 
hspeed = 0.0 ; 
vspeed = 0.0 ; 
 if ( y > gvMap . h )  { 
 invincible = 300 ; 
resTime = 300 ; 
vspeed =  - 2.0 ; 
 } 
  
 stats . canres = false ; 
 } 
  
  else  { 
 stats . health = 0 ; 
deleteActor ( id )  ; 
 if ( playerNum == 1 ) gvPlayer = false ; 
 
  if ( playerNum == 2 ) gvPlayer2 = false ; 
 
 newActor ( DeadMidi , x , y ,  [ sprite , an [ "hurtHeavy" ]  , playerNum , flip ]  )  ; 
 } 
  
  } ;  returnVal . shootNut = function ( _hand , _power = 1 ) {  if ( stats . energy < 1 || shooting &&  ( shootTimer < 2 || _hand == hand )  )  return ; 
  
 popSound ( sndThrow , 0 )  ; 
hand = _hand ; 
 if ( flip ) shooting = 2 - hand ; 
 
  else shooting = hand + 1 ; 
 
 shootTimer = 0.0 ; 
_power =  ( min ( _power , 3 )  )  ; 
 var nutType = "normal" ;
  if ( hand == 0 ) nutType = stats . weapon ; 
 
  if ( hand == 1 ) nutType = stats . subitem ; 
 
  if (  !  [ "normal" , "fire" , "ice" , "air" , "earth" , "shock" , "water" ]  . squirrelFind ( nutType )  ) nutType = "normal" ; 
 
  if ( getcon ( "up" , "hold" , true , playerNum )  &&  ( getcon ( "left" , "hold" , true , playerNum )  || getcon ( "right" , "hold" , true , playerNum )  )  ) shootDir = 2 ; 
 
  else  if ( getcon ( "down" , "hold" , true , playerNum )  &&  ( getcon ( "left" , "hold" , true , playerNum )  || getcon ( "right" , "hold" , true , playerNum )  )  ) shootDir = 3 ; 
 
  else  if ( getcon ( "down" , "hold" , true , playerNum )  ) shootDir = 4 ; 
 
  else  if ( getcon ( "up" , "hold" , true , playerNum )  ) shootDir = 1 ; 
 
  else shootDir = 0 ; 
 
  
  
  
  if ( shootDir == 4 && anim == "walk" ) hspeed = 0 ; 
 
  var c = null ;
  if ( routine == ruBall || anim == "crawl" )  { 
  if ( getcon ( "down" , "hold" , true , playerNum )  && anim != "crawl" )  { 
 c = fireWeapon ( NutBomb , x , y + 8 , 1 , id )  ; 
c . vspeed = 2 ; 
 } 
  
  else  { 
  if (  ! freeDown && shootDir == 3 && routine != ruSwim )  { 
 c = fireWeapon ( TopNut , x , y - 2 , 1 , id )  ; 
c . sprite = topSprite ; 
hspeed = 0 ; 
anim = "shootTop" ; 
c . hspeed =  ( flip == 0 ? 4.0 :  - 4.0 )  ; 
c . vspeed = 2.0 ; 
 } 
  
  else  { 
 c = fireWeapon ( WingNut , x , y + 8 , 1 , id )  ; 
 if ( routine != ruBall ) c . sprite = nutSprite ; 
 
  } 
  
  } 
  
  } 
  
  else  if ( shootDir == 4 &&  (  ! freeDown || onPlatform (  )  )  && anim != "plantMine" &&  ! nowInWater )  { 
 frame = 0.0 ; 
anim = "plantMine" ; 
vspeed = 0.0 ; 
 } 
  
  else  if (  !  ( shootDir == 3 &&  (  ! freeDown || onPlatform (  )  )  && routine == ruNormal && hspeed == 0 )  && anim != "plantMine" )  { 
  if (  ! freeDown && shootDir == 3 && routine != ruSwim )  { 
 c = fireWeapon ( TopNut , x , y - 2 , 1 , id )  ; 
c . sprite = topSprite ; 
hspeed = 0 ; 
anim = "shootTop" ; 
 } 
  
  else  { 
 c = fireWeapon ( NutBomb , x , y - 2 , 1 , id )  ; 
c . sprite = nutSprite ; 
c . sprite2 = nutSprite2 ; 
c . sprite3 = nutSprite3 ; 
 } 
  
  var d =  ( flip ?  - 1 : 1 )  ;
  if ( anim == "ledge" || anim == "climbWall" ) d =  - d ; 
 
  switch ( shootDir )  {  case 0 : c . hspeed =  ( 5 * d )  +  ( hspeed / 2 )  ; 
 if (  ! nowInWater ) c . vspeed =  - 1 ; 
 
  break ;  case 1 : c . vspeed =  - 5 +  ( vspeed / 2 )  ; 
 break ;  case 2 : c . hspeed =  ( 4 * d )  +  ( hspeed / 2 )  ; 
c . vspeed =  - 4.5 ; 
 break ;  case 3 : c . hspeed =  ( 4 * d )  +  ( hspeed / 2 )  ; 
c . vspeed = 3 +  ( vspeed / 2 )  ; 
 break ;  case 4 : c . vspeed = 5 +  ( vspeed / 2 )  ; 
 break ;  }  } 
  
  
  
  if ( c != null )  { 
 c . exElement = nutType ; 
c . exPower = _power ; 
stats . energy -= _power ; 
firetime = 90 ; 
 } 
  
  if ( _hand == 0 ) chargeTimer = 0 ; 
 
  if ( _hand == 1 ) chargeTimer2 = 0 ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Midi" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . canJump = 16 ; 
 squirrelClassFunction . didJump = false ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . canMove = true ; 
 squirrelClassFunction . mspeed = 4 ; 
 squirrelClassFunction . climbdir = 1.0 ; 
 squirrelClassFunction . blinking = 0 ; 
 squirrelClassFunction . xstart = 0.0 ; 
 squirrelClassFunction . ystart = 0.0 ; 
 squirrelClassFunction . firetime = 0 ; 
 squirrelClassFunction . hurt = 0 ; 
 squirrelClassFunction . swimming = false ; 
 squirrelClassFunction . inMelee = false ; 
 squirrelClassFunction . canStomp = true ; 
 squirrelClassFunction . stompDamage = 0 ; 
 squirrelClassFunction . invincible = 0 ; 
 squirrelClassFunction . shapeStand = 0 ; 
 squirrelClassFunction . shapeCrawl = 0 ; 
 squirrelClassFunction . tftime =  - 1 ; 
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
 squirrelClassFunction . shootTimer = 0.0 ; 
 squirrelClassFunction . shooting = 0 ; 
 squirrelClassFunction . shootDir = 0 ; 
 squirrelClassFunction . boredom = 0 ; 
 squirrelClassFunction . chargeTimer = 0 ; 
 squirrelClassFunction . chargeTimer2 = 0 ; 
 squirrelClassFunction . fallTimer = 0 ; 
 squirrelClassFunction . hurtThreshold = 4 ; 
 squirrelClassFunction . spinAlpha = 0.0 ; 
 squirrelClassFunction . hand = 0 ; 
 squirrelClassFunction . advancedClimbing = true ; 
 squirrelClassFunction . partnerHang = false ; 
 squirrelClassFunction . rollMeleeSpeed = 5.5 ; 
 squirrelClassFunction . freeDown = false ; 
 squirrelClassFunction . freeDown2 = false ; 
 squirrelClassFunction . freeLeft = false ; 
 squirrelClassFunction . freeRight = false ; 
 squirrelClassFunction . freeUp = false ; 
 squirrelClassFunction . nowInWater = false ; 
 squirrelClassFunction . an =  { stand : null , standB :  [ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 238 , 238 , 238 , 238 , 238 , 238 , 238 , 238 , 0 , 0 , 0 , 0 , 180 , 181 , 180 , 181 , 180 , 181 , 180 , 181 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 6 , 87 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 175 , 87 , 6 ]  , standN :  [ 1 , 2 , 3 , 4 ]  , standW :  [ 204 , 204 , 204 , 205 , 206 , 206 , 206 , 207 ]  , standHold :  [ 5 ]  , crouch :  [ 6 ]  , crouchHold :  [ 7 ]  , jump : null , jumpU :  [ 8 , 9 ]  , jumpT :  [ 10 , 11 ]  , fall : null , fallN :  [ 12 , 13 ]  , fallW :  [ 162 ]  , hurt : null , hurtLight :  [ 14 , 15 ]  , hurtHeavy :  [ 166 , 167 ]  , walk :  [ 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 ]  , run :  [ 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 ]  , shootAir :  [ 64 , 65 , 66 , 67 ]  , shootTop :  [ 68 , 69 , 70 , 71 ]  , climb :  [ 72 , 73 , 74 , 75 , 74 , 73 ]  , climb2 :  [ 76 , 77 ]  , attackAir :  [ 78 , 79 , 80 , 81 ]  , plantMine :  [ 82 , 83 , 84 , 85 , 86 , 87 ]  , attack : null , shootF1 :  [ 88 , 89 , 90 , 91 ]  , shootF2 :  [ 92 , 93 , 94 , 95 ]  , shootU1 :  [ 96 , 97 , 98 , 99 ]  , shootU2 :  [ 100 , 101 , 102 , 103 ]  , shootUF1 :  [ 104 , 105 , 106 , 107 ]  , shootUF2 :  [ 108 , 109 , 110 , 111 ]  , shootDF1 :  [ 112 , 113 , 114 , 115 ]  , shootDF2 :  [ 116 , 117 , 118 , 119 ]  , shootAU1 :  [ 120 , 121 , 122 , 123 ]  , shootAU2 :  [ 124 , 125 , 126 , 127 ]  , shootAD1 :  [ 128 , 129 , 130 , 131 ]  , shootAD2 :  [ 132 , 133 , 134 , 135 ]  , attackD :  [ 136 , 137 , 138 , 139 ]  , attackU :  [ 140 , 141 , 142 , 143 ]  , attackSpin :  [ 144 , 145 , 146 , 147 ]  , shootMad :  [ 148 , 149 , 150 , 151 ]  , jumpR :  [ 152 , 153 , 154 , 155 , 156 , 157 , 158 , 159 ]  , ride :  [ 160 , 161 ]  , wall :  [ 162 , 163 ]  , skid :  [ 164 , 165 ]  , float :  [ 168 , 169 ]  , swim :  [ 170 , 171 , 172 , 173 ]  , sit : null , sitChair :  [ 174 ]  , sitGround :  [ 175 ]  , lift :  [ 176 , 177 ]  , door :  [ 178 , 179 ]  , scratch :  [ 180 , 181 ]  , morphIn :  [ 182 , 183 ]  , morphOut :  [ 183 , 182 ]  , ball :  [ 184 , 185 , 186 , 187 ]  , ballV :  [ 188 , 189 , 190 , 191 ]  , ballD :  [ 192 , 193 , 194 , 195 ]  , ballH :  [ 196 , 197 , 198 , 199 ]  , ballT :  [ 200 , 201 , 202 , 203 ]  , climbWall :  [ 208 , 209 , 210 , 211 , 210 , 209 ]  , ledge :  [ 212 ]  , hang :  [ 213 ]  , shootHang :  [ 214 , 215 , 216 , 217 ]  , monkey :  [ 218 , 219 , 220 , 221 , 222 , 223 ]  , shootClimb :  [ 224 , 225 , 226 , 227 ]  , armShoot :  [ 228 , 229 , 230 , 231 ]  , landing :  [ 232 , 233 , 234 , 235 ]  , wave :  [ 236 , 237 ]  , pick :  [ 238 , 239 ]  , moonwalk :  [ 240 , 241 , 242 , 243 , 244 , 245 , 246 , 247 ]  , win :  [ 239 ]  , crawl :  [ 249 , 250 , 251 , 252 , 251 , 250 ]  }  ; 
 squirrelClassFunction . animOffset = 0.0 ; 
 squirrelClassFunction . sprite = sprMidi ; 
 squirrelClassFunction . aura = sprMidiAura ; 
 squirrelClassFunction . auraColor = 0xffffffff ; 
 squirrelClassFunction . nutSprite = sprNutBomb ; 
 squirrelClassFunction . nutSprite2 = sprNutBomb2 ; 
 squirrelClassFunction . nutSprite3 = sprNutBomb3 ; 
 squirrelClassFunction . wingNutSprite = sprWingNut ; 
 squirrelClassFunction . mineSprite = sprNutMine ; 
 squirrelClassFunction . topSprite = sprTopNut ; 
 squirrelClassFunction . shapeGrip = null ; 
 squirrelClassFunction . damageMultN =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 squirrelClassFunction . damageMultF =  { normal : 1.0 , fire : 0.5 , ice : 2.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 squirrelClassFunction . damageMultI =  { normal : 1.0 , fire : 2.0 , ice : 0.5 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 squirrelClassFunction . damageMultE =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 0.5 , air : 2.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 squirrelClassFunction . damageMultA =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 2.0 , air : 0.5 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 squirrelClassFunction . damageMultS =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 0.5 , water : 2.0 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 squirrelClassFunction . damageMultW =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 2.0 , water : 0.5 , light : 1.0 , dark : 1.0 , cut : 1.5 , blast : 0.5 }  ; 
 squirrelClassFunction . damageMultL =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 0.5 , dark : 2.0 , cut : 1.5 , blast : 0.5 }  ; 
 squirrelClassFunction . damageMultD =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 2.0 , dark : 0.5 , cut : 1.5 , blast : 0.5 }  ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Player;  return squirrelClassFunction; })()) ; 
DeadMidi =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . vspeed =  - 4.0 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . timer = 150 ; 
 returnVal . sprite = null ; 
 returnVal . frame = 0.0 ; 
 returnVal . anim = null ; 
 returnVal . playerNum = 0 ; 
 returnVal . flip = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if (  ! gvPlayer &&  ! gvPlayer2 ) stopMusic (  )  ; 
 
 playSound ( sndDie , 0 )  ; 
sprite = _arr [ 0 ]  ; 
anim = _arr [ 1 ]  ; 
playerNum = _arr [ 2 ]  ; 
flip = _arr [ 3 ]  ; 
 if ( flip ) hspeed = 0.75 ; 
 
  else hspeed =  - 0.75 ; 
 
  } ;  returnVal . run = function (  ) { vspeed += 0.1 ; 
 if ( timer > 120 )  { 
 y += vspeed ; 
x += hspeed ; 
 } 
  
 timer --  ; 
 if ( timer == 0 )  { 
  if (  ! gvPlayer &&  ! gvPlayer2 )  { 
 startPlay ( gvMap . file , true , true )  ; 
 if ( game . check == false )  { 
 gvIGT = 0 ; 
 } 
  
  } 
  
  if ( game . check == false || game . difficulty > 0 )  { 
  if ( playerNum == 1 ) game . ps . weapon = "normal" ; 
 
  if ( playerNum == 2 ) game . ps2 . weapon = "normal" ; 
 
  } 
  
  } 
  
  } ;  returnVal . draw = function (  ) {  if ( timer > 120 )  { 
 drawSprite ( sprite , anim [ min (  ( 150 - timer )  / 15 , 1 )  ]  , x - camx , y - camy , 0 , flip )  ; 
drawLight ( sprLightBasic , 0 , x - camx , y - camy )  ; 
 } 
  
  else  if ( timer > 30 )  for (  var i = 0 ;
 i < 8 ; i ++  )  { 
 drawSprite ( sprExplodeF , wrap (  ( getFrames (  )  / 4 )  + i , 1 , 4 )  , x + lendirX (  ( 120 - timer )  ,  ( i * 45 )  + 22.5 )  - camx , y + lendirY (  ( 120 - timer )  ,  ( i * 45 )  + 22.5 )  - camy , 0 , randInt ( 4 )  , min ( 1 , float ( timer - 30.0 )  / 30.0 )  , min ( 1 , float ( timer - 30.0 )  / 30.0 )  )  ; 
drawLight ( sprLightFire , 0 , x + lendirX (  ( 120 - timer )  ,  ( i * 45 )  + 22.5 )  - camx , y + lendirY (  ( 120 - timer )  ,  ( i * 45 )  + 22.5 )  - camy , 0 , 0 , min ( 0.3 + abs ( sin (  ( getFrames (  )  +  ( i * 45 )  )  / 8.0 )  )  * 0.2 , float ( timer - 30.0 )  / 30.0 )  , min ( 0.3 + abs ( sin (  ( getFrames (  )  +  ( i * 45 )  )  / 8.0 )  )  * 0.2 , float ( timer - 30.0 )  / 30.0 )  )  ; 
drawSprite ( sprExplodeF , wrap (  ( getFrames (  )  / 4 )  + i + 2 , 1 , 4 )  , x + lendirX (  ( 120 - timer )  * 0.75 ,  ( i * 45 )  )  - camx , y + lendirY (  ( 120 - timer )  * 0.75 ,  ( i * 45 )  )  - camy , 0 , randInt ( 4 )  , min ( 1 , float ( timer - 30.0 )  / 30.0 )  , min ( 1 , float ( timer - 30.0 )  / 30.0 )  )  ; 
drawLight ( sprLightFire , 0 , x + lendirX (  ( 120 - timer )  * 0.75 ,  ( i * 45 )  )  - camx , y + lendirY (  ( 120 - timer )  * 0.75 ,  ( i * 45 )  )  - camy , 0 , 0 , min ( 0.3 + abs ( sin (  ( getFrames (  )  +  ( i * 45 )  + 22.5 )  / 8.0 )  )  * 0.2 , float ( timer - 30.0 )  / 30.0 )  , min ( 0.3 + abs ( sin (  ( getFrames (  )  +  ( i * 45 )  + 22.5 )  / 8.0 )  )  * 0.2 , float ( timer - 30.0 )  / 30.0 )  )  ; 
 } 
  
  
  } ;  returnVal . _typeof = function (  ) {  return "DeadPlayer" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . vspeed =  - 4.0 ; 
 squirrelClassFunction . hspeed = 0.0 ; 
 squirrelClassFunction . timer = 150 ; 
 squirrelClassFunction . sprite = null ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . anim = null ; 
 squirrelClassFunction . playerNum = 0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
Kiki =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Midi ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . sprite = sprKiki ; 
 returnVal . aura = sprKikiAura ; 
 returnVal . auraColor = 0xffffffff ; 
 returnVal . nutSprite = sprCakeBomb ; 
 returnVal . nutSprite2 = sprCakeBomb2 ; 
 returnVal . nutSprite3 = sprCakeBomb3 ; 
 returnVal . wingNutSprite = sprWingCake ; 
 returnVal . mineSprite = sprCakeMine ; 
 returnVal . topSprite = sprTopCake ; 
 
 with ( returnVal ) { 
  returnVal . _typeof = function (  ) {  return "Kiki" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . sprite = sprKiki ; 
 squirrelClassFunction . aura = sprKikiAura ; 
 squirrelClassFunction . auraColor = 0xffffffff ; 
 squirrelClassFunction . nutSprite = sprCakeBomb ; 
 squirrelClassFunction . nutSprite2 = sprCakeBomb2 ; 
 squirrelClassFunction . nutSprite3 = sprCakeBomb3 ; 
 squirrelClassFunction . wingNutSprite = sprWingCake ; 
 squirrelClassFunction . mineSprite = sprCakeMine ; 
 squirrelClassFunction . topSprite = sprTopCake ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Midi;  return squirrelClassFunction; })()) ; 



}; 
