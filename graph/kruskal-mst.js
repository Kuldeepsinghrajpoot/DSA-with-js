class Kruskal {
    constructor(vertices) {
        this.parent = Array.from({ length: vertices }, (_, idx) => idx);
        this.rank = Array.from({ length: vertices }, () => 0);
        this.edges = [];
    }

    // Add edge
    addEdge(v, e, w) {
        this.edges.push([v, e, w]);
    }

    // Sort edges by weight
    sortEdges() {
        this.edges.sort((a, b) => a[2] - b[2]);
    }

    // Find the root parent of a node
    findParentNode(node) {
        if (this.parent[node] === node) {
            return node;
        }
        // Path compression
        return (this.parent[node] = this.findParentNode(this.parent[node]));
    }

    // Union of two sets
    unionSet(u, v) {
        const rootU = this.findParentNode(u);
        const rootV = this.findParentNode(v);

        if (rootU !== rootV) {
            if (this.rank[rootU] < this.rank[rootV]) {
                this.parent[rootU] = rootV;
            } else if (this.rank[rootU] > this.rank[rootV]) {
                this.parent[rootV] = rootU;
            } else {
                this.parent[rootV] = rootU;
                this.rank[rootU]++;
            }
        }
    }

    // Kruskal's MST Algorithm
    mst() {
        this.sortEdges();
        let minWeight = 0;
        let ans = []

        for (const [u, v, weight] of this.edges) {
            const rootU = this.findParentNode(u);
            const rootV = this.findParentNode(v);

            if (rootU !== rootV) {
                minWeight += weight;
                ans.push([u,v,weight])
                this.unionSet(u, v); 
            }
        }

        return {weight:minWeight,path:ans,parent:this.parent};
    }
}
// Test Case 1: Basic Graph
const g1 = new Kruskal(6);
[[1,2,2],[1,4,1],[1,5,4],[2,4,3],[2,3,3],[2,6,7],[3,4,5],[3,6,8],[4,5,9]].forEach((e)=>g1.addEdge(e[0],e[1],e[2]))
console.log(g1.mst()); // Output: 17