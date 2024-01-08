const prompt = require('prompt-sync')();
let num = prompt("Enter the number: ")
let number = parseInt(num)
let sum=0;
do {
sum = sum + number
number--
}
while(number>=1);
console.log("The sum is "+sum)