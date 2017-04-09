/** 
 * Problem description:
 *   https://leetcode.com/problems/reverse-linked-list-ii/#/description
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (m >= n || head == null) return head; 
    var originalHead = head;
    var prev = null;
    var i = 1;

    while (head != null && i < m) {
        prev = head;
        head = head.next;
        i++; // found m position
    }

    mPos = prev;
    nPos = head;

    prev = null;
    while(head != null && i <= n) {
        
        var temp = head.next;
        head.next = prev;
        prev = head; // pre always stores the current head position
        head = temp; // head always stores the next node to be processed
        i++;
        
    }
    
    if (mPos != null) 
        mPos.next = prev;

    nPos.next = head;

    if (m == 1) return prev;
    return originalHead;
};