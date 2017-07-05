// https://leetcode.com/problems/longest-common-prefix/#/description

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // use reduce method;
    
    if (strs.length == 0) return '';
    
    var ret = strs.reduce(function(prev, str) {
        var i = 0;
        while (prev[i] && str[i] && prev[i] == str[i]) i++;
        return prev.slice(0, i); // start at 0 end at i;
    });
    
    return ret;
};