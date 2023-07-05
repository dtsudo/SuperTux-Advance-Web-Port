if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/spawner.nut'] = function () { 


Spawner =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . myob =  - 1 ; 
 returnVal . timer = 60 ; 
 returnVal . maxTime = 60 ; 
 returnVal . myClass = "" ; 
 returnVal . infinite = false ; 
 returnVal . shape = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 var arg ;
  if (  squirrelTypeOf ( _arr )  == "string" ) arg = split ( _arr , "," )  ; 
 
  if (  squirrelTypeOf ( _arr )  == "array" ) arg = _arr ; 
 
 myClass = arg [ 0 ]  ; 
 if ( (arg[1] !== undefined) )  if ( canint ( arg [ 1 ]  )  )  { 
 maxTime = arg [ 1 ]  . tointeger (  )  ; 
timer = arg [ 1 ]  . tointeger (  )  ; 
 } 
  
  
  if ( (arg[2] !== undefined) )  if ( arg [ 2 ]  ) infinite = true ; 
 
  
  if ( (getroottable (  ) [myClass] !== undefined) )  { 
 myob = newActor ( getroottable (  )  [ myClass ]  , x , y )  ; 
 if ( (actor [ myob ] ["nocount"] !== undefined) ) actor [ myob ]  . nocount = true ; 
 
  } 
  
  else deleteActor ( id )  ; 
 
  } ;  returnVal . run = function (  ) {  if ( x < camx )  return ; 
  
  if ( y < camy )  return ; 
  
  if ( x > camx + screenW (  )  )  return ; 
  
  if ( y > camy + screenH (  )  )  return ; 
  
  if ( infinite ||  !  ( (actor[myob] !== undefined) )  )  { 
 timer --  ; 
 if ( timer == 0 )  { 
 timer = maxTime ; 
 if ( (getroottable (  ) [myClass] !== undefined) ) myob = newActor ( getroottable (  )  [ myClass ]  , x , y )  ; 
 
  if ( (actor [ myob ] ["nocount"] !== undefined) ) actor [ myob ]  . nocount = true ; 
 
  } 
  
  } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . myob =  - 1 ; 
 squirrelClassFunction . timer = 60 ; 
 squirrelClassFunction . maxTime = 60 ; 
 squirrelClassFunction . myClass = "" ; 
 squirrelClassFunction . infinite = false ; 
 squirrelClassFunction . shape = null ; 
 return squirrelClassFunction; })()) ; 



}; 
