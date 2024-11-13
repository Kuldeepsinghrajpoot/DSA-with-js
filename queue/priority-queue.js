class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // Add an element with a priority
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > queueElement.priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }
    }

    // Remove and return the element with the highest priority
    dequeue() {
        if (this.isEmpty()) {
            return "Priority Queue is empty";
        }
        return this.items.shift();
    }

    // Return the element with the highest priority without removing it
    peek() {
        if (this.isEmpty()) {
            return "Priority Queue is empty";
        }
        return this.items[0];
    }

    // Check if the priority queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the priority queue
    size() {
        return this.items.length;
    }
}

// Usage
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 2);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 3);
priorityQueue.enqueue("Task 3", 3);
priorityQueue.enqueue("Task 3", 3);
console.log(priorityQueue.dequeue()); // Output: { element: 'Task 2', priority: 1 }
console.log(priorityQueue.peek());    // Output: { element: 'Task 1', priority: 2 }
