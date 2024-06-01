const blabla = ["Anish", "Anup", "susmit", "nishan"]


blabla.forEach( function(kXa){
// console.log(kXa);
} )

blabla.forEach(items => {
    // console.log(items)
});

function printMe(val){
// console.log(val);
}

blabla.forEach(printMe)

blabla.forEach( (item, index,  len)=>{
    // console.log(item, index, len)
})

const detail = [
    {
        name: "Anish Shrestha",
        address: "Pharping"
    },
    {
        name: "Anup Maharjan",
        address: "Kritipur"
    },
    {
        name: "Susmit chaudhary",
        address: "satdobato"
    }
]

detail.forEach( (details)=>{
console.log(details);
} )