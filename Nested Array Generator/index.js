function* inorderTraversal(arr) {
    for (const element of arr) {
        if (Array.isArray(element)) {
            // Recursively call inorderTraversal for sub-arrays
            yield* inorderTraversal(element);
        } else {
            // Yield the integer values
            yield element;
        }
    }
}

// Example usage:
const arr = [[[6]], [1, 3], []];
const generator = inorderTraversal(arr);

console.log(generator.next().value); // Output: 6
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 3
console.log(generator.next().done);  // Output: true
