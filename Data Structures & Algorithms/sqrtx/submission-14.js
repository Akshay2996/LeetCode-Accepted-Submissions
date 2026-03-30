class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    // Bruteforce - Time - O(sqrt(n)) and Space - O(1)
    mySqrt(x) {
        if(x === 0) return 0;
        let res = 1;

        for(let i = 1; i < x; i++){
            if(i*i > x){
                return res;
            }

            res = i;
        }

        return res;
    }
}
