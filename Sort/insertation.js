function insertationSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && current < arr[j]) {
            arr[j + 1] = arr[j];
            // todo: here new index is created via j+1 and put the current value in it and then decrement the j
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

let arr = [5, 3, 1, 2, 4];
arr[1] = 31
console.log(arr)

// console.log(insertationSort([5, 3, 1, 2, 4])); // [1, 2, 3, 4, 5]