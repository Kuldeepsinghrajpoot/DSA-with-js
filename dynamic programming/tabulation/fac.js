function factorail(n){

    let dp = Array(n+1).fill(1);
   
    for(let i=2;i<=n;i++){
        dp[i]=dp[i-1]*i;
    }
    return dp[n]
}

console.log(factorail(30))