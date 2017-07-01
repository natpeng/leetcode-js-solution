// https://leetcode.com/problems/friend-circles/#/solutions

/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    // use DFS to mark all connected nodes and count++, 
    // when no more connected unvisited nodes, 
    // go to next unvisited node and mark all connected again
    function DFS (M, visited, i) {
        // j is his relationship
        for (var j = 0; j < M.length; j++) {
             // we haven't counted j into his circle
            if (visited[j] == 0 && M[i][j] == 1) {
                visited[j] = 1;
                // continue search on student j
                DFS(M, visited, j);
            }
        }
        return;
    }
    
    // visited to record if we have visited this student and his relationship or not 
    var visited = [];
    for (var i = 0; i < M.length; i++) {
        visited[i] = 0;
    }
    
    var count = 0;
    
    for (var i = 0; i < M.length; i++) {
        if (visited[i] == 0) {
            DFS(M, visited, i);
            count++
        }
    }
    return count;
};