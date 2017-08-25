// https://leetcode.com/problems/coin-change/description/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var changes = [];
    changes[0] = 0;
    
    // changes[] means the anwser for different amount, so ret = changes[amount]
    while(changes.length <= amount){
        var c = Math.pow(2, 31) - 1;
        for (var i = 0; i < coins.length; i++) {
            if (changes.length - coins[i] < 0) 
                continue;
            c = Math.min(c, 1 + changes[changes.length - coins[i]]);
        }
        changes.push(c);
    }
    
    return changes[amount] == Math.pow(2, 31) - 1 ? -1 : changes[amount];
};
