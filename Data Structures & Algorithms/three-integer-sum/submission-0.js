class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // Brute force - O(n^3)
    threeSum(nums) {
        // Avoid duplicates
        let res = new Set();
        nums.sort((a,b) => a-b);
        for(let i=0; i<nums.length; i++){
            for(let j=i+1; j<nums.length; j++){
                for(let k=j+1; k<nums.length; k++){
                    if(nums[i] + nums[j] + nums[k] === 0){
                        // Convert it to string
                        res.add([nums[i], nums[j], nums[k]].toString());
                    }
                }
            }
        }

        // Convert back to numbers
        return Array.from(res).map(item => item.split(",").map(Number));
    }
}
