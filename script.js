let SplitAnimation = {
  init: function(){
    console.log("SplitAnimation.init() invoked.");
    const slantSplitcontainer = document.getElementById('slant-split-container');
    const learnMoreLeft       = slantSplitcontainer.querySelector('.left-section .learn-more');
    const learnMoreRight      = slantSplitcontainer.querySelector('.right-section .learn-more');
    const leftArrow          = slantSplitcontainer.querySelector('.left-section .left-arrow');
    const rightArrow           = slantSplitcontainer.querySelector('.right-section .right-arrow');


    function handleLearnMoreLeftClick(){
      slantSplitcontainer.classList.remove('open-right');
      slantSplitcontainer.classList.remove('close-right');
      slantSplitcontainer.classList.remove('close-left');
      slantSplitcontainer.classList.add('open-left');
    }


    function handleLeftArrowClick(){
      slantSplitcontainer.classList.remove('open-left');
      slantSplitcontainer.classList.add('close-left');
    }


    function handleLearnMoreRightClick(){
      slantSplitcontainer.classList.remove('open-left');
      slantSplitcontainer.classList.remove('close-left');
      slantSplitcontainer.classList.remove('close-right');
      slantSplitcontainer.classList.add('open-right');
    }


    function handleRightArrowClick(){
      slantSplitcontainer.classList.remove('open-right');
      slantSplitcontainer.classList.add('close-right');
    }


    learnMoreLeft.addEventListener('click',  handleLearnMoreLeftClick);
    learnMoreRight.addEventListener('click', handleLearnMoreRightClick);
    leftArrow.addEventListener('click',      handleLeftArrowClick);
    rightArrow.addEventListener('click',     handleRightArrowClick);


    this.destroy = function(){
      learnMoreLeft.removeEventListener('click',  handleLearnMoreLeftClick);
      learnMoreRight.removeEventListener('click', handleLearnMoreRightClick);
      leftArrow.removeEventListener('click',      handleLeftArrowClick);
      rightArrow.removeEventListener('click',     handleRightArrowClick);
      SplitAnimation = null;
      console.log("Removed SplitAnimation related event listeners, and set the SplitAnimation object to: ", SplitAnimation);
    };


    delete this.init;
    console.log("SplitAnimation.init() deleted.");
    Object.freeze(this);
  } // End of init.
}.init();


/* =============================================================================

============================================================================= */


function initialize(){
  setTimeout(function(){
    console.log("CSS class '.preload' removed from body element.");
    document.body.classList.remove('preload');
  }, 500);
}

initialize();


// Optional:
// window.onpageshow = (e) => {
//   if (e.persisted){
//     console.log("The page was cached, but recalling initialize() now.");
//     location.reload();
//     initialize();
//   }
// };
