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
     * @return {boolean}
     */
    // Hash set -> Time - O(n) and Space - O(n)
    hasCycle(head) {
        const set = new Set();
        let node = head;

        while(node){
            if(set.has(node)){
                return true;
            }

            set.add(node);
            node = node.next;
        }

        return false;
    }
}
