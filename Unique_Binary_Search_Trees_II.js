/** 
 * Problem description:
 *   https://leetcode.com/problems/unique-binary-search-trees-ii/#/description
 */
 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
	if (n == 0) return [];
	return bst(1, n);

    function bst(min, max) {
    	var ret = [];
    	if(min > max) {
    		ret.push(null);
    		return ret; // return each subtree to next level
    	}
    	

    	for (var i = min; i <= max; i++) {
    		var leftTree = bst(min, i-1); 
    		var rightTree = bst(i+1, max);

    		for (var j = 0; j < leftTree.length; j++) {
    			for(var k = 0; k < rightTree.length; k++) {
    				var rootNode = new TreeNode(i);
    				rootNode.left = leftTree[j];
    				rootNode.right = rightTree[k];
    				ret.push(rootNode);
    			}
    		}
    	}

    	return ret;
    }
};