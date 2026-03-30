class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    // Binary Search -> Time - O(logn) and Space - O(1)
    mySqrt(x) {
        let l = 0;
        let r = x;
        let res = 0;

        while(l<=r){
            const mid = l + Math.floor((r-l)/2);

            if(mid*mid > x){
                r = mid - 1;
            } else if(mid*mid < x){
                res = mid;
                l = mid+1;
            } else {
                return mid;
            }
        }

        return res;
    }
}
