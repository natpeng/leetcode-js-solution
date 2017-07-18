// https://leetcode.com/problems/range-sum-query-immutable/#/description

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    
    var temp = [];
    
    nums.reduce(function(total, cur, i){
        total += cur
        temp[i] = total;
        return total;
    }, 0);
    
    this.sum = temp;

};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (i == 0) return this.sum[j];
    
    return this.sum[j] - this.sum[i-1];
};
