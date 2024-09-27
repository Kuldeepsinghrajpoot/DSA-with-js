import { link } from 'fs';
import { inspect } from 'util';

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertAtHead(data) {
        const newNode = new ListNode(data); // creating a new node
        newNode.next = this.head; // assigning the next value to the new node
        this.head = newNode; // assigning the new node to the head
    }

    insertAtTail(data) {
        if (this.head == null) {
            return this.insertAtHead(data);
        }
        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = new ListNode(data);

    }
    // todo when passing the head and data as argument then return is compulsory at the time
    insertAtEnd(head, x) {

        if (head === null) {
            head = new ListNode(x);
            return head;
        }

        let newNode = new ListNode(x);
        let temp = head;
        while (temp.next !== null) {
            temp = temp?.next;
        }

        temp.next = newNode;
    }

    display() {
        let result = '';
        let temp = this.head;
        while (temp !== null) {
            // console.log(temp?.data);
            result += temp.data + '->';
            temp = temp?.next;
        }
        console.log(result + 'null');
    }

    deleteAtHead() {
        if (this.head === null) {
            console.log('Linked list is empty here no have any node');
        }
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null
    }

    deleteAtTail() {
        if (this.head === null) {
            console.log('Linked list is empty here no have any node');
        }
        let temp = this.head;
        let prev = null;
        while (temp.next !== null) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
    }
    delete(data) {

        if (this.head === null) {
            console.log('Linked list is empty here no have any node');
        }
        let prev = null;
        let temp = this.head;

        while (temp?.data !== data) {
            if (temp === null) {
                console.log('data not found');
                return;
            }
            prev = temp;
            temp = temp?.next;
        }
        prev.next = temp?.next;
        temp.next = null;

    }

    insertAtPos(data, key) {
        if (this.head === null) {
            return this.insertAtHead(data);
        }

        let temp = this.head;
        let newNode = new ListNode(data);
        let current_pos = 0;
        while (current_pos !== key - 1) {
            temp = temp.next;
            current_pos++;
        }
        console.log('temp->', temp.next)
        newNode.next = temp.next;
        // temp after the new node
        console.log('temp first', temp)
        temp.next = newNode;
        console.log('temp second', temp)

    }

    deleteAtPos(key) {
        if (this.head === null) {
            console.log('Linked list is empty here no have any node');
        }
        let temp = this.head;
        let current_pos = 0;
        while (temp !== null && current_pos !== key - 1) {
            temp = temp.next;
            current_pos++;
        }
        if (!temp) {
            console.log('data not found');
            return
        }

        temp.next = temp.next.next;
        temp.next = null;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    sort() {
        if (this.head === null) {
            this.head = new ListNode(data);
        }

        let temp = this.head;
        while (temp.next !== null) {
            let temp2 = temp.next;
            while (temp2 !== null) {
                if (temp.data > temp2.data) {
                    let tempData = temp.data;
                    temp.data = temp2.data;
                    temp2.data = tempData;
                }
                temp2 = temp2.next;
            }
            temp = temp.next;

        }
    }
    deleteAlternateNode() {
        let temp = this.head;
        if (temp === null) {
            return;
        }

        while (temp !== null && temp.next !== null) {
            // Skip the next node
            temp.next = temp.next.next;

            // Move to the next node
            temp = temp.next;
        }
    }

    rotateLinkedList() {
        // rotating the linked list

        let temp = this.head;
        let prev = null;
        let current = this.head;
        let k = 2;
        let count = 0;
        while (count < k && current !== null) {
            prev = current;
            current = current.next;
            count++;
        }
        prev.next = null;
        let newHead = current;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = temp;
        this.head = newHead;

    }

}

const linkedList = new LinkedList();
linkedList.insertAtHead(5);
linkedList.insertAtHead(10);
linkedList.insertAtHead(15);
linkedList.insertAtHead(20);
linkedList.display(); // 20 15 10 5
/*
// todo: insertAtTail
linkedList.display(); // 51 11 21

// todo printing the memory reference of the linked list
// console.log("Memory Reference:", inspect(linkedList, { showHidden: true, depth: null }));
linkedList.insertAtPos(25, 2);
// console.log("Memory Reference:", inspect(linkedList, { showHidden: true, depth: null }));
// deletedAtHead

linkedList.display();
linkedList.deleteAtHead();
linkedList.display();

// deletedAtTail
linkedList.deleteAtTail();
linkedList.display();

// delete
linkedList.delete(10);
linkedList.display();

linkedList.deleteAtPos(3);
linkedList.display();

// reverse linkedlist
console.log("Memory Reference before reverse:", inspect(linkedList, { showHidden: true, depth: null }));

linkedList.reverse();
console.log("Memory Reference after reverse:", inspect(linkedList, { showHidden: true, depth: null }));

linkedList.display();

linkedList.sort();
*/
linkedList.deleteAlternateNode();
linkedList.display();