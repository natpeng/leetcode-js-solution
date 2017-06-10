/** 
 * Problem description:
 *   https://leetcode.com/problems/copy-list-with-random-pointer/#/description
 */
 /**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    // first iteration will copy the node 
    var i = head;
    while (i != null) {
        var next = i.next;
        var copy = new RandomListNode(i.label); // we cannot just copy copy = i, this will point copy to the same node, we need to create a new list that has same label and random value as the original one
        i.next = copy;
        copy.next = next;
        i = next;
    }
    
    // second iteration will copy the random pointer 
    i = head;
    while(i != null) {
        if (i.random != null)
            i.next.random = i.random.next; // !!! random is also a node, and the next is where the random points to
        i = i.next.next;
    }
    
    // thrid iteration will restore original list and return the copy
    i = head;
    var ret = new RandomListNode(0);
    if (head != null)
        ret.next = head.next;
    
    while(i != null) {
        var next = i.next;
        i.next = next.next;
        i = i.next; // i = null
        if (i != null) // next is not the end node
            next.next = i.next;
        else 
            next.next = null;
    }
    return ret.next;
    
};