// https://leetcode.com/problems/string-to-integer-atoi/#/solutions

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var base = 0,
        sign = 1,
        maxInt = Math.pow(2, 31) - 1,
        minInt = Math.pow(2, 31),
        i = 0;
    
    str = str.replace(/^\s+/g, '');
    
    // if first is a sign, we need to skip to second char
    if (str[i] == '-') {
        sign = -1;
        i++;
    }
    else if (str[i] == '+') {
        i++;
    }
    
    
    
    for (; i < str.length; i++) {
       
        if ( !/[0-9]/.test(str[i]) ) break;
       
        if (base > Math.floor(maxInt/10) || base == parseInt(maxInt/10) && parseInt(str[i]) > 7) {
            
            return sign > 0 ? maxInt : sign * minInt;
        }
            
        
        base = base * 10 + parseInt(str[i]);   
    }
     
    return sign * base;
};