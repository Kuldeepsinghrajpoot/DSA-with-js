function print(arr){
    // printing the elements of the array

    if(arr.length===0){
        return '';
    }

    return arr[0]+','+print(arr.slice(1))
}

console.log(print([1,2,3,4,5,6,7]))