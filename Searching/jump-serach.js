function jumpSearch(arr, key) {
    let n = arr.length;
    if (n === 0) {
        return -1;  // Array is empty
    }

    let step = Math.floor(Math.sqrt(n));
    let prev = 0;
 0
    // Finding the block where the element may be present
    while (arr[Math.min(step, n) - 1] < key) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) {
            return -1;  // Key is not present in the array
        }
    }

    // Performing a linear search within the block
    while (arr[prev] < key) {
        prev++;
        if (prev === Math.min(step, n)) {
            return -1;  // Reached the end of the block and key is not present
        }
    }

    // If the element is found
    if (arr[prev] === key) {
        return prev;
    }

    return -1;  // Element is not found
}
