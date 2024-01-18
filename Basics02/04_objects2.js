const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName : 
    {
        userFullName : {
            firstName : "Lakshya",
            lastName : "Borasi"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3= {obj1,obj2}  --> Wrong way
const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3);

const obj4 = {...obj1,...obj2}
// console.log(obj4);

const users = [
    { 
        id: 1,
    email: "h@gmail.com",
    }
    
]

// users[1].email

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isloggedIn'))


const course = {
    coursename : "Js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor} = course
const {courseInstructor : instructor} = course

console.log(instructor)


// {
//     name: "hitesh",
//     couseName: "Js In hindi",
//     price: "free"
// }

