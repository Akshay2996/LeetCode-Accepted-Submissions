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
                // When using floor division, -7 / 2 gives -4, but the correct RPN result is -3.
                // You must use truncation toward zero, Math.trunc() in JavaScript.
                stack.push(Math.trunc(b / a));
            }
            else{
                stack.push(Number(c));
            }
        }

        return stack.pop();
    }
}
