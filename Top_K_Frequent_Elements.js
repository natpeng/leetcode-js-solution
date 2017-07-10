// https://leetcode.com/problems/top-k-frequent-elements/#/solutions

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // need to calculate frequency first for each number
    // then put same frequency numbers in the same bucket
    // return numbers from highest frequency bucket
    var frequency = {},
        max = -Math.pow(2, 31);
    for (var i = 0; i < nums.length; i++) {
        if (! (nums[i] in frequency)) {
            frequency[nums[i]] = 0;
        }
        frequency[nums[i]]++;
        max = Math.max(max, frequency[nums[i]]);
    }
    var bucket = {};
    
    Object.entries(frequency).forEach(function([key, val]){
        if (! (val in bucket)) {
            bucket[val] = [];
        }
        bucket[val].push(parseInt(key));
    });
    
    var ret = [];
    for (var i = max; i > 0; i--) {
        if (i in bucket) {
            ret = ret.concat(bucket[i]); 
            if (ret.length >= k) 
                return ret.slice(0, k);
        } 
    }
    return ret;
    
};
