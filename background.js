// Fired when an app is launched from the launcher.
chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('window.html', {
		'state': "fullscreen"
	});
});

