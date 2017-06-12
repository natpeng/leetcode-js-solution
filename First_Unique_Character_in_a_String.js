/** 
 * Description: https://leetcode.com/problems/binary-tree-inorder-traversal/#/description
 */
 /**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // build a hash table with frequency of each char in s, 
    // then go through all elements in the table to find the key with value = 1;
    // we can loop through the table by the key, which is each char in s
    var map = {};
    
    for (var i = 0; i < s.length; i++) {
        if (s[i] in map)
            map[s[i]]++;
        else 
            map[s[i]] = 1;
    }
    
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]] == 1) 
            return i;
    }
    return -1;
};
