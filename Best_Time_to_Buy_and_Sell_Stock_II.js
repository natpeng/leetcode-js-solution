/** 
 * Problem description:
 *   https://leetcode.com/problems/word-ladder/#/solutions
 */
 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length == 0) return 0;
    var totalMax = 0;
    if (prices.length == 0 && prices[0] > 0) var diff = prices[0];
    
    for (var i = 1; i < prices.length; i++) {
        diff = prices[i] - prices[i - 1];
        if (diff > 0) {
            totalMax += diff;
        }
    }
    
    return totalMax;
};
