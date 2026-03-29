class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // Bruteforce - O(n^2)
    maxProfit(prices) {
        let profit = 0;
        const n = prices.length;
        // prices[i] = buy; prices[j] = sell
        for(let i=0; i< n; i++){
            let buy = prices[i];
            for(let j=i+1; j<n; j++){
                let sell = prices[j];
                const value = prices[j] - prices[i];
                profit = Math.max(profit, value);
            }
        }
        return profit;
    }
}
