/** 
 * Problem description:
 *   https://leetcode.com/problems/find-all-anagrams-in-a-string/#/solutions
 */
 /**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 // the tricky part is why we need the hash map, it's needed to store how often each char in p occurres 
 // in current window
var findAnagrams = function(s, p) {
    if (s.length == 0 || p.length == 0) return [];
    // build a hash table for p
    var map = {};
    for (var i = 0; i < p.length; i++) {
        map[p[i]] ? map[p[i]]++ : map[p[i]] = 1;
    }
    
    // loop through s
    var left = 0; // to store the starting position
    var right = 0;
    var count = p.length; // count total occurrence of each char in p
    var ret = [];
    while (right < s.length) {
        // if current char in s exit in map, also amount of times it appears less than it shows in p 
        // now we also shift right of the right pointer
        // and reduce the value in hash
        if (map[s[right]] >= 1) {
            count--;
        } 
        if (map[s[right]] != undefined)
            map[s[right]]--; // map is used to count in current window, if the char is in p and showed up not more than it should be
        right++;
        
        
        // the occurence of each char in current window is the same as in p
        if (count == 0) // this is when all values in hash is 0
            ret.push(left);
        
        // when window size reaches p length, we know this is not the right window, 
        // need to restore the value changed in hash and count because of left
        // shift left by 1
        if (right - left == p.length) {
            if (map[s[left]] != undefined && map[s[left]] >= 0) {
                count++;
            }
            map[s[left]] += 1;
            left++;
        }
    }
    return ret;
};