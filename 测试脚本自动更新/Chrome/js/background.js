// pengw@2021/03/16

function reloadAllTabs() {

	chrome.tabs.query({}, function(tabs) {
		console.log('query Tabs: ', tabs.length);
		var effectTabCount = 0;
		for(var i=0; i< tabs.length; i++) {
			console.log(tabs[i].url);
			if((tabs[i].url.indexOf("chrome-devtools://") === -1) &&
				(tabs[i].url.indexOf("chrome-extension://") === -1) &&
				(tabs[i].url.indexOf("chrome://") === -1)) {
				console.log('Reload TabId: ', tabs[i].id, tabs[i].url);
				chrome.tabs.reload(tabs[i].id);
				effectTabCount +=1;
			}
		}

		console.log('Tobal Reloaded Tabs: ', effectTabCount);
    } );

}

reloadAllTabs();