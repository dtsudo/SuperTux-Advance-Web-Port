if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/bosses.nut'] = function () { 


Boss =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . health = 40 ; 
 returnVal . phasing = false ; 
 returnVal . active = false ; 
 returnVal . routine = null ; 
 returnVal . hspeed = 0.0 ; 
 returnVal . vspeed = 0.0 ; 
 returnVal . flip = 0 ; 
 returnVal . gravity = 0.0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . anim = null ; 
 returnVal . blinking = 0.0 ; 
 returnVal . canBeStomped = false ; 
 returnVal . ready = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y , _arr )  ; 
 } ;  returnVal . run = function (  ) {  if ( active )  { 
  if ( routine != null ) routine (  )  ; 
 
 animics (  )  ; 
 if ( gvPlayer && health > 0 )  if ( hitTest ( shape , gvPlayer . shape )  && blinking <= 0 )  { 
  if ( gvPlayer . y < y && gvPlayer . vspeed >= 0 && gvPlayer . canStomp && canBeStomped ) hurtStomp (  )  ; 
 
  else hitPlayer (  )  ; 
 
  } 
  
  
  if ( blinking > 0 )  { 
 blinking -= 0.1 ; 
 if ( blinking <= 0 ) blinking = 0.0 ; 
 
  } 
  
  else  { 
  if ( actor . rawin ( "Fireball" )  )  {     var foreachOutput = squirrelForEach ( actor [ "Fireball" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 hurtFire (  )  ; 
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
  if ( actor . rawin ( "Iceball" )  )  {     var foreachOutput = squirrelForEach ( actor [ "Iceball" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 hurtIce (  )  ; 
deleteActor ( i . id )  ; 
 } 
  
  } 
     }  }  
  if ( actor . rawin ( "ExplodeF" )  )  {     var foreachOutput = squirrelForEach ( actor [ "ExplodeF" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 hurtFire (  )  ; 
 } 
  
  } 
     }  }  
  if ( actor . rawin ( "ExplodeT" )  )  {     var foreachOutput = squirrelForEach ( actor [ "ExplodeT" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 hurtShock (  )  ; 
 } 
  
  } 
     }  }  
  if ( actor . rawin ( "ExplodeI" )  )  {     var foreachOutput = squirrelForEach ( actor [ "ExplodeI" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 hurtIce (  )  ; 
 } 
  
  } 
     }  }  
  if ( actor . rawin ( "ExplodeN" )  )  {     var foreachOutput = squirrelForEach ( actor [ "ExplodeN" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( hitTest ( shape , i . shape )  )  { 
 hurtBlast (  )  ; 
 } 
  
  } 
     }  }  
  } 
  
  } 
  
  } ;  returnVal . animics = function (  ) {  } ;  returnVal . hitPlayer = function (  ) { gvPlayer . hurt = 1 ; 
 } ;  returnVal . hurtStomp = function (  ) {  } ;  returnVal . hurtBlast = function (  ) {  } ;  returnVal . hurtFire = function (  ) {  } ;  returnVal . hurtIce = function (  ) {  } ;  returnVal . hurtShock = function (  ) {  } ;  returnVal . hurtEarth = function (  ) {  } ;  returnVal . turnToPlayer = function (  ) {  if ( gvPlayer )  { 
  if ( gvPlayer . x > x ) flip = 0 ; 
 
  else flip = 1 ; 
 
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "Boss" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
BossManager =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . bossTotal = 0 ; 
 returnVal . health = 0 ; 
 returnVal . healthTotal = 0 ; 
 returnVal . healthDrawn = 0 ; 
 returnVal . healthActual = 0.0 ; 
 returnVal . doorID = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
 if ( _arr != null && _arr != "" )  { 
 doorID = _arr . tointeger (  )  ; 
 } 
  
  {     var foreachOutput = squirrelForEach ( actor [ "Boss" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
 bossTotal ++  ; 
healthTotal += 40 ; 
healthActual += i . health ; 
 } 
     }  }  } ;  returnVal . run = function (  ) {  if (  ! actor . rawin ( "Boss" )  ) deleteActor ( id )  ; 
 
  if ( actor [ "Boss" ]  . len (  )  == 0 ) deleteActor ( id )  ; 
 
 bossTotal = actor [ "Boss" ]  . len (  )  ; 
healthActual = 0 ; 
 if ( actor [ "Boss" ]  . len (  )  > 0 )  {     var foreachOutput = squirrelForEach ( actor [ "Boss" ]  ) ;     while ( true )     {        foreachOutput . next ( ) ;        if ( foreachOutput . isDone ( ) ) break ; i = foreachOutput . getValue ( ) ;  { 
  if ( i . ready ) healthActual += i . health ; 
 
  } 
     }  }  
  if ( healthActual <= 0 && bossTotal == 0 )  { 
 healthActual = 0 ; 
deleteActor ( id )  ; 
 if ( mapActor . rawin ( doorID )  )  if ( actor [ mapActor [ doorID ]  ]  . rawin ( "opening" )  ) actor [ mapActor [ doorID ]  ]  . opening = true ; 
 
  
  } 
  
  if ( getFrames (  )  % 4 == 0 )  { 
  if ( health < healthActual )  { 
 stopSound ( sndMenuMove )  ; 
playSound ( sndMenuMove , 0 )  ; 
 } 
  
 health +=  squirrelThreeWaysCompare ( healthActual , health )  ; 
 } 
  
  if ( health > 0 )  if (  ! gvBoss ) gvBoss = this ; 
 
  
 game . bossHealth = 40 / healthTotal * health ; 
 } ;  returnVal . destructor = function (  ) { gvBoss = false ; 
 } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Yeti =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Boss ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . anIdle =  [ 0.0 , 7.0 , "idle" ]  ; 
 returnVal . anWalk =  [ 8.0 , 15.0 , "walk" ]  ; 
 returnVal . anRun =  [ 16.0 , 23.0 , "run" ]  ; 
 returnVal . anJump =  [ 24.0 , 27.0 , "jump" ]  ; 
 returnVal . anFall =  [ 28.0 , 31.0 , "fall" ]  ; 
 returnVal . anHurt =  [ 32.0 , 33.0 , "hurt" ]  ; 
 returnVal . anDizzy =  [ 34.0 , 35.0 , "dizzy" ]  ; 
 returnVal . anShake =  [ 36.0 , 39.0 , "shake" ]  ; 
 returnVal . anThrow =  [ 40.0 , 43.0 , "throw" ]  ; 
 returnVal . anCheer =  [ 44.0 , 47.0 , "cheer" ]  ; 
 returnVal . health = 40 ; 
 returnVal . eventTimer = 0 ; 
 returnVal . eventStage = 0 ; 
 returnVal . hasThrown = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  gravity = 0.1 ; 
 baseConstructor  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 14 , 20 , 0 , 0 , 4 )  ; 
routine = ruWalkIntoFrame ; 
 for (  var i = 0 ;
 i < 32 ; i ++  )  { 
  if ( placeFree ( x , y + 1 )  ) y ++  ; 
 
  else  break ;  
  } 
  if (  ! placeFree ( x , y )  ) y --  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Yeti" ;
  } ;  returnVal . animics = function (  ) {  if ( placeFree ( x + hspeed , y )  || phasing ) x += hspeed ; 
 
  else  for (  var i = 0 ;
 i < abs ( hspeed * 1.5 )  ; i ++  )  { 
  if ( placeFree ( x + hspeed , y - i )  )  { 
 x += hspeed ; 
y =  - i ; 
 break ;  } 
  
  } 
  
  if (  (  ! phasing || health <= 0 )  && vspeed < 4 ) vspeed += gravity ; 
 
  if ( placeFree ( x , y + vspeed )  || phasing ) y += vspeed ; 
 
  else vspeed /= 4.0 ; 
 
  if ( health <= 0 && routine != ruDefeated )  { 
 phasing = true ; 
vspeed =  - 2.0 ; 
routine = ruDefeated ; 
 if ( flip == 0 ) hspeed =  - 1.0 ; 
 
  else hspeed = 1.0 ; 
 
 setFPS ( 30 )  ; 
eventTimer = 120 ; 
 if ( gvPlayer )  { 
 gvPlayer . canMove = false ; 
gvPlayer . invincible = 120 ; 
 } 
  
 fadeMusic ( 0.25 )  ; 
 } 
  
 shape . setPos ( x , y )  ; 
 switch ( anim )  {  case anWalk : frame += 0.1 ; 
 break ;  case anIdle :  case anDizzy : frame += 0.15 ; 
 break ;  case anRun : frame += 0.3 ; 
 break ;  case anThrow : frame += 0.1 ; 
 if ( frame < anim [ 0 ]  + 2 ) frame += 0.1 ; 
 
  if ( frame > anim [ 1 ]  + 1 ) anim = anIdle ; 
 
  break ;  case anCheer :  case anHurt :  case anShake : frame += 0.2 ; 
 break ;  case anJump :  if ( frame < anim [ 1 ]  + 1 ) frame += 0.2 ; 
 
  if ( frame >= anim [ 1 ]  + 1 )  { 
  if ( vspeed < 0 ) frame -= 0.2 ; 
 
  else  { 
 anim = anFall ; 
frame = anim [ 0 ]  ; 
 } 
  
  } 
  
  break ;  case anFall :  if ( frame < anim [ 1 ]  ) frame += 0.1 ; 
 
  else frame -= 0.5 ; 
 
  break ;  }  if ( anim != null ) frame = wrap ( frame , anim [ 0 ]  , anim [ 1 ]  )  ; 
 
  if ( anim != anHurt )  { 
  if ( hspeed > 0 ) flip = 0 ; 
 
  if ( hspeed < 0 ) flip = 1 ; 
 
  } 
  
  if ( blinking == 0 ) drawSpriteEx ( sprYeti , frame , x - camx , y - camy , 0 , flip . tointeger (  )  , 1 , 1 , 1 )  ; 
 
  else drawSpriteEx ( sprYeti , frame , x - camx , y - camy , 0 , flip . tointeger (  )  , 1 , 1 , max ( wrap ( blinking , 0 , 1 )  ,  ( anim == anHurt )  . tointeger (  )  )  )  ; 
 
  if ( debug )  { 
 setDrawColor ( 0x008000ff )  ; 
shape . draw (  )  ; 
drawText ( font2 , x - camx , y - camy , vspeed . tostring (  )  )  ; 
 } 
  
  } ;  returnVal . ruWalkIntoFrame = function (  ) { phasing = true ; 
 if ( gvPlayer ) gvPlayer . canMove = false ; 
 
 anim = anWalk ; 
flip = 1 ; 
hspeed =  - 0.5 ; 
 if ( x < camx + screenW (  )  - 96 )  { 
 routine = ruIntroCheer ; 
hspeed = 0.0 ; 
phasing = false ; 
eventTimer = 160 ; 
 } 
  
  if ( gvWarning == 180 ) songPlay ( musBossIntro )  ; 
 
  } ;  returnVal . ruIntroCheer = function (  ) { ready = true ; 
eventTimer --  ; 
 if ( eventTimer < 100 ) anim = anCheer ; 
 
  else anim = anIdle ; 
 
  if ( eventTimer == 100 ) playSound ( sndGrowl , 0 )  ; 
 
  if ( eventTimer == 0 )  { 
 eventTimer = 60 ; 
routine = ruIdle ; 
 if ( gvPlayer ) gvPlayer . canMove = true ; 
 
 songPlay ( musBoss )  ; 
 } 
  
  } ;  returnVal . ruIdle = function (  ) { hspeed = 0.0 ; 
anim = anIdle ; 
eventTimer --  ; 
 if ( eventTimer == 0 )  { 
  switch ( eventStage )  {  case 0 : eventStage ++  ; 
routine = ruJump ; 
eventTimer = 240 ; 
 break ;  case 1 : eventStage ++  ; 
routine = ruThrow ; 
eventTimer = 120 ; 
anim = anThrow ; 
frame = anim [ 0 ]  ; 
turnToPlayer (  )  ; 
hasThrown = false ; 
 break ;  case 2 : eventStage ++  ; 
routine = ruCharge ; 
turnToPlayer (  )  ; 
 break ;  default : eventStage = 0 ; 
eventTimer = 1 ; 
 break ;  }  } 
  
  } ;  returnVal . ruJump = function (  ) { eventTimer --  ; 
 if ( anim == anIdle )  { 
 anim = anJump ; 
frame = anim [ 0 ]  ; 
 } 
  
  if ( floor ( frame )  == anim [ 0 ]  + 1 && anim == anJump )  { 
 vspeed =  - 4.0 ; 
 if ( gvPlayer )  { 
 hspeed =  ( gvPlayer . x - x )  / 64.0 ; 
 } 
  
  } 
  
  if ( anim == anFall &&  ! placeFree ( x , y + 1 )  )  { 
 hspeed = 0.0 ; 
vspeed = 0.0 ; 
 if ( eventTimer > 0 )  { 
 anim = anJump ; 
frame = anim [ 0 ]  ; 
newActor ( YetiShock , x , y + 32 ,  (  ( 40 - health )  . tofloat (  )  / 20.0 )  + 1.0 )  ; 
 } 
  
  else  { 
 eventTimer = 60 ; 
routine = ruIdle ; 
playSound ( sndCrush , 0 )  ; 
 } 
  
  } 
  
  } ;  returnVal . ruThrow = function (  ) { eventTimer --  ; 
 if ( anim == anThrow && frame >= anim [ 0 ]  + 1 &&  ! hasThrown )  { 
  var c = actor [ newActor ( SnowBounce , x , y - 16 )  ]  ;
  if ( flip == 0 ) c . hspeed = 2.0 ; 
 
  else c . hspeed =  - 2.0 ; 
 
 hasThrown = true ; 
 } 
  
  if ( eventTimer <= 0 )  { 
 routine = ruIdle ; 
eventTimer = 60 ; 
 } 
  
  } ;  returnVal . ruCharge = function (  ) { anim = anRun ; 
 if ( flip == 0 ) hspeed = 3.0 ; 
 
  else hspeed =  - 3.0 ; 
 
  if (  ! placeFree ( x + hspeed , y )  )  { 
 vspeed =  - 2.0 ; 
hspeed =  - hspeed / 3.0 ; 
anim = anHurt ; 
frame = anim [ 0 ]  ; 
routine = ruDizzy ; 
eventTimer = 240 ; 
playSound ( sndGrowl , 0 )  ; 
 } 
  
  } ;  returnVal . ruDizzy = function (  ) { canBeStomped = true ; 
eventTimer --  ; 
 if ( anim == anHurt &&  ! placeFree ( x , y + 1 )  )  { 
 vspeed = 0.0 ; 
hspeed = 0.0 ; 
anim = anDizzy ; 
 } 
  
  if ( eventTimer < 60 ) anim = anShake ; 
 
  if ( eventTimer <= 0 )  { 
 routine = ruIdle ; 
eventTimer = 60 ; 
canBeStomped = false ; 
 } 
  
  } ;  returnVal . ruHurt = function (  ) { anim = anHurt ; 
eventTimer --  ; 
blinking = 12.0 ; 
 if ( eventTimer <= 0 )  { 
 eventTimer = 60 ; 
routine = ruIdle ; 
canBeStomped = false ; 
 } 
  
  if (  ! placeFree ( x , y + 1 )  && vspeed > 0 ) hspeed = 0.0 ; 
 
  } ;  returnVal . ruDefeated = function (  ) { eventTimer --  ; 
phasing = true ; 
anim = anHurt ; 
gravity = 0.05 ; 
blinking = 0 ; 
 if ( eventTimer <= 0 )  { 
 setFPS ( 60 )  ; 
 if ( gvPlayer ) gvPlayer . canMove = true ; 
 
 deleteActor ( id )  ; 
 } 
  
  } ;  returnVal . hurtBlast = function (  ) {  if ( health <= 0 )  return ; 
  
 blinking = 12.0 ; 
health --  ; 
playSound ( sndBossHit , 0 )  ; 
 } ;  returnVal . hurtFire = function (  ) { hurtBlast (  )  ; 
 } ;  returnVal . hurtShock = function (  ) { hurtBlast (  )  ; 
 } ;  returnVal . hurtStomp = function (  ) {  if ( health <= 0 )  return ; 
  
 routine = ruHurt ; 
eventTimer = 30 ; 
canBeStomped = false ; 
vspeed =  - 2.0 ; 
 if ( gvPlayer )  { 
 gvPlayer . vspeed =  - 2.0 ; 
 if ( flip == 0 ) hspeed =  - 1.0 ; 
 
  else hspeed = 1.0 ; 
 
  } 
  
 health -= 4 ; 
 if ( gvPlayer )  if ( gvPlayer . rawin ( "anStomp" )  )  if ( gvPlayer . anim == gvPlayer . anStomp ) health -= 4 ; 
 
  
  
  if ( health > 0 ) playSound ( sndBossHit , 0 )  ; 
 
  else playSound ( sndDie , 0 )  ; 
 
  } ;  returnVal . _typeof = function (  ) {  return "Boss" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
YetiShock =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . shape = null ; 
 returnVal . timer = 0 ; 
 returnVal . speed = 1.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y , _arr )  ; 
shape = Rec ( x , y , 8 , 16 , 0 , 0 ,  - 16 )  ; 
 if ( _arr != null ) speed = _arr . tofloat (  )  ; 
 
 playSound ( sndCrush , 0 )  ; 
 } ;  returnVal . run = function (  ) { timer ++  ; 
 if ( timer >= 240 ) deleteActor ( id )  ; 
 
  if ( gvPlayer )  { 
 shape . setPos ( x +  ( timer * speed )  , y )  ; 
 if ( hitTest ( shape , gvPlayer . shape )  ) gvPlayer . hurt = 2 ; 
 
 shape . setPos ( x -  ( timer * speed )  , y )  ; 
 if ( hitTest ( shape , gvPlayer . shape )  ) gvPlayer . hurt = 2 ; 
 
  } 
  
  if ( timer % 10 == 0 )  { 
 newActor ( BigSpark , x +  ( timer * speed )  + speed , y , 0 )  ; 
newActor ( BigSpark , x -  ( timer * speed )  - speed , y , 1 )  ; 
 } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 
Nolok =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Boss ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( _x , _y )  ; 
shape = Rec ( x , y , 8 , 20 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  baseMethods . run  (  )  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Nolok" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



}; 
