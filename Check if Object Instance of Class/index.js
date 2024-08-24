function checkIfInstanceOf(obj, className) {
  // Check undefined or null
  if (obj == null || typeof className !== "function") {
    return false;
  }

  // Use the instanceof operator
  return obj instanceof className;
}

const func = () => checkIfInstanceOf(new Date(), Date);
console.log(func());
