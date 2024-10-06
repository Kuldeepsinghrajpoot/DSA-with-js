// method one of the following code
function fib(num) {
  if (num <= 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4));
//  method 2 of the following code
function fibonacci(n) {
  if (n <= 1) {
    console.log("help-->", n);
    return n;
  } // Base case
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

console.log(fibonacci(7));
