if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/items.nut'] = function () { 


Coin =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . target = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
frame = randFloat ( 4 )  ; 
game . maxCoins ++  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 20 )  || gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 20 )  )  { 
 deleteActor ( id )  ; 
newActor ( CoinEffect , x , y )  ; 
 {     var foreachOutput1 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; k = foreachOutput1.getKey(); i = foreachOutput1.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  else  if (  ( (actor[ ( "WeaponEffect" ) ] !== undefined) )  )  {     var foreachOutput2 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput2.next();        if (foreachOutput2.isDone()) break; i = foreachOutput2.getValue();  if ( inDistance2 ( x , y , i . x , i . y , 8 )  && i . box )  { 
 deleteActor ( id )  ; 
newActor ( CoinEffect , x , y )  ; 
 {     var foreachOutput3 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput3.next();        if (foreachOutput3.isDone()) break; k = foreachOutput3.getKey(); i = foreachOutput3.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
     }  }  
  
 frame += 0.2 ; 
hspeed /= 1.01 ; 
vspeed /= 1.01 ; 
 if ( gvPlayer && gvPlayer . magnetic && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 96 )  )  { 
 target = 1 ; 
 } 
  
  else  if ( gvPlayer2 && gvPlayer2 . magnetic && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 96 )  )  { 
 target = 2 ; 
 } 
  
  
  if ( target == 1 )  { 
  if ( gvPlayer )  { 
 hspeed += lendirX ( 0.25 , pointAngle ( x , y , gvPlayer . x , gvPlayer . y )  )  ; 
vspeed += lendirY ( 0.25 , pointAngle ( x , y , gvPlayer . x , gvPlayer . y )  )  ; 
 } 
  
  else charged = 0 ; 
 
  } 
  
  if ( target == 2 )  { 
  if ( gvPlayer2 )  { 
 hspeed += lendirX ( 0.25 , pointAngle ( x , y , gvPlayer2 . x , gvPlayer2 . y )  )  ; 
vspeed += lendirY ( 0.25 , pointAngle ( x , y , gvPlayer2 . x , gvPlayer2 . y )  )  ; 
 } 
  
  else charged = 0 ; 
 
  } 
  
 x += hspeed ; 
y += vspeed ; 
 } ;  returnVal . draw = function (  ) { drawSprite ( sprCoin , frame , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Coin" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . hspeed = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . target = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
CoinSmall =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . timer = 300 ; 
 returnVal . gravity = 0.2 ; 
 returnVal . friction = 0.05 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
frame = randFloat ( 4 )  ; 
hspeed = randFloat ( 6.0 )  - 3.0 ; 
vspeed =  - 4.0 - randFloat ( 2.0 )  ; 
shape = Rec ( x , y , 3 , 3 , 0 )  ; 
timer += randInt ( 60 )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 20 )  || gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 20 )  && timer < 240 )  { 
 deleteActor ( id )  ; 
newActor ( Spark , x , y )  ; 
game . coins ++  ; 
popSound ( sndCoinSmall )  ; 
 } 
  
 frame += 0.2 ; 
timer --  ; 
 if ( timer == 0 ) deleteActor ( id )  ; 
 
  if (  ! placeFree ( x , y + 1 )  )  { 
 vspeed =  - vspeed / 1.5 ; 
friction = 0.05 ; 
 } 
  
  else friction = 0.0 ; 
 
  if (  ! placeFree ( x , y - 1 )  ) vspeed = fabs ( vspeed )  ; 
 
  if (  ! placeFree ( x + 1 , y )  ) hspeed =  - fabs ( hspeed )  ; 
 
  if (  ! placeFree ( x - 1 , y )  ) hspeed = fabs ( hspeed )  ; 
 
  } ;  returnVal . draw = function (  ) { drawSprite (  ( config . bigItems ? sprCoin : sprCoinSmall )  , getFrames (  )  / 4 , x - camx , y - camy -  ( config . bigItems ? 4 : 0 )  , 0 , 0 , 1 , 1 ,  ( timer > 60 ? 1 : float ( timer )  / 10 )  )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "CoinSmall" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . timer = 300 ; 
 squirrelClassFunction . gravity = 0.2 ; 
 squirrelClassFunction . friction = 0.05 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
Coin5 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . target = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
frame = randFloat ( 4 )  ; 
game . maxCoins = game . maxCoins + 5 ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 20 )  || gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 20 )  )  { 
 deleteActor ( id )  ; 
newActor ( CoinEffect , x , y , 5 )  ; 
 {     var foreachOutput4 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput4.next();        if (foreachOutput4.isDone()) break; k = foreachOutput4.getKey(); i = foreachOutput4.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  else  if (  ( (actor[ ( "WeaponEffect" ) ] !== undefined) )  )  {     var foreachOutput5 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput5.next();        if (foreachOutput5.isDone()) break; i = foreachOutput5.getValue();  if ( inDistance2 ( x , y , i . x , i . y , 8 )  && i . box )  { 
 deleteActor ( id )  ; 
newActor ( CoinEffect , x , y , 5 )  ; 
 {     var foreachOutput6 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput6.next();        if (foreachOutput6.isDone()) break; k = foreachOutput6.getKey(); i = foreachOutput6.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
     }  }  
  
 frame += 0.2 ; 
hspeed /= 1.01 ; 
vspeed /= 1.01 ; 
 if ( gvPlayer && gvPlayer . magnetic && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 96 )  )  { 
 target = 1 ; 
 } 
  
  else  if ( gvPlayer2 && gvPlayer2 . magnetic && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 96 )  )  { 
 target = 2 ; 
 } 
  
  
  if ( target == 1 )  { 
  if ( gvPlayer )  { 
 hspeed += lendirX ( 0.25 , pointAngle ( x , y , gvPlayer . x , gvPlayer . y )  )  ; 
vspeed += lendirY ( 0.25 , pointAngle ( x , y , gvPlayer . x , gvPlayer . y )  )  ; 
 } 
  
  else charged = 0 ; 
 
  } 
  
  if ( target == 2 )  { 
  if ( gvPlayer2 )  { 
 hspeed += lendirX ( 0.25 , pointAngle ( x , y , gvPlayer2 . x , gvPlayer2 . y )  )  ; 
vspeed += lendirY ( 0.25 , pointAngle ( x , y , gvPlayer2 . x , gvPlayer2 . y )  )  ; 
 } 
  
  else charged = 0 ; 
 
  } 
  
 x += hspeed ; 
y += vspeed ; 
 } ;  returnVal . draw = function (  ) { drawSprite ( sprCoin5 , frame , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Coin5" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . hspeed = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . target = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
Coin10 =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . target = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
frame = randFloat ( 4 )  ; 
game . maxCoins = game . maxCoins + 10 ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 20 )  || gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 20 )  )  { 
 deleteActor ( id )  ; 
newActor ( CoinEffect , x , y , 10 )  ; 
 {     var foreachOutput7 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput7.next();        if (foreachOutput7.isDone()) break; k = foreachOutput7.getKey(); i = foreachOutput7.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  else  if (  ( (actor[ ( "WeaponEffect" ) ] !== undefined) )  )  {     var foreachOutput8 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput8.next();        if (foreachOutput8.isDone()) break; i = foreachOutput8.getValue();  if ( inDistance2 ( x , y , i . x , i . y , 8 )  && i . box )  { 
 deleteActor ( id )  ; 
newActor ( CoinEffect , x , y , 10 )  ; 
 {     var foreachOutput9 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput9.next();        if (foreachOutput9.isDone()) break; k = foreachOutput9.getKey(); i = foreachOutput9.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
     }  }  
  
 frame += 0.2 ; 
hspeed /= 1.01 ; 
vspeed /= 1.01 ; 
 if ( gvPlayer && gvPlayer . magnetic && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 96 )  )  { 
 target = 1 ; 
 } 
  
  else  if ( gvPlayer2 && gvPlayer2 . magnetic && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 96 )  )  { 
 target = 2 ; 
 } 
  
  
  if ( target == 1 )  { 
  if ( gvPlayer )  { 
 hspeed += lendirX ( 0.25 , pointAngle ( x , y , gvPlayer . x , gvPlayer . y )  )  ; 
vspeed += lendirY ( 0.25 , pointAngle ( x , y , gvPlayer . x , gvPlayer . y )  )  ; 
 } 
  
  else charged = 0 ; 
 
  } 
  
  if ( target == 2 )  { 
  if ( gvPlayer2 )  { 
 hspeed += lendirX ( 0.25 , pointAngle ( x , y , gvPlayer2 . x , gvPlayer2 . y )  )  ; 
vspeed += lendirY ( 0.25 , pointAngle ( x , y , gvPlayer2 . x , gvPlayer2 . y )  )  ; 
 } 
  
  else charged = 0 ; 
 
  } 
  
 x += hspeed ; 
y += vspeed ; 
 } ;  returnVal . draw = function (  ) { drawSprite ( sprCoin10 , frame , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Coin10" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction . hspeed = 0.0 ; 
 squirrelClassFunction . vspeed = 0.0 ; 
 squirrelClassFunction . target = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
Berry =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . timer = 300 ; 
 returnVal . doesFade = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
doesFade =  ( _arr != null )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 20 )  && game . ps . berries < 12 )  { 
 deleteActor ( id )  ; 
game . ps . berries ++  ; 
stopSound ( sndGulp )  ; 
playSound ( sndGulp , 0 )  ; 
 } 
  
  else  if ( gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y + 2 , 20 )  && game . ps2 . berries < 12 )  { 
 deleteActor ( id )  ; 
game . ps2 . berries ++  ; 
stopSound ( sndGulp )  ; 
playSound ( sndGulp , 0 )  ; 
 } 
  
  
  if ( doesFade )  { 
 timer --  ; 
 if ( timer <= 0 ) deleteActor ( id )  ; 
 
  } 
  
  } ;  returnVal . draw = function (  ) { drawSprite (  ( config . bigItems ? sprBerryLarge : sprBerry )  , 0 , x - camx , y - camy +  (  ( getFrames (  )  / 16 )  % 2 == 0 )  . tointeger (  )  , 0 , 0 , 1 , 1 ,  ( timer > 60 ? 1 : float ( timer )  / 10 )  )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Berry" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . timer = 300 ; 
 squirrelClassFunction . doesFade = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
Herring =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
frame = randFloat ( 4 )  ; 
game . maxRedCoins ++  ; 
 } ;  returnVal . run = function (  ) { frame += 0.1 ; 
 if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 20 )  || gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 20 )  )  { 
 deleteActor ( id )  ; 
playSoundChannel ( sndFish , 0 , 1 )  ; 
game . redCoins ++  ; 
 {     var foreachOutput10 = squirrelForEach( gvYetFoundItems );     while(true)     {        foreachOutput10.next();        if (foreachOutput10.isDone()) break; k = foreachOutput10.getKey(); i = foreachOutput10.getValue();  if ( i == id ) gvFoundItems [ k ] =  squirrelTypeOf ( this )  ; 
 
     }  }  } 
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprHerring , 0 , x - camx , y - camy +  (  ( getFrames (  )  / 16 )  % 2 == 0 )  . tointeger (  )  )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Herring" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
RedHerring =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
frame = randFloat ( 4 )  ; 
game . maxRedCoins ++  ; 
 } ;  returnVal . run = function (  ) { frame += 0.1 ; 
drawSprite ( sprRedHerring , 0 , x - camx , y - camy +  (  ( getFrames (  )  / 16 )  % 2 == 0 )  . tointeger (  )  )  ; 
 if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 20 )  || gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 20 )  )  { 
 deleteActor ( id )  ; 
playSoundChannel ( sndFish , 0 , 1 )  ; 
game . redCoins ++  ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "RedHerring" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
FlowerFire =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 14 )  )  { 
 deleteActor ( id )  ; 
 if ( game . ps . weapon == "normal" )  { 
 game . ps . weapon = "fire" ; 
 } 
  
  else  { 
 game . ps . subitem = game . ps . weapon ; 
game . ps . weapon = "fire" ; 
 } 
  
 popSound ( sndHeal , 0 )  ; 
 if ( gvPlayer . rawin ( "tftime" )  ) gvPlayer . tftime = 0 ; 
 
  } 
  
  else  if ( gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y + 2 , 14 )  )  { 
 deleteActor ( id )  ; 
 if ( game . ps2 . weapon == "normal" )  { 
 game . ps2 . weapon = "fire" ; 
 } 
  
  else  { 
 game . ps2 . subitem = game . ps2 . weapon ; 
game . ps2 . weapon = "fire" ; 
 } 
  
 popSound ( sndHeal , 0 )  ; 
 if ( gvPlayer2 . rawin ( "tftime" )  ) gvPlayer2 . tftime = 0 ; 
 
  } 
  
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprFlowerFire , getFrames (  )  / 16 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "FlowerFire" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
FlowerIce =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 14 )  )  { 
 deleteActor ( id )  ; 
 if ( game . ps . weapon == "normal" )  { 
 game . ps . weapon = "ice" ; 
 } 
  
  else  { 
 game . ps . subitem = game . ps . weapon ; 
game . ps . weapon = "ice" ; 
 } 
  
 popSound ( sndHeal , 0 )  ; 
 if ( gvPlayer . rawin ( "tftime" )  ) gvPlayer . tftime = 0 ; 
 
  } 
  
  else  if ( gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y + 2 , 14 )  )  { 
 deleteActor ( id )  ; 
 if ( game . ps2 . weapon == "normal" )  { 
 game . ps2 . weapon = "ice" ; 
 } 
  
  else  { 
 game . ps2 . subitem = game . ps2 . weapon ; 
game . ps2 . weapon = "ice" ; 
 } 
  
 popSound ( sndHeal , 0 )  ; 
 if ( gvPlayer2 . rawin ( "tftime" )  ) gvPlayer2 . tftime = 0 ; 
 
  } 
  
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprFlowerIce , getFrames (  )  / 16 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "FlowerIce" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
MuffinBlue =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . flip = false ; 
 returnVal . willwrite = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 6 , 7 , 0 )  ; 
 if ( gvPlayer )  { 
  if ( x < gvPlayer . x ) flip = true ; 
 
  } 
  
  if ( _arr != null ) willwrite = _arr ; 
 
  } ;  returnVal . run = function (  ) {  if ( placeFree ( x , y + 1 )  )  { 
  if ( inWater ( x , y )  ) vspeed += 0.01 ; 
 
  else vspeed += 0.2 ; 
 
  } 
  
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) deleteActor ( id )  ; 
 
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
 
  
  
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
 if ( gvPlayer &&  ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 16 )  || hitTest ( shape , gvPlayer . shape )  )  )  { 
  if ( game . ps . health < game . maxHealth )  { 
 game . ps . health += 4 ; 
 for (  var i = 0 ;
 i < 4 ; i ++  )  { 
 newActor ( Heal , gvPlayer . x - 16 + randInt ( 32 )  , gvPlayer . y - 16 + randInt ( 32 )  )  ; 
 } 
  } 
  
  else  if ( game . ps . subitem != "muffinRed" &&  ( game . ps . subitem == 0 || willwrite )  ) game . ps . subitem = "muffinBlue" ; 
 
  
 deleteActor ( id )  ; 
popSound ( sndHeal , 0 )  ; 
 } 
  
  else  if ( gvPlayer2 &&  ( inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 16 )  || hitTest ( shape , gvPlayer2 . shape )  )  )  { 
  if ( game . ps2 . health < game . maxHealth )  { 
 game . ps2 . health += 4 ; 
 for (  var i = 0 ;
 i < 4 ; i ++  )  { 
 newActor ( Heal , gvPlayer2 . x - 16 + randInt ( 32 )  , gvPlayer2 . y - 16 + randInt ( 32 )  )  ; 
 } 
  } 
  
  else  if ( game . ps2 . subitem != "muffinRed" &&  ( game . ps2 . subitem == 0 || willwrite )  ) game . ps2 . subitem = "muffinBlue" ; 
 
  
 deleteActor ( id )  ; 
popSound ( sndHeal , 0 )  ; 
 } 
  
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprMuffin , 0 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "MuffinBlue" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . flip = false ; 
 squirrelClassFunction . willwrite = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
MuffinRed =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . flip = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 7 , 0 )  ; 
 if ( gvPlayer )  { 
  if ( x < gvPlayer . x ) flip = true ; 
 
  } 
  
  } ;  returnVal . run = function (  ) {  if ( placeFree ( x , y + 1 )  )  { 
  if ( inWater ( x , y )  ) vspeed += 0.01 ; 
 
  else vspeed += 0.2 ; 
 
  } 
  
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) deleteActor ( id )  ; 
 
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
 
  
  
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
 if ( gvPlayer &&  ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 16 )  || hitTest ( shape , gvPlayer . shape )  )  )  { 
  if ( game . ps . health < game . maxHealth )  { 
  if ( game . ps . subitem == "muffinBlue" && game . maxHealth - game . ps . health <= 4 )  { 
 game . ps . health += 4 ; 
game . ps . subitem = "muffinRed" ; 
 } 
  
  else  { 
 game . ps . health += 16 ; 
 for (  var i = 0 ;
 i < 4 ; i ++  )  { 
 newActor ( Heal , gvPlayer . x - 16 + randInt ( 32 )  , gvPlayer . y - 16 + randInt ( 32 )  )  ; 
 } 
  } 
  
  } 
  
  else game . ps . subitem = "muffinRed" ; 
 
 deleteActor ( id )  ; 
popSound ( sndHeal , 0 )  ; 
 } 
  
  else  if ( gvPlayer2 &&  ( inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 16 )  || hitTest ( shape , gvPlayer2 . shape )  )  )  { 
  if ( game . ps2 . health < game . maxHealth )  { 
  if ( game . ps2 . subitem == "muffinBlue" && game . maxHealth - game . ps2 . health <= 4 )  { 
 game . ps2 . health += 4 ; 
game . ps2 . subitem = "muffinRed" ; 
 } 
  
  else  { 
 game . ps2 . health += 16 ; 
 for (  var i = 0 ;
 i < 4 ; i ++  )  { 
 newActor ( Heal , gvPlayer2 . x - 16 + randInt ( 32 )  , gvPlayer2 . y - 16 + randInt ( 32 )  )  ; 
 } 
  } 
  
  } 
  
  else game . ps2 . subitem = "muffinRed" ; 
 
 deleteActor ( id )  ; 
popSound ( sndHeal , 0 )  ; 
 } 
  
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprMuffin , 1 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "MuffinRed" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . flip = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
MuffinEvil =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . flip = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 7 , 0 )  ; 
 if ( gvPlayer )  { 
  if ( x > gvPlayer . x ) flip = true ; 
 
  } 
  
  } ;  returnVal . run = function (  ) {  if ( placeFree ( x , y + 1 )  ) vspeed += 0.2 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) deleteActor ( id )  ; 
 
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
 
  
  
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
 if ( gvPlayer &&  ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 16 )  || hitTest ( shape , gvPlayer . shape )  )  )  { 
  if ( gvPlayer . blinking > 0 )  return ; 
  
  if ( gvPlayer . x < x ) gvPlayer . hspeed =  - 1.0 ; 
 
  else gvPlayer . hspeed = 1.0 ; 
 
 gvPlayer . hurt = 4 ; 
deleteActor ( id )  ; 
 } 
  
  if ( gvPlayer2 &&  ( inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 16 )  || hitTest ( shape , gvPlayer2 . shape )  )  )  { 
  if ( gvPlayer2 . blinking > 0 )  return ; 
  
  if ( gvPlayer2 . x < x ) gvPlayer2 . hspeed =  - 1.0 ; 
 
  else gvPlayer2 . hspeed = 1.0 ; 
 
 gvPlayer2 . hurt = 4 ; 
deleteActor ( id )  ; 
 } 
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprMuffin , 2 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "MuffinEvil" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . flip = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
OneDown =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . frame = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
frame = randFloat ( 4 )  ; 
 } ;  returnVal . run = function (  ) {  if ( getFrames (  )  % 20 == 0 )  { 
 newActor ( FlameTiny , x - 8 + randInt ( 16 )  , y - 8 + randInt ( 16 )  )  ; 
 } 
  
 frame += 0.2 ; 
drawSprite ( spr1down , frame , x - camx , y - camy )  ; 
 if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 20 )  )  { 
 deleteActor ( id )  ; 
gvPlayer . hurt = 16 ; 
 } 
  
  if ( gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y + 2 , 10 )  )  { 
 deleteActor ( id )  ; 
gvPlayer2 . hurt = 16 ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "OneDown" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frame = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
Darknyan =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . hspeed = 0 ; 
 returnVal . vspeed =  - 3 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( gvPlayer && gvPlayer . x > x ) hspeed = 2 ; 
 
  else  if ( gvPlayer2 && gvPlayer2 . x > x ) hspeed = 2 ; 
 
  else hspeed =  - 2 ; 
 
  
 shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if (  ! placeFree ( x , y + 2 )  ) vspeed =  - 5 ; 
 
  if (  ! placeFree ( x + 2 , y )  ) hspeed =  - 2 ; 
 
  if (  ! placeFree ( x - 2 , y )  ) hspeed = 2 ; 
 
 vspeed += 0.2 ; 
 if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
 shape . setPos ( x , y )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 20 )  )  { 
 gvPlayer . hurt = 6 ; 
 } 
  
  
  if ( gvPlayer2 )  if ( inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 20 )  )  { 
 gvPlayer2 . hurt = 6 ; 
 } 
  
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprDarkStar , getFrames (  )  / 10 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Darknyan" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . hspeed = 0 ; 
 squirrelClassFunction . vspeed =  - 3 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
Starnyan =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . hspeed = 0 ; 
 returnVal . vspeed =  - 4 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( gvPlayer )  if ( gvPlayer . x > x ) hspeed =  - 2 ; 
 
  else hspeed = 2 ; 
 
  
 shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if (  ! placeFree ( x , y + 2 )  ) vspeed =  - 5 ; 
 
  if (  ! placeFree ( x + 2 , y )  ) hspeed =  - 2 ; 
 
  if (  ! placeFree ( x - 2 , y )  ) hspeed = 2 ; 
 
 vspeed += 0.25 ; 
 if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
 shape . setPos ( x , y )  ; 
 if ( gvPlayer )  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 20 )  )  { 
 gvPlayer . invincible = 645 ; 
deleteActor ( id )  ; 
playMusic ( musInvincible ,  - 1 )  ; 
gvLastSong = "" ; 
 } 
  
  
  if ( gvPlayer2 )  if ( inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 20 )  )  { 
 gvPlayer2 . invincible = 645 ; 
deleteActor ( id )  ; 
playMusic ( musInvincible ,  - 1 )  ; 
gvLastSong = "" ; 
 } 
  
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprStar , getFrames (  )  / 10 , x - camx , y - camy )  ; 
drawLight ( sprLightBasic , 0 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Starnyan" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . hspeed = 0 ; 
 squirrelClassFunction . vspeed =  - 4 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
AirFeather =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 } ;  returnVal . run = function (  ) { shape . setPos ( x , y )  ; 
 if ( gvPlayer && hitTest ( shape , gvPlayer . shape )  )  { 
 popSound ( sndHeal , 0 )  ; 
 if ( game . ps . weapon == "normal" )  { 
 game . ps . weapon = "air" ; 
 } 
  
  else  { 
 game . ps . subitem = game . ps . weapon ; 
game . ps . weapon = "air" ; 
 } 
  
  if ( gvPlayer . rawin ( "tftime" )  ) gvPlayer . tftime = 0 ; 
 
 deleteActor ( id )  ; 
 } 
  
  else  if ( gvPlayer2 && hitTest ( shape , gvPlayer2 . shape )  )  { 
 popSound ( sndHeal , 0 )  ; 
 if ( game . ps2 . weapon == "normal" )  { 
 game . ps2 . weapon = "air" ; 
 } 
  
  else  { 
 game . ps2 . subitem = game . ps2 . weapon ; 
game . ps2 . weapon = "air" ; 
 } 
  
  if ( gvPlayer2 . rawin ( "tftime" )  ) gvPlayer2 . tftime = 0 ; 
 
 deleteActor ( id )  ; 
 } 
  
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprAirFeather , getFrames (  )  / 24 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "AirFeather" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
FlyRefresh =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( gvPlayer . x , gvPlayer . y , x , y , 20 )  && game . ps . weapon == "air" && getFrames (  )  % 8 == 0 )  { 
 game . ps . stamina ++  ; 
newActor ( HealStamina , x - 16 + randInt ( 32 )  , y - 16 + randInt ( 32 )  )  ; 
 } 
  
  if ( gvPlayer2 && inDistance2 ( gvPlayer2 . x , gvPlayer2 . y , x , y , 20 )  && game . ps2 . weapon == "air" && getFrames (  )  % 8 == 0 )  { 
 game . ps2 . stamina ++  ; 
newActor ( HealStamina , x - 16 + randInt ( 32 )  , y - 16 + randInt ( 32 )  )  ; 
 } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteEx ( sprTinyWind , getFrames (  )  / 8 , x - camx , y - camy - 8 , 0 , 2 , 1 , 1 , 0.25 )  ; 
drawSpriteEx ( sprTinyWind , getFrames (  )  / 8 , x - camx , y - camy + 8 , 0 , 0 , 1 , 1 , 0.25 )  ; 
drawSprite ( sprFlyRefresh , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "FlyRefresh" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
OneUp =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . hspeed = 0 ; 
 returnVal . vspeed =  - 2 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( gvPlayer )  if ( gvPlayer . x > x ) hspeed =  - 1 ; 
 
  else hspeed = 1 ; 
 
  
 shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if (  ! placeFree ( x , y + 1 )  ) vspeed =  - 3 ; 
 
  if (  ! placeFree ( x + 1 , y )  ) hspeed =  - 1 ; 
 
  if (  ! placeFree ( x - 1 , y )  ) hspeed = 1 ; 
 
 vspeed += 0.1 ; 
 if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
 shape . setPos ( x , y )  ; 
 if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 20 )  &&  ! game . ps . canres )  { 
 game . ps . canres = true ; 
playSound ( snd1up , 0 )  ; 
deleteActor ( id )  ; 
 } 
  
  else  if ( gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 20 )  &&  ! game . ps2 . canres )  { 
 game . ps2 . canres = true ; 
playSound ( snd1up , 0 )  ; 
deleteActor ( id )  ; 
 } 
  
  
  } ;  returnVal . draw = function (  ) {  if ( gvNumPlayers == 1 && gvPlayer ) drawSprite ( getroottable (  )  [ gvCharacters [  squirrelTypeOf ( gvPlayer )  ]  [ "doll" ]  ]  , enWeapons [ game . ps . weapon ]  , x - camx , y - camy )  ; 
 
  else drawSprite ( sprMysticDoll , 0 , x - camx , y - camy )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "OneUp" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . hspeed = 0 ; 
 squirrelClassFunction . vspeed =  - 2 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
MuffinBomb =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . flip = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 7 , 0 )  ; 
 if ( gvPlayer )  { 
  if ( x > gvPlayer . x ) flip = true ; 
 
  } 
  
  } ;  returnVal . run = function (  ) {  if ( placeFree ( x , y + 1 )  )  { 
  if ( inWater ( x , y )  ) vspeed += 0.01 ; 
 
  else vspeed += 0.2 ; 
 
  } 
  
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) deleteActor ( id )  ; 
 
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
 
  
  
  if ( x >= gvMap . w ) flip = true ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
 if ( gvPlayer &&  ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 16 )  || hitTest ( shape , gvPlayer . shape )  )  )  { 
  if ( gvPlayer . blinking > 0 )  return ; 
  
 fireWeapon ( ExplodeF , x , y , 0 , id )  ; 
deleteActor ( id )  ; 
 } 
  
  if ( gvPlayer2 &&  ( inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 16 )  || hitTest ( shape , gvPlayer2 . shape )  )  )  { 
  if ( gvPlayer2 . blinking > 0 )  return ; 
  
 fireWeapon ( ExplodeF , x , y , 0 , id )  ; 
deleteActor ( id )  ; 
 } 
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprMuffin , 3 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "MuffinBomb" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . flip = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 
EarthShell =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 14 )  )  { 
 deleteActor ( id )  ; 
 if ( game . ps . weapon == "normal" )  { 
 game . ps . weapon = "earth" ; 
 } 
  
  else  { 
 game . ps . subitem = game . ps . weapon ; 
game . ps . weapon = "earth" ; 
 } 
  
 popSound ( sndHeal , 0 )  ; 
 if ( gvPlayer . rawin ( "tftime" )  ) gvPlayer . tftime = 0 ; 
 
  } 
  
  else  if ( gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y + 2 , 14 )  )  { 
 deleteActor ( id )  ; 
 if ( game . ps2 . weapon == "normal" )  { 
 game . ps2 . weapon = "earth" ; 
 } 
  
  else  { 
 game . ps2 . subitem = game . ps2 . weapon ; 
game . ps2 . weapon = "earth" ; 
 } 
  
 popSound ( sndHeal , 0 )  ; 
 if ( gvPlayer2 . rawin ( "tftime" )  ) gvPlayer2 . tftime = 0 ; 
 
  } 
  
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprEarthShell , getFrames (  )  / 16 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "EarthShell" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
SpecialBall =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . num = 0 ; 
 returnVal . shape = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape = Cir ( x , y , 8 )  ; 
num = _arr ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 16 )  || gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 16 )  )  { 
 game . secretOrbs [ num ] = true ; 
deleteActor ( id )  ; 
endGoal (  )  ; 
 } 
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprSpecialBall , getFrames (  )  / 4 , x - camx , y - camy , 0 , 0 , 1 , 1 ,  ( game . secretOrbs [ num ]  ? 0.5 : 1 )  )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "SpecialBall" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . num = 0 ; 
 squirrelClassFunction . shape = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
CoinRing =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . r = 0.0 ; 
 returnVal . c = 0.0 ; 
 returnVal . s = 0.0 ; 
 returnVal . a = 0.0 ; 
 returnVal . l = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  x = _x ; 
y = _y ; 
 (baseConstructor.bind(this))  ( _x , _y )  ; 
r = _arr [ 0 ]  . tofloat (  )  ; 
c = _arr [ 1 ]  . tointeger (  )  ; 
s = _arr [ 2 ]  . tofloat (  )  ; 
l =  [  ]  ; 
 for (  var i = 0 ;
 i < c ; i ++  )  { 
 l . push ( newActor ( Coin , x , y )  )  ; 
 } 
  } ;  returnVal . run = function (  ) {  var cl = c ;
 a += s / 60.0 ; 
 for (  var i = 0 ;
 i < c ; i ++  )  { 
  if ( checkActor ( l [ i ]  )  )  { 
 actor [ l [ i ]  ]  . x = x + r * cos (  ( i * 2 * pi / c )  + a )  ; 
actor [ l [ i ]  ]  . y = y + r * sin (  ( i * 2 * pi / c )  + a )  ; 
 } 
  
  else cl --  ; 
 
  } 
  if ( cl == 0 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . r = 0.0 ; 
 squirrelClassFunction . c = 0.0 ; 
 squirrelClassFunction . s = 0.0 ; 
 squirrelClassFunction . a = 0.0 ; 
 squirrelClassFunction . l = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
MagicKey =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . color = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr != null ) color = _arr . tointeger (  )  ; 
 
  } ;  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 16 )  )  { 
 deleteActor ( id )  ; 
 switch ( color )  {  case 0 : gvKeyCopper = true ; 
 break ;  case 1 : gvKeySilver = true ; 
 break ;  case 2 : gvKeyGold = true ; 
 break ;  case 3 : gvKeyMythril = true ; 
 break ;  default : gvKeyCopper = true ; 
 break ;  } playSound ( snd1up , 0 )  ; 
 } 
  
  if ( color == 0 && gvKeyCopper || color == 1 && gvKeySilver || color == 2 && gvKeyGold || color == 3 && gvKeyMythril ) deleteActor ( id )  ; 
 
  else  if ( gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y , 16 )  )  { 
 deleteActor ( id )  ; 
 switch ( color )  {  case 0 : gvKeyCopper = true ; 
 break ;  case 1 : gvKeySilver = true ; 
 break ;  case 2 : gvKeyGold = true ; 
 break ;  case 3 : gvKeyMythril = true ; 
 break ;  default : gvKeyCopper = true ; 
 break ;  } playSound ( snd1up , 0 )  ; 
 } 
  
  
  } ;  returnVal . draw = function (  ) {  switch ( color )  {  case 0 : drawSprite ( sprKeyCopper , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 break ;  case 1 : drawSprite ( sprKeySilver , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 break ;  case 2 : drawSprite ( sprKeyGold , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 break ;  case 3 : drawSprite ( sprKeyMythril , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 break ;  default : drawSprite ( sprKeyCopper , getFrames (  )  / 8 , x - camx , y - camy )  ; 
 break ;  }  } ;  returnVal . _typeof = function (  ) {  return "MagicKey" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . color = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
CoffeeCup =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 20 )  )  { 
 deleteActor ( id )  ; 
 if ( game . ps . subitem != "coffee" ) game . ps . subitem = "coffee" ; 
 
  else gvPlayer . zoomies += 60 * 16 ; 
 
 popSound ( sndGulp , 0 )  ; 
 } 
  
  else  if ( gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y + 2 , 20 )  )  { 
 deleteActor ( id )  ; 
 if ( game . ps2 . subitem != "coffee" ) game . ps2 . subitem = "coffee" ; 
 
  else gvPlayer2 . zoomies += 60 * 16 ; 
 
 popSound ( sndGulp , 0 )  ; 
 } 
  
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprCoffee , getFrames (  )  / 8 , x - camx , y - camy +  (  ( getFrames (  )  / 16 )  % 2 == 0 )  . tointeger (  )  )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "CoffeeCup" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
ShockBulb =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 14 )  )  { 
 deleteActor ( id )  ; 
 if ( game . ps . weapon == "normal" )  { 
 game . ps . weapon = "shock" ; 
 } 
  
  else  { 
 game . ps . subitem = game . ps . weapon ; 
game . ps . weapon = "shock" ; 
 } 
  
 popSound ( sndHeal , 0 )  ; 
 if ( gvPlayer . rawin ( "tftime" )  ) gvPlayer . tftime = 0 ; 
 
  } 
  
  else  if ( gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y + 2 , 14 )  )  { 
 deleteActor ( id )  ; 
 if ( game . ps2 . weapon == "normal" )  { 
 game . ps2 . weapon = "shock" ; 
 } 
  
  else  { 
 game . ps2 . subitem = game . ps2 . weapon ; 
game . ps2 . weapon = "shock" ; 
 } 
  
 popSound ( sndHeal , 0 )  ; 
 if ( gvPlayer2 . rawin ( "tftime" )  ) gvPlayer2 . tftime = 0 ; 
 
  } 
  
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprShockBulb , getFrames (  )  / 16 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "ShockBulb" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
WaterLily =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 } ;  returnVal . run = function (  ) {  if ( gvPlayer && inDistance2 ( x , y , gvPlayer . x , gvPlayer . y + 2 , 14 )  )  { 
 deleteActor ( id )  ; 
 if ( game . ps . weapon == "normal" )  { 
 game . ps . weapon = "water" ; 
 } 
  
  else  { 
 game . ps . subitem = game . ps . weapon ; 
game . ps . weapon = "water" ; 
 } 
  
 popSound ( sndHeal , 0 )  ; 
 if ( gvPlayer . rawin ( "tftime" )  ) gvPlayer . tftime = 0 ; 
 
  } 
  
  else  if ( gvPlayer2 && inDistance2 ( x , y , gvPlayer2 . x , gvPlayer2 . y + 2 , 14 )  )  { 
 deleteActor ( id )  ; 
 if ( game . ps2 . weapon == "normal" )  { 
 game . ps2 . weapon = "water" ; 
 } 
  
  else  { 
 game . ps2 . subitem = game . ps2 . weapon ; 
game . ps2 . weapon = "water" ; 
 } 
  
 popSound ( sndHeal , 0 )  ; 
 if ( gvPlayer2 . rawin ( "tftime" )  ) gvPlayer2 . tftime = 0 ; 
 
  } 
  
  
  } ;  returnVal . draw = function (  ) { drawSprite ( sprWaterLily , getFrames (  )  / 16 , x - camx , y - camy )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "WaterLily" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
SulphurNimbus =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . phantom = true ; 
 returnVal . target = 0 ; 
 returnVal . freed = 0 ; 
 returnVal . gravity = 0.0 ; 
 returnVal . flip = 0 ; 
 returnVal . strikeTimer = 0 ; 
 returnVal . anim = "stand" ; 
 returnVal . an =  { stand :  [ 0 ]  , fly :  [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]  }  ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 16 , 16 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( freed )  { 
 shape . w = 8 ; 
shape . h = 8 ; 
strikeTimer --  ; 
anim = "fly" ; 
target = null ; 
 if (  ( freed == 1 || freed == 2 &&  ! gvPlayer2 )  && gvPlayer ) target = gvPlayer ; 
 
  if (  ( freed == 2 || freed == 1 &&  ! gvPlayer )  && gvPlayer2 ) target = gvPlayer2 ; 
 
  if ( strikeTimer >= 0 )  { 
  var range = 96 ;
  {     var foreachOutput11 = squirrelForEach( actor );     while(true)     {        foreachOutput11.next();        if (foreachOutput11.isDone()) break; i = foreachOutput11.getValue();  { 
  if (  squirrelInstanceOf( i , Enemy)  && inDistance2 ( x , y , i . x , i . y , range )  &&  ! i . frozen &&  ! i . notarget )  { 
 range = distance2 ( x , y , i . x , i . y )  ; 
target = i ; 
 } 
  
  } 
     }  }  } 
  
  if ( target != null )  { 
  if ( target . blinking || randInt ( 320 )  == 1 ) strikeTimer = 30 ; 
 
  var dist = distance2 ( x , y , target . x +  (  squirrelInstanceOf( target , Player)  ?  ( target . flip == 0 ?  - 16 : 16 )  : 0 )  , target . y -  (  squirrelInstanceOf( target , Enemy)  ? 0 : 32 )  )  ;
  var dir = pointAngle ( x , y , target . x +  (  squirrelInstanceOf( target , Player)  ?  ( target . flip == 0 ?  - 16 : 16 )  : 0 )  , target . y -  (  squirrelInstanceOf( target , Enemy)  ? 0 : 32 )  )  ;
  var speed = 0.2 ;
  var maxSpeed = dist / 16 ;
  if (  squirrelInstanceOf( target , Enemy)  )  { 
 speed = 0.5 ; 
 if (  ! target . blinking && hitTest ( shape , target . shape )  )  { 
 strikeTimer =  - 1 ; 
target . getHurt ( 0 , 1 )  ; 
 } 
  
  } 
  
  else  { 
  var curSpeed = distance2 ( 0 , 0 , hspeed , vspeed )  ;
  if ( curSpeed > maxSpeed )  { 
  var curDir = pointAngle ( 0 , 0 , hspeed , vspeed )  ;
 hspeed = lendirX ( maxSpeed , curDir )  ; 
vspeed = lendirY ( maxSpeed , curDir )  ; 
 } 
  
  if ( dist <= 16 )  { 
 hspeed *= 0.98 ; 
vspeed *= 0.98 ; 
 } 
  
  } 
  
  if ( dist > 2 )  { 
  if ( dist > 100 )  { 
 hspeed = lendirX ( maxSpeed , dir )  ; 
vspeed = lendirY ( maxSpeed , dir )  ; 
 } 
  
  else  { 
 hspeed += lendirX ( speed , dir )  ; 
vspeed += lendirY ( speed , dir )  ; 
 } 
  
  } 
  
  } 
  
  if ( hspeed > 1 ) flip = 0 ; 
 
  if ( hspeed <  - 1 ) flip = 1 ; 
 
  if ( target != null && fabs ( hspeed )  < 1 ) flip =  ( target . x > x ? 0 : 1 )  ; 
 
  if ( levelEndRunner ) game . hasSulphur = freed ; 
 
  if (  ! gvPlayer &&  ! gvPlayer2 ) game . hasSulphur = 0 ; 
 
  } 
  
  else  { 
 anim = "stand" ; 
 if ( gvPlayer && gvPlayer . inMelee && hitTest ( shape , gvPlayer . shape )  )  { 
 freed = 2 ; 
 } 
  
  if ( gvPlayer2 && gvPlayer2 . inMelee && hitTest ( shape , gvPlayer2 . shape )  )  { 
 freed = 1 ; 
 } 
  
  if (  ( (actor[ ( "WeaponEffect" ) ] !== undefined) )  )  {     var foreachOutput12 = squirrelForEach( actor [ "WeaponEffect" ]  );     while(true)     {        foreachOutput12.next();        if (foreachOutput12.isDone()) break; i = foreachOutput12.getValue();  { 
  if ( i . alignment == 1 && hitTest ( shape , i . shape )  )  { 
 freed = true ; 
 if ( checkActor ( i . owner )  ) freed = actor [ i . owner ]  . playerNum ; 
 
  break ;  } 
  
  } 
     }  }  
  } 
  
  } ;  returnVal . draw = function (  ) { drawSpriteZ ( 4 , sprSulphurNimbus , an [ anim ]  [ wrap ( floor ( getFrames (  )  / 4 )  , 0 , an [ anim ]  . len (  )  - 1 )  ]  , x - camx , y - camy , 0 , flip )  ; 
 if (  ! freed ) drawSpriteZ ( 4 , sprBirdCage , 0 , x - camx , y - camy )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "SulphurNimbus" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . phantom = true ; 
 squirrelClassFunction . target = 0 ; 
 squirrelClassFunction . freed = 0 ; 
 squirrelClassFunction . gravity = 0.0 ; 
 squirrelClassFunction . flip = 0 ; 
 squirrelClassFunction . strikeTimer = 0 ; 
 squirrelClassFunction . anim = "stand" ; 
 squirrelClassFunction . an =  { stand :  [ 0 ]  , fly :  [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]  }  ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 



}; 
