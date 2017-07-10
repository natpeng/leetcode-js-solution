// https://leetcode.com/problems/implement-trie-prefix-tree/#/solutions

/**
 * Initialize your data structure here.
 */
var TrieNode = function(val) {
    this.children = {};
    this.val = val || ''; 
    this.isWord = false;
}
var Trie = function() {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
        console.log('insert');
    var cur = this.root;

    for(var i = 1; i <= word.length; i++) {
        var nodeVal = word.substring(0, i);
        if (! (nodeVal in cur.children)) 
            cur.children[nodeVal] = new TrieNode(nodeVal);
        cur = cur.children[nodeVal];
    }
    cur.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var cur = this.root;
    for (var i = 1; i <= word.length; i++) {
        var nodeVal = word.substring(0, i);
        if (! (nodeVal in cur.children))
            return false;
        else 
            cur = cur.children[nodeVal];
    }
    
    return cur.isWord;
};


/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var cur = this.root;
    for (var i = 1; i <= prefix.length; i++) {
        var nodeVal = prefix.substring(0, i);
        if (! (nodeVal in cur.children))
            return false
        cur = cur.children[nodeVal];
    }
    
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
