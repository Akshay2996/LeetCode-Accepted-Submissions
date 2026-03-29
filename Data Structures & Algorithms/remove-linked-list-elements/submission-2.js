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
     * @param {number} val
     * @return {ListNode}
     */
    // Recursion -> Time - O(n) and Space - O(n)
    removeElements(head, val) {
        if(!head) return null;

        head.next = this.removeElements(head.next, val);
        return head.val !== val ? head : head.next;
    }
}
