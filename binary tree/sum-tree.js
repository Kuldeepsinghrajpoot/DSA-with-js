// first checking the list the balnace tree or not

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// couting the values of the sum those are return values are the equal to root of the tree or not

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertData(data) {
        const node = new TreeNode(data);
        if (this.root === null) {
            this.root = node;
            return;
        }

        const queue = [this.root];
        while (queue.length > 0) {
            const front = queue.shift();
            if (front.left === null) {
                front.left = node;
                break;
            } else {
                queue.push(front.left);
            }

            if (front.right === null) {
                front.right = node;
                break;
            } else {
                queue.push(front.right);
            }
        }
    }
    // sum tree
    sumTree(root) {
        // reciving node first of thing here
        // first check this is balace tree or not;

        function checkBalance(root) {
            if (root === null) {
                return [true, 0];
            }

            if (root.right === null || root.left === null) {
                return [true, root.data];
            }

            const [leftTree, leftSum] = checkBalance(root.left);
            const [rightTree, rightSum] = checkBalance(root.right);

            const isTrue =
                leftTree && rightTree && root.val === leftSum + rightSum;
            return [isTrue,root.val+leftSum+rightSum];
        }
        const isTrue = checkBalance(root);
        return isTrue
        // checking the node right and left elements are the same or not;
    }
    sumOfLongRootToLeafPath(root) {
        function sumNode(node, currentSum, currentLength) {
          // Base case: if node is null, return the current length and sum
          if (node === null) {
            return {node, maxSum: currentSum, maxLength: currentLength };
          }
    
          // Update the current sum with the current node's value
          currentSum += node.data;
    
          // Recursively call for left and right children
          const leftResult = sumNode(node.left, currentSum, currentLength + 1);
          const rightResult = sumNode(node.right, currentSum, currentLength + 1);
          // Determine which path to keep based on max length and max sum
          if (leftResult.maxLength > rightResult.maxLength) {
            return leftResult;
          } else if (rightResult.maxLength > leftResult.maxLength) {
            return rightResult;
          } else {
            // If lengths are equal, return the one with the larger sum
            return leftResult.maxSum > rightResult.maxSum ? leftResult : rightResult;
          }
        }
    
        // Destructure the result of sumNode
        const { maxSum } = sumNode(root, 0, 0);
    console.log(maxSum)
        return maxSum;
      }

    
}

const tree = new BinaryTree();
tree.insertData(5);
tree.insertData(6);
tree.insertData(7);
tree.insertData(8);
tree.insertData(9);
tree.insertData(10);
tree.insertData(11);
tree.sumTree(tree.root)
tree.sumOfLongRootToLeafPath(tree.root)
const startMemory = process.memoryUsage().heapUsed;

// Your code block here

const endMemory = process.memoryUsage().heapUsed;
console.log(`Memory used: ${(endMemory - startMemory) / 1024 / 1024} MB`);

