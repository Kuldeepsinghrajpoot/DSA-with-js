// this is a node for linked list
// every things is object
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class ListNode {
    constructor() {
        // initlize the linked list
        this.head = null;
    }

    // reverse the linked list
    insertElement(data) {
        // this function of  insertElements

        let reverseList = new Node(data);

        //console.log(`memory ${reverseList}`)
        if (!this.head) {
            this.head = reverseList;
            // create a single node
            return;
        }
        let currentNode = this.head;
        // Create a copy to traversal every single node one 
        // For the traversal every node
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = reverseList
    }

    print() {
        // printing elements of node

        if (!this.head) {
            console.log('Linked list is empty');
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    print() {
        // printing elements of node

        if (!this.head) {
            console.log('Linked list is empty');
            return;
        }

        let current = this.head;
        let output = ''; // Initialize an empty string to store the output

        while (current !== null) {
            output += current.data + ','; // Concatenate each data element with a space
            current = current.next;
        }

        console.log(output); // Print the concatenated string
    }
    // reverse linked list 

    reverseLinkedList() {
        let current = this.head;
        let prev = null; // Initialize a variable to keep track of the previous node
        let forward; // Declare a variable to keep track of the next node

        while (current !== null) { // Iterate through the entire linked list
            forward = current.next; // Store the next node
            current.next = prev; // Reverse the pointer of the current node

            prev = current; // Update prev to the current node
            current = forward; // Move to the next node
        }

        this.head = prev; // Update the head to point to the last node (which is now the first node)
    }
}


const object = new ListNode();
// insert elements in node 
object.insertElement(4)
object.insertElement(7)
object.insertElement(8)
object.insertElement(9)
object.insertElement(3)
object.insertElement(1)


// print elements of linked list

object.print()
// reversing linked list
object.reverseLinkedList();
console.log('print the reverser elements')
object.print()
