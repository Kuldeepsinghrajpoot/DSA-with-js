function bfsTraversal(startNode, adj) {
    console.log(adj[startNode])
    let ans = []; // Array to store the BFS traversal order
    let visited = new Map(Array.from({length:adj.length},(_,idx)=>[idx,false])); // Map to keep track of visited nodes
    let queue = []; // Queue for BFS
    // Start BFS from the given startNode
    queue.push(startNode);
    visited.set(startNode, true);

    while (queue.length > 0) {
        let currentNode = queue.shift(); // Dequeue the front node
        ans.push(currentNode); // Add the current node to the answer

        // Check if adj[currentNode] is an array before iterating
        if (Array.isArray(adj[currentNode])) {
            for (let neighbor of adj[currentNode]) {
                if (!visited.get(neighbor)) { // If the neighbor hasn't been visited
                    queue.push(neighbor); // Enqueue the neighbor
                    visited.set(neighbor, true); // Mark the neighbor as visited
                }
            }
        }
    }

    return ans;
}


// Example Usage


// Example Usage:
const adj = [
    [1,2],
    [0, 3, 2],
    [0,4,1],
    [1,4],
    [2,3],
];

console.log(bfsTraversal(3,adj)); // Expected Output: [0, 3, 1, 4, 2]
