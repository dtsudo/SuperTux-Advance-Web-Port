if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/shop.nut'] = function () { 


ShopBlockHealth =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . soldout = false ; 
 returnVal . price = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( game . maxHealth >= 16 * 4 ) soldout = true ; 
 
 price =  ( game . maxHealth + 1 )  *  ( 50 *  ( game . difficulty + 1 )  )  ; 
 if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( v <=  - 8 )  { 
 vspeed = 0.5 ; 
 } 
  
  if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if (  ! soldout && game . coins >= price )  { 
 gvPlayer . vspeed = 0 ; 
vspeed =  - 1 ; 
playSound ( sndHeal , 0 )  ; 
game . maxHealth += 4 ; 
game . coins -= price ; 
 } 
  
  
  
  } 
  
 v += vspeed ; 
 } ;  returnVal . draw = function (  ) {  var pricetag = chint ( 95 )  . tostring (  )  + price . tostring (  )  ;
  if ( soldout ) drawSpriteZ ( 2 , sprBoxEmpty , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else  { 
 drawSpriteZ ( 2 , sprBoxShop , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
drawSpriteZ ( 2 , sprHealth , getFrames (  )  / 32 , x - 8 - camx , y - 8 - camy + v )  ; 
drawText ( font , x - camx -  ( pricetag . len (  )  * 3 )  , y - 16 - camy , pricetag )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . soldout = false ; 
 squirrelClassFunction . price = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
ShopBlockEnergy =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . soldout = false ; 
 returnVal . price = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( game . energyBonus >= 16 ) soldout = true ; 
 
 price =  ( game . energyBonus + 1 )  *  ( 640 *  (  ( game . difficulty . tofloat (  )  / 2 )  + 1 )  )  ; 
 if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( v <=  - 8 )  { 
 vspeed = 0.5 ; 
 } 
  
  if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if (  ! soldout && game . coins >= price )  { 
 gvPlayer . vspeed = 0 ; 
vspeed =  - 1 ; 
playSound ( sndHeal , 0 )  ; 
game . energyBonus += 1 ; 
game . coins -= price ; 
game . ps . maxEnergy ++  ; 
 } 
  
  
  
  } 
  
 v += vspeed ; 
 } ;  returnVal . draw = function (  ) {  var pricetag = chint ( 95 )  . tostring (  )  + price . tostring (  )  ;
  if ( soldout ) drawSpriteZ ( 2 , sprBoxEmpty , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else  { 
 drawSpriteZ ( 2 , sprBoxShop , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
drawSpriteZ ( 2 , sprEnergy , getFrames (  )  / 32 , x - camx - 8 , y - camy - 8 + v )  ; 
drawText ( font , x - camx -  ( pricetag . len (  )  * 3 )  , y - 16 - camy , pricetag )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . soldout = false ; 
 squirrelClassFunction . price = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
ShopBlockStamina =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . soldout = false ; 
 returnVal . price = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( game . staminaBonus >= 16 ) soldout = true ; 
 
 price =  ( game . staminaBonus + 1 )  *  ( 640 *  (  ( game . difficulty . tofloat (  )  / 2 )  + 1 )  )  ; 
 if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( v <=  - 8 )  { 
 vspeed = 0.5 ; 
 } 
  
  if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if (  ! soldout && game . coins >= price )  { 
 gvPlayer . vspeed = 0 ; 
vspeed =  - 1 ; 
playSound ( sndHeal , 0 )  ; 
game . staminaBonus += 1 ; 
game . coins -= price ; 
game . ps . maxStamina ++  ; 
 } 
  
  
  
  } 
  
 v += vspeed ; 
 } ;  returnVal . draw = function (  ) {  var pricetag = chint ( 95 )  . tostring (  )  + price . tostring (  )  ;
  if ( soldout ) drawSpriteZ ( 2 , sprBoxEmpty , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else  { 
 drawSpriteZ ( 2 , sprBoxShop , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
drawSpriteZ ( 2 , sprStamina , getFrames (  )  / 32 , x - camx - 8 , y - camy - 8 + v )  ; 
drawText ( font , x - camx -  ( pricetag . len (  )  * 3 )  , y - 16 - camy , pricetag )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . soldout = false ; 
 squirrelClassFunction . price = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
ShopBlockWorld =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . soldout = false ; 
 returnVal . price = 0 ; 
 returnVal . basePrice = 0 ; 
 returnVal . state = "" ; 
 returnVal . limit = 0 ; 
 returnVal . name = "" ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
state = _arr [ 0 ]  ; 
basePrice = int ( _arr [ 1 ]  )  ; 
limit = int ( _arr [ 2 ]  )  ; 
name = _arr [ 3 ]  ; 
 } ;  returnVal . run = function (  ) {  if ( game . state [ state ]  >= limit ) soldout = true ; 
 
 price =  ( game . state [ state ]  + 1 )  * basePrice ; 
 if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( v <=  - 8 )  { 
 vspeed = 0.5 ; 
 } 
  
  if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if (  ! soldout && game . coins >= price )  { 
 gvPlayer . vspeed = 0 ; 
vspeed =  - 1 ; 
playSound ( sndHeal , 0 )  ; 
game . state [ state ]  ++  ; 
game . coins -= price ; 
 } 
  
  
  
  } 
  
 v += vspeed ; 
 } ;  returnVal . draw = function (  ) {  var pricetag = chint ( 95 )  . tostring (  )  + price . tostring (  )  ;
  if ( soldout ) drawSpriteZ ( 2 , sprBoxEmpty , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else  { 
 drawSpriteZ ( 2 , sprBoxShop , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
drawText ( font , x - camx -  ( pricetag . len (  )  * 3 )  , y - 16 - camy , pricetag )  ; 
drawText ( font , x - camx -  ( name . len (  )  * 3 )  , y - 24 - camy , name )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . soldout = false ; 
 squirrelClassFunction . price = 0 ; 
 squirrelClassFunction . basePrice = 0 ; 
 squirrelClassFunction . state = "" ; 
 squirrelClassFunction . limit = 0 ; 
 squirrelClassFunction . name = "" ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
ShopBlockSulphur =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . soldout = false ; 
 returnVal . price = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( game . hasSulphur ) soldout = true ; 
 
 price = 100 +  ( 100 * game . difficulty )  ; 
 if ( v > 0 )  { 
 vspeed = 0 ; 
v = 0 ; 
 } 
  
  if ( v <=  - 8 )  { 
 vspeed = 0.5 ; 
 } 
  
  if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  if ( gvPlayer . vspeed < 0 && v == 0 )  if (  ! soldout && game . coins >= price )  { 
 gvPlayer . vspeed = 0 ; 
vspeed =  - 1 ; 
playSound ( sndHeal , 0 )  ; 
game . coins -= price ; 
game . hasSulphur = 1 ; 
 var c = actor [ newActor ( SulphurNimbus , 0 , y )  ]  ;
 c . freed = 1 ; 
 } 
  
  
  
  } 
  
  if ( gvPlayer2 )  { 
  if ( hitTest ( shape , gvPlayer2 . shape )  )  if ( gvPlayer2 . vspeed < 0 && v == 0 )  if (  ! soldout && game . coins >= price )  { 
 gvPlayer2 . vspeed = 0 ; 
vspeed =  - 1 ; 
playSound ( sndHeal , 0 )  ; 
game . coins -= price ; 
game . hasSulphur = 2 ; 
 var c = actor [ newActor ( SulphurNimbus , 0 , y )  ]  ;
 c . freed = 2 ; 
 } 
  
  
  
  } 
  
 v += vspeed ; 
 } ;  returnVal . draw = function (  ) {  var pricetag = chint ( 95 )  . tostring (  )  + price . tostring (  )  ;
  if ( soldout ) drawSpriteZ ( 2 , sprBoxEmpty , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else  { 
 drawSpriteZ ( 2 , sprBoxShop , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
drawSpriteZ ( 2 , sprActors , 108 , x - camx , y - camy + v )  ; 
drawText ( font , x - camx -  ( pricetag . len (  )  * 3 )  , y - 16 - camy , pricetag )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . soldout = false ; 
 squirrelClassFunction . price = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 



}; 
