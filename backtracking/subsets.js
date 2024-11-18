// subset of the given number or string

function subset(nums) {
    // define the two array
    let result = [];
    let temp = [];

    function recursionSubsets(nums, i) {
        if (i === nums.length) {
            return result.push([...temp])
        }

        // do not need to return anythin becuse it not need to perform any task with the number
        // second case -> perform all case those are run via the calling functions

        temp.push(nums[i]);
        recursionSubsets(nums, i + 1);
        console.log(`befor the pop element->${i}, nums->${nums[i]}`)
        temp.pop();
        console.log(`befor the pop element->${temp.pop()}, nums->${nums[i]}`)


        recursionSubsets(nums, i + 1);
    }
    recursionSubsets(nums, 0);
    return result;
}

// calling the main function

const ans = subset([1, 2])
console.log(ans)