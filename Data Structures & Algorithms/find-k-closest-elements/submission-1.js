class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    // 2 pointers (Sliding Window) -> Time - O(n−k) and Space - O(k)
    findClosestElements(arr, k, x) {
        const n = arr.length;
        let l = 0, r = n - 1;

        while((r - l) >= k){
            if(Math.abs(arr[l] - x) > Math.abs(arr[r] - x)){
                l++;
            } else {
                r--;
            }
        }

        // Found the window size k closest to x
        return arr.slice(l, r + 1);
    }
}
