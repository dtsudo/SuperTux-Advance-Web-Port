if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/shop.nut'] = function () { 


ShopBlockHealth =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . soldout = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( game . maxHealth >= 16 * 4 ) soldout = true ; 
 
  var price =  ( game . maxHealth + 1 )  *  ( 50 *  ( game . difficulty + 1 )  )  ;
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
game . health += 4 ; 
game . maxHealth += 4 ; 
game . coins -= price ; 
 } 
  
  
  
  } 
  
 v += vspeed ; 
 var pricetag = chint ( 95 )  . tostring (  )  + price . tostring (  )  ;
  if ( soldout ) drawSpriteZ ( 2 , sprBoxEmpty , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else  { 
 drawSpriteZ ( 2 , sprBoxShop , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
drawSpriteZ ( 2 , sprHealth , getFrames (  )  / 32 , x - 8 - camx , y - 8 - camy + v )  ; 
drawText ( font , x - camx -  ( pricetag . len (  )  * 3 )  , y - 16 - camy , pricetag )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . soldout = false ; 
 return squirrelClassFunction; })()) ; 
ShopBlockFire =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . soldout = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( game . fireBonus >= 16 ) soldout = true ; 
 
  var price =  ( game . fireBonus + 1 )  *  ( 400 *  (  ( game . difficulty . tofloat (  )  / 2 )  + 1 )  )  ;
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
game . fireBonus += 1 ; 
game . coins -= price ; 
 if ( game . weapon == 1 ) game . maxEnergy ++  ; 
 
  } 
  
  
  
  } 
  
 v += vspeed ; 
 var pricetag = chint ( 95 )  . tostring (  )  + price . tostring (  )  ;
  if ( soldout ) drawSpriteZ ( 2 , sprBoxEmpty , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else  { 
 drawSpriteZ ( 2 , sprBoxShop , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
drawSpriteZ ( 2 , sprFlowerFire , getFrames (  )  / 32 , x - camx , y - camy + v )  ; 
drawText ( font , x - camx -  ( pricetag . len (  )  * 3 )  , y - 16 - camy , pricetag )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . soldout = false ; 
 return squirrelClassFunction; })()) ; 
ShopBlockIce =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . soldout = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( game . iceBonus >= 16 ) soldout = true ; 
 
  var price =  ( game . iceBonus + 1 )  *  ( 400 *  (  ( game . difficulty . tofloat (  )  / 2 )  + 1 )  )  ;
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
game . iceBonus += 1 ; 
game . coins -= price ; 
 if ( game . weapon == 2 ) game . maxEnergy ++  ; 
 
  } 
  
  
  
  } 
  
 v += vspeed ; 
 var pricetag = chint ( 95 )  . tostring (  )  + price . tostring (  )  ;
  if ( soldout ) drawSpriteZ ( 2 , sprBoxEmpty , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else  { 
 drawSpriteZ ( 2 , sprBoxShop , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
drawSpriteZ ( 2 , sprFlowerIce , getFrames (  )  / 32 , x - camx , y - camy + v )  ; 
drawText ( font , x - camx -  ( pricetag . len (  )  * 3 )  , y - 16 - camy , pricetag )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . soldout = false ; 
 return squirrelClassFunction; })()) ; 
ShopBlockAir =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . soldout = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( game . airBonus >= 4 ) soldout = true ; 
 
  var price =  ( game . airBonus + 1 )  *  ( 800 *  (  ( game . difficulty . tofloat (  )  / 2 )  + 1 )  )  ;
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
game . airBonus += 1 ; 
game . coins -= price ; 
 if ( game . weapon == 3 ) game . maxEnergy ++  ; 
 
  } 
  
  
  
  } 
  
 v += vspeed ; 
 var pricetag = chint ( 95 )  . tostring (  )  + price . tostring (  )  ;
  if ( soldout ) drawSpriteZ ( 2 , sprBoxEmpty , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else  { 
 drawSpriteZ ( 2 , sprBoxShop , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
drawSpriteZ ( 2 , sprAirFeather , getFrames (  )  / 32 , x - camx , y - camy + v )  ; 
drawText ( font , x - camx -  ( pricetag . len (  )  * 3 )  , y - 16 - camy , pricetag )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . soldout = false ; 
 return squirrelClassFunction; })()) ; 
ShopBlockEarth =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . shape = 0 ; 
 returnVal . full = true ; 
 returnVal . v = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . soldout = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = "" ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y + 2 , 8 , 8 , 0 )  ; 
tileSetSolid ( x , y , 1 )  ; 
 } ;  returnVal . run = function (  ) {  if ( game . earthBonus >= 4 ) soldout = true ; 
 
  var price =  ( game . earthBonus + 1 )  *  ( 800 *  (  ( game . difficulty . tofloat (  )  / 2 )  + 1 )  )  ;
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
game . earthBonus += 1 ; 
game . coins -= price ; 
 if ( game . weapon == 4 ) game . maxEnergy ++  ; 
 
  } 
  
  
  
  } 
  
 v += vspeed ; 
 var pricetag = chint ( 95 )  . tostring (  )  + price . tostring (  )  ;
  if ( soldout ) drawSpriteZ ( 2 , sprBoxEmpty , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
 
  else  { 
 drawSpriteZ ( 2 , sprBoxShop , getFrames (  )  / 8 , x - 8 - camx , y - 8 - camy + v )  ; 
drawSpriteZ ( 2 , sprEarthShell , getFrames (  )  / 32 , x - camx , y - camy + v )  ; 
drawText ( font , x - camx -  ( pricetag . len (  )  * 3 )  , y - 16 - camy , pricetag )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . shape = 0 ; 
 squirrelClassFunction . full = true ; 
 squirrelClassFunction . v = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . soldout = false ; 
 return squirrelClassFunction; })()) ; 



}; 
