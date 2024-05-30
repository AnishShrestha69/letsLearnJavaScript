const arr = [1,2,3,4,5,6]
for(num of arr){
    // console.log(num)
}

const superHero = ["superman", "batman", "spiderman"]
for(hero of superHero){
    // console.log(hero);
}

// // maps


const map = new Map()

map.set('n', "Nepal")
map.set('K', "kathmandu")
map.set('p', "Pharping")


// for(const [key, value] of map){
//     // console.log(key, ":-", value);
// }
for(const key of map){
    console.log(key);
}
