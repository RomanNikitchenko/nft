const images = document.querySelectorAll('.box img');

let currentIndex = 0;

images[0].classList.add('medium');
images[1].classList.add('large');
images[2].classList.add('large');
images[3].classList.add('medium');
images[4].classList.add('small');
images[5].classList.add('small');

const scaleTarget = () => {
  if (currentIndex === 0) {
    images[0].classList.replace('medium', 'small');
    images[1].classList.replace('large', 'medium');
    images[2].classList.replace('large', 'large');
    images[3].classList.replace('medium', 'large');
    images[4].classList.replace('small', 'medium');
    images[5].classList.replace('small', 'small');
  }
  
  if (currentIndex === 1) {
    images[0].classList.replace('small', 'small');
    images[1].classList.replace('medium', 'small');
    images[2].classList.replace('large', 'medium');
    images[3].classList.replace('large', 'large');
    images[4].classList.replace('medium', 'large');
    images[5].classList.replace('small', 'medium');
  }

  if (currentIndex === 2) {
    images[0].classList.replace('small', 'medium');
    images[1].classList.replace('small', 'small');
    images[2].classList.replace('medium', 'small');
    images[3].classList.replace('large', 'medium');
    images[4].classList.replace('large', 'large');
    images[5].classList.replace('medium', 'large');
  }

  if (currentIndex === 3) {
    images[0].classList.replace('medium', 'large');
    images[1].classList.replace('small', 'medium');
    images[2].classList.replace('small', 'small');
    images[3].classList.replace('medium', 'small');
    images[4].classList.replace('large', 'medium');
    images[5].classList.replace('large', 'large');
  }

  if (currentIndex === 4) {
    images[0].classList.replace('large', 'large');
    images[1].classList.replace('medium', 'large');
    images[2].classList.replace('small', 'medium');
    images[3].classList.replace('small', 'small');
    images[4].classList.replace('medium', 'small');
    images[5].classList.replace('large', 'medium');
  }

  if (currentIndex === 5) {
    images[0].classList.replace('large', 'medium');
    images[1].classList.replace('large', 'large');
    images[2].classList.replace('medium', 'large');
    images[3].classList.replace('small', 'medium');
    images[4].classList.replace('small', 'small');
    images[5].classList.replace('medium', 'small');
  }

  currentIndex = currentIndex === 5 ? 0 : currentIndex + 1;
};

export { scaleTarget };
