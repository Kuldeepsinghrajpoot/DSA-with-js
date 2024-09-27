function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid); // from 0 to mid-1
    let right = arr.slice(mid); // from mid to end, it will take the rest of the array
    return merge(mergeSort(left), mergeSort(right)); // merge the left and right array
}
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
// Example usage
const arr = [12, 11, 13, 5, 6];
console.log(mergeSort(arr)); // Output: [5, 6, 11, 12, 13]
