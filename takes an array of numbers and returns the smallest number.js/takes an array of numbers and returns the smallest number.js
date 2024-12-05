function findSmallestNumber(arr) {
  return Math.min(...arr);
}

let numbersArray = [10, 5, 8, 1, 7];
let smallestNumber = findSmallestNumber(numbersArray);

console.log(smallestNumber);
