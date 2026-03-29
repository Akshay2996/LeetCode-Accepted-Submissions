class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // 2 Pointers -> Time - O(n)
    // Predictable dynamics - Pair of Numbers
    maxArea(heights) {
      let left = 0;
      let right = heights.length - 1;
      let result = 0;

      while(left<right){
        const area = (right - left) * Math.min(heights[left], heights[right]);
        
        // Minimum of the 2 heights we move the pointer from there
        if(heights[left] < heights[right]){
            left++;
        } else {
            right--;
        }

        result = Math.max(result, area);
      }

      return result;
    }
}
