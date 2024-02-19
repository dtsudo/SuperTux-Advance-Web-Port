if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/timeline.nut'] = function () { 


Timeline =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . sequence = null ; 
 returnVal . step = 0 ; 
 returnVal . done = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( x , y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( x , y )  ; 
sequence = _arr ; 
 } ;  returnVal . run = function (  ) {  if ( sequence == null || done )  { 
 deleteActor ( id )  ; 
 return ; 
  } 
  
  if ( sequence . rawin ( step . tostring (  )  )  ) sequence [ step . tostring (  )  ]  ( this )  ; 
 
 step ++  ; 
 } ;  returnVal . _typeof = function (  ) {  return "Timeline" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . sequence = null ; 
 squirrelClassFunction . step = 0 ; 
 squirrelClassFunction . done = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = Actor;  return squirrelClassFunction; })()) ; 
runTimeline =  function ( sequence ) {  return newActor ( Timeline , 0 , 0 , sequence )  ;
  }  ; 
stopTimeline =  function ( tln ) {  if (  squirrelTypeOf ( tln )  == "Timeline" ) deleteActor ( tln . id )  ; 
 
  }  ; 
tlnTest =  { "0" :  function ( runner ) { print ( "Started test timeline." )  ; 
 }  , "20" :  function ( runner ) { print ( "20" )  ; 
 }  , "40" :  function ( runner ) { print ( "40" )  ; 
print ( jsonWrite ( runner . sequence )  )  ; 
print ( jsonWrite ( actor )  )  ; 
runner . done = true ; 
 }  }  ; 
tlnWalkAndJump =  { "0" :  function ( runner ) { gvAutoCon = true ; 
autocon . a . right = true ; 
 }  , "1" :  function ( runner ) {  if ( gvPlayer )  { 
  if (  ! gvPlayer . placeFree ( gvPlayer . x + 4 , gvPlayer . y )  ) autocon . a . jump = true ; 
 
  if (  ! gvPlayer . placeFree ( gvPlayer . x , gvPlayer . y + 1 )  && gvPlayer . vspeed > 0 ) autocon . a . jump = false ; 
 
  } 
  
  if ( autocon . a . jump &&  ! autocon . a . wasJump ) print ( "jumped" )  ; 
 
 runner . step --  ; 
 }  }  ; 



}; 
