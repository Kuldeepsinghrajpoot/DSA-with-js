// Tarjan's algorithm
class Graph {
    constructor(vertex) {
        this.adj = new Map();
        this.timer = 0;
        this.disc = Array(vertex).fill(-1); // Discovery times of nodes
        this.low = Array(vertex).fill(-1); // Low values of nodes
        this.parent = Array(vertex).fill(-1); // Parent nodes
        this.visit = new Map(); // Visited nodes
        this.result = []; // Bridges
    }

    adjList(v, e) {
        if (!this.adj.has(v)) this.adj.set(v, []);
        this.adj.get(v).push(e);

        if (!this.adj.has(e)) this.adj.set(e, []);
        this.adj.get(e).push(v);
    }

    bridge() {
        for (const node of this.adj.keys()) {
            if (!this.visit.get(node)) {
                this.dfs(node);
            }
        }
        return this.result;
    }

    dfs(node) {
        this.visit.set(node, true);
        this.disc[node] = this.low[node] = this.timer++;

        for (const nbr of this.adj.get(node)) {
            if (nbr === this.parent[node]) continue; // Skip parent edge

            if (!this.visit.get(nbr)) {
                this.parent[nbr] = node; // Set parent
                this.dfs(nbr);

                // Update low value of the current node
                this.low[node] = Math.min(this.low[node], this.low[nbr]);

                // Check if the edge is a bridge
                if (this.low[nbr] > this.disc[node]) {
                    this.result.push([Math.min(node, nbr), Math.max(node, nbr)]); // Store in sorted order
                }

            } else {
                // Update low value if already visited
                this.low[node] = Math.min(this.low[node], this.disc[nbr]);
            }
        }
    }
}

// Test case
const g = new Graph(5);
g.adjList(0, 1);
g.adjList(0, 2);
g.adjList(1, 2);
g.adjList(1, 3);
g.adjList(3, 4);

console.log("Bridges in the graph:", g.bridge());