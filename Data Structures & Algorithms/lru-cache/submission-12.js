// Use Doubly linked list for removing and inserting the nodes
// Use hashmap for caching and accessing the values

class Node {
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    // Create hashMap, left and right dummy nodes in doubly linked list
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();
        this.left = new Node(0,0);
        this.right = new Node(0,0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * Left = LRU and Right = Most recently used (Insert Item from here)
     */
    // Update left and right pointer in doubly linked list
    remove(node){
        const prev = node.prev;
        const next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    // Update 4 pointers left, right and the node that is being inserted
    insert(node){
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // If key is present then remove it and insert it again 
        // so that it becomes most recently used and return the value
        if(this.cache.has(key)){
            const node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
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
            this.remove(this.cache.get(key));
        }
        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if(this.cache.size > this.cap){
            const lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
