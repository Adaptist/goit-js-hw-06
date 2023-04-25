function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

function changeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}

widgetBtn.addEventListener('click', changeColor);