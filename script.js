// ==UserScript==
// @name    Imgur Ad Blocker
// @namespace   YourNamespace
// @version     1.0
// @description Removes ads on Imgur
// @match       https://imgur.io/*
// @grant       none
// ==/UserScript==


(function() {
    'use strict';

    function removeAds() {
        var ads = document.querySelectorAll('[id*="noad"]');
        ads.forEach(function(ad) {
            ad.style.display = 'none';
        });

      //console.log("removing ads!");
    }

    // Remove initial ads
    removeAds();

    // Remove ads as you scroll
    window.addEventListener('scroll', function() {
       removeAds();
    });

    // Enjoy an uninterrupted scrolling experience on Imgur!
})();
