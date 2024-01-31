const myNums = [1,2,3,4]

// const myTotals = myNums.reduce( (acc,curVal) => {
//     console.log(`acc: ${acc}, current value : ${curVal}`)    
//     return acc+curVal 
// }, 0)

const myTotals = myNums.reduce( (acc,curval) => acc + curval,0)
console.log(myTotals);


const shoppingCart = [
    {
        itemName : "Web Development",
        price : 5000
    },    
    {
        itemName : "data Science",
        price : 12999
    },    
    {
        itemName : "DSA with c++",
        price : 7000
    }
]

const total = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(total);





