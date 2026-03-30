class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = [];
        nums.sort((a,b) => a-b);
        for (let i=0; i <nums.length; i++){
            const value = ((nums[i] + 1) === nums[i+1])
            if(value){
                longest.push(nums[i]);
            }
            else {
                longest = [];
                longest.push(nums[i]);
            }
        }

        return longest.length;
    }
}
