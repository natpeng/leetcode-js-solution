// https://leetcode.com/problems/perfect-squares/discuss/

/**
 * @param {number} n
 * @return {number}
 */
// Dynamic programming
var numSquares = function(n) {
    var squares = [];
    squares[0] = 0;

    for (var i = 1; i <= n; i++) {
        squares[i] = Math.pow(2, 31) - 1;
        for (var j = 1; j*j <= i; j++) {
            // noticed that same squares[i] has been calculated multiple times
            squares[i] = Math.min(squares[i], squares[i - j*j] + 1);
        }
    }
    return squares[n];
};

// Static dynamic programming
var numSquares = function(n) {
    var squares = [];
    squares[0] = 0;
    
    while (squares.length <= n) {
        var cur = Math.pow(2, 31) - 1;
        for (var j = 1; j*j <= squares.length; j++) {
            // every iteration, just calculate the next i number untill i = n
            cur = Math.min(cur, squares[squares.length - j*j] + 1);
        }
        squares.push(cur);
    }
    return squares[n];
};
