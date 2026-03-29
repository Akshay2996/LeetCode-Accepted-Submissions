class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numMap = {};

        for(let i=0; i<nums.length; i++){
            const y = target - nums[i];
            if(y in numMap){
                return [numMap[y], i];
            }

            numMap[nums[i]] = i
        }
    }
}
