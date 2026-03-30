class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    // Bruteforce - Time - O(sqrt(n)) and Space - O(1)
    mySqrt(x) {
        let res = 0;
        if(x===0) return 0;

        for(let i = 0; i<x; i++){
            if(i*i > x){
                return res;
            }

            res = i;
        }

        return res;
    }
}
