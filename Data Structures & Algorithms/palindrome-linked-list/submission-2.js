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
    // Fast and Slow pointers -> Time - O(n) and Space - O(1)
    isPalindrome(head) {
        // 1->2->2->1
        
        let fast = head;
        let slow = head;

        // Find the middle i.e using slow pointer
        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
        }

        // Reverse the linked list
        let prev = null;
        while(slow){
            let temp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = temp;
        }

        // Check the linked list for palindrome
        // prev is at the last node
        let l = head;
        let r = prev;

        while(r){
            if(l.val !== r.val){
                return false;
            }
            l = l.next;
            r = r.next;
        }

        return true;
    }
}
