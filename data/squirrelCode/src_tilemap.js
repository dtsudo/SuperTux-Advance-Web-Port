if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/tilemap.nut'] = function () { 


tileSearchDir =  [ "." ]  ; 
findFileName =  function ( path ) {  if (  squirrelTypeOf ( path )  != "string" )  return "" ;
  
  if ( path . len (  )  == 0 )  return "" ;
  
  for (  var i = path . len (  )  - 1 ;
 i >= 0 ; i --  )  { 
  if ( chint ( path [ i ]  )  == "/" || chint ( path [ i ]  )  == "\\" )  return path . slice ( i + 1 )  ;
  
  } 
  return path ;
  }  ; 
AnimTile =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal . frameID = null ; 
 returnVal . frameList = null ; 
 returnVal . frameTime = null ; 
 returnVal . sprite = null ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( animList , _sprite ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  frameID = animList . id ; 
frameList =  [  ]  ; 
frameTime =  [  ]  ; 
 if (  ( (animList[ ( "animation" ) ] !== undefined) )  )  { 
  for (  var i = 0 ;
 i < animList . animation . len (  )  ; i ++  )  { 
 frameList . push ( animList . animation [ i ]  . tileid )  ; 
 if ( i == 0 ) frameTime . push ( animList . animation [ i ]  . duration )  ; 
 
  else frameTime . push ( animList . animation [ i ]  . duration + frameTime [ i - 1 ]  )  ; 
 
  } 
  } 
  
 sprite = _sprite ; 
 } ;  returnVal . draw = function ( x , y , alpha , color = 0xffffffff ) {  var currentTime = wrap ( getTicks (  )  , 0 , frameTime . top (  )  )  ;
  for (  var i = 0 ;
 i < frameList . len (  )  ; i ++  )  { 
  if ( currentTime >= frameTime [ i ]  )  { 
  if ( i < frameTime . len (  )  - 1 )  { 
  if ( currentTime < frameTime [ i + 1 ]  )  { 
 drawSpriteExMod ( sprite , frameList [ i ]  , floor ( x )  , floor ( y )  , 0 , 0 , 1 , 1 , alpha , color )  ; 
 return ; 
  } 
  
  } 
  
  else  if ( currentTime <= frameTime [ i ]  && i == 0 )  { 
 drawSpriteExMod ( sprite , frameList [ i ]  , floor ( x )  , floor ( y )  , 0 , 0 , 1 , 1 , alpha , color )  ; 
 return ; 
  } 
  
  
  } 
  
  } 
 drawSpriteExMod ( sprite , frameList . top (  )  , floor ( x )  , floor ( y )  , 0 , 0 , 1 , 1 , alpha , color )  ; 
 } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . frameID = null ; 
 squirrelClassFunction . frameList = null ; 
 squirrelClassFunction . frameTime = null ; 
 squirrelClassFunction . sprite = null ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  return squirrelClassFunction; })()) ; 
Tilemap =  ((function(){ let squirrelClassFunction; squirrelClassFunction = function ( ) { var returnVal = { constructor: function(){} } ;  returnVal . data = null ; 
 returnVal . tileset = null ; 
 returnVal . image = null ; 
 returnVal . tilef = null ; 
 returnVal . tilew = 0 ; 
 returnVal . tileh = 0 ; 
 returnVal . mapw = 0 ; 
 returnVal . maph = 0 ; 
 returnVal . geo = null ; 
 returnVal . w = 0 ; 
 returnVal . h = 0 ; 
 returnVal . name = "" ; 
 returnVal . file = "" ; 
 returnVal . author = "" ; 
 returnVal . solidfid = 0 ; 
 returnVal . shape = null ; 
 returnVal . anim = null ; 
 returnVal . solidLayer = null ; 
 returnVal . plat = null ; 
 returnVal . infinite = false ; 
 
 with ( returnVal ) { 
  returnVal . constructor = function ( filename ) { if (arguments.length > 0 && arguments[0] === 'DO_NOT_CALL_CONSTRUCTOR') return;

  tileset =  [  ]  ; 
image =  {  }  ; 
tilef =  [  ]  ; 
geo =  [  ]  ; 
data =  {  }  ; 
anim =  {  }  ; 
 if ( fileExists ( filename )  )  { 
 data = jsonRead ( fileRead ( filename )  )  ; 
mapw = data . width ; 
maph = data . height ; 
tilew = data . tilewidth ; 
tileh = data . tileheight ; 
w = mapw * tilew ; 
h = maph * tileh ; 
file = filename ; 
name = findFileName ( filename )  ; 
name = name . slice ( 0 ,  - 5 )  ; 
print ( "\nLoading map: " + name )  ; 
 for (  var i = 0 ;
 i < data . tilesets . len (  )  ; i ++  )  { 
  if (  ( (data . tilesets [ i ] [ ( "source" ) ] !== undefined) )  )  for (  var j = 0 ;
 j < tileSearchDir . len (  )  ; j ++  )  { 
  var sourcefile = findFileName ( data . tilesets [ i ]  . source )  ;
  if ( fileExists ( tileSearchDir [ j ]  + "/" + sourcefile )  )  { 
 print ( "Found external tileset: " + sourcefile )  ; 
 var newgid = data . tilesets [ i ]  . firstgid ;
 data . tilesets [ i ] = jsonRead ( fileRead ( tileSearchDir [ j ]  + "/" + sourcefile )  )  ; 
data . tilesets [ i ]  . firstgid = newgid ; 
 break ;  } 
  
  else print ( "Unable to find external tile: " + sourcefile + " in " + tileSearchDir [ j ]  )  ; 
 
  } 
  
  if (  !  (  ( (data . tilesets [ i ] [ ( "image" ) ] !== undefined) )  )  ) print ( jsonWrite ( data . tilesets [ i ]  )  )  ; 
 
  var filename = data . tilesets [ i ]  . image ;
  var shortname = findFileName ( filename )  ;
 print ( "Searching for tileset: " + shortname )  ; 
 var tempspr = findSprite ( shortname )  ;
  if ( tempspr != 0 )  { 
 tileset . push ( tempspr )  ; 
print ( "Found " + shortname )  ; 
 } 
  
  else  { 
  if ( fileExists ( filename )  )  { 
 tileset . push ( newSprite ( filename , data . tilesets [ i ]  . tilewidth , data . tilesets [ i ]  . tileheight , data . tilesets [ i ]  . margin , data . tilesets [ i ]  . spacing , 0 , data . tilesets [ i ]  . tileheight - data . tileheight )  )  ; 
print ( "Added tileset " + shortname + "." )  ; 
 } 
  
  else  for (  var j = 0 ;
 j < tileSearchDir . len (  )  ; j ++  )  { 
  if ( fileExists ( tileSearchDir [ j ]  + "/" + shortname )  )  { 
 print ( "Adding " + shortname + " from search path: " + tileSearchDir [ j ]  )  ; 
tileset . push ( newSprite ( tileSearchDir [ j ]  + "/" + shortname , data . tilesets [ i ]  . tilewidth , data . tilesets [ i ]  . tileheight , data . tilesets [ i ]  . margin , data . tilesets [ i ]  . spacing , 0 , data . tilesets [ i ]  . tileheight - data . tileheight )  )  ; 
 break ;  } 
  
  } 
  
  } 
  
 tilef . push ( data . tilesets [ i ]  . firstgid )  ; 
 if ( data . tilesets [ i ]  . name == "solid" ) solidfid = data . tilesets [ i ]  . firstgid ; 
 
  if ( data . tilesets [ i ]  . rawin ( "tiles" )  )  for (  var j = 0 ;
 j < data . tilesets [ i ]  . tiles . len (  )  ; j ++  )  { 
  if (  ( (data . tilesets [ i ]  . tiles [ j ] [ ( "animation" ) ] !== undefined) )  ) anim [ data . tilesets [ i ]  . firstgid + data . tilesets [ i ]  . tiles [ j ]  . id ] = AnimTile ( data . tilesets [ i ]  . tiles [ j ]  , tileset . top (  )  )  ; 
 
  } 
  
  } 
 shape =  ( Rec ( 0 , 0 , 8 , 8 , 0 )  )  ; 
 for (  var i = 0 ;
 i < data . layers . len (  )  ; i ++  )  { 
  if ( data . layers [ i ]  . type == "tilelayer" && data . layers [ i ]  . name == "solid" )  { 
 solidLayer = data . layers [ i ]  ; 
 break ;  } 
  
  } 
  for (  var i = 0 ;
 i < data . layers . len (  )  ; i ++  )  { 
  if ( data . layers [ i ]  . type == "imagelayer" )  { 
  var imageSource = findTexture ( findFileName ( data . layers [ i ]  . image )  )  ;
  if ( imageSource <= 0 )  { 
  for (  var j = 0 ;
 j < tileSearchDir . len (  )  ; j ++  )  { 
  var sourcefile = findFileName ( data . layers [ i ]  . image )  ;
  if ( fileExists ( tileSearchDir [ j ]  + "/" + sourcefile )  )  { 
 print ( "Found external image: " + sourcefile )  ; 
imageSource = loadImage ( tileSearchDir [ j ]  + "/" + sourcefile )  ; 
 break ;  } 
  
  else print ( "Unable to find external image: " + sourcefile + " in " + tileSearchDir [ j ]  )  ; 
 
  } 
  } 
  
 image [ data . layers [ i ]  . name ] = imageSource ; 
 } 
  
  } 
  } 
  
  else print ( "Map file " + filename + " does not exist!" )  ; 
 
  } ;  returnVal . drawTiles = function ( x , y , mx , my , mw , mh , l , a = 1 , sx = 1 , sy = 1 ) {  var t =  - 1 ;
  var dataLayers = data . layers ;
  var dataLayersLen = dataLayers . len (  )  ;
  for (  var i = 0 ;
 i < dataLayersLen ; i ++  )  { 
  if ( dataLayers [ i ]  . type == "tilelayer" && dataLayers [ i ]  . name == l )  { 
 t = i ; 
 break ;  } 
  
  } 
  if ( t ==  - 1 )  { 
  return ; 
  } 
  
  var dataLayersT = dataLayers [ t ]  ;
  var dataLayersTWidth = dataLayersT . width ;
  var dataLayersTHeight = dataLayersT . height ;
  if ( dataLayersTWidth < mx + mw ) mw = dataLayersTWidth - mx ; 
 
  if ( dataLayersTHeight < my + mh ) mh = dataLayersTHeight - my ; 
 
  if ( mx < 0 ) mx = 0 ; 
 
  if ( my < 0 ) my = 0 ; 
 
  if ( mx > dataLayersTWidth ) mx = dataLayersTWidth ; 
 
  if ( my > dataLayersTHeight ) my = dataLayersTHeight ; 
 
  var myPlusMh = my + mh ;
  var mxPlusMw = mx + mw ;
  var dataLayersTData = dataLayersT . data ;
  var dataLayersTDataLen = dataLayersTData . len (  )  ;
  var dataTilesetsLen = data . tilesets . len (  )  ;
  var dataLayersTOpacityTimesA = dataLayersT . opacity * a ;
  for (  var i = my ;
 i < myPlusMh ; i ++  )  { 
  var iTimesDataLayersTWidth = i * dataLayersTWidth ;
  var yPlusRoundITimesDataTileheightTimesSy = y + round ( i * data . tileheight * sy )  ;
  for (  var j = mx ;
 j < mxPlusMw ; j ++  )  { 
  if ( iTimesDataLayersTWidth + j >= dataLayersTDataLen )  return ; 
  
  var n = dataLayersTData [ iTimesDataLayersTWidth + j ]  ;
  if ( n != 0 )  { 
  var xPlusRoundJTimesDataTilewidthTimesSx = x + round ( j * data . tilewidth * sx )  ;
  for (  var k = dataTilesetsLen - 1 ;
 k >= 0 ; k --  )  { 
  if ( n >= data . tilesets [ k ]  . firstgid )  { 
  if ( anim . rawin ( n )  )  { 
  if ( tileset [ k ]  == anim [ n ]  . sprite ) anim [ n ]  . draw ( xPlusRoundJTimesDataTilewidthTimesSx , yPlusRoundITimesDataTileheightTimesSy , dataLayersTOpacityTimesA )  ; 
 
  else drawSpriteEx ( tileset [ k ]  , n - data . tilesets [ k ]  . firstgid , xPlusRoundJTimesDataTilewidthTimesSx , yPlusRoundITimesDataTileheightTimesSy , 0 , 0 , sx , sy , dataLayersTOpacityTimesA )  ; 
 
  } 
  
  else drawSpriteEx ( tileset [ k ]  , n - data . tilesets [ k ]  . firstgid , xPlusRoundJTimesDataTilewidthTimesSx , yPlusRoundITimesDataTileheightTimesSy , 0 , 0 , sx , sy , dataLayersTOpacityTimesA )  ; 
 
 k =  - 1 ; 
 break ;  } 
  
  } 
  } 
  
  } 
  } 
  } ;  returnVal . drawTilesMod = function ( x , y , mx , my , mw , mh , l , a = 1 , sx = 1 , sy = 1 , c = 0xffffffff ) {  var t =  - 1 ;
  for (  var i = 0 ;
 i < data . layers . len (  )  ; i ++  )  { 
  if ( data . layers [ i ]  . type == "tilelayer" && data . layers [ i ]  . name == l )  { 
 t = i ; 
 break ;  } 
  
  } 
  if ( t ==  - 1 )  { 
  return ; 
  } 
  
  if ( data . layers [ t ]  . width < mx + mw ) mw = data . layers [ t ]  . width - mx ; 
 
  if ( data . layers [ t ]  . height < my + mh ) mh = data . layers [ t ]  . height - my ; 
 
  if ( mx < 0 ) mx = 0 ; 
 
  if ( my < 0 ) my = 0 ; 
 
  if ( mx > data . layers [ t ]  . width ) mx = data . layers [ t ]  . width ; 
 
  if ( my > data . layers [ t ]  . height ) my = data . layers [ t ]  . height ; 
 
  for (  var i = my ;
 i < my + mh ; i ++  )  { 
  for (  var j = mx ;
 j < mx + mw ; j ++  )  { 
  if ( i * data . layers [ t ]  . width + j >= data . layers [ t ]  . data . len (  )  )  return ; 
  
  var n = data . layers [ t ]  . data [  ( i * data . layers [ t ]  . width )  + j ]  ;
  if ( n != 0 )  { 
  for (  var k = data . tilesets . len (  )  - 1 ;
 k >= 0 ; k --  )  { 
  if ( n >= data . tilesets [ k ]  . firstgid )  { 
  if ( anim . rawin ( n )  )  { 
  if ( tileset [ k ]  == anim [ n ]  . sprite ) anim [ n ]  . draw ( x + floor ( j * data . tilewidth * sx )  , y + floor ( i * data . tileheight * sy )  , data . layers [ t ]  . opacity * a , c )  ; 
 
  else drawSpriteExMod ( tileset [ k ]  , n - data . tilesets [ k ]  . firstgid , x + floor ( j * data . tilewidth * sx )  , y + floor ( i * data . tileheight * sy )  , 0 , 0 , sx , sy , data . layers [ t ]  . opacity * a , c )  ; 
 
  } 
  
  else drawSpriteExMod ( tileset [ k ]  , n - data . tilesets [ k ]  . firstgid , x + floor ( j * data . tilewidth * sx )  , y + floor ( i * data . tileheight * sy )  , 0 , 0 , sx , sy , data . layers [ t ]  . opacity * a , c )  ; 
 
 k =  - 1 ; 
 break ;  } 
  
  } 
  } 
  
  } 
  } 
  } ;  returnVal . drawImageLayer = function ( l , x , y ) {  if (  ( (image[ ( l ) ] !== undefined) )  ) drawImage ( image [ l ]  , x , y )  ; 
 
  } ;  returnVal . del = function (  ) {  return ; 
  for (  var i = 0 ;
 i < tileset . len (  )  ; i ++  )  { 
 deleteSprite ( tileset [ i ]  )  ; 
 } 
  } ;  returnVal . _typeof = function (  ) {  return "Tilemap" ;
  } ; 
 } 
 returnVal.constructor(...arguments); returnVal.SQUIRREL_CLASS = squirrelClassFunction; return returnVal ;  };  squirrelClassFunction . data = null ; 
 squirrelClassFunction . tileset = null ; 
 squirrelClassFunction . image = null ; 
 squirrelClassFunction . tilef = null ; 
 squirrelClassFunction . tilew = 0 ; 
 squirrelClassFunction . tileh = 0 ; 
 squirrelClassFunction . mapw = 0 ; 
 squirrelClassFunction . maph = 0 ; 
 squirrelClassFunction . geo = null ; 
 squirrelClassFunction . w = 0 ; 
 squirrelClassFunction . h = 0 ; 
 squirrelClassFunction . name = "" ; 
 squirrelClassFunction . file = "" ; 
 squirrelClassFunction . author = "" ; 
 squirrelClassFunction . solidfid = 0 ; 
 squirrelClassFunction . shape = null ; 
 squirrelClassFunction . anim = null ; 
 squirrelClassFunction . solidLayer = null ; 
 squirrelClassFunction . plat = null ; 
 squirrelClassFunction . infinite = false ; 
 squirrelClassFunction.IS_CLASS_DECLARATION = true;  return squirrelClassFunction; })()) ; 
mapNewSolid =  function ( shape ) { gvMap . geo . push ( shape )  ; 
 return gvMap . geo . len (  )  - 1 ;
  }  ; 
mapDeleteSolid =  function ( index ) {  if (  ( (gvMap . geo[ ( index ) ] !== undefined) )  && index >= 0 && index < gvMap . geo . len (  )  && gvMap . geo . len (  )  > 0 )  { 
 gvMap . geo [ index ] = null ; 
 } 
  
  }  ; 
tileSetSolid =  function ( tx , ty , st ) {  if ( st < 0 )  return ; 
  
  var cx = floor ( tx / 16 )  ;
  var cy = floor ( ty / 16 )  ;
  var tile = cx +  ( cy * gvMap . solidLayer . width )  ;
  if ( st == 0 )  { 
  if ( tile >= 0 && tile < gvMap . solidLayer . data . len (  )  ) gvMap . solidLayer . data [ tile ] = 0 ; 
 
  } 
  
  else  if ( tile >= 0 && tile < gvMap . solidLayer . data . len (  )  ) gvMap . solidLayer . data [ tile ] = gvMap . solidfid +  ( st - 1 )  ; 
 
  
  }  ; 
tileGetSolid =  function ( tx , ty ) {  var tile = floor ( tx / 16 )  +  ( floor ( ty / 16 )  * gvMap . solidLayer . width )  ;
  if ( tile >= 0 && tile < gvMap . solidLayer . data . len (  )  )  { 
  if ( gvMap . solidLayer . data [ tile ]  == 0 )  return 0 ;
  
  else  return  ( gvMap . solidLayer . data [ tile ]  - gvMap . solidfid + 1 )  ;
  
  } 
  
  }  ; 
loadTileMapWorld =  function ( filename ) {  if (  ! fileExists ( filename )  )  return  {  }  ;
  
  var file = jsonRead ( fileRead ( filename )  )  ;
  var nw =  {  }  ;
  if (  ( (file[ (  ! "maps" ) ] !== undefined) )  )  return  {  }  ;
  
  for (  var i = 0 ;
 i < file . maps . len (  )  ; i ++  )  { 
  var name = findFileName ( file . maps [ i ]  [ "fileName" ]  )  ;
 nw [ name ] =  [ file . maps [ i ]  [ "x" ]  , file . maps [ i ]  [ "y" ]  ]  ; 
 } 
  }  ; 



}; 
