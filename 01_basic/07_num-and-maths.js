//+++++++++++++ Numbers +++++++++++++\\

const bankBalance = new Number(100);
// console.log(bankBalance);

// console.log(bankBalance.toString());
// console.log(bankBalance.toString().length);
// console.log(bankBalance.toFixed(2));

const num = 125.8966;
// console.log(num.toPrecision(4));

const balance = 1000000;
// console.log(balance.toLocaleString('en-PK'));

//+++++++++++++ Maths +++++++++++++\\

// console.log(Math);
// console.log(Math.abs(-20));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(25));
// console.log(Math.min(2,4,16,256));
// console.log(Math.max(2,4,16,256));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 35;
const max = 50;

console.log(Math.floor(Math.random() * (max - min) + min))