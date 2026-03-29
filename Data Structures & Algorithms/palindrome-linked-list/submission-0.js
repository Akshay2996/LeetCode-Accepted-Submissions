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
    // Convert to Array -> Time O(n) and Space O(n)
    isPalindrome(head) {
        const nums = [];
        
        // Push linked list value in array
        while(head){
            nums.push(head.val);
            head = head.next;
        }

        let l = 0;
        let r = nums.length - 1;

        while(l <= r){
            if(nums[l] !== nums[r]){
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
