const facebook = {}

facebook.userrName = "Anish Shrestha";
facebook.password = "hakkabakka1234";
facebook.isLoggedIn = true

console.log(facebook)

const username = {
    userID: 121221,
    userDetails:{
        
        fullName1:{
            firstName: "Anish",
            lastName: "Shrestha"
        }
    }
}

// console.log(username.userDetails.fullName?.firstName)

const obj1 = {
    name:  "Anish Shrestha",
    address: "kathmandu"
}
const obj2 = {
    name1: "Anup Maharjan",
    address1: "kritipur"
}
const obj4 = {
    name2: "Nabina Dhahal",
    address2:"Phaaarping"
}
// ASSIGN : copy the values of all of the enumerable own
// properties from one or more source objects to a target object. Returns the target object.
//Object.assign(target, source)
// assign le source ma vako element lai target ma rakhi dinxa
const obj3 = Object.assign({}, obj1,obj2,obj4)
console.log(obj3);

const obj5 = {...obj1, ...obj2, ...obj4}
console.log(obj5)
console.log(facebook)

//.keys le keys(functionName) ma vako keys kk xa herna help garxa
//. values le values herna help garxa
console.log(Object.keys(facebook));
console.log(Object.values(facebook));