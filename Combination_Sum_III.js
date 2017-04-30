/** 
 * Problem description:
 *   https://leetcode.com/problems/combination-sum-iii/#/description
 */
 /**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    if(n == 0) return [];

    var ret = [];
  	var candidates = 9;
    backtrack(candidates, 1, [], 0, ret, 1);
    return ret;

    function backtrack(candidates, start, sub, sum, ret, level) {
    	if (level > k) return; 

    	// stop recurrsion condition
    	if (sum == n && level == k) {
    		ret.push(sub.concat()); // !TRICKY! .concat() is veryimportant, it returns a new array, so here it's passing by value instead of passing by reference
    		return ret;
    	}
    	else {
    		return;
    	}

    	// all numbers are postion
    	if (sum > n) {
    		return;
    	}
    	
    	// need to do backtrack for every node
    	// i does not start from 0 for each node because no duplicates allowed in answer
    	for(var i = start; i < candidates + 1; i++) {
    		if(i > start && i == i - 1) continue; // avoid repeatitive solution in same level, not in next level
    	    sub.push(i);
    		backtrack(candidates, i+1, sub, sum + i, ret, level + 1);
    		sub.pop();
    	}
    }
};