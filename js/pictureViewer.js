let pictureViewerContainer = document.getElementById('pictureViewer');
let picturePath = "";

export default {
  
    init() {
        
        // CONVENTION:
        // the app window is showing the image located under the path given in the data-picture attribute
        // when the value of the attribute changes, the picture gets updated
        // having a convention like this, is providing a stable "API" for the rest of the application (the data-picture attribute)
        // and keeps the picture viewer itself open for internal changes

        document.body.addEventListener('mousedown', function(e) {

            if (e.target.classList.contains('link__picture')) {
                e.preventDefault();
                let picturePath = e.target.href.split('#')[1];
                pictureViewerContainer.dataset.picture = picturePath;
            }

        }.bind(this), false);

        setInterval(() => {
          if (picturePath !== pictureViewerContainer.dataset.picture) {
            picturePath = pictureViewerContainer.dataset.picture;
            this.showPicture(picturePath);
          }
        }, 100);

    },

    showPicture(picturePath) {
      // 1) make sure the app window is active
      // @Flavedo: the CSS class "display--active" controls if a display is active or not (including the toggle behavior)

      // 2) update the src attribute of the image element itself
      // @Flavedo: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

      // 3) make sure the image is visible
      // @Flavedo: removing the "is--hidden" class is doing the trick, see: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
      
      //document.getElementById("picutreViewerId").src=picturePath;

      console.log(picturePath);

    }
}

