'use strict';

let string = prompt('Введите что-либо');

function changeString(str) {
  if (!isNaN(str)) {
    return 'Передана не строка';
  } else {
    str = str.trim();
    if (str.length > 31) {
      str = str.replace(str.slice(31, str.length), '...');
    }
    return str;
  }
}

console.log(changeString(string));

