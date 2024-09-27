// best sum form the array
function bestSum(target, numbers) {
  let dp = Array(target + 1).fill(null);

  dp[0] = [];

  for (let i = 0; i <= target; i++) {
    if (dp[i] !== null) {
      for (let num of numbers) {
        const combination = [...dp[i], num];
        if (!dp[i + num] || dp[i + num]?.length > combination.length) {
          dp[i + num] = combination;
        }
      }
    }
  }
  return dp[target];
}

console.log(bestSum(7, [4, 3, 7]));
