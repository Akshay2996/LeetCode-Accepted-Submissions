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
    // Recursion -> Time - O(n+m) and Space - O(n+m)
    mergeTwoLists(list1, list2) {
        // Check if any list is empty
        if(!list1) return list2;
        if(!list2) return list1;

        if(list1.val <= list2.val){
            list1.next = this.mergeTwoLists(list1.next, list2);
            return list1;
        }
        else{
            list2.next = this.mergeTwoLists(list1, list2.next);
            return list2;
        }
    }
}
