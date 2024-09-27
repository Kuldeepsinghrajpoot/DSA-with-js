// todo : linear searching techniques

function LinearSearch(arr,key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
           return {index :i, value: arr[i]};
        }
    }
}
console.log(LinearSearch([1, 2, 3, 4, 5], 3)); // 2