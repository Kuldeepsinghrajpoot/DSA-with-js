function quickSort(arr) {
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    if (arr.length < 2) {
        return arr;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}


console.log(quickSort([19,24,13,41,85,28,67,20])); // [13, 19, 20, 24, 28, 41, 67, 85]