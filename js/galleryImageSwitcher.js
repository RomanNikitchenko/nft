const images = document.querySelectorAll('.gallery__image');
let currentIndex = 0;
let isAnimating = false;

// Скрыть все изображения, кроме первого
for (let i = 1; i < images.length; i++) {
  images[i].classList.add('hidden');
}

function switchImages() {
    if (!isAnimating) {
    isAnimating = true;

    // Скрыть текущее изображение
    images[currentIndex].classList.add('hidden');

    // Показать следующее изображение
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.remove('hidden');

    // Добавить анимацию для скрытия и показа изображений
    setTimeout(() => {
      isAnimating = false;
    }, 1000);
  }
}

// Добавить обработчик кликов на кнопку
const handleImageClick = (e) => {
  if (e.target.classList.contains("logo")) return;
  if (e.target.classList.contains("logo__accent")) return;
  if (e.target.tagName === 'A') return;

  switchImages();
};

document.body.addEventListener('click', handleImageClick);
window.addEventListener('touchstart', handleImageClick);
