class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // Binary search - O(nlogn)
    twoSum(numbers, target) {
        for(let i=0; i<numbers.length; i++){
            let left = i+1;
            let right = numbers.length - 1;
            let temp = target - numbers[i];

            while(left <=right){
                let mid = left + Math.floor((right-left)/2);

                if(temp === numbers[mid]){
                    return [i+1, mid+1];
                } else if(numbers[mid] < temp){
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }
        }

        return [];
    }
}