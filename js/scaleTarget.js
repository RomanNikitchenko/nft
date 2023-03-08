const images = document.querySelectorAll('.box img');

let currentIndex = 0;
let isAnimating = false;

const switchImages = () => {
  if (!isAnimating) {
    isAnimating = true;

    if (currentIndex === 0) {
      images[0].classList.replace('oldClass', 'newClass');
    }

    setTimeout(() => {
      isAnimating = false;
    }, 1000);
  }
};

export { switchImages };
