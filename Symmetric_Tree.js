// https://leetcode.com/problems/symmetric-tree/#/solutions

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    return compare(root.left, root.right);
};

function compare(left, right) {
    if (!left || !right)
        return left == right;
    else if (left.val != right.val) {
        return false;
    }
    
    return compare(left.left, right.right) && compare(left.right, right.left);
}