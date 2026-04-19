class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */

    
    constructor(capacity) {
        this.data = new Array(capacity);
        this.size = 0;
        this.capacity = capacity
    }



    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.data[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.data[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size === this.capacity) {
            this.resize()
        }
        this.data[this.size] = n
        this.size++
    }

    /**
     * @returns {number}
     */
    popback() {
        const last = this.data[this.size - 1]
        this.size--
        return last 
    }

    /**
     * @returns {void}
     */
    resize() {
        const newData = new Array(this.capacity * 2);
        
        for (let i = 0; i < this.size; i++) {
            newData[i] = this.data[i];
        }

        this.data = newData;
        this.capacity = this.capacity * 2;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}
