(() => {
const images = document.querySelectorAll('.box img');

var currentIndex = 0;
var isAnimating = false;
var screenWidth = window.innerWidth;

  function scaleTarget() {
    screenWidth = window.innerWidth;

    for (var i = 0; i < images.length; i++) {
      images[i].classList.remove("small", 'medium', 'large');
    }

    if (screenWidth <= 767) {
      console.log("screenWidth <= 767");
      if (currentIndex === 0) {
        images[0].classList.add('large');
        images[1].classList.add('medium');
        images[2].classList.add('medium');
        images[3].classList.add('small');
        images[4].classList.add('medium');
        images[5].classList.add('medium');
      }
      if (currentIndex === 1) {
        images[1].classList.add('large');
        images[2].classList.add('medium');
        images[3].classList.add('medium');
        images[4].classList.add('small');
        images[5].classList.add('medium');
        images[0].classList.add('medium');
      }
      if (currentIndex === 2) {
        images[2].classList.add('large');
        images[3].classList.add('medium');
        images[4].classList.add('medium');
        images[5].classList.add('small');
        images[0].classList.add('medium');
        images[1].classList.add('medium');
      }
      if (currentIndex === 3) {
        images[3].classList.add('large');
        images[4].classList.add('medium');
        images[5].classList.add('medium');
        images[0].classList.add('small');
        images[1].classList.add('medium');
        images[2].classList.add('medium');
      }
      if (currentIndex === 4) {
        images[4].classList.add('large');
        images[5].classList.add('medium');
        images[0].classList.add('medium');
        images[1].classList.add('small');
        images[2].classList.add('medium');
        images[3].classList.add('medium');
      }
      if (currentIndex === 5) {
        images[5].classList.add('large');
        images[0].classList.add('medium');
        images[1].classList.add('medium');
        images[2].classList.add('small');
        images[3].classList.add('medium');
        images[4].classList.add('medium');
      }
    } else if (screenWidth >= 768 && screenWidth <= 1299) {
      console.log("screenWidth >= 768 && screenWidth <= 1299")
      if (currentIndex === 0) {
        images[0].classList.add('medium');
        images[1].classList.add('large');
        images[2].classList.add('large');
        images[3].classList.add('medium');
        images[4].classList.add('small');
        images[5].classList.add('small');
      }
      if (currentIndex === 1) {
        images[1].classList.add('medium');
        images[2].classList.add('large');
        images[3].classList.add('large');
        images[4].classList.add('medium');
        images[5].classList.add('small');
        images[0].classList.add('small');
      }
      if (currentIndex === 2) {
        images[2].classList.add('medium');
        images[3].classList.add('large');
        images[4].classList.add('large');
        images[5].classList.add('medium');
        images[0].classList.add('small');
        images[1].classList.add('small');
      }
      if (currentIndex === 3) {
        images[3].classList.add('medium');
        images[4].classList.add('large');
        images[5].classList.add('large');
        images[0].classList.add('medium');
        images[1].classList.add('small');
        images[2].classList.add('small');
      }
      if (currentIndex === 4) {
        images[4].classList.add('medium');
        images[5].classList.add('large');
        images[0].classList.add('large');
        images[1].classList.add('medium');
        images[2].classList.add('small');
        images[3].classList.add('small');
      }
      if (currentIndex === 5) {
        images[5].classList.add('medium');
        images[0].classList.add('large');
        images[1].classList.add('large');
        images[2].classList.add('medium');
        images[3].classList.add('small');
        images[4].classList.add('small');
      }
    } else if (screenWidth >= 1300) {
      console.log('screenWidth >= 1300')
      if (currentIndex === 0) {
        images[0].classList.add('medium');
        images[1].classList.add('large');
        images[2].classList.add('large');
        images[3].classList.add('medium');
        images[4].classList.add('small');
        images[5].classList.add('small');
      }
      if (currentIndex === 1) {
        images[1].classList.add('medium');
        images[2].classList.add('large');
        images[3].classList.add('large');
        images[4].classList.add('medium');
        images[5].classList.add('small');
        images[0].classList.add('small');
      }
      if (currentIndex === 2) {
        images[2].classList.add('medium');
        images[3].classList.add('large');
        images[4].classList.add('large');
        images[5].classList.add('medium');
        images[0].classList.add('small');
        images[1].classList.add('small');
      }
      if (currentIndex === 3) {
        images[3].classList.add('medium');
        images[4].classList.add('large');
        images[5].classList.add('large');
        images[0].classList.add('medium');
        images[1].classList.add('small');
        images[2].classList.add('small');
      }
      if (currentIndex === 4) {
        images[4].classList.add('medium');
        images[5].classList.add('large');
        images[0].classList.add('large');
        images[1].classList.add('medium');
        images[2].classList.add('small');
        images[3].classList.add('small');
      }
      if (currentIndex === 5) {
        images[5].classList.add('medium');
        images[0].classList.add('large');
        images[1].classList.add('large');
        images[2].classList.add('medium');
        images[3].classList.add('small');
        images[4].classList.add('small');
      }
    }
  };

  scaleTarget();

  const handleImageClick = e => {
    if (isAnimating) return
    isAnimating = true;

    if (e.target.classList.contains('mini-image')) {
      currentIndex = currentIndex === 5 ? 0 : currentIndex + 1;
      scaleTarget();
    }

    if (e.target.classList.contains('gallery__image')) {
      currentIndex = currentIndex === 5 ? 0 : currentIndex + 1;
      scaleTarget();
    }
    
    setTimeout(() => {
      isAnimating = false;
    }, 1000);
  };

  document.body.addEventListener('click', handleImageClick);
  
  window.addEventListener('resize', scaleTarget);
})(); 
