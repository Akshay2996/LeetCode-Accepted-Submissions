class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // Stack and Hashmaps -> Time - O(n) and Space - O(n)
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ")": "(",
            "}": "{",
            "]": "[",
        }

        for(let c of s){
            // c is a close bracket then
            if(closeToOpen[c]){
                // Check if stack is not empty and 
                // the last element in stack is the opening bracket of the value of c
                if(stack.length > 0 && stack[stack.length-1] === closeToOpen[c]){
                    // pop the element from the stack
                    stack.pop();
                } else {
                    return false;
                }
            } 
            // c is a open bracket and needs to be pushed in stack
            else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
