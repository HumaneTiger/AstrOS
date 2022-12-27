import Help from './help.js'

let newPosX = 0, newPosY = 0, startPosX = 0, startPosY = 0;
let dragMode = false;
let dragEl = null;
let topIndex = 2;

export default {
  
  init() {

    document.addEventListener('mousedown', this.mouseDown);
        
    document.addEventListener('mousemove', this.mouseMove);
    
    document.addEventListener('mouseup', function(){
      dragMode = false;
      dragEl = null;
    });

  },
  
  mouseDown(e) {

    let target = e.target;

    if (target) {

      if ( target.closest('.toggle__content') ) {

        if (target.closest('#handbook')) {
          Help.closeHandbook();
        } else {
          target.closest('.display').classList.toggle('display--active');
        }
  
      } else if ( dragMode === false && target.closest('div.display__header') ) {
  
        dragMode = true;
  
        dragEl = target.closest('div.display');
  
        dragEl.style.zIndex = topIndex++;
        
        startPosX = dragEl.clientX;
        startPosY = dragEl.clientY;
  
      }
  
    }

  },

  mouseMove(e) {

    e.preventDefault;
    e.stopPropagation();
    
    if (dragMode) {

      // calculate the new position
      newPosX = startPosX - e.clientX;
      newPosY = startPosY - e.clientY;
  
      // with each move we also want to update the start X and Y
      startPosX = e.clientX;
      startPosY = e.clientY;

      if (dragEl) {
        // set the element's new position:
        dragEl.style.top = (dragEl.offsetTop - newPosY) + "px";
        dragEl.style.left = (dragEl.offsetLeft - newPosX) + "px";
      }

    }
  
  }
  
}

