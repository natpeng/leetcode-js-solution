// https://leetcode.com/problems/majority-element/#/solutions

// http://blog.csdn.net/Poison520/article/details/60977944

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var count = 1;
    var major = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (count == 0 && nums[i] != major) {
            count = 1;
            major = nums[i];
            continue;
        }
        
        if (nums[i] == major)
            count++;
        else 
            count--;
    }
    
    return major;
};