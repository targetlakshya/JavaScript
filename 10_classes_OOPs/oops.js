const user = {
    username : 'Lakshya',
    loginCount : 8,
    signedIN : true,

    getUserDetails: function(){
        // console.log(("Got user details from DataBase "));
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

//++++++++++ Constructor ++++++++++++++++

function User(username , loginCount,  isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = () => console.log(`Welcome ${this.username}`);

    return this
}

const userOne = User("Lakshya", "2", true)
const userTwo = new User("Chai Aur Code", 22, true)
console.log(userOne);
console.log(userTwo)

// "new" keyword is the constructor in JS, "this" can create a new empty of an object
// "new" create an call and constructor function, it pack all the arguments and give it to user
// now "this" keyword can store all the arguments
// all the objects display to user
