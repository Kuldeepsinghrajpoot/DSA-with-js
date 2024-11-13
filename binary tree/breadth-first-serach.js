class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Main {
    constructor() {
        this.root = null;
    }

    // Binary Search Tree Insertion
    binary_search_tree(data, root = this.root) {
        const node = new TreeNode(data);
        if (this.root === null) {
            this.root = node;
            return this.root;
        }

        if (root === null) {
            return node;
        }

        if (root.data > data) {
            root.left = this.binary_search_tree(data, root.left);
        } else if (root.data < data) {
            root.right = this.binary_search_tree(data, root.right);
        }
        return root;
    }

    // In-order Traversal
    display(root = this.root) {
        if (root === null) return;
        this.display(root.left);
        console.log(root.data);
        this.display(root.right);
    }

    // Level Order Traversal
    level_order_traversal() {
        if (this.root === null) {
            console.log("Tree is empty");
            return;
        }

        const queue = [this.root]; // Initialize a queue with the root
        while (queue.length > 0) {
            const current = queue.shift(); // Dequeue the front node
            console.log(current.data); // Process the current node

            // Enqueue left child if it exists
            if (current.left) {
                queue.push(current.left);
            }

            // Enqueue right child if it exists
            if (current.right) {
                queue.push(current.right);
            }
        }
    }
    // second method of level order traveral with the both of child 
    
    level_order_traversal_2(root = this.root){
        if (root === null) return null;

        let currentLevelStart = root;
        while (currentLevelStart) {
            let current = currentLevelStart;
            let nextLevelStart = null;
            let prev = null;
    
            while (current) {
                if (current.left) {
                    if (prev) {
                        prev.next = current.left;
                    } else {
                        nextLevelStart = current.left;
                    }
                    prev = current.left;
                }
    
                if (current.right) {
                    if (prev) {
                        prev.next = current.right;
                    } else {
                        nextLevelStart = current.right;
                    }
                    prev = current.right;
                }
                
                current = current.next;
            }
            
            currentLevelStart = nextLevelStart;
        }
        
        return root;
    }
}

// Testing the Binary Search Tree
const node = new Main();
[20, 10, 30, 5, 15].forEach((e) => node.binary_search_tree(e));

console.log("Level Order Traversal:");
node.level_order_traversal();

console.log("In-order Traversal:");
node.display();
