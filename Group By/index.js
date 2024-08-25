Array.prototype.groupBy = function (fn) {
  return this.reduce((result, item) => {
    const key = fn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
};

// Example usage:
const array = [{ id: "1" }, { id: "1" }, { id: "2" }];

const grouped = array.groupBy(function (item) {
  return item.id;
});

console.log(grouped);
