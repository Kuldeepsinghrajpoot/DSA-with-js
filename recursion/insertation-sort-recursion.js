function insertionSort(arr, n) {
    // Base case: if n is less than 1, return the array
    if (n <= 0) return;
    insertionSort(arr, n - 1);

    // Insert the nth element in the sorted part of the array
    let current = arr[n];
    let j = n - 1;

    // Shift elements to the right to create the correct position for current
    while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = current;

    return arr;
}

let arr = [8, 1, 4, 6, 3, 7, 2, 9];
let ans = insertionSort(arr, arr.length - 1);
console.log(ans);
