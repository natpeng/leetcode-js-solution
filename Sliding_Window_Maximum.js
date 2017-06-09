/** 
 * Problem description:
 *   https://leetcode.com/problems/sliding-window-maximum/#/description
 */
 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // deque is a data structure that can pop push elements from both ends
    var deque = [];
    var ret = [];
    // for O(n) complexity, must traverse the array once
    for (var i = 0; i < nums.length; i++) {
        // the deque should always keep all the potential numbers
        // the elements out of range cannot be a potential number
        
        while (deque.length > 0 && i + 1 - k > deque[0]) {
            deque.shift();
        }

        // last element must be in the range, but if it's smaller than nums[i], it cannot be a candidate
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        // now we can push nums[i], it is a potential candidate
        deque.push(i);
        // if k = length, or if k = 1
        if (i + 1 >= k) {
            ret.push(nums[deque[0]]);
        }
        
    }
    
    return ret;
};