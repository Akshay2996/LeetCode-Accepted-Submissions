class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    // Stack -> Time - O(n) and Space - O(n)
    asteroidCollision(asteroids) {
        const stack = [];

        for(let a of asteroids){
            /**
             * A single incoming asteroid can destroy multiple asteroids on the stack.
             * You need a loop, not just a single comparison.
             * Collision will happen when 
             * top element of stack > 0 and a < 0
             * */
            while(stack && stack[stack.length - 1] > 0 && a < 0){
                // Collision will stop only when top element of stack + a >= 0
                const diff = stack[stack.length - 1] + a;
                
                if(diff < 0) {
                    stack.pop();
                } else if (diff > 0){
                    a = 0;
                } else {
                    stack.pop();
                    a = 0;
                }
            }

            if(a !== 0){
                stack.push(a);
            }
        }

        return stack;
    }
}
