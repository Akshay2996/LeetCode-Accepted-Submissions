class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // Division -> Time - O(n) and Space - O(n)
    productExceptSelf(nums) {
        let product = 1;
        let zeroCount = 0;

        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== 0){
                product *= nums[i];
            } else {
                zeroCount++;
            }
        }

        if(zeroCount > 1){
            return Array(nums.length).fill(0);
        }

        const res = new Array(nums.length);

        for(let i = 0; i < nums.length; i++){
            if(zeroCount > 0){
                res[i] = nums[i] === 0 ? product : 0;
            } else {
                res[i] = product / nums[i];
            }
        }

        return res;
    }
}
