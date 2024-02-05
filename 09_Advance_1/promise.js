const promiseOne = new Promise( function(resolve,reject) {
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function() {
        console.log("Async task is complete")
        resolve()
    },1000)
})


promiseOne.then(function() {
    console.log('Promise consume');
})

new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("Async Task2 is complete");
        resolve()
    },1000)
}).then(function() {
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function() {
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user) {
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username: "Lakshya", password: "q234"})
        } else {
            reject('ERROR : Something Went Wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("the promise os either resolve or rejected"))

const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username: "JavaScript", password: "JS"})
        } else {
            reject('ERROR : JS Went Wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

consumePromiseFive()

// Real Time practical

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch(error) {
//         console.log('E : ',error);
//     }
// }
// getAllUsers()

// .then().catch

fetch('https://api.github.com/users/targetlakshya')
.then((response) =>  {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
