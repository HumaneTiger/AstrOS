let active = false;
let handbook = document.getElementById('handbook');
let allHandbookChapters = handbook.querySelectorAll('.chapter');

export default {
  
  init() {

    document.body.addEventListener('mousedown', function(e) {

      if (e.target.classList.contains('link__help')) {
          e.preventDefault();
          this.openHandbook(e.target.href.split('#')[1]);
      }

      if (e.target.classList.contains('link__display')) {
        e.preventDefault();
        this.shakeDisplay(e.target.href.split('#')[1]);
      }

  }.bind(this), false);

  },

  openHandbook(chapter) {

    if (!active) {

      active = true;

      allHandbookChapters.forEach(function(element) {
        if (element.classList.contains(chapter)) {
          element.classList.remove('chapter--closed');  
        } else {
          element.classList.add('chapter--closed');
        }
      });

      handbook.classList.remove('closed');

    } else {

      let activeChapter = handbook.querySelector('.chapter:not(.chapter--closed)');
      let targetChapter = handbook.querySelector('.chapter.' + chapter);

      if (activeChapter) {
        if (activeChapter.classList.contains(chapter)) {
          this.closeHandbook();
          return;
        } else {
          activeChapter.classList.add('chapter--closed');
        }
      }

      if (targetChapter) {
        targetChapter.classList.remove('chapter--closed');
      }

    }

  },

  closeHandbook() {

    active = false;
    handbook.classList.add('closed');

  },

  shakeDisplay(display) {

    let targetDisplay = document.getElementById(display);

    if (targetDisplay) {

      targetDisplay.classList.add('shake');

      window.setTimeout(function() {
        targetDisplay.classList.remove('shake');
      }, 700);
    }

  }
  
}

