// https://leetcode.com/problems/word-break/#/description

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // if s[0-i] can be break, then it means there is a k >=0 and k<=i which is the break point, and s[0-k] and s[k+1-i] can be break, s[0-k] is the subtask, each time we just need to consider if s[k+1-i] is breakable or not, ans[i] = ans[i-1] + ans[i-1~i]
    var bp = new Array(s.length + 1);
    bp.fill(false);
    bp[0] = true;
    
    for (var i = 1; i <= s.length; i++) {
        // find breakpoint k
        for (var j = 0; j < i; j++) {
            if (bp[j] && wordDict.includes(s.substring(j, i))) {
                bp[i] = true; // new breakpoint i
            }
        }
    }
    // 把所有breakpoint都找出，然后看从某个bp点出发到i的一段是否在字典中，可是每次increment i都会重新loop一遍之前找到的bp
    return bp[s.length];
};
