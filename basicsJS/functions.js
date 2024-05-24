// //function to add two numbers

// function addTwoNumber(a, b){
//     // console.log(a + b);
// }
// addTwoNumber(10,111)

// //another way

// function substractTwoNumner(c,d){
//     let e = c - d
//     return e;
// }
// const c = substractTwoNumner(20, 10);
// // console.log("result of C:"+ c)

// //another way of adding two number

// function addThreeNumber(f, g, h){
//    return f + g + h
// }
// // console.log(addThreeNumber(10,11,12));


// //rest parameter

// function calculateTwoNumber(...num1){
//     return num1
// }
// console.log(calculateTwoNumber(19,11,22,33,1));
// // Output: [ 19, 11, 22, 33, 1 ]

//function with object
// const loginDetail = {
//     logInTime: 12,
//     userName: "Anish Shrestha"
// }
// function facebookLoginDetail(loginParameter){
// console.log(`Mr. ${loginParameter.userName} has logged in facebook in ${loginParameter.logInTime}`);
// }
// facebookLoginDetail()

//function with array
const newArray = [10, 11, 12, 13, 14]

function functionsWithArray(getArray){
return getArray[1]
}
console.log(functionsWithArray(newArray));
console.log(functionsWithArray([8123,312,31]))