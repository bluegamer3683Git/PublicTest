// ==UserScript==
// @name    Imgur Ad Blocker
// @namespace   YourNamespace
// @version     1.0
// @description Removes ads on Imgur
// @match       https://imgur.com/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    // Remove ads
    var ads = document.querySelectorAll('.ad-container');
    ads.forEach(function(ad) {
        ad.style.display = 'none';
    });

    // Enjoy ad-free Imgur!
})();
