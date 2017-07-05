// https://leetcode.com/problems/binary-tree-level-order-traversal/#/description

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var ret = [];

    preOrder(root, 0, ret);
  
    return ret;
};
// pass in level to find which array to push to 
function preOrder(root, level, ret) {
    if (!root) return;
    
    if (level in ret)
        ret[level].push(root.val);
    else 
        ret[level] = [root.val];
    
    preOrder(root.left, level+1, ret);
    preOrder(root.right, level+1, ret);
    
    return;
    
}