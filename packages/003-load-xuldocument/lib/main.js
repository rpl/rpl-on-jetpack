var observer = require("observer-service");
var contentWindow = require("content-window");
var window  = null;

exports.main = function(options, callbacks) {
    observer.add("final-ui-startup", function (s,d) {
	console.log("Hello World!");
	window = new contentWindow.Window({
	    // NOTE: point to the xul document into the data directory of the current package
	    url: packaging.getURLForData("/main.xul"),
	    width: 800,
	    height: 600,
	    onStartLoad: function() { 
		try { 
		    // NOTE: get the chrome window
		    window.contentWindow.wrappedJSObject.
			// NOTE: set the label4 value
			document.getElementById("label4").value ="OK"; 
		} 
		catch(e) {} 
	    }
	});
    });
}

function inspect(object, logfn) {
    var res = "[Object]: ";
    for (var i in object) {
	res+=""+i+", ";
    }

    if(logfn)
	logfn.call(res);
    else
	console.log(res);
}
