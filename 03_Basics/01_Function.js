// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");   
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()


// function addTwoNumbers(n1,n2) {
//     console.log(n1 + n2)
// }

// addTwoNumbers(2,true)

function addTwoNumbers(n1,n2) {
//    let result = n1 + n2;
//    return result
    return n1 + n2;
}

const result = addTwoNumbers(3,5)
// console.log("Result:", result)

function loginUserMessage(username) {
    if (username === undefined) {
        // console.log("Please enter a Username");
        return
    }
    // return `${username} just logged in`
}

console.log(loginUserMessage("Lakshya"))

function calculateCartPrice(...num1) {  // ... rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username : "Lakshya",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "Sam",
    priceL: 399
})

const myArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[2]
}

console.log(returnSecondValue(myArray))











