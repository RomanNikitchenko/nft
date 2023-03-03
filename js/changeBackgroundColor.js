const colors = ['#ff66b2', '#ffcb69', '#a0ff69', '#69fff8', '#6978ff', '#B5FEC7'];
let currentIndex = 0;

//функцию для смемы цвета фона  
const changeBackgroundColor = () => {
  document.body.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
}

export { changeBackgroundColor };