function addArray(arr) {
  if (arr.length <= 0) {
    return 1;
  }

  return arr[0] * addArray(arr.slice(1));
}

// console.log(addArray([1, 2, 3]));
// let array= [1,2,3]
// let ans = 0;
// for (let i = 0; i < array.length; i++) {
//   ans += array[i];
// }

// console.log(ans)

// todo: working with the array and size of the array

function addArrayWithArraySize(arr,n){
    if(n===0) return 0;

    return arr[n-1]+addArrayWithArraySize(arr,n-1)
}

console.log(addArrayWithArraySize([1,2,3],3))