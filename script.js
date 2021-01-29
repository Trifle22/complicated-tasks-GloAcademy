
let num = 266219;
let composition = 1;
num = String(num);

for (let i = 0; i< num.length; i++) {
  composition *= num[i];
};

composition = String(composition**3);

console.log(composition[0], composition[1]);
