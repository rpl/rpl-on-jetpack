var observer = require("observer-service");

exports.main = function(options, callbacks) {
    observer.add("final-ui-startup", function (s,d) {
	console.log("Hello World!");
	callbacks.quit("OK")
    });
}
