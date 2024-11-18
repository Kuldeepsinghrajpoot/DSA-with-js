class Solution {
    /**
     * @param {number[][]} arr
     * @returns {string[]}
     */
    findPath(arr) {
        let ans = [];
        if (arr[0][0] === 0) return ans; // If starting point is blocked, return empty array

        const n = arr.length;

        // Visited array to track visited cells
        let visited = Array.from({ length: arr.length }, () =>
            Array.from({ length: arr[0].length }, () => 0)
        );

        let path = ""; // To store the current path
        let x = 0;
        let y = 0;

        // Start the helper function to find paths
        helper(arr, n, x, y, visited, path, ans);

        function helper(arr, n, x, y, visited, path, ans) {
            // Base case: if the destination is reached
            if (x === n - 1 && y === n - 1) {
                ans.push(path);
                return;
            }

            // Mark the current cell as visited
            visited[x][y] = 1;

            // Move Down
            let newX = x + 1;
            let newY = y;
            if (isSafe(newX, newY, n, visited, arr)) {

                helper(arr, n, newX, newY, visited, path + "D", ans);
            }

            // Move Left
            newX = x;
            newY = y - 1;
            if (isSafe(newX, newY, n, visited, arr)) {
                helper(arr, n, newX, newY, visited, path + "L", ans);
            }

            // Move Right
            newX = x;
            newY = y + 1;
            if (isSafe(newX, newY, n, visited, arr)) {
                helper(arr, n, newX, newY, visited, path + "R", ans);
            }

            // Move Up
            newX = x - 1;
            newY = y;
            if (isSafe(newX, newY, n, visited, arr)) {
                helper(arr, n, newX, newY, visited, path + "U", ans);
            }
            visited[x][y] = 0;

        }

        function isSafe(x, y, n, visited, arr) {
            return (
                x >= 0 &&
                x < n &&
                y >= 0 &&
                y < n &&
                visited[x][y] === 0 &&
                arr[x][y] === 1
            );
        }

        // Sort the paths alphabetically
        return ans.sort((a, b) => a.localeCompare(b));
    }
}

// Example usage
const solution = new Solution();
const arr = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [1, 1, 1, 1],
];

// const arr = [
//     [1, 1],
//     [1, 1]
// ];

console.log(solution.findPath(arr)); // Output: ['DDRDRR', ...] (depending on paths found)
