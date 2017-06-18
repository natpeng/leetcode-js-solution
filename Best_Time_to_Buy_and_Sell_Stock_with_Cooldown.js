/** 
 * Problem description:
 *   https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/#/solutions
 */
 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // buy[i] = Math.max(buy[i - 1], rest[i - 1] - price); to make sure we rest before we buy
    // sell[i] = Math.max(sell[i - 1], buy[i - 1] + price);
    // rest[i] = sell[i - 1]; 
    // substitute rest[i] with sell[i - 1]
    // ==>
    // buy[i] = Math.max(buy[i - 1], sell[i - 2] - price);
    // sell[i] = Math.max(sell[i - 1], buy[i - 1] + price);
    
    var buy = Number.MIN_SAFE_INTEGER;
    var sell = 0;
    var rest = 0;
    var prev_buy = 0;

    
    for (var i = 0; i < prices.length; i++) {
        prev_buy = buy;
        buy = Math.max(buy, rest - prices[i]);
        rest = sell;
        sell = Math.max(sell, prev_buy + prices[i]);
    }
    
    return sell;
};
