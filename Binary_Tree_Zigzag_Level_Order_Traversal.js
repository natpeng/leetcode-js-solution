// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/#/solutions

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
var zigzagLevelOrder = function(root) {
    var ret = [];
    zigzag(root, 0, ret);
    return ret;
};
// inorder traversal, tricky part is how to insert into the array, from head or tail
function zigzag(root, level, ret) {
    
    if (!root) return;
    
    zigzag(root.left, level+1, ret); // placed all nodes on left 
    
    if (level in ret) { // place the root
        if (level%2 != 0)  
            ret[level].unshift(root.val);
        else
            ret[level].push(root.val);
    }
    else {
        ret[level] = [];
        ret[level] = [root.val];
    }
    
    zigzag(root.right, level+1, ret); // place all nodes on right
    
    return;
}
