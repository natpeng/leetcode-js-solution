/** 
 * Problem description:
 *   https://leetcode.com/problems/product-of-array-except-self/#/solutions
 */
 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // product except self is the product of all numbers on the left side * product of right side
    var left = []; // store product from left side
    left[0] = 1;
    for (var i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1]; // left[1] = nums[0], left[2] = left[1] * nums[1]
    }
    
    // count product of right side and the ret value at the same time
    var right = 1;
    var ret = [];
    for (var i = nums.length - 1; i >= 0; i--) {
        ret[i] = left[i] * right;
        right *= nums[i];
    }
    return ret;
};