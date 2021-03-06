//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/#/description

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length == 0) return null;
    var root = new TreeNode(nums[Math.floor(nums.length/2)]);
    root.left = sortedArrayToBST(nums.slice(0, Math.floor(nums.length/2))); // slice(start, end)
    root.right = sortedArrayToBST(nums.slice(Math.floor(nums.length/2) + 1, nums.length));
    
    return root;
};