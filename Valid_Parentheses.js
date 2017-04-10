/** 
 * Problem description:
 *   https://leetcode.com/problems/valid-parentheses/#/description
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 
var isValid = function(s) {
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
    }
    // true sinarios: ()()(), ((())), (()()), besides the false answer in example, ']' is false too
    var stack = new Stack();
    
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        }
        
        else {
            var topEle = stack.peek();
            // check the current ele match top of stack if yes, pop out and go to the next ele in s
            if ((s[i] == ")" && topEle == "(") || (s[i] == "}" && topEle == "{") || (s[i] == "]" && topEle == "[") && stack.vals.length != 0) {
                stack.pop();
            }
            // extra ],},) return false
            else 
                return false;
        }
    }
    
    if (stack.vals.length == 0) 
        return true;
    else 
        return false;
};