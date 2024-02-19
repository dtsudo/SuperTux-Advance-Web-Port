if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/enemies_OLD.nut'] = function () { 


Wildcap =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = false ; 
 returnVal . moving = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
smart = _arr ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! moving )  if ( gvPlayer )  if ( x > gvPlayer . x )  { 
 flip = true ; 
moving = true ; 
 } 
  
  
  
  if (  ! squish )  { 
  if ( placeFree ( x , y + 1 )  ) vspeed += 0.1 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) deleteActor ( id )  ; 
 
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
 icebox = mapNewSolid ( shape )  ; 
 } 
  
  
  if ( smart ) drawSpriteEx ( sprWildcap , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprWildcap , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  if ( frozen <= 70 )  { 
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
  
  if ( smart ) drawSpriteEx ( sprWildcap , wrap ( getFrames (  )  / 8 , 0 , 3 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprWildcap , wrap ( getFrames (  )  / 8 , 0 , 3 )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  } 
  
  } 
  
  else  { 
 squishTime += 0.025 ; 
 if ( squishTime >= 1 ) deleteActor ( id )  ; 
 
  if ( smart ) drawSpriteEx ( sprWildcap , floor ( 4.8 + squishTime )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprWildcap , floor ( 4.8 + squishTime )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
setDrawColor ( 0xff0000ff )  ; 
 if ( debug ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . hurtPlayer = function (  ) {  if ( squish )  return ; 
  
 gvPlayer . hurt = 4 ; 
 } ;  returnVal . getHurt = function ( _mag = 1 , _element = "normal" , _cut = false , _blast = false , _stomp = false ) {  if ( squish )  return ; 
  
  if ( gvPlayer . rawin ( "anSlide" )  )  { 
  if ( gvPlayer . anim == gvPlayer . anSlide )  { 
  var c = newActor ( DeadNME , x , y )  ;
 gvPlayer . hurt = 1 ; 
actor [ c ]  . sprite = sprWildcap ; 
actor [ c ]  . vspeed =  - abs ( gvPlayer . hspeed )  ; 
actor [ c ]  . hspeed =  ( gvPlayer . hspeed / 16 )  ; 
actor [ c ]  . spin =  ( gvPlayer . hspeed * 7 )  ; 
actor [ c ]  . angle = 180 ; 
deleteActor ( id )  ; 
playSound ( sndKick , 0 )  ; 
 } 
  
  else  if ( getcon ( "jump" , "hold" )  ) gvPlayer . vspeed =  - 8.0 ; 
 
  else  { 
 gvPlayer . vspeed =  - 4.0 ; 
playSound ( sndSquish , 0 )  ; 
 } 
  
  
  if ( gvPlayer . anim == gvPlayer . anJumpT || gvPlayer . anim == gvPlayer . anFall )  { 
 gvPlayer . anim = gvPlayer . anJumpU ; 
gvPlayer . frame = gvPlayer . anJumpU [ 0 ]  ; 
 } 
  
  } 
  
  else  if ( getcon ( "jump" , "hold" )  ) gvPlayer . vspeed =  - 8.0 ; 
 
  else gvPlayer . vspeed =  - 4.0 ; 
 
  
  if ( gvPlayer . anim == gvPlayer . anJumpT || gvPlayer . anim == gvPlayer . anFall )  { 
 gvPlayer . anim = gvPlayer . anJumpU ; 
gvPlayer . frame = gvPlayer . anJumpU [ 0 ]  ; 
 } 
  
 squish = true ; 
 } ;  returnVal . hurtBlast = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprWildcap ; 
actor [ c ]  . vspeed =  - 4 ; 
actor [ c ]  . hspeed =  ( 4 / 16 )  ; 
actor [ c ]  . spin =  ( 4 * 7 )  ; 
actor [ c ]  . angle = 180 ; 
deleteActor ( id )  ; 
playSound ( sndKick , 0 )  ; 
 if ( icebox !=  - 1 ) mapDeleteSolid ( icebox )  ; 
 
  } ;  returnVal . hurtFire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
 if ( randInt ( 40 )  == 0 )  { 
  var a = actor [ newActor ( MuffinRed , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . hurtIce = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "Deathcap" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . flip = false ; 
 squirrelClassFunction . squish = false ; 
 squirrelClassFunction . squishTime = 0.0 ; 
 squirrelClassFunction . smart = false ; 
 squirrelClassFunction . moving = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Enemy;  return squirrelClassFunction; })()) ; 



}; 
