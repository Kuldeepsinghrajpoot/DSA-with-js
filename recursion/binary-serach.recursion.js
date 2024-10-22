function binarySearch(arr, start, end, key) {
    if (start > end) {
        return false;
    }

    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === key) {
        return true;
    } else if (arr[mid] > key) {
        return binarySearch(arr, start, mid - 1, key);
    } else {
        return binarySearch(arr, mid + 1, end, key);
    }
}

// Generate array from 1 to 1000
const arr = Array.from({ length: 1000 }, (_, i) => i + 1);
const key = 1000;

const ans = binarySearch(arr, 0, arr.length - 1, key);
console.log(ans);
