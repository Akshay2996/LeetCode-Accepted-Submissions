class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // 2 pointers -> Time Complexity - O(n^2)
    threeSum(nums) {
        let triplets = [];
        // O(nlogn)
        nums.sort((a,b) => a-b);
        for(let i = 0; i < nums.length; i++){
            // nums[i] > 0 then sum cannot be 0
            if(nums[i] > 0) break;
            // Avoid duplicates 'a' value, skip value if that's the case
            if(i>0 && nums[i] === nums[i-1]) continue;

            let left = i+1;
            let right = nums.length - 1;

            while(left < right){
                const sum = nums[i] + nums[left] + nums[right];
                if(sum < 0) {
                    left++;
                } else if(sum > 0){
                    right--;
                } else {
                    triplets.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    // Avoid duplicate 'b' value, skip value if that's the case
                    while(left<right && nums[left] === nums[left-1]){
                        left++;
                    }
                }
            }

        }

        return triplets;
    }
}
