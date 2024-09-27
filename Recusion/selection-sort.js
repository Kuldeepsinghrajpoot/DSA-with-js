const selectionSort = (arr, i = 0) => {
    if(i===arr.length){
        return arr;
    }
    let index = i;
    for(let j = i+1; j<arr.length; j++){
        if(arr[j]<arr[index]){
            index = j;
        }
    }
    
    if(index !== i){
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
    return selectionSort(arr, i+1);
}

console.log(selectionSort([19,24,13,41,85,28,67,20])); // [0, 1, 2, 3, 4, 5, 7, 8]