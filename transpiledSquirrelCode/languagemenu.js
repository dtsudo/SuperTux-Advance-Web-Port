if (!window.jsFiles) 
 	 window.jsFiles = []; 

window.jsFiles.push(function () {


meLanguage =  [  ]  ; 
languageList = null ; 
selectLanguageHelper =  function ( i ) {  return  { languageIndex : i , name :  function (  ) {  return languageList [ "languages" ]  [ i ]  [ 0 ]  ;
  }  , func :  function (  ) { config . lang = languageList [ "languages" ]  [ i ]  [ 1 ]  ; 
cursor = i ; 
menu = meOptions ; 
gvLangObj = jsonRead ( fileRead ( "lang/en.json" )  )  ; 
gvLangObj = mergeTable ( gvLangObj , jsonRead ( fileRead ( "lang/" + config . lang + ".json" )  )  )  ; 
 }  }  ;
  }  ; 
selectLanguage =  function (  ) { meLanguage =  [  ]  ; 
 if ( languageList == null ) languageList = jsonRead ( fileRead ( "lang/languages.json" )  )  ; 
 
  for (  var i = 0 ;
 i < languageList [ "languages" ]  . len (  )  ; i += 1 )  { 
 meLanguage . push ( selectLanguageHelper ( i )  )  ; 
 } 
 meLanguage . push (  { languageIndex : languageList [ "languages" ]  . len (  )  , name :  function (  ) {  return gvLangObj [ "menu-commons" ]  [ "back" ]  ;
  }  , func :  function (  ) { cursor = 2 ; 
menu = meOptions ; 
 }  , back :  function (  ) { cursor = 2 ; 
menu = meOptions ; 
 }  }  )  ; 
menu = meLanguage ; 
 }  ; 



});