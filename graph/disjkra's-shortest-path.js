class Dijkstra {
    constructor(vertices) {
        this.adj = new Map();
        this.queue = []; // Use an array or a priority queue for efficiency
        this.distance = Array(vertices).fill(Infinity);
    }

    // Create adjacency list
    addEdge(v, e, w) {
        if (!this.adj.get(v)) {
            this.adj.set(v, []);
        }
        this.adj.get(v).push([e, w]);

        if (!this.adj.get(e)) {
            this.adj.set(e, []);
        }
        this.adj.get(e).push([v, w]);
    }

    // Find shortest path
    path(startNode) {
        // Add the start node to the queue with a distance of 0
        this.queue.push([startNode, 0]);
        this.distance[startNode] = 0;

        while (this.queue.length > 0) {
            // Sort the queue by distance and pick the node with the smallest distance
            this.queue.sort((a, b) => a[1] - b[1]);
            const [currentNode, currentDistance] = this.queue.shift();

            if (Array.isArray(this.adj.get(currentNode))) {
                for (const [neighbor, weight] of this.adj.get(currentNode)) {
                    const newDistance = currentDistance + weight;
                    
                    if (newDistance < this.distance[neighbor]) {
                        this.distance[neighbor] = newDistance;
                        this.queue.push([neighbor, newDistance]);
                    }
                }
            }
        }
    }
}
// Create a graph with 4 vertices
const graph = new Dijkstra(5);

// Add edges: (node1, node2, weight)
// [[0, 1, 5], [0, 2, 8], [1, 3, 2],[1, 2, 9],  [2, 3, 6]].forEach((e) => graph.addEdge(e[0], e[1], e[2]));


[[0,1,7],[0,2,1],[0,3,2],[2,1,3],[1,4,1],[3,4,7],[1,3,5]].forEach((e) => graph.addEdge(e[0], e[1], e[2]))

// Find the shortest path from node 0
graph.path(0);

// Output distances from node 0
console.log(graph.distance); // Expected: [0, 1, 3, 4]
