// https://leetcode.com/problems/perfect-squares/discuss/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var squares = [];
    squares[0] = 0;

    for (var i = 1; i <= n; i++) {
        squares[i] = Math.pow(2, 31) - 1;
        for (var j = 1; j*j <= i; j++) {
            squares[i] = Math.min(squares[i], squares[i - j*j] + 1);
        }
    }
    return squares[n];
};
