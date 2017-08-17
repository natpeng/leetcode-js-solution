// https://leetcode.com/problems/maximum-product-subarray/discuss/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length == 0) return;
    var totalMax = nums[0],
        min = nums[0],
        max = nums[0];
    
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            var temp = max;
            max = min;
            min = temp;
        }
        
        max = Math.max(nums[i], max*nums[i]);
        min = Math.min(nums[i], min*nums[i]);
    
        totalMax = Math.max(totalMax, max);
    }
    
    return totalMax;
};
