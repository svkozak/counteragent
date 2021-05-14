let color = '#3aa757';
let enabled = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color, enabled });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  
  if (changeInfo.status == 'complete' && tab.active) {
    chrome.tabs.sendMessage(tabId, {"message": "counteragent"});
  }

});