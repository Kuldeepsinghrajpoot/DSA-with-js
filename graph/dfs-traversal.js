// Graph class to represent the graph
class Graph {
    constructor() {
        this.matrix = new Map();  // Adjacency list
        this.visited = new Map(Array.from({ length: this.matrix.length }, (_, idx) => [idx, false]));  // To track visited nodes
        // this.vertices = vertices;
    }

    // Method to add an edge to the graph
    adjacentMatrix(v, e, direction = false) {
        if (!this.matrix.has(v)) {
            this.matrix.set(v, []);
        }
        this.matrix.get(v).push(e);

        // If the graph is undirected, add edge e -> v
        if (!direction) {
            if (!this.matrix.has(e)) {
                this.matrix.set(e, []);
            }
            this.matrix.get(e).push(v);
        }
    }
    // Method to perform DFS traversal and find the connected component
    DFS(node, component) {
        if (this.visited.get(node)) {
            return;
        }
        // Mark the node as visited
        this.visited.set(node, true);
        // Add the node to the current connected component
        component.add(node);  // Using Set to automatically handle uniqueness

        // Recursively visit all the neighbors
        if (this.matrix.has(node)) {
            for (let neighbor of this.matrix.get(node)) {
                if (!this.visited.get(neighbor)) {
                    this.DFS(neighbor, component);
                }
            }
        }
    }
}
// Main function to handle input and output
function main() {
    // Read number of vertices and edges
    let [vertices, edges] = readLine().split(' ').map(Number);
    // Create a graph
    let g = new Graph();

    // Read the edges and add them to the graph
    for (let i = 0; i < edges; i++) {
        let [v, e] = readLine().split(' ').map(Number);
        g.adjacentMatrix(v, e, false);  // Assuming the graph is undirected
    }
    // Start DFS from any unvisited node and output the connected components
    let result = [];
    for (let i = 0; i < vertices; i++) {
        if (!g.visited.get(i)) {
            let component = new Set();  // Use Set for sorted order and uniqueness
            g.DFS(i, component);
            result.push([...component].sort((a, b) => a - b));  // Convert Set to sorted array
        }
    }
    // Output the number of connected components
    console.log(result.length);
    // Output all connected components in sorted order
    result.forEach(component => {
        console.log(component.join(' '));
    });
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}
