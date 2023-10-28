/* eslint-disable no-undef */
window.onload = function init() {
  document.getElementById('opacity-bar').addEventListener('input', (e) => {
    chrome.tabs.query({ active: true, currentWindow: true }, () => {
      const opacityValue = e.target.value;
      chrome.storage.local.set({ opacity: opacityValue });
    });
  });

  chrome.storage.local.get(['opacity'], (result) => {
    if (result.opacity) {
      document.getElementById('opacity-bar').value = result.opacity;
    }
  });

  const shortName = chrome.i18n.getMessage('shortName');
  // const note = chrome.i18n.getMessage('note');
  const version = chrome.i18n.getMessage('version');
  const opacity = chrome.i18n.getMessage('opacity');
  const purchase = chrome.i18n.getMessage('purchase');

  document.getElementById('appName').innerText = shortName;
  // document.getElementById('note').innerText = note;
  document.getElementById('version').innerText = version;
  document.getElementById('opacity').innerText = opacity;
  document.getElementById('purchase').innerText = purchase;

  document.getElementById('apikey').addEventListener('input', (e) => {
    chrome.storage.local.set({ apikey: e.target.value });
  });

  chrome.storage.local.get(['apikey'], (result) => {
    if (result.apikey) {
      document.getElementById('apikey').value = result.apikey;
    }
  });
  // let login = document.querySelector('#google-login')
  // login.addEventListener('click', function() {
  //   chrome.identity.getAuthToken({interactive: true}, function(token) {
  //     console.log('token',token)

  //     let init = {
  //       method: 'GET',
  //       async: true,
  //       headers: {
  //         Authorization: 'Bearer ' + token,
  //         'Content-Type': 'application/json'
  //       },
  //       'contentType': 'json'
  //     };
  //     fetch(
  //         'https://people.googleapis.com/v1/contactGroups/all?maxMembers=20&key=AIzaSyD8Hdd0-_g4LDv--3y7fZbJMWxiVUHItpo',
  //         init)
  //         .then((response) => response.json())
  //         .then(function(data) {
  //           console.log(data)
  //         });
  //   });
  // });
};
