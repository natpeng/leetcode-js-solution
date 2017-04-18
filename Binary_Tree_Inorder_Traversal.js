// 用stack来保存所有visit过的node, 并利用stack LIFO 的原则实现in-order traverse。
// 先遍历所有左边的节点，每次visit后push进stack.
// 当到达最左边leaf node时，开始pop，
// 每pop一个node，查看是否有right child，
// 如果有，开始遍历right tree,如果没有，pop后一个。
/** 
 * Description: https://leetcode.com/problems/binary-tree-inorder-traversal/#/description
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var Stack = function() {
        this.vals = [];
        this.top = function() {
            return this.vals[this.vals.length - 1];
        }
        this.push = function(val) {
            this.vals.push(val);
        }
        this.pop = function() {
            this.vals.pop();
        } 
        this.empty = function() {
            return this.vals.length == 0;
        }
    }
    
    var sol = [];
    var s = new Stack();
    if (!root) return [];
    var cur = root; 

        while (cur || !s.empty()) {
    	if (cur) {
    		s.push(cur);
    		cur = cur.left;
    	}
    	else {
    		sol.push(s.top().val);
    		cur = s.top(); // cur is null now, because it is the left of leaf node, need to reset back to this leaf node
    		s.pop(); // pop node if its val's been added to sol 
	    	if(cur) 
	    	    cur = cur.right; // repeat finding the most left child
	    	
    	}
    	
    }
    
    return sol;

};