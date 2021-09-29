let nameElement = document.getElementById('nameElement');
let pronounElement = document.getElementById('pronounElement');
let fontSelect = document.getElementById('fontSelect');
let sticker = document.getElementById('sticker');
const pronounInput = document.getElementById('pronounInput');
const nameInput = document.getElementById('nameInput');
const button = document.getElementById('button');
let counter = document.getElementById('counter');
const blueButton = document.getElementById('blue-button');
const greenButton = document.getElementById('green-button');
const orangeButton = document.getElementById('orange-button');
let footer = document.getElementById('footer');
let count = 0;

button.addEventListener('click', () => {
  nameElement.textContent = nameInput.value;
  pronounElement.textContent = `(${pronounInput.value})`;
  count = count + 1;
  counter.innerText = count;
  footer.innerText = `Nice to meet you, ${nameInput.value}!`;
});

fontSelect.addEventListener('input', () => {
  nameElement.style.fontFamily = fontSelect.value;
  pronounElement.style.fontFamily = fontSelect.value;
});

blueButton.addEventListener('click', () => {
  sticker.style.backgroundColor = ('#1e90ff');
});

greenButton.addEventListener('click', () => {
  sticker.style.backgroundColor = ('#028a0f');
});

orangeButton.addEventListener('click', () => {
  sticker.style.backgroundColor = ('#ed820e');
});

// Add random color generator button