'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	// your code here
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}

/*
 * Initializes Google Analytics' Universal Analytics tracking code
 */
function initializeAnalytics(trackingID) {
	// Google Analytics asynchronously loads its script
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	// We need to disable the cookie check if it's on localhost
	var isLocalhost = (location.hostname == "localhost");
	var trackerParams = 'auto';
	if (isLocalhost) {
		trackerParams = {
  			'cookieDomain': 'none'
		};
	}

	ga('create', trackingID, trackerParams);
	ga('send', 'pageview');
}