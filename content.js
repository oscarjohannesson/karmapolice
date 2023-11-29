
const karmaLocalStorageKeys = ["savedFilters","alertGroupConfig","fetchConfig","multiGridConfig","filterBarConfig","themeConfig","alertGridConfig","silenceFormConfig","filters"];

  window.addEventListener('load', transferAllDataToChromeStorage);

//    window.addEventListener('load', chromeStorageToLocalStorage);
  function transferAllDataToChromeStorage(){
    karmaLocalStorageKeys.forEach(transferDataToChromeStorage);
  }

    // Function to transfer data from localStorage to chrome.storage
function transferDataToChromeStorage(key,index,array) {
  // Get data from localStorage
  const localStorageData = localStorage.getItem(key);

  // Save data to chrome.storage
  chrome.storage.sync.set({ key: localStorageData }, function () {
    console.log('Data transferred to chrome.storage key:'+key+'data: '+ localStorageData);
    
 chrome.storage.sync.get([key], function(items) {
    console.log('Retrived data from chrome.storage with key:'+key + ' data: '+ items );
  });

});
}



