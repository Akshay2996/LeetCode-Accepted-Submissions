class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // Staircase Search -> Time O(m+n) and Space O(1)
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;

        let r = 0;
        let c = n - 1;

        while(r < m && c >= 0){
            if(target < matrix[r][c]){
                c--;
            } else if(target > matrix[r][c]){
                r++;
            } else {
                return true;
            }
        }

        return false;
    }
}
