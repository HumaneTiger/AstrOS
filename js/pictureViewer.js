let pictureViewerContainer = document.getElementById('pictureViewer');

export default {
  
    init() {
        //this.hidePicture();
        document.body.addEventListener('mousedown', function(e) {

            if (e.target.classList.contains('link__picture')) {
                e.preventDefault();
                let command = e.target.href.split('#')[1];
                this.showPicture(command);
            }
            // if (e.target.classList.contains('picutreViewerId')) {
            //     e.preventDefault();
                
            //     let command = e.target.href.split('#')[1];
            //     this.showPicture(command);
            // }
        }.bind(this), false);
        //settingsContainer.addEventListener('mousedown', this.mouseDown.bind(this));

    },

    // mouseDown(e) {

    //     e.preventDefault();

    //     let target = e.target;
    //     let command = '';

    //     if (target.classList.contains('picutreViewerId')) {

    //         command = target.href.split('#')[1];
    //         this.showPicture(command);

    //     }

    // },
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
    },
    hidePicture(){
        document.getElementById("pictureViewer").style.display="none";
    },
    showPicture(command) {
        document.getElementById("pictureViewer").style.display="";
        document.getElementById("picutreViewerId").src=command;

    }
}

