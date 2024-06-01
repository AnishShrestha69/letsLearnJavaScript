// const myNum = [1,2,3,4,5,6,7]

// const myTotal = myNum.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue
// }, 0)

// console.log(myTotal)

const myNum1 = [1,2,3,4,5,6,7]


const myTotal1= myNum1.reduce( (accumulator1, currentValue1) => {
    return accumulator1 + currentValue1
}, 0 )
// console.log(myTotal1);

const course = [
    {
    courseName: "Anish shrestha",
    coursePrice : 1900
    },
    {
    courseName: "Anish shrestha",
    coursePrice : 1900
    },
    {
    courseName: "Anish shrestha",
    coursePrice : 19000
    },
    {
    courseName: "Anish shrestha",
    coursePrice : 190067
    },
    {
    courseName: "Anish shrestha",
    coursePrice : 190053
    },
    {
    courseName: "Anish shrestha",
    coursePrice : 1900235
    },
    {
    courseName: "Anish shrestha",
    coursePrice : 1900235
    },
    {
    courseName: "Anish shrestha",
    coursePrice : 190023
    },
    {
    courseName: "Anish shrestha",
    coursePrice : 190025
    },
    {
    courseName: "Anish shrestha",
    coursePrice : 1900243
    }
]

const totalCost = course.reduce( (acc, courseItem) => (acc + courseItem.coursePrice), 0 )

console.log(totalCost);