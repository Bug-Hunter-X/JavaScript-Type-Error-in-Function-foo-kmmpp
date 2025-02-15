function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (typeof x !== 'number') {
    return NaN; // Handle non-numeric input gracefully
  }
  return x + 1; // Original code
}

console.log(foo(null)); // Output: 0
console.log(foo(5)); // Output: 6
console.log(foo('hello')); // Output: NaN