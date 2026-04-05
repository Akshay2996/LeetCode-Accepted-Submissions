class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    // Bruteforce -> Time - O(n^2) and Space - O(n)
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const res = new Array(n).fill(0);

        for(let i = 0; i < n; i++){
            let count = 1;
            let j = i + 1;

            while(j < n){
                if(temperatures[j] > temperatures[i]){
                    break;
                }
                
                count++;
                j++;
            }

            count = j === n ? 0 : count;
            res[i] = count;
        }

        return res;
    }
}
