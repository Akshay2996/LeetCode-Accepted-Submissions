class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // Bruteforce - O(n^2)
    // Formula = min(leftMax, rightMax) - height[i]
    trap(height) {
        let n = height.length;
        if(!n) return 0;
        let result = 0;

        for(let i=0; i<n; i++){
            let leftMax = height[i];
            let rightMax = height[i];

            // For leftMax range is from 0 to i
            for(let j=0; j<i; j++){
                leftMax = Math.max(leftMax, height[j]);
            }

            // For rightMax range is i+1 to n
            for(let j=i+1; j<n; j++){
                rightMax = Math.max(rightMax, height[j]);
            }

            result += Math.min(leftMax, rightMax) - height[i]
        }

        return result;
    }
}
