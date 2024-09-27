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
    }
    insert(data) {
        const newNode = new NodeList(data);

        // If the tree is empty, set the root to the new node
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        // Level order insertion (using a queue)
        const queue = [this.root];

        while (queue.length > 0) {
            let currentNode = queue.shift(); // Dequeue the front node

            // If left child is null, insert the new node here
            if (currentNode.left === null) {
                currentNode.left = newNode;
                break;
            } else {
                queue.push(currentNode.left); // Otherwise, enqueue the left child
            }

            // If right child is null, insert the new node here
            if (currentNode.right === null) {
                currentNode.right = newNode;
                break;
            } else {
                queue.push(currentNode.right); // Otherwise, enqueue the right child
            }
        }
    }

    traversalDFS(root) {
        if (root === null) return []; // Fixing the condition to check for null
    
        const leftValues = this.traversalDFS(root.left);
        const rightValues = this.traversalDFS(root.right);
    
        return [root.data, ...leftValues, ...rightValues];
    }
    
}

let BinaryTreeObject = new BinaryTree();

BinaryTreeObject.insert('A');
BinaryTreeObject.insert('B');
BinaryTreeObject.insert('C');
BinaryTreeObject.insert('D');
BinaryTreeObject.insert('E');
BinaryTreeObject.insert('F');
BinaryTreeObject.insert('G');

// console.log(JSON.stringify(BinaryTreeObject, null, 2));
// console.log(JSON.stringify(BinaryTreeObject.traversalDFS(), null, 2))
console.log(JSON.stringify(BinaryTreeObject.traversalDFS(BinaryTreeObject.root), null, 2));
