function bucketSort(array) {
    const n = array.length;
    const buckets = new Array(n).fill(0).map(() => []);
    for (let i = 0; i < n; i++) {
        const index = Math.floor(n * array[i]);
        buckets[index].push(array[i]);
    }
    for (let i = 0; i < n; i++) {
        buckets[i].sort((a, b) => a - b);
    }
    return buckets.flat();
}

console.log(bucketSort([0.1, 0.5, 0.3, 0.2, 0.4])); // [0.1, 0.2, 0.3, 0.4, 0.5]

// bottom of these three line of conversion of binary to decimal and decimal to binary
const values = 10;
console.log(values.toString(2)); // 1010
console.log(parseInt(11, 10)); // 0