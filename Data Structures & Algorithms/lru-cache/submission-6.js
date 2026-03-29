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
    // Store key: value pair in map
    get(key) {
        if(this.cache.has(key)){
            const value = this.cache.get(key);
            // Remove the key
            this.cache.delete(key);
            // Add the key again to the last in the map
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

        // append the key at the end
        this.cache.set(key,value);

        // Check the capacity and if it exceed delete the first key
        if(this.cache.size > this.cap){
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
       
    }
}
