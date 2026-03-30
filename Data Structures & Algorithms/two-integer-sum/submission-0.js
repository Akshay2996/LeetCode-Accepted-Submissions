class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Brute force - O(n^2)
        for (let i=0; i < nums.length; i++){
            for(let j=0; j< nums.length; i++){
                if(nums[i]+nums[j] === target){
                    return[i,j];
                }
            }
        }
        return [];
    }
}
