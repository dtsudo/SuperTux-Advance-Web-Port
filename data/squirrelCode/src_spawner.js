if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/spawner.nut'] = function () { 


Spawner =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = PhysAct ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 if (  ( (arg[ ( 1 ) ] !== undefined) )  && canint ( arg [ 1 ]  )  )  { 
 maxTime = arg [ 1 ]  . tointeger (  )  ; 
timer = arg [ 1 ]  . tointeger (  )  ; 
 } 
  
  if (  ( (arg[ ( 2 ) ] !== undefined) )  && arg [ 2 ]  != "0" && arg [ 2 ]  != "false" ) infinite = true ; 
 
  if (  ( (arg[ ( 3 ) ] !== undefined) )  )  if (  ( (getroottable (  ) [ ( myClass ) ] !== undefined) )  )  { 
 myob = newActor ( getroottable (  )  [ myClass ]  , x , y )  ; 
 if (  ( (actor [ myob ] [ ( "nocount" ) ] !== undefined) )  ) actor [ myob ]  . nocount = true ; 
 
  } 
  
  else deleteActor ( id )  ; 
 
  
 shape = Rec ( x , y , 8 , 8 , 0 )  ; 
 } ;  returnVal . run = function (  ) {  if (  ! isOnScreen (  )  )  return ; 
  
  if ( infinite ||  !  (  ( (actor[ ( myob ) ] !== undefined) )  )  )  { 
 timer --  ; 
 if ( timer == 0 )  { 
 timer = maxTime ; 
 if (  ( (getroottable (  ) [ ( myClass ) ] !== undefined) )  ) myob = newActor ( getroottable (  )  [ myClass ]  , x , y )  ; 
 
  if (  ( (actor [ myob ] [ ( "nocount" ) ] !== undefined) )  ) actor [ myob ]  . nocount = true ; 
 
  } 
  
  } 
  
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . myob =  - 1 ; 
 squirrelClassFunction . timer = 60 ; 
 squirrelClassFunction . maxTime = 60 ; 
 squirrelClassFunction . myClass = "" ; 
 squirrelClassFunction . infinite = false ; 
 squirrelClassFunction . shape = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = PhysAct;  return squirrelClassFunction; })()) ; 



}; 
