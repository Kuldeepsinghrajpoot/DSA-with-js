class Prims {
    constructor(vertices, n) {
        this.adj = new Map();
        this.key = Array(vertices).fill(Infinity);
        this.mst = Array(vertices).fill(false);
        this.parent = Array(vertices).fill(-1);
        this.ans = [];
        this.n = n
    }

    edge(v, e, w) {
        if (!this.adj.get(v)) {
            this.adj.set(v, [])
        }
        this.adj.get(v).push([e, w])
    }
    // algo;
    prims(src, n = this.n) {

        this.key[src] = 0;
        for (let i = 0; i < n; i++) {
            let mini = Infinity;
            let u = 0

            // searching element 
            for (let v = src; v < n; v++) {
                if (this.mst[v] === false && this.key[v] < mini) {
                    u = v;
                    mini = this.key[v];
                }
            }
            // put the update values of the mst with the true;
            this.mst[u] = true;
            // get the node and weight;
            for (const [node, weight] of this.adj.get(u)) {
                // get the details from the key and parents and update the array
                if (this.mst[node] === false && weight < this.key[node]) {

                    this.parent[node] = u;
                    this.key[node] = weight
                }
            }
        }
    }

    // return ans;
    result(n = this.n) {
        for (let i = 1; i < n; i++) { // Start from 1 because 0 is the root
            this.ans.push([this.parent[i], i, this.key[i]]);
        }
        return this.ans;
    }

    cost() {
        return this.ans.reduce((acc, [parent, vertex, cost]) => acc + cost, 0)
    }

}

// Define the number of vertices
const vertices = 5;
const graph = new Prims(vertices, vertices);

// Add edges with weights
graph.edge(0, 1, 2);
graph.edge(0, 3, 6);
graph.edge(1, 0, 2);
graph.edge(1, 2, 3);
graph.edge(1, 3, 8);
graph.edge(1, 4, 5);
graph.edge(2, 1, 3);
graph.edge(2, 4, 7);
graph.edge(3, 0, 6);
graph.edge(3, 1, 8);
graph.edge(4, 1, 5);
graph.edge(4, 2, 7);

// Call the algorithm
graph.prims(0);

// Get the result
const result = graph.result();
// console.log(result);
console.log(graph.cost());

