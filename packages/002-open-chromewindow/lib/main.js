var observer = require("observer-service");
var contentWindow = require("content-window");
var window  = null;

exports.main = function(options, callbacks) {
    observer.add("final-ui-startup", function (s,d) {
	console.log("Hello World!");
	window = new contentWindow.Window({
	    url: "http://alcacoop.it",
	    width: 800,
	    height: 600,
	    onStartLoad: function() { console.log("loaded"); }
	});
    });
}
