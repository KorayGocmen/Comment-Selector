// Called when the user clicks on the browser action.

chrome.browserAction.onClicked.addListener(function(tab) {
    if (tab.url.indexOf("facebook.com") > -1) {
			chrome.tabs.executeScript(null, {
				file: "jquery.js"
			});	
			chrome.tabs.executeScript(null, {
				file: "magic.js"
			});	
    } else {
			alert("Please go to facebook and try again");
    }
});
