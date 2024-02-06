class User{
    constructor(username) {
        this.username = username
    }

    logME() {
        console.log(`Username : ${this.username}`);
    }

    static createID() {
        return `123`
    }
}

const lakshya = new User("lakshya")
// console.log(lakshya.createID())

class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone",'i@phone.com')
iPhone.logME()

console.log(iPhone.createID())