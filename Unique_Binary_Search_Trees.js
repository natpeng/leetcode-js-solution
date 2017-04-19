/** 
 * Problem description:
 *   https://leetcode.com/problems/unique-binary-search-trees/#/description
 */
 /**
 * @param {number} n
 * @return {number}
 */
 // Dynamic Programming: 
 // use 1,2,3 as the root (n=3)
 // f(0)*f(2) + f(1)*f(1) + f(2)*f(0); 
 // so recursive formula is 
 // f(0) = 1; not 0, so we can have f(1) = f(0)*f(0) = 1;
 // f(n) = f(0)*f(n-1) + f(1)*f(n-2) + ... + f(n-1)*f(0)
 // important ** how to code based on recursive formula
var numTrees = function(n) {
	var s = [];
	s[0] = 1;
	for (var i = 1; i <=n; i++) {
	    s[i] = 0; // very important, need to initialize all s[i] to be a number, so we can use += later
	}
	for (var i = 1; i <= n; i++) {
		for(var j = i; j > 0; j--) {
			s[i] += s[i-j]*s[j-1];
		}
	}
    return s[n];
};