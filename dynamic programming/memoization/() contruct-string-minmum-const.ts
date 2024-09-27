function minimumCost(target: string, words: string[], costs: number[]): number {

    if (target === '') return 0;
    // todo: sdfsfsdfs
    let minCost: number = Infinity;
    for (let word of words) {

        if (target.startsWith(word)) {
            const suff = target.slice(word.length);
            const result = minimumCost(suff, words, costs)
            if (result !== -1) {
                const wordIndex = words.indexOf(word);  // Find the index of the current word

                minCost = Math.min(minCost, costs[wordIndex] + result);  // Add current word's cost

            }
        }
    }
    return minCost === Infinity ? -1 : minCost;  // Return -1 if no valid solution found
};

const target = "abcdef";
const words = ["abdef", "abc", "d", "def", "ef"];
const costs = [100, 1, 1, 10, 5];
console.log(minimumCost(target, words, costs))