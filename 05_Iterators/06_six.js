const coding = ['js','ruby','python','cpp']


// const values = coding.forEach( (items) => {
//     // console.log(items);
//     return items
// })

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4 )
// const newNums = myNums.filter( (num) => {
//     return num > 4 // If you want to return directly then dont use curly brackets but if you use curly brackets then you have to write return keyword
// } )

// const newNums = []
// myNums.forEach( (num) => {
//     if(num>4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const language = [
    { title : 'Javascript', languageType: 'Scripting', publish : 1995 },
    { title : 'Python', languageType: 'OOPs', publish : 1990 },
    { title : 'Java', languageType: 'OOPs', publish : 1995 },
    { title : 'C++', languageType: 'OOPs', publish : 1979 },
    { title : 'C', languageType: 'Function Oriented', publish : 1972 },
    { title : 'Dart', languageType: 'OOPs', publish : 2011 },
]

// let userLanguage = language.filter( (lang) => lang.publish === 1995)

userLanguage = language.filter( (lang) => lang.publish >= 1960 && lang.languageType === 'OOPs')
console.log(userLanguage);
