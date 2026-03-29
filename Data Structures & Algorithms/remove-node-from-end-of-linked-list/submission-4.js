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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    // 2 pointers -> Time - O(n) and Space - O(1)
    removeNthFromEnd(head, n) {
        // Create a dummy node
        const dummy = new ListNode(0, head);
        let left = dummy;
        let right = head;

        // Gap between left and right pointer should be n+1
        while(n>0 && right){
            right = right.next;
            n--;
        }

        while(right){
            right = right.next;
            left = left.next;
        }

        // Delete the node, left pointer have reached the node before the one to delete.
        left.next = left.next.next;

        return dummy.next;
    }
}
