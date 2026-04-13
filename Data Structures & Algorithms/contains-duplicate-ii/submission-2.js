class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    // Sliding Window (Hashset) -> Time - O(n) and Space O(min(n, k))
    containsNearbyDuplicate(nums, k) {
        const window = new Set();

        let l = 0;
        for(let r = 0; r < nums.length; r++){
            // If the size of the window is larger than K then remove element
            // from the left side since both the condition should be met to return true
            if(r - l > k){
                window.delete(nums[l]);
                l++;
            }
            if(window.has(nums[r])){
                return true;
            }
            window.add(nums[r]);
        }

        return false;
    }
}
