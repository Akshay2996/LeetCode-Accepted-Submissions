class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // Binary Search - O(nlogn) (Sorted array)
    twoSum(numbers, target) {
        // O(n)
        let left = 0;
        let right = numbers.length - 1;
        for(let i = 0; i <numbers.length; i++){
           let temp = target - numbers[i];
           let mid = left + Math.floor((right-left)/2);
           // O(logn)
           while(left<right){
            if(numbers[mid] === temp){
                return [i+1, mid+1];
            } else if(numbers[mid] < temp){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
           }
        }
        return [];
    }
}