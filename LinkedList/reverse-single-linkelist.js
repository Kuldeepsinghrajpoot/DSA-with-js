class singleLinnkedListReverse {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class singleLinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let newNode = new singleLinnkedListReverse(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp?.next;
            }

            temp.next = newNode;
        }
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
    }
}

let list = new singleLinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);
list.display();
list.reverse();
list.display();