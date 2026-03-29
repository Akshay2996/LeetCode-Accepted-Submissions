class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // Prefix and Suffix -> Time - O(n) & Space - O(n)
    // Formula = min(leftMax, rightMax) - height[i]
    trap(height) {
        let n = height.length;
        if(!n) return 0;
        let result = 0;
        // Create 2 arrays leftMax and rightMax
        let leftMax = new Array(n).fill(0);
        let rightMax = new Array(n).fill(0);

        leftMax[0] = height[0];
        rightMax[n-1] = height[n-1];

        // Fill leftMax by traversing the array in the normal order
        for(let i=1; i<n; i++){
            leftMax[i] = Math.max(leftMax[i-1], height[i]);
        }

        // Fill rightMax by traversing the array in reverse order
        for(let i=n-2; i>=0; i--){
            rightMax[i] = Math.max(rightMax[i+1], height[i]);
        }

        // Find the trap water by traversing the array and using the formula
        for(let i=0; i<n; i++){
            result += Math.min(leftMax[i], rightMax[i]) - height[i];
        }

        return result;
    }
}
