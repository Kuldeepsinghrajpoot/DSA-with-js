function radixSort(arr) {
    // Helper function to perform radix sort on non-negative numbers
    function sortNonNegative(arr) {
        if (arr.length === 0) return arr;
        const maxNum = Math.max(...arr);
        let divisor = 1;
        while (maxNum / divisor >= 1) {
            let buckets = [...Array(10)].map(() => []);
            for (let num of arr) {
                buckets[Math.floor((num / divisor) % 10)].push(num);
            }
            arr = [].concat(...buckets);
            divisor *= 10;
        }
        return arr;
    }

    // Separate negative and positive numbers
    const negatives = arr.filter(num => num < 0);
    const positives = arr.filter(num => num >= 0);

    // Sort negatives and positives separately
    const sortedNegatives = sortNonNegative(negatives.map(num => -num)).map(num => -num).reverse();
    // here working with the negative numbers to convert the positive numbers after sorting then put the nagiative sign and rever to the negative values to the reverse order right now the positive numbers are sorted
    const sortedPositives = sortNonNegative(positives);

    // Combine the results
    return [...sortedNegatives, ...sortedPositives];
}

console.log(radixSort([3, 10, 4, 20, 8, -1, -5, -10, 96, 0])); // [-10, -5, -1, 3, 4, 8, 10, 20]
