'use strict';

let lang = 'en';

let arr = [['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
          ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']];


/*
if (lang === 'ru') {
  console.log('Понедельник, ','Вторник, ','Среда, ','Четверг, ','Пятница, ','Суббота, ','Воскресенье');
} else if (lang === 'en') {
  console.log('Monday, ','Tuesday, ','Wednesday, ','Thursday, ','Friday, ','Saturday, ','Sunday');
}
*/

/*
switch(lang) {
  case 'ru':
    console.log('Понедельник, ','Вторник, ','Среда, ','Четверг, ','Пятница, ','Суббота, ','Воскресенье');
    break;
  case 'en':
    console.log('Monday, ','Tuesday, ','Wednesday, ','Thursday, ','Friday, ','Saturday, ','Sunday');
    break;
}
*/

console.log((lang === 'ru') ? arr[0].join(', ') : arr[1].join(', '));


