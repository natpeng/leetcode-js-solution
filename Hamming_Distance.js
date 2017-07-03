// https://leetcode.com/problems/hamming-distance/#/solutions

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // bit manipulation, then convert to binary number in string, remove 0, count length
    return (x^y).toString(2).replace(/0/g, '').length;
};