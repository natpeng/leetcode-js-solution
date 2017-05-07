/** 
 * Problem description:
 *   https://leetcode.com/problems/climbing-stairs/#/description
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 0) return 0;
    var dp = [];
        dp[0] = 1;
        dp[1] = 1;
    for (var i = 2; i <= n; i++) {
        dp[i] = 0;
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};