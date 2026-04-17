class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    // Sliding Window -> Time - O(n) and Space - O(1)
    minSubArrayLen(target, nums) {
        let l = 0;
        let r = 0;
        let res = Infinity;
        let total = 0;

        while(r < nums.length){
            total += nums[r];
            // If window is bigger increment the left pointer
            // since we are finding minimum
            while(total >= target){
                res = Math.min(res, r - l + 1);
                total -= nums[l];
                l++;
            }
            r++;
        }

        if(res === Infinity) return 0;
        
        return res;
    }
}
