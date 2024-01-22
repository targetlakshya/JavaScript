const user = {
    username : "Hitesh",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, Welcome to Website`)
        // console.log(this);
    }

}

// user.welcomeMessage()

// user.username = "Sam"
// user.welcomeMessage()

// console.log(this)


// THis keyword cannot perform any task inside the function
// function chai() {
//     let username = "Hitesh"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "Hitesh"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2;
// const addTwo = (num1, num2) =>  (num1 + num2);
const addTwo = (num1, num2) =>  ({username: "Hitesh"});

console.log(addTwo(2,3))


// const myArray = [2,3,4,5,5,6,7,8,3]

// myArray.forEach()
