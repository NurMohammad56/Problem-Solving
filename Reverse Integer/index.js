function reverse(x) {
  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  const sign = x < 0 ? -1 : 1;

  let reversed =
    parseInt(Math.abs(x).toString().split("").reverse().join("")) * sign;

  if (reversed < INT_MIN || reversed > INT_MAX) {
    return 0;
  }
  return reversed;
}

let x = 123;
console.log(reverse(x));
