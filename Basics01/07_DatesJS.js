// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myCreatedDate = new Date(2024,0,14)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// time

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));

