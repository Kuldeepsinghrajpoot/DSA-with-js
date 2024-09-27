// target sum with given values

function targetSum(target, number) {
  const dp = Array(target + 1).fill(false);

  dp[0] = true;

  for (let i = 0; i < target; i++) {
    if (dp[i] === true) {
      for (let num of number) {
        dp[i + num] = true;
      }
    }
  }

  return dp[target];
}

console.log(targetSum(10,[4,0,3]))