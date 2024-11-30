class KahnsAlgo {
    constructor(maxNodes) {
        this.adj = new Map(); // Adjacency list
        this.in_degree = Array.from({ length: maxNodes + 1 }, () => 0); // Start indexing from 0
        this.ans = []; // Topological sort result
        this.node = maxNodes;
    }

    // Add edge to the adjacency list
    addEdge(u, v) {
        if (!this.adj.has(u)) {
            this.adj.set(u, []);
        }
        this.adj.get(u).push(v);
    }

    // Calculate in-degree of all nodes
    calculateInDegree() {
        for (let [node, neighbors] of this.adj) {
            for (let neighbor of neighbors) {
                this.in_degree[neighbor] += 1;
            }
        }
    }

    // Perform Kahn's Algorithm
    performKahnsAlgorithm() {
        let queue = [];

        // Add all nodes with in-degree 0 to the queue
        for (let i = 0; i < this.in_degree.length; i++) {
            if (this.in_degree[i] === 0 && this.adj.has(i)) {
                queue.push(i);
            }
        }

        let processedCount = 0; // To track the number of nodes processed

        while (queue.length > 0) {
            let node = queue.shift(); // Dequeue node
            this.ans.push(node); // Add to result
            processedCount++; // Increment processed nodes

            // Decrease in-degree for neighbors
            for (let neighbor of this.adj.get(node) || []) {
                this.in_degree[neighbor] -= 1;

                // If in-degree becomes 0, enqueue the neighbor
                if (this.in_degree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // Check for cycles
        if (processedCount !== this.node) {
            throw new Error("Cycle Detected");
        }
    }
}

// Test Case
const kahns = new KahnsAlgo(4); // Maximum node value = 5

// Create the adjacency list without a cycle
[[0, 1], [0, 3], [1, 2], [3, 2]].forEach(([u, v]) => kahns.addEdge(u, v));

// Calculate in-degree
kahns.calculateInDegree();

// Perform Kahn's Algorithm
try {
    kahns.performKahnsAlgorithm();
    console.log("Topological Sort:", kahns.ans);
} catch (error) {
    console.error(error.message); // Expected: "Cycle Detected"
}

// Debug prints
console.log("Adjacency List:", kahns.adj);
console.log("Topological Sort Result:", kahns.ans);
