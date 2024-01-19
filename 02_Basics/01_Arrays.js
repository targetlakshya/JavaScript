//  Arrays

const myArr = [0,1,2,3,4,5,6]

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[3]);


//  Arrays Methods

// myArr.push(7)
// myArr.push(8)
// myArr.pop() // remove krna

// myArr.unshift(9)  // aage value add krna
// myArr.shift()  //aage ki value ko add krna
// myArr.shift() 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // type change array to string

// console.log(myArr);
// console.log(newArr);

// Slice and Splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) 
console.log(myn2);
console.log("C ",myArr);


