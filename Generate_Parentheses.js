/** 
 * Problem description:
 *   https://leetcode.com/problems/generate-parentheses/#/description
 */
 /**
 * @param {number} n
 * @return {string[]}
 */
// Backtracking (n node tree in each level, n = options in every node)
var generateParenthesis = function(n) {
	var ret = [];
	var subret = "";
	backtrack(subret, ret, n, n);
	return ret;

	function backtrack(s, r, left, right){
		// return the solution set when () all used
		if (right == 0 && left == 0) {
			r.push(s);
			return;
		}
		// more ) than ( in the string
		if (left > right) {
			return;
		}
		// depth first search
		if (left > 0) {
			backtrack(s + '(', r, left - 1, right);
		}
		if (right > 0) {
			backtrack(s + ')', r, left, right - 1);
		}
	}   
};