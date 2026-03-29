// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    // 2-pass using hashmap -> Time - O(n) and Space - O(n)
    copyRandomList(head) {
        const oldCopy = new Map();
        // Set a null key - value pair
        oldCopy.set(null, null);
        let curr = head;
        
        // 1st Pass - Create copy node and store mapping of 
        // original node to new node in hashmap.
        while(curr){
            const copy = new Node(curr.val);
            oldCopy.set(curr, copy);
            curr = curr.next;
        }

        curr = head;

        // 2nd Pass - Connect pointers using hashmap stored information
        while(curr){
            const newNode = oldCopy.get(curr);
            newNode.next = oldCopy.get(curr.next);
            newNode.random = oldCopy.get(curr.random);
            curr = curr.next;
        }

        return oldCopy.get(head);
    }
}
