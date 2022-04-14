if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/enemies.nut'] = function () { 


Enemy =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . health = 1 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . active = false ; 
 returnVal . frozen = 0 ; 
 returnVal . icebox =  - 1 ; 
 returnVal . nocount = false ; 
 
 with ( returnVal ) { 
  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  &&  ! frozen )  { 
  if ( gvPlayer . invincible > 0 ) hurtinvinc (  )  ; 
 
  else  if ( y > gvPlayer . y && vspeed < gvPlayer . vspeed && gvPlayer . canStomp && gvPlayer . placeFree ( gvPlayer . x , gvPlayer . y + 2 )  ) gethurt (  )  ; 
 
  else  if ( gvPlayer . rawin ( "anSlide" )  )  { 
  if ( gvPlayer . anim == gvPlayer . anSlide ) gethurt (  )  ; 
 
  else hurtplayer (  )  ; 
 
  } 
  
  else hurtplayer (  )  ; 
 
  
  
  } 
  
  } 
  
  if ( actor . rawin ( "Fireball" )  )  {     var foreachOutput = squirrelForEach ( actor [ "Fireball" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 hurtfire (  )  ; 
deleteActor ( i . id )  ; 
 } 
  
  } 
     }  }  
  if ( actor . rawin ( "BadExplode" )  )  {     var foreachOutput = squirrelForEach ( actor [ "BadExplode" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 hurtfire (  )  ; 
 } 
  
  } 
     }  }  
  if ( actor . rawin ( "FlameBreath" )  )  {     var foreachOutput = squirrelForEach ( actor [ "FlameBreath" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 hurtfire (  )  ; 
deleteActor ( i . id )  ; 
 } 
  
  } 
     }  }  
  if ( actor . rawin ( "ExplodeF" )  )  {     var foreachOutput = squirrelForEach ( actor [ "ExplodeF" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  && i . frame < 3 )  { 
 hurtfire (  )  ; 
 } 
  
  } 
     }  }  
  if ( actor . rawin ( "Iceball" )  )  {     var foreachOutput = squirrelForEach ( actor [ "Iceball" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 hurtice (  )  ; 
deleteActor ( i . id )  ; 
 } 
  
  } 
     }  }  
  if ( actor . rawin ( "FireballK" )  )  {     var foreachOutput = squirrelForEach ( actor [ "FireballK" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 newActor ( ExplodeF , i . x , i . y )  ; 
deleteActor ( i . id )  ; 
 } 
  
  } 
     }  }  
  if ( actor . rawin ( "ExplodeN" )  )  {     var foreachOutput = squirrelForEach ( actor [ "ExplodeN" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  && i . frame < 3 )  { 
 hurtblast (  )  ; 
 } 
  
  } 
     }  }  
  } 
  
  else  { 
  if ( inDistance2 ( x , y , camx +  ( screenW (  )  / 2 )  , camy +  ( screenH (  )  / 2 )  , 240 )  ) active = true ; 
 
  } 
  
  if ( active && frozen > 0 )  { 
 frozen --  ; 
 if ( getFrames (  )  % 15 == 0 )  { 
 newActor ( Glimmer , shape . x -  ( shape . w + 4 )  + randInt (  ( shape . w * 2 )  + 8 )  , shape . y -  ( shape . h + 4 )  + randInt (  ( shape . h * 2 )  + 8 )  )  ; 
 if ( randInt ( 50 )  % 2 == 0 ) newActor ( Glimmer , shape . x -  ( shape . w + 4 )  + randInt (  ( shape . w * 2 )  + 8 )  , shape . y -  ( shape . h + 4 )  + randInt (  ( shape . h * 2 )  + 8 )  )  ; 
 
  } 
  
  if ( gvPlayer )  if ( gvPlayer . rawin ( "anSlide" )  )  { 
  if ( gvPlayer . anim == gvPlayer . anSlide )  { 
 shape . setPos ( x - 2 , y )  ; 
 if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . hspeed >= 1 )  { 
 frozen = 0 ; 
gethurt (  )  ; 
mapDeleteSolid ( icebox )  ; 
 } 
  
 shape . setPos ( x + 2 , y )  ; 
 if ( hitTest ( shape , gvPlayer . shape )  && gvPlayer . hspeed <=  - 1 )  { 
 frozen = 0 ; 
gethurt (  )  ; 
mapDeleteSolid ( icebox )  ; 
 } 
  
 shape . setPos ( x , y )  ; 
 } 
  
  } 
  
  
  } 
  
  } ;  returnVal . gethurt = function (  ) {  } ;  returnVal . hurtplayer = function (  ) {  if ( gvPlayer . blinking > 0 )  return ; 
  
  if ( gvPlayer . x < x ) gvPlayer . hspeed =  - 1.0 ; 
 
  else gvPlayer . hspeed = 1.0 ; 
 
 gvPlayer . hurt = 1 ; 
 } ;  returnVal . hurtfire = function (  ) {  } ;  returnVal . hurtice = function (  ) {  } ;  returnVal . hurtinvinc = function (  ) { newActor ( Poof , x , y )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
 } ;  returnVal . hurtblast = function (  ) { gethurt (  )  ; 
 } ;  returnVal . destructor = function (  ) {  if (  ! nocount ) game . enemies --  ; 
 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  if ( gvPlayer )  { 
  if ( gvPlayer . held == id ) gvPlayer . held = null ; 
 
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "Enemy" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Deathcap =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = false ; 
 returnVal . moving = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
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
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
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
 if ( squishTime >= 1 ) deleteActor ( id )  ; 
 
  if ( smart ) drawSpriteEx ( sprDeathcap , floor ( 4.8 + squishTime )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprDeathcap , floor ( 4.8 + squishTime )  , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
setDrawColor ( 0xff0000ff )  ; 
 if ( debug ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . hurtplayer = function (  ) {  if ( squish )  return ; 
  
  baseMethods . hurtplayer  (  )  ; 
 } ;  returnVal . gethurt = function (  ) {  if ( squish )  return ; 
  
  if ( gvPlayer . rawin ( "anSlide" )  )  { 
  if ( gvPlayer . anim == gvPlayer . anSlide )  { 
  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprDeathcap ; 
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
 } ;  returnVal . hurtblast = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprDeathcap ; 
actor [ c ]  . vspeed =  - 4 ; 
actor [ c ]  . hspeed =  ( 4 / 16 )  ; 
actor [ c ]  . spin =  ( 4 * 7 )  ; 
actor [ c ]  . angle = 180 ; 
deleteActor ( id )  ; 
playSound ( sndKick , 0 )  ; 
 if ( icebox !=  - 1 ) mapDeleteSolid ( icebox )  ; 
 
  } ;  returnVal . hurtfire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . hurtice = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "Deathcap" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
PipeSnake =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . ystart = 0 ; 
 returnVal . timer = 30 ; 
 returnVal . up = false ; 
 returnVal . flip = 1 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
ystart = y ; 
shape = Rec ( x , y , 8 , 12 , 0 )  ; 
timer =  ( x * y )  % 60 ; 
flip = _arr ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
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
 icebox = mapNewSolid ( shape )  ; 
 } 
  
  
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
newActor ( IceChunks , x , ystart - 6 )  ; 
icebox =  - 1 ; 
 } 
  
  if ( flip == 1 ) drawSpriteEx ( sprSnake , getFrames (  )  / 8 , floor ( x - camx )  , floor ( y - camy )  , 0 , 0 , 1 , 1 , 1 )  ; 
 
  if ( flip ==  - 1 ) drawSpriteEx ( sprSnake , getFrames (  )  / 8 , floor ( x - camx )  , floor ( y - camy )  + 32 , 0 , 2 , 1 , 1 , 1 )  ; 
 
  } 
  
  } ;  returnVal . gethurt = function (  ) {  if ( gvPlayer . anim != gvPlayer . anSlide ) hurtplayer (  )  ; 
 
  else  { 
 newActor ( Poof , x , ystart - 8 )  ; 
newActor ( Poof , x , ystart + 8 )  ; 
deleteActor ( id )  ; 
playSound ( sndKick , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , ystart - 6 )  ; 
icebox =  - 1 ; 
 } 
  
  } 
  
  } ;  returnVal . hurtblast = function (  ) { hurtinvinc (  )  ; 
 } ;  returnVal . hurtinvinc = function (  ) { newActor ( Poof , x , ystart - 6 )  ; 
newActor ( Poof , x , ystart + 8 )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , ystart - 6 )  ; 
icebox =  - 1 ; 
 } 
  
  } ;  returnVal . hurtfire = function (  ) { newActor ( Flame , x , ystart - 6 )  ; 
newActor ( Flame , x , ystart + 8 )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , ystart - 6 )  ; 
 } 
  
  } ;  returnVal . hurtice = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "Snake" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Ouchin =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . sf = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
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
 icebox = mapNewSolid ( shape )  ; 
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
  
  } ;  returnVal . hurtplayer = function (  ) {  baseMethods . hurtplayer  (  )  ; 
 if ( gvPlayer ) gvPlayer . hurt = 2 ; 
 
  } ;  returnVal . gethurt = function (  ) {  if ( gvPlayer &&  ! frozen )  { 
 hurtplayer (  )  ; 
 } 
  
  } ;  returnVal . hurtfire = function (  ) {  } ;  returnVal . hurtice = function (  ) { frozen = 600 ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
DeadNME =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . sprite = 0 ; 
 returnVal . frame = 0 ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . angle = 0.0 ; 
 returnVal . spin = 0 ; 
 returnVal . flip = 0 ; 
 returnVal . gravity = 0.2 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
vspeed =  - 3.0 ; 
 } ;  returnVal . run = function (  ) { vspeed += gravity ; 
x += hspeed ; 
y += vspeed ; 
angle += spin ; 
 if ( y > gvMap . h + 32 ) deleteActor ( id )  ; 
 
 drawSpriteEx ( sprite , frame , floor ( x - camx )  , floor ( y - camy )  , angle , flip , 1 , 1 , 1 )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
CarlBoom =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . burnt = false ; 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . hspeed = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 , 0 , 1 )  ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  
  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if ( placeFree ( x , y + 1 )  ) vspeed += 0.1 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if (  ! squish )  { 
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
 icebox = mapNewSolid ( shape )  ; 
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
 squishTime += 1.5 ; 
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
  
  if ( getcon ( "shoot" , "hold" )  && gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  &&  ( gvPlayer . held == null || gvPlayer . held == id )  )  { 
  if ( gvPlayer . flip == 0 ) x = gvPlayer . x + 8 ; 
 
  else x = gvPlayer . x - 8 ; 
 
 y = gvPlayer . y ; 
vspeed = 0 ; 
squishTime -= 1.0 ; 
hspeed = gvPlayer . hspeed ; 
gvPlayer . held = id ; 
 if ( squishTime >= 150 ) gvPlayer . held = null ; 
 
  } 
  
  else  if ( gvPlayer . held == id ) gvPlayer . held = null ; 
 
  
  } 
  
  if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  else  if ( placeFree ( x + hspeed , y - 2 )  )  { 
 x += hspeed ; 
y -= 1.0 ; 
 } 
  
  
  if (  ! placeFree ( x , y + 1 )  ) hspeed *= 0.9 ; 
 
  if ( abs ( hspeed )  < 0.1 ) hspeed = 0.0 ; 
 
  if ( squishTime >= 150 )  { 
 deleteActor ( id )  ; 
newActor ( BadExplode , x , y )  ; 
 if ( gvPlayer )  if ( gvPlayer . held == id ) gvPlayer . held = null ; 
 
  
  } 
  
  } 
  
 shape . setPos ( x , y )  ; 
setDrawColor ( 0xff0000ff )  ; 
 if ( debug ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . hurtplayer = function (  ) {  if ( squish )  return ; 
  
  baseMethods . hurtplayer  (  )  ; 
 } ;  returnVal . hurtblast = function (  ) {  if ( squish )  return ; 
  
  if ( frozen ) frozen = 0 ; 
 
 stopSound ( sndFizz )  ; 
playSound ( sndFizz , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
 squish = true ; 
 } ;  returnVal . gethurt = function (  ) {  if ( squish )  return ; 
  
 stopSound ( sndFizz )  ; 
playSound ( sndFizz , 0 )  ; 
 if ( getcon ( "jump" , "hold" )  ) gvPlayer . vspeed =  - 8 ; 
 
  else gvPlayer . vspeed =  - 4 ; 
 
  if ( gvPlayer . anim == gvPlayer . anJumpT || gvPlayer . anim == gvPlayer . anFall )  { 
 gvPlayer . anim = gvPlayer . anJumpU ; 
gvPlayer . frame = gvPlayer . anJumpU [ 0 ]  ; 
 } 
  
 squish = true ; 
 } ;  returnVal . hurtfire = function (  ) {  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  if (  ! burnt )  { 
 newActor ( BadExplode , x , y - 1 )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
burnt = true ; 
 } 
  
  } ;  returnVal . hurtice = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "CarlBoom" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
BadExplode =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
stopSound ( sndExplodeF )  ; 
playSound ( sndExplodeF , 0 )  ; 
shape = Cir ( x , y , 16 )  ; 
 } ;  returnVal . run = function (  ) { drawSpriteEx ( sprExplodeF , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
drawLightEx ( sprLightFire , 0 , x - camx , y - camy , 0 , 0 , 0.75 -  ( frame / 10.0 )  , 0.75 -  ( frame / 10.0 )  )  ; 
frame += 0.2 ; 
 if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  )  { 
  if ( gvPlayer . blastResist ) gvPlayer . hurt = 2 ; 
 
  else gvPlayer . hurt = 4 ; 
 
  } 
  
  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x ) gvPlayer . hspeed += 0.5 ; 
 
  if ( x > gvPlayer . x ) gvPlayer . hspeed -= 0.5 ; 
 
  if ( y >= gvPlayer . y ) gvPlayer . vspeed -= 0.8 ; 
 
  } 
  
  } 
  
  if ( frame >= 1 )  { 
  if ( actor . rawin ( "TNT" )  )  {     var foreachOutput = squirrelForEach ( actor [ "TNT" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 newActor ( BadExplode , i . x , i . y )  ; 
tileSetSolid ( i . x , i . y , 0 )  ; 
deleteActor ( i . id )  ; 
 } 
  
  } 
     }  }  
  if ( actor . rawin ( "TNTALT" )  )  {     var foreachOutput = squirrelForEach ( actor [ "TNTALT" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 newActor ( BadExplode , i . x , i . y )  ; 
deleteActor ( i . id )  ; 
 } 
  
  } 
     }  }  
  } 
  
  if ( frame >= 5 ) deleteActor ( id )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "BadExplode" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
SnowBounce =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
vspeed =  - 3.0 ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if ( gvPlayer && hspeed == 0 )  { 
  if ( x > gvPlayer . x ) hspeed =  - 0.5 ; 
 
  else hspeed = 0.5 ; 
 
  } 
  
  if (  ! placeFree ( x , y + 1 )  ) vspeed =  - 3.0 ; 
 
  if (  ! placeFree ( x + 2 , y - 2 )  &&  ! placeFree ( x + 2 , y )  ) hspeed =  - abs ( hspeed )  ; 
 
  if (  ! placeFree ( x - 2 , y - 2 )  &&  ! placeFree ( x - 2 , y )  ) hspeed = abs ( hspeed )  ; 
 
 vspeed += 0.1 ; 
 if ( hspeed > 0 ) flip = 0 ; 
 
  else flip = 1 ; 
 
  if (  ! frozen )  { 
  if ( placeFree ( x + hspeed , y )  ) x += hspeed ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
drawSpriteEx ( sprSnowBounce , getFrames (  )  / 8 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
 icebox = mapNewSolid ( shape )  ; 
 } 
  
  
 drawSpriteEx ( sprSnowBounce , 0 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
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
  
  if ( x < 0 ) hspeed = abs ( hspeed )  ; 
 
  if ( x > gvMap . w ) hspeed =  - abs ( hspeed )  ; 
 
  } ;  returnVal . gethurt = function (  ) { newActor ( Poof , x , y )  ; 
deleteActor ( id )  ; 
playSound ( sndSquish , 0 )  ; 
 if ( keyDown ( config . key . jump )  ) gvPlayer . vspeed =  - 8 ; 
 
  else gvPlayer . vspeed =  - 4 ; 
 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  } ;  returnVal . hurtfire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . hurtice = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "SnowBounce" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
BadCannon =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 3.5 ; 
 returnVal . timer = 240 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
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
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
CannonBob =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . vspeed =  - 4 ; 
 returnVal . sprite = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 if ( _arr == null ) sprite = sprCannonBob ; 
 
  else sprite = _arr ; 
 
  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if (  ! frozen )  { 
  if ( hspeed < 0 ) drawSpriteEx ( sprite , getFrames (  )  / 4 , x - camx , y - camy , 0 , 0 , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprite , getFrames (  )  / 4 , x - camx , y - camy , 0 , 1 , 1 , 1 , 1 )  ; 
 
 vspeed += 0.2 ; 
x += hspeed ; 
y += vspeed ; 
shape . setPos ( x , y )  ; 
 if ( y > gvMap . h ) deleteActor ( id )  ; 
 
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
 icebox = mapNewSolid ( shape )  ; 
 } 
  
  
  if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  } ;  returnVal . gethurt = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprite ; 
actor [ c ]  . vspeed =  - abs ( gvPlayer . hspeed * 1.1 )  ; 
actor [ c ]  . hspeed =  ( gvPlayer . hspeed / 16 )  ; 
deleteActor ( id )  ; 
playSound ( sndKick , 0 )  ; 
 if ( getcon ( "jump" , "hold" )  ) gvPlayer . vspeed =  - 5 ; 
 
  else  { 
 gvPlayer . vspeed =  - 2 ; 
playSound ( sndSquish , 0 )  ; 
 } 
  
  if ( gvPlayer . anim == gvPlayer . anJumpT || gvPlayer . anim == gvPlayer . anFall )  { 
 gvPlayer . anim = gvPlayer . anJumpU ; 
gvPlayer . frame = gvPlayer . anJumpU [ 0 ]  ; 
 } 
  
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  } ;  returnVal . hurtblast = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprite ; 
actor [ c ]  . vspeed =  - abs ( gvPlayer . hspeed * 1.1 )  ; 
actor [ c ]  . hspeed =  ( gvPlayer . hspeed / 16 )  ; 
deleteActor ( id )  ; 
playSound ( sndKick , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  } ;  returnVal . hurtice = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "CannonBob" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
BlueFish =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . timer = 0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . biting = false ; 
 returnVal . flip = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 6 , 0 )  ; 
hspeed = 0.5 ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
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
  
  } ;  returnVal . gethurt = function (  ) {  if ( gvPlayer . rawin ( "anSlide" )  )  if ( gvPlayer . anim == gvPlayer . anSlide && game . weapon == 4 ) hurtfire (  )  ; 
 
  
  } ;  returnVal . hurtfire = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprDeadFish ; 
actor [ c ]  . vspeed =  - 0.5 ; 
actor [ c ]  . flip = flip ; 
actor [ c ]  . hspeed = hspeed ; 
 if ( flip == 1 ) actor [ c ]  . spin =  - 1 ; 
 
  else actor [ c ]  . spin = 1 ; 
 
 actor [ c ]  . gravity = 0.02 ; 
deleteActor ( id )  ; 
playSound ( sndKick , 0 )  ; 
game . enemies --  ; 
newActor ( Poof , x + 8 , y )  ; 
newActor ( Poof , x - 8 , y )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "BlueFish" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
RedFish =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . timer = 0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . biting = false ; 
 returnVal . flip = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 6 , 0 )  ; 
hspeed = 0.5 ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! placeFree ( x +  ( hspeed * 2 )  , y )  ) hspeed =  - hspeed ; 
 
  if (  ! placeFree ( x , y +  ( vspeed * 2 )  )  ) vspeed =  - vspeed ; 
 
 flip =  ( hspeed < 0 )  . tointeger (  )  ; 
timer --  ; 
 if ( timer <= 0 )  { 
 timer = 240 ; 
vspeed =  - 0.5 + randFloat ( 1 )  ; 
 if ( hspeed == 0 ) hspeed = 1 ; 
 
  else hspeed *= 1 / abs ( hspeed )  ; 
 
  } 
  
  if (  ! inWater ( x , y )  ) vspeed += 0.1 ; 
 
 vspeed *= 0.99 ; 
 if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  ) biting = true ; 
 
  if ( inDistance2 ( x , y , gvPlayer . x , gvPlayer . y , 64 )  && inWater ( x , y )  )  { 
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
  
  } ;  returnVal . gethurt = function (  ) {  if ( gvPlayer . rawin ( "anSlide" )  )  if ( gvPlayer . anim == gvPlayer . anSlide && game . weapon == 4 ) hurtfire (  )  ; 
 
  
  } ;  returnVal . hurtfire = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprDeadFish ; 
actor [ c ]  . vspeed =  - 0.5 ; 
actor [ c ]  . flip = flip ; 
actor [ c ]  . hspeed = hspeed ; 
 if ( flip == 1 ) actor [ c ]  . spin =  - 1 ; 
 
  else actor [ c ]  . spin = 1 ; 
 
 actor [ c ]  . gravity = 0.02 ; 
deleteActor ( id )  ; 
playSound ( sndKick , 0 )  ; 
game . enemies --  ; 
newActor ( Poof , x + 8 , y )  ; 
newActor ( Poof , x - 8 , y )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "RedFish" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
JellyFish =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . timer = 0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . pump = false ; 
 returnVal . fliph = 0 ; 
 returnVal . flipv = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 4 , 0 )  ; 
hspeed = 0.5 ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
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
  
  } ;  returnVal . gethurt = function (  ) {  if ( gvPlayer . rawin ( "anSlide" )  )  if ( gvPlayer . anim == gvPlayer . anSlide && game . weapon == 4 ) hurtfire (  )  ; 
 
  
  } ;  returnVal . hurtfire = function (  ) {  if ( randInt ( 20 )  == 0 )  { 
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
deleteActor ( id )  ; 
playSound ( sndKick , 0 )  ; 
game . enemies --  ; 
newActor ( Poof , x , y )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "BlueFish" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Clamor =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . huntdir = 0 ; 
 returnVal . timer = 0 ; 
 returnVal . flip = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 if ( _arr == "1" ) flip = 1 ; 
 
  if ( flip == 0 ) huntdir = 1 ; 
 
  else huntdir =  - 1 ; 
 
  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( gvPlayer )  { 
  if ( inDistance2 ( x +  ( huntdir * 48 )  , y - 32 , gvPlayer . x , gvPlayer . y , 64 )  && timer == 0 )  { 
 timer = 240 ; 
newActor ( ClamorPearl , x , y , null )  ; 
 } 
  
  } 
  
  if ( timer > 0 ) timer --  ; 
 
 drawSpriteEx ( sprClamor ,  ( timer < 30 )  . tointeger (  )  , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 } ;  returnVal . gethurt = function (  ) {  if ( gvPlayer . rawin ( "anSlide" )  )  if ( gvPlayer . anim == gvPlayer . anSlide && game . weapon == 4 ) hurtfire (  )  ; 
 
  
  } ;  returnVal . hurtfire = function (  ) {  if ( timer < 30 )  { 
  if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
 newActor ( Poof , x , y - 1 )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
 } 
  
  } ;  returnVal . hurtblast = function (  ) { newActor ( Poof , x , y - 1 )  ; 
deleteActor ( id )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Clamor" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
ClamorPearl =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . hspeed = 0 ; 
 returnVal . vspeed = 0 ; 
 returnVal . timer = 1200 ; 
 returnVal . shape = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 if (  ! gvPlayer )  { 
 deleteActor ( id )  ; 
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
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
GreenFish =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . timer = 120 ; 
 returnVal . frame = 0.0 ; 
 returnVal . biting = false ; 
 returnVal . flip = 0 ; 
 returnVal . canjump = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 6 , 0 )  ; 
hspeed = 1.0 ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) hspeed =  - 1.0 ; 
 
  
  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
 flip =  ( hspeed < 0 )  . tointeger (  )  ; 
timer --  ; 
 if ( timer <= 0 )  { 
 timer = 120 ; 
 if ( vspeed >  - 0.5 && inWater ( x , y )  ) vspeed =  - 0.5 ; 
 
  if ( hspeed == 0 ) hspeed = 1 ; 
 
  else hspeed *= 1 / abs ( hspeed )  ; 
 
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
  
  } ;  returnVal . gethurt = function (  ) {  if ( gvPlayer . rawin ( "anSlide" )  )  if ( gvPlayer . anim == gvPlayer . anSlide && game . weapon == 4 ) hurtfire (  )  ; 
 
  
  } ;  returnVal . hurtfire = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprDeadFish ; 
actor [ c ]  . vspeed =  - 0.5 ; 
actor [ c ]  . flip = flip ; 
actor [ c ]  . hspeed = hspeed ; 
 if ( flip == 1 ) actor [ c ]  . spin =  - 1 ; 
 
  else actor [ c ]  . spin = 1 ; 
 
 actor [ c ]  . gravity = 0.02 ; 
deleteActor ( id )  ; 
playSound ( sndKick , 0 )  ; 
game . enemies --  ; 
newActor ( Poof , x + 8 , y )  ; 
newActor ( Poof , x - 8 , y )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . _typeof = function (  ) {  return "GreenFish" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Icicle =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . timer = 30 ; 
 returnVal . counting = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 4 , 6 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( gvPlayer )  if ( abs ( y - gvPlayer . y )  < 128 && y < gvPlayer . y && abs ( x - gvPlayer . x )  < 8 &&  ! counting )  { 
 counting = true ; 
playSound ( sndIcicle , 0 )  ; 
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
 deleteActor ( id )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
 drawSprite ( sprIcicle , 0 , x +  ( timer % 2 )  - camx , y - 8 - camy )  ; 
 } ;  returnVal . hurtfire = function (  ) { deleteActor ( id )  ; 
newActor ( Poof , x , y )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
FlyAmanita =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . range = 0 ; 
 returnVal . dir = 0.5 ; 
 returnVal . flip = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = 0 ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 if ( _arr == "" ) range = 0 ; 
 
  else  if (  squirrelTypeOf ( _arr )  == "array" ) range = _arr [ 0 ]  . tointeger (  )  ; 
 
  else range = _arr . tointeger (  )  * 16 ; 
 
  
 shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( gvPlayer ) gvPlayer . x < x ? flip = 1 : flip = 0 ; 
 
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
 icebox = mapNewSolid ( shape )  ; 
 } 
  
  
 drawSpriteEx ( sprFlyAmanita , 0 , x - camx , y - camy , 0 , flip , 1 , 1 , 1 )  ; 
 if ( frozen <= 120 )  { 
  if ( floor ( frozen / 4 )  % 2 == 0 ) drawSprite ( sprIceTrapSmall , 0 , x - camx - 1 +  (  ( floor ( frozen / 4 )  % 4 == 0 )  . tointeger (  )  * 2 )  , y - camy - 1 )  ; 
 
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
  else drawSprite ( sprIceTrapSmall , 0 , x - camx , y - camy - 1 )  ; 
 
  } 
  
 shape . setPos ( x , y )  ; 
 } ;  returnVal . hurtplayer = function (  ) {  baseMethods . hurtplayer  (  )  ; 
 } ;  returnVal . gethurt = function (  ) {  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprFlyAmanita ; 
actor [ c ]  . vspeed =  - abs ( gvPlayer . hspeed * 1.1 )  ; 
actor [ c ]  . hspeed =  ( gvPlayer . hspeed / 16 )  ; 
actor [ c ]  . spin =  ( gvPlayer . hspeed * 6 )  ; 
actor [ c ]  . angle = 180 ; 
deleteActor ( id )  ; 
playSound ( sndKick , 0 )  ; 
 if ( getcon ( "jump" , "hold" )  )  { 
 gvPlayer . vspeed =  - 8 ; 
playSound ( sndSquish , 0 )  ; 
 } 
  
  else  { 
 gvPlayer . vspeed =  - 4 ; 
playSound ( sndSquish , 0 )  ; 
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
  
  } ;  returnVal . hurtfire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . hurtice = function (  ) { frozen = 600 ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Snail =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . dir = 0 ; 
 returnVal . squish = 0 ; 
 returnVal . hitTimer = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 } ;  returnVal . hurtfire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
 if ( randInt ( 20 )  == 0 )  { 
  var a = actor [ newActor ( MuffinBlue , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . hurtice = function (  ) { frozen = 600 ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Jumpy =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = false ; 
 returnVal . jump =  - 4.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 , 0 , 2 )  ; 
 if ( _arr != null && _arr != "" ) jump = abs ( _arr . tofloat (  )  )  *  - 1.0 ; 
 
  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if ( gvPlayer )  { 
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
drawSpriteEx ( sprJumpy , getFrames (  )  / 8 , floor ( x - camx )  , floor ( y - camy )  , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
 icebox = mapNewSolid ( shape )  ; 
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
 
  } ;  returnVal . gethurt = function (  ) { gvPlayer . hurt = 3 ; 
 } ;  returnVal . hurtblast = function (  ) {  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
 newActor ( Poof , x , y - 1 )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
 } ;  returnVal . hurtfire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
 } ;  returnVal . hurtice = function (  ) { frozen = 600 ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Haywire =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . burnt = false ; 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . chasing = false ; 
 returnVal . mspeed = 1.0 ; 
 returnVal . hspeed = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 , 0 , 1 )  ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  
  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! squish || chasing )  { 
  if ( placeFree ( x , y + 1 )  ) vspeed += 0.2 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( chasing ) mspeed = abs ( hspeed )  ; 
 
  else mspeed = 0.75 ; 
 
  if ( chasing ) squishTime ++  ; 
 
  if ( squishTime >= 200 && chasing )  { 
 deleteActor ( id )  ; 
newActor ( BadExplode , x , y )  ; 
 } 
  
  if ( y > gvMap . h + 8 ) deleteActor ( id )  ; 
 
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
 
  
  
  if ( placeFree ( x - 6 , y + 14 )  &&  ! placeFree ( x , y + 2 )  )  { 
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
 
  
  
  if ( placeFree ( x + 6 , y + 14 )  &&  ! placeFree ( x , y + 2 )  )  { 
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
  
  if ( frozen )  { 
  if ( gvPlayer )  if ( icebox ==  - 1 &&  ! hitTest ( shape , gvPlayer . shape )  )  { 
 icebox = mapNewSolid ( shape )  ; 
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
stopSound ( sndFizz )  ; 
playSound ( sndFizz , 0 )  ; 
 } 
  
  if ( squishTime >= 300 && chasing )  { 
 deleteActor ( id )  ; 
newActor ( BadExplode , x , y )  ; 
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
  
  } ;  returnVal . hurtplayer = function (  ) {  if ( squish &&  ! chasing )  return ; 
  
  baseMethods . hurtplayer  (  )  ; 
 } ;  returnVal . hurtblast = function (  ) {  if ( squish )  return ; 
  
  if ( frozen ) frozen = 0 ; 
 
  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
frozen = 0 ; 
icebox =  - 1 ; 
 } 
  
 squish = true ; 
 } ;  returnVal . gethurt = function (  ) {  if ( frozen > 0 )  return ; 
  
  if ( chasing )  { 
 hurtplayer (  )  ; 
 return ; 
  } 
  
  if ( squish )  return ; 
  
  if ( getcon ( "jump" , "hold" )  ) gvPlayer . vspeed =  - 8 ; 
 
  else gvPlayer . vspeed =  - 4 ; 
 
  if ( gvPlayer . anim == gvPlayer . anJumpT || gvPlayer . anim == gvPlayer . anFall )  { 
 gvPlayer . anim = gvPlayer . anJumpU ; 
gvPlayer . frame = gvPlayer . anJumpU [ 0 ]  ; 
 } 
  
 playSound ( sndKick , 0 )  ; 
squish = true ; 
 } ;  returnVal . hurtfire = function (  ) {  if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
  if (  ! burnt )  { 
 newActor ( BadExplode , x , y - 1 )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
burnt = true ; 
 } 
  
  } ;  returnVal . hurtice = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "Haywire" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Sawblade =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PathCrawler ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
drawSprite ( sprSawblade , getFrames (  )  / 2 , x - camx , y - camy )  ; 
drawLightEx ( sprLightIce , 0 , x - camx , y - camy , 0 , 0 , 0.125 , 0.125 )  ; 
shape . setPos ( x , y )  ; 
 if ( gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  ) gvPlayer . hurt = 2 ; 
 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
BadExplodeS =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . shape = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
stopSound ( sndExplodeF )  ; 
playSound ( sndExplodeF , 0 )  ; 
shape = Rec ( x , y , 16 , 16 , 0 )  ; 
 } ;  returnVal . run = function (  ) { drawSpriteEx ( sprExplodeT , frame , x - camx , y - camy , randInt ( 360 )  , 0 , 1 , 1 , 1 )  ; 
frame += 0.1 ; 
 if ( gvPlayer )  { 
  if ( hitTest ( shape , gvPlayer . shape )  ) gvPlayer . hurt = 8 ; 
 
  if ( floor ( frame )  <= 1 && distance2 ( x , y , gvPlayer . x , gvPlayer . y )  < 64 )  { 
  if ( x < gvPlayer . x ) gvPlayer . hspeed += 0.1 ; 
 
  if ( x > gvPlayer . x ) gvPlayer . hspeed -= 0.1 ; 
 
  if ( y >= gvPlayer . y ) gvPlayer . vspeed -= 0.1 ; 
 
  } 
  
  } 
  
  if ( frame >= 1 )  { 
  if ( actor . rawin ( "WoodBlock" )  )  {     var foreachOutput = squirrelForEach ( actor [ "WoodBlock" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 newActor ( WoodChunks , i . x , i . y )  ; 
tileSetSolid ( i . x , i . y , 0 )  ; 
deleteActor ( i . id )  ; 
 } 
  
  } 
     }  }  
  } 
  
  if ( frame >= 5 ) deleteActor ( id )  ; 
 
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Livewire =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . burnt = false ; 
 returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 , 0 , 1 )  ; 
 if ( gvPlayer )  if ( x > gvPlayer . x ) flip = true ; 
 
  
  } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! squish )  { 
  if ( placeFree ( x , y + 1 )  ) vspeed += 0.5 ; 
 
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
 icebox = mapNewSolid ( shape )  ; 
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
 deleteActor ( id )  ; 
newActor ( BadExplodeS , x , y )  ; 
newActor ( BadExplodeS , x , y + 24 )  ; 
newActor ( BadExplodeS , x , y - 24 )  ; 
newActor ( BadExplodeS , x + 24 , y )  ; 
newActor ( BadExplodeS , x - 24 , y )  ; 
newActor ( BadExplodeS , x + 20 , y + 20 )  ; 
newActor ( BadExplodeS , x + 20 , y - 20 )  ; 
newActor ( BadExplodeS , x - 20 , y + 20 )  ; 
newActor ( BadExplodeS , x - 20 , y - 20 )  ; 
newActor ( BadExplodeS , x + 20 , y - 20 )  ; 
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
  
  } ;  returnVal . hurtplayer = function (  ) {  if ( squish )  return ; 
  
  baseMethods . hurtplayer  (  )  ; 
 } ;  returnVal . hurtblast = function (  ) {  if ( squish )  return ; 
  
  if ( frozen ) frozen = 0 ; 
 
 stopSound ( sndFizz )  ; 
playSound ( sndFizz , 0 )  ; 
 if ( icebox !=  - 1 )  { 
 mapDeleteSolid ( icebox )  ; 
newActor ( IceChunks , x , y )  ; 
 } 
  
 squish = true ; 
 } ;  returnVal . gethurt = function (  ) {  if ( squish )  return ; 
  
 stopSound ( sndFizz )  ; 
playSound ( sndFizz , 0 )  ; 
 if ( getcon ( "jump" , "hold" )  ) gvPlayer . vspeed =  - 8 ; 
 
  else gvPlayer . vspeed =  - 4 ; 
 
  if ( gvPlayer . anim == gvPlayer . anJumpT || gvPlayer . anim == gvPlayer . anFall )  { 
 gvPlayer . anim = gvPlayer . anJumpU ; 
gvPlayer . frame = gvPlayer . anJumpU [ 0 ]  ; 
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
  
  } ;  returnVal . hurtice = function (  ) { frozen = 120 ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Blazeborn =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = false ; 
 returnVal . moving = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
shape = Rec ( x , y , 6 , 6 , 0 )  ; 
smart = _arr ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 if ( active )  { 
  if (  ! moving )  if ( gvPlayer )  if ( x > gvPlayer . x )  { 
 flip = true ; 
moving = true ; 
 } 
  
  
  
  if (  ! squish )  { 
  if ( placeFree ( x , y + 1 )  ) vspeed += 0.2 ; 
 
  if ( placeFree ( x , y + vspeed )  ) y += vspeed ; 
 
  else vspeed /= 2 ; 
 
  if ( y > gvMap . h + 8 ) deleteActor ( id )  ; 
 
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
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
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
  
  } ;  returnVal . hurtplayer = function (  ) {  if ( squish )  return ; 
  
 gvPlayer . hurt = 3 ; 
 } ;  returnVal . gethurt = function (  ) {  if ( squish )  return ; 
  
  if ( gvPlayer . rawin ( "anSlide" )  )  { 
  if ( gvPlayer . anim == gvPlayer . anSlide )  { 
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
  
  else  if ( getcon ( "jump" , "hold" )  ) gvPlayer . vspeed =  - 1.0 ; 
 
  else gvPlayer . vspeed =  - 4.0 ; 
 
  
  if ( gvPlayer . anim == gvPlayer . anJumpT || gvPlayer . anim == gvPlayer . anFall )  { 
 gvPlayer . anim = gvPlayer . anJumpU ; 
gvPlayer . frame = gvPlayer . anJumpU [ 0 ]  ; 
 } 
  
 gvPlayer . hurt = 3 ; 
squish = false ; 
 } ;  returnVal . hurtblast = function (  ) { newActor ( Poof , x , y )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
 if ( icebox !=  - 1 ) mapDeleteSolid ( icebox )  ; 
 
  } ;  returnVal . hurtfire = function (  ) { deleteActor ( id )  ; 
newActor ( BadExplode , x , y )  ; 
newActor ( Flame , x , y - 1 )  ; 
 } ;  returnVal . hurtice = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "Blazeborn" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Wildcap =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Enemy ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . frame = 0.0 ; 
 returnVal . flip = false ; 
 returnVal . squish = false ; 
 returnVal . squishTime = 0.0 ; 
 returnVal . smart = false ; 
 returnVal . moving = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x . tofloat (  )  , _y . tofloat (  )  )  ; 
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
  
  } ;  returnVal . hurtplayer = function (  ) {  if ( squish )  return ; 
  
 gvPlayer . hurt = 4 ; 
 } ;  returnVal . gethurt = function (  ) {  if ( squish )  return ; 
  
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
 } ;  returnVal . hurtblast = function (  ) {  var c = newActor ( DeadNME , x , y )  ;
 actor [ c ]  . sprite = sprDeathcap ; 
actor [ c ]  . vspeed =  - 4 ; 
actor [ c ]  . hspeed =  ( 4 / 16 )  ; 
actor [ c ]  . spin =  ( 4 * 7 )  ; 
actor [ c ]  . angle = 180 ; 
deleteActor ( id )  ; 
playSound ( sndKick , 0 )  ; 
 if ( icebox !=  - 1 ) mapDeleteSolid ( icebox )  ; 
 
  } ;  returnVal . hurtfire = function (  ) { newActor ( Flame , x , y - 1 )  ; 
deleteActor ( id )  ; 
playSound ( sndFlame , 0 )  ; 
 if ( randInt ( 50 )  == 0 )  { 
  var a = actor [ newActor ( MuffinRed , x , y )  ]  ;
 a . vspeed =  - 2 ; 
 } 
  
  } ;  returnVal . hurtice = function (  ) { frozen = 600 ; 
 } ;  returnVal . _typeof = function (  ) {  return "Deathcap" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



}; 
