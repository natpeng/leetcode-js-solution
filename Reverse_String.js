// https://leetcode.com/problems/reverse-string/#/description

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var start = 0,
        end = s.length - 1;
    
    var ret = s.split(''); // has to convert to array to reverse 
    
    while (start < end) {
        var tmp = ret[start];     
        ret[start++] = ret[end];
        ret[end--] = tmp;
    }
    
    return ret.join('');
};