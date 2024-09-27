function howSum(target, numbers) {
  let dp = Array(target + 1).fill(null);

  dp[0] = [];

  for (let i = 0; i <= target; i++) {
    if (dp[i] !== null) {
        for(let num of numbers){
            dp[i+num] = [...dp[i],num];
        }
    }
  }

  return dp[target];
}

console.log(howSum(7,[4,3,7]))
