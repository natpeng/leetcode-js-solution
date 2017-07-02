// https://leetcode.com/problems/min-stack/#/solutions

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = 0;
    this.val = [];
};

/** 
 * @param {number} x
 * @return {void}
 */

// how to record the min value at current level
MinStack.prototype.push = function(x) {
    if (this.val.length == 0) {
        this.val.push(x);
        this.min = x; 
    }
    else {
        this.val.push(x - this.min);
        if (this.min > x) this.min = x; // refresh min value, but since we pushed the difference of last min and this val, we can recover last min if this val is popped
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.val.length != 0) {
        val = this.val.pop();
        if (val < 0) 
            this.min = this.min - val; // recover last min 
    }
        
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   
    if(this.val.length != 0) {
        last = this.val[this.val.length - 1];
        if (last > 0 && this.val.length > 1) //this val is greater or = to current min but if it's the first element we just return min
            return this.min + last;
        else // if last < 0 means the min has been reset here
            return this.min;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */