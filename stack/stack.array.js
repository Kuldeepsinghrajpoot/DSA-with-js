class Stack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        this.stack.push(data);
    }

    peek() {
        if (this.stack.length === 0) {
            return null;
        } else {
            return this.stack[0];
        }
    }

    pop() {
        if (this.stack.length === 0) {
            this.isEmpty();
        }
        this.stack.pop();
    }

    isEmpty() {
        if (this.stack.length === 0) {
            console.log("stack is empty");
        }
    }

    printStack() {
        for (let i of this.stack) {
            console.log(i);
        }
    }
    // length of the array

    length() {
        console.log(this.stack.length);
    }
}

// push
// pop
// length;
// peek;
// isEmpty
// printStack;

const s = new Stack();
s.push(5);
s.push(6);
s.push(7);
s.push(8);
s.push(9);

s.printStack();
// length of the stack

// s.length();
// s.isEmpty();
s.pop();

console.log("after printing the stack elements then showing the elments");
// after the pop elements should be return
s.printStack();
