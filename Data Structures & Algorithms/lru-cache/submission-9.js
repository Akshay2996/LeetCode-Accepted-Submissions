// Using hashmap without using doubly linked list using hasmap methods
// Time - O(1) and Space - O(n)
// Where start is LRU and end of the list (Map) is most recently used
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            const value = this.cache.get(key);
            // Remove the key
            this.cache.delete(key);
            // Append the key
            this.cache.set(key, value);
            
            return value;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            // Remove the key
            this.cache.delete(key);
        }

        // Append the key so that it becomes recently used
        this.cache.set(key, value);

        if(this.cache.size > this.cap){
            // Get the first key from the hashmap and remove it
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}
