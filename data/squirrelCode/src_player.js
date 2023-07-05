if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/player.nut'] = function () { 


Player =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 returnVal . anStand = null ; 
 returnVal . anWalk = null ; 
 returnVal . anJog = null ; 
 returnVal . anRun = null ; 
 returnVal . anJumpU = null ; 
 returnVal . anJumpT = null ; 
 returnVal . anFall = null ; 
 returnVal . anDive = null ; 
 returnVal . anSlide = null ; 
 returnVal . anCrawl = null ; 
 returnVal . anHurt = null ; 
 returnVal . canStomp = false ; 
 returnVal . canGroundPound = true ; 
 returnVal . canSlide = false ; 
 returnVal . canMove = true ; 
 returnVal . held = null ; 
 returnVal . useMouse = false ; 
 returnVal . mouseSprite = sprCursor ; 
 returnVal . weight = 1.0 ; 
 returnVal . jumpForce = 2.0 ; 
 returnVal . walkSpeed = 1.0 ; 
 returnVal . jogSpeed = 2.0 ; 
 returnVal . runSpeed = 3.0 ; 
 returnVal . accel = 0.2 ; 
 returnVal . friction = 0.1 ; 
 returnVal . baseFriction = 0.1 ; 
 returnVal . swimming = false ; 
 returnVal . hurt = 0 ; 
 returnVal . hurtType = "normal" ; 
 returnVal . damageMult =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 returnVal . blinking = 0 ; 
 returnVal . zoomies = 0 ; 
 returnVal . heldby = 0 ; 
 returnVal . holding = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
 if (  ! gvPlayer ) gvPlayer = this ; 
 
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
 
  if ( resTime > 0 && y > gvMap . h ) y = gvMap . h ; 
 
  if ( y <  - 100 ) y =  - 100.0 ; 
 
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
 break ;  }  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . playerNum = 0 ; 
 squirrelClassFunction . anim = null ; 
 squirrelClassFunction . sprite = 0 ; 
 squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . shapeStand = null ; 
 squirrelClassFunction . shapeCrouch = null ; 
 squirrelClassFunction . shapeSwim = null ; 
 squirrelClassFunction . resTime = 0 ; 
 squirrelClassFunction . endMode = false ; 
 squirrelClassFunction . anStand = null ; 
 squirrelClassFunction . anWalk = null ; 
 squirrelClassFunction . anJog = null ; 
 squirrelClassFunction . anRun = null ; 
 squirrelClassFunction . anJumpU = null ; 
 squirrelClassFunction . anJumpT = null ; 
 squirrelClassFunction . anFall = null ; 
 squirrelClassFunction . anDive = null ; 
 squirrelClassFunction . anSlide = null ; 
 squirrelClassFunction . anCrawl = null ; 
 squirrelClassFunction . anHurt = null ; 
 squirrelClassFunction . canStomp = false ; 
 squirrelClassFunction . canGroundPound = true ; 
 squirrelClassFunction . canSlide = false ; 
 squirrelClassFunction . canMove = true ; 
 squirrelClassFunction . held = null ; 
 squirrelClassFunction . useMouse = false ; 
 squirrelClassFunction . mouseSprite = sprCursor ; 
 squirrelClassFunction . weight = 1.0 ; 
 squirrelClassFunction . jumpForce = 2.0 ; 
 squirrelClassFunction . walkSpeed = 1.0 ; 
 squirrelClassFunction . jogSpeed = 2.0 ; 
 squirrelClassFunction . runSpeed = 3.0 ; 
 squirrelClassFunction . accel = 0.2 ; 
 squirrelClassFunction . friction = 0.1 ; 
 squirrelClassFunction . baseFriction = 0.1 ; 
 squirrelClassFunction . swimming = false ; 
 squirrelClassFunction . hurt = 0 ; 
 squirrelClassFunction . hurtType = "normal" ; 
 squirrelClassFunction . damageMult =  { normal : 1.0 , fire : 1.0 , ice : 1.0 , earth : 1.0 , air : 1.0 , toxic : 1.0 , shock : 1.0 , water : 1.0 , light : 1.0 , dark : 1.0 , cut : 1.0 , blast : 1.0 }  ; 
 squirrelClassFunction . blinking = 0 ; 
 squirrelClassFunction . zoomies = 0 ; 
 squirrelClassFunction . heldby = 0 ; 
 squirrelClassFunction . holding = 0 ; 
 return squirrelClassFunction; })()) ; 



}; 
