function isDivisibleBySumOfDigits(num) {
  let numStr = num.toString();
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    let digit = parseInt(numStr[i]);
    sum += Math.pow(digit, i + 1);
  }

  return sum % num === 0;
}

let num1 = 89;
let result1 = isDivisibleBySumOfDigits(num1);

let num2 = 92;
let result2 = isDivisibleBySumOfDigits(num2);
