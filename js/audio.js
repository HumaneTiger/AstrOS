let allAudio = document.getElementById("all-audio");

export default {

    init() {
    },

    music(name, delay, vol) {

        window.setTimeout(function() {

            let audio = allAudio.querySelector('.music-' + name);
            let volume = vol || 0.5;

            audio.volume = volume;
            
            audio.play();

        }, delay || 0);

    },

    voice(name, delay, vol) {

        window.setTimeout(function() {

            let audio = allAudio.querySelector('.voice-' + name);
            let volume = vol || 0.2;

            audio.volume = volume;
            
            audio.play();

        }, delay || 0);

    },

    sfx(name, delay, vol) {

        window.setTimeout(function() {

            let audio = allAudio.querySelector('.sfx-' + name);
            let volume = vol || 0.3;

            audio.volume = volume;
            
            audio.play();

        }, delay || 0);

    }


}