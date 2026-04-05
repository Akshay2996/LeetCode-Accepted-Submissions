class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    // Stack -> Time - O(n) and Space - O(n)
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const res = new Array(n).fill(0);
        const stack = []; // Store in pairs: [temp, index]

        for(let i = 0; i < n; i++){
            const t = temperatures[i];

            // Loop only works when temp > the top of the stack element
            while(stack.length > 0 && stack[stack.length - 1][0] < t){
                const [stackTemp, stackIndex] = stack.pop();
                // Difference between the current index and the stack index of the popped item
                // Store in the res array
                res[stackIndex] = i - stackIndex;
            }

            stack.push([t, i]);
        }

        return res;
    }
}
