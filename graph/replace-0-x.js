function replace(arr) {
    const r = arr.length;
    const c = arr[0].length;

    // Directions for BFS traversal (up, down, right, left)
    const row = [-1, 1, 0, 0];
    const col = [0, 0, 1, -1];

    // Define queue for BFS traversal
    const queue = [];

    // Check if a cell is within boundaries
    function boundry(i, j) {
        return i >= 0 && i < r && j >= 0 && j < c;
    }

    function helper() {
        // Top boundary
        for (let idx = 0; idx < c; idx++) {
            if (arr[0][idx] === 'O') {
                queue.push([0, idx]);
                arr[0][idx] = 'T';
            }
        }

        // Bottom boundary
        for (let idx = 0; idx < c; idx++) {
            if (arr[r - 1][idx] === 'O') {
                queue.push([r - 1, idx]);
                arr[r - 1][idx] = 'T';
            }
        }

        // Left boundary
        for (let idx = 0; idx < r; idx++) {
            if (arr[idx][0] === 'O') {
                queue.push([idx, 0]);
                arr[idx][0] = 'T';
            }
        }

        // Right boundary
        for (let idx = 0; idx < r; idx++) {
            if (arr[idx][c - 1] === 'O') {
                queue.push([idx, c - 1]);
                arr[idx][c - 1] = 'T';
            }
        }

        // BFS Traversal
        while (queue.length > 0) {
            const [newR, newC] = queue.shift();

            for (let i = 0; i < 4; i++) {
                const ni = newR + row[i];
                const nj = newC + col[i];

                if (boundry(ni, nj) && arr[ni][nj] === 'O') {
                    arr[ni][nj] = 'T';
                    queue.push([ni, nj]);
                }
            }
        }

        // Replace 'T' -> 'O', and 'O' -> 'X'
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (arr[i][j] === 'T') {
                    arr[i][j] = 'O';
                } else if (arr[i][j] === 'O') {
                    arr[i][j] = 'X';
                }
            }
        }

        return arr;
    }

    return helper();
}

const mat = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
    ['X', 'X', 'O', 'O']
];

console.log("Original Matrix:");
console.table(mat);

const ans = replace(mat);
console.log("Processed Matrix:");
console.table(ans);
