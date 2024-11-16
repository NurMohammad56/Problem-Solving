function longestUniqueSubstring(s) {
  let seen = new Map();
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < s.length; end++) {
    if (seen.has(s[end])) {
      start = Math.max(seen.get(s[end]) + 1, start);
    }
    seen.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb"));
