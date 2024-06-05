/*
Given an array of integers nums and
 an integer target, return indices of
  the two numbers such that they add up to target.

You may assume that each input would
 have exactly one solution, and you may
  not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
function twoSum(nums, target) {
  const numToIndex = {};

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];

    const complement = target - num;
    if (numToIndex.hasOwnProperty(complement)) {
      return [numToIndex[complement], index];
    }

    numToIndex[num] = index;
  }
}

const nums = [5, 10, 3, 2, 10];
const target = 20;
console.log(twoSum(nums, target));
