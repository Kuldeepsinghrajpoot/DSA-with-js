class NodeList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.head = null;
    }
    enQueue(data) {
        const node = new NodeList(data);
        if (this.head === null) {
            this.head = node;
            return;
        }

        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = node;
    }
    // dequeue -> removing the elements from the top of the queue;

    deQueue() {
        if (this.head === null) {
            console.log("empty dequeue");
            return;
        }
        // just like tail to remove the first elements from the dequeue linkedlist

        let temp = this.head;
        const tempData = temp.data;
        this.head = temp.next

        console.log("removing elements those data->", tempData);
    }
    printElement() {
        if (this.head === null) {
            console.log("Empty head");
            return;
        }
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

const LLQ = new LinkedListQueue();

LLQ.enQueue(5);
LLQ.enQueue(6);
LLQ.enQueue(7);
LLQ.enQueue(8);

LLQ.printElement();

// dequeu

LLQ.deQueue();
// printing elements when fire the dequeu function
console.log("after the dequeu function");
LLQ.printElement();
