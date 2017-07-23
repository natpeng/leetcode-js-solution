// https://leetcode.com/problems/k-diff-pairs-in-an-array/#/discuss

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0 || nums.length == 0) return 0;
    
    var map = new Map();
    var ret = 0;
    for (var i = 0; i < nums.length; i++) {
        if (!(nums[i] in map)) 
            map[nums[i]] = 1;
        else 
            map[nums[i]]++;
    }
    
    for (key in map) {
        if (parseInt(key)+k in map) {
            if (k==0) {
                if (map[parseInt(key) + k] > 1)
                    ret += 1;
            }    
            else
                ret+=1;
        }
    }
    return ret;
};
