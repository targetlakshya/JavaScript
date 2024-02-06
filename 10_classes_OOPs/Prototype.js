let myName = "Lakshya      "

// console.log(myName.trueLength());



let myHero = ["Thor", "SpiderMAn",]

let heroPower = {
    Thor : "hammer",
    spiderman : "Sling",

    getSpiderPower : function() {
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.lakshya = function() {
    console.log('Lakshya Is present is all objects');
}

Array.prototype.heyLakshya = function() {
    console.log("Hello Lakshya");
}

// heroPower.lakshya()

myHero.lakshya()
// heroPower.heyLakshyA) --> IT HAS NOT A POWER OF HEYLAKSHYA(), IT DOESN'T ACCESS  
myHero.heyLakshya()

// Inheritance

const user = {
    name : "Chai",
    email: "chai@google.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : teachingSupport 
}

teacher .__proto__ = user

// Modern Syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "ChaiaurCode       "

String.prototype.trueLength = function () {
    // console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
myName.trueLength()