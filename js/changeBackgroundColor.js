const colors = ['#B5FEC7', '#F0E8D0', '#D6E4F0', '#E8D8C3', '#D8BFD8', '#F5D0C5'];

//функцию для смемы цвета фона  
const changeBackgroundColor = (currentIndex) => {
  document.body.style.backgroundColor = colors[currentIndex] ? colors[currentIndex] : '#B5FEC7';
}

export { changeBackgroundColor };