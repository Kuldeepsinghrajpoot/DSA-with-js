import { createInterface } from "readline";

// Node class representing each node in the tree
class NodeList {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Tree traversal and management class
class OrderTraversal {
    constructor() {
        this.root = null;
    }

    // Insert data into the tree in level-order fashion
    insertData(data) {
        const node = new NodeList(data);
        if (data === -1) {
            return; // -1 is used to indicate a null node
        }

        if (this.root === null) {
            this.root = node;
            return;
        }

        const queue = [this.root];

        while (queue.length > 0) {
            const currentNode = queue.shift();

            if (currentNode.left === null) {
                currentNode.left = node;
                break;
            } else {
                queue.push(currentNode.left);
            }

            if (currentNode.right === null) {
                currentNode.right = node;
                break;
            } else {
                queue.push(currentNode.right);
            }
        }
    }

    // In-order Traversal: L N R
    inorder_traversal(root) {
        if (root === null) {
            return; // Base case: If the root is null, return
        }
        this.inorder_traversal(root.left); // Visit left subtree
        console.log(root.data); // Visit root
        this.inorder_traversal(root.right); // Visit right subtree
    }

    // Pre-order Traversal: N L R
    preorder_traversal(root) {
        if (root === null) {
            return;
        }
        console.log(root.data); // Visit root
        this.preorder_traversal(root.left); // Visit left subtree
        this.preorder_traversal(root.right); // Visit right subtree1
    }

    // Post-order Traversal: L R N
    postorder_traversal(root) {
        if (root === null) {
            return;
        }
        this.postorder_traversal(root.left); // Visit left subtree
        this.postorder_traversal(root.right); // Visit right subtree
        console.log(root.data); // Visit root
    }
}

// Create a readline interface for taking input from the user
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to build the tree by taking user input
const buildTree = (tree) => {
    rl.question("Enter node value (-1 for null node): ", (answer) => {
        const data = parseInt(answer);

        if (data === -1) {
            rl.close(); // If input is -1, end input collection
            printTraversals(tree);
        } else {
            tree.insertData(data); // Insert node into the tree
            buildTree(tree); // Recursively ask for the next node
        }
    });
};

// Function to print tree traversals once the tree is built
const printTraversals = (tree) => {
    console.log("In-order Traversal:");
    tree.inorder_traversal(tree.root);

    console.log("Pre-order Traversal:");
    tree.preorder_traversal(tree.root);

    console.log("Post-order Traversal:");
    tree.postorder_traversal(tree.root);
};

// Main logic to build the tree and traverse it
const tree = new OrderTraversal();
buildTree(tree); // Start building the tree by taking input from the user
