'use strict';
let time1 = document.querySelector('.time1');
let time2 = document.querySelector('.time2');
let now = new Date();
let nowTime = now.toLocaleTimeString();

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

let declensionsMinutes = ['минута','минуты','минут'];
let declensionsSeconds = ['секунда','секунды','секунд'];
let declensionsHours = ['час','часа','часов'];

function dateOutput1() {
  let minutesNum = nowTime.slice(3,5);
  let secondNum = nowTime.slice(6,8);
  let hoursNum = nowTime.slice(0,2);
  
  function declesionsOfMinutes(minutesNum, declensionsMinutes) {
  minutesNum = Math.abs(minutesNum) % 100; 
  let minutesNum1 = minutesNum % 10;
  if (minutesNum > 10 && minutesNum < 20) { return declensionsMinutes[2]; }
  if (minutesNum1 > 1 && minutesNum1 < 5) { return declensionsMinutes[1]; }
  if (minutesNum1 === 1) { return declensionsMinutes[0]; }
  return declensionsMinutes[2];
  }
  function declensionOfSeconds(secondNum, declensionsSeconds) {
    minutesNum = Math.abs(secondNum) % 100; 
    let secondNum1 = secondNum % 10;
    if (secondNum > 10 && secondNum < 20) { return declensionsSeconds[2]; }
    if (secondNum1 > 1 && secondNum1 < 5) { return declensionsSeconds[1]; }
    if (secondNum1 === 1) { return declensionsSeconds[0]; }
    return declensionsSeconds[2];
  }
  function declensionsOfHours(hoursNum, declensionsHours) {
    hoursNum = Math.abs(hoursNum) % 100; 
    let hoursNum1 = hoursNum % 10;
    if (hoursNum > 10 && hoursNum < 20) { return declensionsHours[2]; }
    if (hoursNum1 > 1 && hoursNum1 < 5) { return declensionsHours[1]; }
    if (hoursNum1 === 1) { return declensionsHours[0]; }
    return declensionsHours[2];
  }

  time1.innerHTML = `Сегодня 
  ${week[now.getDay()]}, 
  ${now.getDate()} 
  ${months[now.getUTCMonth()]}
  ${now.getFullYear()} года, 
  ${hoursNum} 
  ${declensionsOfHours(hoursNum, declensionsHours)} 
  ${minutesNum} 
  ${declesionsOfMinutes(minutesNum, declensionsMinutes)} 
  ${secondNum}
  ${declensionOfSeconds(secondNum, declensionsSeconds)}`;

  setInterval(dateOutput1, 1000);
}

dateOutput1();

function dateOutput2() {
  time2.innerHTML = (`${now.toLocaleDateString()} - ${nowTime}`);
  setInterval(dateOutput2, 1000);
}

dateOutput2();





