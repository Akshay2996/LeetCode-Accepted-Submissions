class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    // Iteration -> Time - O(n) and Space - O(1)
    plusOne(digits) {
        let carry = 1;
        let i = 0;
        // Reverse the array for easier calculation
        digits.reverse();

        while(carry){
            if(i < digits.length){
                if(digits[i] === 9){
                    digits[i] = 0;
                } else {
                    digits[i] += 1;
                    carry = 0;
                }
            } else {
                digits.push(carry);
                carry = 0;
            }

            i++;
        }

        digits.reverse();
        return digits;
    }
}
