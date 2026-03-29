class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // HashMaps - One pass O(n)
        const numMap = new Map();

        for(let i=0; i<nums.length; i++){
            const y = target - nums[i];
            if(numMap.has(y)){
                return [numMap.get(y), i];
            }

            numMap.set(nums[i], i);
        }
    }
}
