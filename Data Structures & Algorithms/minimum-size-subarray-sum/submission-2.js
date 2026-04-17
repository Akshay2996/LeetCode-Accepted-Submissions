class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    // Sliding Window -> Time - O(n) and Space - O(1)
    minSubArrayLen(target, nums) {
        let res = Infinity;
        let l = 0;
        let r = 0;
        let total = 0;

        while(r < nums.length){
            total += nums[r];
            
            // Condition statified move left pointer to find min. subarray
            while(total >= target){
                res = Math.min(res, r - l + 1);
                total -= nums[l];
                l++;
            }

            r++;
        }

        return res === Infinity ? 0 : res;
    }
}
