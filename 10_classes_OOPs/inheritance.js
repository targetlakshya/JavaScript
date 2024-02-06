class User{
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}
class Teacher extends User {
    constructor(username, email,password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new Course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", 'chai@teacher.com', '1234')

chai.addCourse()
const masalaChai = new User("Masala Chai")
// masalaChai.addCourse()
masalaChai.logMe()
// console.log(chai instanceof Teacher);
console.log(chai instanceof User);