function isBalanced(str) {
  const stack = [];
  const map = { "(": ")", "{": "}", "[": "]" };
  for (let char of str) {
    if (map[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (map[last] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("({[]})")); // Outputs: true
