/** 
 * Description: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/#/solutions
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length == 0) return 0;
    var curMax = 0; // the accumulated profit in a period of time
    var totalMax = 0; // the one time we get the most profit during this period of time
    var diff = 0; // this is the accumulated profit each day
    for (var i = 1; i < prices.length; i++) {
        diff += prices[i] - prices[i - 1]; // if we buy from day 0
        if (diff > 0)
            curMax = diff; // refresh curMax, we keep the stock as it's still growing in price
        else {
            // if diff is negative, means the price droped lower than the day we bought it, we sell the day before and curMax keeps the same 
            diff = 0; // reset accumulated profit
        }
            
        totalMax = Math.max(totalMax, curMax); // because we could have bought and sold it in different time period, which period gives us the maxium profit? since in this question, we can only buy once
    }
    return totalMax;
};
