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
     * @param {number} val
     * @return {ListNode}
     */
    // Convert to array -> Time - O(n) and Space - O(n)
    removeElements(head, val) {
        const arr = [];
        let curr = head;

        while(curr){
            if(curr.val !== val){
                arr.push(curr.val);
            }
            curr = curr.next;
        }

        if(arr.length === 0){
            return null;
        }

        let res = new ListNode(arr[0]);
        curr = res;
        for(let i = 1; i< arr.length; i++){
            const node = new ListNode(arr[i]);
            curr.next = node;
            curr = curr.next;
        }

        return res;
    }
}
