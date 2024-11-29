function getEvenSquares(arr) {
  let evenNumbers = arr.filter((num) => num % 2 === 0);

  let evenSquares = evenNumbers.map((num) => num * num);

  return evenSquares;
}

let originalArray = [1, 2, 3, 4, 5];
let resultArray = getEvenSquares(originalArray);

console.log(resultArray);
