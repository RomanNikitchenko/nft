// import { selectImageBox } from './selectImageBox.js';
import { updateSelectedImageText } from './updateSelectedImageText.js';
import { scaleTarget } from './scaleTarget.js';


const images = document.querySelectorAll('.gallery__image');

let currentIndex = 0;
let isAnimating = false;

// Скрыть все изображения, кроме первого
images[currentIndex].classList.remove('hidden');

const switchImages = (imageMini = null) => {
  if (!isAnimating) {
    isAnimating = true;

    // Скрыть текущее изображение
    images[currentIndex].classList.add('hidden');

    //выбраная картинка становится в центр
    if (imageMini) {
      currentIndex = imageMini - 1;
      images[currentIndex].classList.remove('hidden');
    } else {
      // Показать следующее изображение
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.remove('hidden');
    }

    //изменить размер элементов
    scaleTarget();

    // Обновить содержимое блока с текстом выбранного изображения
    updateSelectedImageText();

    //выбранные элементы получают класс border
    // selectImageBox(currentIndex);

    // Добавить анимацию для скрытия и показа изображений
    setTimeout(() => {
      isAnimating = false;
    }, 1000);
  }
};

// Обновить содержимое блока с текстом выбранного изображения
updateSelectedImageText();

// Добавить обработчик кликов на кнопку
const handleImageClick = e => {
  if (e.target.classList.contains('mini-image')) {
    const imageMini = e.target.dataset.mini;
    switchImages(imageMini);
  }

  if (!e.target.classList.contains('gallery__image')) return;
  switchImages();
};

document.body.addEventListener('click', handleImageClick);
// window.addEventListener('touchstart', handleImageClick);
