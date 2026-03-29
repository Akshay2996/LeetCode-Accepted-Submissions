class MyStack {
    /**
     * Using single Queue
     * Time Complexity
     *  O(1) -> Initialziation
     *  O(n) -> push()
     *  O(1) -> pop()
     * Space - O(n)
     */
    constructor() {
        this.q = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        // In queue it is FIFO
        this.q.push(x);
        // [1,2,3,4] -> Add 1
        // [2,3,4,1] -> Pop out 1 in stack
        // In stack LIFO and the added element is last so it should pop out first
        let i = this.q.size() - 1;

        while(i>0){
            this.q.push(this.q.pop());
            i--;
        }

    }

    /**
     * @return {number}
     */
    // O(1)
    pop() {
        return this.q.pop();
    }

    /**
     * @return {number}
     */
    // O(1)
    top() {
        return this.q.front();
    }

    /**
     * @return {boolean}
     */
    // O(1)
    empty() {
        // return this.q.size() === 0;
        return this.q.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
