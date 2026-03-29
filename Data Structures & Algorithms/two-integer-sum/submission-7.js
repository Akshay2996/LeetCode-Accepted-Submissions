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
        for(let i=0; i<nums.length; i++){
            map.set(nums[i], i);
        }

        for(let i=0; i< nums.length; i++){
            let y = target - nums[i];
            if(map.has(y) && map.get(y) !== i){
                return [i, map.get(y)]
            }
        }

        return [];

    }
}
