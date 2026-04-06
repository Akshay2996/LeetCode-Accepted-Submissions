class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    // Hashset -> Time - O(logn) and Space - O(logn)
    isHappy(n) {
        const set = new Set();

        while(!set.has(n)){
            set.add(n);

            n = this.sumOfSquares(n);
        }

        return n === 1;
    }

    // Compute 100 -> 1^2 + 0^2 + 0^2 = 1
    // Compute 101 -> 1^2 + 0^2 + 1^2 = 2 -> 2^2 = 4 and so on...
    sumOfSquares(n){
        let output = 0;
        
        while(n !== 0){
            let rem = n % 10;
            rem = rem ** 2;
            output += rem;
            n = Math.floor(n / 10);
        }

        return output;
    }
}
