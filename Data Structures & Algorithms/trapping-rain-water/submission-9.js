class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // 2 pointers -> Time - O(n) & Space - O(1)
    // Formula = min(leftMax, rightMax) - height[i];
    trap(height) {
        let res = 0;
        const n = height.length;
        let l = 0;
        let r = n - 1;
        let leftMax = height[l];
        let rightMax = height[r];

        while(l < r){
            if(leftMax < rightMax){
                l++;
                leftMax = Math.max(leftMax, height[l]);
                res += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                res += rightMax - height[r]
            }
        }

        return res;
    }
}
