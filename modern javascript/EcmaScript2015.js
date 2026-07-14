// QUESTION 1 : CALCULATOR FUNCTION passing with parameter

// const calculator = (num1, num2, oprtr) => {
//   //function calculator ( num1 , num2 , oprtr){}
//   let result;
//   switch (oprtr) {
//     case "+":
//       return num1 + num2;

//     case "-":
//       result = num1 - num2;
//       return result;
//     case "*":
//       return num1 * num2;

//     case "/":
//       return num1 / num2;

//     default:
//       return " no oprtr match ";
//   }
// };

// console.log(calculator(5, 3, "+"));

// console.log(calculator(5, 3, "-"));

// console.log(calculator(5, 3, "*"));

// console.log(calculator(5, 3, "/"));
// console.log(calculator(5, 3, ""));

//REVERSE STRING WITHOUT USING BUILT IN METHOD

const isReverse = (str) => {
  let reverse = "";
  for (let char = str.length - 1; char >= 0; char--) {
    reverse = reverse + str[char];
  }
  return reverse;
};

console.log(isReverse(" raja gupta"));

//QUESTION : CHECK PALINDROME

const isPalindrome = (str) => {
  let reverse = "";

  for (let char = str.length - 1; char >= 0; char--) {
    reverse = reverse + str[char];
  }

  //return reverse;
  //   if (str == reverse) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return str == reverse ? true : false;
};
console.log(isPalindrome("level"));
