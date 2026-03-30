class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    // Bruteforce - Time - O(sqrt(n)) and Space - O(1)
    mySqrt(x) {
        let res = 0;

        for(let i = 0; i < (x/2); i++){
            if(i*i > x){
                return res;
            }

            res = i;
        }
    }
}
