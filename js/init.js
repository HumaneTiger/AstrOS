import Binding from './binding.js'
import Ui from './ui.js'
import Help from './help.js'
import Audio from './audio.js'
import Settings from './settings.js'

let tick = 0;
let ticksPerHour = 4;
let tickInterval = 150;

let timeIsUnity = {
    gameHours: 1,
    gameDays: 0,
    gameMonths: 0,
    gameMonthsPlus1: 1,
    todayHours: 1,
    thisMonthDays: 0
}

function preInit() {
    //document.getElementById('launch-system').addEventListener('mousedown', launchSystem);
    launchSystem();
}

function launchSystem(e) {

    if (e) e.preventDefault();

    init();

    document.querySelector('main').classList.add('fade-out');

    //Audio.voice('welcome', 3500, 0.5);
    //  Audio.music('newdawn', 0, 0.1);

    window.setTimeout(function() {
        document.querySelector('main').classList.add('fade-displays-in');
    }, 0);

    window.setTimeout(function() {
        document.querySelector('main').classList.remove('start-screen');
        document.querySelector('main').classList.remove('fade-displays-in');
        document.querySelector('main').classList.remove('fade-out');
    }, 2500);

    window.setTimeout(function() {
        //Help.openHandbook('tutorial-1');
    }, 8000);

}

function init() {

    Ui.init();
    Audio.init();
    Help.init();
    Settings.init();

    bind();

    initiateMainGameLoop();

}

function bind() {
    /* no binding atm */
    /*
    new Binding({
        object: timeIsUnity,
        property: 'gameMonthsPlus1',
        element: document.getElementById('gametime-months')
    })
    new Binding({
        object: timeIsUnity,
        property: 'thisMonthDays',
        element: document.getElementById('gametime-days')
    })
    new Binding({
        object: timeIsUnity,
        property: 'todayHours',
        element: document.getElementById('gametime-hours')
    })
    */
}

function initiateMainGameLoop() {

    window.setInterval(function() {

        /* go foreward in time */

        tick += 1;

        /* TICKY TASKS */

        if (tick % ticksPerHour === 0) {
    
            timeIsUnity.gameHours += 1;

            /* HOURLY TASKS */
            /* none */

            if (timeIsUnity.gameHours % 24 === 0) {

                timeIsUnity.gameDays += 1;

                /* DAILY TASKS */
                /* none */

                if (timeIsUnity.gameDays % 31 === 0) {

                    timeIsUnity.gameMonths += 1;
                    timeIsUnity.gameMonthsPlus1 = timeIsUnity.gameMonths + 1;
    
                    /* MONTHLY TASKS */
                    /* none */
    
                }
        
            }
    
            timeIsUnity.todayHours = timeIsUnity.gameHours - timeIsUnity.gameDays * 24;
            timeIsUnity.thisMonthDays = timeIsUnity.gameDays - timeIsUnity.gameMonths * 31;
    
        }

    }.bind(this), tickInterval);


}

(function () {
    preInit();
})();