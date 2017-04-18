/** 
 * Problem description:
 *   https://leetcode.com/problems/letter-combinations-of-a-phone-number/#/description
 */
 /**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0) {
        return [];
    }
    var map = [
    	[],
    	[],
    	['a', 'b', 'c'],
    	['d', 'e', 'f'],
    	['g', 'h', 'i'],
    	['j', 'k', 'l'],
    	['m', 'n', 'o'],
    	['p', 'q', 'r', 's'],
    	['t', 'u', 'v'],
    	['w', 'x', 'y', 'z'],
    ];
    var ret = [];
    var subret = '';
    backtrack(digits, ret, subret, 0);
    return ret;
    
    function backtrack(d, r, s, j){

    	// reach the last element in digits, which is also the last level in the tree
    	// NOTE: here is j == d.length, not d.length -1
    	if(j == d.length) {
    		r.push(s);
    		return;
    	}

    	// process the jth element in digits
    	// each level will list all possibilities of the current jth element
    	// then pass on to next level
    	for(var i = 0; i < map[d[j]].length; i++) {
    		backtrack(d, r, s + map[d[j]][i], j + 1);
    	}
    }
};