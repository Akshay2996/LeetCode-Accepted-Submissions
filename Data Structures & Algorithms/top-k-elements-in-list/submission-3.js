class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // MinHeap - O(nlogk)
        // Make a hashmap
        const count = {};
        for(const num of nums){
            count[num] = (count[num] || 0) + 1;
        }

        // Create a min-heap
        const heap = new MinPriorityQueue(x => x[1]);
        // heap will store [num, frequency]
        // Iterate n times
        for(const [num, frequency] of Object.entries(count)){
            heap.enqueue([num, frequency]);
            // Check if heap is greater than k dequeue it
            if(heap.size() > k) heap.dequeue();
        }

        // Dequeue all the elements from heap into the result array
        const result = [];
        // logk times
        for(let i=0; i<k; i++){
            const [num, frequency] = heap.dequeue();
            result.push(num);
        }
        return result;
    }
}
