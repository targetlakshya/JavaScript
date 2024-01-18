const marvelHeros = ["Thor","Ironman","SpiderMan"]
const DcHeros = ["Superman","Flash","Batman"]

// marvelHeros.push(DcHeros)

// console.log(marvelHeros);

// marvelHeros.concat(DcHeros)
// console.log(marvelHeros);


const AllHeros = marvelHeros.concat(DcHeros)
console.log(AllHeros);

const all_new_heros = [...DcHeros,...marvelHeros] // ... is a Spread Operator

console.log(all_new_heros);
const another_Array = [1,2,3,[4,5,6],7,[6,7[4,5]]]

const myArray = another_Array.flat(Infinity)
console.log(myArray);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h']
console.log(Array.from({name: "Lakshya"})) // Interesting --> []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));






