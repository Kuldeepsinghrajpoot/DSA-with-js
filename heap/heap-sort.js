class Solution {

    isHeap(root) {

        const totalNodes = countNodes(root);
        return isCompleteTree(root, 0, totalNodes) && isHeapPropertySatisfied(root);

        // Function to count the total number of nodes in the tree
        function countNodes(root) {
            if (!root) return 0;
            return 1 + countNodes(root.left) + countNodes(root.right);
        }

        // Function to check if the tree is complete
        function isCompleteTree(root, index, totalNodes) {
            if (!root) return true;
            if (index >= totalNodes) return false;

            return (
                isCompleteTree(root.left, 2 * index + 1, totalNodes) &&
                isCompleteTree(root.right, 2 * index + 2, totalNodes)
            );
        }

        // Function to check the heap property
        function isHeapPropertySatisfied(root) {
            if (!root) return true;

            // Check for the left child
            if (root.left && root.value < root.left.value) return false;

            // Check for the right child
            if (root.right && root.value < root.right.value) return false;

            return (
                isHeapPropertySatisfied(root.left) && isHeapPropertySatisfied(root.right)
            );
        }

        // Main function to check if the tree is a max heap


    }
}