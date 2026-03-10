// ==UserScript==
// @name         Auto Close
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automaticky zavře každé okno na login.microsoftonline.com
// @author       Ty
// @match        https://login.microsoftonline.com/*
// @match        https://stso.skoda.vwgroup.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("🔒 Detekováno login.microsoftonline.com, zavírám tab...");
    setTimeout(() => {
        window.close();
    }, 500); // malá prodleva, aby se stránka stihla načíst
})();
