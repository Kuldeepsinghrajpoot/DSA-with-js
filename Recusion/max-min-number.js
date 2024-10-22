function maxMin(arr, index = 0, min = Number.POSITIVE_INFINITY, max = Number.NEGATIVE_INFINITY) {
    if (index >= arr.length) {
        return { min, max };
    }

    if (arr[index] < min) {
        min = arr[index];
    }

    if (arr[index] > max) {
        max = arr[index];
    }

    return maxMin(arr, index + 1, min, max);
}

const ans = maxMin([1, 2, 3, 4, 5, 6, 7]);
console.log(ans); // { min: 1, max: 7 }
