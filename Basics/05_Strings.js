const name = "Lakshya"
const repoCount = 40

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my name is ${repoCount }`);

const gameName = new String("targetlakshya")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length); 
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(6)); 
console.log(gameName.indexOf('k')); 

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-9,5);
console.log(anotherString);

const newStringOne = "   Lakshya   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://lakshya.com/lakshya%20Borasi"
console.log(url.replace('%20','-'))

console.log(url.includes('lakshya'));

console.log(gameName.split('-'));