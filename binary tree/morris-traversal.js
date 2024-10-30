class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class MorrisTraversal {
    inorderTraversal(root) {
        let current = root;
        const result = [];

        while (current !== null) {
            // Case 1: No left child
            if (current.left === null) {
                result.push(current.data);
                current = current.right; // move to right child
            } else { 
                // Case 2: Find the inorder predecessor of the current node
                let predecessor = current.left;
                while (predecessor.right !== null && predecessor.right !== current) {
                    predecessor = predecessor.right;
                }

                // Case 2a: Make current the right child of its inorder predecessor
                if (predecessor.right === null) {
                    predecessor.right = current; // create a temporary thread
                    current = current.left;
                } 
                // Case 2b: Revert the changes made to restore the original tree
                else {
                    predecessor.right = null; // remove the thread
                    result.push(current.data); // visit the current node
                    current = current.right; // move to right child
                }
            }
        }
        
        return result;
    }
}

// Example Usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const morris = new MorrisTraversal();
console.log("Inorder Morris Traversal:", morris.inorderTraversal(root));
// Expected Output: [4, 2, 5, 1, 3]
