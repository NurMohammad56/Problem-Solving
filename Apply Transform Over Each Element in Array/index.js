function map(arr, fn) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i));
  }

  return newArray;
}

function plusOne(n) {
  return n + 1;
}

const arr = [1, 2, 3];
const newArray = map(arr, plusOne);
console.log(newArray);
