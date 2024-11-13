class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class ConstructBST {
    constructor() {
        this.root = null;
    }

    insert(data, root = this.root) {
        const node = new TreeNode(data);

        if (this.root === null) {
            this.root = node;
            return this.root;
        }

        if (root === null) {
            return node;
        }

        if (data < root.data) {
            root.left = this.insert(data, root.left);
        } else if (data > root.data) {
            root.right = this.insert(data, root.right);
        }

        return root;
    }

    inOrder(root = this.root) {
        if (root === null) {
            return;
        }
        this.inOrder(root.left);
        console.log(root.data);
        this.inOrder(root.right);
    }

    minValue(root = this.root) {
        if (root === null) {
            return null;
        }
        if (root.left !== null) {
            return this.minValue(root.left);
        }
        return root.data;
    }

    maxValue(root = this.root) {
        if (root === null) {
            return null;
        }
        if (root.right !== null) {
            return this.maxValue(root.right);
        }
        return root.data;
    }

    predecessor(value) {
        let predecessor = null;
        let current = this.root;

        while (current !== null) {
            if (current.data === value) {
                if (current.left !== null) {
                    let temp = current.left;
                    while (temp.right !== null) {
                        temp = temp.right;
                    }
                    predecessor = temp.data;
                }
                break;
            } else if (value < current.data) {
                current = current.left;
            } else {
                predecessor = current.data;
                current = current.right;
            }
        }

        console.log("Predecessor:", predecessor);
        return predecessor;
    }

    successor(value) {
        let successor = null;
        let temp = this.root;
        while (temp !== null) {
            if (temp.data === value) {
                if (temp.right !== null) {
                    let nodeTemp = temp.right;
                    while (nodeTemp.left !== null) {
                        nodeTemp = nodeTemp.left;
                    }
                    successor = nodeTemp.data;
                }
                break;
            } else if (value < temp.data) {
                successor = temp.data;
                temp = temp.left;
            } else {
                temp = temp.right;
            }
        }
        console.log("Successor:", successor);
        return successor;
    }

    deleteNode(value) {
        const findMax = (node) => {
            while (node.right !== null) {
                node = node.right;
            }
            return node;
        };

        const deleteRecursively = (node, value) => {
            if (node === null) {
                return null;
            }

            if (value < node.data) {
                node.left = deleteRecursively(node.left, value);
            } else if (value > node.data) {
                node.right = deleteRecursively(node.right, value);
            } else {
                if (node.left === null) {
                    return node.right;
                } else if (node.right === null) {
                    return node.left;
                }

                const predecessor = findMax(node.left);
                node.data = predecessor.data;
                node.left = deleteRecursively(node.left, predecessor.data);
            }
            return node;
        };
        
        this.root = deleteRecursively(this.root, value);
    }

    kthSmallestElement(root = this.root, k) {
        let count = 0;
        let result = null;

        function inorderTraversal(node) {
            if (!node || result !== null) return;

            inorderTraversal(node.left);

            count++;
            if (count === k) {
                result = node.data;
                return;
            }

            inorderTraversal(node.right);
        }

        inorderTraversal(root);
        return result;
    }
}

// Example Usage
const bst = new ConstructBST();
[1,null,2,null,3,null,4,null,null].forEach((e) => bst.insert(e));

console.log("In-order traversal:");
bst.inOrder(bst.root);

console.log("Minimum value in BST:", bst.minValue());
console.log("Maximum value in BST:", bst.maxValue());

bst.predecessor(30);
bst.successor(30);

console.log("Deleting node with value 20:");
bst.deleteNode(20);
console.log("In-order traversal after deletion:");
bst.inOrder(bst.root);

const k = 3;
console.log(`${k}th smallest element is:`, bst.kthSmallestElement(bst.root, k));
