function flatten(arr, n) {
  function flattenHelper(currentArr, currentDepth) {
    if (currentDepth >= n) {
      return currentArr;
    }

    let flattened = [];

    for (let element of currentArr) {
      if (Array.isArray(element)) {
        flattened.push(...flattenHelper(element, currentDepth + 1));
      } else {
        flattened.push(element);
      }
    }

    return flattened;
  }

  return flattenHelper(arr, 0);
}

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 0;
console.log(flatten(arr, n));
