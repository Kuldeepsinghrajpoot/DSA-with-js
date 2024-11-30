function covid(arr) {
    let row = arr.length;
    let col = arr[0].length;

    // Set the directions for adjacent cells (up, down, left, right)
    let rowDirection = [-1, 1, 0, 0];
    let colDirection = [0, 0, -1, 1];

    // Validate if a cell is within bounds
    function directionValidate(i, j) {
        return i >= 0 && i < row && j >= 0 && j < col;
    }

    // Push the positions of all initially infected cells (value 2) into the queue
    let queue = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (arr[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }

    let time = 0;

    // Perform BFS to spread the infection
    while (queue.length > 0) {
        let size = queue.length;
        let infected = false; // Track if new infections happen in this time unit
        while (size--) {
            let [i, j] = queue.shift();

            for (let index = 0; index < 4; index++) {
                let ni = i + rowDirection[index];
                let nj = j + colDirection[index];

                if (directionValidate(ni, nj) && arr[ni][nj] === 1) {
                    arr[ni][nj] = 2; // Mark as infected
                    queue.push([ni, nj]);
                    infected = true;
                }
            }
        }
        // Increment time only if new infections occurred
        if (infected) {
            time++;
        }
    }

    // Check for any remaining uninfected cells
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (arr[i][j] === 1) {
                return -1; // If any cell is still uninfected, return -1
            }
        }
    }

    return time;
}

const arr = [
    [2, 1, 0, 2, 1],
    [1, 0, 1, 2, 1],
    [1, 0, 0, 2, 1],
];
console.log(covid(arr));
