function sortMatrix(arr) {

    let n = 4;
    let m = 2;
    let newArray = []
    for (let i = 0; i < m; i++) {
        let temp = [];
        for (let j = 0; j < n; j++) {
            temp[j] = arr[i * n + j];
            // todo : i*n+j
            // todo: issues here in my code those i am unaviable to found the solution of the problem

        }
        newArray.push(temp);
    }
    // return newArray
}

function sortMatrixOptimized(Mat, N) {
    function sortAndReshape(Matric, N) {
        const newArray = Matric.flat().sort((a, b) => a - b);
        let array = [];

        for (let i = 0; i < N; i++) {
            array[i] = newArray.slice(i * N, (i + 1) * N);
        }

        return array;
    }

    return sortAndReshape(Mat, N)
}

console.log(sortMatrixOptimized([1, 2, 3, 4, 5, 6, 7, 8],4))