// https://leetcode.com/problems/maximum-subarray/#/description

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = -Math.pow(2, 31),
        maxTillCurrent = 0;
    
    // maxTillCurrent record if to start a new subarray, max record each subarray in the list 
    for (var i = 0; i < nums.length; i++) {
        maxTillCurrent = Math.max(maxTillCurrent + nums[i], nums[i]);
        max = Math.max(max, maxTillCurrent);
    }
    return max;
};
