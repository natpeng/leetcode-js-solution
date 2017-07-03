// https://leetcode.com/problems/sort-list/#/description
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) 
        return head;
    
    var mid = head,
        fast = head, 
        l1 = head,
        l2 = head; // very important!! must use declared variables 
    // mid is 3 if 1, 2, 3, 4
    // fast = null is when it's even 
    // fast.next = null is when it's odd
    while(fast.next && fast.next.next) {
        mid = mid.next;
        fast = fast.next.next;
    }
    // divide to two lists
    l2 = mid.next;
    mid.next = null;
    
   //console.log(l2head);
    
    l1 = sortList(head); // divide left harf and merge sort left
    
    l2 = sortList(l2); // divide right half and merge sort right
    
    return merge(l1, l2); // merge sort two half
};

// merge should work in a way to merge the whole two lists 
// 1, 5, 8 and 2, 6, 9, 11
function merge(l1, l2) {
    var l = new ListNode(0),
        p = l;
    
    while (l1 && l2) {
          if (l1.val < l2.val){
              p.next = l1;
              l1 = l1.next;
          }  
          else {
              p.next = l2;
              l2 = l2.next;
          }
        p = p.next;
    }
    
    if (l1) {
        p.next = l1;
    }
    if (l2) {
        p.next = l2;
    }
    // console.log(l.next);
    return l.next;
}