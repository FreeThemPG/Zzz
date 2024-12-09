// ==UserScript==
// @name         YouTube Ad Blocker
// @version      1.9
// @description  Blocks ads on YouTube
// @author       Kakozi
// @match        https://www.youtube.com/*
// @icon         https://cdn.discordapp.com/attachments/1294388591606108161/1315809055050305556/Youtube-Icon-2000x2000.png?ex=6758c22d&is=675770ad&hm=cfd74242777e553c933083df6751147be17f8016f0424c852bbcb29fc5c614a6&
// @grant        none
// ==/UserScript==

(function() {
    const adSelectors = [
        '.ytp-ad-skip-button',
        '.ytp-ad-player-overlay',
        '.video-ads'
    ];

    const removeAds = () => {
        adSelectors.forEach(selector => {
            const adElement = document.querySelector(selector);
            if (adElement) adElement.style.display = 'none';
        });
    };

    const skipAd = () => {
        const skipButton = document.querySelector('.ytp-ad-skip-button');
        if (skipButton) skipButton.click();
    };

    const init = () => {
        setInterval(() => {
            removeAds();
            skipAd();
        }, 1000);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
