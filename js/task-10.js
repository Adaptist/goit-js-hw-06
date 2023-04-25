function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxForDiv = document.createElement('div');

document.body.append(boxForDiv);

function createBoxes(amount) {

let boxSize = 30;

  for (let index = 0; index < Number(amount); index++) {
    const elementDiv = document.createElement('div');

    elementDiv.style.backgroundColor = getRandomHexColor();
    elementDiv.style.width = `${boxSize}px`;
    elementDiv.style.height = `${boxSize}px`;

    boxSize += 10;

    boxForDiv.append(elementDiv);
  }
}

function destroyBoxes() {
  boxForDiv.innerHTML = '';
}

function onCreate() {
  if (input.value === '') return;
  createBoxes(input.value);
  input.value = '';
}

destroyBtn.addEventListener('click', destroyBoxes);
createBtn.addEventListener('click', onCreate);