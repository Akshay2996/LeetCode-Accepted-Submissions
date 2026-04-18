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
        let r = arr.length - 1;

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
