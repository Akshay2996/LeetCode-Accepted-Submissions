class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    // Bruteforce -> Time - O(n^2) and Space - O(1)
    minSubArrayLen(target, nums) {
        let res = Infinity;
        let n = nums.length;
        
        for(let i = 0; i < n; i++){
            let currSum = 0;
            for(let j = i; j < n; j++){
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
