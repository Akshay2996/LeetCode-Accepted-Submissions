class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    // Stack -> Time - O(n) and Space - O(n)
    asteroidCollision(asteroids) {
        const stack = [];

        for(let a of asteroids){
            while(stack && stack[stack.length-1] > 0 && a < 0){
               const diff = stack[stack.length - 1] + a;

               if(diff < 0){
                    stack.pop();
               } else if (diff > 0){
                    a = 0;
               } else {
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
