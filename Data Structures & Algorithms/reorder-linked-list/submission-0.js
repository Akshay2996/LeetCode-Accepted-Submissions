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
        let nums = [];

        // Push the list in the array
        while(head){
            nums.push(head);
            head = head.next;
        }

        // 2 pointers -> i=0, j=length-1
        let i = 0;
        let j = nums.length - 1;
        while(i<j){
            nums[i].next = nums[j];
            i++;

            if(i>=j) break;

            nums[j].next = nums[i];
            j--;
        }

        nums[i].next = null;
    }
}
