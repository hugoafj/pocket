Titanium.UI.setBackgroundColor('white');

var App = {
	API: {},
	UI: {}
};


Ti.include(
	"/cfg/cfg_constants.js",
	"/cfg/cfg_includes.js"
);

App.API.DB.init(function(){});
App.UI.app.init();