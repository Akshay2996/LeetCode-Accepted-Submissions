// DoublyLinkedList -> Time - O(n) and Space - O(n)
class Node {
    constructor(val, prev = null, next = null){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}
class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let head = new Node(tokens[0]);
        let curr = head;

        for(let i = 1; i < tokens.length; i++){
            curr.next = new Node(tokens[i], curr, null);
            curr = curr.next;
        }

        let ans = 0;

        // O(n) traversal
        while(head !== null){
            if('+-*/'.includes(head.val)){
                let l = Number(head.prev.prev.val);
                let r = Number(head.prev.val);

                let res = 0;
                
                if(head.val === "+"){
                    res = l + r;
                }
                else if(head.val === "-"){
                    res = l - r;
                }
                else if(head.val === "*"){
                    res = l * r;
                } else {
                    res = Math.trunc(l / r);
                }

                // Change the header pointer after the operation and store result in head
                head.val = res.toString();
                head.prev = head.prev.prev.prev;
                if(head.prev !== null){
                    head.prev.next = head;
                }
            }

            ans = Number(head.val);
            head = head.next;
        }

        return ans;
    }
}
