function maxGoodNumber(num) {
  function getPermutations(arr) {
    if (arr.length === 0) return [[]];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let currentNum = arr[i];
      let remainingNums = arr.slice(0, i).concat(arr.slice(i + 1));
      let remainingPermutations = getPermutations(remainingNums);
      for (let perm of remainingPermutations) {
        result.push([currentNum].concat(perm));
      }
    }
    return result;
  }

  // Convert number to its binary string
  function toBinaryString(num) {
    return num.toString(2);
  }

  // Get all permutations of the input array
  let permutations = getPermutations(num);
  let maxNumber = 0;

  // For each permutation, concatenate the binary strings and compute the value
  for (let perm of permutations) {
    let binaryConcatenation = perm.map(toBinaryString).join("");
    let numValue = parseInt(binaryConcatenation, 2); // Convert binary string to integer
    maxNumber = Math.max(maxNumber, numValue);
  }

  return maxNumber;
}

console.log(maxGoodNumber([2, 8, 16]));
