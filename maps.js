/**
 * CS 132 
 * Alicia Zhang
 * 
 * button events for map toggling
 * 
 */


function init() {
    const mapImages = document.querySelectorAll("#map-container img");
    toggleVisibility();
    mapImages.forEach((img, index) => {
        img.style.zIndex = mapImages.length - index; // Stack images
        img.addEventListener("click", function() {
            img.style.opacity = img.style.opacity == 1 ? 0.5 : 1;
        });
    });
}


document.querySelectorAll("#map-container img").forEach(img => {
    img.addEventListener("mouseenter", function(event) {
        const tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.innerHTML = `<img src="1-10-cheryl.png" alt="Detailed view" style="width:200px;">`; // Popup image
        document.body.appendChild(tooltip);
        
        // Position tooltip based on mouse position
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    });

    img.addEventListener("mouseleave", function() {
        const tooltips = document.querySelectorAll(".tooltip");
        tooltips.forEach(tip => tip.remove()); // Remove tooltip on mouse leave
    });
});


img.addEventListener("mouseenter", function() {
    const audio = new Audio('rumbling-highway.mp3'); // Replace with your audio file
    audio.play();
});

function toggleVisibility(mapId) {
    const map = document.getElementById(mapId);
    map.style.opacity = map.style.opacity === "0" ? "0.3" : "0";
}
init();
function switchMap(mapId) {
    const maps = document.querySelectorAll('.overlayImg');
    maps.forEach(map => map.classList.add('hidden'));
    document.getElementById(mapId).classList.remove('hidden');
}

function popupImage(imageSrc) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    popupImage.src = imageSrc;
    popup.classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}

function playAudio(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play();
}
