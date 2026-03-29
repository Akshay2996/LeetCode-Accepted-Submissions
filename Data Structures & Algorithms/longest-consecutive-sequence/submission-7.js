class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // Sorting -> Time - O(nlogn) and Space - O(n)
    longestConsecutive(nums) {
        if(nums.length === 0){
            return 0;
        }

        nums.sort((a,b) => a - b);

        let res = 0;
        let curr = nums[0];
        let streak = 0;

        for (let i = 0; i< nums.length; i++){
            if(nums[i] === nums[i-1]){
                continue; // Ignore duplicates
            }
            
            if(curr !== nums[i]){
                curr = nums[i];
                streak = 0;
            }

            streak++;
            curr++;
            res = Math.max(res, streak);
        }

        return res;
    }
}
