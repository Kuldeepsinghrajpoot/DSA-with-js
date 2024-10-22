function linearSearch(arr, key) {
    if (arr.length <= 0) {
        return false;
    }
    if (arr[0] === key) {
        return true;
    }
    return linearSearch(arr.slice(1),key)
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
let key = 11;

const result = linearSearch(arr, key);
console.log(result);
