if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


SecretWall =  function ( ) { var returnVal = { constructor: function(){} } ;  returnVal = Actor ( ) ; var baseMethods = { ... returnVal }; var baseConstructor = returnVal.constructor;  returnVal . found = false ; 
 returnVal . alpha = 1.0 ; 
 returnVal . dw = 0 ; 
 returnVal . dh = 0 ; 
 returnVal . shape = null ; 
 returnVal . rehide = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( _x , _y , _arr = null ) {  baseConstructor  ( _x , _y )  ; 
game . secrets ++  ; 
 if ( _arr == "1" ) rehide = true ; 
 
  } ;  returnVal . run = function (  ) {  if ( shape == null && dw != 0 && dh != 0 ) shape = Rec ( x +  ( dw * 8 )  , y +  ( dh * 8 )  ,  - 4 +  ( dw * 8 )  ,  - 4 +  ( dh * 8 )  , 5 )  ; 
 
  if ( shape != null && gvPlayer )  if ( hitTest ( shape , gvPlayer . shape )  )  { 
  if (  ! found )  { 
 found = true ; 
game . secrets --  ; 
 } 
  
  } 
  
  else  if ( rehide ) found = false ; 
 
  
  
  if ( found && alpha > 0 ) alpha -= 0.1 ; 
 
  if (  ! found && alpha < 1 ) alpha += 0.1 ; 
 
  if ( alpha <= 0 &&  ! rehide ) deleteActor ( id )  ; 
 
  } ;  returnVal . draw = function (  ) {  if ( config . light ) gvMap . drawTilesMod ( floor (  - camx )  , floor (  - camy )  , x / 16 , y / 16 , dw , dh , "secret" , alpha , gvLight )  ; 
 
  else gvMap . drawTiles ( floor (  - camx )  , floor (  - camy )  , x / 16 , y / 16 , dw , dh , "secret" , alpha )  ; 
 
  if ( debug )  { 
 drawText ( font , x + 2 - camx , y + 2 - camy , "X: " + x + "\nY: " + y + "\nW: " + dw + "\nH: " + dh + "\nA: " + alpha )  ; 
setDrawColor ( 0xffffffff )  ; 
 if ( shape != null ) shape . draw (  )  ; 
 
  } 
  
  } ;  returnVal . _typeof = function (  ) {  return "SecretWall" ;
  } ; 
 } 
 returnVal.constructor(...arguments); return returnVal ;  }  ; 



});