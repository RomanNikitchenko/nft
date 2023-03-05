const colors = ['#B5FEC7', '#ff66b2', '#ffcb69', '#a0ff69', '#69fff8', '#6978ff'];

//функцию для смемы цвета фона  
const changeBackgroundColor = (currentIndex) => {
  document.body.style.backgroundColor = colors[currentIndex] ? colors[currentIndex] : '#B5FEC7';
}

export { changeBackgroundColor };