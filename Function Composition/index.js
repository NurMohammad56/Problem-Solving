function compose(functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];

const composedFunction = compose(functions);
const result = composedFunction(4);
console.log(result);
