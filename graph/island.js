function island(arr) {
    const rowDirection = [-1, -1, -1, 1, 1, 1, 0, 0];
    const colDirection = [-1, 0, 1, -1, 0, 1, -1, 1];

    const row = arr.length;
    const col = arr[0].length;

    const queue = [];
    let countIsland = 0;

    function checkBoundry(i, j) {
        return i >= 0 && i < row && j >= 0 && j < col;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (arr[i][j] === 1) {
                queue.push([i, j]);
                countIsland++;
                arr[i][j] = 0;

                while (queue.length > 0) {
                    const [newRow, newCol] = queue.shift();

                    for (let k = 0; k < 8; k++) {
                        const nextRow = newRow + rowDirection[k];
                        const nextCol = newCol + colDirection[k];

                        if (checkBoundry(nextRow, nextCol) && arr[nextRow][nextCol] === 1) {
                            arr[nextRow][nextCol] = 0;
                            queue.push([nextRow, nextCol]);
                        }
                    }
                }
            }
        }
    }
    return countIsland;
}

// const ans = [
//     [0, 1],
//     [1, 0],
//     [1, 1],
//     [1, 0]
// ];

const ans = [[0, 1], [1, 0], [1, 1], [1, 0]]
console.log(island(ans));
