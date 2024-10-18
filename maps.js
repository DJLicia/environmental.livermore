/**
 * CS 132 
 * Alicia Zhang
 * 
 * Contains button events for switching between 3 map images
 * and changing map opacity
 * Attempt at showing different paragraphs on click as well
 */


(function() {
    "use strict"
    function init() {
        const mapImages = qsa(".overlayImg");

        mapImages.forEach((img) => {
            img.addEventListener("click", () => toggleOpacity(img));
        });

        document.getElementById('calEnviroButton').addEventListener('click', () => {
            switchMap('calEnviroScreen');
        });
        document.getElementById('lowIncomeButton').addEventListener('click', () => {
            switchMap('lowIncome');
        });
        document.getElementById('limitedEnglishButton').addEventListener('click', () => {
            switchMap('limitedEnglish');
        });
    }

    function toggleOpacity(image) {
        image.style.opacity = image.style.opacity === "1" ? "0.5" : "1";
    }

    function switchMap(mapId) {
        const maps = qsa('.overlayImg');
        maps.forEach(map => map.classList.add('hidden'));
        document.getElementById(mapId).classList.remove('hidden');
    }

    function switchParagraph(paragraphId) {
        const paragraph = document.getElementById(paragraphId);

        // Toggle visibility by switching 'hidden' class
        if (paragraph.classList.contains('hidden')) {
            paragraph.classList.remove('hidden');
        } else {
            paragraph.classList.add('hidden');
        }
    }
    
    init();
});
