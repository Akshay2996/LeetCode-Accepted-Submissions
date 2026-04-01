/**
 * Use of 2 stacks -> MinStack and Stack
 * Time Complexity
 *   push() - O(1)
 *   pop() - O(1)
 *   top() - O(1)
 *   getMin() - O(1)
 * Space Complexity - O(n) 
 */
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    // Push in both the stack
    push(val) {
        this.stack.push(val);
        
        if(this.minStack.length === 0){
            this.minStack.push(val);
        } else {
            const minVal = Math.min(val, this.minStack[this.minStack.length - 1]);
            this.minStack.push(minVal);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
