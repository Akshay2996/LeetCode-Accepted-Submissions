class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    // 2 pointers (Sliding Window) -> Time - O(n) and Space - O(1)
    findClosestElements(arr, k, x) {
        const n = arr.length;
        let l = 0;
        let r = n - 1;

        // Window size
        while (r - l >= k){
            // If |a - x| == |b - x| and a < b then a is the winner
            if(Math.abs(arr[r] - x) >= Math.abs(arr[l] - x)){
                r--;
            } else {
                l++;
            }
        }

        // return the array which is the closest to the x
        return arr.slice(l, r + 1);
    }
}
