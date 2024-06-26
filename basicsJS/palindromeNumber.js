function isPalindrome(number) {
const str = number.toString();

const reversedNumber = str.split('').reverse().join('');

return str === reversedNumber;

}

const number = 12321;

if(isPalindrome(number)){
    console.log("true");
}
else{
    console.log("false");
}