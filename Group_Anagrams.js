// https://leetcode.com/problems/group-anagrams/#/description

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    // use sorted str as key to form a map
    
    var map = {};
    
    for (var i = 0; i < strs.length; i++) {
        var sorted = strs[i].split('').sort().join('');
        
        if (!map[sorted]) {
            map[sorted] = [];
        }
        
        map[sorted].push(strs[i]);
    }
    
    
    
    var ret = [],
        i = 0;
    
    Object.entries(map).forEach(function([key, value]) {
        ret[i++] = value;
    })
    
    return ret;
};