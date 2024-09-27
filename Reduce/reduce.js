const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, curr) => acc + curr,0);
console.log(sum); // 15

// todo: taking the last parameter as 0 is optional, it is the initial value of the accumulator