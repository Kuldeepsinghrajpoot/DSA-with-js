class Solution {
    // Function to detect cycle in a directed graph.
    isCyclic(V, adj) {
        let visited = new Array(V).fill(false);
        let parent = new Array(V).fill(false);

        const helper = (node) => {
            visited[node] = true;
            parent[node] = true;

            for (const nbr of adj[node]) {
                // If neighbor is not visited, recursively visit
                if (!visited[nbr]) {
                    if (helper(nbr)) return true;
                }
                // If neighbor is in the current recursion stack, it's a cycle
                else if (parent[nbr]) {
                    return true;
                }
            }

            parent[node] = false; // Remove node from recursion stack
            return false;
        };

        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                if (helper(i)) return true;
            }
        }

        return false;
    }
}

const graph = new Solution();
const V = 4;
const adj = [
    [1],      // Node 0 -> Node 1
    [2],      // Node 1 -> Node 2
    [0],      // Node 2 -> Node 0 (Cycle)
    [2]       // Node 3 -> Node 2
];
console.log(graph.isCyclic(V, adj)); // Output: true
