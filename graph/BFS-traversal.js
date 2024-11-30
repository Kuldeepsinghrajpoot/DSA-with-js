function bfsTraversal(startNode, edges, n) {
    let ans = []; // Array to store the BFS traversal order
    let visited = new Map(Array.from({ length: n }, (_, idx) => [idx, false])); // Map to track visited nodes
    let queue = []; // Queue for BFS

    // Create an adjacency list from the edges
    // let adjList = Array.from({ length: n }, () => []);

    // for (let [u, v] of edges) {
    //     adjList[u].push(v);
    //     adjList[v].push(u); // Assuming the graph is undirected
    // }
    const adjList = new Map()
    for (const [u, v] of edges) {
        if (!adjList.has(u)) {
            adjList.set(u, [])
        }
        adjList.get(u).push(v)

        if (!adjList.has(v)) {
            adjList.set(v, [])
        }
        adjList.get(v).push(u)
    }
    // Start BFS from the given startNode
    queue.push(startNode);
    visited.set(startNode, true); 

    while (queue.length > 0) {
        let front = queue.shift(); // Dequeue the front node
        ans.push(front); // Add the current node to the answer

        // Iterate over neighbors of the current node
        for (let neighbor of adjList.get(front)) {
            if (!visited.get(neighbor)) { // If the neighbor hasn't been visited
                queue.push(neighbor); // Enqueue the neighbor
                visited.set(neighbor, true); // Mark the neighbor as visited
            }
        }
    }
console.log(adjList)
    return ans;
}

const adj = [[0, 3], [3, 1], [1, 2], [1, 4]];
console.log(bfsTraversal(0, adj, 5)); // Expected Output: [0, 3, 1, 2, 4]
