//https://leetcode.com/problems/reorder-list/#/solutions

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    
   if(head==null||head.next==null) return;
    
    
   var middle = head,
       fast = head;
    // find the middle node
    while (fast.next != null && fast.next.next != null) {
       middle = middle.next;
       fast = fast.next.next;
    }
    
    // reverse second half
    cur = middle.next;
    
    while(cur.next != null) {
        tmp = cur.next;
        cur.next = tmp.next;
        tmp.next = middle.next;
        middle.next = tmp;
    }
    
    
    
    p1 = head;
    p2 = middle.next;
    
    while(p1!=null && p1.next != null){
        middle.next = p2.next;
        p2.next = p1.next;
        p1.next = p2;
        p1 = p2.next;
        p2 = middle.next;
    }
    
    return;
    
};