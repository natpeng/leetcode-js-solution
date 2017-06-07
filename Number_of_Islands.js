/** 
 * Problem description:
 *   https://leetcode.com/problems/number-of-islands/#/description
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
// Mark all adjacent '1' to '0', so the next encountered '1' will be a separate island 
// this is a dfs tree, each node has 4 children
var numIslands = function(grid) {
    if (grid.length == 0 || grid[0].length == 0) return 0;
    var ret = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                dftraverse(grid, i, j);
                ret++;
            }
        }
    }
    return ret;
    
    function dftraverse(g, i, j) {
        if (i < 0 || i >= g.length || j < 0 || j >= g[0].length || g[i][j] != '1') return;
        g[i][j] = '0';
        dftraverse(g, i + 1, j);
        dftraverse(g, i - 1, j);
        dftraverse(g, i, j + 1);
        dftraverse(g, i, j - 1);
    }
    
};