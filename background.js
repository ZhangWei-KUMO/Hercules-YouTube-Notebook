/* eslint-disable no-undef */

const onInstallURL = 'https://www.youtube.com/watch?v=_-wjA4XlBl4';
const onInstallURL2 = 'https://www.youtube.com/watch?v=KE7qU0-ZDIQ';
// Here input your openai api key
// const key = '';

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    // chrome.storage.local.set({ apikey: key });
    if (navigator.language === 'en'
    || navigator.language === 'en-US'
    || navigator.language === 'en-UK'
    || navigator.language === 'en-CA'
    || navigator.language === 'en-AU'
    ) {
      chrome.tabs.create({ url: onInstallURL2 });
    } else {
      chrome.tabs.create({ url: onInstallURL });
    }
  }
});
