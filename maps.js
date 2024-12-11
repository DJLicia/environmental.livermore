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

    window.addEventListener('load', init);

    function init() {
        const mapImages = qsa(".overlayImg");

        mapImages.forEach((img) => {
            img.addEventListener("click", () => toggleOpacity(img));
        });
    
        setupMapButton('calEnviroButton', 'calEnviroScreen');
        setupMapButton('lowIncomeButton', 'lowIncome');
        setupMapButton('limitedEnglishButton', 'limitedEnglish');
    }

    /**
     * Helper to set up map button event listeners
     * @param {string} buttonId - ID of the button element
     * @param {string} mapId - ID of the corresponding map element
     */
    function setupMapButton(buttonId, mapId) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => switchMap(mapId));
        } else {
            console.warn(`Button of ID ${buttonId} not found!!`);
        }
    }

    function toggleOpacity(image) {
        image.style.opacity = image.style.opacity === "1" ? "0.5" : "1";
    }

    /**
     * switch between maps
     * @param {string} mapId - ID of the map to show
     */
    function switchMap(mapId) {
        const maps = qsa('.overlayImg');
        maps.forEach(map => {
            map.classList.add('hidden');
            // Reset opacity when hiding
            map.style.opacity = "1";
        });
      // show selected map
      const targetMap = document.getElementById(mapId);
      if (targetMap) {
          targetMap.classList.remove('hidden');
      } else {
          console.warn(`Map with id ${mapId} not found`);
      }
  }
})();
