 
const prompt =require("prompt-sync")();
const  operator = prompt("enter the operator (either + , - , *):")

const number1 =parseFloat(prompt("enter the first number  ")) 
const number2 = parseFloat(prompt("enter the second number  "))
 let result;


 //using if..elseif....else condition


 if(operator =='+'){
    result = number1+ number2;
 }
 else if(operator == '-'){
    result = number1 - number2 
}
else if( operator == '*'){
    result = number1 * number2;
}
else{
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);

