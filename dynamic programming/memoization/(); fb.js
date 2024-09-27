// fabonaci number

function fb2(n){
    if(n<=2) return 1;
    return fb2(n-1)+fb2(n-2);
}

// console.log(fb2(5))

// seocnd way to solve this problem
// here using the memoization technique


function fb(n,memo={}){
    if(n in memo) return memo[n];

    if(n<=2) return 1;

     memo[n] = fb(n-1, memo)+ fb(n-2,memo);
    return memo[n];
}

console.log(fb(300))
// todo: without memo
function fib(n) {
    const dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

console.log(fib(300))



