class Solution {
    // Function to detect cycle in an undirected graph.
    isCycle(adj) {
        let queue = [];
        let visited = new Map(Array.from({ length: adj.length }, (_, idx) => [idx, false]));
        let parentTrack = new Map();

        function helper(startNode) {
            // Using BFS traversal
            visited.set(startNode, true);
            queue.push(startNode);
            parentTrack.set(startNode, -1); // The starting node has no parent

            while (queue.length > 0) {
                // Get the front element
                let front = queue.shift();

                if (Array.isArray(adj[front])) {
                    for (let neighbor of adj[front]) {
                        // If the neighbor is already visited and is not the parent, there is a cycle
                        if (visited.get(neighbor) === true && neighbor !== parentTrack.get(front)) {
                            return true;
                        } else if (!visited.get(neighbor)) {
                            visited.set(neighbor, true);
                            queue.push(neighbor);
                            parentTrack.set(neighbor, front); // Set the parent of the neighbor
                        }
                    }
                }
            }
            return false;
        }

        // Check all components of the graph (to handle disconnected graphs)
        for (let i = 0; i < adj.length; i++) {
            if (!visited.get(i)) {
                if (helper(i)) {
                    return true;
                }
            }
        }

        return false;
    }
}
