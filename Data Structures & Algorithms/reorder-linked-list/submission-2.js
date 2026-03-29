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
    // Convert to Array -> Time - O(n) and Space - O(n)
    reorderList(head) {
        let nodes = [];

        // Push the list in the array
        while(head){
            nodes.push(head);
            head = head.next;
        }

        // 2 pointers -> i=0, j=length-1
        let i = 0;
        let j = nodes.length - 1;

        while(i<j){
            nodes[i].next = nodes[j];
            i++;

            if(i>=j) break;

            nodes[j].next = nodes[i];
            j--;
        }

        nodes[i].next = null;
    }
}
