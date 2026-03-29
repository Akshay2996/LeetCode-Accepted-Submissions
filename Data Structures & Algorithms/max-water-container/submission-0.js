class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // Brute force - O(n^2)
    maxArea(heights) {
        let result = 0;
        for(let i = 0; i<heights.length; i++){
            for(let j=i+1; j<heights.length; j++){
                const area = (j-i) * Math.min(heights[i], heights[j]);
                result = Math.max(result, area);
            }
        }

        return result;
    }
}
