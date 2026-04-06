class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    // Fast and Slow Pointers -> Time - O(logn) and Space - O(1)
    // Think of this problem as linked list where 
    // this.sumOfSquares(n) getting called is moving through the list
    isHappy(n) {
        let slow = n;
        let fast = this.sumOfSquares(n);

        // 2 * slow = fast
        // Run the loop until slow == fast
        while(slow !== fast){
            slow = this.sumOfSquares(slow);
            fast = this.sumOfSquares(fast);
            fast = this.sumOfSquares(fast);
        }

        return fast === 1;
    }

    sumOfSquares(n){
        let output = 0;

        while(n > 0){
            let rem = n % 10;
            rem = rem ** 2;
            output += rem;
            n = Math.floor(n / 10);
        }

        return output;
    }
}
