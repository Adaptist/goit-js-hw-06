const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInput => {
    nameOutput.textContent = 
    nameInput.value ? 
    nameInput.value :
    'Anonymous';
  });