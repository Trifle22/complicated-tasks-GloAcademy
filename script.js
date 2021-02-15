'use strict';

let button = document.querySelector('.change-color');
let colorText = document.querySelector('.color');

button.addEventListener('click', function() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  colorText.textContent = `#${randomColor}`;
  document.body.style.backgroundColor = `#${randomColor}`;
});
