class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    // Binary Search + Two Pointers -> Time - O(logn + k) and Space - O(k)
    findClosestElements(arr, k, x) {
        let l = 0;
        let r = arr.length - 1;

        // Find the leftmostpoint closest to x using binary search
        while(l < r){
            const mid = l + Math.floor((r - l) / 2);
            if(arr[mid] >= x){
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        l = l - 1;
        r = l + 1;

        // Increase the window size until the window reaches k
        while((r - l - 1) < k){
            if(l < 0){
                r++;
            } else if( r >= arr.length){
                l--;
            } else if(Math.abs(arr[r] - x) >= Math.abs(arr[l] - x)) {
                l--;
            } else {
                r++;
            }
        }

        return arr.slice(l + 1, r);
    }
}
