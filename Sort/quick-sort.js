function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let stack = [];
    stack.push([0, arr.length - 1]);

    while (stack.length > 0) {
        let [start, end] = stack.pop();

        if (start >= end) {
            continue;
        }

        let pivotIndex = partition(arr, start, end);
        stack.push([start, pivotIndex - 1]);
        stack.push([pivotIndex + 1, end]);
    }

    return arr;
}

function partition(arr, start, end) {
    let pivot = arr[end];
    let i = start - 1;

    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
}

console.log(quickSort([19, 24, 13, 41, 85, 28, 67, 20])); // [13, 19, 20, 24, 28, 41, 67, 85]
