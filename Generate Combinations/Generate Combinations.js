function generateCombinations(str) {
  const result = [];
  const combinations = (prefix, str) => {
    for (let i = 0; i < str.length; i++) {
      result.push(prefix + str[i]);
      combinations(prefix + str[i], str.slice(i + 1));
    }
  };
  combinations("", str);
  return result;
}

console.log(generateCombinations("abc")); // Outputs: ['a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']
