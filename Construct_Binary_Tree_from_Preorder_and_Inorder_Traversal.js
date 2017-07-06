// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/#/description

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// array will include null, the rease to give inorder array is to divide array to left and right tree
// so we can do recursive calls
var buildTree = function(preorder, inorder) {
    if (preorder.length == 0) return null;
    
    var root = new TreeNode(preorder[0]);
    var i = 0;
    while (i < inorder.length && inorder[i] != preorder[0]) i++;
    
    // divide inorder list into left and right;
    root.left = buildTree(preorder.slice(1, i+1), inorder.slice(0, i));
    root.right = buildTree(preorder.slice(i+1, preorder.length), inorder.slice(i+1, inorder.length));
    
    return root;
    
};