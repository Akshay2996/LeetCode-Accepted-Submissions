/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */ 
    // Iteration Dummy Node -> Time - O(n+m) and 
    // Space - O(1) extra space; O(max(n,m)) for output list
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode();
        let curr = dummy;
        let carry = 0;

        while(l1 || l2 || carry){
            // Check l1 and l2 for end of their list
            const v1 = l1 ? l1.val : 0;
            const v2 = l2 ? l2.val : 0;

            // Next digit
            let val = v1 + v2 + carry;
            // Suppose val = 15
            carry = Math.floor(val / 10);
            val = val % 10;
            // Create a new Node with the val and put it in curr.next
            curr.next = new ListNode(val);

            // Move pointers
            curr = curr.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }

        return dummy.next;
    }
}
