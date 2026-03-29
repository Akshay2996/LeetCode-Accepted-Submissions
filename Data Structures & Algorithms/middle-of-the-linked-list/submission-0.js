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
     * @return {ListNode}
     */
    // Convert to Array -> Time - O(n) and Space O(n)
    middleNode(head) {
        const nums = [];

        // Push the linked list node's value to the array
        while(head){
            nums.push(head);
            head = head.next;
        }

        return nums[Math.floor(nums.length/2)];
    }
}
