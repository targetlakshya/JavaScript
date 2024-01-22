// var c = 300
let a = 300

// let a = 10
// const b = 20
// var c = 30

// {} // When the Curly Braces {} are 
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner", a)
}


// console.log(a);
// console.log(b);
// console.log(c); 

function one () {
    const username = "Hitesh"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "hitesh"
    if (username == "hitesh") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++ Intersting +++++++++++++++++++++++++++


// This is called Hoisting 

console.log(addone(5))
function addone(value) {
    return value + 1
}


const addTwo = function(num) {
    return num + 2 
}

console.log(addTwo(5))
