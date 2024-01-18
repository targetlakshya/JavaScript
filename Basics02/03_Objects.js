// Singleton 
// Object.create

// Object Literals

const mySym = Symbol("Key1")


const JsUser = {
    name : "Hitesh",
    "Full Name" : "Hitesh Chaudhary",
    [mySym] : "myKey1",
    age: 18,
    locationL: "Bhopal",
    email: "lakshya@google.com",
    isLoggedIn: false,
    latLogindays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["age"]); 
// console.log(JsUser["Full Name"]); 
// console.log(JsUser[mySym]);

JsUser.email = "lakshya@goggle.in"

JsUser.locationL = "Indore"
// Object.freeze(JsUser)
JsUser.locationL = "Bhilai"
// console.log(JsUser.locationL)
// console.log(JsUser);

// Function

JsUser.greeting = function() {
    console.log(("Hello Js User"));
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}
JsUser.sayGoodBye = ()=>"Good bye JS user";

console.log(JsUser.greeting())
console.log(JsUser.greeting2())
console.log(JsUser.sayGoodBye())
// console.log(JsUser)
