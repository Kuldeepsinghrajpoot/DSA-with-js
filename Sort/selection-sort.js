function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
               [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
      
    } 
    return arr;
}

console.log(selectionSort([19,24,13,41,85,28,67,20])); // [0, 1, 2, 3, 4, 5, 7, 8]