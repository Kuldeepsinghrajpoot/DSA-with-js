function constructCount(target, wordBank,memo={}) {
    // todo: this file is not working
if(target in memo) return memo[target]
    if (target === '') return 1;
    let counter = 0;
    for (let word of wordBank) {
        if (target.startsWith(word)) {
            const prefix = target.slice(word.length);
            const numsWays = constructCount(prefix, wordBank,memo);
            counter += numsWays;
        }
    }
    memo[target] = target;
    return counter;
};
const word = ["acca","bbbb","caca"], targets = "aba"
console.log(constructCount(targets, word))