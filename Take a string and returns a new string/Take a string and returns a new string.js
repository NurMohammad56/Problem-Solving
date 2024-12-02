function doubleVowels(str) {
  // Define vowels
  const vowels = "aeiouAEIOU";

  let chars = str.split("");

  let result = chars.map((char) => {
    return vowels.includes(char) ? char + char : char;
  });

  return result.join("");
}

// Example usage
let originalString = "hello";
let resultString = doubleVowels(originalString);

console.log(resultString);
