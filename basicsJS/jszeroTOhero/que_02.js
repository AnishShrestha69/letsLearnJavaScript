// Write a function that takes an array of numbers and returns the largest number.
function findLargestNumber(arr){
    if (arr.length === 0) {
        return null
    }
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if( arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest;
}
console.log(findLargestNumber([10,22,55,2,21,11]))