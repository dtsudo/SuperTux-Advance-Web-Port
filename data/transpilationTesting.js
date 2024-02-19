if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 

window.superTuxAdvanceWebVersion.transpilationTesting = {}; 

window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed = 0; 

window.superTuxAdvanceWebVersion.transpilationTesting.allTestsPassed = false; 

((function () { 
let actualValue; 
 var x = 3 ;
 actualValue = x ; 
 
if (actualValue === 3) 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var a = 4 ;
 actualValue = a ; 
 
if (actualValue === 4) 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var a = 100 ;
 a += 20 ; 
 var b = 100 ;
 b -= 20 ; 
 var c = 100 ;
 c *= 10 ; 
 var d = 100 ;
 d /= 4 ; 
 var e = 100 ;
 e %= 30 ; 
 var s = " " ;
 actualValue = a + s + b + s + c + s + d + s + e ; 
 
if (actualValue === '120 80 1000 25 10') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var x = 2 < 3 ;
  var y = 0 ;
  var z = 0 ;
  if ( x ) y = 5 ; 
 
  else z = 10 ; 
 
 actualValue = y + z ; 
 
if (actualValue === 5) 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var myArray =  [  { draw : 0 , v : 10 }  ,  { v : 100 }  ,  { draw : 1 , v : 1000 }  ]  ;
 actualValue = 0 ; 
 {     var foreachOutput1 = squirrelForEach( myArray );     while(true)     {        foreachOutput1.next();        if (foreachOutput1.isDone()) break; x = foreachOutput1.getValue();  if (  ( (x[ ( "draw" ) ] !== undefined) )  && x . v > 0 ) actualValue += x . v ; 
 
     }  }  
if (actualValue === 1010) 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
TranspilationTest_TypeOfTest_Class =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal . prop = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( a ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  prop = a ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . prop = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  return squirrelClassFunction; })()) ; 
 var myObj = TranspilationTest_TypeOfTest_Class ( 5 )  ;
  var myFunc =  function ( x , y , z ) {  return x + y + z ;
  }  ;
 actualValue =  (  squirrelTypeOf ( TranspilationTest_TypeOfTest_Class )  )  + " " +  (  squirrelTypeOf ( myFunc )  )  ; 
 
if (actualValue === 'class function') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var x =  { a : 3 , myFunc :  function ( i , j ) {  return i + j ;
  }  , myFunc2 :  function (  ) {  return  [  ]  ;
  }  }  ;
  var y =  function (  ) {  return x ;
  }  ;
  var z =  [ x ]  ;
  var a1 =  squirrelTypeOf ( x )  ;
  var a2 =  squirrelTypeOf ( x )  == "table" ;
  var a3 =  squirrelTypeOf ( x . a )  ;
  var a4 =  squirrelTypeOf ( x . a )  == "integer" ;
  var a5 =  squirrelTypeOf ( y ( ) )  ;
  var a6 =  squirrelTypeOf ( y ( ) )  == "table" ;
  var a7 =  squirrelTypeOf ( y ( ) [ "myFunc" ] )  ;
  var a8 =  squirrelTypeOf ( y ( ) [ "myFunc" ] )  == "function" ;
  var a9 =  squirrelTypeOf ( x [ "a" ] )  ;
  var a10 =  squirrelTypeOf ( x [ "a" ] )  == "integer" ;
  var a11 =  squirrelTypeOf ( z [ 0 ] . myFunc2 ( ) )  ;
  var a12 =  squirrelTypeOf ( z [ 0 ] . myFunc2 ( ) )  == "array" ;
 actualValue =  ( a1 + " " + a2 + " " + a3 + " " + a4 + " " + a5 + " " + a6 + " " + a7 + " " + a8 + " " + a9 + " " + a10 + " " + a11 + " " + a12 )  ; 
 
if (actualValue === 'table true integer true table true function true integer true array true') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var myArray1 =  [ 10 , 20 , 30 ]  ;
  var myArray2 =  [  ]  ;
  var myString = "hello world" ;
  var myObj =  { find :  function ( x , y ) {  return x + y ;
  }  }  ;
  var a = myArray1 . squirrelFind ( 3 )  ;
  var b = myArray1 . squirrelFind ( 10 )  ;
  var c = myArray1 . squirrelFind ( 20 )  ;
  var d = myArray2 . squirrelFind ( 100 )  ;
  var e = myString . squirrelFind ( "nonexistent" )  ;
  var f = myString . squirrelFind ( "ello" )  ;
  var g = myObj . squirrelFind ( 100 , 1000 )  ;
 actualValue = a + " " + b + " " + c + " " + d + " " + e + " " + f + " " + g ; 
 
if (actualValue === 'null 0 1 null null 1 1100') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var a = "30" ;
  var b = "hello" ;
  var c = "0" ;
  var d = format ( "A B C %s D %s E %s F" , a , b , c )  ;
 actualValue = d ; 
 
if (actualValue === 'A B C 30 D hello E 0 F') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var b1 = true ;
  var b2 = true ;
  var b3 = false ;
  var actual1 = 0 ;
  var actual2 = 0 ;
  var actual3 = 0 ;
  if ( b1 &&  ( b2 &&  ! b3 )  ) actual1 = 1 ; 
 
  if ( b1 &&  ( b2 && b3 )  ) actual2 = 1 ; 
 
  if (  !  ! b1 &&  ( b2 &&  ! b3 )  ) actual3 = 1 ; 
 
 actualValue = actual1 + " " + actual2 + " " + actual3 ; 
 
if (actualValue === '1 0 1') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var x =  { a : 3 , b : 4 , c : 5 }  ;
  var key = "a" ;
  var actual1 = (x[key] !== undefined) ;
 key = "b" ; 
 var actual2 = (x[key] !== undefined) ;
  delete x . b ; 
key = "a" ; 
 var actual3 = (x[key] !== undefined) ;
 key = "b" ; 
 var actual4 = (x[key] !== undefined) ;
  var x2 =  { x3 :  { a : 3 , b : 4 , c : 5 }  }  ;
 key = "a" ; 
 var actual5 = (x2 . x3[key] !== undefined) ;
 key = "b" ; 
 var actual6 = (x2 . x3[key] !== undefined) ;
  delete x2 . x3 . b ; 
key = "a" ; 
 var actual7 = (x2 . x3[key] !== undefined) ;
 key = "b" ; 
 var actual8 = (x2 . x3[key] !== undefined) ;
 actualValue = actual1 + " " + actual2 + " " + actual3 + " " + actual4 + " " + actual5 + " " + actual6 + " " + actual7 + " " + actual8 ; 
 
if (actualValue === 'true true true false true true true false') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var a = 3 ;
  var b = "xyz" ;
  var c = "i \" j \" k" ;
  var d = "\\" ;
 actualValue = a + b + c + d ; 
 
if (actualValue === '3xyzi " j " k\\') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var formatInfo =  function ( info ) {  if (  squirrelTypeOf ( info )  == "string" )  return info ;
  
  var newcall =  [ 0 ]  ;
  for (  var i = 0 ;
 i < info . len (  )  ; i ++  )  { 
  if ( i == 0 ) newcall . push ( info [ i ]  )  ; 
 
  else newcall . push ( eval ( info [ i ]  )  )  ; 
 
  } 
  return format . acall ( newcall )  ;
  }  ;
  var str1 = formatInfo ( "hello world" )  ;
  var str2 = formatInfo (  [ "AA %s BB %s CC" , "(3 + 5).tostring()" , "[0,0,0,0].len().tostring()" ]  )  ;
 actualValue = str1 + " | " + str2 ; 
 
if (actualValue === 'hello world | AA 8 BB 4 CC') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var minutes = 1 ;
  var seconds_p1 = 3 ;
  var seconds_p2 = 0 ;
  var actual1 = format ( "%02d:%02d.%03d" , minutes , seconds_p1 , seconds_p2 )  ;
 minutes = 12 ; 
seconds_p1 = 40 ; 
seconds_p2 = 50 ; 
 var actual2 = format ( "%02d:%02d.%03d" , minutes , seconds_p1 , seconds_p2 )  ;
 actualValue = actual1 + " " + actual2 ; 
 
if (actualValue === '01:03.000 12:40.050') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var classA =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  
 with ( returnVal ) { 
  returnVal . constructor = function ( x ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  return squirrelClassFunction; })()) ;
  var classB =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = classA ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( x ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( x )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = classA;  return squirrelClassFunction; })()) ;
  var classC =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = classB ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( x ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( x )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = classB;  return squirrelClassFunction; })()) ;
  var classD =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  
 with ( returnVal ) { 
  returnVal . constructor = function ( x ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  return squirrelClassFunction; })()) ;
  var a = classA ( 5 )  ;
  var b = classB ( 6 )  ;
  var c = classC ( 7 )  ;
  var d = classD ( 8 )  ;
  var x1 =  squirrelInstanceOf( a , classA)  ;
  var x2 =  squirrelInstanceOf( a , classB)  ;
  var x3 =  squirrelInstanceOf( a , classC)  ;
  var x4 =  squirrelInstanceOf( a , classD)  ;
  var x5 =  squirrelInstanceOf( b , classA)  ;
  var x6 =  squirrelInstanceOf( b , classB)  ;
  var x7 =  squirrelInstanceOf( b , classC)  ;
  var x8 =  squirrelInstanceOf( b , classD)  ;
  var x9 =  squirrelInstanceOf( c , classA)  ;
  var x10 =  squirrelInstanceOf( c , classB)  ;
  var x11 =  squirrelInstanceOf( c , classC)  ;
  var x12 =  squirrelInstanceOf( c , classD)  ;
  var x13 =  squirrelInstanceOf( d , classA)  ;
  var x14 =  squirrelInstanceOf( d , classB)  ;
  var x15 =  squirrelInstanceOf( d , classC)  ;
  var x16 =  squirrelInstanceOf( d , classD)  ;
 actualValue = "" + x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 + x9 + x10 + x11 + x12 + x13 + x14 + x15 + x16 ; 
 
if (actualValue === 'truefalsefalsefalsetruetruefalsefalsetruetruetruefalsefalsefalsefalsetrue') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var minutes = 1 ;
  var seconds_p1 = 32 ;
  var seconds_p2 = 550.33333333 ;
 actualValue = format ( "%02d:%02d.%03d" , minutes , seconds_p1 , seconds_p2 )  ; 
 
if (actualValue === '01:32.550') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var classA =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal . aa = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( x ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  aa = x ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . aa = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  return squirrelClassFunction; })()) ;
  var classB =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = classA ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( x ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( x )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = classA;  return squirrelClassFunction; })()) ;
  var classC =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal . aa = 0 ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( x ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  aa = x ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . aa = 0 ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  return squirrelClassFunction; })()) ;
  var classD =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = classC ( 'DO_NOT_CALL_CONSTRUCTOR' ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  for (var baseProperty in returnVal) { 
     if (returnVal.hasOwnProperty(baseProperty) && (typeof returnVal[baseProperty]) !== 'function' && squirrelClassFunction[baseProperty] === undefined) 
         squirrelClassFunction[baseProperty] = returnVal[baseProperty]; 
 } 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( x ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

   (baseConstructor.bind(this))  ( x )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction.IS_CLASS_DECLARATION = true;  squirrelClassFunction.SQUIRREL_SUPER_CLASS = classC;  return squirrelClassFunction; })()) ;
  var x1 = classA ( 5 )  ;
  var x2 = classB ( 6 )  ;
  var x3 = classC ( 7 )  ;
  var x4 = classD ( 8 )  ;
  var space = " " ;
 actualValue = x1 . aa + space + x2 . aa + space + x3 . aa + space + x4 . aa ; 
 
if (actualValue === '5 6 7 8') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var x1 =  { a : 3 , b :  { c : 5 }  }  ;
  var x2 =  window.clone(  ( x1 ) )  ;
  var x3 =  window.clone( x1)  ;
 x1 . a = 30 ; 
x1 . b . c = 50 ; 
 var space = " " ;
 actualValue = x1 . a + space + x1 . b . c + space + x2 . a + space + x2 . b . c + space + x3 . a + space + x3 . b . c ; 
 
if (actualValue === '30 50 3 50 3 50') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

((function () { 
let actualValue; 
 var myArray =  [ 3 , 4 ]  ;
 myArray . push ( 8 )  ; 
 var a = myArray [ 0 ]  + myArray [ 1 ]  + myArray [ 2 ]  ;
  var b = myArray . len (  )  ;
 myArray . clear (  )  ; 
 var c = myArray . len (  )  ;
 myArray . push ( 12 )  ; 
 var d = myArray [ 0 ]  ;
  var e = myArray . len (  )  ;
  var s = " " ;
 actualValue = a + s + b + s + c + s + d + s + e ; 
 
if (actualValue === '15 3 0 12 1') 
    window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed++; 
else 
    throw new Error('Failed transpilation test: ' + actualValue); 
})()); 

if (window.superTuxAdvanceWebVersion.transpilationTesting.testsPassed === 19) 
    window.superTuxAdvanceWebVersion.transpilationTesting.allTestsPassed = true; 

