// delete a node
function Node(data) {
    return {
        data: data,
        next: null,
    }
}


function NodeList() {
    let head = null;

    // create a node 

    const insertAtHead = (data) => {
        // create a new node
        const newNode = Node(data)
        if (!head) {
            head = newNode;
            return
        }
        // create a copy of node;

        let temp = head;
        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = newNode
    }

    function display() {

        // create a display function
        let current = head;
        // have 
        let output = '';
        if (!current) {
            console.log('empty Linked list')
            return;
        }

        while (current !== null) {
            output += current.data + ',';
            current = current.next;
        }

        console.log(output)
    }

    // delete elements

    function deleteNode(data) {
        // providing the node number for deleting
        let current = head;

        if (current.next === null) {
            console.log('Linked list is empty here no have any node');
        }
        while (head && head.data === data) {
            head = head.next;
        }
        while (current && current.next !== null) {

            if (current?.next?.data === data) {
                current.next = current.next.next;
                // return;
            }
            current = current.next
        }
        console.log('data not found')

    }
    return {
        insertAtHead: insertAtHead,
        display: display,
        deleteNode: deleteNode
    }
}


const object = NodeList();
object.insertAtHead(17)
object.insertAtHead(27)
object.insertAtHead(37)
object.insertAtHead(47)
object.insertAtHead(57)

// printing elements of list;
object.display()

// delete the node if data exits;

object.deleteNode(7)
object.display()
