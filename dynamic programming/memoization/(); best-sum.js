const bestSum = (target, number, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;


    let shortestCombination = null;

    for (let num of number) {
        const remanider = target - num;
        const remainderResult = bestSum(remanider, number, memo);

        if (remainderResult !== null) {
            const combination = [...remainderResult, num]

            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }

    }
    memo[target] = shortestCombination
    return shortestCombination;
}

console.log(bestSum(110, [2, 3, 25]))