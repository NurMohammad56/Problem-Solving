function permute(arr) {
  const result = [];

  const permuteRec = (curr, remaining) => {
    if (remaining.length === 0) {
      result.push(curr);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      permuteRec(
        curr.concat(remaining[i]),
        remaining.slice(0, i).concat(remaining.slice(i + 1))
      );
    }
  };

  permuteRec([], arr);
  return result;
}

console.log(permute([1, 2, 3]));
