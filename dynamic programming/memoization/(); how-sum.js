const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum <= 0) return null;


    for (let nums of numbers) {
        const remainder = targetSum - nums;
        const remainderResult = howSum(remainder, numbers);
        if (remainderResult !== null) {
            return [nums, ...remainderResult];
        }
    }

    return null;
}

console.log(howSum(7, [3, 7, 2]))
// never return the larger number for the sum of the those numbers