// sorting linked list

function Node(data) {
    return {
        data: data,
        next: null,
    }
}
// ListNode;

function ListNode() {
    let head = null;
    let tail = null;

    function insertAtHead(data) {
        let newNode = Node(data);
        if (!head) {
            head = newNode;
            tail = newNode;
        }else{
            newNode.next = head;
            head = newNode
        }
    }

    function display() {
        if (!head) {
            console.log('Linked List is empty')
        }else{

            // display linkedlist
            let current = head;
            while (current) {
                console.log(current.data);
                current = current.next;
            }
        }
    }

    // sorting the linked list
    function sort(){

    }

    return {
        insertAtHead: insertAtHead,
        display: display,
        sort:sort
    }
}

// object of every elements
const object = ListNode();

object.insertAtHead(4);
object.insertAtHead(5);
object.insertAtHead(6);
object.insertAtHead(7);

// printing elements
object.display()

// sorting linked list

object.sort();