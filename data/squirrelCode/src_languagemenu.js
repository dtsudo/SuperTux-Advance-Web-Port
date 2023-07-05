if (!window.superTuxAdvanceWebVersion) window.superTuxAdvanceWebVersion = {}; 
if (!window.superTuxAdvanceWebVersion.squirrelFiles) window.superTuxAdvanceWebVersion.squirrelFiles = {}; 

window.superTuxAdvanceWebVersion.squirrelFiles['src/languagemenu.nut'] = function () { 


meLanguage =  [  ]  ; 
languageList = null ; 
selectLanguage =  function (  ) { meLanguage =  [  ]  ; 
 if ( languageList == null ) languageList = jsonRead ( fileRead ( "lang/languages.json" )  )  ; 
 
  for (  var i = 0 ;
 i < languageList [ "languages" ]  . len (  )  ; i += 1 )  { 
 meLanguage . push (  { languageIndex : i , name :  (  function ( languageIndex ) {  return  function (  ) {  return languageList [ "languages" ]  [ languageIndex ]  [ 0 ]  ;
  }  ;
  }  )  ( i )  , func :  (  function ( languageIndex ) {  return  function (  ) { config . lang = languageList [ "languages" ]  [ languageIndex ]  [ 1 ]  ; 
cursor = languageIndex ; 
menu = meOptions ; 
gvLangObj = jsonRead ( fileRead ( "lang/en.json" )  )  ; 
gvLangObj = mergeTable ( gvLangObj , jsonRead ( fileRead ( "lang/" + config . lang + ".json" )  )  )  ; 
 if ( fileExists ( game . path + config . lang + ".json" )  ) gvLangObj = mergeTable ( gvLangObj , jsonRead ( fileRead ( game . path + config . lang + ".json" )  )  )  ; 
 
 sprTitle = newSprite ( "res/gfx/" + gvLangObj . logo . file , gvLangObj . logo . width , gvLangObj . logo . height , 0 , 0 , gvLangObj . logo . width / 2 , 0 )  ; 
 }  ;
  }  )  ( i )  }  )  ; 
 } 
 meLanguage . push (  { languageIndex : languageList [ "languages" ]  . len (  )  , name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "back" ]  ;
  }  , func :  function (  ) { cursor = 2 ; 
menu = meOptions ; 
 }  , back :  function (  ) { cursor = 2 ; 
menu = meOptions ; 
 }  }  )  ; 
menu = meLanguage ; 
 }  ; 



}; 
