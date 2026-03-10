// ==UserScript==
// @name         Degreed.eu Complete Automation
// @namespace    http://tampermonkey.net/
// @version      1.8
// @description  Kompletní automatizace na eu.degreed.com
// @author       You
// @match        https://eu.degreed.com/*
// @match        http://eu.degreed.com/*
// @grant        window.close
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    const CONFIG = {
        checkDelay: 2000,
        maxWaitForNewWindow: 10000,
        waitAfterOpen: 3000
    };

    let currentState = 'init';
    let timeoutId = null;

    function initDegreedAutomation() {
        console.log('🚀 Degreed Automation started on', window.location.hostname);

        // Nejprve zkontroluj, jestli už je content dokončený
        if (isAlreadyCompleted()) {
            console.log('✅ Content již je dokončený, zavírám okno');
            setTimeout(() => window.close(), 1000);
            return;
        }

        if (isMainWindow()) {
            currentState = 'main_window';
            handleMainWindow();
        } else if (isLearningWindow()) {
            currentState = 'learning_window';
            handleLearningWindow();
        } else {
            console.log('🔍 Čekám na načtení stránky...');
            setTimeout(initDegreedAutomation, CONFIG.checkDelay);
        }
    }

    function isAlreadyCompleted() {
        // Hledej elementy s textem "Dokončeno"
        const completionSlides = document.querySelectorAll('.input-completion__slide, div[class*="completion__slide"]');

        for (let slide of completionSlides) {
            const text = slide.textContent.trim();
            if (text.includes('Dokončeno')) {
                console.log('🎯 Nalezeno "Dokončeno" - content je již hotový');
                return true;
            }
        }

        return false;
    }

    function isMainWindow() {
        return findOpenButton() !== null;
    }

    function isLearningWindow() {
        return document.querySelector('[data-dgat*="learning-resource-metadata-minutes-"]') ||
               findCompleteButton() !== null;
    }

    function handleMainWindow() {
        // Ještě jednou zkontroluj, jestli není již dokončeno
        if (isAlreadyCompleted()) {
            console.log('✅ Content již dokončen v hlavním okně, zavírám');
            setTimeout(() => window.close(), 1000);
            return;
        }

        console.log('📋 Hlavní okno - hledám tlačítko "Otevřít"');

        const openButton = findOpenButton();
        if (openButton) {
            console.log('✅ Nalezeno tlačítko "Otevřít"');
            clickOpenButton(openButton);

            setTimeout(checkForLearningWindow, CONFIG.waitAfterOpen);
        }
    }

    function clickOpenButton(button) {
        console.log('🖱️ Klikám na tlačítko "Otevřít"');
        console.log('Tlačítko info:', {
            className: button.className,
            ariaLabel: button.getAttribute('aria-label'),
            text: button.textContent.trim()
        });

        button.click();
    }

    function checkForLearningWindow() {
        console.log('🔍 Kontroluji jestli se otevřelo learning okno...');

        if (isMainWindow()) {
            console.log('ℹ️ Stále v hlavním okně, learning se otevřel v novém okně/tabu');
            handleLearningWindow();
        } else if (isLearningWindow()) {
            console.log('✅ Načteno learning okno!');
            currentState = 'learning_window';
            handleLearningWindow();
        } else {
            console.log('❌ Learning okno nebylo detekováno');
        }
    }

    function handleLearningWindow() {
        // Ještě jednou zkontroluj, jestli není již dokončeno
        if (isAlreadyCompleted()) {
            console.log('✅ Content již dokončen v learning okně, zavírám');
            setTimeout(() => window.close(), 1000);
            return;
        }

        console.log('🎓 Learning okno detekováno');

        const minutes = getContentMinutes() || 1;
        console.log(`⏰ Délka contentu: ${minutes} minut`);

        waitAndComplete(minutes);
    }

    function getContentMinutes() {
        const timeElement = document.querySelector('[data-dgat*="learning-resource-metadata-minutes-"]');

        if (timeElement) {
            const text = timeElement.textContent;
            const match = text.match(/(\d+)\s*min/);
            if (match) {
                return parseInt(match[1]);
            }
        }

        const allElements = document.querySelectorAll('*');
        for (let element of allElements) {
            const text = element.textContent;
            if (text && text.match(/\d+\s*min/)) {
                const match = text.match(/(\d+)\s*min/);
                return parseInt(match[1]);
            }
        }

        return null;
    }

    function waitAndComplete(minutes) {
        const waitTime = minutes * 60 * 1000;
        console.log(`⏳ Čekám ${minutes} minut před dokončením...`);

        timeoutId = setTimeout(() => {
            completeLearning();
        }, waitTime);

        addSkipButton();
    }

    function completeLearning() {
        console.log('✅ Dokončuji learning content...');

        const completeButton = findCompleteButton();
        if (completeButton) {
            console.log('🎯 Nalezeno tlačítko "Označit jako dokončené"');

            if (completeButton.hidden || completeButton.style.display === 'none') {
                console.log('🔓 Odstraňuji hidden atribut');
                completeButton.hidden = false;
                completeButton.style.display = 'block';
            }

            completeButton.click();
            console.log('✅ Kliknuto na dokončení');

            // Po dokončení zkontroluj stav a zavři
            setTimeout(() => {
                if (isAlreadyCompleted()) {
                    console.log('✅ Úspěšně dokončeno, zavírám okno');
                    window.close();
                } else {
                    console.log('🚪 Zavírám okno (dokončení proběhlo)');
                    window.close();
                }
            }, 3000);
        } else {
            console.log('❌ Tlačítko pro dokončení nenalezeno, zavírám okno');
            window.close();
        }
    }

    function findOpenButton() {
        const buttons = document.querySelectorAll('button.action-button, button[class*="action-button"]');

        for (let button of buttons) {
            const ariaLabel = (button.getAttribute('aria-label') || '').toLowerCase();
            const textContent = (button.textContent || '').toLowerCase();

            if (ariaLabel.includes('open') || ariaLabel.includes('otevřít') ||
                textContent.includes('open') || textContent.includes('otevřít')) {
                return button;
            }
        }

        return null;
    }

    function findCompleteButton() {
        const completionSlides = document.querySelectorAll('.input-completion__slide, div[class*="completion__slide"]');

        for (let slide of completionSlides) {
            const text = slide.textContent.trim();
            if (text.includes('Označit jako dokončené') || text.includes('dokončené')) {
                console.log('✅ Nalezen completion slide:', slide);
                return slide;
            }
        }

        const allElements = document.querySelectorAll('*');
        for (let element of allElements) {
            const text = element.textContent;
            if (text && (text.includes('Označit jako dokončené') || text.includes('dokončené'))) {
                console.log('✅ Nalezen element s textem dokončení:', element);
                return element;
            }
        }

        return null;
    }

    function addSkipButton() {
        if (document.getElementById('degreed-skip-btn')) return;

        const btn = document.createElement('button');
        btn.id = 'degreed-skip-btn';
        btn.innerHTML = '⏭️ Přeskočit čekání';
        btn.style.position = 'fixed';
        btn.style.top = '10px';
        btn.style.right = '10px';
        btn.style.zIndex = '9999';
        btn.style.padding = '10px';
        btn.style.background = '#ff4444';
        btn.style.color = 'white';
        btn.style.border = 'none';
        btn.style.borderRadius = '5px';
        btn.style.cursor = 'pointer';

        btn.onclick = function() {
            if (timeoutId) clearTimeout(timeoutId);
            completeLearning();
        };

        document.body.appendChild(btn);
    }

    // Spuštění
    setTimeout(initDegreedAutomation, 3000);

    // Debug funkce
    window.degreedAuto = {
        skipWait: function() {
            if (timeoutId) clearTimeout(timeoutId);
            completeLearning();
        },
        checkCompleted: function() {
            return isAlreadyCompleted();
        },
        closeNow: function() {
            window.close();
        }
    };

    console.log('🎮 Degreed Auto loaded! Use degreedAuto.checkCompleted() to check status');

})();