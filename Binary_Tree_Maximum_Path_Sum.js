// https://leetcode.com/problems/binary-tree-maximum-path-sum/#/solutions

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// we need to assume the max will be a path that pass through a LCA for both sides of this subtree, once we detect one side of it has a negative value, we make it = 0, and goes further up on the tree, throughout this all process, we record maxValue for each subtree, and update this maxValue if necessary until we traversed the whole tree(reach root), because the maxValue can be a path on a subtree or a branch or a path pass throught the root.
var maxPathSum = function(root) {
    var maxValue = - Math.pow(2, 31);
    maxSum(root);
    return maxValue;
    
    function maxSum(root) {
        if (root == null) return 0;
        var left = Math.max(0, maxSum(root.left));
        var right = Math.max(0, maxSum(root.right));
        maxValue = Math.max(maxValue, left + right + root.val);
        return Math.max(left, right) + root.val;
    }
};
