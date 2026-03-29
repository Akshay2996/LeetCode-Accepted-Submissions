class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    // Binary Search -> Time - O(logn) and Space - O(1)
    mySqrt(x) {
        let left = 0;
        let right = x;
        let res = 0;

        while(left<=right){
            const mid = Math.floor(left + (right-left)/2);

            if(mid * mid > x){
                right = mid - 1;
            } else if(mid * mid < x){
                left = mid + 1;
                res = mid;
            } else {
                return mid;
            }
        }

        return res;
    }
}
