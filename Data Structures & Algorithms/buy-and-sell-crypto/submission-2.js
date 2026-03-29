class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // Dynamic Programming -> Time - O(n), Space - O(1)
    maxProfit(prices) {
        let profit = 0;
        let minBuy = prices[0];

        for(let sell of prices){
            profit = Math.max(profit, sell - minBuy);
            minBuy = Math.min(sell, minBuy);
        }

        return profit;
    }
}
