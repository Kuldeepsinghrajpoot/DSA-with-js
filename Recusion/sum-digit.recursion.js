// function sumDigitRecursion(n){
//     if (n<=0) {
//         return 0;
//     }
//     return Number(n.toString().slice(0,1))+Number(sumDigitRecursion(n.toString().slice(1)))
// }

console.log(sumDigitRecursion(12345));

//tood: second way to solve this issues
function sumDigitRecursion(n) {
    if (n <= 0) {
        return 0;
    }
    let sum = n % 10;
    n = Math.floor(n / 10);
    sum += sumDigitRecursion(n);
    return sum;
}
