class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    // Stack -> Time - O(n) and Space - O(n)
    asteroidCollision(asteroids) {
        const stack = [];

        for(let a of asteroids){
            // Collision will happen when 
            // top element of stack > 0 and a < 0
            while(stack && stack[stack.length - 1] > 0 && a < 0){
                // Collision will stop only when top element of stack + a >= 0
                const diff = a + stack[stack.length - 1];

                if(diff > 0){
                    // Collision will stop
                    a = 0;
                } else if(diff < 0){
                    // Collision will continue
                    stack.pop();
                } else {
                    // Collision will stop but top element will be popped
                    a = 0;
                    stack.pop();
                }
            }

            if(a !== 0){
                stack.push(a);
            }
        }

        return stack;
    }
}
