'use strict';

let arr = [];

for (let i = 0; i < 7; i++) {
  arr.push(prompt('Введите многозначное число'));
}

for (let i = 0; i < arr.length; i++) {
  if ((arr[i][0] === '2' || arr[i][0] === '4') && (arr[i].length >= 2)) {
    console.log(arr[i]);
  }
}

function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <=max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num >= 1;
}

let primes = [];

function getPrimes(num) {
  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

getPrimes(100);

primes.forEach(item => {
  console.log(`${item}, делится на 1 и ${item}`);
});
