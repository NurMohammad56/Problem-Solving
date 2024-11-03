function findMissingNumber(arr, n) {
  const sum = (n * (n + 1)) / 2;
  return sum - arr.reduce((acc, num) => acc + num, 0);
}
console.log(findMissingNumber([1, 2, 4, 5, 6], 6));
