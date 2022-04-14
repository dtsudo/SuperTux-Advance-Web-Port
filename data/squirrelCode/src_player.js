if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/player.nut'] = function () { 


Player =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . anim = null ; 
 returnVal . sprite = 0 ; 
 returnVal . frame = 0.0 ; 
 returnVal . shapeStand = null ; 
 returnVal . shapeCrouch = null ; 
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
 returnVal . blastResist = false ; 
 returnVal . weight = 1.0 ; 
 returnVal . jumpForce = 2.0 ; 
 returnVal . walkSpeed = 1.0 ; 
 returnVal . jogSpeed = 2.0 ; 
 returnVal . runSpeed = 3.0 ; 
 returnVal . accel = 0.2 ; 
 returnVal . friction = 0.1 ; 
 returnVal . held = null ; 
 returnVal . routine = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( x , y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   baseConstructor  ( x , y , _arr )  ; 
 } ;  returnVal . run = function (  ) { animics (  )  ; 
 if ( routine != null ) routine (  )  ; 
 
  } ;  returnVal . animics = function (  ) {  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



}; 
