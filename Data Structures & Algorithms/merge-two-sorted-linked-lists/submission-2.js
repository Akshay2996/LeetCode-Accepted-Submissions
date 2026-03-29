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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    // Iterative -> Time - O(n+m) and Space - O(1)
    mergeTwoLists(list1, list2) {
        // Create a dummy node to handle edge cases
        const dummy = { val: 0, next: null };
        let node = dummy;

        while(list1 && list2){
            if(list1.val <= list2.val){
                node.next = list1;
                list1 = list1.next;
            } else {
                node.next = list2;
                list2 = list2.next;
            }
            node = node.next;
        }

        // Check if any nodes are remanining in list1 or list2 after the loop
        if(list1){
            node.next = list1;
        } else if(list2){
            node.next = list2;
        }

        return dummy.next;

    }
}
