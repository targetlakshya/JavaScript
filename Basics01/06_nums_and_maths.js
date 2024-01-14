const score = 400

const balance = new Number(200.987)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.98765
// console.log(otherNumber.toPrecision(3));

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++

// console.log(Math.abs(-1));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.min(3,4,3,2,4,6,8,6,432,5,7,4,2,3));
// console.log(Math.max(3,4,3,2,4,6,8,6,432,5,7,4,2,3));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.round(Math.random()*10) + 1);

// TO generate random no b/w 10 and 20
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))
