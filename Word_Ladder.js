/** 
 * Problem description:
 *   https://leetcode.com/problems/word-ladder/#/solutions
 */

 /**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    // endWord must be in the wordList
    if (wordList.indexOf(endWord) < 0) return 0;
    
    var beginSet = [];
    var endSet = [];
    beginSet[0] = beginWord;
    endSet[0] = endWord;
    var step = 1;
    
    // if beginSet/endSet is empty means we reach the end of this path and couldn't find a solution
    while (beginSet.length != 0 && endSet.length != 0) {
        var small = beginSet.length > endSet.length ? endSet : beginSet;
        var big = beginSet.length > endSet.length ? beginSet : endSet;
        var next = []; // to store the next set to replace the smaller set
        // we always do the BFS on smaller set so it has less neighbors to improve performance
        // for every set we are operating BFS, we are incrementing step by 1
        step++;
        // we need to do BFS on every word in small set
        for (var i = 0; i < small.length; i++) {
            // the adjacent neighbors of each node in the graph is the length of the word * 26 (chars)
            var word = small[i];
            for (var j = 0; j < word.length; j++) {
                for (var k = 97; k < 123; k++) {
                    var newWord = word;
                    newWord = word.substr(0, j) + String.fromCharCode(k) + word.substr(j + 1, word.length - j - 1); // 97 is 'a'
                    // newWord is now the neighbor we are visiting
                    // the big and small meet, we find the path
                    if (big.indexOf(newWord) > -1 ) 
                        return step;
                    if (wordList.indexOf(newWord) > -1) {
                        next.push(newWord);
                        wordList.splice(wordList.indexOf(newWord), 1);
                    }
                    
                }
            }
            if(beginSet.length > endSet.length) 
                endSet = next;
            else 
                beginSet = next;
        }
    }
    return 0;
};