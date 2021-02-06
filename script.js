'use strict';
let date = new Date();
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресение'];

week.forEach(function(item) {
  if (item  === 'Суббота' || item === 'Воскресение') {
    item = item.italics();
  }
  if (item === week[date.getDay() - 1]) {
    item = item.bold();
  }
  document.write(item + '<br></br>');

});

