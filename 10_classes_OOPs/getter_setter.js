class User {
    constructor(email,password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    
    set email(value) {
        return this._email = value
    } 
    get password() {
        return `${this._password.toUpperCase()}lakshya`
    }
    set password(value) {
        this._password = value
    }
}

const lakshya = new User("l@lakshya.ai", 'abc')
console.log(lakshya.password);
console.log(lakshya.email);

