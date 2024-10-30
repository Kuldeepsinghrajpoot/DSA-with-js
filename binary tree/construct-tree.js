class NodeList {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.preorderIndex = 0;
        this.inorderMap = new Map();
        this.postorderIndex = 0; // To track index for postorder
    }

    // Construct binary tree from inorder and preorder traversal
    constrcutTree(inorder, preorder, n) {
        for (let i = 0; i < n; i++) {
            this.inorderMap.set(inorder[i], i);
        }
        this.root = this.helperConstruct(preorder, 0, n - 1);
        return this.root;
    }

    helperConstruct(preorder, startIndex, endIndex) {
        if (startIndex > endIndex) {
            return null;
        }
        const root = preorder[this.preorderIndex++];
        const node = new NodeList(root);
        const rootIndex = this.inorderMap.get(root);

        node.left = this.helperConstruct(preorder, startIndex, rootIndex - 1);
        node.right = this.helperConstruct(preorder, rootIndex + 1, endIndex);

        return node;
    }

    // Construct binary tree from inorder and postorder traversal
    construct_Inorder_Postorder(inorder, postorder, n) {
        // Store the inorder elements in the map
        for (let i = 0; i < n; i++) {
            this.inorderMap.set(inorder[i], i);
        }
        // Start the postorder index from the last element
        this.postorderIndex = n - 1;
        this.root = this.helperInorderToPostorder(postorder, 0, n - 1);
        return this.root;
    }

    helperInorderToPostorder(postorder, startIndex, endIndex) {
        if (startIndex > endIndex) return null;

        // Get the current root from the postorder (last element)
        const root = postorder[this.postorderIndex--]; // Decrement after fetching
        const node = new NodeList(root);

        // Find the index of the root in the inorder map
        const rootIndex = this.inorderMap.get(root);
        // Construct right and left subtrees
        node.right = this.helperInorderToPostorder(
            postorder,
            rootIndex + 1,
            endIndex,
        );
        node.left = this.helperInorderToPostorder(
            postorder,
            startIndex,
            rootIndex - 1,
        );

        return node;
    }
}

// Example input
const preorder = [0, 1, 3, 4, 2, 5];
const inorder = [4, 8, 2, 5, 1, 6, 3, 7];
const postorder = [8, 4, 5, 2, 6, 7, 3, 1];
const n = inorder.length;

const solution = new BinaryTree();
// Construct the tree from inorder and postorder arrays
const root = solution.construct_Inorder_Postorder(inorder, postorder, n);

// Function to print the tree in a human-readable way (for verification)
function printTree(node) {
    if (node === null) return;
    console.log(node.data);
    printTree(node.left);
    printTree(node.right);
}

// Print the constructed tree
console.log("Constructed Binary Tree from Inorder and Postorder:");
printTree(root);
