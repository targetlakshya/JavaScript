
const map = new Map()
map.set('IN',"India")
map.set('US',"United States of America")
map.set('FR',"France")

// console.log(map)

for (const [key,value] of map) {
    console.log(key, ":-", value)
}
