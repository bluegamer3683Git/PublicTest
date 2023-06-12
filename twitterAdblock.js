// ==UserScript==
// @name    Twitter Ad Blocker (Scroll Edition)
// @namespace   YourNamespace
// @version     1.0
// @description Removes promoted ads on Twitter as you scroll
// @match       https://twitter.com/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    function removePromotedAds() {
        var promotedAds = document.querySelectorAll('[data-testid="placementTracking"]');
        promotedAds.forEach(function(ad) {
            //ad.parentElement.remove();
            ad.remove();
        });
    }

    // Remove initial promoted ads
    removePromotedAds();

    // Remove promoted ads as you scroll
    window.addEventListener('scroll', function() {
        removePromotedAds();
    });

    // Enjoy an ad-free scrolling experience on Twitter!
})();
