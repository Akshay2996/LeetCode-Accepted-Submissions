class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // Bruteforce - O(n^2)
    maxProfit(prices) {
        let maxP = 0;
        
        for(let i = 0; i < prices.length; i++){
            let buy = prices[i];

            for(let j = i + 1; j < prices.length; j++){
                let sell = prices[j];
                maxP = Math.max(maxP, sell - buy);
            }
        }

        return maxP;
    }
}
