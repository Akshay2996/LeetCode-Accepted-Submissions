class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // Prefix and suffix startegy - O(n)
    productExceptSelf(nums) {
        let prefix = 1;
        let suffix = 1;
        const n = nums.length
        const res = new Array(n);

        for(let i = 0; i<n; i++){
            res[i] = prefix;
            prefix *= nums[i];
        }

        for(let i = n - 1; i>=0; i--){
            res[i] *= suffix;
            suffix *= nums[i];
        }

        return res;
    }
}