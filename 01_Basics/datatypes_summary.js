// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100; 
const scoreValue = 100.3

const isLoggedIn = false // boolean
const outsideTemp = null // object
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id === anotherId);


const bigNumber = 8451695654687459845n
console.log(typeof bigNumber); // BigInt


// Reference type (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", 'naagraj', "doga"]

let myObj = {
    name : "hitesh",
    age : 23,
}

const myFunction = function () {
    console.log("hello World!");
}

// ++++++++++++++++++++++++++++++++++++++++++++++++ Memory +++++++++++++++++++++

// Stack(Primitive) , Heap (Non Primitive)

let myYoutubeName = "lakshyaBorasi"
let anotherName =  myYoutubeName
anotherName =  "ChaiaurCode";

console.log(myYoutubeName);
console.log(anotherName);

let user = {
    email : "lakshya@google.com",
    upi : "lakshya@oksbi"
}

let user2 = user;
user2.email = "hitesh@google.com"

console.log(user.email);