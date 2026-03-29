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
    // Reverse the list and remove the node -> Time - O(n) and Space - O(1)
    removeNthFromEnd(head, n) {
        // Reverse the list
        let prev = null;
        let curr = head;
        
        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

           // prev is new head of reversed list
        let reversedHead = prev;

        // Using 2 pointer remove the node
        let dummy = new ListNode(0, reversedHead);
        curr = dummy;

       for (let i = 0; i < n-1; i++) {
        curr = curr.next;
    }

        // remove node
        curr.next = curr.next.next;
        
        // Reverse the list back
        prev = null;
        curr = dummy.next;
        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        return prev;
    }
}
