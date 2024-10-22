function ternarySearch(arr, key,start=0, end=0) {
    // finding the two mid right now
    // first mid start should be added
    let mid1 = start + Math.floor((end-start) / 3);

    // second mid minius should be end
    let mid2 = end - Math.floor((end - start) / 3);

    // when found the result return the mid1 and mid2
    if (arr[mid1] === key) return mid1;
    if (arr[mid2] === key) return mid2;

    if (arr[mid1] > key) {
        // start = mid1 - 1;
        // returing the elements of the ternarySearch..

        return ternarySearch(arr, key,mid1-1, start);
    } else if (arr[mid2] < key) {
        // end = mid2 + 1;
        // returing the elements of the ternarySearch...
        return ternarySearch(arr, key,start, mid2 + 1);
    } else {
        // start = mid1 + 1;
        // end = mid2 - 1;
        ternarySearch(arr, key,mid1 + 1, start);
        ternarySearch(arr, key,start, mid2 - 1);
    }
}

console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // 5
