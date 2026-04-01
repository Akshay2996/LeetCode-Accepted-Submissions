/**
 * Use of 2 stacks -> MinStack and Stack
 * Time Complexity
 *   push() - O(1)
 *   pop() - O(1)
 *   top() - O(1)
 *   getMin - O(1)
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
    // Push in both the stacks
    // Check the minimum value when pushing in the minStack
    push(val) {
        this.stack.push(val);

        if(this.minStack.length === 0){
            this.minStack.push(val);
        } else {
            let minVal = Math.min(val, this.minStack[this.minStack.length - 1]);
            this.minStack.push(minVal);
        }
    }

    /**
     * @return {void}
     */
    // Remove the element from both the stacks
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    // Get the top element from the stack
    top() {
        const last = this.stack.length - 1;
        
        return this.stack[last];
    }

    /**
     * @return {number}
     */
    // Get the minimum from minStack top element
    getMin() {
        const last = this.minStack.length - 1;

        return this.minStack[last];
    }
}
