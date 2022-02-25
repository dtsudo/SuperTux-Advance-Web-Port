::meLanguage <- [

]
::languageList <- null
::selectLanguage <- function() {
	meLanguage = []
	if(languageList==null)
		languageList = jsonRead(fileRead("lang/languages.json"))
	for(local i = 0; i < languageList["languages"].len(); i+=1) {
		meLanguage.push(
			{
				languageIndex = i,
				name = (function (languageIndex) { return function() { return languageList["languages"][languageIndex][0] } })(i),
				func = (function (languageIndex) { return function() {
					config.lang = languageList["languages"][languageIndex][1]
					cursor = languageIndex
					menu = meOptions
					gvLangObj = jsonRead(fileRead("lang/en.json"))
					gvLangObj = mergeTable(gvLangObj, jsonRead(fileRead("lang/" + config.lang + ".json")))
				} })(i)
			}
		)
	}
	meLanguage.push(
		{
			languageIndex = languageList["languages"].len()
			name = function() { return gvLangObj["menu-commons"]["back"] }
			func = function() { cursor = 2; menu = meOptions }
			back = function() { cursor = 2; menu = meOptions }
		}
	)
	menu = meLanguage
}
