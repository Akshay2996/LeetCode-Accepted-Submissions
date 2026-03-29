class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // Brute force - O(n^2)
    productExceptSelf(nums) {
        const n = nums.length
        let res = new Array(n);

        for(let i = 0; i<n ; i++){
            let product = 1;
            for(let j = 0; j<n; j++){
                if(i!==j){
                    product *= nums[j];
                }
            }

            res[i] = product;
        }

        return res;
    }
}