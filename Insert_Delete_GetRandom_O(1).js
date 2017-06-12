/** 
 * https://leetcode.com/problems/insert-delete-getrandom-o1/#/solutions
 */
 /**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.content = {}; // it will be an array of objects
    this.order = []; // use this array to keep order of the hash map
};
// hash map does not have an order for the keys, 
// this question is to create an order for hash maps
// Math.random() supposed to return each range between [0, 1) on a same probability
// to change the probability of the number returned, we can do it this way: 
// https://stackoverflow.com/questions/8529665/changing-probability-of-getting-a-random-number
/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (val in this.content) return false;
    this.order.push(val);
    this.content[val] = this.order.length - 1; // the value points to the position in order array 
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (! (val in this.content)) return false;
    // swap last key with the removed key
    this.order[this.content[val]] = this.order[this.order.length - 1]; 
    // value of this key (last element in order array) in content need to point to this new index in order (tricky part here !!!!!)
    this.content[this.order[this.order.length - 1]] = this.content[val];
    this.order.pop();
    delete this.content[val];
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    var rand = this.order[parseInt(Math.random() * this.order.length)]; // in this way, we can generate a random index in the order array to get a random key in the map
    return rand;
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
