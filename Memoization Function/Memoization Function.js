function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const factorial = memoize((n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(5));
