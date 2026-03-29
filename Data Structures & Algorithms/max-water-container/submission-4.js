class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // Area formula = (j-i) * min(heights[i], heights[j])
    // 2 pointers - O(n)
    maxArea(heights) {
      const n = heights.length;
      let area = 0;
      let l = 0;
      let r = n-1;

      while(l<r){
        area = Math.max(area, (r-l) * Math.min(heights[l], heights[r]));
        if(heights[l] < heights[r]){
          l++
        } else {
          r--;
        }
      }

      return area;
    }
}
