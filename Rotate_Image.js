/** 
 * Problem description:
 *   https://leetcode.com/problems/rotate-image/#/description
 */
 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (matrix.length == 0 || matrix[0].length == 0)
        return matrix;
    
    for (var i = 0; i < matrix.length; i++) {
        for (var j = i + 1; j < matrix[0].length; j++) {
            // swap diagonally, we only need to traverse the half on one side of the diagonal 
            // there is no pass by reference in js
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // now need to reverse the order vertically
    // i is the same, change j
    // only need to traverse one side vertically
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < parseInt(matrix[0].length/2); j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix.length - j - 1];
            matrix[i][matrix.length - j - 1] = temp;
        }
    }
    
    return;
};