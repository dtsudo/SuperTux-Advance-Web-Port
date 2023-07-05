if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/enemies.nut'] = function () { 


Enemy =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . health = 1.0 ; 
 returnVal . active = false ; 
 returnVal . frozen = 0 ; 
 returnVal . freezeTime = 600 ; 
 returnVal . minFreezeTime = 0 ; 
 returnVal . freezeSprite =  - 1 ; 
 returnVal . icebox =  - 1 ; 
 returnVal . nocount = false ; 
 returnVal . damageMult =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 , stomp : 1.0 , star : 10.0 }  ; 
 returnVal . blinking = 0.0 ; 
 returnVal . blinkSpeed = 1.0 ; 
 returnVal . blinkMax = 10.0 ; 
 returnVal . touchDamage = 0.0 ; 
 returnVal . element = "normal" ; 
 returnVal . sharpTop = false ; 
 returnVal . sharpSide = false ; 
 returnVal . held = false ; 
 returnVal . squish = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) {  if ( active )  { 
  baseMethods . run  (  )  ; 
 if ( frozen > 0 )  { 
 frozen --  ; 
 if ( floor ( frozen / 4 )  % 2 == 0 && frozen < 60 ) drawSpriteZ ( 4 , freezeSprite , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSpriteZ ( 4 , freezeSprite , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  if ( actor . rawin ( "WeaponEffect" )  &&  ! blinking )  {     var foreachOutput1 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  { 
  if ( i . alignment == 2 ) continue ; 
 
  if ( i . owner == id ) continue ; 
 
  if ( hitTest ( shape , i . shape )  )  { 
  if ( checkActor ( i . owner )  ) getHurt ( actor [ i . owner ]  , i . power , i . element , i . cut , i . blast )  ; 
 
  else getHurt ( 0 , i . power , i . element , i . cut , i . blast )  ; 
 
  if ( i . piercing == 0 ) deleteActor ( i . id )  ; 
 
  else i . piercing --  ; 
 
  } 
  
  } 
     }  }  
  if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  &&  ! frozen )  { 
  if ( gvPlayer . invincible > 0 ) hurtInvinc (  )  ; 
 
  else  if ( y > gvPlayer . y && vspeed < gvPlayer . vspeed && gvPlayer . canStomp && gvPlayer . placeFree ( gvPlayer . x , gvPlayer . y + 2 )  && blinking == 0 &&  ! sharpTop &&  ! gvPlayer . swimming )  { 
  if (  ! squish )  { 
  if ( getcon ( "jump" , "hold" )  ) gvPlayer . vspeed =  - 8.0 ; 
 
  else gvPlayer . vspeed =  - 4.0 ; 
 
  } 
  
 getHurt ( gvPlayer , 1 , "normal" , false , false , true )  ; 
 } 
  
  else  if ( gvPlayer . rawin ( "anSlide" )  && blinking == 0 &&  ! sharpSide )  { 
  if ( gvPlayer . anim == gvPlayer . anSlide ) getHurt ( gvPlayer , 1 , "normal" , false , false , false )  ; 
 
  else hurtPlayer ( gvPlayer )  ; 
 
  } 
  
  else hurtPlayer ( gvPlayer )  ; 
 
  
  
  } 
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( hitTest ( shape , gvPlayer2 . shape )  &&  ! frozen )  { 
  if ( gvPlayer2 . invincible > 0 ) hurtInvinc (  )  ; 
 
  else  if ( y > gvPlayer2 . y && vspeed < gvPlayer2 . vspeed && gvPlayer2 . canStomp && gvPlayer2 . placeFree ( gvPlayer2 . x , gvPlayer2 . y + 2 )  && blinking == 0 &&  ! sharpTop &&  ! gvPlayer2 . swimming )  { 
  if (  ! squish )  { 
  if ( getcon ( "jump" , "hold" )  ) gvPlayer2 . vspeed =  - 8.0 ; 
 
  else gvPlayer2 . vspeed =  - 4.0 ; 
 
  } 
  
 getHurt ( gvPlayer2 , 1 , "normal" , false , false , true )  ; 
 } 
  
  else  if ( gvPlayer2 . rawin ( "anSlide" )  && blinking == 0 &&  ! sharpSide )  { 
  if ( gvPlayer2 . anim == gvPlayer2 . anSlide ) getHurt ( gvPlayer2 , 1 , "normal" , false , false , false )  ; 
 
  else hurtPlayer ( gvPlayer2 )  ; 
 
  } 
  
  else hurtPlayer ( gvPlayer2 )  ; 
 
  
  
  } 
  
  } 
  
  if ( blinking > 0 ) blinking -= blinkSpeed ; 
 
  if ( blinking < 0 ) blinking = 0 ; 
 
  } 
  
  else  { 
  if ( inDistance2 ( x , y , camx +  ( screenW (  )  / 2 )  , camy +  ( screenH (  )  / 2 )  , 240 )  ) active = true ; 
 
  } 
  
  } ;  returnVal . hurtInvinc = function (  ) { mapDeleteSolid ( icebox )  ; 
newActor ( Poof , x , y )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 } ;  returnVal . die = function (  ) { mapDeleteSolid ( icebox )  ; 
 if ( frozen ) newActor ( IceChunks , x , y )  ; 
 
 frozen = 0 ; 
deleteActor ( id )  ; 
 if (  ! nocount ) game . enemies ++  ; 
 
  } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( blinking > 0 )  return ; 
  
  var damage = _mag * damageMult [ _element ]  ;
  if ( _cut ) damage *= damageMult [ "cut" ]  ; 
 
  if ( _blast ) damage *= damageMult [ "blast" ]  ; 
 
  if ( _stomp ) damage *= damageMult [ "stomp" ]  ; 
 
 health -= damage ; 
 if ( damage > 0 ) blinking = blinkMax ; 
 
  if ( health <= 0 )  { 
 frozen = 0 ; 
mapDeleteSolid ( icebox )  ; 
die (  )  ; 
 return ; 
  } 
  
  if ( _element == "ice" ) frozen = minFreezeTime +  ( freezeTime * damageMult [ "ice" ]  )  ; 
 
  if ( _element == "fire" )  { 
 newActor ( Flame , x , y )  ; 
popSound ( sndFlame , 0 )  ; 
 } 
  
 blinking = blinkMax ; 
 } ;  returnVal . hurtPlayer = function ( target ) { target . hurt = touchDamage * target . damageMult [ element ]  ; 
 } ;  returnVal . destructor = function (  ) { mapDeleteSolid ( icebox )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . health = 1.0 ; 
 squirrelClassFunction . active = false ; 
 squirrelClassFunction . frozen = 0 ; 
 squirrelClassFunction . freezeTime = 600 ; 
 squirrelClassFunction . minFreezeTime = 0 ; 
 squirrelClassFunction . freezeSprite =  - 1 ; 
 squirrelClassFunction . icebox =  - 1 ; 
 squirrelClassFunction . nocount = false ; 
 squirrelClassFunction . damageMult =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 , stomp : 1.0 , star : 10.0 }  ; 
 squirrelClassFunction . blinking = 0.0 ; 
 squirrelClassFunction . blinkSpeed = 1.0 ; 
 squirrelClassFunction . blinkMax = 10.0 ; 
 squirrelClassFunction . touchDamage = 0.0 ; 
 squirrelClassFunction . element = "normal" ; 
 squirrelClassFunction . sharpTop = false ; 
 squirrelClassFunction . sharpSide = false ; 
 squirrelClassFunction . held = false ; 
 squirrelClassFunction . squish = false ; 
 return squirrelClassFunction; })()) ; 
DeadNME =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . sprite = 0 ; 
 returnVal . frame = 0 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . angle = 0.0 ; 
 returnVal . spin = 0 ; 
 returnVal . flip = 0 ; 
 returnVal . gravity = 0.2 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
vspeed =  - 3.0 ; 
 } ;  returnVal . run = function (  ) { vspeed += gravity ; 
x += hspeed ; 
y += vspeed ; 
angle += spin ; 
 if ( y > gvMap . h + 32 ) deleteActor ( id )  ; 
 
 drawSpriteEx ( sprite , frame , floor ( x - camx )  , floor ( y - camy )  , angle , flip , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . sprite = 0 ; 
 squirrelClassFunction . frame = 0 ; 
 squirrelClassFunction . hspeed = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . angle = 0.0 ; 
 squirrelClassFunction . spin = 0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . gravity = 0.2 ; 
 return squirrelClassFunction; })()) ; 
Deathcap =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = false ; 
 returnVal . moving = false ; 
 returnVal . touchDamage = 2.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
smart = _arr ; 
 } ;  returnVal . routine = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! moving )  { 
  if ( gvPlayer && x > gvPlayer . x ) flip = true ; 
 
 moving = true ; 
 } 
  
  if (  ! squish )  { 
  if ( placeFree ( x , y + 1 )  ) vspeed += 0.1 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) die (  )  ; 
 
  if (  ! frozen )  { 
  if ( flip )  { 
  if ( placeFree ( x - 1 , y )  ) x -= 1.0 ; 
 
  else  if ( placeFree ( x - 2 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x - 1 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = false ; 
 
  
  
  if ( smart )  if ( placeFree ( x - 6 , y + 14 )  &&  ! placeFree ( x + 2 , y + 14 )  ) flip = false ; 
 
  
  if ( x <= 0 ) flip = false ; 
 
  } 
  
  else  { 
  if ( placeFree ( x + 1 , y )  ) x += 1.0 ; 
 
  else  if ( placeFree ( x + 1 , y - 1 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x + 2 , y - 2 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = true ; 
 
  
  
  if ( smart )  if ( placeFree ( x + 6 , y + 14 )  &&  ! placeFree ( x - 2 , y + 14 )  ) flip = true ; 
 
  
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
  } 
  
  if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
  if ( smart ) drawSpriteEx ( sprGradcap , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprDeathcap , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else  { 
  if ( icebox !=  - 1 )  { 
 newActor ( IceChunks , x , y )  ; 
mapDeleteSolid ( icebox )  ; 
icebox =  - 1 ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  else flip = false ; 
 
  
  } 
  
  if ( smart ) drawSpriteEx ( sprGradcap , wrap ( getFrames (  )  / 8 , 0 , 3 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprDeathcap , wrap ( getFrames (  )  / 8 , 0 , 3 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  } 
  
  } 
  
  else  { 
 squishTime += 0.025 ; 
 if ( squishTime >= 1 ) die (  )  ; 
 
  if ( smart ) drawSpriteEx ( sprGradcap , floor ( 4.8 + squishTime )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprDeathcap , floor ( 4.8 + squishTime )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  } 
  
  if (  ! squish ) shape . setPos ( x , y )  ; 
 
 setDrawColor ( 0xff0000ff )  ; 
 if ( debug ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . hurtPlayer = function ( target ) {  if ( blinking )  return ; 
  
  if ( squish )  return ; 
  
  baseMethods . hurtPlayer  ( target )  ; 
 } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( squish )  return ; 
  
  if ( _blast )  { 
 hurtblast (  )  ; 
 return ; 
  } 
  
  if ( _element == "fire" )  { 
 newActor ( Flame , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  return ; 
  } 
  
  if ( _element == "ice" )  { 
 frozen = 600 ; 
 return ; 
  } 
  
  if ( gvPlayer . rawin ( "anSlide" )  )  { 
  if ( gvPlayer . anim == gvPlayer . anSlide && hitTest ( shape , gvPlayer . shape )  )  { 
  var c = newActor ( DeadNME , x , y )  ;
  if ( smart ) actor [ c ]  . sprite = sprGradcap ; 
 
  else actor [ c ]  . sprite = sprDeathcap ; 
 
 actor [ c ]  . vspeed = min (  - fabs ( gvPlayer . hspeed )  ,  - 4 )  ; 
actor [ c ]  . hspeed =  ( gvPlayer . hspeed / 16 )  ; 
actor [ c ]  . spin =  ( gvPlayer . hspeed * 7 )  ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 return ; 
  } 
  
  } 
  
  if (  ! _stomp )  { 
  var c = newActor ( DeadNME , x , y )  ;
  if ( smart ) actor [ c ]  . sprite = sprGradcap ; 
 
  else actor [ c ]  . sprite = sprDeathcap ; 
 
 actor [ c ]  . vspeed =  - 4.0 ; 
actor [ c ]  . spin = 4 ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } 
  
  else popSound ( sndSquish , 0 )  ; 
 
 squish = true ; 
blinking = 120 ; 
 } ;  returnVal . hurtblast = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
  if ( smart ) actor [ c ]  . sprite = sprGradcap ; 
 
  else actor [ c ]  . sprite = sprDeathcap ; 
 
 actor [ c ]  . vspeed =  - 4 ; 
actor [ c ]  . hspeed =  ( 4 / 16 )  ; 
actor [ c ]  . spin =  ( 4 * 7 )  ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 if ( icebox !=  - 1 ) mapDeleteSolid ( icebox )  ; 
 
  } ;  returnVal . hurtFire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "Deathcap" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = false ; 
 squirrelClassFunction . squish = false ; 
 squirrelClassFunction . squishTime = 0.0 ; 
 squirrelClassFunction . smart = false ; 
 squirrelClassFunction . moving = false ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 return squirrelClassFunction; })()) ; 
PipeSnake =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . ystart = 0 ; 
 returnVal . timer = 30 ; 
 returnVal . up = false ; 
 returnVal . flip = 1 ; 
 returnVal . touchDamage = 2.0 ; 
 returnVal . sharpTop = true ; 
 returnVal . damageMult =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 , stomp : 0.0 }  ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
ystart = y ; 
shape = Rec ( x , y , 8 , 12 , 0 )  ; 
timer =  ( x * y )  % 60 ; 
flip = _arr ; 
 } ;  returnVal . physics = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( up && y > ystart - 32 &&  ! frozen ) y -= 2 ; 
 
  if (  ! up && y < ystart &&  ! frozen ) y += 2 ; 
 
 timer --  ; 
 if ( timer <= 0 )  { 
 up =  ! up ; 
timer = 60 ; 
 } 
  
 shape . setPos ( x , y + 16 )  ; 
 if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
  if ( flip == 1 ) drawSpriteEx ( sprSnake , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , 0 , 1 , 1 , 1 )  ; 
 
  if ( flip ==  - 1 ) drawSpriteEx ( sprSnake , 0 , floor ( x - camx )  , floor ( y - camy )  + 32 , 0 , 2 , 1 , 1 , 1 )  ; 
 
  if ( flip == 1 ) drawSpriteEx ( sprSnake , 1 , floor ( x - camx )  , floor ( y - camy )  , 0 , 0 , 1 , 1 , 1 )  ; 
 
  if ( flip ==  - 1 ) drawSpriteEx ( sprSnake , 1 , floor ( x - camx )  , floor ( y - camy )  - 8 , 0 , 2 , 1 , 1 , 1 )  ; 
 
  if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapTall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy + 16 )  ; 
 
  else drawSprite ( sprIceTrapTall , 0 , x - camx , y - camy + 16 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapTall , 0 , x - camx , y - camy + 16 )  ; 
 
  } 
  
  else  { 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
icebox =  - 1 ; 
 } 
  
  if ( flip == 1 ) drawSpriteEx ( sprSnake , getFrames (  )  / 8 , floor ( x - camx )  , floor ( y - camy )  , 0 , 0 , 1 , 1 , 1 )  ; 
 
  if ( flip ==  - 1 ) drawSpriteEx ( sprSnake , getFrames (  )  / 8 , floor ( x - camx )  , floor ( y - camy )  + 32 , 0 , 2 , 1 , 1 , 1 )  ; 
 
  } 
  
  if ( debug )  { 
 setDrawColor ( 0x008000ff )  ; 
shape . draw (  )  ; 
 } 
  
  } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if (  ! gvPlayer )  return ; 
  
  if ( _mag == 0 )  return ; 
  
  if ( _stomp )  return ; 
  
  if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  )  { 
  var didhurt = false ;
  if ( gvPlayer . rawin ( "anSlide" )  )  if ( gvPlayer . anim == gvPlayer . anSlide ) didhurt = true ; 
 
  
  if ( gvPlayer . rawin ( "anStomp" )  )  if ( gvPlayer . anim == gvPlayer . anStomp ) didhurt = true ; 
 
  
  if (  ! didhurt ) hurtPlayer ( gvPlayer )  ; 
 
  } 
  
  if ( gvPlayer2 && hitTest ( shape , gvPlayer2 . shape )  )  { 
  var didhurt = false ;
  if ( gvPlayer2 . rawin ( "anSlide" )  )  if ( gvPlayer2 . anim == gvPlayer2 . anSlide ) didhurt = true ; 
 
  
  if ( gvPlayer2 . rawin ( "anStomp" )  )  if ( gvPlayer2 . anim == gvPlayer2 . anStomp ) didhurt = true ; 
 
  
  if (  ! didhurt ) hurtPlayer ( gvPlayer2 )  ; 
 
  } 
  
  if ( _element == "fire" ) hurtFire (  )  ; 
 
  else  if ( _element == "ice" ) hurtIce (  )  ; 
 
  else  if ( _blast ) hurtBlast (  )  ; 
 
  else  { 
 newActor ( Poof , x , ystart - 8 )  ; 
newActor ( Poof , x , ystart + 8 )  ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  } 
  
  
  
  } ;  returnVal . hurtBlast = function (  ) { hurtInvinc (  )  ; 
 } ;  returnVal . hurtInvinc = function (  ) { newActor ( Poof , x , ystart - 6 )  ; 
newActor ( Poof , x , ystart + 8 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  } ;  returnVal . hurtFire = function (  ) { newActor ( Flame , x , ystart - 6 )  ; 
newActor ( Flame , x , ystart + 8 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "Snake" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . ystart = 0 ; 
 squirrelClassFunction . timer = 30 ; 
 squirrelClassFunction . up = false ; 
 squirrelClassFunction . flip = 1 ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 squirrelClassFunction . sharpTop = true ; 
 squirrelClassFunction . damageMult =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 , stomp : 0.0 }  ; 
 return squirrelClassFunction; })()) ; 
OrangeBounce =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = false ; 
 returnVal . touchDamage = 2.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
vspeed =  - 3.0 ; 
 } ;  returnVal . physics = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if ( gvPlayer && hspeed == 0 )  { 
  if ( x > gvPlayer . x ) hspeed =  - 0.5 ; 
 
  else hspeed = 0.5 ; 
 
  } 
  
  if (  ! placeFree ( x , y + 1 )  ) vspeed =  - 3.0 ; 
 
  if (  ! placeFree ( x + 2 , y - 2 )  &&  ! placeFree ( x + 2 , y )  ) hspeed =  - fabs ( hspeed )  ; 
 
  if (  ! placeFree ( x - 2 , y - 2 )  &&  ! placeFree ( x - 2 , y )  ) hspeed = fabs ( hspeed )  ; 
 
 vspeed += 0.1 ; 
 if ( hspeed > 0 ) flip = 0 ; 
 
  else flip = 1 ; 
 
  if (  ! frozen )  { 
  if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
drawSpriteEx ( sprOrangeBounce , getFrames (  )  / 8 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
 drawSpriteEx ( sprOrangeBounce , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else  { 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
icebox =  - 1 ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  else flip = false ; 
 
  
  } 
  
  } 
  
  } 
  
  if ( x < 0 ) hspeed = fabs ( hspeed )  ; 
 
  if ( x > gvMap . w ) hspeed =  - fabs ( hspeed )  ; 
 
  } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( _stomp || _element == "normal" )  { 
 newActor ( Poof , x , y )  ; 
die (  )  ; 
popSound ( sndSquish , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  return ; 
  } 
  
  if ( _element == "ice" )  { 
 hurtIce (  )  ; 
 return ; 
  } 
  
  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 newActor ( Poof , x , y )  ; 
die (  )  ; 
popSound ( sndSquish , 0 )  ; 
 if ( keyDown ( config . key . jump )  ) gvPlayer . vspeed =  - 8 ; 
 
  else gvPlayer . vspeed =  - 4 ; 
 
  } 
  
  
  if ( _element == "fire" ) hurtFire (  )  ; 
 
  if ( _element == "ice" ) hurtIce (  )  ; 
 
  if ( _blast ) hurtBlast (  )  ; 
 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  } ;  returnVal . hurtFire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
die (  )  ; 
stopSound ( sndFlame )  ; 
playSound ( sndFlame , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ;  returnVal . hurtBlast = function (  ) { hurtInvinc (  )  ; 
 } ;  returnVal . hurtInvinc = function (  ) { newActor ( Poof , x , y )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "OrangeBounce" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = false ; 
 squirrelClassFunction . squish = false ; 
 squirrelClassFunction . squishTime = 0.0 ; 
 squirrelClassFunction . smart = false ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 return squirrelClassFunction; })()) ; 
CarlBoom =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . burnt = false ; 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . touchDamage = 2.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 , 0 , 1 )  ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  
  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if ( placeFree ( x , y + 1 )  &&  ! held ) vspeed += 0.1 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if (  ! squish )  { 
  if ( y > gvMap . h + 8 ) die (  )  ; 
 
  if (  ! frozen )  { 
  if ( flip )  { 
  if ( placeFree ( x - 1 , y )  ) x -= 1.0 ; 
 
  else  if ( placeFree ( x - 2 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x - 1 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = false ; 
 
  
  
  if ( placeFree ( x - 6 , y + 14 )  ) flip = false ; 
 
  if ( x <= 0 ) flip = false ; 
 
  } 
  
  else  { 
  if ( placeFree ( x + 1 , y )  ) x += 1.0 ; 
 
  else  if ( placeFree ( x + 1 , y - 1 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x + 2 , y - 2 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = true ; 
 
  
  
  if ( placeFree ( x + 6 , y + 14 )  ) flip = true ; 
 
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
  } 
  
  if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
 drawSpriteEx ( sprCarlBoom , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else  { 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
icebox =  - 1 ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  else flip = false ; 
 
  
  } 
  
 drawSpriteEx ( sprCarlBoom , wrap ( getFrames (  )  / 8 , 0 , 3 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 } 
  
  } 
  
  else  { 
  if ( held ) squishTime += 0.1 ; 
 
  else squishTime += 1.5 ; 
 
 frame += 0.002 * squishTime ; 
drawSpriteEx ( sprCarlBoom , wrap ( frame , 4 , 7 )  , x - camx , y - camy , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( getFrames (  )  % 20 == 0 )  { 
  var c ;
  if (  ! flip ) c = actor [ newActor ( FlameTiny , x - 6 , y - 8 )  ]  ; 
 
  else c = actor [ newActor ( FlameTiny , x + 6 , y - 8 )  ]  ; 
 
 c . vspeed =  - 0.1 ; 
c . hspeed = randFloat ( 0.2 )  - 0.1 ; 
 } 
  
  if ( frozen )  { 
 squish = false ; 
squishTime = 0 ; 
 } 
  
  if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  && getcon ( "shoot" , "hold" )  &&  ( gvPlayer . holding == 0 || gvPlayer . holding == id )  && hspeed == 0 )  { 
 held = true ; 
gvPlayer . holding = id ; 
 } 
  
  else  if (  ! inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 16 )  )  { 
 held = false ; 
gvPlayer . holding = 0 ; 
 } 
  
  
  if ( gvPlayer . rawin ( "anSlide" )  && gvPlayer . anim == gvPlayer . anSlide )  { 
 held = false ; 
gvPlayer . holding = 0 ; 
 } 
  
  if ( held )  { 
 y = gvPlayer . y ; 
flip = gvPlayer . flip ; 
 if ( gvPlayer . flip == 0 ) x = gvPlayer . x + 10 + gvPlayer . hspeed ; 
 
  else  if ( gvPlayer . flip == 1 ) x = gvPlayer . x - 10 + gvPlayer . hspeed ; 
 
  
 y = gvPlayer . y + gvPlayer . vspeed ; 
 } 
  
  if ( gvPlayer . rawin ( "anSlide" )  && gvPlayer . anim == gvPlayer . anSlide && held )  { 
 gvPlayer . holding = 0 ; 
 if (  ! placeFree ( x , y )  )  { 
  var escapedir =  squirrelThreeWaysCompare ( gvPlayer . x , x )  ;
  while (  ! placeFree ( x , y )  ) x += escapedir ; 
 
  } 
  
 held = false ; 
 } 
  
  if ( gvPlayer . rawin ( "anClimb" )  && gvPlayer . anim == gvPlayer . anClimb && held )  { 
 gvPlayer . holding = 0 ; 
 if (  ! placeFree ( x , y )  )  { 
  var escapedir =  squirrelThreeWaysCompare ( gvPlayer . x , x )  ;
  while (  ! placeFree ( x , y )  ) x += escapedir ; 
 
  } 
  
 held = false ; 
 } 
  
  } 
  
  if (  ! getcon ( "shoot" , "hold" )  )  { 
  if ( getcon ( "shoot" , "release" )  && getcon ( "up" , "hold" )  && held ) vspeed =  - 2.0 ; 
 
  if ( held && gvPlayer )  { 
 gvPlayer . holding = 0 ; 
x += gvPlayer . hspeed * 2 ; 
 if (  ! getcon ( "down" , "hold" )  ) hspeed =  - 2.0 *  (  squirrelThreeWaysCompare ( gvPlayer . x , x )  )  ; 
 
  if (  ! placeFree ( x , y )  )  { 
  var escapedir =  squirrelThreeWaysCompare ( gvPlayer . x , x )  ;
  while (  ! placeFree ( x , y )  ) x += escapedir ; 
 
  } 
  
  } 
  
 held = false ; 
 } 
  
  if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  else  if ( placeFree ( x + hspeed , y - 2 )  )  { 
 x += hspeed ; 
y -= 1.0 ; 
 } 
  
  
  if ( placeFree ( x , y + 1 )  ) friction = 0.0 ; 
 
  else friction = 0.1 ; 
 
  if ( fabs ( hspeed )  < 0.1 ) hspeed = 0.0 ; 
 
  if ( squishTime >= 150 )  { 
 die (  )  ; 
fireWeapon ( ExplodeF , x , y , 0 , id )  ; 
 if ( gvPlayer )  if ( gvPlayer . holding == id ) gvPlayer . holding = 0 ; 
 
  
  } 
  
  } 
  
 shape . setPos ( x , y )  ; 
setDrawColor ( 0xff0000ff )  ; 
 if ( debug ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . hurtPlayer = function ( target ) {  if ( squish )  return ; 
  
  baseMethods . hurtPlayer  ( target )  ; 
 } ;  returnVal . hurtBlast = function (  ) {  if ( squish )  return ; 
  
  if ( frozen ) frozen = 0 ; 
 
 popSound ( sndFizz , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
 squish = true ; 
 } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if (  ! active )  return ; 
  
  if ( held )  return ; 
  
  if ( _element == "ice" )  { 
 hurtIce (  )  ; 
 return ; 
  } 
  
  else  if ( _element == "fire" || _blast )  { 
 hurtFire (  )  ; 
 return ; 
  } 
  
  else  if ( squish )  return ; 
  
  
  
 popSound ( sndFizz , 0 )  ; 
 if ( _stomp )  { 
  if ( getcon ( "jump" , "hold" )  ) gvPlayer . vspeed =  - 8 ; 
 
  else gvPlayer . vspeed =  - 4 ; 
 
  if ( gvPlayer . anim == gvPlayer . anJumpT || gvPlayer . anim == gvPlayer . anFall )  { 
 gvPlayer . anim = gvPlayer . anJumpU ; 
gvPlayer . frame = gvPlayer . anJumpU [ 0 ]  ; 
 } 
  
  } 
  
  if ( gvPlayer &&  ( (gvPlayer["anSlide"] !== undefined) )  && gvPlayer . anim == gvPlayer . anSlide )  { 
 vspeed =  - abs ( gvPlayer . hspeed )  / 2.0 ; 
hspeed =  squirrelThreeWaysCompare ( gvPlayer . hspeed , 0 )  ; 
 } 
  
 squish = true ; 
 } ;  returnVal . hurtFire = function (  ) {  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  if (  ! burnt )  { 
 fireWeapon ( ExplodeF , x , y - 1 , 2 , id )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
burnt = true ; 
 } 
  
  } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "CarlBoom" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . burnt = false ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = false ; 
 squirrelClassFunction . squish = false ; 
 squirrelClassFunction . squishTime = 0.0 ; 
 squirrelClassFunction . hspeed = 0.0 ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 return squirrelClassFunction; })()) ; 
BlueFish =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . biting = false ; 
 returnVal . flip = 0 ; 
 returnVal . touchDamage = 2.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 6 , 0 )  ; 
hspeed = 0.5 ; 
 } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! placeFree ( x +  ( hspeed * 2 )  , y )  ) hspeed =  - hspeed ; 
 
  if (  ! placeFree ( x , y +  ( vspeed * 2 )  )  ) vspeed =  - vspeed ; 
 
 flip =  ( hspeed < 0 )  . tointeger (  )  ; 
timer --  ; 
 if ( timer <= 0 )  { 
 timer = 240 ; 
vspeed =  - 0.5 + randFloat ( 1 )  ; 
 } 
  
  if (  ! inWater ( x , y )  ) vspeed += 0.1 ; 
 
 vspeed *= 0.99 ; 
 if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  ) biting = true ; 
 
  
  if ( frame >= 4 )  { 
 biting = false ; 
frame = 0.0 ; 
 } 
  
  if ( biting )  { 
 drawSpriteEx ( sprBlueFish , 4 + frame , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
frame += 0.125 ; 
 } 
  
  else drawSpriteEx ( sprBlueFish , wrap ( getFrames (  )  / 16 , 0 , 3 )  , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 
  if ( y > gvMap . h )  { 
  if ( vspeed > 0 ) vspeed = 0 ; 
 
 vspeed -= 0.1 ; 
 } 
  
  if ( x > gvMap . w ) hspeed =  - 1.0 ; 
 
  if ( x < 0 ) hspeed = 1.0 ; 
 
  if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
 shape . setPos ( x , y )  ; 
 } 
  
  } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( gvPlayer . rawin ( "anSlide" )  )  if ( gvPlayer . anim == gvPlayer . anSlide && game . weapon == 4 ) hurtFire (  )  ; 
 
  
  if (  ! _stomp ||  ! _by . swimming ) hurtFire (  )  ; 
 
  } ;  returnVal . hurtFire = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprDeadFish ; 
actor [ c ]  . vspeed =  - 0.5 ; 
actor [ c ]  . flip = flip ; 
actor [ c ]  . hspeed = hspeed ; 
 if ( flip == 1 ) actor [ c ]  . spin =  - 1 ; 
 
  else actor [ c ]  . spin = 1 ; 
 
 actor [ c ]  . gravity = 0.02 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
game . enemies ++  ; 
newActor ( Poof , x + 8 , y )  ; 
newActor ( Poof , x - 8 , y )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "BlueFish" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . timer = 0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . biting = false ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 return squirrelClassFunction; })()) ; 
RedFish =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . biting = false ; 
 returnVal . flip = 0 ; 
 returnVal . touchDamage = 2.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 6 , 0 )  ; 
hspeed = 0.5 ; 
 } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! placeFree ( x +  ( hspeed * 2 )  , y )  ) hspeed =  - hspeed ; 
 
  if (  ! placeFree ( x , y +  ( vspeed * 2 )  )  ) vspeed =  - vspeed ; 
 
 flip =  ( hspeed < 0 )  . tointeger (  )  ; 
timer --  ; 
 if ( timer <= 0 )  { 
 timer = 240 ; 
vspeed =  - 0.5 + randFloat ( 1 )  ; 
 if ( hspeed == 0 ) hspeed = 1 ; 
 
  else hspeed *= 1 / fabs ( hspeed )  ; 
 
  } 
  
  if (  ! inWater ( x , y )  ) vspeed += 0.1 ; 
 
 vspeed *= 0.99 ; 
 if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  ) biting = true ; 
 
  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 128 )  && inWater ( x , y )  )  { 
 biting = true ; 
timer = 240 ; 
 if ( x < gvPlayer . x && hspeed < 2 ) hspeed += 0.02 ; 
 
  if ( x > gvPlayer . x && hspeed >  - 2 ) hspeed -= 0.02 ; 
 
  if ( y < gvPlayer . y && vspeed < 2 ) vspeed += 0.02 ; 
 
  if ( y > gvPlayer . y && vspeed >  - 2 ) vspeed -= 0.02 ; 
 
  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 32 )  )  { 
  if ( x < gvPlayer . x && hspeed < 2 ) hspeed += 0.02 ; 
 
  if ( x > gvPlayer . x && hspeed >  - 2 ) hspeed -= 0.02 ; 
 
  if ( y < gvPlayer . y && vspeed < 2 ) vspeed += 0.02 ; 
 
  if ( y > gvPlayer . y && vspeed >  - 2 ) vspeed -= 0.02 ; 
 
  } 
  
  } 
  
  } 
  
  if ( frame >= 4 )  { 
 biting = false ; 
frame = 0.0 ; 
 } 
  
  if ( biting )  { 
 drawSpriteEx ( sprRedFish , 4 + frame , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
frame += 0.125 ; 
 } 
  
  else drawSpriteEx ( sprRedFish , wrap ( getFrames (  )  / 16 , 0 , 3 )  , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 
  if ( y > gvMap . h )  { 
  if ( vspeed > 0 ) vspeed = 0 ; 
 
 vspeed -= 0.1 ; 
 } 
  
  if ( x > gvMap . w ) hspeed =  - 1.0 ; 
 
  if ( x < 0 ) hspeed = 1.0 ; 
 
  if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
 shape . setPos ( x , y )  ; 
 } 
  
  } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( gvPlayer . rawin ( "anSlide" )  )  if ( gvPlayer . anim == gvPlayer . anSlide && game . weapon == 4 ) hurtFire (  )  ; 
 
  
  if (  ! _stomp ||  ! _by . swimming ) hurtFire (  )  ; 
 
  } ;  returnVal . hurtFire = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprDeadFish ; 
actor [ c ]  . vspeed =  - 0.5 ; 
actor [ c ]  . flip = flip ; 
actor [ c ]  . hspeed = hspeed ; 
 if ( flip == 1 ) actor [ c ]  . spin =  - 1 ; 
 
  else actor [ c ]  . spin = 1 ; 
 
 actor [ c ]  . gravity = 0.02 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
game . enemies ++  ; 
newActor ( Poof , x + 8 , y )  ; 
newActor ( Poof , x - 8 , y )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "RedFish" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . timer = 0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . biting = false ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 return squirrelClassFunction; })()) ; 
JellyFish =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . pump = false ; 
 returnVal . fliph = 0 ; 
 returnVal . flipv = 0 ; 
 returnVal . touchDamage = 2.0 ; 
 returnVal . element = "shock" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 4 , 0 )  ; 
hspeed = 0.5 ; 
 } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! placeFree ( x + hspeed , y )  ) hspeed =  - hspeed ; 
 
  if (  ! placeFree ( x , y + vspeed )  ) vspeed =  - vspeed ; 
 
  if ( hspeed > 0 ) fliph = 0 ; 
 
  if ( hspeed < 0 ) fliph = 1 ; 
 
  if ( vspeed > 0 ) flipv = 1 ; 
 
  if ( vspeed < 0 ) flipv = 0 ; 
 
  if ( hspeed ) timer --  ; 
 
  if ( timer <= 0 )  { 
 timer = 30 + randInt ( 90 )  ; 
pump = true ; 
 } 
  
  if ( pump )  { 
  if ( frame < 3 ) frame += 0.1 ; 
 
  else frame += 0.05 ; 
 
  if ( frame >= 4 )  { 
 frame = 0.0 ; 
pump = false ; 
 } 
  
  if ( frame > 2 && frame < 3 )  { 
  if ( fliph == 0 ) hspeed = 1.0 ; 
 
  else hspeed =  - 1.0 ; 
 
  if ( flipv == 0 ) vspeed =  - 1.0 ; 
 
  else vspeed = 1.0 ; 
 
  } 
  
  } 
  
  if ( y > gvMap . h )  { 
  if ( vspeed > 0 ) vspeed = 0 ; 
 
 vspeed -= 0.1 ; 
 } 
  
  if ( x > gvMap . w ) hspeed =  - 1.0 ; 
 
  if ( x < 0 ) hspeed = 1.0 ; 
 
  if (  ! inWater ( x , y )  ) vspeed += 0.1 ; 
 
 vspeed *= 0.99 ; 
hspeed *= 0.99 ; 
drawSpriteEx ( sprJellyFish , frame , x - camx , y - camy , 0 , fliph +  ( flipv * 2 )  , 1 , 1 , 1 )  ; 
drawLightEx ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 0.25 , 0.25 )  ; 
 if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
 shape . setPos ( x , y )  ; 
 } 
  
  } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( gvPlayer . rawin ( "anSlide" )  )  if ( gvPlayer . anim == gvPlayer . anSlide && game . weapon == 4 ) hurtFire (  )  ; 
 
  
  if (  ! _stomp ||  ! _by . swimming ) hurtFire (  )  ; 
 
  } ;  returnVal . hurtFire = function (  ) {  if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprJellyFish ; 
actor [ c ]  . vspeed =  - 0.2 ; 
actor [ c ]  . flip = fliph +  ( flipv * 2 )  ; 
actor [ c ]  . hspeed = hspeed / 2 ; 
 if ( fliph == 1 ) actor [ c ]  . spin =  - 1 ; 
 
  else actor [ c ]  . spin = 1 ; 
 
 actor [ c ]  . gravity = 0.01 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
game . enemies ++  ; 
newActor ( Poof , x , y )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Jellyfish" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . timer = 0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . pump = false ; 
 squirrelClassFunction . fliph = 0 ; 
 squirrelClassFunction . flipv = 0 ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 squirrelClassFunction . element = "shock" ; 
 return squirrelClassFunction; })()) ; 
Clamor =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . huntdir = 0 ; 
 returnVal . timer = 0 ; 
 returnVal . flip = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 if ( _arr == "1" ) flip = 1 ; 
 
  if ( flip == 0 ) huntdir = 1 ; 
 
  else huntdir =  - 1 ; 
 
  } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( gvPlayer )  { 
  if ( inDistance2 ( x +  ( huntdir * 48 )  , y - 32 , gvPlayer . x , gvPlayer . y , 64 )  && timer == 0 )  { 
 timer = 240 ; 
newActor ( ClamorPearl , x , y , null )  ; 
 } 
  
  } 
  
  if ( timer > 0 ) timer --  ; 
 
 drawSpriteEx ( sprClamor ,  ( timer < 30 )  . tointeger (  )  , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( gvPlayer . rawin ( "anSlide" )  )  if ( gvPlayer . anim == gvPlayer . anSlide && game . weapon == 4 ) hurtFire (  )  ; 
 
  
  if ( _stomp && timer > 30 )  return ; 
  
  if ( _element == "fire" ) hurtFire (  )  ; 
 
  if ( _element == "normal" || _blast ) hurtBlast (  )  ; 
 
  } ;  returnVal . hurtFire = function (  ) {  if ( timer < 30 )  { 
  if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
 newActor ( Poof , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 } 
  
  } ;  returnVal . hurtBlast = function (  ) { newActor ( Poof , x , y - 1 )  ; 
die (  )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Clamor" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . huntdir = 0 ; 
 squirrelClassFunction . timer = 0 ; 
 squirrelClassFunction . flip = 0 ; 
 return squirrelClassFunction; })()) ; 
ClamorPearl =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . hspeed = 0 ; 
 returnVal . vspeed = 0 ; 
 returnVal . timer = 1200 ; 
 returnVal . shape = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if (  ! gvPlayer )  { 
 die (  )  ; 
 return ; 
  } 
  
  var aim = pointAngle ( x , y , gvPlayer . x , gvPlayer . y )  ;
 hspeed = lendirX ( 1 , aim )  ; 
vspeed = lendirY ( 1 , aim )  ; 
shape = Rec ( x , y , 4 , 4 , 0 )  ; 
 } ;  returnVal . run = function (  ) { x += hspeed ; 
y += vspeed ; 
shape . setPos ( x , y )  ; 
timer --  ; 
 if ( timer == 0 ||  ! placeFree ( x , y )  ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  ) gvPlayer . hurt = 2 ; 
 
  
 drawSprite ( sprIceball , 0 , x - camx , y - camy )  ; 
 if (  ! inWater ( x , y )  ) vspeed += 0.2 ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . hspeed = 0 ; 
 squirrelClassFunction . vspeed = 0 ; 
 squirrelClassFunction . timer = 1200 ; 
 squirrelClassFunction . shape = null ; 
 return squirrelClassFunction; })()) ; 
GreenFish =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 120 ; 
 returnVal . frame = 0.0 ; 
 returnVal . biting = false ; 
 returnVal . flip = 0 ; 
 returnVal . canjump = false ; 
 returnVal . touchDamage = 2.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 6 , 0 )  ; 
hspeed = 1.0 ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) hspeed =  - 1.0 ; 
 
  
  } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
 flip =  ( hspeed < 0 )  . tointeger (  )  ; 
timer --  ; 
 if ( timer <= 0 )  { 
 timer = 120 ; 
 if ( vspeed >  - 0.5 && inWater ( x , y )  ) vspeed =  - 0.5 ; 
 
  if ( hspeed == 0 ) hspeed = 1 ; 
 
  else hspeed *= 1 / fabs ( hspeed )  ; 
 
 canjump = true ; 
 } 
  
  if (  ! inWater ( x , y )  ) vspeed += 0.1 ; 
 
 vspeed *= 0.99 ; 
 if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  ) biting = true ; 
 
  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 256 )  && inWater ( x , y )  )  { 
 biting = true ; 
 if ( x < gvPlayer . x && hspeed < 2 ) hspeed += 0.02 ; 
 
  if ( x > gvPlayer . x && hspeed >  - 2 ) hspeed -= 0.02 ; 
 
  if ( y < gvPlayer . y && vspeed < 2 ) vspeed += 0.1 ; 
 
  if ( y > gvPlayer . y && vspeed >  - 4 )  { 
  if ( canjump &&  ! gvPlayer . inWater ( gvPlayer . x , gvPlayer . y )  &&  (  ( hspeed > 0 && gvPlayer . x > x )  ||  ( hspeed < 0 && gvPlayer . x < x )  )  )  { 
 vspeed =  - 6 ; 
canjump = false ; 
 } 
  
 vspeed -= 0.2 ; 
 } 
  
  if (  ! inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 )  )  { 
  if ( x < gvPlayer . x && hspeed < 2 ) hspeed += 0.02 ; 
 
  if ( x > gvPlayer . x && hspeed >  - 2 ) hspeed -= 0.02 ; 
 
  if ( y < gvPlayer . y && vspeed < 2 ) vspeed += 0.02 ; 
 
  if ( y > gvPlayer . y && vspeed >  - 2 ) vspeed -= 0.02 ; 
 
  } 
  
  } 
  
  } 
  
  if ( frame >= 4 )  { 
 biting = false ; 
frame = 0.0 ; 
 } 
  
  if ( biting )  { 
 drawSpriteEx ( sprGreenFish , 4 + frame , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
frame += 0.125 ; 
 } 
  
  else drawSpriteEx ( sprGreenFish , wrap ( getFrames (  )  / 16 , 0 , 3 )  , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 
  if ( y > gvMap . h )  { 
  if ( vspeed > 0 ) vspeed = 0 ; 
 
 vspeed -= 0.1 ; 
 } 
  
  if ( x > gvMap . w ) hspeed =  - 1.0 ; 
 
  if ( x < 0 ) hspeed = 1.0 ; 
 
 x += hspeed ; 
y += vspeed ; 
shape . setPos ( x , y )  ; 
 } 
  
  } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( gvPlayer . rawin ( "anSlide" )  )  if ( gvPlayer . anim == gvPlayer . anSlide && game . weapon == 4 ) hurtFire (  )  ; 
 
  
  if (  ! _stomp ||  ! _by . swimming ) hurtFire (  )  ; 
 
  } ;  returnVal . hurtFire = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprDeadFish ; 
actor [ c ]  . vspeed =  - 0.5 ; 
actor [ c ]  . flip = flip ; 
actor [ c ]  . hspeed = hspeed ; 
 if ( flip == 1 ) actor [ c ]  . spin =  - 1 ; 
 
  else actor [ c ]  . spin = 1 ; 
 
 actor [ c ]  . gravity = 0.02 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
game . enemies ++  ; 
newActor ( Poof , x + 8 , y )  ; 
newActor ( Poof , x - 8 , y )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "GreenFish" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . timer = 120 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . biting = false ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . canjump = false ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 return squirrelClassFunction; })()) ; 
Ouchin =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . sf = 0.0 ; 
 returnVal . sharpTop = true ; 
 returnVal . sharpSide = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 8 , 0 )  ; 
sf = randInt ( 8 )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
drawSprite ( sprOuchin , sf +  ( getFrames (  )  / 16 )  , x - camx , y - camy )  ; 
 if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
  if ( x > gvPlayer . x )  { 
  if ( gvPlayer . placeFree ( gvPlayer . x - 1 , gvPlayer . y )  ) gvPlayer . x --  ; 
 
 gvPlayer . hspeed -= 0.1 ; 
 } 
  
  if ( x < gvPlayer . x )  { 
  if ( gvPlayer . placeFree ( gvPlayer . x + 1 , gvPlayer . y )  ) gvPlayer . x ++  ; 
 
 gvPlayer . hspeed += 0.1 ; 
 } 
  
  if ( y > gvPlayer . y )  { 
  if ( gvPlayer . placeFree ( gvPlayer . x , gvPlayer . y - 1 )  ) gvPlayer . y --  ; 
 
 gvPlayer . vspeed -= 0.1 ; 
 } 
  
  if ( y < gvPlayer . y )  { 
  if ( gvPlayer . placeFree ( gvPlayer . x , gvPlayer . y + 1 )  ) gvPlayer . y ++  ; 
 
 gvPlayer . vspeed += 0.1 ; 
 } 
  
  } 
  
  
  if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
  if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else  { 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
icebox =  - 1 ; 
 } 
  
  } 
  
 shape . setPos ( x , y )  ; 
 } ;  returnVal . hurtPlayer = function ( target ) {  baseMethods . hurtPlayer  ( target )  ; 
 if ( gvPlayer ) gvPlayer . hurt = 2 ; 
 
  } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( _element == "fire" ) hurtFire (  )  ; 
 
  if ( _element == "ice" ) hurtIce (  )  ; 
 
  } ;  returnVal . hurtFire = function (  ) {  } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . sf = 0.0 ; 
 squirrelClassFunction . sharpTop = true ; 
 squirrelClassFunction . sharpSide = true ; 
 return squirrelClassFunction; })()) ; 
BadCannon =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 3.5 ; 
 returnVal . timer = 240 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
mapNewSolid ( Rec ( x , y , 8 , 8 , 0 )  )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( gvPlayer )  { 
  if ( x > gvPlayer . x + 8 && frame > 0.5 ) frame -= 0.1 ; 
 
  if ( x < gvPlayer . x - 8 && frame < 4.5 ) frame += 0.1 ; 
 
  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 160 )  && timer == 0 &&  ( frame < 1 || frame > 4 )  )  { 
  if ( frame < 1 )  { 
  var c = actor [ newActor ( CannonBob , x - 4 , y - 4 )  ]  ;
 c . hspeed =  (  ( gvPlayer . x - x )  / 48 )  ; 
 var d =  ( y - gvPlayer . y )  / 64 ;
  if ( d > 2 ) d = 2 ; 
 
  if ( y > gvPlayer . y ) c . vspeed -= d ; 
 
 newActor ( Poof , x - 4 , y - 4 )  ; 
 } 
  
  if ( frame >= 4 )  { 
  var c = actor [ newActor ( CannonBob , x + 4 , y - 4 )  ]  ;
 c . hspeed =  (  ( gvPlayer . x - x )  / 48 )  ; 
 var d =  ( y - gvPlayer . y )  / 64 ;
  if ( d > 2 ) d = 2 ; 
 
  if ( y > gvPlayer . y ) c . vspeed -= d ; 
 
 newActor ( Poof , x + 4 , y - 4 )  ; 
 } 
  
  if ( frame >= 1 && frame <= 4 )  { 
  var c = actor [ newActor ( CannonBob , x , y - 4 )  ]  ;
 c . hspeed =  (  ( gvPlayer . x - x )  / 48 )  ; 
 var d =  ( y - gvPlayer . y )  / 64 ;
  if ( d > 2 ) d = 2 ; 
 
  if ( y > gvPlayer . y ) c . vspeed -= d ; 
 
 newActor ( Poof , x , y - 4 )  ; 
 } 
  
 timer = 240 ; 
 } 
  
  if ( timer > 0 ) timer --  ; 
 
  } 
  
 drawSprite ( sprCannon , frame , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "BadCannon" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 3.5 ; 
 squirrelClassFunction . timer = 240 ; 
 return squirrelClassFunction; })()) ; 
CannonBob =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . vspeed =  - 4 ; 
 returnVal . sprite = 0 ; 
 returnVal . touchDamage = 2.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 if ( _arr == null ) sprite = sprCannonBob ; 
 
  else sprite = _arr ; 
 
  } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if (  ! frozen )  { 
  if ( hspeed < 0 ) drawSpriteEx ( sprite , getFrames (  )  / 4 , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprite , getFrames (  )  / 4 , x - camx , y - camy , 0 , 1 , 1 , 1 , 1 )  ; 
 
 vspeed += 0.2 ; 
x += hspeed ; 
y += vspeed ; 
shape . setPos ( x , y )  ; 
 if ( y > gvMap . h ) die (  )  ; 
 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
icebox =  - 1 ; 
hspeed = 0 ; 
vspeed =  - 1.0 ; 
 } 
  
  } 
  
  else  { 
  if ( hspeed < 0 ) drawSpriteEx ( sprite , 4 , x - camx , y - camy , 0 , 1 , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprite , 4 , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
  if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( _blast || _element == "fire" )  { 
 hurtBlast (  )  ; 
 return ; 
  } 
  
  else  if ( _element == "ice" )  { 
 hurtIce (  )  ; 
 return ; 
  } 
  
  
  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprite ; 
 if ( gvPlayer )  { 
 actor [ c ]  . vspeed =  - abs ( gvPlayer . hspeed * 1.1 )  ; 
actor [ c ]  . hspeed =  ( gvPlayer . hspeed / 16 )  ; 
 } 
  
  else actor [ c ]  . vspeed =  - 4.0 ; 
 
 popSound ( sndKick )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
 die (  )  ; 
 } ;  returnVal . hurtBlast = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprite ; 
actor [ c ]  . vspeed =  - abs ( gvPlayer . hspeed * 1.1 )  ; 
actor [ c ]  . hspeed =  ( gvPlayer . hspeed / 16 )  ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "CannonBob" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . vspeed =  - 4 ; 
 squirrelClassFunction . sprite = 0 ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 return squirrelClassFunction; })()) ; 
Icicle =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 30 ; 
 returnVal . counting = false ; 
 returnVal . touchDamage = 2.0 ; 
 returnVal . element = "ice" ; 
 returnVal . dy =  - 16 ; 
 returnVal . nocount = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 6 , 0 )  ; 
 } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  if ( dy < 0 ) dy ++  ; 
 
  baseMethods . run  (  )  ; 
 if ( gvPlayer )  if ( abs ( y - gvPlayer . y )  < 128 && y < gvPlayer . y && abs ( x - gvPlayer . x )  < 8 &&  ! counting )  { 
 counting = true ; 
popSound ( sndIcicle , 0 )  ; 
 } 
  
  
  if ( counting && timer > 0 ) timer --  ; 
 
  if ( timer <= 0 )  { 
  if ( inWater ( x , y )  && vspeed < 1.0 ) vspeed += 0.05 ; 
 
  else vspeed += 0.2 ; 
 
  } 
  
  if ( inWater ( x , y )  && vspeed > 0.5 ) vspeed = 0.1 ; 
 
 y += vspeed ; 
shape . setPos ( x , y )  ; 
 if (  ! placeFree ( x , y )  )  { 
 die (  )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
 drawSprite ( sprIcicle , 0 , x +  ( timer % 2 )  - camx , y - 8 - camy + dy )  ; 
 if ( vspeed > 0 ) fireWeapon ( AfterIce , x , y , 1 , id )  ; 
 
  } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( _element == "fire" )  { 
 die (  )  ; 
newActor ( Poof , x , y )  ; 
 return ; 
  } 
  
  else  if ( _element != "ice" )  { 
  baseMethods . getHurt  (  )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . timer = 30 ; 
 squirrelClassFunction . counting = false ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 squirrelClassFunction . element = "ice" ; 
 squirrelClassFunction . dy =  - 16 ; 
 squirrelClassFunction . nocount = true ; 
 return squirrelClassFunction; })()) ; 
FlyAmanita =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . range = 0 ; 
 returnVal . dir = 0.5 ; 
 returnVal . flip = 0 ; 
 returnVal . touchDamage = 2.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = 0 ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr == "" ) range = 0 ; 
 
  else  if (  squirrelTypeOf ( _arr )  == "array" ) range = _arr [ 0 ]  . tointeger (  )  ; 
 
  else range = _arr . tointeger (  )  * 16 ; 
 
  
 shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( gvPlayer &&  ! frozen ) gvPlayer . x < x ? flip = 1 : flip = 0 ; 
 
  if ( inDistance2 ( x , y , x , ystart , 16 )  ) vspeed =  (  ( 1.0 / 8.0 )  * distance2 ( x , y , x , ystart )  )  * dir ; 
 
  else  if ( inDistance2 ( x , y , x , ystart + range , 16 )  ) vspeed =  (  ( 1.0 / 8.0 )  * distance2 ( x , y , x , ystart + range )  )  * dir ; 
 
  else vspeed = dir * 2.0 ; 
 
  
 vspeed += dir * 0.2 ; 
 if ( range == 0 ) vspeed = 0 ; 
 
  if ( range > 0 )  { 
  if ( y > ystart + range ) dir =  - 0.5 ; 
 
  if ( y < ystart ) dir = 0.5 ; 
 
  } 
  
  if ( range < 0 )  { 
  if ( y > ystart ) dir =  - 0.5 ; 
 
  if ( y < ystart + range ) dir = 0.5 ; 
 
  } 
  
  if (  ! frozen )  { 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
icebox =  - 1 ; 
 } 
  
 y += vspeed ; 
drawSpriteEx ( sprFlyAmanita , getFrames (  )  / 4 , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 } 
  
  else  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
 drawSpriteEx ( sprFlyAmanita , 0 , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
 } ;  returnVal . hurtPlayer = function ( target ) {  baseMethods . hurtPlayer  ( target )  ; 
 } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( _element == "fire" )  { 
 hurtFire (  )  ; 
 return ; 
  } 
  
  else  if ( _element == "ice" )  { 
 hurtIce (  )  ; 
 return ; 
  } 
  
  
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  var c = newActor ( DeadNME , x , y )  ;
  if (  ! _stomp )  { 
 actor [ c ]  . sprite = sprFlyAmanita ; 
actor [ c ]  . vspeed =  - 4.0 ; 
actor [ c ]  . spin = 6 ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick )  ; 
 } 
  
  if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
 actor [ c ]  . sprite = sprFlyAmanita ; 
actor [ c ]  . vspeed =  - abs ( gvPlayer . hspeed * 1.1 )  ; 
actor [ c ]  . hspeed =  ( gvPlayer . hspeed / 16 )  ; 
actor [ c ]  . spin =  ( gvPlayer . hspeed * 6 )  ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick )  ; 
 if ( getcon ( "jump" , "hold" )  )  { 
 gvPlayer . vspeed =  - 8 ; 
popSound ( sndSquish , 0 )  ; 
 } 
  
  else  { 
 gvPlayer . vspeed =  - 4 ; 
popSound ( sndSquish , 0 )  ; 
 } 
  
  if ( gvPlayer . anim == gvPlayer . anJumpT || gvPlayer . anim == gvPlayer . anFall )  { 
 gvPlayer . anim = gvPlayer . anJumpU ; 
gvPlayer . frame = gvPlayer . anJumpU [ 0 ]  ; 
 } 
  
  else  if ( keyDown ( config . key . jump )  ) gvPlayer . vspeed =  - 5 ; 
 
  else gvPlayer . vspeed =  - 2 ; 
 
  
  if ( gvPlayer . anim == gvPlayer . anJumpT || gvPlayer . anim == gvPlayer . anFall )  { 
 gvPlayer . anim = gvPlayer . anJumpU ; 
gvPlayer . frame = gvPlayer . anJumpU [ 0 ]  ; 
 } 
  
  } 
  
  
  } ;  returnVal . hurtFire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . range = 0 ; 
 squirrelClassFunction . dir = 0.5 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 return squirrelClassFunction; })()) ; 
Jumpy =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = false ; 
 returnVal . jump =  - 4.0 ; 
 returnVal . touchDamage = 3.0 ; 
 returnVal . sharpTop = true ; 
 returnVal . sharpSide = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 , 0 , 2 )  ; 
 if ( _arr != null && _arr != "" ) jump = abs ( _arr . tofloat (  )  )  *  - 1.0 ; 
 
  } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if ( gvPlayer &&  ! frozen )  { 
  if ( x > gvPlayer . x ) flip = 1 ; 
 
  else flip = 0 ; 
 
  } 
  
  if (  ! placeFree ( x , y + 1 )  ) vspeed = jump ; 
 
  if (  ! placeFree ( x + 0 , y - 2 )  &&  ! placeFree ( x + 2 , y )  ) hspeed = 0 ; 
 
  if (  ! placeFree ( x - 0 , y - 2 )  &&  ! placeFree ( x - 2 , y )  ) hspeed = 0 ; 
 
 vspeed += 0.15 ; 
 if (  ! frozen )  { 
  if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
drawSpriteEx ( sprJumpy ,  (  squirrelThreeWaysCompare ( 0 , round ( vspeed / 2.0 )  )  )  + 1 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
 drawSpriteEx ( sprJumpy , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else  { 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
icebox =  - 1 ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  else flip = false ; 
 
  
  } 
  
  } 
  
  } 
  
  if ( x < 0 ) hspeed = 0.0 ; 
 
  if ( x > gvMap . w ) hspeed =  - 0.0 ; 
 
  } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( _element == "fire" )  { 
 hurtFire (  )  ; 
 return ; 
  } 
  
  else  if ( _element == "ice" )  { 
 hurtIce (  )  ; 
 return ; 
  } 
  
  else  baseMethods . getHurt  ( _by , _mag , _element , _cut , _blast )  ; 
 
  
  } ;  returnVal . hurtBlast = function (  ) {  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
 newActor ( Poof , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 } ;  returnVal . hurtFire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ;  returnVal . die = function (  ) { popSound ( sndKick , 0 )  ; 
newActor ( Poof , x , y )  ; 
 baseMethods . die  (  )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = false ; 
 squirrelClassFunction . squish = false ; 
 squirrelClassFunction . squishTime = 0.0 ; 
 squirrelClassFunction . smart = false ; 
 squirrelClassFunction . jump =  - 4.0 ; 
 squirrelClassFunction . touchDamage = 3.0 ; 
 squirrelClassFunction . sharpTop = true ; 
 squirrelClassFunction . sharpSide = true ; 
 return squirrelClassFunction; })()) ; 
Haywire =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . burnt = false ; 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . chasing = false ; 
 returnVal . mspeed = 1.0 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . touchDamage = 2.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 , 0 , 1 )  ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  
  } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if ( placeFree ( x , y + 1 )  ) vspeed += 0.2 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if (  ! squish || chasing )  { 
  if ( chasing ) mspeed = fabs ( hspeed )  ; 
 
  else mspeed = 0.75 ; 
 
  if ( chasing ) squishTime ++  ; 
 
  if ( squishTime >= 200 && chasing )  { 
 die (  )  ; 
fireWeapon ( ExplodeF , x , y - 1 , 0 , id )  ; 
 } 
  
  if ( y > gvMap . h + 8 ) die (  )  ; 
 
  if (  ! frozen )  { 
  if ( flip )  { 
  if ( placeFree ( x - mspeed , y )  ) x -= mspeed ; 
 
  else  if ( placeFree ( x -  ( mspeed * 2 )  , y -  ( mspeed * 2 )  )  )  { 
 x -= mspeed ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x - mspeed , y -  ( mspeed * 2 )  )  )  { 
 x -= mspeed ; 
y -= 1.0 ; 
 } 
  
  else flip = false ; 
 
  
  
  if ( placeFree ( x - 8 , y + 14 )  &&  ! placeFree ( x , y + 2 )  )  { 
  if (  ! chasing ) flip = false ; 
 
  else vspeed =  - 4 ; 
 
  } 
  
  if ( x <= 0 ) flip = false ; 
 
  if ( hspeed > 0 ) flip = false ; 
 
  } 
  
  else  { 
  if ( placeFree ( x + mspeed , y )  ) x += mspeed ; 
 
  else  if ( placeFree ( x + mspeed , y - mspeed )  )  { 
 x += mspeed ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x +  ( mspeed * 2 )  , y -  ( mspeed * 2 )  )  )  { 
 x += mspeed ; 
y -= 1.0 ; 
 } 
  
  else flip = true ; 
 
  
  
  if ( placeFree ( x + 8 , y + 14 )  &&  ! placeFree ( x , y + 2 )  )  { 
  if (  ! chasing ) flip = true ; 
 
  else vspeed =  - 4 ; 
 
  } 
  
  if ( x >= gvMap . w ) flip = true ; 
 
  if ( hspeed < 0 ) flip = true ; 
 
  } 
  
  if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 +  ( 16 * game . difficulty )  )  ) squish = true ; 
 
  
  } 
  
  if ( gvPlayer && chasing )  { 
  if ( x < gvPlayer . x - 8 )  if ( hspeed <  ( 2.5 +  (  ( 2.0 / 200.0 )  * squishTime )  )  )  { 
 hspeed += 0.1 ; 
 if ( hspeed < 0 ) hspeed += 0.1 ; 
 
  } 
  
  
  if ( x > gvPlayer . x + 8 )  if ( hspeed >  -  ( 2.5 +  (  ( 2.0 / 200.0 )  * squishTime )  )  )  { 
 hspeed -= 0.1 ; 
 if ( hspeed > 0 ) hspeed -= 0.1 ; 
 
  } 
  
  
  if (  ! placeFree ( x , y + 1 )  && y > gvPlayer . y + 16 ) vspeed =  - 5.0 ; 
 
  } 
  
  else hspeed = 0.0 ; 
 
  if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
 drawSpriteEx ( sprHaywire , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
 chasing = false ; 
squishTime = 0.0 ; 
 } 
  
  else  { 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
icebox =  - 1 ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  else flip = false ; 
 
  
  } 
  
  if ( chasing )  { 
 drawSpriteEx ( sprHaywire , wrap ( getFrames (  )  / 6 , 8 , 11 )  , x - camx , y - camy , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( getFrames (  )  % 8 == 0 )  { 
  var c ;
  if (  ! flip ) c = actor [ newActor ( FlameTiny , x - 6 , y - 8 )  ]  ; 
 
  else c = actor [ newActor ( FlameTiny , x + 6 , y - 8 )  ]  ; 
 
 c . vspeed =  - 0.1 ; 
c . hspeed = randFloat ( 0.2 )  - 0.1 ; 
 } 
  
  } 
  
  else drawSpriteEx ( sprHaywire , wrap ( getFrames (  )  / 10 , 0 , 3 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  } 
  
  } 
  
  else  { 
 squishTime += 1.5 ; 
 if ( chasing ) frame += 0.25 ; 
 
  else frame += 0.075 ; 
 
  if ( squishTime >= 90 &&  ! chasing )  { 
 chasing = true ; 
squishTime = 0 ; 
popSound ( sndFizz , 0 )  ; 
 } 
  
  if ( squishTime >= 300 && chasing )  { 
 die (  )  ; 
fireWeapon ( ExplodeF , x , y , 0 , id )  ; 
 } 
  
  if (  ! chasing ) drawSpriteEx ( sprHaywire , wrap ( frame , 4 , 7 )  , x - camx , y - camy , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprHaywire , wrap ( frame , 8 , 11 )  , x - camx , y - camy , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  if ( frozen )  { 
 squish = false ; 
squishTime = 0 ; 
chasing = false ; 
 } 
  
  } 
  
 shape . setPos ( x , y )  ; 
setDrawColor ( 0xff0000ff )  ; 
 if ( debug ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . hurtPlayer = function ( target ) {  if ( squish &&  ! chasing )  return ; 
  
  baseMethods . hurtPlayer  ( target )  ; 
 } ;  returnVal . hurtBlast = function (  ) {  if ( squish )  return ; 
  
  if ( frozen ) frozen = 0 ; 
 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
frozen = 0 ; 
icebox =  - 1 ; 
 } 
  
 squish = true ; 
 } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( _element == "fire" )  { 
 hurtFire (  )  ; 
 return ; 
  } 
  
  else  if ( _element == "ice" )  { 
 hurtIce (  )  ; 
 return ; 
  } 
  
  else  if ( _blast )  { 
 hurtBlast (  )  ; 
 return ; 
  } 
  
  
  
  if ( frozen > 0 )  return ; 
  
  if ( squish )  return ; 
  
  if (  ! _stomp ) vspeed =  - 2.0 ; 
 
 squish = true ; 
 } ;  returnVal . hurtFire = function (  ) {  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  if (  ! burnt )  { 
 fireWeapon ( ExplodeF , x , y - 1 , 0 , id )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
burnt = true ; 
 } 
  
  } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "Haywire" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . burnt = false ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = false ; 
 squirrelClassFunction . squish = false ; 
 squirrelClassFunction . squishTime = 0.0 ; 
 squirrelClassFunction . chasing = false ; 
 squirrelClassFunction . mspeed = 1.0 ; 
 squirrelClassFunction . hspeed = 0.0 ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 return squirrelClassFunction; })()) ; 
Sawblade =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PathCrawler ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
drawSprite ( sprSawblade , getFrames (  )  / 2 , x - camx , y - camy )  ; 
drawLightEx ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 0.125 , 0.125 )  ; 
shape . setPos ( x , y )  ; 
 if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  ) gvPlayer . getHurt ( 1 + game . difficulty , "normal" , true , false )  ; 
 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  return squirrelClassFunction; })()) ; 
Livewire =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . burnt = false ; 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . touchDamage = 2.0 ; 
 returnVal . element = "shock" ; 
 returnVal . damageMult =  { normal : 1.0 , fire : 0.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 0.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 , stomp : 1.0 , star : 10.0 }  ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 , 0 , 1 )  ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  
  } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! squish )  { 
  if ( placeFree ( x , y + 1 )  ) vspeed += 0.5 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) die (  )  ; 
 
  if (  ! frozen )  { 
  if ( flip )  { 
  if ( placeFree ( x - 1 , y )  ) x -= 1.0 ; 
 
  else  if ( placeFree ( x - 2 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x - 1 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = false ; 
 
  
  
  if ( placeFree ( x - 6 , y + 14 )  ) flip = false ; 
 
  if ( x <= 0 ) flip = false ; 
 
  } 
  
  else  { 
  if ( placeFree ( x + 1 , y )  ) x += 1.0 ; 
 
  else  if ( placeFree ( x + 1 , y - 1 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x + 2 , y - 2 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = true ; 
 
  
  
  if ( placeFree ( x + 6 , y + 14 )  ) flip = true ; 
 
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
  } 
  
  if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
 drawSpriteEx ( sprLivewire , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else  { 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
icebox =  - 1 ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  else flip = false ; 
 
  
  } 
  
 drawSpriteEx ( sprLivewire , wrap ( getFrames (  )  / 8 , 0 , 3 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 } 
  
  } 
  
  else  { 
 squishTime += 3 ; 
frame += 0.01 * squishTime ; 
 if ( squishTime >= 180 )  { 
 die (  )  ; 
fireWeapon ( ExplodeT , x , y , 0 , id )  ; 
fireWeapon ( ExplodeT , x , y + 24 , 0 , id )  ; 
fireWeapon ( ExplodeT , x , y - 24 , 0 , id )  ; 
fireWeapon ( ExplodeT , x + 24 , y , 0 , id )  ; 
fireWeapon ( ExplodeT , x - 24 , y , 0 , id )  ; 
fireWeapon ( ExplodeT , x + 20 , y + 20 , 0 , id )  ; 
fireWeapon ( ExplodeT , x + 20 , y - 20 , 0 , id )  ; 
fireWeapon ( ExplodeT , x - 20 , y + 20 , 0 , id )  ; 
fireWeapon ( ExplodeT , x - 20 , y - 20 , 0 , id )  ; 
fireWeapon ( ExplodeT , x + 20 , y - 20 , 0 , id )  ; 
 } 
  
 drawSpriteEx ( sprLivewire , wrap ( frame , 4 , 7 )  , x - camx , y - camy , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( frozen )  { 
 squish = false ; 
squishTime = 0 ; 
 } 
  
  } 
  
 shape . setPos ( x , y )  ; 
setDrawColor ( 0xff0000ff )  ; 
 if ( debug ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . hurtPlayer = function ( target ) {  if ( squish )  return ; 
  
  baseMethods . hurtPlayer  ( target )  ; 
 } ;  returnVal . hurtBlast = function (  ) {  if ( squish )  return ; 
  
  if ( frozen ) frozen = 0 ; 
 
 popSound ( sndFizz , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
 squish = true ; 
 } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( squish )  return ; 
  
  if ( _blast )  { 
 hurtBlast (  )  ; 
 return ; 
  } 
  
  if ( _element == "ice" )  { 
 hurtIce (  )  ; 
 return ; 
  } 
  
  if ( _element == "fire" )  return ; 
  
 popSound ( sndFizz , 0 )  ; 
 if ( _stomp )  { 
  if ( getcon ( "jump" , "hold" )  ) gvPlayer . vspeed =  - 8 ; 
 
  else gvPlayer . vspeed =  - 4 ; 
 
  if ( gvPlayer . anim == gvPlayer . anJumpT || gvPlayer . anim == gvPlayer . anFall )  { 
 gvPlayer . anim = gvPlayer . anJumpU ; 
gvPlayer . frame = gvPlayer . anJumpU [ 0 ]  ; 
 } 
  
  } 
  
 squish = true ; 
 var c ;
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  if ( burnt )  { 
 burnt = true ; 
 } 
  
  } ;  returnVal . hurtIce = function (  ) { frozen = 120 ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . burnt = false ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = false ; 
 squirrelClassFunction . squish = false ; 
 squirrelClassFunction . squishTime = 0.0 ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 squirrelClassFunction . element = "shock" ; 
 squirrelClassFunction . damageMult =  { normal : 1.0 , fire : 0.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 0.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 , stomp : 1.0 , star : 10.0 }  ; 
 return squirrelClassFunction; })()) ; 
Blazeborn =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = false ; 
 returnVal . moving = false ; 
 returnVal . element = "fire" ; 
 returnVal . touchDamage = 2.0 ; 
 returnVal . sharpTop = true ; 
 returnVal . sharpSide = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
smart = _arr ; 
 } ;  returnVal . physics = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . routine = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! moving )  if ( gvPlayer )  if ( x > gvPlayer . x )  { 
 flip = true ; 
moving = true ; 
 } 
  
  
  
  if (  ! squish )  { 
  if ( placeFree ( x , y + 1 )  ) vspeed += 0.2 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) die (  )  ; 
 
  if (  ! frozen )  { 
  if ( flip )  { 
  if ( placeFree ( x - 1 , y )  ) x -= 2.0 ; 
 
  else  if ( placeFree ( x - 2 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x - 1 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = false ; 
 
  
  
  if ( smart )  if ( placeFree ( x - 6 , y + 14 )  ) flip = false ; 
 
  
  if ( x <= 0 ) flip = false ; 
 
  } 
  
  else  { 
  if ( placeFree ( x + 1 , y )  ) x += 2.0 ; 
 
  else  if ( placeFree ( x + 1 , y - 1 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x + 2 , y - 2 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = true ; 
 
  
  
  if ( smart )  if ( placeFree ( x + 6 , y + 14 )  ) flip = true ; 
 
  
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
  } 
  
  if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
 newActor ( Flame , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 } 
  
  
  if ( smart ) drawSpriteEx ( sprBlazeborn , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprBlazeborn , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else  { 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
icebox =  - 1 ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  else flip = false ; 
 
  
  } 
  
  if ( smart ) drawSpriteEx ( sprBlazeborn , wrap ( getFrames (  )  / 8 , 0 , 3 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprBlazeborn , wrap ( getFrames (  )  / 8 , 0 , 3 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  } 
  
  } 
  
  else  { 
 squishTime += 0.025 ; 
 if ( squishTime >= 1 )  if ( smart ) drawSpriteEx ( sprDeathcap , floor ( 4.8 + squishTime )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprDeathcap , floor ( 4.8 + squishTime )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  
  } 
  
 drawLightEx ( sprLightFire , 0 , x - camx , y - camy , randInt ( 360 )  , 0 , 0.5 + sin ( getFrames (  )  . tofloat (  )  / 2.5 )  * 0.05 , 0.5 + sin ( getFrames (  )  . tofloat (  )  / 2.5 )  * 0.05 )  ; 
shape . setPos ( x , y )  ; 
setDrawColor ( 0xff0000ff )  ; 
 if ( debug ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( _element == "fire" )  { 
 hurtFire (  )  ; 
 return ; 
  } 
  
  if ( _element == "ice" )  { 
 hurtIce (  )  ; 
 return ; 
  } 
  
 hurtBlast (  )  ; 
 } ;  returnVal . hurtBlast = function (  ) { newActor ( Poof , x , y )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 if ( icebox !=  - 1 ) mapDeleteSolid ( icebox )  ; 
 
  } ;  returnVal . hurtFire = function (  ) { die (  )  ; 
fireWeapon ( ExplodeF , x , y , 2 , id )  ; 
newActor ( Flame , x , y - 1 )  ; 
 } ;  returnVal . hurtIce = function (  ) { newActor ( Poof , x , y )  ; 
die (  )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Blazeborn" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = false ; 
 squirrelClassFunction . squish = false ; 
 squirrelClassFunction . squishTime = 0.0 ; 
 squirrelClassFunction . smart = false ; 
 squirrelClassFunction . moving = false ; 
 squirrelClassFunction . element = "fire" ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 squirrelClassFunction . sharpTop = true ; 
 squirrelClassFunction . sharpSide = true ; 
 return squirrelClassFunction; })()) ; 
Wildcap =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = false ; 
 returnVal . moving = false ; 
 returnVal . touchDamage = 4.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
smart = _arr ; 
 } ;  returnVal . routine = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! moving )  if ( gvPlayer )  if ( x > gvPlayer . x )  { 
 flip = true ; 
moving = true ; 
 } 
  
  
  
  if (  ! squish )  { 
  if ( placeFree ( x , y + 1 )  ) vspeed += 0.1 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) die (  )  ; 
 
  if (  ! frozen )  { 
  if ( flip )  { 
  if ( placeFree ( x - 1 , y )  ) x -= 1.0 ; 
 
  else  if ( placeFree ( x - 2 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x - 1 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = false ; 
 
  
  
  if ( smart )  if ( placeFree ( x - 6 , y + 14 )  ) flip = false ; 
 
  
  if ( x <= 0 ) flip = false ; 
 
  } 
  
  else  { 
  if ( placeFree ( x + 1 , y )  ) x += 1.0 ; 
 
  else  if ( placeFree ( x + 1 , y - 1 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x + 2 , y - 2 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = true ; 
 
  
  
  if ( smart )  if ( placeFree ( x + 6 , y + 14 )  ) flip = true ; 
 
  
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
  } 
  
  if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
  if ( smart ) drawSpriteEx ( sprWildcap , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprWildcap , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else  { 
  if ( icebox !=  - 1 )  { 
 newActor ( IceChunks , x , y )  ; 
mapDeleteSolid ( icebox )  ; 
icebox =  - 1 ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  else flip = false ; 
 
  
  } 
  
  if ( smart ) drawSpriteEx ( sprWildcap , wrap ( getFrames (  )  / 8 , 0 , 3 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprWildcap , wrap ( getFrames (  )  / 8 , 0 , 3 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  } 
  
  } 
  
  else  { 
 squishTime += 0.025 ; 
 if ( squishTime >= 1 ) die (  )  ; 
 
  if ( smart ) drawSpriteEx ( sprWildcap , floor ( 4.8 + squishTime )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprWildcap , floor ( 4.8 + squishTime )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  } 
  
  if (  ! squish ) shape . setPos ( x , y )  ; 
 
 setDrawColor ( 0xff0000ff )  ; 
 if ( debug ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . hurtPlayer = function ( target ) {  if ( squish )  return ; 
  
  baseMethods . hurtPlayer  ( target )  ; 
 } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( squish )  return ; 
  
  if ( _blast )  { 
 hurtblast (  )  ; 
 return ; 
  } 
  
  if ( _element == "fire" )  { 
 newActor ( Flame , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 if ( randInt ( 30 )  == 0 )  { 
  var a = actor [ newActor ( MuffinRed , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  return ; 
  } 
  
  if ( _element == "ice" )  { 
 frozen = 600 ; 
 return ; 
  } 
  
  if ( gvPlayer . rawin ( "anSlide" )  )  { 
  if ( gvPlayer . anim == gvPlayer . anSlide && hitTest ( shape , gvPlayer . shape )  )  { 
 gvPlayer . hurt = 1 ; 
 var c = newActor ( DeadNME , x , y )  ;
  if ( smart ) actor [ c ]  . sprite = sprWildcap ; 
 
  else actor [ c ]  . sprite = sprWildcap ; 
 
 actor [ c ]  . vspeed = min (  - fabs ( gvPlayer . hspeed )  ,  - 4 )  ; 
actor [ c ]  . hspeed =  ( gvPlayer . hspeed / 16 )  ; 
actor [ c ]  . spin =  ( gvPlayer . hspeed * 7 )  ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 return ; 
  } 
  
  } 
  
  if (  ! _stomp )  { 
  var c = newActor ( DeadNME , x , y )  ;
  if ( smart ) actor [ c ]  . sprite = sprWildcap ; 
 
  else actor [ c ]  . sprite = sprWildcap ; 
 
 actor [ c ]  . vspeed =  - 4.0 ; 
actor [ c ]  . spin = 4 ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 if ( randInt ( 30 )  == 0 )  { 
  var a = actor [ newActor ( MuffinRed , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } 
  
  else popSound ( sndSquish , 0 )  ; 
 
 squish = true ; 
blinking = 120 ; 
 } ;  returnVal . hurtblast = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
  if ( smart ) actor [ c ]  . sprite = sprWildcap ; 
 
  else actor [ c ]  . sprite = sprWildcap ; 
 
 actor [ c ]  . vspeed =  - 4 ; 
actor [ c ]  . hspeed =  ( 4 / 16 )  ; 
actor [ c ]  . spin =  ( 4 * 7 )  ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 if ( icebox !=  - 1 ) mapDeleteSolid ( icebox )  ; 
 
  } ;  returnVal . hurtFire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 if ( randInt ( 30 )  == 0 )  { 
  var a = actor [ newActor ( MuffinRed , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "Wildcap" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = false ; 
 squirrelClassFunction . squish = false ; 
 squirrelClassFunction . squishTime = 0.0 ; 
 squirrelClassFunction . smart = false ; 
 squirrelClassFunction . moving = false ; 
 squirrelClassFunction . touchDamage = 4.0 ; 
 return squirrelClassFunction; })()) ; 
Tallcap =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = false ; 
 returnVal . moving = false ; 
 returnVal . touchDamage = 2.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 14 , 0 , 0 ,  - 6 )  ; 
smart = _arr ; 
 } ;  returnVal . routine = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! moving )  if ( gvPlayer )  if ( x > gvPlayer . x )  { 
 flip = true ; 
moving = true ; 
 } 
  
  
  
  if (  ! squish )  { 
  if ( placeFree ( x , y + 1 )  ) vspeed += 0.1 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) die (  )  ; 
 
  if (  ! frozen )  { 
  if ( flip )  { 
  if ( placeFree ( x - 1 , y )  ) x -= 1.0 ; 
 
  else  if ( placeFree ( x - 2 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x - 1 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = false ; 
 
  
  
  if ( smart )  if ( placeFree ( x - 6 , y + 14 )  ) flip = false ; 
 
  
  if ( x <= 0 ) flip = false ; 
 
  } 
  
  else  { 
  if ( placeFree ( x + 1 , y )  ) x += 1.0 ; 
 
  else  if ( placeFree ( x + 1 , y - 1 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x + 2 , y - 2 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = true ; 
 
  
  
  if ( smart )  if ( placeFree ( x + 6 , y + 14 )  ) flip = true ; 
 
  
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
  } 
  
  if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
  if ( smart ) drawSpriteEx ( sprSmartTallCap , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprTallCap , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapTall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 7 )  ; 
 
  else drawSprite ( sprIceTrapTall , 0 , x - camx , y - camy - 7 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapTall , 0 , x - camx , y - camy - 7 )  ; 
 
  } 
  
  else  { 
  if ( icebox !=  - 1 )  { 
 newActor ( IceChunks , x , y )  ; 
mapDeleteSolid ( icebox )  ; 
icebox =  - 1 ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  else flip = false ; 
 
  
  } 
  
  if ( smart ) drawSpriteEx ( sprSmartTallCap , getFrames (  )  / 8 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprTallCap , getFrames (  )  / 8 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  } 
  
  } 
  
  else  { 
 squishTime += 0.025 ; 
 if ( squishTime >= 1 ) die (  )  ; 
 
  if ( smart ) drawSpriteEx ( sprSmartTallCap , floor ( 4.8 + squishTime )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprTallCap , floor ( 4.8 + squishTime )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  } 
  
  if (  ! squish ) shape . setPos ( x , y )  ; 
 
 setDrawColor ( 0xff0000ff )  ; 
 if ( debug ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . hurtPlayer = function ( target ) {  if ( squish )  return ; 
  
  baseMethods . hurtPlayer  ( target )  ; 
 } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( squish )  return ; 
  
  if ( _element == "ice" )  { 
 frozen = 600 ; 
 return ; 
  } 
  
 die (  )  ; 
squish = true ; 
blinking = 120 ; 
 } ;  returnVal . hurtblast = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
  if ( smart ) actor [ c ]  . sprite = sprSmartTallCap ; 
 
  else actor [ c ]  . sprite = sprTallCap ; 
 
 actor [ c ]  . vspeed =  - 4 ; 
actor [ c ]  . hspeed =  ( 4 / 16 )  ; 
actor [ c ]  . spin =  ( 4 * 7 )  ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 if ( icebox !=  - 1 ) mapDeleteSolid ( icebox )  ; 
 
  } ;  returnVal . hurtFire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ;  returnVal . die = function (  ) { mapDeleteSolid ( icebox )  ; 
 if ( frozen ) newActor ( IceChunks , x , y )  ; 
 
 frozen = 0 ; 
deleteActor ( id )  ; 
 var c = actor [ newActor ( Deathcap , x , y - 14 )  ]  ;
 c . smart = smart ; 
c . nocount = nocount ; 
c . blinking = 10 ; 
c . vspeed =  - 1.0 ; 
newActor ( Poof , x , y )  ; 
popSound ( sndSquish , 0 )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Tallcap" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = false ; 
 squirrelClassFunction . squish = false ; 
 squirrelClassFunction . squishTime = 0.0 ; 
 squirrelClassFunction . smart = false ; 
 squirrelClassFunction . moving = false ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 return squirrelClassFunction; })()) ; 
Owl =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . passenger = null ; 
 returnVal . pyOffset = 0 ; 
 returnVal . pid = 0 ; 
 returnVal . touchDamage = 2.0 ; 
 returnVal . health = 4.0 ; 
 returnVal . flip = 0 ; 
 returnVal . canMoveH = true ; 
 returnVal . canMoveV = true ; 
 returnVal . freezeSprite = sprIceTrapLarge ; 
 returnVal . nocount = true ; 
 returnVal . blinkMax = 2 ; 
 returnVal . damageMult =  { normal : 1.0 , fire : 2.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 , stomp : 1.0 }  ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
hspeed = 0.5 ; 
 var arg =  [  ]  ;
  if (  squirrelTypeOf ( _arr )  == "string" ) arg = split ( _arr , "," )  ; 
 
  if (  squirrelTypeOf ( _arr )  == "array" ) arg = _arr ; 
 
  var narg = clone ( arg )  ;
  if ( (narg[0] !== undefined) ) narg . remove ( 0 )  ; 
 
  if ( (arg[0] !== undefined) )  { 
  if ( getroottable (  )  . rawin ( arg [ 0 ]  )  )  { 
  if ( getroottable (  )  [ arg [ 0 ]  ]  . rawin ( "shape" )  ) passenger = actor [ newActor ( getroottable (  )  [ arg [ 0 ]  ]  , x , y , narg )  ]  ; 
 
  else passenger = actor [ newActor ( MuffinEvil , x , y )  ]  ; 
 
  } 
  
  else passenger = actor [ newActor ( MuffinEvil , x , y )  ]  ; 
 
  } 
  
  else passenger = actor [ newActor ( MuffinEvil , x , y )  ]  ; 
 
 pyOffset = passenger . shape . h ; 
pid = passenger . id ; 
shape = Rec ( x , y , 8 , 12 , 0 )  ; 
routine = ruCarry ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if (  ! active )  if ( checkActor ( pid )  )  { 
 passenger . x = x ; 
passenger . y = y + pyOffset + 12 ; 
 if ( passenger . rawin ( "flip" )  ) passenger . flip = flip ; 
 
 passenger . vspeed = 0.0 ; 
 } 
  
  
  } ;  returnVal . physics = function (  ) {  var tempShape = shape ;
 canMoveH =  !  ( frozen > 0 )  ; 
canMoveV =  !  ( frozen > 0 )  ; 
 if (  ! placeFree ( x + hspeed , y )  ) canMoveH = false ; 
 
  if (  ! placeFree ( x , y + vspeed )  ) canMoveV = false ; 
 
  if ( checkActor ( pid )  )  { 
 shape = passenger . shape ; 
 if (  ! placeFree ( x + hspeed , y + 12 + pyOffset )  ) canMoveH = false ; 
 
  if (  ! placeFree ( x , y + 12 + pyOffset + vspeed )  ) canMoveV = false ; 
 
 shape = tempShape ; 
 } 
  
  if ( canMoveH ) x += hspeed ; 
 
  else hspeed =  - hspeed ; 
 
  if ( canMoveV ) y += vspeed / 2.0 ; 
 
  else vspeed =  - vspeed / 2.0 ; 
 
  if ( checkActor ( pid )  )  { 
 passenger . x = x ; 
passenger . y = y + pyOffset + 12 ; 
 if ( passenger . rawin ( "flip" )  ) passenger . flip = flip ; 
 
 passenger . vspeed = 0.0 ; 
 } 
  
 shape . setPos ( x , y )  ; 
 } ;  returnVal . animation = function (  ) {  if ( frozen == 0 )  { 
  if ( hspeed > 0 ) flip = 0 ; 
 
  if ( hspeed < 0 ) flip = 1 ; 
 
  if ( gvPlayer &&  ! placeFree ( x , y )  )  { 
  if ( x < gvPlayer . x ) flip = 0 ; 
 
  if ( x > gvPlayer . x ) flip = 1 ; 
 
  } 
  
 drawSpriteExZ ( 1 , sprOwlBrown , wrap ( getFrames (  )  / 6 , 1 , 4 )  , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 } 
  
  else drawSpriteExZ ( 1 , sprOwlBrown , 0 , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 
  } ;  returnVal . ruCarry = function (  ) {  if ( gvPlayer )  { 
  if ( x > gvPlayer . x && hspeed >  - 3 ) hspeed -= 0.05 ; 
 
  if ( x < gvPlayer . x && hspeed < 3 ) hspeed += 0.05 ; 
 
  if ( y > gvPlayer . y - 64 && vspeed >  - 1 ) vspeed -= 0.05 ; 
 
  if ( y < gvPlayer . y - 64 && vspeed < 1 ) vspeed += 0.05 ; 
 
  if ( distance2 ( x , y , gvPlayer . x , gvPlayer . y )  <= 96 && y < gvPlayer . y && abs ( x - gvPlayer . x )  < 8 ) pid =  - 1 ; 
 
  } 
  
  if (  ! checkActor ( pid )  ) routine = ruFlee ; 
 
  } ;  returnVal . ruFlee = function (  ) {  if ( gvPlayer )  { 
  if ( x < gvPlayer . x && hspeed >  - 3 ) hspeed -= 0.05 ; 
 
  if ( x > gvPlayer . x && hspeed < 3 ) hspeed += 0.05 ; 
 
  if ( y < gvPlayer . y && vspeed >  - 1 ) vspeed -= 0.05 ; 
 
  if ( y > gvPlayer . y && vspeed < 1 ) vspeed += 0.05 ; 
 
  } 
  
  } ;  returnVal . die = function (  ) {  baseMethods . die  (  )  ; 
 var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprOwlBrown ; 
actor [ c ]  . vspeed =  - 5.0 ; 
actor [ c ]  . spin = 30 ; 
popSound ( sndKick , 0 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . passenger = null ; 
 squirrelClassFunction . pyOffset = 0 ; 
 squirrelClassFunction . pid = 0 ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 squirrelClassFunction . health = 4.0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . canMoveH = true ; 
 squirrelClassFunction . canMoveV = true ; 
 squirrelClassFunction . freezeSprite = sprIceTrapLarge ; 
 squirrelClassFunction . nocount = true ; 
 squirrelClassFunction . blinkMax = 2 ; 
 squirrelClassFunction . damageMult =  { normal : 1.0 , fire : 2.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 , stomp : 1.0 }  ; 
 return squirrelClassFunction; })()) ; 
MrIceguy =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . element = "ice" ; 
 returnVal . slideTimer = 8 ; 
 returnVal . hurtTimer = 600 ; 
 returnVal . flip = 0 ; 
 returnVal . damageMult =  { normal : 1.0 , fire : 2.0 , ice : 0.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 , stomp : 0.0 }  ; 
 returnVal . health = 2.0 ; 
 returnVal . touchDamage = 2.0 ; 
 returnVal . friction = 0.0 ; 
 returnVal . gravity = 0.15 ; 
 returnVal . held = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 8 , 6 , 0 )  ; 
routine = ruNormal ; 
 if ( gvPlayer )  { 
 hspeed =  (  squirrelThreeWaysCompare ( gvPlayer . x , x )  )  . tofloat (  )  ; 
 } 
  
  else hspeed = 1.0 ; 
 
  } ;  returnVal . physics = function (  ) {  if ( placeFree ( x , y +  (  squirrelThreeWaysCompare ( 0 , gravity )  )  )  &&  ! phantom ) vspeed += gravity ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else  { 
 vspeed /= 2 ; 
 if ( fabs ( vspeed )  < 0.01 ) vspeed = 0 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  } 
  
  if ( hspeed != 0 )  { 
  if ( placeFree ( x + hspeed , y )  )  { 
  for (  var i = 0 ;
 i < 4 ; i ++  )  if (  ! placeFree ( x , y + 4 )  && placeFree ( x + hspeed , y + 1 )  &&  ! inWater (  )  && vspeed >= 0 &&  ! placeFree ( x + hspeed , y + 4 )  )  { 
 y += 1 ; 
 } 
  
 x += hspeed ; 
 } 
  
  else  { 
  var didstep = false ;
  for (  var i = 1 ;
 i <= max ( 4 , abs ( hspeed * 1.5 )  )  ; i ++  )  { 
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
  
  if ( fabs ( hspeed )  > friction )  { 
  if ( hspeed > 0 ) hspeed -= friction ; 
 
  if ( hspeed < 0 ) hspeed += friction ; 
 
  } 
  
  else hspeed = 0 ; 
 
 shape . setPos ( x , y )  ; 
xprev = x ; 
yprev = y ; 
 } ;  returnVal . animation = function (  ) {  if ( hspeed > 0 ) flip = 0 ; 
 
  if ( hspeed < 0 ) flip = 1 ; 
 
  if ( routine == ruNormal ) drawSpriteExZ ( 1 , sprMrIceguy ,  ( getFrames (  )  / 8 )  % 4 , x - camx , y - camy , 0 , flip , 1 , 1 , 1.0 )  ; 
 
  if ( routine == ruSlide ) drawSpriteExZ ( 1 , sprMrIceguy , 4 +  ( hurtTimer <= 30 )  . tointeger (  )  , x - camx , y - camy , 0 , flip , 1 , 1 , 1.0 )  ; 
 
  if ( debug ) shape . draw (  )  ; 
 
  if ( y > gvMap . h + 32 ) die (  )  ; 
 
  if ( health < 2 ) health ++  ; 
 
  } ;  returnVal . ruNormal = function (  ) {  if ( flip && hspeed >  - 1.5 ) hspeed -= 0.5 ; 
 
  else  if ( flip && hspeed < 1.5 ) hspeed += 0.5 ; 
 
  
  if (  ! held &&  (  (  ! placeFree ( x + hspeed , y + 2 )  &&  ! placeFree ( x + hspeed , y - 4 )  )  || x + hspeed < 0 || x + hspeed > gvMap . w || placeFree ( x +  ( 8 * hspeed )  , y + 14 )  &&  ! placeFree ( x , y + 2 )  )  )  { 
 flip =  (  ! flip )  . tointeger (  )  ; 
hspeed =  - hspeed ; 
 } 
  
 touchDamage = 2.0 ; 
 if ( inWater ( x , y )  )  { 
  if ( vspeed >  - 2 ) vspeed /= 2.0 ; 
 
 gravity =  - 0.1 ; 
 } 
  
  else gravity = 0.1 ; 
 
  } ;  returnVal . ruSlide = function (  ) {  if ( fabs ( hspeed )  > 0 )  { 
  if ( getFrames (  )  % 4 == 0 )  { 
  if ( hspeed > 0 ) hspeed -= 0.01 ; 
 
  if ( hspeed < 0 ) hspeed += 0.01 ; 
 
  } 
  
  if ( slideTimer > 0 )  { 
 slideTimer --  ; 
touchDamage = 0.0 ; 
 } 
  
  else touchDamage = 2.0 ; 
 
 hurtTimer = 600 ; 
 if (  ! placeFree ( x , y + 1 )  )  { 
  if ( placeFree ( x - 2 , y + 1 )  ) hspeed -= 0.01 ; 
 
  if ( placeFree ( x + 2 , y + 1 )  ) hspeed += 0.01 ; 
 
  } 
  
  var c = fireWeapon ( MeleeHit , x + hspeed , y , 1 , id )  ;
 c . power = 2 ; 
 } 
  
  if ( fabs ( hspeed )  < 0.01 )  { 
 hspeed = 0.0 ; 
touchDamage = 0.0 ; 
slideTimer = 8 ; 
hurtTimer --  ; 
health = 2.0 ; 
 } 
  
  if ( hurtTimer <= 0 )  { 
 routine = ruNormal ; 
 if ( gvPlayer )  { 
 hspeed =  (  squirrelThreeWaysCompare ( x , gvPlayer . x )  )  . tofloat (  )  ; 
 } 
  
  else hspeed = 1.0 ; 
 
  } 
  
  if (  ! held &&  (  (  ! placeFree ( x + hspeed , y )  &&  ! placeFree ( x + hspeed , y - 4 )  )  || x + hspeed < 0 || x + hspeed > gvMap . w )  )  { 
 flip =  (  ! flip )  . tointeger (  )  ; 
fireWeapon ( StompPoof , x +  ( 10 *  (  squirrelThreeWaysCompare ( hspeed , 0 )  )  )  , y , 0 , id )  ; 
hspeed =  - hspeed ; 
 if (  ! held && x > camx - 32 && x < camx + 32 + screenW (  )  && y > camy - 32 && y < camy + 32 + screenH (  )  ) popSound ( sndIceblock )  ; 
 
  } 
  
  if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  && getcon ( "shoot" , "hold" )  &&  ( gvPlayer . holding == 0 || gvPlayer . holding == id )  && hspeed == 0 )  { 
 y = gvPlayer . y ; 
flip = gvPlayer . flip ; 
 if ( flip == 0 ) x = gvPlayer . x + 10 ; 
 
  else x = gvPlayer . x - 10 ; 
 
 x += gvPlayer . hspeed ; 
y += gvPlayer . vspeed ; 
held = true ; 
gvPlayer . holding = id ; 
 } 
  
  if ( gvPlayer . rawin ( "anSlide" )  && gvPlayer . anim == gvPlayer . anSlide && held )  { 
 gvPlayer . holding = 0 ; 
 if (  ! placeFree ( x , y )  )  { 
  var escapedir =  squirrelThreeWaysCompare ( gvPlayer . x , x )  ;
  while (  ! placeFree ( x , y )  ) x += escapedir ; 
 
  } 
  
 held = false ; 
 } 
  
  if ( gvPlayer . rawin ( "anClimb" )  && gvPlayer . anim == gvPlayer . anClimb && held )  { 
 gvPlayer . holding = 0 ; 
 if (  ! placeFree ( x , y )  )  { 
  var escapedir =  squirrelThreeWaysCompare ( gvPlayer . x , x )  ;
  while (  ! placeFree ( x , y )  ) x += escapedir ; 
 
  } 
  
 held = false ; 
 } 
  
  } 
  
  if (  ! getcon ( "shoot" , "hold" )  )  { 
  if ( getcon ( "shoot" , "release" )  && getcon ( "up" , "hold" )  && held ) vspeed =  - 4.0 ; 
 
  if ( held && gvPlayer )  { 
 gvPlayer . holding = 0 ; 
x += gvPlayer . hspeed * 2 ; 
 if (  ! placeFree ( x , y )  )  { 
  var escapedir =  squirrelThreeWaysCompare ( gvPlayer . x , x )  ;
  while (  ! placeFree ( x , y )  ) x += escapedir ; 
 
  } 
  
  } 
  
 held = false ; 
 } 
  
  if ( held )  { 
 blinking = 10 ; 
slideTimer = 10 ; 
vspeed = 0.0 ; 
hurtTimer = 600 ; 
 } 
  
  if ( inWater ( x , y )  )  { 
  if ( vspeed >  - 2 ) vspeed /= 2.0 ; 
 
 hspeed /= 1.01 ; 
gravity =  - 0.1 ; 
 } 
  
  else gravity = 0.1 ; 
 
  } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( blinking > 0 )  return ; 
  
  baseMethods . getHurt  ( _by , _mag , _element , _cut , _blast , _stomp )  ; 
 if ( routine == ruSlide )  { 
  if ( hspeed != 0 ) hspeed = 0.0 ; 
 
  else  if ( gvPlayer ) hspeed =  ( max ( 4.0 , fabs ( gvPlayer . hspeed * 1.5 )  )  )  *  (  squirrelThreeWaysCompare ( x , gvPlayer . x )  )  ; 
 
  
 popSound ( sndKick )  ; 
 } 
  
  else  { 
 hspeed = 0.0 ; 
hurtTimer = 600 ; 
routine = ruSlide ; 
popSound ( sndSquish )  ; 
 if (  ! _stomp ) vspeed =  - 2.0 ; 
 
  } 
  
  } ;  returnVal . hurtPlayer = function ( target ) {  if ( held )  return ; 
  
  if ( slideTimer > 0 && hspeed != 0 && routine == ruSlide )  return ; 
  
  if ( routine == ruSlide && gvPlayer . vspeed >= 0 )  { 
  if ( hspeed == 0 || slideTimer > 0 )  { 
  if ( hspeed != 0 ) hspeed = 0.0 ; 
 
  else  if ( gvPlayer ) hspeed =  ( max ( 4.0 , fabs ( gvPlayer . hspeed * 1.5 )  )  )  *  (  squirrelThreeWaysCompare ( x , gvPlayer . x )  )  ; 
 
  
 slideTimer = 10 ; 
popSound ( sndKick )  ; 
 return ; 
  } 
  
  } 
  
  if ( slideTimer <= 0 || routine == ruNormal )  baseMethods . hurtPlayer  ( target )  ; 
 
  } ;  returnVal . die = function (  ) {  baseMethods . die  (  )  ; 
newActor ( IceChunks , x , y )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "MrIceguy" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . element = "ice" ; 
 squirrelClassFunction . slideTimer = 8 ; 
 squirrelClassFunction . hurtTimer = 600 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . damageMult =  { normal : 1.0 , fire : 2.0 , ice : 0.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 , stomp : 0.0 }  ; 
 squirrelClassFunction . health = 2.0 ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 squirrelClassFunction . friction = 0.0 ; 
 squirrelClassFunction . gravity = 0.15 ; 
 squirrelClassFunction . held = false ; 
 return squirrelClassFunction; })()) ; 
SpikeCap =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = true ; 
 returnVal . moving = false ; 
 returnVal . getupTime = 2.0 ; 
 returnVal . touchDamage = 2.0 ; 
 returnVal . sharpTop = true ; 
 returnVal . sharpSide = true ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
smart = _arr ; 
 } ;  returnVal . routine = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! moving )  if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 )  )  { 
 flip = x > gvPlayer . x ; 
moving = true ; 
 } 
  
  
  
  if (  ! squish )  { 
  if ( placeFree ( x , y + 1 )  ) vspeed += 0.1 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) die (  )  ; 
 
  if (  ! frozen && moving && getupTime == 0 )  { 
  if ( flip )  { 
  if ( placeFree ( x - 1 , y )  ) x -= 1.0 ; 
 
  else  if ( placeFree ( x - 2 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x - 1 , y - 2 )  )  { 
 x -= 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = false ; 
 
  
  
  if ( placeFree ( x - 6 , y + 14 )  ) flip = false ; 
 
  if ( x <= 0 ) flip = false ; 
 
  } 
  
  else  { 
  if ( placeFree ( x + 1 , y )  ) x += 1.0 ; 
 
  else  if ( placeFree ( x + 1 , y - 1 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else  if ( placeFree ( x + 2 , y - 2 )  )  { 
 x += 1.0 ; 
y -= 1.0 ; 
 } 
  
  else flip = true ; 
 
  
  
  if ( placeFree ( x + 6 , y + 14 )  ) flip = true ; 
 
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
  } 
  
  else  if ( moving && getupTime > 0 )  { 
 getupTime -= 0.2 ; 
 if ( getupTime < 0 ) getupTime = 0 ; 
 
  if ( gvPlayer ) flip = x > gvPlayer . x ; 
 
  } 
  
  
  if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
 drawSpriteEx ( sprSpikeCap , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else  { 
  if ( icebox !=  - 1 )  { 
 newActor ( IceChunks , x , y )  ; 
mapDeleteSolid ( icebox )  ; 
icebox =  - 1 ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  else flip = false ; 
 
  
  } 
  
  if ( getupTime == 0 ) drawSpriteEx ( sprSpikeCap , wrap ( getFrames (  )  / 8 , 0 , 3 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprSpikeCap , 6.0 - getupTime , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  } 
  
  } 
  
  else  { 
 squishTime += 0.025 ; 
 if ( squishTime >= 1 ) die (  )  ; 
 
 drawSpriteEx ( sprGradcap , floor ( 4.8 + squishTime )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 } 
  
  if (  ! squish ) shape . setPos ( x , y )  ; 
 
 setDrawColor ( 0xff0000ff )  ; 
 if ( debug ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . hurtPlayer = function ( target ) {  if ( squish )  return ; 
  
  baseMethods . hurtPlayer  ( target )  ; 
 } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( squish )  return ; 
  
  if ( _element == "fire" )  { 
 hurtFire (  )  ; 
 return ; 
  } 
  
  if ( _element == "ice" )  { 
 hurtIce (  )  ; 
 return ; 
  } 
  
  if ( _blast )  { 
 hurtblast (  )  ; 
 return ; 
  } 
  
  if ( _element == "fire" )  { 
 newActor ( Flame , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprSpikeCap ; 
actor [ c ]  . vspeed =  - 4.0 ; 
actor [ c ]  . spin = 1 ; 
actor [ c ]  . frame = 7 ; 
actor [ c ]  . flip = flip . tointeger (  )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  return ; 
  } 
  
  if ( _element == "ice" )  { 
 frozen = 600 ; 
 return ; 
  } 
  
  if ( gvPlayer . rawin ( "anSlide" )  )  { 
  if ( gvPlayer . anim == gvPlayer . anSlide && hitTest ( shape , gvPlayer . shape )  )  { 
  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprSpikeCap ; 
actor [ c ]  . vspeed = min (  - fabs ( gvPlayer . hspeed )  ,  - 4 )  ; 
actor [ c ]  . hspeed =  ( gvPlayer . hspeed / 16 )  ; 
actor [ c ]  . spin =  ( gvPlayer . hspeed * 7 )  ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 return ; 
  } 
  
  } 
  
  if (  ! _stomp )  { 
  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprSpikeCap ; 
actor [ c ]  . vspeed =  - 4.0 ; 
actor [ c ]  . spin = 4 ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } 
  
  else popSound ( sndSquish , 0 )  ; 
 
 squish = true ; 
blinking = 120 ; 
 } ;  returnVal . hurtblast = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprSpikeCap ; 
actor [ c ]  . vspeed =  - 4 ; 
actor [ c ]  . hspeed =  ( 4 / 16 )  ; 
actor [ c ]  . spin =  ( 4 * 7 )  ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 if ( icebox !=  - 1 ) mapDeleteSolid ( icebox )  ; 
 
  } ;  returnVal . hurtFire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprSpikeCap ; 
actor [ c ]  . vspeed =  - 4 ; 
actor [ c ]  . spin = 1 ; 
actor [ c ]  . frame = 7 ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "SpikeCap" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = false ; 
 squirrelClassFunction . squish = false ; 
 squirrelClassFunction . squishTime = 0.0 ; 
 squirrelClassFunction . smart = true ; 
 squirrelClassFunction . moving = false ; 
 squirrelClassFunction . getupTime = 2.0 ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 squirrelClassFunction . sharpTop = true ; 
 squirrelClassFunction . sharpSide = true ; 
 return squirrelClassFunction; })()) ; 
CaptainMorel =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = false ; 
 returnVal . moving = false ; 
 returnVal . touchDamage = 2.0 ; 
 returnVal . jumpPower = 2.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
smart = _arr ; 
 } ;  returnVal . routine = function (  ) {  } ;  returnVal . animation = function (  ) {  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! moving )  { 
  if ( gvPlayer && x > gvPlayer . x ) flip = true ; 
 
 moving = true ; 
 } 
  
  if ( placeFree ( x , y + 1 )  ) vspeed += 0.1 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if (  ! squish )  { 
  if ( y > gvMap . h + 8 ) die (  )  ; 
 
  if (  ! frozen )  { 
  if ( flip )  { 
  if ( placeFree ( x - 2 , y )  ) x -= 2.0 ; 
 
  else  if ( placeFree ( x - 4 , y - 2 )  )  { 
 x -= 2.0 ; 
y -= 2.0 ; 
 } 
  
  else  if ( placeFree ( x - 2 , y - 2 )  )  { 
 x -= 2.0 ; 
y -= 2.0 ; 
 } 
  
  else flip = false ; 
 
  
  
  if ( placeFree ( x - 6 , y + 14 )  &&  ! placeFree ( x + 2 , y + 14 )  ) vspeed =  - jumpPower ; 
 
  if ( x <= 0 ) flip = false ; 
 
  } 
  
  else  { 
  if ( placeFree ( x + 2 , y )  ) x += 2.0 ; 
 
  else  if ( placeFree ( x + 2 , y - 1 )  )  { 
 x += 2.0 ; 
y -= 2.0 ; 
 } 
  
  else  if ( placeFree ( x + 4 , y - 2 )  )  { 
 x += 2.0 ; 
y -= 2.0 ; 
 } 
  
  else flip = true ; 
 
  
  
  if ( placeFree ( x + 6 , y + 14 )  &&  ! placeFree ( x - 2 , y + 14 )  ) vspeed =  - jumpPower ; 
 
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
  } 
  
  if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
 drawSpriteEx ( sprCaptainMorel , 0 +  ( flip . tointeger (  )  * 8 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else  { 
  if ( icebox !=  - 1 )  { 
 newActor ( IceChunks , x , y )  ; 
mapDeleteSolid ( icebox )  ; 
icebox =  - 1 ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  else flip = false ; 
 
  
  } 
  
  if (  ! placeFree ( x , y + 2 )  ) drawSpriteEx ( sprCaptainMorel , wrap ( getFrames (  )  / 6 , 0 , 3 )  +  ( flip . tointeger (  )  * 9 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , 0 , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprCaptainMorel ,  (  squirrelThreeWaysCompare ( 0 , round ( vspeed / 2.0 )  )  )  + 5 +  ( flip . tointeger (  )  * 9 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , 0 , 1 , 1 , 1 )  ; 
 
  } 
  
  } 
  
  else  { 
 squishTime += 0.025 ; 
 if ( squishTime >= 1 ) die (  )  ; 
 
 drawSpriteEx ( sprCaptainMorel , floor ( 7.8 + squishTime )  +  ( flip . tointeger (  )  * 9 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , 0 , 1 , 1 , 1 )  ; 
 } 
  
  if (  ! squish ) shape . setPos ( x , y )  ; 
 
 setDrawColor ( 0xff0000ff )  ; 
 if ( debug ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . hurtPlayer = function ( target ) {  if ( blinking )  return ; 
  
  if ( squish )  return ; 
  
  baseMethods . hurtPlayer  ( target )  ; 
 } ;  returnVal . getHurt = function ( _by = 0 , _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( squish )  return ; 
  
  if ( _blast )  { 
 hurtblast (  )  ; 
 return ; 
  } 
  
  if ( _element == "fire" )  { 
 newActor ( Flame , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  return ; 
  } 
  
  if ( _element == "ice" )  { 
 frozen = 600 ; 
 return ; 
  } 
  
  if ( gvPlayer . rawin ( "anSlide" )  )  { 
  if ( gvPlayer . anim == gvPlayer . anSlide && hitTest ( shape , gvPlayer . shape )  )  { 
  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprCaptainMorel ; 
actor [ c ]  . vspeed = min (  - fabs ( gvPlayer . hspeed )  ,  - 4 )  ; 
actor [ c ]  . hspeed =  ( gvPlayer . hspeed / 16 )  ; 
actor [ c ]  . spin =  ( gvPlayer . hspeed * 7 )  ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 return ; 
  } 
  
  } 
  
  if (  ! _stomp )  { 
  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprCaptainMorel ; 
actor [ c ]  . vspeed =  - 4.0 ; 
actor [ c ]  . spin = 4 ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } 
  
  else popSound ( sndSquish , 0 )  ; 
 
 squish = true ; 
blinking = 120 ; 
 } ;  returnVal . hurtblast = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprCaptainMorel ; 
actor [ c ]  . vspeed =  - 4 ; 
actor [ c ]  . hspeed =  ( 4 / 16 )  ; 
actor [ c ]  . spin =  ( 4 * 7 )  ; 
actor [ c ]  . angle = 180 ; 
die (  )  ; 
popSound ( sndKick , 0 )  ; 
 if ( icebox !=  - 1 ) mapDeleteSolid ( icebox )  ; 
 
  } ;  returnVal . hurtFire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
die (  )  ; 
popSound ( sndFlame , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "CaptainMorel" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = false ; 
 squirrelClassFunction . squish = false ; 
 squirrelClassFunction . squishTime = 0.0 ; 
 squirrelClassFunction . smart = false ; 
 squirrelClassFunction . moving = false ; 
 squirrelClassFunction . touchDamage = 2.0 ; 
 squirrelClassFunction . jumpPower = 2.0 ; 
 return squirrelClassFunction; })()) ; 
Crusher =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . damageMult =  { normal : 0.0 , fire : 0.0 , ice : 0.0 , earth : 0.0 , air : 0.0 , toxic : 0.0 , shock : 0.0 , water : 0.0 , light : 0.0 , dark : 0.0 , cut : 0.0 , blast : 0.0 , stomp : 0.0 , star : 0.0 }  ; 
 returnVal . platform = null ; 
 returnVal . gravity = 0 ; 
 returnVal . scanShape = null ; 
 returnVal . waiting = 0 ; 
 returnVal . canFall = true ; 
 returnVal . sharpSide = true ; 
 returnVal . touchDamage = 2 ; 
 returnVal . nocount = true ; 
 returnVal . sprite = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
platform = actor [ newActor ( MoPlat , x , y ,  [  [  [ 0 , 0 ]  ,  [ 0 , 0 ]  ]  , 0 , 2 , 0 ]  )  ]  ; 
 if ( _arr != null && getroottable (  )  . rawin ( _arr )  ) sprite = getroottable (  )  [ _arr ]  ; 
 
  if ( randInt ( 200 )  == 0 ) sprite = sprDukeCrusher ; 
 
  var checkShape = Rec ( x , y - 8 , 15 , 8 , 0 )  ;
 shape = checkShape ; 
 for (  var i = 0 ;
 i < 1000 ; i ++  )  { 
 checkShape . setPos ( x , y + 8 +  ( i * 16 )  )  ; 
 if (  ! placeFree ( checkShape . x , checkShape . y )  )  { 
 scanShape = Rec ( x , y +  ( i * 8 )  , 24 , 8 +  ( i * 8 )  , 0 )  ; 
 break ;  } 
  
  } 
  if ( scanShape == null ) scanShape = Rec ( x , y +  ( 8000 )  , 24 ,  ( 8000 )  , 0 )  ; 
 
 shape = Rec ( x , y , 15 , 8 , 0 , 0 , 8 )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( y < ystart )  { 
 y = ystart ; 
vspeed = 0 ; 
canFall = true ; 
 } 
  
  if ( gvPlayer && hitTest ( gvPlayer . shape , scanShape )  && gvPlayer . y > y && canFall )  { 
 gravity = 0.25 ; 
vspeed = 1.0 ; 
canFall = false ; 
 } 
  
  if (  ! placeFree ( x , y + 1 )  && waiting == 0 )  { 
 waiting = 60 ; 
gravity = 0 ; 
 if ( vspeed > 0 )  { 
 newActor ( Poof , x - 12 , y + 12 , 7 )  ; 
newActor ( Poof , x + 12 , y + 12 , 7 )  ; 
fireWeapon ( ExplodeHiddenF , x , y + 12 , 0 , id )  ; 
 } 
  
 vspeed = 0 ; 
 } 
  
  if ( waiting > 0 )  { 
 waiting --  ; 
 if ( waiting == 0 ) vspeed =  - 1.0 ; 
 
  } 
  
 platform . y = y - 12 ; 
 if ( vspeed > 16 ) vspeed = 16.0 ; 
 
  if ( sprite ) drawSpriteZ ( 6 , sprite ,  ( vspeed > 0 )  . tointeger (  )  , x - camx , y - camy )  ; 
 
  else drawSpriteZ ( 6 , sprBearyl ,  ( vspeed > 0 )  . tointeger (  )  , x - camx , y - camy )  ; 
 
  if ( debug )  { 
 setDrawColor ( 0xff0000ff )  ; 
shape . draw (  )  ; 
 } 
  
  if ( vspeed > 4 ) newActor ( AfterImage , x , y ,  [ sprite , 1 , 0 , 0 , 0 , 1 , 1 ]  )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Crusher" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . damageMult =  { normal : 0.0 , fire : 0.0 , ice : 0.0 , earth : 0.0 , air : 0.0 , toxic : 0.0 , shock : 0.0 , water : 0.0 , light : 0.0 , dark : 0.0 , cut : 0.0 , blast : 0.0 , stomp : 0.0 , star : 0.0 }  ; 
 squirrelClassFunction . platform = null ; 
 squirrelClassFunction . gravity = 0 ; 
 squirrelClassFunction . scanShape = null ; 
 squirrelClassFunction . waiting = 0 ; 
 squirrelClassFunction . canFall = true ; 
 squirrelClassFunction . sharpSide = true ; 
 squirrelClassFunction . touchDamage = 2 ; 
 squirrelClassFunction . nocount = true ; 
 squirrelClassFunction . sprite = 0 ; 
 return squirrelClassFunction; })()) ; 
Wheeler =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . touchDamage = 2 ; 
 returnVal . sharpSide = true ; 
 returnVal . sharpTop = true ; 
 returnVal . gravity = 0.2 ; 
 returnVal . bladesOut = 0 ; 
 returnVal . flip = 0 ; 
 returnVal . mspeed = 4 ; 
 returnVal . turning = 0.0 ; 
 returnVal . friction = 0.0 ; 
 returnVal . minFreezeTime = 600 ; 
 returnVal . freezeSprite = sprIceTrapSmall ; 
 returnVal . damageMult =  { normal : 1.0 , fire : 1.0 , ice : 0.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 , stomp : 1.0 , star : 10.0 }  ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 7 , 7 )  ; 
 } ;  returnVal . run = function (  ) { bladesOut =  ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 )  )  . tointeger (  )  * 4 ; 
 if ( gvPlayer ) flip =  ( x > gvPlayer . x )  . tointeger (  )  ; 
 
  if ( gvPlayer )  { 
  if ( x - 16 > gvPlayer . x && hspeed >  - mspeed )  { 
 hspeed -= 0.2 ; 
 } 
  
  if ( x + 16 < gvPlayer . x && hspeed < mspeed )  { 
 hspeed += 0.2 ; 
 } 
  
  if ( turning < 3 &&  ( flip == 1 && hspeed > 0 || flip == 0 && hspeed < 0 )  ) turning = 4.0 ; 
 
  } 
  
  if ( frozen )  { 
 hspeed = 0 ; 
vspeed = 0 ; 
 if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
  if ( health > 0 ) icebox = mapNewSolid ( shape )  ; 
 
  } 
  
  
  } 
  
  else  if ( icebox !=  - 1 )  { 
 newActor ( IceChunks , x , y )  ; 
mapDeleteSolid ( icebox )  ; 
icebox =  - 1 ; 
 } 
  
  
  var frame = 0 ;
  if (  ! frozen ) frame = getFrames (  )  / 2 ; 
 
  if ( turning > 0 )  { 
 turning -= 0.25 ; 
drawSpriteEx ( sprWheelerHamster , 8.0 +  ( 4.0 - turning )  , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 } 
  
  else drawSpriteEx ( sprWheelerHamster , wrap ( frame , 0 , 3 )  + bladesOut , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 
  baseMethods . run  (  )  ; 
shape . setPos ( x , y )  ; 
 } ;  returnVal . physics = function (  ) {  if ( placeFree ( x , y +  (  squirrelThreeWaysCompare ( 0 , gravity )  )  )  &&  ! phantom ) vspeed += gravity ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else  { 
 vspeed /= 2 ; 
 if ( fabs ( vspeed )  < 0.01 ) vspeed = 0 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  } 
  
  if ( hspeed != 0 )  { 
  if ( placeFree ( x + hspeed , y )  )  { 
  for (  var i = 0 ;
 i < 4 ; i ++  )  if (  ! placeFree ( x , y + 4 )  && placeFree ( x + hspeed , y + 1 )  &&  ! inWater (  )  && vspeed >= 0 &&  ! placeFree ( x + hspeed , y + 4 )  )  { 
 y += 1 ; 
 } 
  
 x += hspeed ; 
 } 
  
  else  { 
  var didstep = false ;
  for (  var i = 1 ;
 i <= max ( 4 , abs ( hspeed * 1.5 )  )  ; i ++  )  { 
  if ( placeFree ( x + hspeed , y - i )  )  { 
 x += hspeed ; 
y -= i ; 
 if ( i > 2 )  { 
  if ( hspeed > 0 ) hspeed -= 0.1 ; 
 
  if ( hspeed < 0 ) hspeed += 0.1 ; 
 
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
 } ;  returnVal . die = function (  ) {  baseMethods . die  (  )  ; 
newActor ( Poof , x , y )  ; 
 var c ;
 c = actor [ newActor ( DeadNME , x , y )  ]  ; 
c . sprite = sprWheelerHamster ; 
c . hspeed =  - 1.0 ; 
c . vspeed =  - 3.0 ; 
c . frame = 12 ; 
c . gravity = 0.1 ; 
c = actor [ newActor ( DeadNME , x , y )  ]  ; 
c . sprite = sprWheelerHamster ; 
c . hspeed = 1.0 ; 
c . vspeed =  - 3.0 ; 
c . frame = 13 ; 
c . gravity = 0.1 ; 
c = actor [ newActor ( DeadNME , x , y )  ]  ; 
c . sprite = sprWheelerHamster ; 
c . hspeed =  - 1.0 ; 
c . vspeed =  - 1.0 ; 
c . frame = 14 ; 
c . gravity = 0.1 ; 
c = actor [ newActor ( DeadNME , x , y )  ]  ; 
c . sprite = sprWheelerHamster ; 
c . hspeed = 1.0 ; 
c . vspeed =  - 1.0 ; 
c . frame = 15 ; 
c . gravity = 0.1 ; 
 } ;  returnVal . _typeof = function (  ) {  return "Wheeler" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . touchDamage = 2 ; 
 squirrelClassFunction . sharpSide = true ; 
 squirrelClassFunction . sharpTop = true ; 
 squirrelClassFunction . gravity = 0.2 ; 
 squirrelClassFunction . bladesOut = 0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . mspeed = 4 ; 
 squirrelClassFunction . turning = 0.0 ; 
 squirrelClassFunction . friction = 0.0 ; 
 squirrelClassFunction . minFreezeTime = 600 ; 
 squirrelClassFunction . freezeSprite = sprIceTrapSmall ; 
 squirrelClassFunction . damageMult =  { normal : 1.0 , fire : 1.0 , ice : 0.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 , stomp : 1.0 , star : 10.0 }  ; 
 return squirrelClassFunction; })()) ; 



}; 
