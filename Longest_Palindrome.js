/** 
 * Problem description:
 *   https://leetcode.com/problems/longest-palindrome/#/description
 */
 /**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // Hash map
    var map = {};
    var sol = 0;
    var flag = 0; // if s has odd count char

    for (var i = 0; i < s.length; i++) {
    	if (!(s[i] in map))
            map[s[i]] = 1; // need to initialize value type
    	else 
    	  map[s[i]]++;
    }

    // take all char with even count, and take (n-1) char with odd count
    for (var key in map) {
    	sol += map[key];
    	
    	if (map[key] % 2 == 1) {
    		sol--;
    		flag = 1;
    	}
    }
    
    // if has odd count char, take one to form palindrome like 'level' 
    return flag ? sol + 1 : sol; 
};