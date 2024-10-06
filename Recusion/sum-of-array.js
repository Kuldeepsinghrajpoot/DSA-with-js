function sumOfArray(arr) {
    if (arr.length===0) {
        return 1;
    }

    return arr+sumOfArray(arr.slice(arr.length));
}

console