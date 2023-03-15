// Получаем ссылку на элемент блока, где будет отображаться текст выбранного изображения
const selectedImageText = document.querySelector('#selected-image-text');

// Функция обновления текста выбранного изображения
const updateSelectedImageText = () => {
  // Получаем ссылку на выбранное изображение
  const selectedImage = document.querySelector('.gallery__image:not(.hidden)');

  // Если изображение выбрано
  if (selectedImage) {
    // Получаем текст альтернативного описания изображения
    const newAltText = selectedImage.getAttribute('alt');
    // Если текст выбранного изображения отличается от текста, который уже отображается на странице
    if (selectedImageText.textContent !== newAltText) {
      // Плавно скрываем текст
      selectedImageText.style.opacity = 0;
      // Через 300 мс обновляем текст и плавно отображаем его
      setTimeout(() => {
        selectedImageText.textContent = newAltText;
        selectedImageText.style.opacity = 1;
      }, 300);
    }
    // Если изображение не выбрано
  } else {
    // Плавно скрываем текст
    selectedImageText.style.opacity = 0;
    // Через 300 мс очищаем текст и плавно отображаем блок
    setTimeout(() => {
      selectedImageText.textContent = '';
      selectedImageText.style.opacity = 1;
    }, 300);
  }
};

// Экспортируем функцию для использования в других модулях
export { updateSelectedImageText };
