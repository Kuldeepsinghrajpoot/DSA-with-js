// this is method of creating the SLL
const util = require('util');

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class ListNode {
    constructor() {
        this.head = null;
    }
    insertAtHead(data) {
        const newNode = new Node(data);
        // printing the reference of newNode;

      //  console.log(`newNode -->${newNode.next}, data->${newNode.data}`)
      //  console.log("Memory Reference:", util.inspect(newNode, { showHidden: false, depth: null }));

        if (!this.head) {
            // checking if linked list is empty or not is empty then assign to the head
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            // finding the last node of linked list
            current = current.next;
            // this behavior of prototype
        }
        // assigning the value to the last node
        current.next = newNode;
    }
    // here desplaying the element which is stored in LinkedList
    display() {
        let current = this.head;
        while (current !== null) {
            // console.log(current.data);

           // console.log("Memory Reference:", util.inspect(current, { showHidden: true, depth: null }));
           // every things stored as a object
           
           current = current.next;

        }
    }

    delete(){
        
    }

}


const method = new ListNode();
method.insertAtHead(5)
method.insertAtHead(1)
method.insertAtHead(7)
method.insertAtHead(8)
method.insertAtHead(9)
method.insertAtHead(4)
method.insertAtHead(13);
// printing the elements of method
method.display();

