/** 
 * Problem description:
 *   https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/#/solutions
 */
 
 /**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (prices.length == 0) return 0;
    if (k >= prices.length / 2) {
        return maxProfit2();
    }
    var buy;
    var sell = [];
    
    for (var i = 0; i <= k; i++) {
        sell[i] = [];
        for (var j = 0; j < prices.length; j++) {
            sell[i][j] = 0;
        }
    }
    
    // k is the changing variable here
    for (var i = 1; i <= k; i++) {
        // if i buy yesterday sell[i - 1][j - 1] - prices[j - 1]
        buy = -prices[0];
        sell[1][0] = 0;
        // assume we have to make k transactions
        for (var j = 1; j < prices.length; j++) {
            // assume we buy today
            sell[i][j] = Math.max(sell[i][j - 1], buy + prices[j]); // gain from buy of yesterday + gain from sell today
            buy = Math.max(buy, sell[i - 1][j] - prices[j]); // sell[i - 1][j] - prices[j] means if i buy today, sell[i - 1][j] is the max profit i gain today if i have another transaction today
        }
    }
    
    return sell[k][prices.length - 1];
    
    
    function maxProfit2 () {
        var diff = 0;
        var profit = 0;
        for (var i = 1; i < prices.length; i++) {
            diff = prices[i] - prices[i - 1];
            if (diff > 0) 
                profit += diff;
        }
        return profit;
    }
};
