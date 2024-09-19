// Write a function that takes two numbers as arguments and returns their sum.

function sum (a, b){
    return a + b
}

// console.log(sum(10, 11))

// create a function that checks whether given number is even or odd

function oddEventChecker (c){
    if(c%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
// oddEventChecker(17)
// oddEventChecker(18)

// write a function that reverse given string 

let name1 = "Anish Shrestha"

name1 = name1.split("").reverse().join("")
// console.log(name1)

// Write a program that prints all the numbers from 1 to 100,
//  but for multiples of 3 print "Fizz" instead of the number and for 
//  multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// n = 0
for(i = 1; i <= 100; i++){
if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz")
}
else if(i % 3 == 0 ){
    console.log("Fizz")
}else if(i % 5 == 0){
    console.log("Buzz")
}else{
    console.log(i)
}
}