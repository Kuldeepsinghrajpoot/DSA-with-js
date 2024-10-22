function selectionSort(arr, n) {
    // Base case: when n is 1 or less, the array is sorted
    if (n <= 1) return arr;

    // Find the index of the maximum element in the first n elements
    let maxIndex = 0;
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }

    // Swap the maximum element with the last element of the current subarray
    [arr[maxIndex], arr[n - 1]] = [arr[n - 1], arr[maxIndex]];

    // Recursively sort the first n-1 elements
     selectionSort(arr, n - 1);
     return arr;
}

let ans = [8, 4, 6, 2, 17, 19, 1];
let n = ans.length;
console.log(selectionSort(ans, n));
