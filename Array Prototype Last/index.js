Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  return this[this.length - 1];
};

let nums = [null, {}, 3];
console.log(nums.last());
