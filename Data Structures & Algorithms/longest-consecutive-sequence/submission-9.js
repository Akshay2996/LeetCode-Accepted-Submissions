class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // Sorting -> Time - O(nlogn) and Space - O(n)
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;

        nums.sort((a, b) => a-b);
        
        let res = 0;
        let streak = 0;
        let curr = nums[0];

        for(let i = 0; i < nums.length; i++){
            if(nums[i-1] === nums[i]){
                continue; // Ignore duplicates
            }

            if(nums[i] !== curr){
                curr = nums[i];
                streak = 0;
            }

            curr++;
            streak++;
            res = Math.max(res, streak);
        }

        return res;
    }
}
