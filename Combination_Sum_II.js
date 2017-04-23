/** 
 * Problem description:
 *   https://leetcode.com/problems/combination-sum-ii/#/description
 */
 /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if(candidates.length == 0) return [];

    var ret = [];
    candidates.sort(); // sort without comparison function will sort in ascending order
    backtrack(candidates, 0, [], 0, ret);
    return ret;

    function backtrack(candidates, start, sub, sum, ret) {
    	// stop recurrsion condition
    	if (sum == target) {
    		ret.push(sub.concat()); // !TRICKY! .concat() is veryimportant, it returns a new array, so here it's passing by value instead of passing by reference
    		return ret;
    	}

    	// all numbers are postion
    	if (sum > target) {
    		return;
    	}
    	
    	// need to do backtrack for every node
    	// i does not start from 0 for each node because no duplicates allowed in answer
    	for(var i = start; i < candidates.length; i++) {
    		if(i > start && candidates[i] == candidates[i-1]) continue; // avoid repeatitive solution in same level, not in next level
    	    sub.push(candidates[i]);
    		backtrack(candidates, i+1, sub, sum + candidates[i], ret);
    		sub.pop();
    	}
    }
};