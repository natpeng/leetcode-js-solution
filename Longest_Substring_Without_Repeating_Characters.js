// https://leetcode.com/problems/longest-substring-without-repeating-characters/#/solution

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // sliding window: make sure in current window, all characters are non-repeatitive, if a repeatitive char exist, then update its value in the value so that map[char] = largestCharIndexInSSoFar
    var map = new Map();
    var ret = 0;
    for (var i = 0, j = 0; j < s.length; j++) {
        
        if (s[j] in map) {
            i = Math.max(map[s[j]] + 1, i); // i cannot go backwards 
        }
        ret = Math.max(ret, j - i + 1);
        
        map[s[j]] = j;
        
    }
    return ret;

};
