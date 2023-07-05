if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/timeline.nut'] = function () { 


Timeline =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
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
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . sequence = null ; 
 squirrelClassFunction . step = 0 ; 
 squirrelClassFunction . done = false ; 
 return squirrelClassFunction; })()) ; 
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



}; 
