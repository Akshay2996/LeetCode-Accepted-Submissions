class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        // y = target - x
        //  value: index

        for(let i = 0; i < nums.length; i++){
            let y = target - nums[i];

            if(map.has(y)){
                return [i, map.get(y)];
            }
            map.set(nums[i], i);
        }

        return [];
    }
}
