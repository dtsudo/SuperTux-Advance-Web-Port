if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/player.nut'] = function () { 


Player =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . playerNum = 0 ; 
 returnVal . anim = null ; 
 returnVal . sprite = 0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shapeStand = null ; 
 returnVal . shapeCrouch = null ; 
 returnVal . shapeSwim = null ; 
 returnVal . resTime = 0 ; 
 returnVal . endMode = false ; 
 returnVal . endSpeed = 0 ; 
 returnVal . xstart = 0.0 ; 
 returnVal . ystart = 0.0 ; 
 returnVal . canStomp = false ; 
 returnVal . stompDamage = 1 ; 
 returnVal . canGroundPound = true ; 
 returnVal . canSlide = false ; 
 returnVal . canMove = true ; 
 returnVal . held = null ; 
 returnVal . useMouse = false ; 
 returnVal . mouseSprite = sprCursor ; 
 returnVal . inMelee = false ; 
 returnVal . magnetic = false ; 
 returnVal . advancedClimbing = false ; 
 returnVal . invincible = 0 ; 
 returnVal . mustSink = false ; 
 returnVal . weight = 1.0 ; 
 returnVal . jumpForce = 2.0 ; 
 returnVal . walkSpeed = 1.0 ; 
 returnVal . jogSpeed = 2.0 ; 
 returnVal . runSpeed = 3.0 ; 
 returnVal . accel = 0.2 ; 
 returnVal . friction = 0.1 ; 
 returnVal . baseFriction = 0.1 ; 
 returnVal . swimming = false ; 
 returnVal . nowInWater = false ; 
 returnVal . wasInWater = false ; 
 returnVal . onWall = false ; 
 returnVal . hurt = 0 ; 
 returnVal . hurtType = "normal" ; 
 returnVal . damageMult =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 returnVal . blinking = 0 ; 
 returnVal . zoomies = 0 ; 
 returnVal . stats = null ; 
 returnVal . hidden = false ; 
 returnVal . heldby = 0 ; 
 returnVal . holding = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
 if (  ! gvPlayer )  { 
 gvPlayer = this ; 
stats = game . ps ; 
playerNum = 1 ; 
 } 
  
  else  if ( gvPlayer &&  ! gvPlayer2 )  { 
 gvPlayer2 = this ; 
stats = game . ps2 ; 
playerNum = 2 ; 
 } 
  
  
  if ( stats . health <= 0 || game . difficulty < 2 ) stats . health = game . maxHealth ; 
 
 xstart = _x ; 
ystart = _y ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( actor . rawin ( "WeaponEffect" )  )  {     var foreachOutput1 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; i = foreachOutput1.getValue();  { 
  if ( i . alignment == 1 ) continue ; 
 
  if ( i . owner == id ) continue ; 
 
  if ( i . alignment != 1 && i . owner != id && hitTest ( shape , i . shape )  )  { 
 getHurt ( i . power , i . element , i . cut , i . blast )  ; 
 if ( i . piercing == 0 ) deleteActor ( i . id )  ; 
 
  else i . piercing --  ; 
 
  } 
  
  } 
     }  }  
  if ( zoomies > 0 ) zoomies --  ; 
 
  if ( resTime > 0 ) resTime --  ; 
 
  if ( y > gvMap . h &&  ( resTime > 0 || inWater ( x , y )  &&  ! mustSink )  )  { 
 y = gvMap . h ; 
 if (  ! placeFree ( x , y )  )  { 
  var xrange = 0 ;
  while ( true )  { 
 xrange ++  ; 
 if ( placeFree ( x + xrange , y )  )  { 
 x += xrange ; 
 break ;  } 
  
  if ( placeFree ( x - xrange , y )  )  { 
 x -= xrange ; 
 break ;  } 
  
  } 
  
  } 
  
  } 
  
  if ( y > gvMap . h + 16 &&  ! inWater ( x , y )  || stats . health <= 0 )  { 
 die (  )  ; 
 return ; 
  } 
  
  if ( y <  - 100 ) y =  - 100.0 ; 
 
  if ( y < 0 &&  ! placeFree ( x , y )  )  { 
  var xrange = 0 ;
  while ( true )  { 
 xrange ++  ; 
 if ( placeFree ( x + xrange , y )  )  { 
 x += xrange ; 
 break ;  } 
  
  if ( placeFree ( x - xrange , y )  )  { 
 x -= xrange ; 
 break ;  } 
  
  } 
  
  } 
  
  if ( endMode )  { 
  if ( hspeed < endSpeed && endSpeed > 0 &&  ( placeFree ( x + 1 , y )  || placeFree ( x + 1 , y - 2 )  )  )  { 
 hspeed += accel ; 
rspeed += accel ; 
 } 
  
  if ( hspeed > endSpeed && endSpeed < 0 &&  ( placeFree ( x - 1 , y )  || placeFree ( x - 1 , y - 2 )  )  )  { 
 hspeed -= accel ; 
rspeed -= accel ; 
 } 
  
  } 
  
  if ( onHazard ( x , y )  ) hurt = min (  ( ceil ( game . maxHealth / 10.0 )  * damageMult . cut )  , 4 +  ( game . difficulty * 2 )  )  ; 
 
  if ( onDeath ( x , y )  ) die ( true )  ; 
 
  if ( x < 4 )  { 
 x = 4 ; 
 if ( getcon ( "left" , "hold" , false , playerNum )  &&  ! endMode &&  ! gvTimeAttack ) gvExitTimer += 1.0 ; 
 
 gvExitSide = 0 ; 
 } 
  
  if ( x > gvMap . w - 4 )  { 
 x = gvMap . w - 4 ; 
 if ( getcon ( "right" , "hold" , false , playerNum )  &&  ! endMode &&  ! gvTimeAttack ) gvExitTimer += 1.0 ; 
 
 gvExitSide = 1 ; 
 } 
  
 stats . maxEnergy = 4 + game . energyBonus - game . difficulty ; 
stats . maxStamina = 4 + game . staminaBonus - game . difficulty ; 
 if ( stats . energy > stats . maxEnergy ) stats . energy = stats . maxEnergy ; 
 
  if ( stats . stamina > stats . maxStamina ) stats . stamina = stats . maxStamina ; 
 
  if ( wasInWater &&  ! nowInWater || nowInWater &&  ! wasInWater ) newActor ( Splash , x , y ,  ( nowInWater ? nowInWater : wasInWater )  )  ; 
 
  if ( holding != 0 &&  ! checkActor ( holding )  ) holding = 0 ; 
 
  } ;  returnVal . getHurt = function ( _mag = 1 , _element = "normal" , _cut = false , _blast = false ) {  if ( blinking > 0 )  return ; 
  
  var damage = _mag * damageMult [ _element ]  ;
  if ( _cut ) damage *= damageMult [ "cut" ]  ; 
 
  if ( _blast ) damage *= damageMult [ "blast" ]  ; 
 
 hurt = damage ; 
 } ;  returnVal . checkHurt = function (  ) {  if (  ! blinking )  { 
  if ( hurt )  { 
  } 
  
  } 
  
  else blinking --  ; 
 
  } ;  returnVal . atLadder = function ( _x =  - 1 , _y =  - 1 ) {  var ns = Rec ( x + shape . ox , y + shape . oy , shape . w , shape . h , shape . kind )  ;
  if ( _x !=  - 1 ) ns . x = _x ; 
 
  if ( _y !=  - 1 ) ns . y = _y ; 
 
  var cx = floor ( ns . x / 16 )  ;
  var cy = floor ( ns . y / 16 )  ;
  var wl = null ;
  for (  var i = 0 ;
 i < gvMap . data . layers . len (  )  ; i ++  )  { 
  if ( gvMap . data . layers [ i ]  . type == "tilelayer" && gvMap . data . layers [ i ]  . name == "solid" )  { 
 wl = gvMap . data . layers [ i ]  ; 
 break ;  } 
  
  } 
  if ( wl != null )  { 
  var tile = cx +  ( cy * wl . width )  ;
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 29 || wl . data [ tile ]  - gvMap . solidfid == 50 ||  ( wl . data [ tile ]  - gvMap . solidfid == 79 && advancedClimbing )  )  { 
 gvMap . shape . setPos (  ( cx * 16 )  + 8 ,  ( cy * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 4.0 ; 
gvMap . shape . h = 12.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  } 
  
  
  } 
  
  return false ;
  } ;  returnVal . atCrossLadder = function (  ) {  var ns = Rec ( x + shape . ox , y + shape . oy , shape . w , shape . h , shape . kind )  ;
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
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 80 ||  ( wl . data [ tile ]  - gvMap . solidfid == 81 && advancedClimbing )  )  { 
 gvMap . shape . setPos (  ( cx * 16 )  + 8 ,  ( cy * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 8.0 ; 
gvMap . shape . h = 8.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  } 
  
  
  } 
  
  return false ;
  } ;  returnVal . atWallLadder = function (  ) {  var ns = Rec ( x + shape . ox , y + shape . oy , shape . w , shape . h , shape . kind )  ;
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
  if ( tile >= 0 && tile < wl . data . len (  )  )  if ( wl . data [ tile ]  - gvMap . solidfid == 35 || wl . data [ tile ]  - gvMap . solidfid == 36 )  { 
 gvMap . shape . setPos (  ( cx * 16 )  + 8 ,  ( cy * 16 )  + 8 )  ; 
gvMap . shape . kind = 0 ; 
gvMap . shape . w = 1.0 ; 
gvMap . shape . h = 12.0 ; 
 if ( hitTest ( ns , gvMap . shape )  )  return true ;
  
  } 
  
  
  } 
  
  return false ;
  } ;  returnVal . swapitem = function (  ) {  if ( stats . subitem == 0 )  return ; 
  
  var swap = stats . subitem ;
  if ( stats . weapon == stats . subitem )  { 
  if ( stats . maxEnergy < 4 - game . difficulty )  { 
 stats . maxEnergy ++  ; 
stats . subitem = 0 ; 
tftime = 0 ; 
popSound ( sndHeal , 0 )  ; 
 } 
  
  return ; 
  } 
  
  switch ( swap )  {  case "fire" : stats . subitem = stats . weapon ; 
stats . weapon = "fire" ; 
popSound ( sndHeal , 0 )  ; 
tftime = 0 ; 
 break ;  case "ice" : stats . subitem = stats . weapon ; 
stats . weapon = "ice" ; 
popSound ( sndHeal , 0 )  ; 
tftime = 0 ; 
 break ;  case "air" : stats . subitem = stats . weapon ; 
stats . weapon = "air" ; 
popSound ( sndHeal , 0 )  ; 
tftime = 0 ; 
 break ;  case "earth" : stats . subitem = stats . weapon ; 
stats . weapon = "earth" ; 
popSound ( sndHeal , 0 )  ; 
tftime = 0 ; 
 break ;  case "water" : stats . subitem = stats . weapon ; 
stats . weapon = "water" ; 
popSound ( sndHeal , 0 )  ; 
tftime = 0 ; 
 break ;  case "shock" : stats . subitem = stats . weapon ; 
stats . weapon = "shock" ; 
popSound ( sndHeal , 0 )  ; 
tftime = 0 ; 
 break ;  case "muffinBlue" :  if ( stats . health < game . maxHealth )  { 
 stats . health += 4 ; 
 for (  var i = 0 ;
 i < 4 ; i ++  ) newActor ( Heal , x - 16 + randInt ( 32 )  , y - 16 + randInt ( 32 )  )  ; 
popSound ( sndHeal , 0 )  ; 
stats . subitem = 0 ; 
 } 
  
  break ;  case "muffinRed" :  if ( stats . health < game . maxHealth )  { 
 stats . health += 16 ; 
 for (  var i = 0 ;
 i < 4 ; i ++  ) newActor ( Heal , x - 16 + randInt ( 32 )  , y - 16 + randInt ( 32 )  )  ; 
popSound ( sndHeal , 0 )  ; 
stats . subitem = 0 ; 
 } 
  
  break ;  case "star" : invincible = 645 ; 
playMusic ( musInvincible ,  - 1 )  ; 
gvLastSong = "" ; 
stats . subitem = 0 ; 
 break ;  case "coffee" : popSound ( sndGulp , 0 )  ; 
zoomies += 60 * 16 ; 
stats . subitem = 0 ; 
 break ;  }  } ;  returnVal . atZipline = function ( _x = 0 , _y = 0 ) {  var found =  [ 31 , 32 , 33 , 34 , 35 , 39 ]  . squirrelFind ( tileGetSolid ( x + _x , y - shape . h + _y )  )  ;
  if ( found != null ) found ++  ; 
 
  return found ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . playerNum = 0 ; 
 squirrelClassFunction . anim = null ; 
 squirrelClassFunction . sprite = 0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shapeStand = null ; 
 squirrelClassFunction . shapeCrouch = null ; 
 squirrelClassFunction . shapeSwim = null ; 
 squirrelClassFunction . resTime = 0 ; 
 squirrelClassFunction . endMode = false ; 
 squirrelClassFunction . endSpeed = 0 ; 
 squirrelClassFunction . xstart = 0.0 ; 
 squirrelClassFunction . ystart = 0.0 ; 
 squirrelClassFunction . canStomp = false ; 
 squirrelClassFunction . stompDamage = 1 ; 
 squirrelClassFunction . canGroundPound = true ; 
 squirrelClassFunction . canSlide = false ; 
 squirrelClassFunction . canMove = true ; 
 squirrelClassFunction . held = null ; 
 squirrelClassFunction . useMouse = false ; 
 squirrelClassFunction . mouseSprite = sprCursor ; 
 squirrelClassFunction . inMelee = false ; 
 squirrelClassFunction . magnetic = false ; 
 squirrelClassFunction . advancedClimbing = false ; 
 squirrelClassFunction . invincible = 0 ; 
 squirrelClassFunction . mustSink = false ; 
 squirrelClassFunction . weight = 1.0 ; 
 squirrelClassFunction . jumpForce = 2.0 ; 
 squirrelClassFunction . walkSpeed = 1.0 ; 
 squirrelClassFunction . jogSpeed = 2.0 ; 
 squirrelClassFunction . runSpeed = 3.0 ; 
 squirrelClassFunction . accel = 0.2 ; 
 squirrelClassFunction . friction = 0.1 ; 
 squirrelClassFunction . baseFriction = 0.1 ; 
 squirrelClassFunction . swimming = false ; 
 squirrelClassFunction . nowInWater = false ; 
 squirrelClassFunction . wasInWater = false ; 
 squirrelClassFunction . onWall = false ; 
 squirrelClassFunction . hurt = 0 ; 
 squirrelClassFunction . hurtType = "normal" ; 
 squirrelClassFunction . damageMult =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 squirrelClassFunction . blinking = 0 ; 
 squirrelClassFunction . zoomies = 0 ; 
 squirrelClassFunction . stats = null ; 
 squirrelClassFunction . hidden = false ; 
 squirrelClassFunction . heldby = 0 ; 
 squirrelClassFunction . holding = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
DeadPlayer =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . vspeed =  - 4.0 ; 
 returnVal . timer = 150 ; 
 returnVal . sprite = null ; 
 returnVal . frame = 0.0 ; 
 returnVal . anim = null ; 
 returnVal . playerNum = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if (  ! gvPlayer &&  ! gvPlayer2 ) stopMusic (  )  ; 
 
 playSound ( sndDie , 0 )  ; 
sprite = _arr [ 0 ]  ; 
anim = _arr [ 1 ]  ; 
playerNum = _arr [ 2 ]  ; 
 } ;  returnVal . run = function (  ) { vspeed += 0.1 ; 
y += vspeed ; 
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
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprite , anim [ wrap ( floor ( getFrames (  )  / 15 )  , 0 , anim . len (  )  - 1 )  ]  , floor ( x - camx )  , floor ( y - camy )  )  ; 
drawLight ( sprLightBasic , 0 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "DeadPlayer" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . vspeed =  - 4.0 ; 
 squirrelClassFunction . timer = 150 ; 
 squirrelClassFunction . sprite = null ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . anim = null ; 
 squirrelClassFunction . playerNum = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 



}; 
