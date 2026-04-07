class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // Binary Search -> Time - O(log(m*n)) or O(logm + logn)
    searchMatrix(matrix, target) {
        // 2 binary search is required here
        // First search over the rows, then search inside that row
        
        const rows = matrix.length;
        const cols = matrix[0].length;

        let top = 0;
        let bot = rows - 1;

        while(top <= bot){
            const row = top + Math.floor((bot - top) / 2);
            // target is greater than the middle row then
            if(target > matrix[row][cols - 1]){
                top = row + 1;
            }
            // If target is less than the middle row then
            else if(target < matrix[row][0]){
                bot = row - 1;
            }
            /** 
             * 2 cases
             * If number is found in the row
             * or number is not at all present in any row
             * */
            else {
                break;
            }
        }

        // Number is not at all present in any row
        if(!(top<=bot)){
            return false;
        }

        // The row in which element might be present
        const row = top + Math.floor((bot - top) / 2);
        let l = 0;
        let r = cols - 1;

        while(l <= r){
            const m = l + Math.floor((r - l) / 2);
            // If target is greater than the middle value in row then
            if(target > matrix[row][m]){
                l = m + 1;
            }
            // If target is lesser than the middle value in row then
            else if(target < matrix[row][m]){
                r = m - 1;
            } 
            // Number is found to be the middle value
            else {
                return true;
            }
        }

        return false;
    }
}
