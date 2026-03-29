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
    // Convert to Array -> Time - O(n) and Space - O(n)
    removeNthFromEnd(head, n) {
        const nodes = [];
        let curr = head;
        while(curr){
            nodes.push(curr);
            curr = curr.next;
        }

        const removeIndex = nodes.length - n;
        // If the index to be removed is the first one then
        if(removeIndex === 0) return head.next;

        nodes[removeIndex-1].next = nodes[removeIndex].next;

        return head;
    }
}
