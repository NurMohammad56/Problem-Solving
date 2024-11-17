function stringPermutations(str) {
  if (str.length <= 1) return [str];
  const permutations = [];
  const smallerPermutations = stringPermutations(str.slice(1));
  const firstChar = str[0];

  for (const smallerPermutation of smallerPermutations) {
    for (let i = 0; i <= smallerPermutation.length; i++) {
      const permutation =
        smallerPermutation.slice(0, i) +
        firstChar +
        smallerPermutation.slice(i);
      permutations.push(permutation);
    }
  }

  return permutations;
}

console.log(stringPermutations("abc"));
