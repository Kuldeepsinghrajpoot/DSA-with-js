// Working on FIFO method those elements inserted and remove form the array and add the elements from the queue

function queue(maxSize = Infinity) {
    // Optional parameter maxSize for a fixed-size queue
    const q = [];

    function enQueue(data) {
        if (isFull()) {
            console.log("Queue is full. Cannot add more elements.");
            return q; // Return the current queue without adding the new element
        }
        q.push(data);
        return q;
    }
    // dequeue means remove the first elements from the queue
    function deQueue() {
        if (isEmpty()) {
            console.log("Queue is empty. Cannot dequeue.");
            return null; // Return null if there is nothing to dequeue
        }
        return q.shift();
    }

    function isFull() {
        return q.length >= maxSize; // Return true if the queue has reached maxSize
    }

    function isEmpty() {
        // Renaming isNull to isEmpty for clarity
        return q.length === 0; // Return true if queue is empty
    }

    function printQueue() {
        // Renaming isPrint to printQueue for clarity
        if (isEmpty()) {
            console.log("Queue is empty.");
        } else {
            for (let i of q) {
                console.log(i);
            }
        }
    }
    // removing the first elements from the queue;

// todo: unshift , work with the array if you have one array and append array at the first of the index then you need to use the unshift elements


    return {
        enQueue,
        deQueue,
        isFull,
        isEmpty,
        printQueue,
    };
}

const q = queue(3); // Example with a maxSize of 3
q.enQueue(5);
q.enQueue(7);
q.enQueue(9);
q.enQueue(11); // Should show "Queue is full" message

console.log("Queue elements:");
q.printQueue(); // Just call printQueue(), no need to log its result

console.log("After dequeue:");

q.deQueue(); // Remove one element from the queue
q.printQueue(); // Print the updated queue
