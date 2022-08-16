function queryTabs(blacklist) {
	browser.tabs.query({url: blacklist})
		.then((tabs) => {
			for (tab of tabs) {
				browser.tabs.remove(tab.id);
			}
		});
}


browser.tabs.onUpdated.addListener(
  () => { queryTabs([
	"*://*.youtube.com/*",
	"*://*.youtu.be/*",
  ]);
});
