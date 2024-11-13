// Create heap array with constructor
function MaxHeap() {
    this.heap = [];
}

// Helper method to get the index of the parent
MaxHeap.prototype.getParentIndex = function (i) {
    return Math.floor((i - 1) / 2);
};

// Helper method to get the index of the left child
MaxHeap.prototype.getLeftChildIndex = function (i) {
    return 2 * i + 1;
};

// Helper method to get the index of the right child
MaxHeap.prototype.getRightChildIndex = function (i) {
    return 2 * i + 2;
};

// Method to insert a new element into the heap
MaxHeap.prototype.insert = function (value) {
    this.heap.push(value); // Add the new element to the end of the heap
    this.heapifyUp(); // Restore the heap property by "heapifying up"
};

// Method to delete a node
MaxHeap.prototype.deleteNode = function (value) {
    const index = this.heap.indexOf(value);
    if (index === -1) return; // Element not found

    // Replace the node to be deleted with the last node
    const lastElement = this.heap.pop(); 
    if (index !== this.heap.length) {
        this.heap[index] = lastElement; // Move the last element to the deleted node's position
        this.heapifyDown(index); // Reheapify down
        this.heapifyUp(index);   // Reheapify up to ensure the heap property is maintained
    }
};

// Method to restore the heap property by "heapifying up"
MaxHeap.prototype.heapifyUp = function () {
    let index = this.heap.length - 1; // Start at the last element

    while (index > 0) {
        let parentIndex = this.getParentIndex(index);
        // If the current element is greater than its parent, swap them
        if (this.heap[index] > this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]; // Swap
            index = parentIndex; // Move up to the parent's index
        } else {
            break; // Heap property is restored
        }
    }
};

// Method to restore the heap property by "heapifying down"
MaxHeap.prototype.heapifyDown = function (index) {
    const left = this.getLeftChildIndex(index);
    const right = this.getRightChildIndex(index);
    let largest = index;
    const length = this.heap.length;

    // Correct comparison for the left child
    if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
    }

    // Correct comparison for the right child
    if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
    }

    if (index !== largest) {
        [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]; // Swap
        this.heapifyDown(largest); // Recursively heapify down
    }
};

// Method to view the heap
MaxHeap.prototype.printHeap = function () {
    console.log(this.heap);
};

// Method to sort the heap (in-place)
MaxHeap.prototype.sort = function () {
    const sortedArray = [];

    while (this.heap.length > 0) {
        // Swap the root with the last element
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];

        // Temporarily remove the last element (the maximum)
        sortedArray.push(this.heap.pop());
        
        // Reheapify the root
        this.heapifyDown(0);
    }

    // Restore the original heap size
    this.heap = sortedArray.reverse(); // Reverse to get sorted order
};

// Example usage
const maxHeap = new MaxHeap();
maxHeap.insert(50);
maxHeap.insert(30);
maxHeap.insert(40);
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(35);
maxHeap.insert(45);
maxHeap.insert(60);

maxHeap.printHeap(); // Output: [60, 30, 50, 10, 20, 35, 45, 40]
maxHeap.deleteNode(60);
maxHeap.printHeap(); // Output: [50, 30, 45, 10, 20, 35, 40]
maxHeap.deleteNode(45);
maxHeap.printHeap(); // Output: [50, 30, 40, 10, 20, 35]
maxHeap.sort();
maxHeap.printHeap(); // Output: [10, 20, 30, 35, 40, 50]
