// https://leetcode.com/problems/two-sum/#/solutions

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var shu = [];
    for (var i = 0; i < nums.length; i++) {
        if(target - nums[i] in shu) {
            return [shu[target-nums[i]], i];
        }
        shu[nums[i]] = i;
    }
    
    return [];
    
};