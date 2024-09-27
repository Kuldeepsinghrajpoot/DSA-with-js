function maxPossibleValue(arr) {
    arr.sort((a, b) => a - b);  // Sort the array in ascending order
    arr[0] = 1;  // Set the first element to 1

    console.log('before loop', arr)

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1] + 1) {
            arr[i] = arr[i - 1] + 1;  // Decrease the element to satisfy the condition
        }
    }
    console.log('after loop', arr)

    return arr[arr.length - 1];  // Return the last element which is the maximum possible value
}

// Example
const arr = [2,2,1,2,5];
console.log(maxPossibleValue(arr));  // Output: 4
