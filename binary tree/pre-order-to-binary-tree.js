/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    let index = 0;

    function buildBST(bound) {
        if (index === preorder.length || preorder[index] > bound) {
            return null;
        }

        const rootVal = preorder[index++];
        const root = new TreeNode(rootVal);

        // Build the left and right subtrees with appropriate bounds
        root.left = buildBST(rootVal);
        root.right = buildBST(bound);

        return root;
    }

    return buildBST(Infinity);
};
