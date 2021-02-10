'use strict';
let time1 = document.querySelector('.time1');
let time2 = document.querySelector('.time2');
let now = new Date();
let nowTime = now.toLocaleTimeString();


console.log(now);


let week = {
  '1' : 'Понедельник',
  '2' : 'Вторник',
  '3' : 'Среда',
  '4' : 'Четверг',
  '5' : 'Пятница',
  '6' : 'Суббота',
  '0' : 'Воскресение'
};

let months = {
  '0' : 'Января',
  '1' : 'Февраля',
  '2' : 'Марта',
  '3' : 'Апреля',
  '4' : 'Мая',
  '5' : 'Июня',
  '6' : 'Июля',
  '7' : 'Августа',
  '8' : 'Сентября',
  '9' : 'Октября',
  '10' : 'Ноября',
  '11' : 'Декабря'
};

let declensions = ['минута','минуты','минут'];

function dateOutput1() {
  let minutesNum = nowTime.slice(3,5);
  
function declesionsOfMinutes(minutesNum, declensions) {
  minutesNum = Math.abs(minutesNum) % 100; 
  let minutesNum1 = minutesNum % 10;
  if (minutesNum > 10 && minutesNum < 20) { return declensions[2]; }
  if (minutesNum1 > 1 && minutesNum1 < 5) { return declensions[1]; }
  if (minutesNum1 === 1) { return declensions[0]; }
  return declensions[2];
}

  let hoursText = 'часов';
  let minutesText = 'минут';
  let secondsText = 'секунд';

  time1.innerHTML = `Сегодня 
  ${week[now.getDay()]}, 
  ${now.getDate()} 
  ${months[now.getUTCMonth()]}
  ${now.getFullYear()} года, 
  ${nowTime.slice(0,2)} 
  ${hoursText} 
  ${nowTime.slice(3,5)} 
  ${declesionsOfMinutes(minutesNum, declensions)} 
  ${nowTime.slice(6,8)}
  ${secondsText}`;
}

dateOutput1();

function dateOutput2() {
  time2.innerHTML = (`${now.toLocaleDateString()} - ${nowTime}`);
}

dateOutput2();





