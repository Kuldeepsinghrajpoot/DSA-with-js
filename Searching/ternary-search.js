function ternarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid1 = start + Math.floor((end - start) / 3);
        let mid2 = end - Math.floor((end - start) / 3);

        if (arr[mid1] === key) {
            // return the mid 1
            return mid1;
        }
        if (arr[mid2] === key) {
            // return the mid2
            return mid2;
        }
        if (arr[mid1] > key) {
            end = mid1 - 1;
        } else if (arr[mid2] < key) {
            start = mid2 + 1;
        } else {
            start = mid1 + 1;
            end = mid2 - 1;
        }
    }
    return -1;
}

console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // 5
