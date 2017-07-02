//https://leetcode.com/problems/single-number/#/solutions

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // XOR 
    // 0 0 is 0
    var ret = 0;
    for (var i = 0; i < nums.length; i++) {
        ret ^= nums[i]; 
    }
    
    return ret;
};