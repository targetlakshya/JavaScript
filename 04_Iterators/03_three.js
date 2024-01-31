//  For of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps
// maps are the unique values and the order is defined in map that order is same.

const map = new Map()
map.set('IN',"India")
map.set('US',"United States of America")
map.set('FR',"France")

// console.log(map)

for (const [key,value] of map) {
    console.log(key, ":-", value)
}
 
// const myObj = {
//     'Name' : 'Lakshya',
//     'Class' : 'Aiml'
// }

// for (const {key,value} of myObj) {
//     console.log(`${key} :- ${value}`);
// }






