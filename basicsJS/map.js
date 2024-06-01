num = [1,2,3,4,5]
newNum = num.map( (number) => number + 10 )
.map( (number) => number * 10 )
.map( (number) => number + 1)
.filter( number => number >= 130 )
console.log(newNum)