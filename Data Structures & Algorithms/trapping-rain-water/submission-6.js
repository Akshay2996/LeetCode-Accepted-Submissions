class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // 2 pointers -> Time - O(n) & Space - O(1)
    // Formula = min(leftMax, rightMax) - height[i]
    trap(height) {
        let n = height.length;
        if(!n) return 0;
        let result = 0;

        // Here leftMax & rightMax are variables
        let leftMax = height[0];
        let rightMax = height[n-1];
        let l=0;
        let r=n-1;

        while(l<r){
            if(leftMax < rightMax){
                // Move the left pointer
                l++;
                leftMax = Math.max(leftMax, height[l]);
                // min(leftMax, rightMax) will result to leftMax because of the if loop condition
                result += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                result += rightMax - height[r];
            }
        }
       
        return result;
    }
}
