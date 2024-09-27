const construct = (target, wordBank, memo={}) => {
if(target in memo ) return memo[target]
    if (target === '') return true;
    for (let word of wordBank) {

        if (target.startsWith(word)) {

            const suffices = target.slice(word.length);

            if (construct(suffices, wordBank,memo) === true) {
               memo[target]= true;
                return true;
            }
        }
    }

   memo[target]= true;
    return false;
}

console.log(construct('hellooooooooooooooooooooooooooooooooooooollllllllllllllllllllllllllllllllllllllloooooooooooooooooooooooooooooooooo', ['he', 'l', 'wo', 'lo','o']))
