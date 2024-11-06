function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completed += 1;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });
  });
}

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
promiseAll([p1, p2, p3]).then(console.log);
