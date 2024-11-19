class Solution {

    shortestPath(V, edges) {
        let adj = new Map();
        let visited = new Map();
        let stack = [];
        let distance = Array(V).fill(Infinity); // Initialize distances to Infinity
        // Create adjacency list from edges
        function createAdjList(edges) {
            for (let [u, v, weight] of edges) {
                if (!adj.has(u)) {
                    adj.set(u, []);
                }
                adj.get(u).push([v, weight]);
            }
        }

        // Helper function for topological sort
        function helper(node) {
            if (visited.get(node)) {
                return; // Node already visited
            }

            visited.set(node, true); // Mark node as visited

            // Visit all neighbors of the current node
            if (adj.has(node)) {
                for (let [neighbour] of adj.get(node)) {
                    if (!visited.get(neighbour)) {
                        helper(neighbour);
                    }
                }
            }

            stack.push(node); // Push the node to the stack in reverse topological order
        }

        // Build the adjacency list
        createAdjList(edges);

        // Perform topological sort
        for (let i = 0; i < V; i++) {
            if (!visited.get(i)) {
                helper(i);
            }
        }

        stack.reverse(); // Reverse the stack to get the topological order

        // Function to find shortest paths in DAG
        function shortestDAG(startNode) {
            distance[startNode] = 0; // Distance to the start node is 0

            while (stack.length > 0) {
                let node = stack.shift();

                if (distance[node] !== Infinity && adj.has(node)) {
                    for (let [neighbour, weight] of adj.get(node)) {
                        if (distance[node] + weight < distance[neighbour]) {
                            distance[neighbour] = distance[node] + weight;
                        }
                    }
                }
            }
        }

        // Call shortestDAG from a given start node (assuming 0 as the start node)
        shortestDAG(1);

        // Replace any distance still set to Infinity with -1
        for (let i = 0; i < distance.length; i++) {
            if (distance[i] === Infinity) {
                distance[i] = -1;
            }
        }
        console.log(adj)

        return distance; // Return the distances from the start node to all other nodes
    }
}

// Test case
const sol = new Solution();
const V = 6;  // Number of vertices
const edges = [
    [0, 1, 5], [0, 2, 3], [1, 3, 6], [1, 2, 2],
    [3, 4, -1], [4, 5, -2], [2, 3, 7], [2, 4, 4], [2, 5, 2]
];

const result = sol.shortestPath(V, edges);

console.log("Shortest distances from node 0:", result);
