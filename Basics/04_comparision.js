// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 ==1);
// console.log(2 !=1);

// console.log("2" > 1);
// console.log("02" > 1);

/* Comparision makes you too Confuse */

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/* The reason is that an equality check "==" and Comaparisons "> < >= <="
work differently.
Comparieions convert null to a number, treating it as 0.
that's why (3) numm >= 0 is true (!) null > 0 is false */

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined <= 0);
// console.log(undefined >= 0);

// Strict Check "==="

console.log("2" === 2)
