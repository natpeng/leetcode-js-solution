// https://leetcode.com/problems/triangle/description/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (triangle.length == 0) 
        return 0;
    var len = triangle.length;
    var path = new Array(len);
    
    for (var i = 0; i < len; i++) {
        path[i] = new Array(triangle[i].length);
        path[i].fill(0);
    }
    path[0][0] = triangle[0][0];

    var ret = Math.pow(2, 31) - 1;
    
    for (var i = 1; i < len; i++) {
        path[i][0] = path[i-1][0] + triangle[i][0];
        for (var j = 1; j < triangle[i-1].length; j++) {
            path[i][j] = Math.min(path[i-1][j-1], path[i-1][j]) + triangle[i][j];
        }
        path[i][j] =  path[i-1][j-1] + triangle[i][j];   
    }
    
    for (var j = 0; j < triangle[len - 1].length; j++) {
        ret = Math.min(ret, path[len - 1][j]);
    }
    
    return ret;
};
