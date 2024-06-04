/*
Given a string s which consists
 of lowercase or uppercase letters,
  return the length of the longest
palindrome
 that can be built with those letters.

Letters are case sensitive, for
 example, "Aa" is not considered 
 a palindrome.
Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
*/
function longestPalindrome(s) {
  const charCount = {};
  let maxLength = 0;

  for (const char of s) {
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (let count of Object.values(charCount)) {
    maxLength += Math.floor(count / 2) * 2;
    if (maxLength % 2 === 0 && count % 2 === 1) {
      maxLength += 1;
    }
  }
  return maxLength;
}

const String = "aabbaa";
console.log(longestPalindrome(String));
