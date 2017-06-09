/** 
 * Problem description:
 *   https://leetcode.com/problems/serialize-and-deserialize-binary-tree/#/description
 */
 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var NN = 'X'; // null node

// looks like it does not take s directly for recursion calls,
// so need to convert to array in the recursion function 
// if it's an array, and convert to string when returning result, 
// we don't need spliter
var serialize = function(root) {
    var s = [];
    preOrderTraverse(root, s);
    return s.toString();
    
    function preOrderTraverse(root, s) {
        if (root == null) {
            s.push(NN); // cannot push null val to an array
            return;
        }
        s.push(root.val);
        preOrderTraverse(root.left, s);
        preOrderTraverse(root.right, s);
    }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data.length == 0) return data;
    var s = data.split(','); // returns an array
    return preOrderTree(s);
    
    // tree recursion: think about how the last level will execute
    // it will return null to both sides and return the leaf node, 
    // then go back to last call from stack.
    function preOrderTree(s) {
        if (s.length == 0) return null;
        
        var head = s.shift(); // this will remove head and return the val
        if (head == 'X') {
            return null; 
        }
        var root = new TreeNode(parseInt(head));
        root.left = preOrderTree(s); // it will be null if s[0] is X
        root.right = preOrderTree(s);
        
        return root;
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */