// Thruthy

const userEmail = "h@hitesh.ai"

// if (userEmail) {
//     console.log("Got User Email");
// } else {
//     console.log("Don't have user email")
// }

// Falsy Values --> false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// Thruthy Values --> true , 1 , [] , "0" , 'false , " " , {} , function(){} 

// const userEmail1 = []
// if (userEmail1.length === 0) {
//     console.log("Array is empty")
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty")
// }

// In Console

// console.log(false == 0)
// console.log(false == '')
// console.log(0 == '')
// console.log(0 == false)


//  Nullish Coalescing Operator (??) : null undefined --> This is basic operator used to check certain conditon in our function

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 11
val1 = undefined ?? null

// console.log(val1)
 
// Ternary Operator (?) 

// condition ? true 

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")


