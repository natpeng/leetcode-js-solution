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
        this.empty = function() {
            return this.vals.length == 0;
        }
    }
// store all ele to stack, after the loop, only (/) cannot be paired will be left in stack
    var stack = new Stack();
    var max = 0,
        count = 0;

    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(')
            stack.push({ 
                pos: i,
                val: '('
            });
        // s[i] = ), pop and count
        else {
            // stack has (, need to pop
            if (!stack.empty() && stack.peek().val == '(') {
                stack.pop();
                // after pop, do the count
                if (!stack.empty()) 
                // top ele can be ( or ), but valid length should always be distance between i and top ele pos
                    count = i - stack.peek().pos;
                else 
                // stack is empty after pop only when everything can be accumulated, valid length is the length till now
                    count = i + 1;
                // update max after count has been updated
                max = Math.max(max, count);
            }
            // stack is empty or stack top is ), cannot pop, push ) 
            else {
                stack.push({ 
                    pos: i,
                    val: ')'
                }); 
            }
        }
    }
    
    return max;
};