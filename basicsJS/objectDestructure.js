const userDetail = {
    userName: "Anish Shrestha",
    userAge: 19,
    userAddress: "Pharping"
}

//object lai destructure gareko
//
const {userAddress: addr, userAge:age, userName:nam} = userDetail;
console.log(addr)
console.log(age)
console.log(nam)
