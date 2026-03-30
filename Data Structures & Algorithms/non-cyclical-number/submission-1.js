class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    // Fast and Slow Pointers -> Time - O(logn) and Space - O(1)
    // Think of this problem like linked list where 
    // this.sumOfSquares(n) getting called is moving through the list
    isHappy(n) {
        let slow = n;
        let fast = this.sumOfSquares(n);
        
        while(fast !== slow){
            slow = this.sumOfSquares(n);
            fast = this.sumOfSquares(n);
            fast = this.sumOfSquares(n);
        }

        return fast === 1;
    }

    sumOfSquares(n){
        let output = 0;
        
        while(n > 0){
            let rem = n % 10;
            rem = rem * rem;
            output += rem;
            n = Math.floor(n / 10);
        }

        return output;
    }
}
