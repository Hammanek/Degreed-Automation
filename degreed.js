// Vlož zde své odkazy oddělené čárkami
const linksInput = "https://eu.degreed.com/articles/9-agiln-frameworky-scrum-a-kanban-2020-scrum-guide-us?d=25925514&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/9-agiln-frameworky-scrum-a-kanban-kanban-sketch?d=25925393&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/9-agiln-frameworky-scrum-a-kanban-scrum-poster-a3?d=25925460&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/10-organiza-n-agilita-less-poster?d=25925821&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/10-organiza-n-agilita-scaled-agile-framework-portfolio-a4?d=25925825&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/10-organiza-n-agilita-shrnut-hlavn-ch-bod?d=25925814&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/1-orientace-na-c-l-dopl-kov-prezentace?d=25849793&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/2-produkt-dopl-kov-prezentace?d=25849884&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/2-produkt-shrnut-hlavn-ch-bod?d=25849856&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/3-prioritizace-a-strukturov-n-pr-ce-dopl-kov-prezentace?d=25860674&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/3-prioritizace-a-strukturov-n-pr-ce-shrnut-hlavn-ch-bod?d=25860659&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/3-prioritizace-a-strukturov-n-pr-ce-wsjf-kalkul-tor?d=25860691&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/4-agiln-t-m-shrnut-hlavn-ch-bod?d=25867448&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/5-pr-ce-v-t-mu-dopl-kov-prezentace?d=25867446&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/5-pr-ce-v-t-mu-dopl-kov-prezentace?d=25867658&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/5-pr-ce-v-t-mu-shrnut-hlavn-ch-bod?d=25867510&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/6-servant-leadership-dopl-kov-prezentace?d=25867877&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/6-servant-leadership-motiva-n-teorie-xy?d=25867895&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/6-servant-leadership-shrnut-hlavn-ch-bod?d=25867854&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/7-vytv-en-podm-nek-pro-agilitu-dopl-kov-prezentace?d=25867974&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/7-vytv-en-podm-nek-pro-agilitu-shrnut-hlavn-ch-bod?d=25867968&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/8-techniky-zen-agiln-ch-t-m-dopl-kov-prezentace?d=25924736&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/8-techniky-zen-agiln-ch-t-m-shrnut-hlavn-ch-bod?d=25924730&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/9-agiln-frameworky-scrum-a-kanban-2020-scrum-guide-german?d=25925509&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/courses/copilot-v-edge?d=29465629&inputtype=course&orgsso=skodaauto&inputType=Course, https://eu.degreed.com/courses/nau-te-se-dokonale-promptovat?d=29465617&inputtype=course&orgsso=skodaauto&inputType=Course, https://eu.degreed.com/courses/p-klady-promptov-n-ve-kodagpt?d=29465635&inputtype=course&orgsso=skodaauto&inputType=Course, https://eu.degreed.com/courses/vod-do-um-l-inteligence-mikrokurz?d=29465585&inputtype=course&orgsso=skodaauto&inputType=Course, https://eu.degreed.com/courses/zaj-mav-ai-n-stroje?d=29465650&inputtype=course&orgsso=skodaauto&inputType=Course, https://eu.degreed.com/videos/ai-ve-sv-t-mluven-ho-slova-gpt4-o?d=28562344&inputtype=video&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/dal-ai-aplikace-2?d=27633504&inputtype=video&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/etika-a-bezpe-nost-ai?d=27667453&inputtype=video&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/vod-do-um-l-inteligence-3?d=28562383&inputtype=video&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/z-klady-promptov-n-a-komunikace-s-ai-2?d=28361847&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/articles/v-ukov-podklady-pro-video-01-smart-tabulky?d=26181558&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/v-ukov-podklady-pro-video-02-kontingen-n-tabulky?d=26181586&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/v-ukov-podklady-pro-video-03-power-query?d=26181635&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/v-ukov-podklady-pro-video-04-power-bi?d=26182049&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/videos/mini-akademie-pr-ce-s-daty-01-smart-tabulky-v-excelu?d=28240991&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/mini-akademie-pr-ce-s-daty-02-kontingen-n-tabulky-v-excelu?d=28240997&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/mini-akademie-pr-ce-s-daty-03-power-query-v-excelu?d=28241007&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/mini-akademie-pr-ce-s-daty-04-power-bi?d=28241016&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/courses/digit-ln-akademie-365-academy?d=28248720&inputtype=course&orgsso=skodaauto&inputType=Course, https://eu.degreed.com/videos/5-pr-ce-v-t-mu?d=28240759&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/6-servant-leadership?d=28240955&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/7-vytv-en-podm-nek-pro-agilitu?d=28240959&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/8-techniky-zen-agiln-ho-t-mu?d=28240964&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/9-agiln-frameworky-scrum-a-kanban?d=28240969&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/klaus-zellmer-omk-forum-vodn-slovo?d=28360455&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/m-kluso-agiln-mindset-v-praktick-m-ivot?d=28371369&inputtype=video&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/vn-m-te-agilitu-jako-buzzword?d=29004345&inputtype=video&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/articles/ai-generuje-obr-zky?d=27633460&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/bezpe-n-u-v-n-ai?d=27667680&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/emu-m-eme-v-it?d=27668024&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/etika-kdy-je-vhodn-u-vat-ai?d=27668092&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/jak-mluvit-s-um-lou-inteligenc?d=27595057&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/jak-tvo-it-obr-zky-s-copilotem-krok-za-krokem?d=27633550&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/kol-s-m-by-v-m-ai-mohla-pomoci?d=28361761&inputtype=article&hosted=true&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/nen-copilot-jako-copilot?d=28551947&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/p-klady-u-it-ai-v-pracovn-ch-pozic-ch?d=28361757&inputtype=article&hosted=true&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/sd-lejte-sv-znalosti-s-ostatn-mi?d=27668198&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/vyzkou-ejte-si-kodagpt-v-praxi?d=27596598&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/9-agiln-frameworky-scrum-a-kanban-scrum-sketch?d=25925498&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/9-agiln-frameworky-scrum-a-kanban-shrnut-hlavn-ch-bod?d=25925385&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/ablona-lean-canvas?d=25860468&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/ablona-the-product-vision-board-extended?d=25860455&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/agile-leadership?d=25867885&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/jak-d-lat-v-ci-jinak?d=28371345&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/orientace-na-c-l-shrnut-hlavn-ch-bod?d=25849788&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/principy-agility?d=28371120&inputtype=article&hosted=true&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/produkt-ablona-the-product-vision-board?d=25849888&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/strategy-lid-firma-people-company?d=28370670&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/articles/zm-na-my-len?d=28371322&inputtype=article&orgsso=skodaauto&inputType=Article, https://eu.degreed.com/courses/10-krok-k-agilit?d=27830444&inputtype=course&orgsso=skodaauto&inputType=Course, https://eu.degreed.com/videos/10-organiza-n-agilita?d=28240976&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/1-orientace-na-c-l?d=28231676&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/2-produkt?d=28240713&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/3-prioritizace-a-strukturov-n-pr-ce?d=28240722&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video, https://eu.degreed.com/videos/4-agiln-t-m?d=28240729&inputtype=video&hosted=true&orgsso=skodaauto&inputType=Video";

function processAndOpenLinks(inputText) {
    // Rozdělí text na odkazy podle čárek a vyčistí je
    const links = inputText.split(',')
        .map(link => link.trim())
        .filter(link => link.startsWith('http') && link.includes('degreed.com'))
        .filter(Boolean);

    if (links.length === 0) {
        console.log('❌ Nenalezeny žádné platné odkazy');
        return;
    }

    console.log(`📋 Nalezeno ${links.length} odkazů:`);
    links.forEach((link, index) => {
        console.log(`${index + 1}. ${link}`);
    });

    let currentIndex = 0;
    let currentWindow = null;
    let timeoutId = null;

    function openNextLink() {
        // Zruší předchozí timeout, pokud existuje
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        if (currentIndex >= links.length) {
            console.log('✅ Všechny odkazy byly otevřeny');
            return;
        }

        const link = links[currentIndex];
        console.log(`\n🌐 Otevírám odkaz ${currentIndex + 1}/${links.length}: ${link}`);
        
        // Otevře odkaz v novém okně/záložce
        currentWindow = window.open(link, '_blank');
        
        currentIndex++;
        
        // Funkce pro pokračování na další odkaz
        function proceedToNext() {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
            
            if (currentIndex < links.length) {
                console.log(`⏭️ Připravuji další odkaz...`);
                openNextLink();
            } else {
                console.log('🎉 Všechny odkazy byly zpracovány!');
            }
        }

        // Kontrola každou sekundu, jestli uživatel okno ručně nezavřel
        const checkInterval = setInterval(() => {
            if (currentWindow && currentWindow.closed) {
                console.log(`⏹️ Uživatel ručně zavřel okno pro: ${link}`);
                clearInterval(checkInterval);
                proceedToNext();
            }
        }, 1000);

        // Náhodný čas 20–25 minut pro automatické pokračování
        const randomMinutes = Math.floor(Math.random() * 6) + 60;
        const randomMilliseconds = randomMinutes * 60 * 1000;

        console.log(`⏰ Pokud okno nezavřete ručně, počkám ${randomMinutes} minut...`);
        
        timeoutId = setTimeout(() => {
            clearInterval(checkInterval); // Zastaví kontrolní interval
            
            if (currentWindow && !currentWindow.closed) {
                currentWindow.close();
                console.log(`⏹️ Automaticky zavírám okno pro: ${link}`);
            }
            
            proceedToNext();
        }, randomMilliseconds);
    }

    // Zeptá se uživatele před spuštěním
    const totalEstimatedTime = Math.ceil(links.length * 17.5);
    const shouldStart = confirm(`Chcete spustit otevírání ${links.length} odkazů?\n\nPřibližná doba trvání: ${totalEstimatedTime/2} minut\n\nMůžete kdykoli okno ručně zavřít pro okamžité pokračování.`);
    
    if (shouldStart) {
        console.log('🚀 Spouštím proces otevírání odkazů...');
        openNextLink();
    } else {
        console.log('❌ Proces zrušen uživatelem');
    }
}

// Spustí zpracování odkazů
processAndOpenLinks(linksInput);