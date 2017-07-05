//https://leetcode.com/problems/odd-even-linked-list/#/description

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
var oddEvenList = function(head) {
    if (!head) return null;
    
    var odd = head,
        even = head.next,
        oddHead = odd,
        evenHead = even;
    
    while (even && even.next) { // when checking valid or not, need to check even first, if even == null, even.next will cause error
        odd.next = odd.next.next;
        even.next = even.next.next; 
        odd = odd.next;
        even = even.next;
        
    }
    
    odd.next = evenHead;  
    return oddHead;
};