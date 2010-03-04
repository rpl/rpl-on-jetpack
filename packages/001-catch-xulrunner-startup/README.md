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

Try minimal jetpack code to catch xulrunner application startup.

## Retrospectiva ##

First prototype was a simple:

<pre>
<code>
exports.main = function(options, callbacks) {
    console.log("Hello World!");
    callbacks.quit("OK")
}
</code>
</pre>

but for some strange reason (e.g. on the fly profile directory creation)
this code run twice.

Btw, using <code>observer-service</code> module, the code run only once, 
as expected:

<pre>
<code>
var observer = require("observer-service");

exports.main = function(options, callbacks) {
    observer.add("final-ui-startup", function (s,d) {
        console.log("Hello World!");
        callbacks.quit("OK");
    });
}
</code>
</pre>

## Useful links ##

 * [MDC Observer Notifications](https://developer.mozilla.org/en/Observer_Notifications)
 * [Jetpack observer-service module](#module/jetpack-core/observer-service)