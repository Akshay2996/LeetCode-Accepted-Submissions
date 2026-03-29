class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // 2-pointers -> Time - O(n), Space - O(1)
    // l = buy r = sell; l=0, r=1
    maxProfit(prices) {
        let profit = 0;
        let l = 0, r = 1;

        while(r < prices.length){
            if(prices[l] < prices[r]){
                profit = Math.max(profit, prices[r] - prices[l]);
            } else {
                l = r;
            }
            r++;
        }

        return profit;
    }
}
