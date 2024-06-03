/*
Write a function that reverses
 a string. The input string is
  given as an array of characters s.

You must do this by modifying
 the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left++;
    right--;
  }
}

let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);
