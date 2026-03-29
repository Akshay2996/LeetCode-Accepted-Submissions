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
    // 2 pointers -> Time - O(n) and Space - O(1)
    removeElements(head, val) {
        // We will use dummy node to handle edge cases like removing the head
        const dummy = new ListNode(0, head);
        let prev = dummy;
        let curr = head;

        while(curr){
            let nxt = curr.next;
            if(curr.val === val){
                prev.next = nxt;
            } else{
                prev = curr;
            }
            curr = nxt;
        }

        return dummy.next;
    }
}
