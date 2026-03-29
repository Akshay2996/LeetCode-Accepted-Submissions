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
    // When getting the key (get(key)) we remove it first
    // then add it to the back of the hashmap (Preserves order of insertion)
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
    // When calling the put method we first check if key already exist then
    // remove the key; either exists or do not exists we add the key at the back of the hashmap
    // check if capacity is exceed then remove the first key
    put(key, value) {
        if(this.cache.has(key)){
            // Remove the key
            this.cache.delete(key);
        }

        // Append the key regardless it exist or not
        this.cache.set(key, value);

        if(this.cache.size > this.cap){
            // Remove the first key
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}
