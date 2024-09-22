function romanToInt(s) {
  // Define an object to store the Roman numeral values
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let prevValue = 0;

  for (let i = 0; i < s.length; i++) {
    let currValue = romanValues[s[i]];

    if (prevValue < currValue) {
      total += currValue - 2 * prevValue;
    } else {
      total += currValue;
    }

    prevValue = currValue;
  }

  return total;
}

// Example usage:
console.log(romanToInt("III"));
