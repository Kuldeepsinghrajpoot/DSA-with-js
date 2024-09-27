function findEvenLengthBinarySequences(n) {
    const validSequences = [];

    // Helper function to generate all binary sequences of length 2n
    function generateSequences(prefix, length) {
        if (length === 2 * n) {
            const firstHalf = prefix.slice(0, n);
            const secondHalf = prefix.slice(n);

            const sumFirstHalf = firstHalf.reduce((a, b) => a + b, 0);
            const sumSecondHalf = secondHalf.reduce((a, b) => a + b, 0);

            if (sumFirstHalf === sumSecondHalf) {
                validSequences.push(prefix.join(''));
            }
        } else {
            generateSequences(prefix.concat(0), length + 1);
            generateSequences(prefix.concat(1), length + 1);
        }
    }

    generateSequences([], 0);

    return validSequences;
}

// Example usage for sequences of length 4 (n=2)
const n = 2;
const sequences = findEvenLengthBinarySequences(n);
console.log(sequences);
