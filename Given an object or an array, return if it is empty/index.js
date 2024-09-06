function isEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  // Check if the input is an object
  else if (typeof obj === "object" && obj !== null) {
    return Object.keys(obj).length === 0;
  }
  return false;
}

console.log(isEmpty({ x: 5, y: 42 }));
console.log(isEmpty({}));
console.log(isEmpty([1, 2, 3]));
console.log(isEmpty([]));
