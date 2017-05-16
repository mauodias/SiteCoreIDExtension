// document.addEventListener('DOMContentLoaded', function() {
  // var getPageID = document.getElementById('getId');
  // getPageID.addEventListener('click', function() {
    // chrome.tabs.getSelected(null, function(tab) {
	  // d = document;
      // var id = d.getElementsByName("itemId")[0].content;
	  // console.log(id);
	  // var outputId = document.getElementById("currentId").innerText = id;
    // });
  // }, false);
// }, false);

function display_id (id){
	var textId = document.getElementById("currentId");
	textId.innerText = id;
}

/*document.addEventListener('DOMContentLoaded', function() {
	var getPageID = document.getElementById('getId');
	getPageID.addEventListener('click', function() {
		chrome.tabs.query({active: true, windowId: chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {
		  var tab = tabs[0];
		  chrome.tabs.executeScript(tab.id, {
			code: 'document.getElementsByName("itemId")[0].content'
		  }, display_id);
		});
	})
})*/

window.onload = function() {
	chrome.tabs.query({active: true, windowId: chrome.windows.WINDOW_ID_CURRENT}, function(tabs) {
	  var tab = tabs[0];
	  chrome.tabs.executeScript(tab.id, {
		code: 'document.getElementsByName("itemId")[0].content'
	  }, display_id);
	});
}
