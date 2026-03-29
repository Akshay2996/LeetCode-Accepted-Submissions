class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // Area formula = (j-i) * min(heights[i], heights[j])
    // Brute force - O(n^2)
    maxArea(heights) {
      const n = heights.length;
      let area = 0;
      for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
          area = Math.max(area, Math.min(heights[i], heights[j]) * (j-i));
        }
      }

      return area;
    }
}
