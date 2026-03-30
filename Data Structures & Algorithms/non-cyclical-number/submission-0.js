class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    // Hashset -> Time - O(logn) and Space - O(logn)
    isHappy(n) {
        const seen = new Set();

        while(!seen.has(n)){
            seen.add(n);

            n = this.sumOfSquares(n);

            if(n === 1) return true;
        }

        return false;
    }

    sumOfSquares(n){
        let output = 0;

        while(n > 0){
            let digit = n % 10;
            digit = digit * digit;
            output += digit;
            n = Math.floor(n/10);
        }

        return output;
    }
}
