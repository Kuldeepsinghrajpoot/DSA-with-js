function insertionSortRecursive(arr, n) {
    // Base case: If the array is empty or has only one element, return
    if (n <= 1) {
        return;
    }

    // Recursively sort the first n-1 elements
    insertionSortRecursive(arr, n - 1);
    
    // Insert the nth element into its correct position
    let last = arr[n - 1];
    let j = n - 2;

    // Shift elements of arr[0..n-2], that are greater than last, to one position ahead
    while (j >= 0 && arr[j] > last) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = last;
}

// Example usage
const arr = [12, 11, 13, 5, 6];
insertionSortRecursive(arr, arr.length);
console.log(arr); // Output: [5, 6, 11, 12, 13]
