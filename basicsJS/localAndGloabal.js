// // let a = 10;
// // const b = 20

// // if(true){
// //     let a = 100
// //     const b = 200
// // console.log("Loval variable example");
// //     console.log(a);
// //     console.log(b);
// // }

// // console.log("global variable example");
// // console.log(a);
// // console.log(b);

// //// we are able to access the data of parent function from child function but we cann't
// function parent(){
//     const name = "Anish Shrestha"

//     function child(){
//         const address = "Pharping, Kathmandu"

//         console.log(name)
//     }

//     // console.log(address);
//     child();
// }
// parent();

if(true){
    const username = "Anish Shrestha"
    if (username === "Anish Shrestha") {
        const website = " has webseite called gCoins."
        // console.log(username + website);
    }
}
const addTwo = function(num){
    return num + 1
}
addTwo(5)

// console.log(addTwo(19))