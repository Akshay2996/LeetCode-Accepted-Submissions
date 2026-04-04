class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    // Stack -> Time - O(n) and Space - O(n)
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0);
        const stack = []; // Store pairs: [temp, index]

        for(let i = 0; i < temperatures.length; i++){
            const t = temperatures[i];

            // Loop only works when temp > the top of the stack element
            while(stack.length > 0 && t > stack[stack.length - 1][0]){
                const [stackTemp, stackIndex] = stack.pop();
                res[stackIndex] = i - stackIndex;
            }

            stack.push([t, i]);
        } 

        return res;
    }
}
