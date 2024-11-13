class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper function to swap two elements
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Function to insert a value into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // Function to maintain the heap property from bottom to top
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    // Function to extract the minimum value from the heap
    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    // Function to maintain the heap property from top to bottom
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            if (smallest === index) break;
            this.swap(index, smallest);
            index = smallest;
        }
    }

    // Function to get the size of the heap
    size() {
        return this.heap.length;
    }
}

class Solution {
    // Function to return the minimum cost of connecting the ropes.
    minCost(arr) {
        const minHeap = new MinHeap();

        // Insert all rope lengths into the min-heap
        for (let rope of arr) {
            minHeap.insert(rope);
        }

        let totalCost = 0;

        // While there is more than one rope in the heap
        while (minHeap.size() > 1) {
            // Extract the two smallest ropes
            let first = minHeap.extractMin();
            let second = minHeap.extractMin();

            // Calculate the cost of connecting them
            let cost = first + second;
            totalCost += cost;

            // Insert the combined rope back into the heap
            minHeap.insert(cost);
        }

        return totalCost;
    }
}

// Example usage
let solution = new Solution();
console.log(solution.minCost([4, 3, 2, 6])); // Output: 29
