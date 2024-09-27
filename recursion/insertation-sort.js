function insertationSort(arr) {
    if (arr.length === 0) {
        return [];
    }

    let current = arr[0];
    let left = arr.slice(1);
    let sortedLeft = insertationSort(left);
    let i = 0;
    while (i < sortedLeft.length && current > sortedLeft[i]) {
        i++;
    }
    return [...sortedLeft.slice(0, i), current, ...sortedLeft.slice(i)];
} 

console.log(insertationSort([19,24,13,41,85,28,67,20])); // [0, 1, 2, 3, 4, 5, 7, 8]
