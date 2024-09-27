function multiply(matrix1, matrix2) {
    let row1 = matrix1.length;
    let column1 = matrix1[0].length;
    let row2 = matrix2.length;
    let column2 = matrix2[0].length;
    // Check if the matrices can be multiplied
    if (column1 !== row2) {
        return "Number of columns in the first matrix must be equal to the number of rows in the second matrix";
    }
    // Initialize the result matrix with the correct size
    let result = new Array(row1).fill(0).map(() => new Array(column2).fill(0));
    for (let i = 0; i < row1; i++) {
        for (let j = 0; j < column2; j++) {
            for (let k = 0; k < column1; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return result;
}

let matrix1 = [[1, 2, 3]];
let matrix2 = [[1], [3], [5]];

console.log(multiply(matrix1, matrix2)); // Output: [[22]]
