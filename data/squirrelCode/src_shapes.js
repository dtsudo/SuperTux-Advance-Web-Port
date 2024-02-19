if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/shapes.nut'] = function () { 


Rec =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal . x = 0.0 ; 
 returnVal . y = 0.0 ; 
 returnVal . w = 0.0 ; 
 returnVal . h = 0.0 ; 
 returnVal . kind = 0 ; 
 returnVal . ox = 0.0 ; 
 returnVal . oy = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _w , _h , _kind = 0 , _ox = 0.0 , _oy = 0.0 ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  x = _x . tofloat (  )  ; 
y = _y . tofloat (  )  ; 
w = _w . tofloat (  )  ; 
h = _h . tofloat (  )  ; 
kind = _kind ; 
 if ( w <= 0 ) w = 0.1 ; 
 
  if ( h <= 0 ) h = 0.1 ; 
 
 ox = _ox . tofloat (  )  ; 
oy = _oy . tofloat (  )  ; 
 } ;  returnVal . setPos = function ( _x , _y ) { x = _x . tofloat (  )  + ox ; 
y = _y . tofloat (  )  + oy ; 
 } ;  returnVal . draw = function (  ) { drawRect ( x - w - camx , y - h - camy ,  ( w * 2 )  + 1 ,  ( h * 2 )  + 1 , false )  ; 
 } ;  returnVal . pointIn = function ( _x , _y ) {  return  ( _x > x - w && _x < x + w && _y > y - h && _y < y + h )  ;
  } ;  returnVal . _typeof = function (  ) {  return "Rec" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . x = 0.0 ; 
 squirrelClassFunction . y = 0.0 ; 
 squirrelClassFunction . w = 0.0 ; 
 squirrelClassFunction . h = 0.0 ; 
 squirrelClassFunction . kind = 0 ; 
 squirrelClassFunction . ox = 0.0 ; 
 squirrelClassFunction . oy = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  return squirrelClassFunction; })()) ; 
Cir =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal . x = 0.0 ; 
 returnVal . y = 0.0 ; 
 returnVal . r = 0.0 ; 
 returnVal . ox = 0.0 ; 
 returnVal . oy = 0.0 ; 
 returnVal . w = 0.0 ; 
 returnVal . h = 0.0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _r , _ox = 0.0 , _oy = 0.0 ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  x = _x . tofloat (  )  ; 
y = _y . tofloat (  )  ; 
r = _r . tofloat (  )  ; 
ox = _ox . tofloat (  )  ; 
oy = _oy . tofloat (  )  ; 
w = _r . tofloat (  )  ; 
h = _r . tofloat (  )  ; 
 } ;  returnVal . setPos = function ( _x , _y ) { x = _x . tofloat (  )  + ox ; 
y = _y . tofloat (  )  + oy ; 
 } ;  returnVal . draw = function (  ) { drawCircle ( x - camx , y - camy , r , false )  ; 
 } ;  returnVal . pointIn = function ( _x , _y ) {  return inDistance2 ( x , y , _x , _y , _r )  ;
  } ;  returnVal . _typeof = function (  ) {  return "Cir" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . x = 0.0 ; 
 squirrelClassFunction . y = 0.0 ; 
 squirrelClassFunction . r = 0.0 ; 
 squirrelClassFunction . ox = 0.0 ; 
 squirrelClassFunction . oy = 0.0 ; 
 squirrelClassFunction . w = 0.0 ; 
 squirrelClassFunction . h = 0.0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  return squirrelClassFunction; })()) ; 
hitTest =  function ( a , b ) {  switch (  squirrelTypeOf ( a )  )  {  case "Rec" :  switch (  squirrelTypeOf ( b )  )  {  case "Rec" :  if ( abs ( a . x - b . x )  > abs ( a . w + b . w )  )  return false ;
  
  if ( abs ( a . y - b . y )  > abs ( a . h + b . h )  )  return false ;
  
  if ( a . kind != 0 || b . kind != 0 )  { 
  switch ( a . kind )  {  case 0 :  switch ( b . kind )  {  case 0 :  return true ;
  break ;  case 1 :  if (  (  ( a . x - a . w )  -  ( b . x + b . w )  )  == 0 )  return false ;
  
  var a0 = b . h / b . w ;
  var a1 =  (  ( a . y + a . h )  -  ( b . y + b . h )  )  /  (  ( a . x - a . w )  -  ( b . x + b . w )  )  ;
  if ( a1 > a0 )  return false ;
  
  break ;  case 2 :  if (  (  ( a . x + a . w )  -  ( b . x - b . w )  )  == 0 )  return false ;
  
  var a0 = b . h /  - b . w ;
  var a1 =  (  ( a . y + a . h )  -  ( b . y + b . h )  )  /  (  ( a . x + a . w )  -  ( b . x - b . w )  )  ;
  if ( a1 < a0 )  return false ;
  
  break ;  case 3 :  if (  (  ( a . x - a . w )  -  ( b . x + b . w )  )  == 0 )  return false ;
  
  var a0 =  - b . h / b . w ;
  var a1 =  (  ( a . y - a . h )  -  ( b . y - b . h )  )  /  (  ( a . x - a . w )  -  ( b . x + b . w )  )  ;
  if ( a1 < a0 )  return false ;
  
  break ;  case 4 :  if (  (  ( a . x + a . w )  -  ( b . x - b . w )  )  == 0 )  return false ;
  
  var a0 =  - b . h /  - b . w ;
  var a1 =  (  ( a . y - a . h )  -  ( b . y - b . h )  )  /  (  ( a . x + a . w )  -  ( b . x - b . w )  )  ;
  if ( a1 > a0 )  return false ;
  
  break ;  case 5 :  if ( abs ( a . x - b . x )  > abs ( b . w )  )  return false ;
  
  if ( abs ( a . y - b . y )  > abs ( b . h )  )  return false ;
  
  break ;  }  break ;  case 1 :  switch ( b . kind )  {  case 0 :  case 1 :  case 2 :  case 3 :  if (  (  ( a . x - a . w )  -  ( b . x + b . w )  )  == 0 )  return false ;
  
  var a0 = b . h / b . w ;
  var a1 =  (  ( a . y + a . h )  -  ( b . y + b . h )  )  /  (  ( a . x - a . w )  -  ( b . x + b . w )  )  ;
  if ( a1 > a0 )  return false ;
  
  break ;  case 4 :  break ;  case 5 :  break ;  }  break ;  case 2 :  switch ( b . kind )  {  case 0 :  break ;  case 1 :  break ;  case 2 :  break ;  case 3 :  break ;  case 4 :  break ;  case 5 :  break ;  }  break ;  case 3 :  switch ( b . kind )  {  case 0 :  break ;  case 1 :  break ;  case 2 :  break ;  case 3 :  break ;  case 4 :  break ;  case 5 :  break ;  }  break ;  case 4 :  switch ( b . kind )  {  case 0 :  break ;  case 1 :  break ;  case 2 :  break ;  case 3 :  break ;  case 4 :  break ;  case 5 :  break ;  }  break ;  case 5 :  switch ( b . kind )  {  case 0 :  break ;  case 1 :  break ;  case 2 :  break ;  case 3 :  break ;  case 4 :  break ;  case 5 :  break ;  }  break ;  }  } 
  
  return true ;
  break ;  case "Cir" :  var hx = b . x ;
  var hy = b . y ;
  if ( b . x < a . x - a . w ) hx = a . x - a . w ; 
 
  if ( b . x > a . x + a . w ) hx = a . x + a . w ; 
 
  if ( b . y < a . y - a . h ) hy = a . y - a . h ; 
 
  if ( b . y > a . y + a . h ) hy = a . y + a . h ; 
 
  if ( inDistance2 ( hx , hy , b . x , b . y , b . r )  )  return true ;
  
  break ;  default :  return false ;
  break ;  }  break ;  case "Cir" :  switch (  squirrelTypeOf ( b )  )  {  case "Rec" :  var hx = a . x ;
  var hy = a . y ;
  if ( a . x < b . x - b . w ) hx = b . x - b . w ; 
 
  if ( a . x > b . x + b . w ) hx = b . x + b . w ; 
 
  if ( a . y < b . y - b . h ) hy = b . y - b . h ; 
 
  if ( a . y > b . y + b . h ) hy = b . y + b . h ; 
 
  if ( inDistance2 ( a . x , a . y , hx , hy , a . r )  )  return true ;
  
  break ;  default :  return false ;
  break ;  }  break ;  default :  return false ;
  break ;  }  }  ; 



}; 
