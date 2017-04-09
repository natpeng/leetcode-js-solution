/** 
 * Problem description:
 *   https://leetcode.com/problems/merge-two-sorted-lists/#/description
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    //var current = {val: 0, next: null};
    var ret = {val: 0, next: null};
    var current = ret;
    
    while (l1 != null && l2 != null) {
        
        if (l1.val <=l2.val) {
            current.next = l1;
            l1 = l1.next;
            
        }
            
        else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 == null? l2 : l1;
    
    //console.log(current);
    return ret.next;
};