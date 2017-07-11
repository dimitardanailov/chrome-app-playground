(function(window, document) {
	"use strict";

  console.log('hotkeys.js is loaded');

  chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
  });

	chrome.commands.getAll(function(callback) {
		console.log(callback);
	});

}(window, document));
