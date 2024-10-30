class NodeList {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BuildingTree {
    constructor() {
        this.root = null;
    }

    insertData(data) {
        const node = new NodeList(data);

        // If the data is -1, treat it as a null node (leaf)
        if (data === -1) {
            return null;
        }

        // If root is null, create the root node
        if (this.root === null) {
            this.root = node;
            return this.root;
        }

        // Otherwise, insert the node recursively
        this.root = this.insertNode(this.root, data);
    }

    // Recursive function to insert nodes
    insertNode(currentNode, data) {
        // If we reach a null node, we insert the new node here
        if (currentNode === null) {
            return new NodeList(data);
        }

        // Example insertion logic (you may want to customize this based on binary tree type)
        if (data < currentNode.data) {
            currentNode.left = this.insertNode(currentNode.left, data);
        } else {
            currentNode.right = this.insertNode(currentNode.right, data);
        }

        return currentNode;
    }
}

// Calling the BuildingTree

const tree = new BuildingTree();
tree.insertData(5);
tree.insertData(6);
tree.insertData(7);

console.log(JSON.stringify(tree, null, 2));
