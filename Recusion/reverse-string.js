function reverseString(arr) {
    if (arr.length === 0) {
        return '';
    }
    return arr[arr.length - 1].concat(reverseString(arr.slice(0, arr.length - 1)));

}
console.log(reverseString('hello')); // olleh