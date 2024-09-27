
function distinctElements(matrix,n) {

    let obj = {};

    for(let i = 0; i < n; i++) {

        for(let j = 0; j < n; j++) {

            if(obj.includes(matrix[i][j])) {

                obj[matrix[i][j]] += 1;
            }
        }
    }

    for(let i of Object.keys(obj)) {

        if(obj[i] > 1) {

            console.log(i);
        }
    }
}

const arr = [
    [1, 2, 3, 2],
    [3, 6, 2, 3],
    [3, 6, 2, 3],
    [5, 2, 5, 3]
]

console.log(distinctElements(arr, 4))