class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    // Bruteforce -> Time - O(n^2) and Space - O(1)
    minSubArrayLen(target, nums) {
        let res = Infinity;

        for(let i = 0; i < nums.length; i++){
            let currSum = 0;
            for(let j = i; j < nums.length; j++){
                currSum += nums[j];
                if(currSum >= target){
                    res = Math.min(res, j - i + 1);
                    break;
                }
            }
        }

        return res === Infinity ? 0 : res;
    }
}
