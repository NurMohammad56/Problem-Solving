function reduceArray(nums, fn, init) {
  let result = init;

  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }

  return result;
}

let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) {
  return accum + curr;
};
let init = 0;

console.log(reduceArray(nums, fn, init));
