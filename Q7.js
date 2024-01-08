const prompt = require('prompt-sync')();
let temperature = prompt("Enter the temperature(in celcius): ")
let result = (temperature>=30)? "Hot" : "Moderate"
console.log(result)