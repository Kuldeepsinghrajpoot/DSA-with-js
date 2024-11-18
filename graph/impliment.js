function GraphNode() {
    // Graph node constructor initializes a map to store edges
    this.map = new Map();
}

/**
 * Inserts an edge between the current node (v) and another node (e).
 * @param {any} v - The starting node.
 * @param {any} e - The ending node.
 * @param {boolean} direction - If true, the edge is directed (v -> e). If false, the edge is undirected.
 */
GraphNode.prototype.insert = function (v = 0, e = 0, direction = false) {
    // If the map does not have the starting node v, initialize it with an empty array
    if (!this.map.has(v)) {
        this.map.set(v, []);
    }
    // Add the edge from v to e
    // here the idx[0] is a varticies and the idx[1] is the endges so first add the v to e 
    // after add to the e to v 
    // first  add the element form the left to right then right to left
    this.map.get(v).push(e);

    // If the graph is undirected, add the edge from e to v as well
    if (!direction) {
        if (!this.map.has(e)) {
            this.map.set(e, []);
        }
        this.map.get(e).push(v);
    }
};

// Example usage:
const graph = new GraphNode();
[[0, 1], [1, 2], [2, 3], [3, 1], [3, 4], [4, 0]].map((idx) => graph.insert(idx[0], idx[1], false))

console.log(graph.map); // Output the graph structure
