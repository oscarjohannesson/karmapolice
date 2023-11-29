document.addEventListener('DOMContentLoaded', function () {
  var loadCookieButton = document.getElementById('loadButton');

  loadCookieButton.addEventListener('click', function () {
    const karmaLocalStorageKeys = ["savedFilters", "alertGroupConfig", "fetchConfig", "multiGridConfig", "filterBarConfig", "themeConfig", "alertGridConfig", "silenceFormConfig", "filters"];
    
    // Call the function to transfer data from chrome.storage to localStorage
    transferDataToLocalStorage(karmaLocalStorageKeys);
  });

  // Function to transfer data from chrome.storage to localStorage for an array of keys
  function transferDataToLocalStorage(keys) {
    // Get data from chrome.storage for the specified keys
    chrome.storage.sync.get(keys, function (result) {
      // Save data to localStorage
      keys.forEach(function (key) {
        localStorage.setItem(key, result[key]);
        console.log(`Data for key '${key}' transferred to localStorage. Data: `+result[key]);
 
      });
    });
  }
});