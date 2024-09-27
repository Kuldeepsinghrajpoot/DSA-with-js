// addition of 2 matrices

function addition(matrix1, matrix2) {
    // addition of two matrices

    if(matrix1.length!==matrix2.length){
        console.warn('matrix should be same length of row and column')
        return
    }
    if(matrix1[0].length!==matrix2[0].length){
        console.warn('matrix should be same length of row and column')
        return
    }
    let row = matrix1.length;
    let column = matrix1[0].length;

    // let result = [[],[]];

    let result = new Array(row).fill(0).map(() => new Array(column).fill(0));

    for (let i = 0; i < row; i++) {

        for (let j = 0; j < column; j++) {

            console.log(matrix2[i][j])
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return result;
}

// test cases
let matrix1 = [
    [1, 2, 3],
    [3, 4, 4]
];
let matrix2 = [
    [5, 6,9],
    [7, 8, 9]
];
console.log(addition(matrix1, matrix2)); // [[6, 8], [10, 12]]