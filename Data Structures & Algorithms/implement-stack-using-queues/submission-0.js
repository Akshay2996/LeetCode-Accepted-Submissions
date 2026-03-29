class MyStack {
    /**
     * Using single Queue
     * Time Complexity
     *  O(1) -> Initialziation
     *  O(1) -> push()
     *  O(n) -> pop()
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
        this.q.push(x);
        
        let i = this.q.size() - 1;
        
        while(i>0){
            this.q.push(this.q.pop());
            i--;
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.q.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.q.front();
    }

    /**
     * @return {boolean}
     */
    empty() {
        // We can write it like this
        // return this.q.isEmpty()
        return this.q.size() === 0;
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
