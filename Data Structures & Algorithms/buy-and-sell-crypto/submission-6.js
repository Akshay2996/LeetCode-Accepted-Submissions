class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // Sliding Window -> Time - O(n)
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let maxP = 0;

        while(r < prices.length){
            // If condition is true then
            if(prices[l] < prices[r]){
                maxP = Math.max(maxP, prices[r] - prices[l]);
            } 
            // Condition is false then move the left pointer
            // Move l to r - We found a cheaper buy price
            else {
                l = r;
            }
            r++;
        }

        return maxP;
    }
}
