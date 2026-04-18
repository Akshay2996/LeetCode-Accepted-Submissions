class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    // Binary Search -> Time O(log(n-k) + k) and Space O(k)
    findClosestElements(arr, k, x) {
        let l = 0;
        // r should be length of array - k to get the window in which we check midpoint
        let r = arr.length - k;

        while(l < r){
            const mid = l + Math.floor((r - l) / 2);

            if(x - arr[mid] > arr[mid + k] - x){
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        return arr.slice(l, l + k);
    }
}
