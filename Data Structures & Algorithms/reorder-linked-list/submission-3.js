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
     * @return {void}
     */
    // Fast and slow pointers -> Time - O(n) and Space - O(1)
    reorderList(head) {
        let slow = head;
        let fast = head.next;

        // Find the middle first
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse the 2nd part of the linked list
        let second = slow.next;
        let prev = null;
        slow.next = null;

        while(second){
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }

        // Merge the two linked list
        let first = head;
        second = prev;

        while(first && second){
            let temp1 = first.next;
            let temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1;
            second = temp2;
        }

    }
}
