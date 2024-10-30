class NodeList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.head = null;
    }

    push(data) {
        let node = new NodeList(data);
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

    pop() {
        if (this.head === null) {
            console.log("Empty linkedlist");
            return;
        }

        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = temp.next.next;
    }

    printSLL() {
        if (this.head === null) {
            console.log("Empty statck");
            return;
        }

        let temp = this.head;
        while (temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

const SLL = new StackLinkedList();
SLL.push(5);
SLL.push(6);
SLL.push(7);
SLL.push(8);

SLL.printSLL();
