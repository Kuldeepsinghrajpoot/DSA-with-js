class Graph {
    constructor() {
        this.adj = new Map(); // Adjacency list
        this.visited = new Map(Array.from({ length: this.adj.size }, (_, idx) => [idx, false])); // Visited nodes
        this.stack = []; // Stack to store the topological sort
        this.v = this.adj.size;
        // Initialize the graph

    }

    addEdge(u, v) {
        // Initialize adjacency list for u and v if not already done
        if (!this.adj.has(u)) {
            this.adj.set(u, []);
        }
        this.adj.get(u).push(v);
    }

    topoLogicalSort() {
        for (let i =1; i < this.adj.size; i++) {
            console.log(i)
            if (!this.visited.get(i)) {
                this.topoLogical(i);

            }
        }
    }

    topoLogical(startNode) {
        if (this.visited.get(startNode)) {
            return; // Node already visited
        }
        this.visited.set(startNode, true);

        if (Array.isArray(this.adj.get(startNode))) {
            for (const neighbor of this.adj.get(startNode)) {
                if (!this.visited.get(neighbor)) {
                    this.topoLogical(neighbor);
                }
            }
        }

        this.stack.push(startNode); // Push onto stack after visiting neighbors
    }

    getTopologicalOrder() {
        return this.stack.reverse(); // Return reversed stack as the topological order
    }
}

// Usage Example
const graph = new Graph();
//for this array return this topological order
[ [1, 3],[1, 2], [2, 4], [3, 4], [4, 5], [4, 6], [5, 6]].forEach((e) => graph.addEdge(e[0], e[1]));
// Topological Order: [ 1, 3, 2, 4, 5, 6 ]

// [ [1, 2],[1, 3], [2, 4], [3, 4], [4, 5], [4, 6], [5, 6]].forEach((e) => graph.addEdge(e[0], e[1]));
// // Topological Order: [ 1, 2, 3, 4, 5, 6 ]

graph.topoLogicalSort();
console.log("Topological Order:", graph.getTopologicalOrder()); // Should print the topological order
console.log("Adjacency List:", graph.adj); // Check the structure of the graph
