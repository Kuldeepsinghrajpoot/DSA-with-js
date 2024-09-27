const allconstruct = (target, wordBank,memo={}) => {

    if(target in memo) return memo[target]
    const result = [];
    if (target === '') return [[]];

    for (let word of wordBank) {
        if (target.startsWith(word)) {
            const prefix = target.slice(word.length);

            const returnElemensts = allconstruct(prefix, wordBank,memo);
            const returnPrefix = returnElemensts.map((ways) => [word,...ways]);
            result.push(...returnPrefix);
        }
    }
    
    memo[target] = result
    return result;
    // todo: adfasffddddddddddd
}

console.log(allconstruct('hello',['hel','hell','lo','o']))
console.log(allconstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',['aaaaaaa','aaaa','aaaaaaaaaaaaa','a']))