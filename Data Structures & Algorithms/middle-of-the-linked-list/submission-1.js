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
     * @return {ListNode}
     */
    // Fast and Slow pointers -> Time - O(n) and Space - O(1)
    middleNode(head) {
        let fast = head;
        let slow = head;

        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }
}
