//  can sum

// function canSum(targetSum, arr) {
//     if (targetSum === 0) return true;
//     if (targetSum < 0) return false;

//     for(let num of arr){
//         let reminder = targetSum - num;

//         if(canSum(reminder,arr)===true){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(canSum(7,[4,3,7,18]))
// console.log(canSum(300,[4,3,7,18]))

// improve the code with memoization..

function canSum(targetSum, arr, memo = {}) {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    if (targetSum in memo) return memo[targetSum]

    for (let num of arr) {
        let reminder = targetSum - num;

        if (canSum(reminder, arr) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}
console.log(canSum(7, [4, 3, 7, 18]))
console.log(canSum(300, [4, 3, 7, 18]))