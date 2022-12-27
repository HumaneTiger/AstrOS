
let settingsContainer = document.getElementById('settings');

export default {
  
    init() {

        settingsContainer.addEventListener('mousedown', this.mouseDown.bind(this));

    },

    mouseDown(e) {

        e.preventDefault();

        let target = e.target;
        let command = '';

        if (target.classList.contains('button__primary') && !target.classList.contains('button--disabled')) {

            command = target.href.split('#')[1];

            if (command === 'go-fullscreen') {
                this.requestFullScreen();
            }

        }

    },

    requestFullScreen() {

        let element = document.body;
        let docElm = document.documentElement;

        // Supports most browsers and their versions.
        let requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (requestMethod) { // Native full screen.
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }

}