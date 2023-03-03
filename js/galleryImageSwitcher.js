import { changeBackgroundColor } from './changeBackgroundColor.js';
// import { selectImageBox } from './selectImageBox.js';

const images = document.querySelectorAll('.gallery__image');

let currentIndex = 0;
let isAnimating = false;

// Скрыть все изображения, кроме первого
for (let i = 1; i < images.length; i++) {
  images[i].classList.add('hidden');
}

const switchImages = (imageMini = null) => {
  if (!isAnimating) {
    isAnimating = true;

    // Скрыть текущее изображение
    images[currentIndex].classList.add('hidden');

    //выбраная картинка становится в центр
    if (imageMini) {
      currentIndex = (imageMini - 1);
      images[currentIndex].classList.remove('hidden');
    } else { // Показать следующее изображение
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.remove('hidden');
    }

    //меняем цвет фона
    changeBackgroundColor()

    //выбранные элементы получают класс border
    // selectImageBox(currentIndex);

    
    // Добавить анимацию для скрытия и показа изображений
    setTimeout(() => {
      isAnimating = false;
    }, 1000);
  }
}

// Добавить обработчик кликов на кнопку
const handleImageClick = (e) => {
  if (e.target.classList.contains("mini-image")) {
    const imageMini = e.target.dataset.mini;
    switchImages(imageMini);
  }

  if (!e.target.classList.contains("gallery__image")) return;
  switchImages();
};

document.body.addEventListener('click', handleImageClick);
window.addEventListener('touchstart', handleImageClick);
