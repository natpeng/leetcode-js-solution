// https://leetcode.com/problems/3sum-closest/#/solutions

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
	var shu = new Array();
    	shu = nums;
    
    shu.sort(function(a, b) {
        return a - b; // compare function as arg to pass
    });
    
    var ret = Math.pow(2, 31) - 1;
    
    // if it's less than 3 elements, we can just return its sum
    if (shu.length <= 3) {
        ret = shu.reduce(function(sum, cur){
             return sum += cur;
         }, 0);
    }
    
    
    for (var i = 0; i < shu.length - 2; i++) {
            
        var small = i + 1,
            big = shu.length - 1;
        
        while (small < big) {
            sum = shu[i] + shu[small] + shu[big];
        
            if (sum == target) return sum;
            else if (sum > target) big--;
            else if (sum < target) small++;
            
            // refresh ret value to smaller sum by far
            ret = Math.abs(target - ret) > Math.abs(target - sum) ? sum : ret;
        }
            
    }
    
    return ret;
};