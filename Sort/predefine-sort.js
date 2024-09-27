const arr =[1,2,3,4,5,8,7,0];
console.log(arr.sort((a,b)=>a-b));

function countGreaterSmaller(rating) {
    const leftGr = [];
    const leftSm = [];

    // Iterate over each element in the array
    for (let i = 0; i < rating.length; i++) {
        let countGr = 0; // Count of elements greater than rating[i] on the left
        let countSm = 0; // Count of elements smaller than rating[i] on the left

        // Compare current element with all previous elements
        for (let j = 0; j < i; j++) {
            if (rating[j] > rating[i]) countGr++;
            if (rating[j] < rating[i]) countSm++;
        }

        // Store the counts in the arrays
        leftGr.push(countGr);
        leftSm.push(countSm);
    }

    // Return the counts
    return {
        greaterCounts: leftGr,
        smallerCounts: leftSm
    };
}

// Example usage
const rating = [2,5,3,4,1];
const result = countGreaterSmaller(rating);

console.log('Counts of greater elements on the left:', result.greaterCounts);
console.log('Counts of smaller elements on the left:', result.smallerCounts);
