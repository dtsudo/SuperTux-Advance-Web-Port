if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/secret.nut'] = function () { 


SecretWall =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . found = false ; 
 returnVal . alpha = 1.0 ; 
 returnVal . dw = 0 ; 
 returnVal . dh = 0 ; 
 returnVal . shape = null ; 
 returnVal . rehide = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
 if ( _arr == "1" ) rehide = true ; 
 
  if (  ! rehide ) game . maxSecrets ++  ; 
 
  } ;  returnVal . run = function (  ) {  if ( shape == null && dw != 0 && dh != 0 ) shape = Rec ( x +  ( dw * 8 )  , y +  ( dh * 8 )  ,  - 4 +  ( dw * 8 )  ,  - 4 +  ( dh * 8 )  , 5 )  ; 
 
  if ( shape != null && gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
  if (  ! found )  { 
 found = true ; 
 if (  ! rehide ) game . secrets ++  ; 
 
  } 
  
  } 
  
  else  if ( rehide ) found = false ; 
 
  
  
  if ( found && alpha > 0 ) alpha -= 0.1 ; 
 
  if (  ! found && alpha < 1 ) alpha += 0.1 ; 
 
  if ( alpha <= 0 &&  ! rehide ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) {  if ( config . light ) gvMap . drawTilesMod ( floor (  - camx )  , floor (  - camy )  , x / 16 , y / 16 , dw , dh , "secret" , alpha , 1 , 1 , gvLight )  ; 
 
  else gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , x / 16 , y / 16 , dw , dh , "secret" , alpha )  ; 
 
  if ( debug )  { 
 drawText ( font , x + 2 - camx , y + 2 - camy , "X: " + x + "\nY: " + y + "\nW: " + dw + "\nH: " + dh + "\nA: " + alpha )  ; 
setDrawColor ( 0xffffffff )  ; 
 if ( shape != null ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "SecretWall" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . found = false ; 
 squirrelClassFunction . alpha = 1.0 ; 
 squirrelClassFunction . dw = 0 ; 
 squirrelClassFunction . dh = 0 ; 
 squirrelClassFunction . shape = null ; 
 squirrelClassFunction . rehide = false ; 
 return squirrelClassFunction; })()) ; 
SecretJoiner =  ((function(){ let squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 returnVal . found = false ; 
 returnVal . alpha = 1.0 ; 
 returnVal . dw = null ; 
 returnVal . dh = null ; 
 returnVal . dx = null ; 
 returnVal . dy = null ; 
 returnVal . shape = null ; 
 returnVal . rehide = false ; 
 returnVal . path = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( _x , _y )  ; 
shape =  [  ]  ; 
dw =  [  ]  ; 
dh =  [  ]  ; 
dx =  [  ]  ; 
dy =  [  ]  ; 
path = _arr ; 
 var idsToDelete =  [  ]  ;
  if (  ( (actor["SecretWall"] !== undefined) )  && actor [ "SecretWall" ]  . len (  )  > 0 )  for (  var i = 0 ;
 i < path . len (  )  ; i ++  )  { 
  {     var foreachOutput1 = squirrelForEach( actor [ "SecretWall" ]  );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; j = foreachOutput1.getValue();  { 
  if ( j . shape . pointIn ( path [ i ]  [ 0 ]  , path [ i ]  [ 1 ]  )  )  { 
 shape . push ( j . shape )  ; 
idsToDelete . push ( j . id )  ; 
 if ( j . rehide ) rehide = true ; 
 
 dx . push ( j . x )  ; 
dy . push ( j . y )  ; 
dw . push ( j . dw )  ; 
dh . push ( j . dh )  ; 
 if (  ! j . rehide ) game . maxSecrets --  ; 
 
  } 
  
  } 
     }  }  } 
  
 print ( "Found " + idsToDelete . len (  )  + " secrets to delete" )  ; 
 if ( idsToDelete . len (  )  > 0 )  { 
  for (  var i = 0 ;
 i < idsToDelete . len (  )  ; i ++  ) deleteActor ( idsToDelete [ i ]  )  ; 
 if (  ! rehide ) game . maxSecrets ++  ; 
 
  } 
  
  } ;  returnVal . run = function (  ) {  var scanFound = false ;
  if ( gvPlayer )  { 
  for (  var i = 0 ;
 i < shape . len (  )  ; i ++  )  { 
  if ( hitTest ( shape [ i ]  , gvPlayer . shape )  ) scanFound = true ; 
 
  } 
  } 
  
  if ( scanFound )  { 
  if (  ! rehide &&  ! found ) game . secrets ++  ; 
 
 found = true ; 
 } 
  
  else  if ( rehide ) found = false ; 
 
  
  if ( found && alpha > 0 ) alpha -= 0.1 ; 
 
  if (  ! found && alpha < 1 ) alpha += 0.1 ; 
 
  if ( alpha <= 0 &&  ! rehide ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) {  for (  var i = 0 ;
 i < shape . len (  )  ; i ++  )  { 
  if ( config . light ) gvMap . drawTilesMod ( floor (  - camx )  , floor (  - camy )  , dx [ i ]  / 16 , dy [ i ]  / 16 , dw [ i ]  , dh [ i ]  , "secret" , alpha , 1 , 1 , gvLight )  ; 
 
  else gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , dx [ i ]  / 16 , dy [ i ]  / 16 , dw [ i ]  , dh [ i ]  , "secret" , alpha )  ; 
 
  } 
  if ( debug )  { 
  for (  var i = 0 ;
 i < path . len (  )  - 1 ; i ++  )  { 
 setDrawColor ( 0xffffffff )  ; 
drawLine ( path [ i ]  [ 0 ]  - camx , path [ i ]  [ 1 ]  - camy , path [ i + 1 ]  [ 0 ]  - camx , path [ i + 1 ]  [ 1 ]  - camy )  ; 
 } 
  for (  var i = 0 ;
 i < path . len (  )  ; i ++  )  { 
 drawText ( font , dx [ i ]  + 2 - camx , dy [ i ]  + 2 - camy , "X: " + dx [ i ]  + "\nY: " + dy [ i ]  + "\nW: " + dw [ i ]  + "\nH: " + dh [ i ]  + "\nA: " + alpha )  ; 
shape [ i ]  . draw (  )  ; 
 } 
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "SecretJoiner" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  };  squirrelClassFunction . found = false ; 
 squirrelClassFunction . alpha = 1.0 ; 
 squirrelClassFunction . dw = null ; 
 squirrelClassFunction . dh = null ; 
 squirrelClassFunction . dx = null ; 
 squirrelClassFunction . dy = null ; 
 squirrelClassFunction . shape = null ; 
 squirrelClassFunction . rehide = false ; 
 squirrelClassFunction . path = false ; 
 return squirrelClassFunction; })()) ; 



}; 
