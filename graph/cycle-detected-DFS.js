class Solution {
    // Function to detect cycle in a directed graph.
    isCyclic(V, adj) {
        // Arrays to track visited nodes and recursion stack
        let visited = new Map(Array.from({ length: V }, (_, idx) => [idx, false]));
        let dfsVisited = new Map(Array.from({ length: V }, (_, idx) => [idx, false]));

        // Helper function for DFS
        function helper(startNode) {
            // Mark the current node as visited and part of the recursion stack
            visited.set(startNode, true);
            dfsVisited.set(startNode, true);

            // Traverse all the neighbors of the current node
            for (let neighbor of adj[startNode]) {
                if (!visited.get(neighbor)) {
                    // If the neighbor hasn't been visited, recurse on it
                    if (helper(neighbor)) {
                        return true; // Cycle detected
                    }
                } else if (dfsVisited.get(neighbor)) {
                    // If the neighbor is part of the current recursion stack, a cycle is detected
                    return true;
                }
            }

            // Remove the current node from the recursion stack
            dfsVisited.set(startNode, false);
            return false;
        }

        // Check for cycles in each component of the graph
        for (let i = 0; i < V; i++) {
            if (!visited.get(i)) {
                if (helper(i)) {
                    return true; // Cycle detected
                }
            }
        }

        return false; // No cycle detected
    }
}
