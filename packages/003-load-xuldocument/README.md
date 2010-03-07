# How can I load a xul document? #

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

Try minimal jetpack code to open a xul document inside a new chrome window on xulrunner application startup.

## Retrospectiva ##

This experiment need 'misc' package from ['atul-packages'](http://hg.mozilla.org/users/avarma_mozilla.com/atul-packages/).

As in the previous experiment ([002 - How to open a chrome window?](#package/002-open-chromewindow)) we use 'content-window'
module to open a chrome window.

In this example we open a xul document from our 'package data', using packaging.getURLForData to retrieve the url: 
<pre>
<code>
    [...]
    url: packaging.getURLForData("/main.xul"),
    [...]
</code>
</pre>

To reach a xul element inside the xul document we hato to use 'window.contentWindow.wrappedJSObject.document' object:
<pre>
<code>
    [...]
    window.contentWindow.wrappedJSObject.
	// NOTE: set the label4 value
	document.getElementById("label4").value ="OK"; 
    [...]
</code>
</pre>

## Useful links ##

 * [atul-packages](http://hg.mozilla.org/users/avarma_mozilla.com/atul-packages/)
