const inputFontSize = document.querySelector('#font-size-control');

const outputText = document.querySelector('#text');

inputFontSize.addEventListener('input', event => {
    outputText.style.fontSize = `${event.currentTarget.value}px`;
});