/** 
 * Problem description:
 *   https://leetcode.com/problems/longest-valid-parentheses/#/description
 */
/**
 * @param {string} s
 * @return {number}
 */
 
var longestValidParentheses = function(s) {
    var Stack = function() {
        this.vals = [];
        this.push = function(val){
            this.vals.push(val);
        }
        this.pop = function() {
            this.vals.pop();
        }
        this.peek = function() {
            return this.vals[this.vals.length -1];
        }
        this.empty = function(){
            return this.peek() == null;
        }
    }
    
    var stack = new Stack();
    var count = 0,
        accumulated = 0,
        max = 0;
    // ()()(); (()); (())(); (()())
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        }
        
        else {
            var topEle = stack.peek();
            // valid parentheses substring stops when stack if empty, additional )
            if (topEle.length == 0) {
                // start to accumulate again from 0
                accumulated = 0;
            }

            else {
                count = i - topEle.val + 1; 
                
                stack.pop();
                // ()() each count is a partial of whole substring
                if (stack.empty()) {
                    accumulated += count;
                }
                // (()() distance between popped and i is the length can be accumulated 
                else {
                    accumulated = i - stack.peek();
                }
                
            }

            max > accumulated ? max = max : max = accumulated;

        }
    }
    return max;
};