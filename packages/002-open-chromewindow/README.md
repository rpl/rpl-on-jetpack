# How can I open a new chrome window? #

## Run this experiment ##

<span class="aside">
Use your real xulrunner executable path.
</span>

To run this experiment, execute from an activated jetpack sdk virtualenv:

<pre>
<code>
  cfx -b /usr/lib/xulrunner-1.9.1.8/xulrunner run
</code>
</pre>

## Experiment Goals ##

Try minimal jetpack code to open a new chrome window on xulrunner application startup.

## Retrospectiva ##

This experiment need 'misc' package from ['atul-packages'](http://hg.mozilla.org/users/avarma_mozilla.com/atul-packages/).

<pre>
<code>
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
</code>
</pre>

the onStartLoad callback will be called on every page load:

<pre>
(xulrunner-bin:9419): GLib-WARNING **: g_set_prgname() called multiple times

(xulrunner-bin:9419): GLib-WARNING **: g_set_prgname() called multiple times
info: Hello World!
info: loaded
NPP_GetMIMEDescription()
NPP_GetValue(1)
NPP_GetValue(2)
info: loaded
OK
Total time: 3.496392 seconds
Program terminated successfully.
</pre>

## Useful links ##

 * [atul-packages](http://hg.mozilla.org/users/avarma_mozilla.com/atul-packages/)
