class Graph {
    constructor() {
        this.matrix = new Map();
        this.visited = new Map(Array.from({ length: this.matrix.length }, (_, idx) => [idx, false]));
        this.parentTrack = new Map();
        this.queue = [];
    }

    // adjacent List for undirect and unweighted

    adj(edge) {
        const [v, e] = edge;

        if (!this.matrix.get(v))
            this.matrix.set(v, [])

        this.matrix.get(v).push(e)

        if (!this.matrix.get(e))
            this.matrix.set(e, [])

        this.matrix.get(e).push(v)

    }

    shortestPath(startNode, endNode) {
        // prepare the parent node tracker

        this.visited.set(startNode, true);
        this.parentTrack.set(startNode, -1);
        this.queue.push(startNode);

        // use the bfs put all nodes into the parent tracker;

        while (this.queue.length > 0) {
            const front = this.queue.shift();

            if (Array.isArray(this.matrix.get(front))) {
                for (let neighbor of this.matrix.get(front)) {
                    // when the neighbor not found in visited
                    if (!this.visited.get(neighbor)) {
                        this.visited.set(neighbor, true);
                        this.queue.push(neighbor);
                        this.parentTrack.set(neighbor, front)
                    }
                }
            }
        }
        // console.log(this.parentTrack)
        // now performing the sortest path using the parent tracker;
        const ans = []
        let currentNode = endNode;

        while (currentNode !== -1) {
            ans.push(currentNode);
            currentNode = this.parentTrack.get(currentNode);
        }
        ans.reverse(); // Since the path is constructed in reverse order        

        console.log(ans)
    }

}

// calling the Graph

const g = new Graph();
[[0, 1], [0, 3], [1, 2], [3, 7], [7, 4], [4, 6], [4, 5], [5, 6], [7, 6]].forEach((e) => g.adj(e))

g.shortestPath(0, 7)
console.log(g.matrix)