function injectScript (script) {
    var s = document.createElement('script');

    // TODO: add "script.js" to web_accessible_resources in manifest.json
    s.src = chrome.extension.getURL(script);

    s.onload = function() {
        this.parentNode.removeChild(this);
    };

    (document.head||document.documentElement).appendChild(s);
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            injectScript('emulate-card-swipe.js');
        }
    }
);
