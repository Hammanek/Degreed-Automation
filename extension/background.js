chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'FOCUS_MAIN_TAB') {
        // Fokusování vypnuto na žádost uživatele, aby okno nevyskakovalo z minimalizace.
        /*
        chrome.tabs.query({}, (tabs) => {
            ...
        });
        */
        return true;
    }
});
