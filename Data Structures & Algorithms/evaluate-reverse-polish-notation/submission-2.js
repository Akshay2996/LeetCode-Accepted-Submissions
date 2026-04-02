class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    // Stack -> Time - O(n) and Space - O(n)
    evalRPN(tokens) {
        const stack = [];
        for(let c of tokens){
            if(c === "+"){
                stack.push(stack.pop() + stack.pop());
            }
            else if(c === "-"){
                const a = stack.pop();
                const b = stack.pop();

                stack.push(b - a);
            }
            else if(c === "*"){
                stack.push(stack.pop() * stack.pop());
            }
            else if(c === "/"){
                const a = stack.pop();
                const b = stack.pop();

                stack.push(Math.trunc(b / a));
            }
            else{
                stack.push(Number(c));
            }
        }

        return stack.pop();
    }
}
