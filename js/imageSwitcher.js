// Создаем массив объектов с параметрами анимации для каждого изображения
const images = [
  {
    src: './images/image-1.jpg',
  },
  {
    src: './images/image-2.jpg',
  },
  {
    src: './images/image-3.jpg',
  },
  {
    src: './images/image-4.jpg',
  },
  {
    src: './images/image-5.jpg',
  },
  {
    src: './images/image-6.jpg',
  }
];

const container = document.getElementById('image-container');
var disabled = false;
var currentIndex = 1;

const updateImage = () => {
    if (disabled) return;

    disabled = true;

    const currentImage = images[currentIndex];

    const newImage = `<img src="${currentImage.src}" alt="Image ${currentIndex + 1}">`

    container.innerHTML = newImage;

    const prevImage = container.querySelector('img');
    
    if (prevImage) {
        anime({
            targets: prevImage,
            duration: 1000,
            easing: 'easeOutQuad',
            opacity: [0, 1],
            complete: function (a) {
                disabled = false;
            }
        });
    }

    if (currentIndex === 5) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }
}

const imageSwitcher = e => {
    if (e.target.classList.contains("logo")) return;
    if (e.target.classList.contains("logo__accent")) return;
    if (e.target.tagName === 'A') return;
    if (e.currentTarget.tagName !== 'BODY') return;

    updateImage();
}
document.body.addEventListener('click', imageSwitcher);

window.addEventListener('touchstart', function (e) {
    if (e.target.classList.contains("logo")) return;
    if (e.target.classList.contains("logo__accent")) return;
    if (e.target.tagName === 'A') return;

    updateImage();
});