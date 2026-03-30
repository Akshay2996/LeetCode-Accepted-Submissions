class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0;
        nums.sort((a,b) => a-b);

        let longest = 0;
        let curr = nums[0];
        let streak = 1;


        for(let i=0; i<nums.length; i++){
            if(curr !== nums[i]){
                curr = nums[i];
                streak=1;
            }

            streak++;
            curr++;
            longest = Math.max(longest, streak);         
        }
        return longest;
    }
}
