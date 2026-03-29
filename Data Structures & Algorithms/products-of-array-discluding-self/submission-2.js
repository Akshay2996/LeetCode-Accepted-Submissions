class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // Division startegy - O(n)
    /**
     * Traverse the array once
     * Count the zero and multiply non-zero numbers
     * If zeroCount > 1 then all value in result array is 0
     * If zeroCount > 0 then result array positioned 0th index is non-zero 
     * product others are all zeros
     * If zeroCount = 0 then res[i] = product//nums[i] 
     *  */ 
    productExceptSelf(nums) {
        let zeroCount = 0;
        let product = 1;
        const n = nums.length;

        for(let num of nums){
            if(num !==0){
                product *= num;
            }
            else {
                zeroCount++;
            }
        }

        if(zeroCount > 1) return Array(n).fill(0);

        const res = new Array(n);
        for(let i =0; i<n; i++){
            if(zeroCount > 0){
                res[i] = nums[i] === 0 ? product : 0;
            }
            else {
                res[i] = product / nums[i];
            }
        }

        return res;
    }
}
