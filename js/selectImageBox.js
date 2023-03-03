const images = document.querySelectorAll('.gallery__image');
const box = document.querySelectorAll('.box');

const selectImageBox = (currentIndex) => {
  // Удаляем класс "border" из всех изображений
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains("border")) {
      images[i].classList.remove('border');
      break; // Останавливаем цикл после удаления классом "border" у первого попавшегося элемента
    }
  }

  // Удаляем класс "border" из всех блоков
  for (let i = 0; i < box.length; i++) {
    if (box[i].classList.contains("border")) {
      box[i].classList.remove('border');
      break; // Останавливаем цикл после удаления классом "border" у первого попавшегося элемента
    }
  }

  // Добавляем класс "border" к изображению и блоку с переданным индексом currentIndex
  box[currentIndex].classList.add('border');
  images[currentIndex].classList.add('border');
}

export { selectImageBox };