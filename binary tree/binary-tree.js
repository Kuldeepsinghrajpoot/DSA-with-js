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
    }

    //  here implimenting the NLR;

    // top view binary tree

    // toViewTree(root){
    //     const ans = [];

    //     if (root===null) {
    //         return [];
    //     }

    //     // create function to print  left values;

    //     function leftValue(root,ans){

    //         const queue = [root];

    //         while (queue.length>0) {
    //             const first = queue.shift();

    //             if (first.left) {
    //                 ans.push(first.data);
    //                 queue.push(queue.first)
    //             }
    //         }
    //     }
    //     const result = leftValue(root,ans);
    //     console.log(result)

    // }

    // todo: contruct inorder to preoder with o(n);

    constrcutTree(preorder, inorder, n) {
        for (let i = 0; i < n; i++) {
            this.inorderMap.set(preorder[i], i);
        }
        this.helperConstruct(inorder, 0, n - 1);
    }
    helperConstruct(preorder, startIndex, endIndex) {
        if (startIndex > endIndex) {
            return null;
        }
        const root = preorder[this.preorderIndex++];
        const node = new NodeList(root);
        const rootIndex = this.inorderMap.get(node);
        root.left = this.helperConstruct(preorder, startIndex, rootIndex - 1);
        root.right = this.helperConstruct(preorder, rootIndex++, endIndex);
        return root;
    }

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
    levelOrderTraversal() {
        if (this.root === null) {
            console.log("Tree is empty");
            return;
        }

        let queue = [[this.root, 0]]; // Queue contains pairs of [node, level]
        let currentLevel = 0;
        let result = ""; // To store the output for each level

        while (queue.length > 0) {
            let [node, level] = queue.shift(); // Get the current node and its level
            console.log("Processing Node:", node.data, "at Level:", level);

            // When we encounter a new level, print the previous level's result and reset
            if (level > currentLevel) {
                console.log(`Level ${currentLevel}: ${result.trim()}`);
                result = "";
                currentLevel = level;
            }

            // Append the current node's data to the result string
            result += node.data + " ";

            // Add the left and right children to the queue with their respective levels
            if (node.left) {
                queue.push([node.left, level + 1]);
                console.log("Enqueued Left Child:", node.left.data);
            }

            if (node.right) {
                queue.push([node.right, level + 1]);
                console.log("Enqueued Right Child:", node.right.data);
            }
        }

        // Print the final level's result
        if (result) {
            console.log(`Level ${currentLevel}: ${result.trim()}`);
        }
    }

    // simple way to print elements when we are using the stack so it is working as the LIFO

    reverseLevelOrder() {
        if (this.root === null) {
            console.log("Tree is empty");
            return;
        }

        const queue = [this.root];
        const stack = []; // To store nodes in reverse order

        while (queue.length > 0) {
            const node = queue.shift();
            stack.push(node); // Push node to stack

            // Enqueue right child first so that left child is processed first when popped
            if (node.right) queue.push(node.right);
            if (node.left) queue.push(node.left);
        }

        // Print nodes in reverse order
        while (stack.length > 0) {
            const node = stack.pop();
            process.stdout.write(node.data + " ");
        }
    }

    // height of the binary tree;

    heightOfBinaryTree(root) {
        if (root === null) {
            return 0;
        }
        const left = this.heightOfBinaryTree(root.left);
        const right = this.heightOfBinaryTree(root.right);
        return Math.max(left, right) + 1;
    }
    // depth first search - in-order (NLR) , pre-order(LNR), post-order(LRN),
}

// Example usage
const tree = new BinaryTree();
tree.insertData(5);
tree.insertData(6);
tree.insertData(7);
tree.insertData(8);
tree.insertData(9);
tree.insertData(10);
tree.insertData(11);
tree.insertData(12);
tree.insertData(13);

// console.log("Printing the elements level by level:");
// tree.levelOrderTraversal();

// console.log("Printing the elements in reverse level order:");
// // tree.reverseLevelOrder(); // Output should be in reverse level order

// // printing the max height of the tree;

// console.log("\n");
// const ans = tree.heightOfBinaryTree(tree.root);
// console.log(ans);

// todo : construct inorde to preorder from the given array elements

const inorder = [9, 3, 15, 20, 7];
const preorder = [3, 9, 20, 15, 7];
const n = inorder.length;

const root = tree.constrcutTree(preorder,inorder,  n);
console.log(root);
