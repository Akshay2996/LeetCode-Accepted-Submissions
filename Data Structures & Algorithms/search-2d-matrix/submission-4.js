class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // Binary Search -> Time - O(log(m*n)) or O(logm + logn) and Space - O(1)
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let top = 0;
        let bot = rows - 1;

        while(top <= bot){
            const row = top + Math.floor((bot - top) / 2);

            if(target > matrix[row][cols - 1]){
                top = row + 1;
            } else if(target < matrix[row][0]){
                bot = row - 1;
            } else {
                break;
            }
        }

        if(!(top <= bot)){
            return false;
        }

        const row = top + Math.floor((bot - top) / 2);

        let l = 0;
        let r = cols - 1;

        while(l <= r){
            const m = l + Math.floor((r - l) / 2);

            if(target > matrix[row][m]){
                l = m + 1;
            } else if(target < matrix[row][m]){
                r = m - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
