'use strict';

let string = prompt();

function changeString(str) {
  if (typeof str === 'string') {
    str = str.trim();
    if (str.length > 31) {
      str = str.replace(str.slice(31, str.length), '...');
    }
    return str;
  } else {
    return 'Передана не строка';
  }
}

console.log(changeString(string));