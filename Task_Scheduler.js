// https://leetcode.com/problems/task-scheduler/#/solutions

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {   
    var c = [];
    
    for (var i = 0; i < tasks.length; i++) {
        if(c[tasks[i].charCodeAt(0) - 65])
            c[tasks[i].charCodeAt(0) - 65]++;
        else
            c[tasks[i].charCodeAt(0) - 65] = 1;
    }
    
    c.sort(function(a, b){
       return b - a; 
    });
    
    var i = 0;
    while(i >= 0 && c[i] == c[0])
        i++;
    
    // if c[0] > n return tasks.length, because (n+ 1) is not the chunck length now
    // ABABABC 1 or 0  ==> ABAB + AB, put C in addition 
    return Math.max(tasks.length, (c[0] - 1) * (n + 1) + i);
    
};