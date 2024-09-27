'use strict'

const util = require('util');

// this class for creating every empty linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// main class this for linking the empty class to the every single linked list
class NodeList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtHead(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            console.log('newNode values-->', newNode.next = this.head);
            console.log('head values-->', this.head = newNode)
        }
    }
    display() {
        if (!this.head) {
            console.log('Linked list is empty')
            return
        }
        let current = this.head;
        let output = ' ';
        while (current !== null) {
            output += current.data + ' ';
            current = current.next;

            //console.log("Memory Reference:", util.inspect(current, { showHidden: false, depth: null }));

        }
        console.log(`Updated linked list ${output}`)
    }
    // insert at the Tail position 

    insertAtTail(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}

const object = new NodeList();

object.insertAtHead(17)
object.insertAtHead(741)
// object.insertAtHead(27)
// object.insertAtHead(37)
// object.insertAtHead(47)
// object.insertAtHead(57)
// object.insertAtHead(67)

// display all elements of linked list
object.display()

// insert at the tail position

object.insertAtTail(0);
object.display()