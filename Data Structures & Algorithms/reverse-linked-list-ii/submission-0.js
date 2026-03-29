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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    // 2 Pointers - Time - O(n) and Space - O(1)
    reverseBetween(head, left, right) {
        // Using a dummy node to simplify edge cases when the head might change
        const dummy = new ListNode(0, head);

        let leftPrev = dummy;
        let curr = head;

        // 1st Step - Reach the previous position of "left" node
        for(let i = 0; i < left - 1; i++){
            leftPrev = curr;
            curr = curr.next;
        }

        // 2nd Step - Now curr = "left" and leftPrev = "node before left"
        // reverse the list from left to right
        let prev = null;

        for(let i = 0; i < (right - left + 1); i++){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        
        // 3rd Step - Update the pointers
        // Now curr = "node after right" and prev = "right"
        leftPrev.next.next = curr;
        leftPrev.next = prev;

        return dummy.next;
    }
}
