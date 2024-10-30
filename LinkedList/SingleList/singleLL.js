
//  Single linked list
// this way is contructor and prototype 
let Node = function(data){
    this.data = data;
    this.next = null;
}

 let ListNode=function() {
        this.head = null;
}

ListNode.prototype.print=function() {
    let current = this.head;
    while (current !== null) {
        console.log(`${current.data}`);
        current = current.next;
    }
}

ListNode.prototype.insert = function(data){
    
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
        return
    }
    let current = this.head;
    while (current.next!==null) { 
        current = current.next;
    }
    current.next = newNode;
}


const object = new ListNode();
object.insert(15)
object.insert(52)
object.insert(54)
object.insert(56)
// print method of the linked list
object.print()

// second way

// function ListNode(){
//     this.head = null

//     this.insert=function(){
//         // write the method of insert and call via the object of this class
//     }
// }
