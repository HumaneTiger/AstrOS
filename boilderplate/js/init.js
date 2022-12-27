var uiBlocker = document.querySelector(".ui-blocker");
var startDialog = document.querySelector("aside.start");
var gameDialog = document.querySelector("aside.game");

function initGlobalHoverListener() {
    document.body.addEventListener('mouseover', function(event) {

        if (event.target.classList.contains('example-class')) {

            // gObject = event.target;

        }

    }, false);
}

function startGameLoop() {

    gGameLoopId = window.setInterval(function() {


    }, 1000);

}

function init() {

    initObjects();

    initGlobalHoverListener();

    startGameLoop();

}

function showBlocker(text, seconds) {

    uiBlocker.classList.remove('hidden');

    window.setTimeout(function() {
        uiBlocker.querySelector('.inner').innerHTML = text;
        uiBlocker.classList.add("fade-in");
    }, 1);

    window.setTimeout(function() {
        uiBlocker.classList.remove("fade-in");
    }, seconds * 1000);

    window.setTimeout(function() {
        uiBlocker.classList.add("hidden");
    }, seconds * 1000 + 400);

}

function playNormal() {

    let audio = allAudio.querySelector(".waves");
    audio.volume = 0.5; audio.play();
    startChapterShoreOfTheDeadlyCliffs(true);
    
}

/* helper */

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

(function () {
    init();
})();