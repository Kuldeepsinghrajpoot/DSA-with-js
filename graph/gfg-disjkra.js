class Solution {
    /**
    * @param number n
    * @param number m
    * @param number src
    * @param number[][] edges

    * @returns number[]
    */
    shortestPath(edges, n, m, src) {
        // code here
        let adj = new Map();
        let distance = Array(m).fill(Infinity);
        let stack = [];

        //   create adj table;
        function addEdge(edges) {

            for (let [v, e, w] of edges) {
                if (!adj.get(v)) {
                    adj.set(v, []);
                }
                adj.get(v).push([e, w]);
            }
        }

        addEdge(edges)

        // path;
        function path(startNode) {

            stack.push([startNode, 0]);
            distance[startNode] = 0;

            while (stack.length > 0) {

                stack.sort((a, b) => a[1] - b[1])
                // Debugging statement to check stack contents

                const [currentNode, currentWeight] = stack.shift();

                // const [currentNode,currentWeight] = stack.shift();

                if (Array.isArray(adj.get(currentNode))) {

                    for (let [node, weight] of adj.get(currentNode)) {

                        const newWeight = currentWeight + weight;
                        if (distance[node] > newWeight) {
                            distance[node] = newWeight;
                            stack.push([node, newWeight])
                        }
                    }
                }
            }
        }
        path(src);
        return distance;
    }
}

function runTestCases() {
    const solution = new Solution();

    const testCases = [
        {
            n: 4,
            m: 4,
            src: 0,
            edges: [
                [0, 1, 4],
                [0, 2, 1],
                [2, 1, 2],
                [1, 3, 1]
            ],
            expected: [0, 3, 1, 4] // Shortest paths from node 0
        },
        {
            n: 5,
            m: 6,
            src: 0,
            edges: [
                [0, 1, 10],
                [0, 2, 5],
                [1, 2, 2],
                [1, 3, 1],
                [2, 3, 9],
                [2, 4, 2]
            ],
            expected: [0, 7, 5, 8, 7] // Shortest paths from node 0
        },
        {
            n: 3,
            m: 3,
            src: 0,
            edges: [
                [0, 1, 1],
                [1, 2, 2],
                [0, 2, 4]
            ],
            expected: [0, 1, 3] // Shortest paths from node 0
        },
        {
            n: 4,
            m: 4,
            src: 2,
            edges: [
                [2, 0, 3],
                [2, 1, 1],
                [1, 3, 2],
                [3, 0, 4]
            ],
            expected: [3, 1, 0, 3] // Shortest paths from node 2
        },
        {
            n: 5,
            m: 7,
            src: 1,
            edges: [
                [0, 1, 2],
                [0, 3, 6],
                [1, 2, 3],
                [1, 3, 8],
                [1, 4, 5],
                [2, 4, 7],
                [3, 4, 9]
            ],
            expected: [Infinity, 0, 3, 6, 5] // Shortest paths from node 1
        }
    ];

    // Run test cases
    testCases.forEach(({ n, m, src, edges, expected }, index) => {
        const result = solution.shortestPath(edges, n, m, src);
        console.log(`Test Case ${index + 1}:`, result);
        console.assert(
            JSON.stringify(result) === JSON.stringify(expected),
            `Test case ${index + 1} failed! Expected ${expected} but got ${result}`
        );
    });
}

runTestCases();
