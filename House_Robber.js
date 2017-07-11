// https://leetcode.com/problems/house-robber/#/solutions

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var evenMax = 0,
        oddMax = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (i%2 == 0) {
            evenMax = Math.max(evenMax + nums[i], oddMax);
        }
        else {
            oddMax = Math.max(oddMax + nums[i], evenMax);
        }
    }
    
    return Math.max(evenMax, oddMax);
};
