// creating node using the function based 
const util = require('util');

function Node(data) {
    return {
        data: data,
        next: null
    };
}

// LinkedList function component
function LinkedList() {
    let head = null;

    const insert=(data)=> {
        const newNode = Node(data);
        if (!head) {
            head = newNode;
            return;
        }
        // here creating a node as it was inserted into the lastnode 
        let lastNode = head;
        while (lastNode.next!==null) {
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
    }

  
    function printList() {
        let current = head;
        let output='';

        while (current) {
        //  console.log("Memory Reference:", util.inspect(current, { showHidden: true, depth: null }));

            // console.log(current.data);
            output+=current.data+',';
            current = current.next;
        }
        console.log(output);
    }

    function reverse(){
        let current = head;
        let prev = null;
        let forword ;

        while (current!=null) {
            forword = current.next;
            current.next = prev;

            // swaping 

            prev = current;
            current = forword;
        }

        head= prev;
        // shift to new node into the head
    }

    return {
        insert: insert,
        printList: printList,
        reverse:reverse
    };
}

// Example usage:
const myList = LinkedList();
myList.insert(1);
myList.insert(2);
myList.printList();

// Reverse list
console.log('Reverse Linked List')
myList.reverse();
myList.printList();

