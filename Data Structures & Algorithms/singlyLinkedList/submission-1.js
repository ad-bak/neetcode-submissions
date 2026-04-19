class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.head;
        let i = 0;

        while (curr) {
            if (i === index) return curr.val;
            curr = curr.next;
            i++;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const node = new ListNode(val);
        node.next = this.head;
        this.head = node;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const node = new ListNode(val);

        if (!this.head) {
            this.head = node;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = node;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (!this.head) return false;

        if (index === 0) {
            this.head = this.head.next;
            return true;
        }

        let curr = this.head;
        let i = 0;

        while (curr.next) {
            if (i === index - 1) {
                curr.next = curr.next.next;
                return true;
            }
            curr = curr.next;
            i++;
        }

        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const result = [];
        let curr = this.head;

        while (curr) {
            result.push(curr.val);
            curr = curr.next;
        }

        return result;
    }
}